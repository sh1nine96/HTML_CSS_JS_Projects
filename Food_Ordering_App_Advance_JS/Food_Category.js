"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food_Category = void 0;
var FOOD_CATEGORY_BIRYANI = "biryani";
var FOOD_CATEGORY_CHICKEN = "chicken";
var FOOD_CATEGORY_PANEER = "paneer";
var FOOD_CATEGORY_VEGETABLE = "vegetable";
var FOOD_CATEGORY_CHINESE = "chinese";
var FOOD_CATEGORY_SOUTH_INDIAN = "south-indian";
var Food_Category = /** @class */ (function () {
    function Food_Category(name) {
        this.name = name;
    }
    Food_Category.prototype.display = function () {
        console.log("category name is: ".concat(this.name));
    };
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_BIRYANI", {
        get: function () {
            return FOOD_CATEGORY_BIRYANI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_CHICKEN", {
        get: function () {
            return FOOD_CATEGORY_CHICKEN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_PANEER", {
        get: function () {
            return FOOD_CATEGORY_PANEER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_VEGETABLE", {
        get: function () {
            return FOOD_CATEGORY_VEGETABLE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_CHINESE", {
        get: function () {
            return FOOD_CATEGORY_CHINESE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food_Category, "FOOD_CATEGORY_SOUTH_INDIAN", {
        get: function () {
            return FOOD_CATEGORY_SOUTH_INDIAN;
        },
        enumerable: false,
        configurable: true
    });
    return Food_Category;
}());
exports.Food_Category = Food_Category;
var fc1 = new Food_Category(FOOD_CATEGORY_BIRYANI);
fc1.display();
