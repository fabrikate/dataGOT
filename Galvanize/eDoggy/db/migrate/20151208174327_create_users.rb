class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :location
      t.string :name
      t.boolean :dog_owner
      t.boolean :dog_walker
      t.integer :dogs, array: true, default: []
      t.string :email
      t.string :password
      t.string :password_digest
      t.string :profileURL

      t.timestamps null: false
    end
  end
end
