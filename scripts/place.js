// ---------- Static weather values (must match what is shown in the HTML) ----------
const temperature = 30; // °C
const windSpeed = 6;    // km/h

// ---------- Wind chill (metric: °C and km/h) ----------
// One-line function: returns the wind chill factor, rounded to 1 decimal place
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only call calculateWindChill when conditions are viable:
// temperature <= 10 °C AND wind speed > 4.8 km/h
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.querySelector("#wind-chill").textContent = windChill;

// ---------- Footer: current year and last modified date ----------
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;