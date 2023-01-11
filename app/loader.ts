import { data, allCategories, allManufacturers } from "../src/data/data"
import { confirm } from "./popup";

const loadFilters = () => {
  const getCategoriesFilter: HTMLElement | null = document.querySelector('.main__filter__categories-block');
  const createCategoriesFilter: HTMLElement = document.createElement('div');
  createCategoriesFilter.className = 'main__filter__categories';

  allCategories.forEach((name) => {
    createCategoriesFilter.innerHTML += `
    <label class="main__filter-categories-item">
      <input type="checkbox" class="main__filter-categories-checkbox">${name}
    </label>`
  });

  getCategoriesFilter?.append(createCategoriesFilter);


  const getManufacturerFilter: HTMLElement | null= document.querySelector('.main__filter__manufacturers');
  const createManufacturersBlock: HTMLElement = document.createElement('div');
  createManufacturersBlock.className = 'main__filter__categories __manufacturers'
  allManufacturers.forEach((name) => {
    createManufacturersBlock.innerHTML += `
    <label class="main__filter-categories-item">
      <input type="checkbox" class="main__filter-categories-checkbox">${name}
    </label>`
  })

  getManufacturerFilter?.append(createManufacturersBlock);
}

if( localStorage.getItem('submit') === 'true'){
  const myTimeout = setTimeout(confirm, 2500);
  localStorage.setItem('submit', 'false');
  console.log(localStorage.getItem('submit'))
}

export { loadFilters }