class Happening < ActiveRecord::Base
  belongs_to :creator,   foreign_key: :creator_id, class_name: "User"
  has_many   :rsvps
  has_many   :attendees, through: :rsvps
end
