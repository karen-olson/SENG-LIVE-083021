class Event < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :title, :description, :location, :start_time, :end_time, {presence: true}
  validates :title, uniqueness: { scope: [:location, :start_time]}
end
