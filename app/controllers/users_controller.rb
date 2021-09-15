class UsersController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:create]

    def create 
        user = User.create(user_params)
        render json: user, status: :created
    end


    private

    def user_params
        params.permit(:username, :password)
    end

    def render_not_found_response
        render json: { error: user.errors.full_messages }, status: :not_found 
    end
end
