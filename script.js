// Script.js

const rangeValue = document.querySelector(".slider-container .price-slider");
const rangeInputValue = document.querySelector(".range-input input");

// Set the price gap
let priceGap = 500;

// Adding event listeners to price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {


        // Parse min and max values of the range input
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp;
        
        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }

        // Validate the input values
        if (maxp > 10000) {
            alert("maximum price cannot be less than 0");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;
            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        // Check if the price gap is met
        // and max price is within the range
        if (diff >= priceGap && maxp <= rangeInputValue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputValue[0].value = minp;
                let value1 = rangeInputValue[0].max;
                rangeValue.style.left = `${(minp / value1) * 100}%`;
            }
            else {
                rangeInputValue[1].value = maxp;
                let value2 = rangeInputValue[1].max;
                rangeValue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
        }
    });
}