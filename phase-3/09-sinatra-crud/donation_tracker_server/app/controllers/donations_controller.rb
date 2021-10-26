class DonationsController < ApplicationController
    set :default_content_type, 'application/json'
    
    # route that returns all donations in JSON 

    get '/donations' do 
        donations = Donation.all 
        donations.to_json # serializer
    end

    # creating a new donation with submitted data
    post '/donations' do 
        # create a new donation with the values from the params hash 
        donation = Donation.create(amount: params[:amount], date: params[:date], completed: params[:completed], organization_id: params[:organization_id], donor_id: params[:donor_id])
        donation.to_json
        # use this syntax if params hash contains only donation attributes
        # donation = Donation.create(params)
    end

    # Update route: 
    patch '/donations/:id/edit' do # dynamic route: { id: 1 } 
        # params:  {"amount"=>800.0, "id"=>"3"}

        # update donation with id 3 
        donation = Donation.find(params[:id])

        # Tell it what to update 
        donation.update(amount: params[:amount])

        # serialize it 
        donation.to_json
    end

    delete '/donations/:id' do 
        donation = Donation.find(params[:id])
        donation.destroy
    end

end