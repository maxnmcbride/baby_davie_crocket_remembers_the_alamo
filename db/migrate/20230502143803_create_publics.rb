class CreatePublics < ActiveRecord::Migration[7.0]
  def change
    create_table :publics do |t|
      t.text :comment
      t.decimal :rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :park, null: false, foreign_key: true

      t.timestamps
    end
  end
end
