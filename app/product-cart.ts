import { Products } from '../src/data/data';
import { arr, basketAdd, basketRemove } from './basket-set';

const mainBlock = document.createElement('div');
mainBlock.className = 'main__product-card';

function builderCartForProduct(obj: Products) {

  let style = <HTMLElement>document.querySelector('style');
  style.innerHTML = `.main__page-block{ display: none;} 
  .searchAndShoppingBasket__search{ display: none;}
  .main__product-card{display: block;}
  .main__basket{ display: none;}`;

  const mainProduct = document.createElement('div');
  mainProduct.className = 'product-card__block'

  const productCartBlockIMG = document.createElement('div');
  productCartBlockIMG.className = 'product-card__block-images';

  const selectImgBlock = document.createElement('div');
  selectImgBlock.className = 'select__image-block';

  const mainIMG = document.createElement('img');
  mainIMG.src = obj.img[0];
  mainIMG.className = 'select__img';

  selectImgBlock.append(mainIMG);
  productCartBlockIMG.append(selectImgBlock);

  const galery = document.createElement('div');
  galery.className = 'galery';

  const galeryIMGS = document.createElement('div');
  galeryIMGS.className = 'galery__images';

  obj.img.forEach((img, i) => {
    const galeryImgBlock = document.createElement('div');
    galeryImgBlock.className = 'galery__img-block';

    const IMGonGalery = document.createElement('img');
    IMGonGalery.src = img;
    i !== 0 ? IMGonGalery.className = 'galery__img' : IMGonGalery.className = 'galery__img img__active';

    galeryImgBlock.append(IMGonGalery);
    galeryIMGS.append(galeryImgBlock);
  });

  galery.append(galeryIMGS);
  productCartBlockIMG.append(galery);
  mainProduct.append(productCartBlockIMG);

  const descriptionBlock = document.createElement('div');
  descriptionBlock.className = 'product-card__block-description';

  const cancelBtn = document.createElement('div');
  cancelBtn.className = 'cancel__product-card';
  descriptionBlock.append(cancelBtn);

  const wayToProducts = document.createElement('p');
  wayToProducts.className = 'way-to-product';
  wayToProducts.textContent = `Store > ${obj.category} > ${obj.brand} > ${obj.title}`;
  descriptionBlock.append(wayToProducts);

  const prodName = document.createElement('h3');
  prodName.className = 'product-card__product-name';
  prodName.textContent = obj.title;
  descriptionBlock.append(prodName);

  const productList = document.createElement('ul');
  productList.className = 'product-card__list';

  const prodItem1 = document.createElement('li');
  prodItem1.className = "product-card__list-item";
  prodItem1.textContent = `Brand: ${obj.brand}`;
  productList.append(prodItem1);

  const prodItem2 = document.createElement('li');
  prodItem2.className = "product-card__list-item";
  prodItem2.textContent = `Category: ${obj.category}`;
  productList.append(prodItem2);

  const prodItem3 = document.createElement('li');
  prodItem3.className = "product-card__list-item";
  prodItem3.textContent = `Discount: ${obj.discountPercentage}`;
  productList.append(prodItem3);

  const prodItem4 = document.createElement('li');
  prodItem4.className = "product-card__list-item";
  prodItem4.textContent = `Rating: ${obj.rating}/5.0`;
  productList.append(prodItem4);

  const prodItem5 = document.createElement('li');
  prodItem5.className = "product-card__list-item";
  prodItem5.textContent = `InStock: ${obj.stock}`;
  productList.append(prodItem5);

  descriptionBlock.append(productList);

  const descriptionTitle = document.createElement('h4');
  descriptionTitle.className = 'product-card__product-description-title';
  descriptionTitle.textContent = 'Description:';

  descriptionBlock.append(descriptionTitle);

  const productDescr = document.createElement('p');
  productDescr.className = 'product-card__product-description';
  productDescr.textContent = obj.description;

  descriptionBlock.append(productDescr);

  const btnsBlock = document.createElement('div');
  btnsBlock.className = 'product-card__buttons';

  const productsCartPrice = document.createElement('span');
  productsCartPrice.className = 'product-card__price';
  productsCartPrice.textContent = obj.price;

  btnsBlock.append(productsCartPrice);

  const buyNowBtn = document.createElement('button');
  buyNowBtn.className = 'product-card__buy-now';
  buyNowBtn.textContent = 'Buy Now';

  btnsBlock.append(buyNowBtn);

  const DropOnCart = document.createElement("button");
  // DropOnCart.className = 'product-card__drop-on-cart';
  arr.forEach((name) => {
    if (name.title === obj.title) {
      DropOnCart.className = 'product-card__drop-on-cart remove__product-from-cart';
      DropOnCart.textContent = 'Remove from cart';
    };
  });

  if (DropOnCart.className === '') {
    DropOnCart.className = 'product-card__drop-on-cart';
    DropOnCart.textContent = 'Drop on cart';
  };


  btnsBlock.append(DropOnCart);

  descriptionBlock.append(btnsBlock);
  mainProduct.append(descriptionBlock);
  mainBlock.append(mainProduct);

  const main = <HTMLElement>document.querySelector('.main');
  main.append(mainBlock);

  // replace img

  const getImgBlock = document.querySelectorAll('.galery__img-block');
  const getImg = document.querySelectorAll('.galery__img');
  const replaceImg = <HTMLImageElement>document.querySelector('.select__img');
  let prevEl = getImg[0];

  getImgBlock.forEach((el, i) => {
    el.addEventListener('click', e => {
      replaceImg.src = `${getImg[i].getAttribute('src')}`;
      prevEl.className = 'galery__img';
      prevEl = getImg[i];
      getImg[i].className = 'galery__img img__active';
    });
  });

  const drop = <HTMLElement>document.querySelector('.product-card__drop-on-cart');

  drop.addEventListener('click', el => {
    if (drop.className === 'product-card__drop-on-cart remove__product-from-cart') {
      basketRemove(obj);
      drop.textContent = 'Drop on cart';
    } else {
      drop.textContent = 'Remove from cart';
      basketAdd(obj);
    };
    drop.classList.toggle('remove__product-from-cart');
  });

  // listen to cancell 

  const clear = <HTMLDivElement>document.querySelector('.main__product-card');
  const cancell = <HTMLDivElement>document.querySelector('.cancel__product-card');
  cancell.addEventListener('click', e => {
    style.innerHTML = `.main__page-block{ display: flex;} 
    .searchAndShoppingBasket__search{ display: block;}
    .main__product-card{display: none;}
    .main__basket{display: none;}`
    clear.innerHTML = '';
  });

  document.querySelector('.searchAndShoppingBasket__ShoppingBasket')?.addEventListener('click', el => {
    clear.innerHTML = '';
  });


}

export { builderCartForProduct };