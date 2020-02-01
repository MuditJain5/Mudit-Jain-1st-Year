var offer = document.querySelector(".offer");
var price = document.querySelector(".price");

offer.addEventListener("click", function(){
    if (offer.innerHTML === "Click here to get Special discount(only for NITJ students)") {
      offer.innerHTML = "Applied:Special discount for NIT Jalandhar students";
      price.innerHTML = "Price: &#8377 <span class='dis'>12500</span> 10000";
      
    } else {
      offer.innerHTML = "Click here to get Special discount(only for NITJ students)";
      price.innerHTML = "Price: &#8377 12500";
      
    }

})