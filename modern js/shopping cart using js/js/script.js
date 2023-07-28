
function addToCart(item){
    let product_cart_list = document.querySelector("#productCartList");
    let row = document.createElement('tr');
    row.innerHTML = `
    <td>${item}</td>
    <td><button id="${item}" onclick="removeFromCart('${item}')" class="btn">Remove</button></td>`;

    product_cart_list.appendChild(row);
}


function removeFromCart(itemId) {
    let cartItem = document.getElementById(itemId);
    if (cartItem) {
        let row = cartItem.closest('tr');
        row.remove();
    }
}



