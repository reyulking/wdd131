// 1. Increment the review counter in localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.querySelector("#reviewCount").textContent = reviewCount;

// 2. Show what the user submitted (read from the URL query string)
const params = new URLSearchParams(window.location.search);
const summary = document.querySelector("#summary");

const rows = [
  ["Product ID", params.get("productName")],
  ["Rating", params.get("rating") ? "★".repeat(Number(params.get("rating"))) + " (" + params.get("rating") + "/5)" : null],
  ["Installed", params.get("installDate")],
  ["Useful features", params.getAll("features").join(", ")],
  ["Review", params.get("review")],
  ["Name", params.get("userName")]
];

rows.forEach(([label, value]) => {
  if (!value) return; // skip empty optional fields
  const dt = document.createElement("dt");
  dt.textContent = label;
  const dd = document.createElement("dd");
  dd.textContent = value; // textContent keeps user input safe
  summary.append(dt, dd);
});

// 3. Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
