import { FoodCategory } from "./Food_Category";
import { foodItemsDataArray } from "./food-item-data";

class FoodItemsFactory {
  static loadItems(foodCategory: any) {
    let foodItemsResult = new Array();

    foodItemsDataArray.forEach((foodItem) => {
      if (foodItem.category == foodCategory.name) {
        foodItemsResult.push(foodItem);
      }
    });

    return foodItemsResult;
  }
}
