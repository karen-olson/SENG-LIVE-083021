class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]
  def index
    render json: Book.all
  end

  def show
    render json: Book.find(params[:id]), serializer: BookDetailSerializer
  end

  def create
    book = Book.create(book_params)
    if book.valid?
      render json: book, status: :created
    else
      render json: { errors: book.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book, status: :ok, serializer: BookDetailSerializer
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
    head :no_content
  end

  private

  def book_params
    params.permit(:title, :description, :author, :cover_image_url)
  end

  def set_book
    @book = Book.find(params[:id])
  end

  def authorize_user
    user_can_modify = current_user.admin?
    render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless user_can_modify
  end
end
