class AddPrepNotesToRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :recipe_ingredients, :prep_notes, :string
  end
end
