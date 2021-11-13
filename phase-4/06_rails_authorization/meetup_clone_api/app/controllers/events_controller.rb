class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  # get '/events'
  def index
    render json: Event.all
  end

  # get '/events/:id'
  def show
    render json: @event, serializer: EventDetailSerializer
  end

  # post '/events'
  def create
    event = current_user.created_events.create(event_params)
    if event.valid?
      render json: event, status: :created
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  # patch/put '/events/:id'
  def update
    if @event.update(event_params)
      render json: @event, status: :ok
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # delete '/events/:id'
  def destroy
    @event.destroy
  end

  private

  def event_params
    params.permit(:title, :description, :location, :start_time, :end_time, :group_id)
  end

  def set_event
    @event = Event.find(params[:id])
  end

  def authorize_user
    user_can_modify = current_user.admin? || current_user == @event.user
    render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
  end
end
