import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class ShoppingListService {
  constructor() {}

  ingredients = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)];

  getIngredints() {
    return this.ingredients.slice();
  }

  addIngredint(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
