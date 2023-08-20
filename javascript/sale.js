let total = 0;


function applyCoupon() {
    const couponCode = document.getElementById("couponCode").value;

    if (couponCode === "SELL200") {
        // Apply 20% discount
        const discountAmount = total * 0.2; // 20% discount
        const discountedTotal = total - discountAmount;
        
        // Update discount and total prices
        document.getElementById("discount-price").innerText = discountAmount.toFixed(2);
        document.getElementById("total-after-discount").innerText = discountedTotal.toFixed(2);

        // Clear the input field
        document.getElementById("couponCode").value = "";

        // Update button status
        updateButtonStatus();
    }
}

function handleClickCard(target){

    const selectedItemContainer = document.getElementById("selected-items");
    
    const itemName = target.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.parentNode.parentNode.childNodes[3].childNodes[7].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);

    document.getElementById("total-price").innerText = total;

    updateButtonStatus();

    // // Check if total price is 200 TK or more
    // if (total >= 200) {
    //     document.getElementById("applyButton").removeAttribute("disabled");
    // } else {
    //     document.getElementById("applyButton").setAttribute("disabled", "true");
    // }
}

function updateButtonStatus() {
    const applyButton = document.getElementById("applyButton");
    const purchaseButton = document.getElementById("purchaseButton");

    if (total >= 200) {
        applyButton.removeAttribute("disabled");
    } else {
        applyButton.setAttribute("disabled", "true");
    }

    if (total >= 1) {
        purchaseButton.removeAttribute("disabled");
    } else {
        purchaseButton.setAttribute("disabled", "true");
    }
}

function goHome() {
    // Clear the selected items list
    const selectedItemContainer = document.getElementById("selected-items");
    selectedItemContainer.innerHTML = "";

    // Reset the total price and discounts
    total = 0;
    document.getElementById("total-price").innerText = total.toFixed(2);
    document.getElementById("discount-price").innerText = "00.00";
    document.getElementById("total-after-discount").innerText = "00.00";

    // Disable the Apply button
    document.getElementById("applyButton").setAttribute("disabled", "true");

    // Close the modal
    const modal = document.getElementById("my_modal_1");
    modal.close();
}