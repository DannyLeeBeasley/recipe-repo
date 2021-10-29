class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description
  has_one :user
end
