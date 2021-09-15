class SessionsController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: {cookies:cookies.to_hash, session:session}
    end 
 
    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user 
        else
            render json: {error: ['Invalid Username and/or Password']}
        end 
    end 

    def destroy
        session.delete :user_id
    end
    
end
