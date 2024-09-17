class CreateTags < ActiveRecord::Migration[7.1]
  def change
    create_table :tags do |t|
      t.string :name
      t.text :description
      t.belongs_to :user
      t.integer :category, default: 0

      t.timestamps
    end
  end
end
