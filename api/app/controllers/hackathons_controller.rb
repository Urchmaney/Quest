class HackathonsController < ApplicationController
  before_action :owner_hackathon, only: [:markdown, :save_markdown]

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

  def markdown
    render json: @own_hackathon&.md_interface, status: :ok
  end

  def save_markdown
    if @own_hackathon && params[:markdown]
      @own_hackathon.md_interface = params[:markdown]
      @own_hackathon.save
      render json: @own_hackathon.md_interface, status: :ok
    else
      render json: nil, status: :not_found
    end
  end

  private

  def owner_hackathon
    @own_hackathon = Hackathon.find_by(owner_id: Current.user.id, id: params[:id])
  end

  def hackathon_params
    params.permit(:title, :description)
  end
end