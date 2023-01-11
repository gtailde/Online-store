import { data, allCategories, allManufacturers, allTitle, Products } from '../../data/data';
import { CardProd } from '../../../app/cards';
const divElement = [...document.querySelectorAll<HTMLElement>('.products-card')!];

const Input: HTMLInputElement = document.querySelector('.search-input')!;
const InputButton: HTMLButtonElement = document.querySelector('.search-btn')!;
let boolBtn;
const BlockProducts: HTMLElement = document.querySelector('.main__block-products')!;
const articleBlock: HTMLElement = document.querySelector('.block-products')!;
const cancle = document.querySelector('.cancel-btn');
const titleMass = allTitle.map(el => { return el.toLowerCase() });
const mass = data.flat(3); console.log(mass);
let massCheck = [];
// Object.prototype.getKeyByValue = function (value: Products[], objs: Products[]) {
//     if (!objs) {
//         objs = []
//     }
// }

