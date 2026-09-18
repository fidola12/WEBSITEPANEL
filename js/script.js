function showPage(pageId, button) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}


/* CHECKBOXES */

document.querySelectorAll(".checkbox").forEach(checkbox => {

    checkbox.addEventListener("click", function() {
        this.classList.toggle("active");
    });

});


/* DROPDOWNS */

function toggleDropdown(button) {

    const dropdown = button.parentElement;

    document.querySelectorAll(".dropdown").forEach(item => {

        if (item !== dropdown) {
            item.classList.remove("open");
        }

    });

    dropdown.classList.toggle("open");
}


function selectOption(option) {

    const dropdown = option.closest(".dropdown");

    const button =
        dropdown.querySelector(".drop-button span:first-child");

    button.textContent = option.textContent.trim();

    dropdown.querySelectorAll(".drop-option").forEach(item => {
        item.classList.remove("selected");
    });

    option.classList.add("selected");

    dropdown.classList.remove("open");
}
