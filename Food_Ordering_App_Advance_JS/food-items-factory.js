"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
