"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food_Category_1 = require("./Food_Category");
var FoodItem = /** @class */ (function () {
    // [x: string]: string;
    function FoodItem(name, category, userRating, price, imagepath) {
        this.name = name;
        this.category = category;
        this.userRating = userRating;
        this.price = price;
        this.imagepath = imagepath;
    }
    FoodItem.prototype.display = function () {
        console.log("name of the food is: ".concat(this.name));
    };
    return FoodItem;
}());
var fc1 = new Food_Category_1.Food_Category(Food_Category_1.Food_Category.FOOD_CATEGORY_BIRYANI);
var foodItem1 = new FoodItem("Ambur Biryani", fc1, 4.5, 10, "");
foodItem1.display();
