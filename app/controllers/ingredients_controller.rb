class IngredientsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    wrap_parameters format: []

    def index
        ingredients = Ingredient.all 
        render json: ingredients, status: :ok 
    end

    def create 
        ingredient = Ingredient.create(ingredient_params)
        render json: ingredient, status: :created
    end

    def update
        ingredient = find_ingredient
        Ingredient.update(ingredient_params)
        render json: ingredient, status: :created 
    end

    def destroy
        ingredient = find_ingredient
        Ingredient.destroy
        head :no_content
    end

    private

    def ingredient_params
        params.permit(:name, :image)
    end

    def find_ingredient
        Ingredient.find(params[:id])
    end

    def render_not_found_response
        render json: { error: ingredient.errors.full_messages }, status: :not_found 
    end
    
end
