class Tribe < ActiveRecord::Base
  has_many :users

  def happenings
    User.joins(:tribe).where(tribe: tribe)
  end
end
