const searchBtn = document.querySelector(".search-btn"),
cancelBtn = document.querySelector(".cancel-btn"),
searchBox = document.querySelector(".searchAndShoppingBasket__search"),
searchInput = document.querySelector(".search-input");


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