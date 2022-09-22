"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItem = void 0;
const Food_Category_1 = require("./Food_Category");
class FoodItem {
    // [x: string]: string;
    constructor(name, category, userRating, price, imagepath) {
        this.name = name;
        this.category = category;
        this.userRating = userRating;
        this.price = price;
        this.imagepath = imagepath;
    }
    display() {
        console.log(`name of the food is: ${this.name}`);
    }
}
exports.FoodItem = FoodItem;
let fc1 = new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_BIRYANI);
let foodItem1 = new FoodItem("Ambur Biryani", fc1, 4.5, 10, "");
foodItem1.display();
