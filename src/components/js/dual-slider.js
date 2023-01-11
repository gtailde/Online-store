const rangeInput = document.querySelectorAll(".input-range"),
  priceInput = document.querySelectorAll(".price-input"),
  progress = document.querySelector(".progress");

let priceGap = 500;

priceInput.forEach(input => {
  input.addEventListener("input", el => {

    let minVal = parseInt(priceInput[0].value),
      maxVal = parseInt(priceInput[1].value);

    if ((maxVal - minVal >= priceGap) && maxVal <= 5000) {

      if (el.target.className === 'input-field__min price-input') {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      };

    };
  });
});

rangeInput.forEach(input => {
  input.addEventListener("input", el => {

    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {

      if (el.className === 'range-min input-range') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      };

    } else {

      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";

    };
  });
});


const stockRange = document.querySelectorAll(".stock-slider"),
  stockInput = document.querySelectorAll(".stock-input"),
  stockProgress = document.querySelector(".stock-progress");

let stockGap = 10;

stockInput.forEach(input => {
  input.addEventListener("input", el => {

    let minVal = parseInt(stockInput[0].value),
      maxVal = parseInt(stockInput[1].value);

    if ((maxVal - minVal >= stockGap) && maxVal <= 150) {

      if (el.target.className === 'input-field__min stock-input') {
        stockRange[0].value = minVal;
        stockProgress.style.left = (minVal / stockRange[0].max) * 100 + "%";
      } else {
        stockRange[1].value = maxVal;
        stockProgress.style.right = 100 - (maxVal / stockRange[1].max) * 100 + "%";
      };

    };
  });
});

stockRange.forEach(input => {
  input.addEventListener("input", el => {

    let minVal = parseInt(stockRange[0].value),
      maxVal = parseInt(stockRange[1].value);

    if (maxVal - minVal < stockGap) {

      if (el.target.className === 'range-min input-range stock-slider') {
        stockRange[0].value = maxVal - stockGap;
      } else {
        stockRange[1].value = minVal + stockGap;
      };

    } else {

      stockInput[0].value = minVal;
      stockInput[1].value = maxVal;
      stockProgress.style.left = (minVal / stockRange[0].max) * 100 + "%";
      stockProgress.style.right = 100 - (maxVal / stockRange[1].max) * 100 + "%";

    };
  });
});