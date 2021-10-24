class RecipeIngredientsController < ApplicationController
    def index
        recipe_ingredients = RecipeIngredient.all
        render json: recipe_ingredients, status: :ok
    end
end
