class Happening < ActiveRecord::Base
  belongs_to :creator,   foreign_key: :user_id, class_name: "User"
  has_many   :attendees, foreign_key: :user_id, class_name: "User"
end
