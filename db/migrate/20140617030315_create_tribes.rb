class CreateTribes < ActiveRecord::Migration
  def change
    create_table :tribes do |t|
      t.string "name"
      t.string "home_zip"
      t.string "work_zip"
      t.timestamps
    end
  end
end
