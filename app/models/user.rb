class User < ApplicationRecord
    has_many :recipes
    has_many :recipe_ingredients, through: :recipes
    has_secure_password
end
