class AddLocationInfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :home_zip, :string
    add_column :users, :work_zip, :string
  end
end
