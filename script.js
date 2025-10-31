let pollen = 0;
let pollenPerClick = 1;
document.getElementById('clicker').addEventListener('click', () => {
    pollen += 1
    document.getElementById("pollen").textContent = pollen;
});