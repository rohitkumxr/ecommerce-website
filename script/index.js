let bagItems ;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displaytItemOnHomePage();
displayBagIcon();
}



function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon()
}


function displayBagIcon(){
    let bagItemElement = document.querySelector('.bag-item-count');
    

    if(bagItems.length > 0){
        bagItemElement.style.visibility = 'visible';
        bagItemElement.innerHTML = bagItems.length;
    }
    else{
        bagItemElement.style.visibility = 'hidden';
    }

}

function displaytItemOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');

    if(!itemsContainerElement) {
        return;
    }
    let innerHTML = '';
    
    items.forEach(item =>{
        innerHTML += 
        `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="image item">
        <div class="rating">
            ${item.rating.stars} ⭐️ ${item.rating.count}
        </div>
        <div class="company-name">
            ${item.company}
        </div>
        <div class="item-name">
            ${item.item_name}
        </div>
        <div class="price">
            <sapn class="current-price">Rs ${item.current_price}</sapn>
            <sapn class="original-price">Rs ${item.original_price}</sapn>
            <sapn class="Discount">(${item.discount_percentage}% OFF)</sapn>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>
    `
    });
    
    itemsContainerElement.innerHTML = innerHTML;
}
