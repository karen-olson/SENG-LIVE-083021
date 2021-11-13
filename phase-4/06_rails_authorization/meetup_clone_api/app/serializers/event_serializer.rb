class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_time, :end_time, :location, :group_id, :user_event, :user_can_modify

  def user_event
    UserEvent.find_by(user_id: current_user.id, event_id: self.object.id)
  end

  def user_can_modify
    current_user.admin? || current_user == self.object.user
  end
end
