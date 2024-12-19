const fileInput = document.getElementById("fileInput");
const tableBody = document.getElementById("productTableBody");
const tablazat = document.getElementById("tabla")
const file = document.getElementById("file-div")

// Fájl kiválasztása és feldolgozása
fileInput.addEventListener("change", event => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const jsonData = JSON.parse(e.target.result);
                updateTable(jsonData);
            } catch (error) {
                alert("Hiba: Nem megfelelő JSON formátum.");
            }
        };
        reader.readAsText(file);
    }
});

// Táblázat frissítése
function updateTable(data) {
    tableBody.innerHTML = ""; // Táblázat kiürítése
    tablazat.classList.remove("hidden")
    file.classList.add("hidden")
    data.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.Név}</td>
            <td>${product.Méret}</td>
            <td>${product.Szín}</td>
            <td>${product.Mennyiség}</td>
            <td>${product.Darab_ár} Ft</td>
        `;
        tableBody.appendChild(row);
    });
}

//táblázat megjelenítése/elrejtése
function tablazat_lathatosag(file){
    if (file.files.length == 0) {
        console.log("nincs file")
    } else {
        console.log("van fájl")
    }
}