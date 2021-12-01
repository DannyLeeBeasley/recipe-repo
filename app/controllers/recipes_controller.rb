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
        recipe_attributes = recipe_params.slice("user_id", "name", "image", "description", "instructions")
        recipe = Recipe.create(recipe_attributes)
        recipe_params["recipe_ingredients"].each do |recipe_ingredient|
            rpi = RecipeIngredient.create(ingredient_id: recipe_ingredient["ingredient_id"], recipe: recipe, amount: recipe_ingredient["amount"], unit: recipe_ingredient["unit"], prep_notes: recipe_ingredient["prep_notes"])
        end
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        recipe_attributes = recipe_params.slice("user_id", "name", "image", "description", "instructions")
        recipe.update(recipe_attributes)
        recipe_params["recipe_ingredients"].each do |recipe_ingredient|
            update_or_create_recipe_ingredient(recipe_ingredient)
        end
        render json: recipe, status: :created 
    end

    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end

    private

    def recipe_params
        @recipe_params ||= params.permit(:id, :user_id, :name, :image, :description, :instructions, :recipe_ingredients => [:id, :recipe_id, :ingredient_id, :amount, :unit, :prep_notes])
    end

    def find_recipe
        Recipe.find(params[:id])
    end

    def render_not_found_response
        render json: { error: recipe.errors.full_messages }, status: :not_found 
    end

    def update_or_create_recipe_ingredient(recipe_ingredient)
        if recipe_ingredient["id"].present?
            RecipeIngredient.find(recipe_ingredient["id"]).update(recipe_ingredient)  
        else
            RecipeIngredient.create(recipe_ingredient)
        end
    end
         
end
