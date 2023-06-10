class CreateTables < ActiveRecord::Migration[6.1]
    def change
      create_table :users do |t|
        t.string :name
      end
  
      create_table :foods do |t|
        t.string :name
        t.string :image
        t.text :description
      end
  
      create_table :likes do |t|
        t.belongs_to :user
        t.belongs_to :food
      end
    end
  end
  