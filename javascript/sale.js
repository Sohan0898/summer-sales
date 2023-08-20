let total = 0;

function handleClickCard(target){

    const selectedItemContainer = document.getElementById("selected-items");
    
    const itemName = target.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.parentNode.childNodes[3].childNodes[7].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);

    document.getElementById("total-price").innerText = total;

}