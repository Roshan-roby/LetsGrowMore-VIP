
function show(){
    if((document.getElementById("input1").value.length == 0) || (document.getElementById("input2").value.length == 0) || (document.getElementById("input3").value.length == 0)){
        alert("Fill all details");
    }
    else{
        outerTable = document.createElement("table");
        document.getElementById("tableItems").appendChild(outerTable);

        tableRow = document.createElement("tr");
        outerTable.appendChild(tableRow);

        tableDataCellOne = document.createElement("td");
        tableDataCellOne.innerHTML = document.getElementById("input1").value;
        tableRow.appendChild(tableDataCellOne);
        anchorTag = document.createElement("a");
        anchorTag.href = document.getElementById("input3").value;
        anchorTag.innerHTML = document.getElementById("input3").value;
        tableDataCellOne.appendChild(anchorTag);

        tableDataCellTwo = document.createElement("td");
        tableRow.appendChild(tableDataCellTwo);
        imageTag = document.createElement("img");
        imageTag.src = document.getElementById("input2").value;
        tableDataCellTwo.appendChild(imageTag);
  
    } 
}
