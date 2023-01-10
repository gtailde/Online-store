import { getElement } from "./getElement";
import { builderCartForProduct } from "./product-cart";
import { basketAdd, basketRemove } from "./basket-set";
import { loadBasket } from "./basket";


const basket = document.querySelectorAll('.products-card__basket');
const nameELem = document.querySelectorAll('.name');
const mainBasket = <HTMLDivElement>document.querySelector('.searchAndShoppingBasket__ShoppingBasket');

document.querySelectorAll('.products-card').forEach((el, ind) => {
  el.addEventListener('click', e => {
    const getEL = getElement(`${nameELem[ind].textContent}`); 
    if(e.composedPath()[0] === basket[ind]){
      basket[ind].classList.toggle('products-card__in-basket');
      basket[ind].className.includes('products-card__in-basket') ? basketAdd(getEL) : basketRemove(getEL);
    } else {
      builderCartForProduct(getEL);
    };
      
  });
});

mainBasket.addEventListener('click', target => {
  let style = <HTMLElement>document.querySelector('style');
  if(!style.textContent?.includes('.main__basket{ display: block;}')) loadBasket();
});