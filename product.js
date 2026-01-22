//Selecting sideNav, menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0;
})


closenav.addEventListener("click", function () {
    sidenav.style.right="-50%"
})


//Product search functionality
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()

    for(let count=0; count<productList.length;count++){
        var productname = productList[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})