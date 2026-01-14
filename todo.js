let btn=document.querySelector("#btn")
// document.getElementById("btn")
const additem=()=>{
    //read user input from the user
    let userinput=document.querySelector("#inp").value
    //create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //target the list
    let list=document.querySelector("#todo")
    //add item to the list
    list.appendChild(listitem)
}
btn.addEventListener("click",additem)
