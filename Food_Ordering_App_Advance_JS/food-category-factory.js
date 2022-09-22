"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodCategoryFactory = void 0;
const Food_Category_1 = require("./Food_Category");
class FoodCategoryFactory {
    static getCategories() {
        let result = new Array();
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_BIRYANI));
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_CHICKEN));
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_CHINESE));
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_PANEER));
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_SOUTH_INDIAN));
        result.push(new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_VEGETABLE));
        return result;
    }
}
exports.FoodCategoryFactory = FoodCategoryFactory;
console.log(FoodCategoryFactory.getCategories());
