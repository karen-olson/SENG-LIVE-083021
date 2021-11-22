class UserBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :book, uniqueness: {scope: [:user_id], message: "You can only add a book to your library once."}
end
