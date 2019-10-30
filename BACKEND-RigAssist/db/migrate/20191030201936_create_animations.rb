class CreateAnimations < ActiveRecord::Migration[6.0]
  def change
    create_table :animations do |t|
      t.string :name
      t.text :settings

      t.timestamps
    end
  end
end
