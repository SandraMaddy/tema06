const table = document.getElementById("myTable");
const cells = table.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
  const value = cells[i].textContent;
  console.log(`Valoarea celulei ${i+1} este ${value}`);
}