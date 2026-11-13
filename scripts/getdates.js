const year = document.querySelector("#currentyear");
const modified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}
if (modified) {
    modified.textContent = `Last Modification: ${document.lastModified}`;
}