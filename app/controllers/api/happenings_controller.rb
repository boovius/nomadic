module Api
  class HappeningsController < ApplicationController
    def create
      happening = Happening.create(happening_params)
      if happening
        render json: happening
      else
        render json: {error: "there was a problem"}, status: 422
      end
    end

    private

    def happening_params
      params.require(:happening).permit(:id, :title, :description)
    end
  end
end
