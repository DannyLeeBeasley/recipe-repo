class RemoveIngredientIdsAttributeFromRecipes < ActiveRecord::Migration[6.1]
  def change
    remove_column :recipes, :ingredient_ids, :integer, array: true, default: []
  end
end
