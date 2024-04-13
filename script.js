document.getElementById("h1").addEventListener("click", addh1tag);
document.getElementById("p").addEventListener("click", addptag);
document.getElementById("li").addEventListener("click", addlitag);

function addh1tag() {
    var h1 = document.createElement("h1");
    let text = prompt("What do you want to pass in the h1 tag?");
    let textnode = document.createTextNode(text); 
    h1.appendChild(textnode);
    document.body.appendChild(h1);
}

function addptag() {
    var p = document.createElement("p");
    let text = prompt("What do you want to pass in the p tag?");
    let textnode = document.createTextNode(text); 
    p.appendChild(textnode);
    document.body.appendChild(p);
}

function addlitag() {
    var li = document.createElement("li");
    let text = prompt("What do you want to pass in the li tag?");
    let textnode = document.createTextNode(text); 
    li.appendChild(textnode);
    document.body.appendChild(li);
}
