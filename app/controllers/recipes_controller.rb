class RecipesController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :show]

    def index
        recipes = Recipe.all   
        render json: recipes.as_json(include: :recipe_ingredients), status: :ok 
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    def create 
        recipe = Recipe.create(recipe_params)
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        recipe.update(recipe_params)
        render json: recipe, status: :created 
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end

    private

    def recipe_params
        params.permit(:user_id, :name, :image, :description, :ingredient_ids => [])
    end

    def find_recipe
        Recipe.find(params[:id])
    end

    def render_not_found_response
        render json: { error: recipe.errors.full_messages }, status: :not_found 
    end
        
end
