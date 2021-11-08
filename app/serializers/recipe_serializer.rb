class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :image, :description, :instructions, :recipe_ingredients
  has_one :user
end
