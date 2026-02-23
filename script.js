function insert_Row() {

    // table ko pakdo
    let table = document.getElementById("sampleTable");

    // top pe new row add karo
    let row = table.insertRow(0);

    // 2 cells banao
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // text daalo
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}