import { data, allCategories, allManufacturers } from "../src/data/data"

const loadFilters = () => {
  const getCategoriesFilter: HTMLElement | null = document.querySelector('.main__filter__categories-block');
  const createCategoriesFilter: HTMLElement = document.createElement('div');
  createCategoriesFilter.className = 'main__filter__categories';
  const input: HTMLInputElement = document.createElement('input');
  input.type = 'checkbox';
  input.className = 'main__filter-categories-checkbox';
  const label: HTMLLabelElement = document.createElement('label');
  label.className = 'main__filter-categories-item';

  allCategories.forEach((name) => {
    createCategoriesFilter.innerHTML += `
    <label class="main__filter-categories-item">
      <input type='checkbox'class='main__filter-categories-checkbox'>${name}
    </label>`

  });

  getCategoriesFilter?.append(createCategoriesFilter);
  const fkfk = document.querySelector("input[checkbox].main__filter-categories-checkbox");
  console.log(fkfk)

  const getManufacturerFilter: HTMLElement | null = document.querySelector('.main__filter__manufacturers');
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