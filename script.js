"use strict";

window.addEventListener("load", () => {
    const contEl = document.querySelector(".featuredItems");
    const dataGoods = JSON.parse(json);

    let featuredItems = "";

    dataGoods.goods.forEach((featuredItem) => {
        featuredItems += `
             <div class="featuredItem">
                <div class="featuredImgWrap">
                <img src="${featuredItem.img}" alt="${featuredItem.name}" />
                  <div class="featuredImgDark">
                    <button class="addToCart" data-id="${featuredItem.id}">
                      <img src="img/cart.svg" alt="cart" />
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div class="featuredData">
                  <div class="featuredName">${featuredItem.name}</div>
                  <div class="featuredText">${featuredItem.description}</div>
                  <div class="featuredPrice">${featuredItem.price}</div>
                </div>
              </div>
        `;
    });
    contEl.innerHTML = featuredItems;
});