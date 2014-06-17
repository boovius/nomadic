class Tribe < ActiveRecord::Base
  has_many :users
  has_many :happenings, through: :creators, foreign_key: :user_id, class_name: "User"
end
