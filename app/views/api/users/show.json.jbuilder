json.current_user do |json|
  json.id          @current_user.id
  json.first_name  @current_user.first_name
  json.last_name   @current_user.last_name
  json.img         @current_user.img
end
