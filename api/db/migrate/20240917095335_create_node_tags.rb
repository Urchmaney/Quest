class CreateNodeTags < ActiveRecord::Migration[7.1]
  def change
    create_table :node_tags do |t|
      t.belongs_to :node
      t.belongs_to :tag
      
      t.timestamps
    end
  end
end
