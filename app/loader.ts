import { data, allCategories, allManufacturers } from "../src/data/data"

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

export { loadFilters }