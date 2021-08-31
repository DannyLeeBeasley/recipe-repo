class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :unit
  has_one :recipe
  has_one :ingredient
end
