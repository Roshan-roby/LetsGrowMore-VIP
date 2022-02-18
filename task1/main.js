function addLists(){
    var shell = document.createElement("div");
    shell.className = "shell";
    document.getElementById("items").appendChild(shell);
    var addList = document.createElement("p");
    addList.className = "item";
    addList.innerHTML = document.getElementById("inputText").value;
    shell.appendChild(addList);
    //Crossing button
    var cutIcon = document.createElement("button");
    cutIcon.innerHTML = "✓";
    cutIcon.className = "cutIcon";
    shell.appendChild(cutIcon);
    var cross = document.getElementsByClassName("cutIcon");
    var j;
    for(j=0;j<cross.length;j++){
        cross[j].onclick = function(){
            var cut = this.parentElement;
            var subdiv = cut.children[0];
            subdiv.style.textDecoration = "line-through";
        }
    }
    //Closing button
    var doneIcon = document.createElement("button");
    doneIcon.innerHTML = "✘"; //HTML code for cross mark
    doneIcon.className = "doneIcon";
    shell.appendChild(doneIcon);
    var close = document.getElementsByClassName("doneIcon");
    var i;
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var enddiv = this.parentElement;
            enddiv.style.display = "none";
        }
    }
    document.getElementById("inputText").value="";
}