const searchBtn = document.querySelector(".search-btn") as HTMLElement,
cancelBtn = document.querySelector(".cancel-btn") as HTMLElement,
searchBox = document.querySelector(".searchAndShoppingBasket__search") as HTMLElement,
searchInput = document.querySelector(".search-input") as HTMLInputElement;

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
}