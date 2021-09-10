class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :ingredient_ids
  has_one :user
end
