class RemoveUserIdFromHappening < ActiveRecord::Migration
  def change
    remove_column :happenings, :user_id
  end
end
