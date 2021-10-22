class IngredientsController < ApplicationController
    
    # show all the ingredients
    get '/ingredients' do 
        ingredients = Ingredient.all 
        ingredients.to_json # serializing the response into a JSON format
    end
    
    get '/ingredients/:name' do # /ingredients/name
        ingredient = Ingredient.find_by(name: params[:name])
        ingredient.to_json
    end
    
    get '/ingredients/:id' do # /ingredients/3
        ingredient = Ingredient.find(params[:id])
        ingredient.to_json
    end


end
