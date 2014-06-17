class User < ActiveRecord::Base

  belongs_to :tribe

  def name
    "#{first_name} #{last_name}"
  end

  def profile_incomplete?
    home_zip.blank? || work_zip.blank?
  end

  def self.from_omniauth(auth)
    where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
      user.provider         = auth.provider
      user.uid              = auth.uid
      user.first_name       = auth.info.first_name
      user.last_name        = auth.info.last_name
      user.img              = auth.info.image
      user.oauth_token      = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end
end
