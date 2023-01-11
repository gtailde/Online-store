// import {  } from "./basket";
import { Products } from "../src/data/data";
import { arr } from "./basket-set";
const main = <HTMLElement>document.querySelector('.main');



function writePopUp() {

  const mainBlock = document.createElement('div');
  mainBlock.className = 'main__pay-main-block';

  const payBlock = document.createElement('div');
  payBlock.className = 'main__pay-block';

  const personalDetails = document.createElement('h3');
  personalDetails.className = 'pay-block__personal-details-title';
  personalDetails.textContent = 'Peronal details';

  payBlock.append(personalDetails);

  const form = <HTMLFormElement>document.createElement('form');
  form.className = 'pay-form';
  form.id = 'form';
  form.method = '';

  const inpName = <HTMLInputElement>document.createElement('input');
  inpName.className = 'pay-block__name-inp pay-inp';
  inpName.type = 'text';
  inpName.placeholder = 'Name and Surname';
  inpName.setAttribute('required', '');
  inpName.setAttribute('pattern', "[A-Za-zА-Яа-я\\-']{3,}\\b.+?[A-Za-zА-Яа-я\\-']{3,}");
  inpName.setAttribute('title', 'At least 2 words with at least 3 letters each.');

  form.append(inpName);

  const inpNumber = <HTMLInputElement>document.createElement('input');
  inpNumber.className = 'pay-block__phone-inp pay-inp';
  inpNumber.type = 'text';
  inpNumber.placeholder = 'Phone number';
  inpNumber.setAttribute('required', '');
  inpNumber.setAttribute('pattern', '[+][0-9]{8,}[0-9]');
  inpNumber.setAttribute('title', 'Minimum 9 digits are required');

  form.append(inpNumber);

  const inpDelivery = <HTMLInputElement>document.createElement('input');
  inpDelivery.className = 'pay-block__delivery pay-inp';
  inpDelivery.type = 'text';
  inpDelivery.placeholder = 'Delivery address';
  inpDelivery.setAttribute(
    'pattern',
    "[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}\\b.[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}\\b.+?[A-Za-zА-Яа-я0-9\\-+.\\/']{5,}"
  );
  inpDelivery.setAttribute('title', 'At least 3 words with at least 5 letters each.');
  inpDelivery.setAttribute('required', '');


  form.append(inpDelivery);

  const inpEmail = <HTMLInputElement>document.createElement('input');
  inpEmail.className = 'pay-block__email pay-inp';
  inpEmail.placeholder = 'Email';
  inpEmail.type = 'email';
  inpEmail.setAttribute('title', 'Enter valid email address');
  inpEmail.setAttribute('required', '');
  inpEmail.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

  form.append(inpEmail);

  const cardInfoBlock = document.createElement('div');
  cardInfoBlock.className = 'pay-block__card-info';

  const cardNumber = <HTMLInputElement>document.createElement('input');
  cardNumber.className = 'pay-block__card-number';
  cardNumber.placeholder = 'XXXX XXXX XXXX XXXX';
  cardNumber.type = 'number';
  cardNumber.setAttribute('required', '');
  cardNumber.setAttribute('pattern', '\\d{16}');
  cardNumber.setAttribute('title', 'Must be 16 digits');
  cardNumber.setAttribute('maxlength', '16');

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
  dateInp.setAttribute('id', 'card-date');
  dateInp.setAttribute('pattern', '(0[1-9]|1[012])/[0-9]{2}');
  dateInp.setAttribute('maxlength', '5');
  dateInp.setAttribute('title', 'There should be a date, month and year (MM/YY)');
  dateInp.setAttribute('required', '');

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
  cvvInp.setAttribute('id', 'card-cvv');
  cvvInp.setAttribute('required', '');
  cvvInp.setAttribute('pattern', '[0-9]{3,3}');
  cvvInp.setAttribute('maxlength', '3');
  cvvInp.setAttribute('title', 'Must be 3 digits');

  cvvBlock.append(cvvInp);

  infoAboutCart.append(cvvBlock);

  cardInfoBlock.append(infoAboutCart);

  form.append(cardInfoBlock);

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

  form.append(footerBtns);
  
  payBlock.append(form);

  mainBlock.append(payBlock);
  
  if(document.querySelector('.main__pay-main-block') === null)   main.append(mainBlock);

};



const listenPopUp = () => {
  const popupBg = <HTMLDivElement>document.querySelector('.main__pay-main-block');
  const popup = <HTMLDivElement>document.querySelector('.main__pay-block');
  const btnClose = <HTMLButtonElement>document.querySelector('.pay-block__close');
  const submit = <HTMLButtonElement>document.querySelector('.pay-block__submit');
  const phone = <HTMLInputElement>document.querySelector('.pay-block__phone-inp');

  popupBg.classList.add('active');
  popup.classList.add('active');

  const closePopUp = () => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
  };
  


  submit.addEventListener('click', el => {
    const formElement = document.getElementById('form') as HTMLInputElement;
      if (formElement.checkValidity()) {
        arr.splice(0, arr.length);        
        closePopUp();
        localStorage.setItem('submit', 'true');

      };
  });

  popupBg.addEventListener('click', (e) => { 
    if(e.target === popupBg) {
      closePopUp();
    };
  });

  btnClose.addEventListener('click', e => {
    closePopUp();
  });

  phone.addEventListener('input', el => {
    if (phone.value.length === 0) {
      phone.value = '+';
    }
  
    if (phone.value.length === 0) {
      phone.value = '+';
    } else {
      phone.value = '+' + phone.value.substring(1).replace(/[^.0-9]/, '');
    }
  });

  phone.addEventListener('click', el => {
    if(phone.value.length === 0)phone.value = '+';
  });
};

const confirm = () => {
  
    const mainConfirm= document.createElement('div');
     mainConfirm.className = 'confirm-block active';

    const confirmBlock = document.createElement('div');
    confirmBlock.className = 'confirm active';

    const confirmTitle = document.createElement('h3');
    confirmTitle.className = 'confirm__order';
    confirmTitle.textContent = 'Your order has been successfully placed';

    confirmBlock.append(confirmTitle);

    const confirmTitle2 = document.createElement('h3');
    confirmTitle2.className = 'confirm__order';
    confirmTitle2.textContent = 'Thank you for your order';
    
    confirmBlock.append(confirmTitle2);

    mainConfirm.append(confirmBlock);

  if(document.querySelector('.confirm-block') === null) {
    main.append(mainConfirm);
  } else {
    const bg = <HTMLDivElement>document.querySelector('.confirm-block');
    const main = <HTMLDivElement>document.querySelector('.confirm');
    bg.classList.add('active'); 
    main.classList.add('active'); 

    
  }
  
  const myTimeout = setTimeout(removeActive, 2500);

};

const removeActive = () => {
  const bg = <HTMLDivElement>document.querySelector('.confirm-block');
  const main = <HTMLDivElement>document.querySelector('.confirm');
  bg.classList.remove('active'); 
  main.classList.remove('active'); 


}




// writePopUp()

// const activatePopUp = () => {
//   popupBg.className = 'main__pay-main-block active'; 
//   popup.className = 'main__pay-block active'; 
// };

// writePopUp()

export{writePopUp, listenPopUp, confirm }