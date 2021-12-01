class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :unit, :prep_notes
  has_one :recipe
  has_one :ingredient
end
