class BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def show
    render json: Book.find(params[:id]), include: [:readers]
  end

  def create
    book = Book.new(book_params)
    if book.save 
       render json: book, status: :created 
    else
      render json: book.errors, status: :unprocessable_entity
    end
  end

  private 

  def book_params 
    params.permit(:title, :author, :description)
  end
end
