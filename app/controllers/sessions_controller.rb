class SessionsController < ApplicationController
    def create
    # looks up a user in the database using params (from frontend form)
    user = User.find_by(username: params[:username])

    # verify the login credentials
    session[:user_id] = user.id

    # store the authenticated user’s id in the session
    render json: user
    
    end
  end