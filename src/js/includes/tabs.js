const tabs = () => {
    const tabsTriggerAll = document.querySelectorAll(".tabs-nav__button");
    const tabsSelectTriggerAll = document.querySelectorAll(".tabs-select__button");

    tabsTriggerAll?.forEach(item => {
        item.addEventListener("click", (e) => {
            const activePanelId = item.getAttribute("aria-controls");
            const activePanel = document.getElementById(activePanelId);
            const isActiveTab = item.getAttribute("aria-selected");

            if (!activePanel) return;

            if (isActiveTab === "true") return;

            toggleTabs(activePanel, item);
        });
    });

    tabsSelectTriggerAll?.forEach(item => {
        item.addEventListener("click", (e) => {
            const activePanelId = item.getAttribute("aria-controls");
            const activePanel = document.getElementById(activePanelId);
            const isActiveTab = item.getAttribute("aria-selected");
            const tabsSelectToggle = item.closest('.tabs-select').querySelector('.tabs-select__toggle');
            const tabsSelectToggleTitle = item.closest('.tabs-select').querySelector('.tabs-select__toggle-title');
            const tabsSelectDropdown = item.closest('.tabs-select').querySelector('.tabs-select__dropdown');

            if (!activePanel) return;

            if (isActiveTab === "true") return;
            
            tabsSelectToggle.setAttribute("aria-expanded", false);
            tabsSelectDropdown.setAttribute("aria-hidden", true);
            tabsSelectToggleTitle.innerHTML = item.innerHTML;

            toggleTabs(activePanel, item);
        });
    });

    function toggleTabs(panelToActivate, activeButton) {
        const activePanelIsOpened = activeButton.getAttribute("aria-selected");

        if (activePanelIsOpened === "true") {
            activeButton.setAttribute("aria-selected", false);
            panelToActivate.setAttribute("aria-hidden", true);
        } else {
            const tabsTriggerAll = activeButton.closest('.tabs-nav')?.querySelectorAll(".tabs-nav__button");
            const tabsSelectTriggerAll = activeButton.closest('.tabs-select__list')?.querySelectorAll(".tabs-select__button");
            const panelAll = panelToActivate.closest('.tabs-content').querySelectorAll(".tabs-panel");
            
            tabsTriggerAll?.forEach(item => {
                item.setAttribute("aria-selected", false);
            });

            tabsSelectTriggerAll?.forEach(item => {
                item.setAttribute("aria-selected", false);
            });

            panelAll?.forEach(item => {
                item.setAttribute("aria-hidden", true);
            });

            activeButton.setAttribute("aria-selected", true);

            panelToActivate.setAttribute("aria-hidden", false);
        }
    }
}

export default tabs;