// import {  } from "./basket";

const main = <HTMLElement>document.querySelector('.main');
const popupBg = <HTMLDivElement>document.querySelector('.main__pay-main-block');
const popup = <HTMLDivElement>document.querySelector('.main__pay-block');


function writePopUp() {

  const mainBlock = document.createElement('div');
  mainBlock.className = 'main__pay-main-block active';

  const payBlock = document.createElement('div');
  payBlock.className = 'main__pay-block active';

  const personalDetails = document.createElement('h3');
  personalDetails.className = 'pay-block__personal-details-title';
  personalDetails.textContent = 'Peronal details';

  payBlock.append(personalDetails);

  const inpName = <HTMLInputElement>document.createElement('input');
  inpName.className = 'pay-block__name-inp pay-inp';
  inpName.type = 'text';
  inpName.placeholder = 'Name and Surname';

  payBlock.append(inpName);

  const inpNumber = <HTMLInputElement>document.createElement('input');
  inpNumber.className = 'pay-block__phone-inp pay-inp';
  inpNumber.type = 'text';
  inpNumber.placeholder = 'Phone number';

  payBlock.append(inpNumber);

  const inpDelivery = <HTMLInputElement>document.createElement('input');
  inpDelivery.className = 'pay-block__delivery pay-inp';
  inpDelivery.type = 'text';
  inpDelivery.placeholder = 'Delivery address';

  payBlock.append(inpDelivery);

  const inpEmail = <HTMLInputElement>document.createElement('input');
  inpEmail.className = 'pay-block__email pay-inp';
  inpEmail.placeholder = 'Email';
  inpEmail.type = 'email';

  payBlock.append(inpEmail);

  const cardInfoBlock = document.createElement('div');
  cardInfoBlock.className = 'pay-block__card-info';

  const cardNumber = <HTMLInputElement>document.createElement('input');
  cardNumber.className = 'pay-block__card-number';
  cardNumber.placeholder = 'XXXX XXXX XXXX XXXX';
  cardNumber.type = 'number';

  cardInfoBlock.append(cardNumber);

  const cardType = document.createElement('div');
  cardType.className = 'pay-block__card-type-img';

  cardInfoBlock.append(cardType);

  const infoAboutCart = document.createElement('div');
  infoAboutCart.className = 'pay-block__info-about-cart';

  const cartDateBlock = document.createElement('div');
  cartDateBlock.className = 'pay-block__card-month-year-block';

  const dateTitle = document.createElement('h3');
  dateTitle.className = 'pay-block__month-year-title';
  dateTitle.textContent = 'MM/YY';

  cartDateBlock.append(dateTitle);

  const dateInp = <HTMLInputElement>document.createElement('input');
  dateInp.className = 'pay-block__date-inp';
  dateInp.placeholder = 'MM/YY';
  dateInp.type = 'text';

  cartDateBlock.append(dateInp);

  infoAboutCart.append(cartDateBlock);

  const cvvBlock = document.createElement('div');
  cvvBlock.className = 'pay-block__card-CVV-block';

  const cvvTitle = document.createElement('h3');
  cvvTitle.className = 'pay-block__CVV-title';
  cvvTitle.textContent = 'CVV';

  cvvBlock.append(cvvTitle);

  const cvvInp = <HTMLInputElement>document.createElement('input');
  cvvInp.className = 'pay-block__date-inp';
  cvvInp.placeholder = 'CVV';
  cvvInp.type = 'number';

  cvvBlock.append(cvvInp);

  infoAboutCart.append(cvvBlock);

  cardInfoBlock.append(infoAboutCart);

  payBlock.append(cardInfoBlock);

  const footerBtns = document.createElement('div');
  footerBtns.className = 'pay-block__footer-btns-block';

  const submit = <HTMLButtonElement>document.createElement('button');
  submit.className = 'pay-block__submit';
  submit.textContent = 'Submit';

  footerBtns.append(submit);

  const close =  <HTMLButtonElement>document.createElement('button');
  close.className = 'pay-block__close';
  close.textContent = 'Close';

  footerBtns.append(close);

  payBlock.append(footerBtns);

  mainBlock.append(payBlock);
  
  main.append(mainBlock);

  document.addEventListener('click', (e) => { 
    if(e.target === popupBg) {
      popupBg.classList.remove('active'); 
      popup.classList.remove('active'); 
  };
});


};

// writePopUp()

// const activatePopUp = () => {
//   popupBg.className = 'main__pay-main-block active'; 
//   popup.className = 'main__pay-block active'; 
// };

// writePopUp()

export{writePopUp, popup, popupBg}