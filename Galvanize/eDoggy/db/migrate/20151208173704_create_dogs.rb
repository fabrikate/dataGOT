class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.integer :user_id
      t.string :name
      t.string :age
      t.string :weight
      t.string :aggression
      t.integer :confidence
      t.string :training, array: true, default: []
      t.integer :rating

      t.timestamps null: false
    end
  end
end
