class Api::V1::ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :destroy, :update]
  access all: [:index, :show], site_admin: :all

  def index
    project = Project.all.order(created_at: :desc)

    render json: project

  end

  def auth 
    if logged_in?(:site_admin)
      render json: { status: 'success', message: 'logged in' }
    else
      render json: { status: 'error', message: 'not logged in' }
    end
  end

  def create
    project = Project.create!(project_params)
    if project
      render json: project
    else
      render json: project.errors
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @project
  end

  def destroy
    @project&.destroy
    render json: { message: 'Project deleted!' }
  end

  private

  def project_params
    params.permit(:title, :description, :video_url, :thumbnail)
  end

  def set_project
    @project = Project.find(params[:id])
  end
end
