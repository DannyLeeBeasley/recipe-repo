class RecipeIngredientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []
    skip_before_action :authorize, only: [:index]

    def index
        recipe_ingredients = RecipeIngredient.all 
        render json: recipe_ingredients, status: :ok 
    end

    def create 
        recipe_ingredient = RecipeIngredient.create(recipe_ingredient_params)
        render json: recipe_ingredient, status: :created
    end

    def update
        recipe_ingredient = find_recipe_ingredient
        RecipeIngredient.update(recipe_ingredient_params)
        render json: recipe_ingredient, status: :created 
    end

    def destroy
        recipe_ingredient = find_recipe_ingredient
        recipe_ingredient.destroy
        head :no_content
    end

    private

    def recipe_ingredient_params
        params.permit(:id, :recipe_id, :ingredient_id, :amount, :unit)
    end

    def find_recipe_ingredient
        RecipeIngredient.find(params[:id])
    end

    def render_not_found_response
        render json: { error: recipe_ingredient.errors.full_messages }, status: :not_found 
    end


end
