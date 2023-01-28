class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.references :project, index: true, foriegn_key: true
      t.string :ask
      t.boolean :verified

      t.timestamps
    end
  end
end
