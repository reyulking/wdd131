<<<<<<< HEAD

// ==================================
// TEMPLE ALBUM - JAVASCRIPT
// ==================================

// 1. DISPLAY CURRENT COPYRIGHT YEAR

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// 2. DISPLAY LAST MODIFIED DATE

const lastModified = document.lastModified;

document.querySelector("#lastModified").textContent =
    new Date(lastModified).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });


// 3. HAMBURGER MENU FUNCTIONALITY

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// 4. TEMPLE ALBUM FILTER FUNCTIONALITY

const filterLinks = document.querySelectorAll("[data-filter]");
const templeFigures = document.querySelectorAll(".temple-grid figure");

filterLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const selectedFilter = link.dataset.filter;

        templeFigures.forEach(function (figure) {

            const templeAge = figure.dataset.age;
            const templeSize = figure.dataset.size;

            if (
                selectedFilter === "old" ||
                selectedFilter === "new"
            ) {
                figure.hidden = templeAge !== selectedFilter;
            }

            else if (
                selectedFilter === "large" ||
                selectedFilter === "small"
            ) {
                figure.hidden = templeSize !== selectedFilter;
            }

        });

        filterLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        document.querySelector("#album").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 5. HOME LINK - SHOW ALL TEMPLES

document.querySelector(".navigation a[href='#home']")
    .addEventListener("click", function () {

        templeFigures.forEach(function (figure) {
            figure.hidden = false;
        });

        filterLinks.forEach(function (link) {
            link.classList.remove("active");
        });

        menuButton.textContent = "☰";
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });
=======

// ==================================
// TEMPLE ALBUM - JAVASCRIPT
// ==================================

// 1. DISPLAY CURRENT COPYRIGHT YEAR

const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// 2. DISPLAY LAST MODIFIED DATE

const lastModified = document.lastModified;

document.querySelector("#lastModified").textContent =
    new Date(lastModified).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });


// 3. HAMBURGER MENU FUNCTIONALITY

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// 4. TEMPLE ALBUM FILTER FUNCTIONALITY

const filterLinks = document.querySelectorAll("[data-filter]");
const templeFigures = document.querySelectorAll(".temple-grid figure");

filterLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const selectedFilter = link.dataset.filter;

        templeFigures.forEach(function (figure) {

            const templeAge = figure.dataset.age;
            const templeSize = figure.dataset.size;

            if (
                selectedFilter === "old" ||
                selectedFilter === "new"
            ) {
                figure.hidden = templeAge !== selectedFilter;
            }

            else if (
                selectedFilter === "large" ||
                selectedFilter === "small"
            ) {
                figure.hidden = templeSize !== selectedFilter;
            }

        });

        filterLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        document.querySelector("#album").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// 5. HOME LINK - SHOW ALL TEMPLES

document.querySelector(".navigation a[href='#home']")
    .addEventListener("click", function () {

        templeFigures.forEach(function (figure) {
            figure.hidden = false;
        });

        filterLinks.forEach(function (link) {
            link.classList.remove("active");
        });

        menuButton.textContent = "☰";
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });
>>>>>>> 5a98b88d2ffaca1aabb29ce54767921bc610a513
