class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env['omniauth.auth'])
    session[:user_id] = user.id
    if user.profile_incomplete?
      redirect_to '/edit_profile'
    else
      redirect_to root_url
    end
  end

  def destroy
    @current_user = nil
    session[:user_id] = nil
    redirect_to root_url
  end
end
