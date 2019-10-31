class AnimationsController < ApplicationController
    def index
        render json: Animation.all
    end

    def create
        animation = Animation.create(params[:animation])
        render json: animation
    end

    def update
    end
    
    def edit
    end

    def destroy
    end
end
