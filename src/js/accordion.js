import {slideUp, slideToggle, getSiblings} from './helpers'

export default function Accordion(all_accordions) {

    all_accordions.forEach((accordion) => {
        const triggers = accordion.querySelectorAll('.accordion-trigger');
        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {

                const accordion_trigger = e.target;
                const accordion_collapse = accordion_trigger.parentNode.getElementsByClassName('accordion-collapse')[0];
                const accordion_items = getSiblings(accordion_trigger.parentNode);

                slideToggle(accordion_collapse);
                accordion_trigger.classList.toggle('accordion-open');

                accordion_items.forEach((item) => {
                    item.querySelector('.accordion-trigger').classList.remove('accordion-open');
                    slideUp(item.querySelector('.accordion-collapse'));
                })
            });
        })
    })
}


