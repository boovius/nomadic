class AddCreatorIdToHappening < ActiveRecord::Migration
  def change
    add_column :happenings, :creator_id, :integer
  end
end
