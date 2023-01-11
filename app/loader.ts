import { data, allCategories, allManufacturers, Products } from "../src/data/data"
import { confirm } from "./popup";
import { CardProd } from "./cards";

const loadFilters = () => {
  const BlockProducts: HTMLElement | null = document.querySelector('.main__block-products');
  const getCategoriesFilter: HTMLElement | null = document.querySelector('.main__filter__categories-block');
  const createCategoriesFilter: HTMLElement = document.createElement('div');
  createCategoriesFilter.className = 'main__filter__categories';
  const blblblb: HTMLElement = document.querySelector('.block-products')!;
  // let massel: Products[] = [];
  let massiveName: Products[] = data.flat();
  let categEl: Products[] = [];
  let list: Products[] = [];
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

  for (let i = 0; i < allCategories.length; i++) {//массив по созданию инпутов 
    let input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';

    input.className = 'main__filter-categories-checkbox';
    const label: HTMLLabelElement = document.createElement('label');
    label.className = 'main__filter-categories-item';
    createCategoriesFilter.append(label); input.textContent = allCategories[i];
    label.append(input);
    label.append(`${allCategories[i]}`)
    // input.nextSibling?.nodeValue
    input.addEventListener('click', () => {
      if (input.checked) {

        blblblb.innerHTML = "";
        categEl = massiveName.filter(el => allCategories[i] === el.category)
        list.push(...categEl);
      } else { list = list.filter(item => allCategories[i] !== item.category); if (list.length === 0) { blblblb.innerHTML = ""; CardProd() } }
      createCard(list)
    }
    )
  }

  getCategoriesFilter?.append(createCategoriesFilter);
  const getManufacturerFilter: HTMLElement | null = document.querySelector('.main__filter__manufacturers');
  const createManufacturersBlock: HTMLElement = document.createElement('div');
  createManufacturersBlock.className = 'main__filter__categories __manufacturers'
  for (let i = 0; i < allCategories.length; i++) {//массив по созданию инпутов 
    let input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';

    input.className = 'main__filter-manufacture-checkbox';
    const label: HTMLLabelElement = document.createElement('label');
    label.className = 'main__filter-manufacture-item';
    createManufacturersBlock.append(label); input.textContent = allManufacturers[i];
    label.append(input);
    label.append(`${allManufacturers[i]}`)
    // input.nextSibling?.nodeValue
    input.addEventListener('click', () => {
      if (input.checked) {
        blblblb.innerHTML = "";
        categEl = massiveName.filter(el => allManufacturers[i] === el.brand)
        list.push(...categEl);
      } else { list = list.filter(item => allManufacturers[i] !== item.brand); if (list.length === 0) { blblblb.innerHTML = ""; CardProd() } }
      createCard(list)
    }
    )
  }

  getManufacturerFilter?.append(createManufacturersBlock);
}

export { loadFilters }