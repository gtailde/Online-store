import{ Products } from '../src/data/data';
import { basketData } from './basket';


let arr:Products[] = [];

function basketAdd(obj: Products){
  arr.push(obj);
  counterInMainPg(arr);
  if(typeof(basketData.productsCout) === 'number' && typeof(basketData.totalProductsInBasket) === 'number'){
    obj.total = 1;
    basketData.productsCout += Number(obj.price.split('$')[0]);
    basketData.totalProductsInBasket += 1;
     
  };
};

function basketRemove(obj: Products){
  if(typeof(basketData.productsCout) === 'number' && typeof(basketData.totalProductsInBasket) === 'number'){
    obj.total = 1;
    basketData.productsCout += Number(obj.price.split('$')[0]);
    basketData.totalProductsInBasket += 1;
     
  };

  arr.forEach((val, i) => {
    val.title === obj.title ? arr.splice(i, 1) : i;
  });

  counterInMainPg(arr);  
}

let sum: number = 0;
let Item: number = 0;

function counterInMainPg(arr:Products[]){
  
  const basketCounters = <HTMLSpanElement>document.querySelector('.Basket__counter');
  Item = arr.reduce((acc, val) => acc + val.total, 0);
  if(arr.length > 0){
    basketCounters.setAttribute('style', 'display: block;');
    basketCounters.textContent = `${Item}`;
  } else {
    basketCounters.setAttribute('style', 'display: none;');
    basketCounters.textContent = `0`;
  }

  const total = <HTMLSpanElement>document.querySelector('.total');
  sum = arr.reduce((acc, val) => acc + Number(val.price.slice(0, val.price.indexOf('$'))) * val.total, 0);
  total.textContent = `Total: ${sum}$`;

}

export { basketAdd, basketRemove, arr, sum, counterInMainPg, Item }