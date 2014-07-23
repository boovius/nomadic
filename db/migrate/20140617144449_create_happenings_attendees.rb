class CreateHappeningsAttendees < ActiveRecord::Migration
  def change
    create_table :happenings_attendees do |t|
      t.integer :happening_id
      t.integer :user_id
    end
  end
end
