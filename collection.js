var sideNavMenu=document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
   
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var enteredValue=event.target.value.toUppercase()
    for(count=0;count<productlist.length;count=count+1){
        var productname=productlist[count].querySelector("p").textContent
        if(productname.toUppercase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
         