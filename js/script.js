```javascript
/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId, button) {

    // Esconde todas as páginas
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Remove active de todos os botões
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    // Mostra a página selecionada
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Ativa o botão selecionado
    if (button) {
        button.classList.add("active");
    }


    // Atualiza título
    const title = document.getElementById("page-title");
    const description = document.getElementById("page-description");


    const pageInfo = {

        functions: {
            title: "Functions",
            description: "Configure your functions"
        },

        aimbot: {
            title: "Aimbot",
            description: "Aimbot configuration"
        },

        visuals: {
            title: "Visuals",
            description: "Visual configuration"
        },

        keybinds: {
            title: "Keybinds",
            description: "Configure your keyboard shortcuts"
        },

        settings: {
            title: "Settings",
            description: "Application settings"
        },

        information: {
            title: "Information",
            description: "Account and application information"
        }

    };


    if (pageInfo[pageId]) {

        title.textContent = pageInfo[pageId].title;
        description.textContent = pageInfo[pageId].description;

    }

}


/* =========================
   CHECKBOX
========================= */

function toggleCheckbox(element) {

    element.classList.toggle("active");

    if (element.classList.contains("active")) {

        element.textContent = "×";

    } else {

        element.textContent = "";

    }

}


/* =========================
   DROPDOWN
========================= */

function toggleDropdown(element) {

    // Fecha outros dropdowns
    document.querySelectorAll(".select-box").forEach(select => {

        if (select !== element) {
            select.classList.remove("open");
        }

    });


    // Abre/fecha o atual
    element.classList.toggle("open");

}


/* =========================
   SELECT OPTION
========================= */

function selectOption(option) {

    const selectBox = option.closest(".select-box");

    const selectedText = selectBox.querySelector("span");

    selectedText.textContent = option.textContent;

    selectBox.classList.remove("open");

}


/* =========================
   FECHAR DROPDOWN
   CLICANDO FORA
========================= */

document.addEventListener("click", function(event) {

    const selectBoxes = document.querySelectorAll(".select-box");

    selectBoxes.forEach(select => {

        if (!select.contains(event.target)) {

            select.classList.remove("open");

        }

    });

});


/* =========================
   SLIDER FOV
========================= */

const fovSlider = document.getElementById("fov-slider");
const fovValue = document.getElementById("fov-value");


if (fovSlider && fovValue) {

    fovSlider.addEventListener("input", function() {

        fovValue.textContent = this.value;

    });

}


/* =========================
   KEYBINDS
========================= */

document.querySelectorAll(".keybind button").forEach(button => {

    button.addEventListener("click", function() {

        const originalText = this.textContent;

        this.textContent = "...";

        this.style.borderColor = "#ff1010";
        this.style.color = "#ffffff";

        const handleKey = (event) => {

            event.preventDefault();

            button.textContent = event.key.toUpperCase();

            button.style.borderColor = "";
            button.style.color = "";

            document.removeEventListener("keydown", handleKey);

        };

        document.addEventListener("keydown", handleKey);

    });

});
```
