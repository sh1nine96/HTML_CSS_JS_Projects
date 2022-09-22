"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItemsFactory = void 0;
const Food_Category_1 = require("./Food_Category");
const Food_Item_1 = require("./Food_Item");
const food_item_data_1 = require("./food-item-data");
class FoodItemsFactory {
    static loadItems(foodCategory) {
        let foodItemsResult = new Array();
        food_item_data_1.foodItemsDataArray.forEach((foodItem) => {
            if (foodItem.category == foodCategory.name) {
                foodItemsResult.push(foodItem);
            }
        });
        return foodItemsResult;
    }
    static convert(foodItemData) {
        return new Food_Item_1.FoodItem(foodItemData.id, foodItemData.name, new Food_Category_1.FoodCategory(foodItemData.category), foodItemData.userRating, foodItemData.price, foodItemData.imagepath);
    }
}
exports.FoodItemsFactory = FoodItemsFactory;
let foodCategory1 = new Food_Category_1.FoodCategory(Food_Category_1.FoodCategory.FOOD_CATEGORY_BIRYANI);
foodCategory1.display();
let foodItemsObj = FoodItemsFactory.loadItems(foodCategory1);
console.log(foodItemsObj);
