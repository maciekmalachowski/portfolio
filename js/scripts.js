window.addEventListener('DOMContentLoaded', event => {

// Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

// Shrink the navbar 
    navbarShrink();

// Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

//Typing effect
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        
    };

// Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let translations = {};

    async function loadTranslations(lang) {
        try {
            const response = await fetch(`assets/translations/${lang}.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            translations = await response.json();
            console.log('Translations loaded for', lang, ':', translations);
            // Change the language immediately after loading
            changeLanguage(lang);
        } 
        catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    function changeLanguage(lang) {
        // Update the <title> tag
        document.title = translations.title || 'Welcome';

        // Update the header text
        const header = document.querySelector('h1');
        if (header) {
            header.textContent = translations.header || 'Welcome';
        }
    }
class DynamicSelect {

    constructor(element, options = {}) {
        let defaults = {
            placeholder: 'Select an option',
            columns: 1,
            name: '',
            width: '',
            height: '',
            data: [],
            // Add the onChange function with logging here
            onChange: function(value) {
                loadTranslations(value);
            }
        };
        this.options = Object.assign(defaults, options);
        this.selectElement = typeof element === 'string' ? document.querySelector(element) : element;
        
        for(const prop in this.selectElement.dataset) {
            if (this.options[prop] !== undefined) {
                this.options[prop] = this.selectElement.dataset[prop];
            }
        }

        this.name = this.selectElement.getAttribute('name') ? this.selectElement.getAttribute('name') : 'dynamic-select-' + Math.floor(Math.random() * 1000000);
        
        if (!this.options.data.length) {
            let options = this.selectElement.querySelectorAll('option');
            for (let i = 0; i < options.length; i++) {
                this.options.data.push({
                    value: options[i].value,
                    text: options[i].innerHTML,
                    img: options[i].getAttribute('data-img'),
                    selected: options[i].selected,
                    html: options[i].getAttribute('data-html'),
                    imgWidth: options[i].getAttribute('data-img-width'),
                    imgHeight: options[i].getAttribute('data-img-height')
                });
            }
        }
        
        this.element = this._template();
        this.selectElement.replaceWith(this.element);
        this._updateSelected();
        this._eventHandlers();
    }

    _template() {
        let optionsHTML = '';
        for (let i = 0; i < this.data.length; i++) {
            let optionWidth = 100 / this.columns;
            let optionContent = '';
            if (this.data[i].html) {
                optionContent = this.data[i].html;
            } else {
                optionContent = `
                    ${this.data[i].img ? `<img src="${this.data[i].img}" alt="${this.data[i].text}" class="${this.data[i].imgWidth && this.data[i].imgHeight ? 'dynamic-size' : ''}" style="${this.data[i].imgWidth ? 'width:' + this.data[i].imgWidth + ';' : ''}${this.data[i].imgHeight ? 'height:' + this.data[i].imgHeight + ';' : ''}">` : ''}
                    ${this.data[i].text ? '<span class="dynamic-select-option-text">' + this.data[i].text + '</span>' : ''}
                `;
            }
            optionsHTML += `
                <div class="dynamic-select-option${this.data[i].value == this.selectedValue ? ' dynamic-select-selected' : ''}${this.data[i].text || this.data[i].html ? '' : ' dynamic-select-no-text'}" data-value="${this.data[i].value}" style="width:${optionWidth}%;${this.height ? 'height:' + this.height + ';' : ''}">
                    ${optionContent}
                </div>
            `;
        }
        
        let template = `
            <div class="dynamic-select ${this.name}"${this.selectElement.id ? ' id="' + this.selectElement.id + '"' : ''} style="${this.width ? 'width:' + this.width + ';' : ''}${this.height ? 'height:' + this.height + ';' : ''}">
                <input type="hidden" name="${this.name}" value="${this.selectedValue}">
                <div class="dynamic-select-header" style="${this.width ? 'width:' + this.width + ';' : ''}${this.height ? 'height:' + this.height + ';' : ''}"><span class="dynamic-select-header-placeholder">${this.placeholder}</span></div>
                <div class="dynamic-select-options" style="${this.options.dropdownWidth ? 'width:' + this.options.dropdownWidth + ';' : ''}${this.options.dropdownHeight ? 'height:' + this.options.dropdownHeight + ';' : ''}">${optionsHTML}</div>
            </div>
        `;
        
        let element = document.createElement('div');
        element.innerHTML = template;
        return element;
    }

    _eventHandlers() {
        this.element.querySelectorAll('.dynamic-select-option').forEach(option => {
            option.onclick = () => {
                this.element.querySelectorAll('.dynamic-select-selected').forEach(selected => selected.classList.remove('dynamic-select-selected'));
                option.classList.add('dynamic-select-selected');
                this.element.querySelector('.dynamic-select-header').innerHTML = option.innerHTML;
                this.element.querySelector('input').value = option.getAttribute('data-value');
                this.data.forEach(data => data.selected = false);
                this.data.filter(data => data.value == option.getAttribute('data-value'))[0].selected = true;
                this.element.querySelector('.dynamic-select-header').classList.remove('dynamic-select-header-active');
                this.options.onChange(option.getAttribute('data-value'), option.querySelector('.dynamic-select-option-text') ? option.querySelector('.dynamic-select-option-text').innerHTML : '', option);
            };
        });
        
        this.element.querySelector('.dynamic-select-header').onclick = () => {
            this.element.querySelector('.dynamic-select-header').classList.toggle('dynamic-select-header-active');
        };
        
        if (this.selectElement.id && document.querySelector('label[for="' + this.selectElement.id + '"]')) {
            document.querySelector('label[for="' + this.selectElement.id + '"]').onclick = () => {
                this.element.querySelector('.dynamic-select-header').classList.toggle('dynamic-select-header-active');
            };
        }
        
        document.addEventListener('click', event => {
            if (!event.target.closest('.' + this.name) && !event.target.closest('label[for="' + this.selectElement.id + '"]')) {
                this.element.querySelector('.dynamic-select-header').classList.remove('dynamic-select-header-active');
            }
        });
    }

    _updateSelected() {
        if (this.selectedValue) {
            this.element.querySelector('.dynamic-select-header').innerHTML = this.element.querySelector('.dynamic-select-selected').innerHTML;
        }
    }

    get selectedValue() {
        let selected = this.data.filter(option => option.selected);
        selected = selected.length ? selected[0].value : '';
        return selected;
    }

    set data(value) {
        this.options.data = value;
    }

    get data() {
        return this.options.data;
    }

    set selectElement(value) {
        this.options.selectElement = value;
    }

    get selectElement() {
        return this.options.selectElement;
    }

    set element(value) {
        this.options.element = value;
    }

    get element() {
        return this.options.element;
    }

    set placeholder(value) {
        this.options.placeholder = value;
    }

    get placeholder() {
        return this.options.placeholder;
    }

    set columns(value) {
        this.options.columns = value;
    }

    get columns() {
        return this.options.columns;
    }

    set name(value) {
        this.options.name = value;
    }

    get name() {
        return this.options.name;
    }

    set width(value) {
        this.options.width = value;
    }

    get width() {
        return this.options.width;
    }

    set height(value) {
        this.options.height = value;
    }

    get height() {
        return this.options.height;
    }

}
loadTranslations('pl');
document.querySelectorAll('[data-dynamic-select]').forEach(select => new DynamicSelect(select));
});
