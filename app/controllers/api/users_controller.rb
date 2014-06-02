module Api
  class UsersController < ApplicationController
    def update
      user = User.find(params[:id])
      if user.update_attributes!(user_params)
        render json: user
      else
        render json: {error: "there was a problem"}, status: 422
      end
    end

    private

    def user_params
      params.require(:user).permit(:id, :work_zip, :home_zip)
    end
  end
end

