class RenameInstructionsColumnInRecipesTable < ActiveRecord::Migration[6.1]
  def change
    rename_column(:recipes, :intructions, :instructions)
  end
end
