class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: recipes
    end

    # def create
    #     recipe = Recipe.create(recipe_params)
    # end
        
end
