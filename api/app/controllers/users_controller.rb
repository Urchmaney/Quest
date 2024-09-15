class UsersController < ApplicationController
  before_action :set_user

  # GET /users/{username}
  def show
    render json: @user, status: :ok
  end

  # PUT /users/{username}
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages },
              status: :unprocessable_entity
    end

    render json: @user, status: :ok
  end

  private

  def set_user
    @user = Current.user
  end

  def user_params
    params.permit(
      :full_name, :email
    )
  end
end
