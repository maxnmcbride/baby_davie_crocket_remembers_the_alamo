class SessionsController < ApplicationController
    
    # User login, custom route
    def create
    # looks up a user in the database using params (from frontend form)
    # verify the login credentials
    # store the authenticated user’s id in the session
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
    end

    # logout custom route
    def destroy
        session.delete :user_id
        head :no_content
      end
  end