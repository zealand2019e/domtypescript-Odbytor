//Her skal du skrive din typescriptkode

let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

if(myElement.hasAttribute("class"))
{
    console.log("Element has class atribute")

    if(myElement.getAttribute("class")=="unsundt")
    {
        myElement.setAttribute("class","sundt");
    }
}

document.getElementById("3").innerHTML = "Dunska Kapusta";
console.log(document.getElementsByTagName("h1").length);
//document.getElementById("3").classList.replace("sundt","Class1");
document.getElementById("1").setAttribute("hidden","true");

for(let i=0;i<2;i++)
{
    let j = 0;
    document.getElementsByClassName("sundt")[j].classList.replace("sundt","Andrzej");
}



var elementX = document.getElementById("2").parentNode.nodeName;
console.log(elementX);

//document.getElementById("liste").children[0].classList.replace("usundt","pupa");
document.getElementById("liste").lastElementChild.classList.replace("Class1","KURWA");

var node = document.createElement("li");
var textnode = document.createTextNode("Pears");
node.appendChild(textnode);
node.setAttribute("id","5");
node.setAttribute("class","sundt");
document.getElementById("liste").appendChild(node);

//6 task retarded
for(let i=0;i<2;i++)
{
    let j=0;
    document.getElementById("listeUsund").appendChild(document.getElementsByClassName("usundt")[j]);
    j++;
}

document.getElementById("0").innerHTML = "Bananer";
document.getElementById("listeUsund").removeChild(document.getElementById("listeUsund").children[0]);