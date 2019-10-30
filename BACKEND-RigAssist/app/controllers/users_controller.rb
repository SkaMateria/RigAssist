class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.create(params[:user])
        render json: user
    end

    def update
    end

    def edit
    end

    def destroy
    end
end
