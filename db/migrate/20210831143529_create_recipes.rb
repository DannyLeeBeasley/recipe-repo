class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :image
      t.text :description

      t.timestamps
    end
  end
end
