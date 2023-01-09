const searchBtn: HTMLDivElement = document.querySelector(".search-btn")!,
  cancelBtn: HTMLDivElement = document.querySelector(".cancel-btn")!,
  searchBox: HTMLDivElement = document.querySelector(".searchAndShoppingBasket__search")!,
  searchInput: HTMLDivElement = document.querySelector(".search-input")!;


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