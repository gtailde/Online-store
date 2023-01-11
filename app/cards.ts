import { data, allCategories, allManufacturers } from "../src/data/data";
const BlockProducts = <HTMLElement>document.querySelector('.main__block-products');
import { loadFilters } from "./loader";
import { basketCheck } from "./basket-set";

loadFilters();

function CardProd() {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let titleOnMass = data[i][j].title;
            const Card: HTMLElement = document.createElement('div');
            Card.className = 'products-card';
            BlockProducts?.append(Card);
            /////////////////////////////
            const cardFlex: HTMLElement = document.createElement('div');
            cardFlex.className = 'products-card__flex';
            Card.prepend(cardFlex);
            ////////////////////////////
            const basket: HTMLElement = document.createElement('div');
            basketCheck(data[i][i]) === false ? basket.className = 'products-card__basket' : basket.className = 'products-card__basket basket__products-in-cart';
            cardFlex.prepend(basket);
            /////////////////////////////
            const cardPrice: HTMLElement = document.createElement('div');
            cardPrice.className = 'products-card__price';
            cardFlex.prepend(cardPrice);

            ////////////////////////////
            const discount: HTMLElement | String = document.createElement('div');
            discount.className = 'discount';
            discount.innerHTML = `-${data[i][j].discountPercentage}`;
            cardPrice.prepend(discount);
            /////////////////////////////   

            const price: HTMLElement | String = document.createElement('h3');
            price.innerHTML = `${data[i][j].price}`;
            cardPrice.prepend(price);

            /////////////////////////////
            const rating: HTMLElement | String = document.createElement('div');
            rating.className = 'products-card__rating';
            data[i][j].rating === 5 ? rating.innerHTML = `Rating: ${data[i][j].rating}/5` : rating.innerHTML = `Rating: ${data[i][j].rating}/5.0`;
        
            Card.prepend(rating);
            /////////////////////////////
            const manufacrure: HTMLElement = document.createElement("div");
            manufacrure.className = 'products-card__manufacturer';
            Card?.prepend(manufacrure);
            const manufacrureName: HTMLElement | String = document.createElement('p');
            manufacrureName.className = 'manufacturer';
            manufacrureName.innerHTML = `Manufacrer: ${data[i][j].brand}`
            manufacrure.prepend(manufacrureName);
            ////////////////////////////////////////
            const CardTitle: HTMLElement = document.createElement('div');
            CardTitle.className = 'products-card__name';
            Card?.prepend(CardTitle);
            const Name = document.createElement('h3');
            Name.className = 'name';
            CardTitle?.prepend(Name);
            Name.innerText = titleOnMass;
            ///////////////////////////
            const Img: HTMLImageElement | String = document.createElement('img');
            Img.className = 'products-card__img';
            Img.src = `${data[i][j].img[0]}`
            Card?.prepend(Img);
        }
    }
}
CardProd();

export { CardProd, BlockProducts };