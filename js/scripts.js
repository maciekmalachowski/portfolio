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

// Typing effect in intuduction
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

// Load json translation depending on your choice
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
            changeLanguage();
        } 
        catch (error) {
            console.error('Error loading translations:', error);
        }
    }

// Change text translations
    function changeLanguage() {
        // introduction
        const myNameIs = document.querySelector('.myNameIs');
        const desc = document.querySelector('.landingDescription');
        myNameIs.textContent = translations.landingPage.myNameIs;
        desc.textContent = translations.landingPage.description;

        // navbar
        const navbarHome = document.querySelector('.navbarHome');
        const navbarEducation = document.querySelector('.navbarEducation');
        const navbarSkills = document.querySelector('.navbarSkills');
        const navbarProjects = document.querySelector('.navbarProjects');
        const navbarContact = document.querySelector('.navbarContact');
        navbarHome.textContent = translations.navbar.home;
        navbarEducation.textContent = translations.navbar.education; 
        navbarSkills.textContent = translations.navbar.skills; 
        navbarProjects.textContent = translations.navbar.projects; 
        navbarContact.textContent = translations.navbar.contact; 

        // section main titles
        const educationTitle = document.querySelector('.educationTitle');
        const skillsTitle = document.querySelector('.skillsTitle');
        const projectsTitle = document.querySelector('.projectsTitle');
        const contactTitle = document.querySelector('.contactTitle');
        educationTitle.textContent = translations.education.title; 
        skillsTitle.textContent = translations.skills.title; 
        projectsTitle.textContent = translations.projects.title; 
        contactTitle.textContent = translations.contact.title; 
        
        // education1
        const zseTitle = document.querySelector('.zseTitle');
        const zseParagraph1 = document.querySelector('.zseParagraph1');
        const zseParagraph2 = document.querySelector('.zseParagraph2');
        zseTitle.textContent = translations.educationItems.zse.title; 
        zseParagraph1.innerHTML = translations.educationItems.zse.paragraph1; 
        zseParagraph2.innerHTML = translations.educationItems.zse.paragraph2; 

        // education2
        const ugName = document.querySelector('.ugName');
        const ugTitle = document.querySelector('.ugTitle');
        const ugParagraph1 = document.querySelector('.ugParagraph1');
        const ugParagraph2 = document.querySelector('.ugParagraph2');
        ugName.textContent = translations.educationItems.ug.name;
        ugTitle.textContent = translations.educationItems.ug.title;
        ugParagraph1.innerHTML = translations.educationItems.ug.paragraph1;
        ugParagraph2.innerHTML = translations.educationItems.ug.paragraph2;

        // education3
        const mljarTitle = document.querySelector('.mljarTitle');
        const mljarParagraph1 = document.querySelector('.mljarParagraph1');
        const mljarParagraph2 = document.querySelector('.mljarParagraph2');
        mljarTitle.textContent = translations.educationItems.mljar.title; 
        mljarParagraph1.innerHTML = translations.educationItems.mljar.paragraph1; 
        mljarParagraph2.innerHTML = translations.educationItems.mljar.paragraph2; 

        // skills
        const commonUse = document.querySelector('.commonUse');
        const hadContact = document.querySelector('.hadContact');
        commonUse.textContent = translations.skills.commonUse; 
        hadContact.textContent = translations.skills.hadContact; 

        // project1
        const smart_mailer_p1 = document.querySelector('.smart_mailer_p1');
        const smart_mailer_p3 = document.querySelector('.smart_mailer_p3');
        const smart_mailer_p2 = document.querySelector('.smart_mailer_p2');
        smart_mailer_p1.innerHTML = translations.projectsItems.smart_mailer.paragraph1; 
        smart_mailer_p2.innerHTML = translations.projectsItems.smart_mailer.paragraph2;
        smart_mailer_p3.innerHTML = translations.projectsItems.smart_mailer.paragraph3;

        // project2
        const docs_ai_chatbot_p1 = document.querySelector('.docs_ai_chatbot_p1');
        const docs_ai_chatbot_p2 = document.querySelector('.docs_ai_chatbot_p2');
        docs_ai_chatbot_p1.innerHTML = translations.projectsItems.docs_ai_chatbot.paragraph1; 
        docs_ai_chatbot_p2.innerHTML = translations.projectsItems.docs_ai_chatbot.paragraph2;

        // project3
        const crypto_charts_site_p1 = document.querySelector('.crypto_charts_site_p1');
        const crypto_charts_site_p2 = document.querySelector('.crypto_charts_site_p2');
        const crypto_charts_site_p3 = document.querySelector('.crypto_charts_site_p3');
        crypto_charts_site_p1.innerHTML = translations.projectsItems.crypto_charts_site.paragraph1; 
        crypto_charts_site_p2.innerHTML = translations.projectsItems.crypto_charts_site.paragraph2;
        crypto_charts_site_p3.innerHTML = translations.projectsItems.crypto_charts_site.paragraph3; 

        // project4
        const spotify_playlist_downloader_p1 = document.querySelector('.spotify_playlist_downloader_p1');
        const spotify_playlist_downloader_p2 = document.querySelector('.spotify_playlist_downloader_p2');
        spotify_playlist_downloader_p1.innerHTML = translations.projectsItems.spotify_playlist_downloader.paragraph1;
        spotify_playlist_downloader_p2.innerHTML = translations.projectsItems.spotify_playlist_downloader.paragraph2;

        // project5
        const ml_alogorithm_comparison_p1 = document.querySelector('.ml_alogorithm_comparison_p1');
        const ml_alogorithm_comparison_p2 = document.querySelector('.ml_alogorithm_comparison_p2');
        ml_alogorithm_comparison_p1.innerHTML = translations.projectsItems.ml_alogorithm_comparison.paragraph1; 
        ml_alogorithm_comparison_p2.innerHTML = translations.projectsItems.ml_alogorithm_comparison.paragraph2;
        
        // close buttons
        for (let i = 1; i <= 3; i++) {
            const close = document.querySelector(`.close${i}`);
            close.textContent = translations.close;
        }

        // check out buttons
        for (let i = 1; i <= 5; i++) {
            const check = document.querySelector(`.check${i}`);
            check.textContent = translations.check;
        }
    }

// custom select class
class DynamicSelect {
    constructor(element, options = {}) {
        let defaults = {
            placeholder: 'Select an option',
            columns: 1,
            name: '',
            width: '',
            height: '',
            data: [],
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
// set default translation option
loadTranslations('pl');
document.querySelectorAll('[data-dynamic-select]').forEach(select => new DynamicSelect(select));
});
