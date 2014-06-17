class AddTribeIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :tribe_id, :integer
  end
end
