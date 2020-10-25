// Tabs
const tab = document.querySelectorAll('.tab');
import Tab from './tab';
Tab(tab);

// Accordion
const accordion = document.querySelectorAll('.accordion');
import Accordion from './accordion';
Accordion(accordion);


// Nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('.site-header');
    const trigger = document.querySelectorAll('.js__toggle_nav');

    for (let i = 0; i < trigger.length; i++) {
        trigger[i].onclick = function(e) {
            e.preventDefault();
            element.classList.toggle('open');
        }
    }
});

// Contact form
const form = document.getElementById('contact_form')
import contactFrom from './form';
contactFrom(form);


