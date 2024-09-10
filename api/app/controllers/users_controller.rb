class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  # GET /users/{username}
  def show
    render json: @current_user, status: :ok
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # PUT /users/{username}
  def update
    unless @current_user.update(user_params)
      render json: { errors: @user.errors.full_messages },
              status: :unprocessable_entity
    end

    render json: @current_user, status: :ok
  end

  private

  def user_params
    params.permit(
      :full_name, :email, :password, :password_confirmation
    )
  end
end
