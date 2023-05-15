class UsersController < ApplicationController
    wrap_parameters format: []

    def create 
        user = User.create!(user_params)
        render json: user
    end

    def show
	# finds user by checking sessions (it was assigned in the logg in method already using params)
    user = User.find_by(id: session[:user_id])
        if user
        # we use this info in the front end to assign to state
        render json: user
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end


end
