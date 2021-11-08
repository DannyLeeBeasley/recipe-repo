class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :instructions, :recipe_ingredients
  has_one :user
end
