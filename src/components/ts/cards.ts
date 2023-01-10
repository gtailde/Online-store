import { data, allCategories, allManufacturers } from "../../data/data";
const BlockProducts: HTMLElement | null = document.querySelector('.main__block-products');
function CardProd(): void {
    for (let i = 0; i < data.length; i++) {
        let MassValue = data[i];
        for (let j = 0, len = MassValue.length; j < len; j++) {
            let titleOnMass = MassValue[j].title;
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
            discount.innerHTML = `-${MassValue[j].discountPercentage}`;
            cardPrice.prepend(discount);
            /////////////////////////////   

            const price: HTMLElement | String = document.createElement('h3');
            price.innerHTML = `${MassValue[j].price}`;
            cardPrice.prepend(price);

            /////////////////////////////
            const rating: HTMLElement | String = document.createElement('div');
            rating.className = 'products-card__rating';
            if (MassValue[j].rating === 5) {
                rating.innerHTML = `Rating: ${MassValue[j].rating}/5`
            }
            else {
                rating.innerHTML = `Rating: ${MassValue[j].rating}/5.0`
            }
            Card.prepend(rating);
            /////////////////////////////
            const manufacrure: HTMLElement = document.createElement("div");
            manufacrure.className = 'products-card__manufacturer';
            Card?.prepend(manufacrure);
            const manufacrureName: HTMLElement | String = document.createElement('p');
            manufacrureName.className = 'manufacturer';
            manufacrureName.innerHTML = `Manufacrer: ${MassValue[j].brand}`
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
            Img.src = `${MassValue[j].img[0]}`
            Card?.prepend(Img);


        }
    }
}
CardProd();
export { CardProd, BlockProducts };

