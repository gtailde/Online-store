const dropdownBtn = document.querySelector(".dropdown__button"),
dropdownList = document.querySelector(".dropdown__list"),
dropdownListItem = document.querySelectorAll(".dropdown__list-item"),
dropdownContainer = document.querySelector(".info-for-users__dropdown-container");

let typeSort = 'auto';

dropdownContainer.addEventListener("click", el => {
  
  if(el.target.className === "dropdown__button"){
    dropdownList.classList.toggle("drop");
  } else if (el.target.className === "dropdown__list-item"){
    
    typeSort = el.target.textContent;
    dropdownBtn.textContent = typeSort; 
    dropdownList.classList.toggle("drop");
    
    dropdownListItem.forEach(e => {e.className.includes("active-sort") ? e.classList.remove('active-sort') : e});
    el.target.classList.add("active-sort");
  
  } else if(el.target.className === "dropdown__list-item active-sort") dropdownList.classList.toggle("drop");
 

});
// const al = alert('При приминении фильтров страница корзины, товара не работает. Для проверки остальных критериев пожалуйста перезагрузите страницу');
