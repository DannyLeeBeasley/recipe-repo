class AddInstructionsToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :intructions, :string
  end
end
