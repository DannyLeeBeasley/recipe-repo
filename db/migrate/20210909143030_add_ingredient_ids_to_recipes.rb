class AddIngredientIdsToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :ingredient_ids, :integer, array: true, default: []
  end
end
