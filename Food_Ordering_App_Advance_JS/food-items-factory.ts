import { FoodCategory } from "./Food_Category";
import { FoodItem } from "./Food_Item";
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

  static convert(foodItemData: {
    id: number;
    name: string;
    category: string;
    userRating: number;
    price: number;
    imagepath: unknown;
  }) {
    return new FoodItem(
      foodItemData.id,
      foodItemData.name,
      new FoodCategory(foodItemData.category),
      foodItemData.userRating,
      foodItemData.price,
      foodItemData.imagepath
    );
  }
}

let foodCategory1 = new FoodCategory(FoodCategory.FOOD_CATEGORY_BIRYANI);
foodCategory1.display();

let foodItemsObj = FoodItemsFactory.loadItems(foodCategory1);
console.log(foodItemsObj);

export { FoodItemsFactory };
