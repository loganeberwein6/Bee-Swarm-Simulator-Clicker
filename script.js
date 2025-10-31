let pollen = 0;
let pollenPerClick = 1;
document.getElementById('clicker').addEventListener('click', () => {
    pollen += 1
});
let pollenText = document.getElementById("pollen");
pollenText.textContent = pollen;