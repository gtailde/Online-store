import { data, Products } from "../src/data/data"

let obj: Products;

function getElement(el: string){
  data.forEach((e) => {
    e.forEach((elem) => {
      if(elem.title === el){
        obj = elem;
      };
    });
  });
  return obj;  
}

export { getElement }