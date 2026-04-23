// CALENDARIO
const days = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

const dates = [
    ['','','','1','2','3','4'],
    ['5','6','7','8','9','10','11'],
    ['12','13','14','15','16','17','18'],
    ['19','20','21','22','23','24','25'],
    ['26','27','28','29','30','31','']
];

const table = document.getElementById('calendar-table');

let html = "<tr>";
days.forEach(d => html += `<th>${d}</th>`);
html += "</tr>";

dates.forEach(week => {
    html += "<tr>";
    week.forEach(d => html += `<td>${d}</td>`);
    html += "</tr>";
});

table.innerHTML = html;


// BOTÓN MODO OSCURO
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});