import { arr, sum, counterInMainPg, Item, basketRemove } from "./basket-set";
import { data, Products } from "../src/data/data";
import { CardProd, BlockProducts } from "./cards";
import { writePopUp, listenPopUp } from "./popup";

const mainBasket = document.createElement('div');
mainBasket.className = 'main__basket';  
const main = <HTMLElement>document.querySelector('.main');

interface basketDataInterface {
  productsCout: string | number,
  totalProductsInBasket: string | number,
}

const basketData: basketDataInterface = {
  productsCout: '',
  totalProductsInBasket: '',
}

const loadBasket = (): void => {

  if(arr.length === 0){
    basketData.productsCout = '';
    basketData.totalProductsInBasket = '';
  }

  console.log(localStorage.getItem('OpenPay'))
  if(localStorage.getItem('OpenPay') === 'true'){
    const myTimeout = setTimeout(listenPopUp, 600);
    localStorage.setItem('OpenPay', 'false');

  }

  let style = <HTMLElement>document.querySelector('style');
  style.innerHTML = `.main__page-block{ display: none;} 
  .searchAndShoppingBasket__search{ display: none;}
  .main__product-card{display: none;}
  .main__basket{ display: block;}`;

  const basketBlock = document.createElement('div');
  basketBlock.className = 'basket__block';

  const basketHeader = <HTMLDivElement>document.createElement('div');
  basketHeader.className = 'basket__header';

  const cancelBasket = document.createElement('div');
  cancelBasket.className = 'cancel__product-card cancel__basket';
  
  basketBlock.append(cancelBasket);

  const basketHeaderTitle = document.createElement('h3');
  basketHeaderTitle.className = 'basket__title';
  basketHeaderTitle.textContent = 'Product in cart';

  basketHeader.append(basketHeaderTitle); 

  basketHeader.innerHTML += `<span class="items-counter"> 
  <span class="items-counter__span">Total Items in the cart: </span>${arr.length}</span>`

  const basketPageCounter = document.createElement('div');
  basketPageCounter.className = 'basket__page-counter';

  const pageCounterTitle = document.createElement('div');
  pageCounterTitle.className = 'page-counter-title';
  pageCounterTitle.textContent = 'Page: ';

  basketPageCounter.append(pageCounterTitle);

  const btnLeft = document.createElement('button');
  btnLeft.className = 'basket__btn-left';
  btnLeft.textContent = '<';

  basketPageCounter.append(btnLeft);

  const pageCount = document.createElement('input');
  pageCount.className = 'basket__page-count';
  pageCount.value = `1`; // count of page;
  basketPageCounter.append(pageCount);

  const btnRight = document.createElement('button');
  btnRight.className = 'basket__btn-right';
  btnRight.textContent = '>';

  basketPageCounter.append(btnRight);

  basketHeader.append(basketPageCounter);

  basketBlock.append(basketHeader);

  // basket product in cart

  const productInCartBlock = document.createElement('div');
  productInCartBlock.className = 'basket__products-in-cart';
  
  let startEnd: Array<number> = [0, 5];
  
  const loadProduct = (start: number, end: number): void => {
    arr.forEach((product: Products, i:number) => {
      if(i <= end && i >= start) {
        const productInCart = document.createElement('div');
        productInCart.className = 'product-in-cart';
      
        const position = document.createElement('div');
        position.className = 'product-in-cart__position';
        position.textContent = `${i + 1}`;
        
        productInCart.append(position);

        const basketImg = document.createElement('img');
        basketImg.className = 'product-in-cart__img';
        basketImg.src = `${product.img[0]}`;

        productInCart.append(basketImg);

        const infoOfGoods = document.createElement('div');
        infoOfGoods.className = 'informatio-of-goods__block'
        
        const productName = document.createElement('h3');
        productName.className = 'product-in-cart__name';
        productName.textContent = `${product.title}`;

        infoOfGoods.append(productName);

        const br = document.createElement('br');
        const productInfo = document.createElement('p');
        productInfo.className = 'product-in-cart__information';
        productInfo.textContent = `Brand: ${product.brand}, Category: ${product.category}, Discount: ${product.discountPercentage},\n Rating: ${product.rating}/5.0, InStock: ${product.stock}`
            
        infoOfGoods.append(productInfo);
      
        productInCart.append(infoOfGoods);

        const quanityOfGoods = document.createElement('div');
        quanityOfGoods.className = 'quanity-of-goods';

        const addProduct = document.createElement('button');
        addProduct.className = 'product-in-cart__add-goods';
        addProduct.textContent = '+';

        quanityOfGoods.append(addProduct);

        const countProduct = document.createElement('div');
        countProduct.className = 'product-in-cart__count-of-goods'
        countProduct.textContent = `${arr[i].total === 1 ? 1 : arr[i].total}`;

        quanityOfGoods.append(countProduct);

        const removeProduct = document.createElement('button');
        removeProduct.className = 'product-in-cart__remove-goods';
        removeProduct.textContent = '-';

        quanityOfGoods.append(removeProduct);

        productInCart.append(quanityOfGoods);

        const productPrice = document.createElement('div');
        productPrice.className = 'product-in-cart__price';
        productPrice.textContent = `${product.total === 1 ? product.price : Number(product.price.split('$')[0]) * product.total + '$'}`;

        productInCart.append(productPrice);

        productInCartBlock.append(productInCart);
      };

    });
  }

  const free = () => {
    const DivBasketFree = document.createElement('div');
    DivBasketFree.className = 'BasketFree';
    DivBasketFree.textContent = 'Please add the product to the cart';
    productInCartBlock.append(DivBasketFree);
  };

  arr.length > 0 ? loadProduct(startEnd[0], startEnd[1]) : free();



  basketBlock.append(productInCartBlock);

  const basketFooter = document.createElement('div');
  basketFooter.className = 'basket__footer';

  const basketFooterFlex = document.createElement('div');
  basketFooterFlex.className = 'basket-footer__flex';

  const basketFooterInput = document.createElement('div');
  basketFooterInput.className = 'basket-footer__input';
  
  const input = <HTMLInputElement>document.createElement('input');
  input.className = 'basket__input-promo';
  input.type = 'text';
  input.placeholder = "Enter promo code... ";

  basketFooterInput.append(input);

  const examplePromo = document.createElement('p');
  examplePromo.className = 'basket__example-promo';
  examplePromo.textContent = "Promo for test: 'RS', 'EPM'"

  basketFooterInput.append(examplePromo);

  basketFooterFlex.append(basketFooterInput);

  const dataFromCart = document.createElement('div');
  dataFromCart.className = 'basket-footer__data-from-cart';

  const basketCountOfProducts = document.createElement('div');
  basketCountOfProducts.className = 'basket-footer__products';
  basketCountOfProducts.textContent = `Products: ${Item}`;

  dataFromCart.append(basketCountOfProducts);

  const totalPrice = document.createElement('div');
  totalPrice.className = 'basket-footer__total';
  totalPrice.textContent = `Total: ${sum}$`;

  dataFromCart.append(totalPrice);

  basketFooterFlex.append(dataFromCart);

  basketFooter.append(basketFooterFlex);

  const buyNowBtn = document.createElement('button');
  buyNowBtn.className = 'basket-footer__buy-now';
  buyNowBtn.textContent = 'buy now';

  basketFooter.append(buyNowBtn);

  basketBlock.append(basketFooter);

  mainBasket.append(basketBlock);

  main.append(mainBasket);

  writePopUp()


  
  const buyNow = <HTMLButtonElement>document.querySelector('.basket-footer__buy-now');
  buyNow.addEventListener('click', el => {
    listenPopUp();
  });


  // listen btn in header

  const count = <HTMLInputElement>document.querySelector('.basket__page-count'); 
  const leftBasket = <HTMLButtonElement>document.querySelector('.basket__btn-left');
  const rightBasket = <HTMLButtonElement>document.querySelector('.basket__btn-right');
  const productContainer = <HTMLDivElement>document.querySelector('.basket__products-in-cart');

  count.addEventListener('input', el => {
    if(count.value.length === 3) count.value = count.value.slice(0, 2);
    if(arr.length === 0 || arr.length / Number(count.value) < 1) count.value = '1';

  });

  const left = () => {
    if(Number(count.value) > 1) {
      productContainer.innerHTML = '';
      remove(count);
      startEnd[0] -= 6;
      startEnd[1] -= 6;
      loadProduct(startEnd[0], startEnd[1]);
    };
  }

  leftBasket.addEventListener('click', el => {
    left();
  });

  rightBasket.addEventListener('click', target => {
    right();
  });

  const right = () => {
    if(Number(count.value) < Math.ceil(arr.length/6)){ 
      productContainer.innerHTML = '';
      add(count);
      startEnd[0] += 6;
      startEnd[1] += 6;
      loadProduct(startEnd[0], startEnd[1]); 
    }
  }

  // add count of product

  const allBtnAddproduct = document.querySelectorAll('.product-in-cart__add-goods');
  const allBtnRemoveProduct = document.querySelectorAll('.product-in-cart__remove-goods');
  const allCountOfProduct = document.querySelectorAll('.product-in-cart__count-of-goods');
  const getAllStock = document.querySelectorAll('.product-in-cart__information');
  const getProductPrice = document.querySelectorAll('.product-in-cart__price');
  const getTotal = <HTMLDivElement>document.querySelector('.basket-footer__total');
  const countProducts = <HTMLDivElement>document.querySelector('.basket-footer__products');



  allBtnAddproduct.forEach((add, i) => {
    add.addEventListener('click', el => {
      if(Number(allCountOfProduct[i].textContent) < Number(getAllStock[i].textContent?.split(':')[5].trim())) {
        allCountOfProduct[i].textContent = String(Number(allCountOfProduct[i].textContent) + 1);
        getProductPrice[i].textContent = String(Number(arr[i].price.split('$')[0]) * Number(allCountOfProduct[i].textContent)) + '$';
        getTotal.textContent = 'Total: ' + String(Number(getTotal.textContent?.split(':')[1].split('$')[0].trim()) + Number(arr[i].price.split('$')[0])) + '$';
        countProducts.textContent = `Products: ${Number(countProducts.textContent?.split(':')[1].trim()) + 1}`;

        arr[i].total += 1;
        basketData.productsCout = sum + Number(arr[i].price.split('$')[0]);
        basketData.totalProductsInBasket = Item + 1;} 
    });
  }); 

  const clear = <HTMLDivElement>document.querySelector('.main__basket'); 

  allBtnRemoveProduct.forEach((remove, i) => {
    remove.addEventListener('click', el => {
      if(Number(allCountOfProduct[i].textContent) > 1) {
        allCountOfProduct[i].textContent = String(Number(allCountOfProduct[i].textContent) - 1);
        getProductPrice[i].textContent = String(Number(arr[i].price.split('$')[0]) * Number(allCountOfProduct[i].textContent)) + '$';
        getTotal.textContent = 'Total: ' + String(Number(getTotal.textContent?.split(':')[1].split('$')[0].trim()) - Number(arr[i].price.split('$')[0])) + '$';
        countProducts.textContent = `Products: ${Number(countProducts.textContent?.split(':')[1].trim()) - 1}`;

        arr[i].total -= 1;
        basketData.productsCout = sum - Number(arr[i].price.split('$')[0]);
        basketData.totalProductsInBasket = Item - 1;
      } else {
        basketRemove(arr[i]);
        counterInMainPg(arr);
        clear.innerHTML = '';
        loadBasket();
      }
    });
  }); 

  // listen to cancel 

  const cancellBasket = <HTMLDivElement>document.querySelector('.cancel__basket');
  cancellBasket.addEventListener('click', e => {
    style.innerHTML = `.main__page-block{ display: flex;} 
  .searchAndShoppingBasket__search{ display: block;}
  .main__product-card{display: none;}
  .main__basket{display: none;}`
    clear.innerHTML = '';
    counterInMainPg(arr);
    // BlockProducts.innerHTML = '';
    // CardProd();
  }); 
}

const add = (count: HTMLInputElement) => {
  count.value = String(Number(count.value) + 1)
}

const remove = (count: HTMLInputElement) => {
  count.value = String(Number(count.value) - 1);
}

export { loadBasket, basketData };