class CreateDogWalkers < ActiveRecord::Migration
  def change
    create_table :dog_walkers do |t|
      t.integer :user_id
      t.boolean :has_dogs
      t.string :availability
      t.integer :rating
      t.string :fbInfo

      t.timestamps null: false
    end
  end
end
