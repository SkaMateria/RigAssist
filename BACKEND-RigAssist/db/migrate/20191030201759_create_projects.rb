class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :user_id
      t.integer :animation_id

      t.timestamps
    end
  end
end
