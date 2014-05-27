class NgViewController < ApplicationController
  def index
    redirect_to signin_url unless current_user
  end
end
