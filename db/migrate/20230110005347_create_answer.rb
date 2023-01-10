class CreateAnswer < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.references :project, index: true, foriegn_key: true
      t.references :question, index: true, foriegn_key: true
      t.text :conclusion

      t.timestamps
    end
  end
end
