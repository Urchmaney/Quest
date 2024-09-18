class CreateMember < ActiveRecord::Migration[7.1]
  def change
    create_table :members do |t|
      t.belongs_to :node
      t.belongs_to :user

      t.timestamps
    end
  end
end
