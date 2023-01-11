import { maxSatisfying } from "semver";
import { data, Products } from "../src/data/data";

const priceInput = document.querySelectorAll<HTMLInputElement>(".price-input");
const inputRange = document.querySelectorAll<HTMLInputElement>(".input-range");
const BlockProducts: HTMLElement | null = document.querySelector('.main__block-products');
const stockRange = document.querySelectorAll<HTMLInputElement>(".stock-slider");
const stockInput = document.querySelectorAll<HTMLInputElement>(".stock-input");
const blblblb: HTMLElement = document.querySelector('.block-products')!;
let sds: Products[] = [];
function createCard(name: Products[]) {
    for (let i = 0; i < name.length; i++) {
        const Card: HTMLElement = document.createElement('div');
        Card.className = 'products-card';
        BlockProducts?.prepend(Card);
        /////////////////////////////
        const cardFlex: HTMLElement = document.createElement('div');
        cardFlex.className = 'products-card__flex';
        Card.append(cardFlex);
        ////////////////////////////
        const basket: HTMLElement = document.createElement('div');
        basket.className = 'products-card__basket';
        cardFlex.append(basket);
        /////////////////////////////
        const cardPrice: HTMLElement = document.createElement('div');
        cardPrice.className = 'products-card__price';
        cardFlex.append(cardPrice);

        ////////////////////////////
        const discount: HTMLElement | String = document.createElement('div');
        discount.className = 'discount';
        discount.innerHTML = `-${name[i].discountPercentage}`;
        cardPrice.prepend(discount);
        /////////////////////////////   

        const price: HTMLElement | String = document.createElement('h3');
        price.innerHTML = `${name[i].price}`;
        cardPrice.prepend(price);

        /////////////////////////////
        const rating: HTMLElement | String = document.createElement('div');
        rating.className = 'products-card__rating';
        if (name[i].rating === 5) {
            rating.innerHTML = `Rating: ${name[i].rating}/5`
        }
        else {
            rating.innerHTML = `Rating: ${name[i].rating}/5.0`
        }
        Card.prepend(rating);
        /////////////////////////////
        const manufacrure: HTMLElement = document.createElement("div");
        manufacrure.className = 'products-card__manufacturer';
        Card?.prepend(manufacrure);
        const manufacrureName: HTMLElement | String = document.createElement('p');
        manufacrureName.className = 'manufacturer';
        manufacrureName.innerHTML = `Manufacrer: ${name[i].brand}`
        manufacrure.prepend(manufacrureName);
        ////////////////////////////////////////
        const CardTitle: HTMLElement = document.createElement('div');
        CardTitle.className = 'products-card__name';
        Card?.prepend(CardTitle);
        const Name = document.createElement('h3');
        Name.className = 'name';
        CardTitle?.prepend(Name);
        Name.innerText = name[i].title;
        ///////////////////////////
        const Img: HTMLImageElement | String = document.createElement('img');
        Img.className = 'products-card__img';
        Img.src = `${name[i].img[0]}`
        Card?.prepend(Img);
    }
}//создаю карты 
priceInput.forEach(input => {
    inputRange.forEach(input => {
        input.addEventListener("input", el => {
            let massObject: Products[] = data.flat(2);
            let minVal = parseInt(priceInput[0].value);
            let maxVal: number = parseInt(priceInput[1].value);
            let minVal1 = priceInput[0].value;
            let maxVal1 = Number(priceInput[1].value);
            let mass = Array.from(
                { length: maxVal - minVal },
                (_, i) => minVal + 1 + i
            )
            console.log(mass[0], mass[mass.length - 1])
            // console.log(mass.filter(el => { console.log(el) }));
            // добавлены скобки вокруг выражения для улучшения читабельности
            let gg = massObject.filter((item: Products) => {
                if (mass[0] <= Number(item.price.split("$").join('')) && Number(item.price.split("$").join('')) <= mass[mass.length - 1]) {
                    return item;
                }
            });
            console.log(gg)
            blblblb.innerHTML = ""
            createCard(gg);
        })

    })


})
stockInput.forEach(input => {
    stockRange.forEach(input => {
        input.addEventListener("input", el => {
            let massObject: Products[] = data.flat(2);
            let minVal: number = parseInt(stockInput[0].value);
            let maxVal: number = parseInt(stockInput[1].value);
            let mass = Array.from(
                { length: maxVal - minVal },
                (_, i) => minVal + 1 + i
            )
            let gg = massObject.filter((item: Products) => {
                if (mass[0] <= item.stock && item.stock <= mass[mass.length - 1]) {
                    return item;

                }
            });
            blblblb.innerHTML = ""
            createCard(gg);
        })
    })
})
stockInput.forEach(input => {
    priceInput.forEach(input => {
        inputRange.forEach(input => {
            input.addEventListener("input", el => {
                let massObject: Products[] = data.flat(2);
                let minVal = parseInt(priceInput[0].value);
                let maxVal: number = parseInt(priceInput[1].value);
                let minVal1 = priceInput[0].value;
                let maxVal1 = Number(priceInput[1].value);
                let mass = Array.from(
                    { length: maxVal - minVal },
                    (_, i) => minVal + 1 + i
                )
                console.log(mass[0], mass[mass.length - 1])
                // console.log(mass.filter(el => { console.log(el) }));
                // добавлены скобки вокруг выражения для улучшения читабельности
                let gg = massObject.filter((item: Products) => {
                    if (mass[0] <= Number(item.price.split("$").join('')) && Number(item.price.split("$").join('')) <= mass[mass.length - 1]) {
                        return item;
                    }
                });
                console.log(gg)
                blblblb.innerHTML = ""
                createCard(gg);
            })
        })
        stockRange.forEach(input => {
            input.addEventListener("input", el => {
                let massObject: Products[] = data.flat(2);
                let minVal: number = parseInt(stockInput[0].value);
                let maxVal: number = parseInt(stockInput[1].value);
                let mass = Array.from(
                    { length: maxVal - minVal },
                    (_, i) => minVal + 1 + i
                )
                let gg = massObject.filter((item: Products) => {
                    if (mass[0] <= item.stock && item.stock <= mass[mass.length - 1]) {
                        return item;

                    }
                });
                blblblb.innerHTML = ""
                createCard(gg);
            })
        })
    })
})
