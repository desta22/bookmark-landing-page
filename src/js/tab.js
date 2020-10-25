export default function Tab(tabs) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const tab = e.target;

            const all_tab = document.querySelectorAll('.tab');
            const all_panel = document.querySelectorAll('.panel');
            const panelId = tab.parentNode.id.replace(/\s*tab\s*/, 'panel');

            // remove all active
            all_tab.forEach((tab) => {
                tab.classList.remove('active')
            });
            all_panel.forEach((tab) => {
                tab.classList.remove('active')
            });

            tab.parentNode.classList.add('active');
            document.getElementById(panelId).classList.add('active');
            tab.focus();

        });
    })
}
