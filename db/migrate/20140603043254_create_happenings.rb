class CreateHappenings < ActiveRecord::Migration
  def change
    create_table :happenings do |t|
      t.string   :title
      t.text     :description
      t.string   :image
      t.string   :type
      t.string   :street
      t.string   :city
      t.string   :state
      t.string   :zip
      t.float    :lat
      t.float    :long
      t.timestamps
    end
  end
end
