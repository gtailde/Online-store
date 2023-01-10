// import { data, Products } from "../../data/data";
// import { CardProd, BlockProducts } from '../../../app/cards';
// const divElement = [...document.querySelectorAll<HTMLDivElement>('.products-card')!];
// const blockFilter: HTMLElement = document.querySelector('.main__filter__categories')!;
// const blblblb: HTMLElement = document.querySelector('.block-products')!;
// let massivebb = data.flat(3);
// let massCatFirst: Products[] = [];
// // function clear(massCat: Products[]): void {
// //     massCatFirst = [massCat.forEach(el => { return el })]
// //     blblblb.innerHTML = `${massCat}`
// // }

// function createCard(mass: Products[]) {
//     let massiveName: Products[] = mass.map(el => { return el });
//     massiveName.forEach(el => {
//         const Card: HTMLElement = document.createElement('div');
//         Card.className = 'products-card';
//         BlockProducts?.prepend(Card);
//         /////////////////////////////
//         const cardFlex: HTMLElement = document.createElement('div');
//         cardFlex.className = 'products-card__flex';
//         Card.append(cardFlex);
//         ////////////////////////////
//         const basket: HTMLElement = document.createElement('div');
//         basket.className = 'products-card__basket';
//         cardFlex.append(basket);
//         /////////////////////////////
//         const cardPrice: HTMLElement = document.createElement('div');
//         cardPrice.className = 'products-card__price';
//         cardFlex.append(cardPrice);

//         ////////////////////////////
//         const discount: HTMLElement | String = document.createElement('div');
//         discount.className = 'discount';
//         discount.innerHTML = `-${el.discountPercentage}%`;
//         cardPrice.prepend(discount);
//         /////////////////////////////   

//         const price: HTMLElement | String = document.createElement('h3');
//         price.innerHTML = `${el.price}$`;
//         cardPrice.prepend(price);

//         /////////////////////////////
//         const rating: HTMLElement | String = document.createElement('div');
//         rating.className = 'products-card__rating';
//         if (el.rating === 5) {
//             rating.innerHTML = `Rating: ${el.rating}/5`
//         }
//         else {
//             rating.innerHTML = `Rating: ${el.rating}/5.0`
//         }
//         Card.prepend(rating);
//         /////////////////////////////
//         const manufacrure: HTMLElement = document.createElement("div");
//         manufacrure.className = 'products-card__manufacturer';
//         Card?.prepend(manufacrure);
//         const manufacrureName: HTMLElement | String = document.createElement('p');
//         manufacrureName.className = 'manufacturer';
//         manufacrureName.innerHTML = `Manufacrer: ${el.brand}`
//         manufacrure.prepend(manufacrureName);
//         ////////////////////////////////////////
//         const CardTitle: HTMLElement = document.createElement('div');
//         CardTitle.className = 'products-card__name';
//         Card?.prepend(CardTitle);
//         const Name = document.createElement('h3');
//         Name.className = 'name';
//         CardTitle?.prepend(Name);
//         Name.innerText = el.title;
//         ///////////////////////////
//         const Img: HTMLImageElement | String = document.createElement('img');
//         Img.className = 'products-card__img';
//         Img.src = `${el.img[0]}`
//         Card?.prepend(Img);
//     })
// }
// let first = massivebb.map(el => { return el.category });
// const newSet = new Set(first); const uniqueCat = Array.from(newSet);
// for (let i = 0; i <= uniqueCat.length; i++) {
//     const labelFilter: HTMLElement = document.createElement("label");
//     labelFilter.className = "main__filter-categories-item";
//     blockFilter.append(labelFilter);
//     const inputFilter: HTMLInputElement | String[] = document.createElement("input");
//     inputFilter.className = "main__filter-categories-checkbox";
//     inputFilter.type = "checkbox";
//     labelFilter.append(inputFilter)
//     labelFilter.append(`${uniqueCat[i].toUpperCase()}`);

//     inputFilter.addEventListener('click', () => {
//         blblblb.innerHTML = "";

//         if (inputFilter.nextSibling?.nodeValue === "BEDS") {
//             massCatFirst.push(...data[0])
//             createCard(massCatFirst);


//         } else if (inputFilter.nextSibling?.nodeValue === "DRESSERS") {
//             massCatFirst.push(...data[1]); createCard(massCatFirst)

//         } else if (inputFilter.nextSibling?.nodeValue === "TABLES") {
//             massCatFirst.push(...data[2]); createCard(massCatFirst);


//         } else if (inputFilter.nextSibling?.nodeValue === "CABINETS") {
//             massCatFirst.push(...data[3]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "BEDSIDE TABLES") {
//             massCatFirst.push(...data[4]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "SOFAS") {
//             massCatFirst.push(...data[5]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "CHAIRS") {
//             massCatFirst.push(...data[6]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "SHOWCASES") {
//             massCatFirst.push(...data[7])
//             massCatFirst.filter((el, i) => {
//                 return massCatFirst.indexOf(el) === i;
//             })

//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "KITCHENS") {
//             massCatFirst.push(...data[8]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "COFFEE TABLES") {
//             massCatFirst.push(...data[9]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "DRESSING TABLES") {
//             massCatFirst.push(...data[10]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "TV STANDS") {
//             massCatFirst.push(...data[11]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "BUFFETS") {
//             massCatFirst.push(...data[12]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "CUPBOARDS") {
//             massCatFirst.push(...data[13]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "SHELVES FOR BOOKS") {
//             massCatFirst.push(...data[14]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "POUFS OR ARMCHAIRS BAGS") {
//             massCatFirst.push(...data[15]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "HANGERS FOR CLOTHES") {
//             massCatFirst.push(...data[16]);
//             createCard(massCatFirst);

//         } else if (inputFilter.nextSibling?.nodeValue === "SHOE CABINET") {

//             massCatFirst.push(...data[17]);
//             createCard(massCatFirst);
//         } else if (inputFilter.nextSibling?.nodeValue === "MIRROR") {

//             massCatFirst.push(...data[18]);
//             createCard(massCatFirst);
//         } else if (inputFilter.nextSibling?.nodeValue === "MATTRESSES") {

//             massCatFirst.push(...data[19]);
//             createCard(massCatFirst);
//         }

        // if (inputFilter.checked === false) {
        //     // if (inputFilter.nextSibling?.nodeValue === "BEDS") {
        //     //     massCatFirst.slice(data[0])
        //     //     createCard(massCatFirst);


        //     // } else if (inputFilter.nextSibling?.nodeValue === "DRESSERS") {
        //     //     massCatFirst.push(...data[1]); createCard(massCatFirst)

        //     // } else if (inputFilter.nextSibling?.nodeValue === "TABLES") {
        //     //     massCatFirst.push(...data[2]); createCard(massCatFirst);


        //     // } else if (inputFilter.nextSibling?.nodeValue === "CABINETS") {
        //     //     massCatFirst.push(...data[3]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "BEDSIDE TABLES") {
        //     //     massCatFirst.push(...data[4]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "SOFAS") {
        //     //     massCatFirst.push(...data[5]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "CHAIRS") {
        //     //     massCatFirst.push(...data[6]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "SHOWCASES") {
        //     //     massCatFirst.push(...data[7])
        //     //     massCatFirst.filter((el, i) => {
        //     //         return massCatFirst.indexOf(el) === i;
        //     //     })

        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "KITCHENS") {
        //     //     massCatFirst.push(...data[8]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "COFFEE TABLES") {
        //     //     massCatFirst.push(...data[9]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "DRESSING TABLES") {
        //     //     massCatFirst.push(...data[10]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "TV STANDS") {
        //     //     massCatFirst.push(...data[11]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "BUFFETS") {
        //     //     massCatFirst.push(...data[12]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "CUPBOARDS") {
        //     //     massCatFirst.push(...data[13]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "SHELVES FOR BOOKS") {
        //     //     massCatFirst.push(...data[14]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "POUFS OR ARMCHAIRS BAGS") {
        //     //     massCatFirst.push(...data[15]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "HANGERS FOR CLOTHES") {
        //     //     massCatFirst.push(...data[16]);
        //     //     createCard(massCatFirst);

        //     // } else if (inputFilter.nextSibling?.nodeValue === "SHOE CABINET") {

        //     //     massCatFirst.push(...data[17]);
        //     //     createCard(massCatFirst);
        //     // } else if (inputFilter.nextSibling?.nodeValue === "MIRROR") {

        //     //     massCatFirst.push(...data[18]);
        //     //     createCard(massCatFirst);
        //     // } else if (inputFilter.nextSibling?.nodeValue === "MATTRESSES") {

        //     //     massCatFirst.push(...data[19]);
        //     //     createCard(massCatFirst);
        //     // }
        // }
    // })

    // if (inputFilter.checked === false) {
    //     clear()
    //     CardProd()
    // }

// }
// Input.forEach(el => {
//     if (el.) {
//         console.log(Input.nextSibling!.nodeValue)
//         if (Input.nextSibling!.nodeValue === "BEDS") {
//             clear();
//             createCard(data[0]);
//         }
//     }

// })
