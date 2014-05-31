# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :user do
    provider         "provider"
    uid              "uid"
    # first_name       "first_name"
    # last_name        "last_name"
    oauth_token      "oauth_token"
    oauth_expires_at "2014-05-28 20:17:36"
  end
end
