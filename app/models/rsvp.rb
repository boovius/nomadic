class Rsvp < ActiveRecord::Base
  belongs_to :happening
  belongs_to :attendee, foreign_key: :user_id, class_name: "User"
end
