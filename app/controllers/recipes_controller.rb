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
        byebug
        recipe_attributes = recipe_params.slice("user_id", "name", "image", "description")
        recipe = Recipe.create(recipe_attributes)

        recipe_params["recipe_ingredients"].each do |recipe_ingredient|
            RecipeIngredient.create(ingredient_id: recipe_ingredient["id"], recipe: recipe, amount: recipe_ingredient["amount"], unit: recipe_ingredient["unit"])
        end

        # recipe_params.recipe_ingredients.each do |recipe_ingredient|
            
        #     recipe_ingredient_params = {}
        #     recipe_ingredient_params.recipe_id = recipe.id
        #     recipe_ingredient_params.ingredient_id = recipe_ingredient.id
        #     recipe_ingredient_params.amount = recipe_ingredient.amount
        #     recipe_ingredient_params.unit = recipe_ingredient.unit

        #     recipe_ingredient = RecipeIngredient.create(recipe_ingredient_params)
        #     print(recipe_ingredient)
        # end

        # # create recipe ingridient records

        render json: recipe, status: :created
    end

    def update
        byebug
        recipe = find_recipe
        recipe_attributes = recipe_params.slice("user_id", "name", "image", "description")
        recipe = Recipe.update(recipe_attributes)
        RecipeIngredient.where(recipe_id: recipe.id).destroy_all
        recipe_params["recipe_ingredients"].each do |recipe_ingredient|
            RecipeIngredient.create(ingredient_id: recipe_ingredient["id"], recipe: recipe, amount: recipe_ingredient["amount"], unit: recipe_ingredient["unit"])
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
        # params.require(:recipe).permit(:user_id, :name, :image, :description, :recipe_ingredients =>[])
        @recipe_params ||= params.permit(:user_id, :name, :image, :description, :recipe_ingredients =>[:id, :name, :image, :amount, :unit])
    end

    def find_recipe
        Recipe.find(params[:id])
    end

    def render_not_found_response
        render json: { error: recipe.errors.full_messages }, status: :not_found 
    end
        
end
