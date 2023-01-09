import { data, allCategories, allManufacturers, allTitle } from '../../data/data';
import { CardProd } from './cards';
console.log(allTitle)
const divElement = [...document.querySelectorAll<HTMLElement>('.products-card')!];

const Input: HTMLInputElement = document.querySelector('.search-input')!;
const InputButton: HTMLButtonElement = document.querySelector('.search-btn')!;
let boolBtn;
const BlockProducts: HTMLElement = document.querySelector('.main__block-products')!;
const articleBlock: HTMLElement = document.querySelector('.block-products')!;
const titleMass = allTitle.map(el => { return el.toLowerCase() });
function clear() {
    articleBlock.innerHTML = "";
}
InputButton.addEventListener('click', () => {
    boolBtn = InputButton.classList.contains('active');
    if (boolBtn = 'true') {
        const InputValue: string[] | string = Input.value.toLowerCase();
        titleMass.forEach(el => {
            if (InputValue === el) {
                const indexelement = titleMass.indexOf(el);
                allTitle.forEach(el1 => {
                    if (allTitle.indexOf(el1) === indexelement) {
                        for (let i = 0; i < data.length; i++) {
                            data[i].filter(el2 => {
                                if (el2.title === el1) {
                                    clear();
                                    const Card: HTMLElement = document.createElement('div');
                                    Card.className = 'products-card';
                                    BlockProducts?.prepend(Card);
                                    /////////////////////////////
                                    const cardFlex: HTMLElement = document.createElement('div');
                                    cardFlex.className = 'products-card__flex';
                                    Card.prepend(cardFlex);
                                    ////////////////////////////
                                    const basket: HTMLElement = document.createElement('div');
                                    basket.className = 'products-card__basket';
                                    cardFlex.prepend(basket);
                                    /////////////////////////////
                                    const cardPrice: HTMLElement = document.createElement('div');
                                    cardPrice.className = 'products-card__price';
                                    cardFlex.prepend(cardPrice);

                                    ////////////////////////////
                                    const discount: HTMLElement | String = document.createElement('div');
                                    discount.className = 'discount';
                                    discount.innerHTML = `-${el2.discountPercentage}`;
                                    cardPrice.prepend(discount);
                                    /////////////////////////////   

                                    const price: HTMLElement | String = document.createElement('h3');
                                    price.innerHTML = `${el2.price}`;
                                    cardPrice.prepend(price);

                                    /////////////////////////////
                                    const rating: HTMLElement | String = document.createElement('div');
                                    rating.className = 'products-card__rating';
                                    if (el2.rating === 5) {
                                        rating.innerHTML = `Rating: ${el2.rating}/5`
                                    }
                                    else {
                                        rating.innerHTML = `Rating: ${el2.rating}/5.0`
                                    }
                                    Card.prepend(rating);
                                    /////////////////////////////
                                    const manufacrure: HTMLElement = document.createElement("div");
                                    manufacrure.className = 'products-card__manufacturer';
                                    Card?.prepend(manufacrure);
                                    const manufacrureName: HTMLElement | String = document.createElement('p');
                                    manufacrureName.className = 'manufacturer';
                                    manufacrureName.innerHTML = `Manufacrer: ${el2.brand}`
                                    manufacrure.prepend(manufacrureName);
                                    ////////////////////////////////////////
                                    const CardTitle: HTMLElement = document.createElement('div');
                                    CardTitle.className = 'products-card__name';
                                    Card?.prepend(CardTitle);
                                    const Name = document.createElement('h3');
                                    Name.className = 'name';
                                    CardTitle?.prepend(Name);
                                    Name.innerText = el2.title;
                                    ///////////////////////////
                                    const Img: HTMLImageElement | String = document.createElement('img');
                                    Img.className = 'products-card__img';
                                    Img.src = `${el2.img[0]}`
                                    Card?.prepend(Img);

                                    // for (const el of divElement) {
                                    //     .remove();
                                    // }
                                }
                            })
                        }

                    }
                })
            }
        });

    }
})


//проверка на строку Обязательно 

// сделать невосприимчивость к регистру и доделать поиск 

