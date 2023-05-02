class CreateUserParks < ActiveRecord::Migration[7.0]
  def change
    create_table :user_parks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :park, null: false, foreign_key: true
      t.boolean :favorite
      t.boolean :visited
      t.boolean :wishlist
      t.text :personal_note

      t.timestamps
    end
  end
end
