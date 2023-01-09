// import { data, allCategories, allManufacturers } from "./data.js"
// function start(data){
//   for(let i = 0; i < data.length; i++){
//     for(let a = 0; a < data[i].length; a++){
//       document.querySelector(".main__block-products").innerHTML += `
//       <div class="block-products__card products-card">      
//         <img class="products-card__img width='100%'"
//         src=${data[i][a].img[0]}
//         alt="">                         
//         <div class="products-card__name">
//         <h3>${data[i][a].title}</h3>
//         </div>

//         <div class="products-card__manufacturer">
//         <p>Manufacturer: ${data[i][a].brand}</p>
//         </div>

//         <div class="products-card__rating">Rating: ${data[i][a].rating}/5.0</div>

//         <div class="products-card__flex">

//         <div class="products-card__price">
//             <h3>${data[i][a].price}</h3>
//             <div class="discount">-${data[i][a].discountPercentage}</div>
//         </div>

//         <div class="products-card__product-card"></div>

//         </div>
//         </div> `
//       }
//     document.querySelector('.main__filter__categories').innerHTML +=`<label class="main__filter-categories-item" >
//   <input type="checkbox" class="main__filter-categories-checkbox">${data[i][0].category}
//   </label>`
//   }

//   allManufacturers.forEach((name) => {
//     document.querySelector(".__manufacturers").innerHTML += `<label class="main__filter-categories-item" >
//     <input type="checkbox" class="main__filter-categories-checkbox">${name}
//   </label>`
//   })
// }



// start(data)


// function block(){
//   document.querySelector('.main__container').style.display = 'none';
//   document.querySelector('.main__product-card').style.display = 'block';

//   // `.main__container{display: none;}
//   // .main__product-card{display: block;}`
// }

// function act(){
//   start(data);
//   document.querySelector('.main__container').style.display = 'flex';
//   document.querySelector('.main__product-card').style.display = 'none';

// }


// function card(data){
//   document.querySelector('.main__product-card').innerHTML += `
//   <div class="product-card__block">
//                           <div class="product-card__block-images">
//                               <div class="select__image-block">
//                                   <img src="${data.img[0]}" alt="" class="select__img">
//                               </div>
//                               <div class="galery">
//                                   <div class="galery__images">
                                    
    
//                                   </div>
//                               </div>
//                           </div>
//                           <div class="product-card__block-description">
//                           <div class="cancel__product-card"></div>

//                               <h3 class="product-card__product-name">${data.title}</h3>
//                               <ul class="product-card__list">
//                                   <li class="product-card__list-item">Brand: ${data.brand}</li>
//                                   <li class="product-card__list-item">Category: ${data.category}</li>
//                                   <li class="product-card__list-item">Discount: ${data.discountPercentage}</li>
//                                   <li class="product-card__list-item">Rating: ${data.rating}/5</li>
//                                   <li class="product-card__list-item">InStock: ${data.stock}</li>
//                               </ul>
//                               <h4 class="product-card__product-description-title">Description:</h4>
//                               <p class="product-card__product-description">${data.description}</p>
//                               <div class="product-card__buttons">
//                                   <span class="product-card__price">${data.price}</span>
//                                   <button class="product-card__buy-now">Buy now</button>
//                                   <button class="product-card__drop-on-cart">Drop on cart</button>
//                               </div>
//                           </div>
//                       </div>
//   `
//   document.querySelector('.select__img').setAttribute('src', `${data.img[0]}`)

//   for(let i = 0; i < data.img.length; i++){
//     document.querySelector('.galery__images').innerHTML += `<div class="galery__img-block">
//     <img src="${data.img[i]}" alt="" class="galery__img">
//   </div>`
//   }

//   let act = 0;

//   const a = document.querySelectorAll('.galery__img-block');
//   a[0].classList.add('img__active')

//   a.forEach((el, ind) => {
//     el.addEventListener('click', event => {
//       a[act].classList.remove('img__active');
//       act = ind;
//       a[ind].classList.add('img__active')
//       document.querySelector('.select__image-block').innerHTML = `<img src="${data.img[ind]}" alt="" class="select__img">`
//     })
//   })
  

  
// }

// document.querySelectorAll('.products-card').forEach((el, i) => {
//   el.addEventListener('click', a => {
//     block();
//     card(data[Math.floor(i / 6)][Math.floor(i % 6)])
//   })
// })

// document.body.addEventListener('click', el => {
//   if(el.target.classList[0] === ('cancel__product-card')) act()


// })

// // document.querySelector('.cancel__product-card').onclick = act()

// export {}