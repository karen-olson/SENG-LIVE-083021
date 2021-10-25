class IngredientsController < ApplicationController
    
    # respond with all ingredients
    get '/ingredients' do 
        ingredients = Ingredient.all 
        ingredients.to_json # serializing the response into a JSON format
    end
    
    # respond with an ingredient given the ID value
    get '/ingredients/:id' do # /ingredients/3
        ingredient = Ingredient.find(params[:id])
        ingredient.to_json
    end

    post '/ingredients' do 
        # {"name"=>"truffle"}
        ingredient = Ingredient.create(name: params[:name])
        # ingredient = Ingredient.create(params)
        ingredient.to_json 
    end

    patch '/ingredients/:id' do 
        ingredient = Ingredient.find(params[:id])
        ingredient.update(name: params[:name])
        ingredient.to_json
    end

    delete '/ingredients/:id' do 
        ingredient = Ingredient.find(params[:id])
        ingredient.destroy
    end

    # creating a nested route to return all ingredient pizzas
    get '/ingredients/:id/pizzas' do 
        ingredient = Ingredient.find(params[:id])
        pizzas = ingredient.pizzas 
        pizzas.to_json
    end
end
