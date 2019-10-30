class ProjectsController < ApplicationController
    def index
        render json: Project.all
    end

    def create
    end

    def update
    end

    def edit
    end

    def destroy
    end
end
