module Api
  class UsersController < ApplicationController
    def update
      binding.pry
      user = User.find(params[:id])
      if user.update_attributes!(user_params)
        flash[:message] = "success!!"
      else
        flash[:error] = "error"
      end
    end

    private

    def user_params
      params.require(:user).permit(:id, :work_zip, :home_zip)
    end
  end
end

