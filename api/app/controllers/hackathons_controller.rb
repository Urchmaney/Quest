class HackathonsController < ApplicationController
  def index
    hackathons = if params[:category] == "active"
      Current.user.hackathons.where('start_date < ? & end_date > ?', Time.now, Time.now)
    elsif params[:category] == "history"
      Current.user.hackathons.where('end_date < ?', Time.now)
    else
      Hackathon.includes(:members).where(start_date: Time.now.., members: { user: nil }).or(
        Hackathon.includes(:members).where(start_date: Time.now..).where.not(members: { user: Current.user })
      )
    end
    render json: hackathons, status: :ok
  end

  def create
    hackathon = Hackathon.new(hackathon_params)
    hackathon.owner = Current.user

    if hackathon.save
      render json: hackathon, status: :created
    else
      render json: hackathon.errors, status: :unprocessable_entity
    end
  end

  def owned
    render json: Current.user.organized_hackathons.order("created_at DESC"), status: :ok
  end

  private

  def hackathon_params
    params.permit(:title, :description)
  end
end