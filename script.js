document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });

        const selectedTab = document.getElementById(tabId);
        const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);

        if (selectedTab) {
            selectedTab.classList.add('active');
        }
        if (selectedButton) {
            selectedButton.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    // Activate the first tab by default
    activateTab('info');
});