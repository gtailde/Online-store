import { data, Products } from '../../data/data';
import { CardProd, BlockProducts } from '../../../app/cards';
const search = () => {
    const dropdownListItem = document.querySelectorAll(".dropdown__list-item");
    const divElement = [...document.querySelectorAll<HTMLElement>('.products-card')!];
    const dropdownList = document.querySelector(".dropdown__list");
    const articleBlock: HTMLElement = document.querySelector('.block-products')!;
    let massObj = data.flat(3);
    let massObjMin = data.flat(3)
    function clear() {
        articleBlock.innerHTML = " ";
    }
    function sortMaxValue() {
        let maxValue = massObj.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price) ? -1 : parseInt(b.price) > parseInt(a.price) ? 1 : 0;
        })
        createCard(maxValue);
        return maxValue;
    }
    function sortMinValue() {
        let minValue = massObjMin.sort((a, b) => {
            return parseInt(a.price) > parseInt(b.price) ? 1 : parseInt(b.price) > parseInt(a.price) ? -1 : 0;
        });
        createCard(minValue);
        return minValue;
    }
    function sortMaxRating() {
        let maxRating = massObj.sort((a, b) => {
            return Number(a.rating) > Number(b.rating) ? -1 : Number(b.rating) > Number(a.rating) ? 1 : 0;
        })
        createCard(maxRating);
        return maxRating;
    }
    function sortMinRating() {
        let minRating = massObjMin.sort((a, b) => {
            return Number(a.rating) > Number(b.rating) ? 1 : Number(b.rating) > Number(a.rating) ? -1 : 0;
        });
        createCard(minRating);
        return minRating;
    }
    function sortMaxDiscount() {
        let maxDisc = massObj.sort((a, b) => {
            return parseInt(a.discountPercentage) > parseInt(b.discountPercentage) ? -1 : parseInt(b.discountPercentage) > parseInt(a.discountPercentage) ? 1 : 0;
        })
        createCard(maxDisc);
        return maxDisc;
    }
    function sortMinDiscount() {
        let minDisc = massObjMin.sort((a, b) => {
            return parseInt(a.discountPercentage) > parseInt(b.discountPercentage) ? 1 : parseInt(b.discountPercentage) > parseInt(a.discountPercentage) ? -1 : 0;
        });
        createCard(minDisc);
        return minDisc;
    }
    function createCard(mass: Products[]) {
        mass.forEach(el => {

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
            discount.innerHTML = `-${el.discountPercentage}`;
            cardPrice.prepend(discount);
            /////////////////////////////   

            const price: HTMLElement | String = document.createElement('h3');
            price.innerHTML = `${el.price}`;
            cardPrice.prepend(price);

            /////////////////////////////
            const rating: HTMLElement | String = document.createElement('div');
            rating.className = 'products-card__rating';
            if (el.rating === 5) {
                rating.innerHTML = `Rating: ${el.rating}/5`
            }
            else {
                rating.innerHTML = `Rating: ${el.rating}/5.0`
            }
            Card.prepend(rating);
            /////////////////////////////
            const manufacrure: HTMLElement = document.createElement("div");
            manufacrure.className = 'products-card__manufacturer';
            Card?.prepend(manufacrure);
            const manufacrureName: HTMLElement | String = document.createElement('p');
            manufacrureName.className = 'manufacturer';
            manufacrureName.innerHTML = `Manufacrer: ${el.brand}`
            manufacrure.prepend(manufacrureName);
            ////////////////////////////////////////
            const CardTitle: HTMLElement = document.createElement('div');
            CardTitle.className = 'products-card__name';
            Card?.prepend(CardTitle);
            const Name = document.createElement('h3');
            Name.className = 'name';
            CardTitle?.prepend(Name);
            Name.innerText = el.title;
            ///////////////////////////
            const Img: HTMLImageElement | String = document.createElement('img');
            Img.className = 'products-card__img';
            Img.src = `${el.img[0]}`
            Card?.prepend(Img);
        })
    }
    CardProd();
    for (let i = 0; i < dropdownListItem.length; i++) {
        dropdownListItem[i].addEventListener('click', () => {
            if (dropdownListItem[i].lastChild?.nodeValue === "auto") {
                clear();
                CardProd()
            } else {
                if (dropdownListItem[i].lastChild?.nodeValue === "price ASC") {
                    clear()
                    sortMaxValue();
                } else {
                    if (dropdownListItem[i].lastChild?.nodeValue === "price DESC") {
                        clear();
                        sortMinValue();
                    } else {
                        if (dropdownListItem[i].lastChild?.nodeValue === "rating ASC") {
                            clear();
                            sortMaxRating();
                        } else {
                            if (dropdownListItem[i].lastChild?.nodeValue === "rating DESC") {
                                clear();
                                sortMinRating();
                            } else {
                                if (dropdownListItem[i].lastChild?.nodeValue === "discount ASC") {
                                    clear();
                                    sortMinDiscount();
                                } else {
                                    if (dropdownListItem[i].lastChild?.nodeValue === "discount DESC") {
                                        clear();
                                        sortMaxDiscount();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
}
export { search }


