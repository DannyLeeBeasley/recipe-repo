class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  def authorize
    @current_user = User.find_by(id:session[:user_id])
    render json: {error:["Create an Account or Login"]}, status: :unauthorized unless @current_user
  end 

end
