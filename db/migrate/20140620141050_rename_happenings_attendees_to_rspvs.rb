class RenameHappeningsAttendeesToRspvs < ActiveRecord::Migration
  def change
    rename_table :happenings_attendees, :rsvps
  end
end
