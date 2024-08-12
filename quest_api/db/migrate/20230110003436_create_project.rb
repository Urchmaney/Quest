class CreateProject < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :aim_description
      t.boolean :private, default: false
      t.references :created_by, index: true, foriegn_key: { to_table: :users }

      t.timestamps
    end
  end
end
