class CreateNodes < ActiveRecord::Migration[7.1]
  def change
    create_table :nodes do |t|
      t.string :title, null: false
      t.text :description
      t.string :type
      t.belongs_to  :owner, null: false, foreign_key: { to_table: :users }
      
      t.timestamps
    end
  end
end
