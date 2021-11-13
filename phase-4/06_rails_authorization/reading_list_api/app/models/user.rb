class User < ApplicationRecord
  has_many :user_books, dependent: :destroy
  has_many :books, through: :user_books

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, uniqueness: true, allow_blank: true
end
