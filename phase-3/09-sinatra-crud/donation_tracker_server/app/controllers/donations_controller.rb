class DonationsController < ApplicationController
    set :default_content_type, 'application/json'

    get "/donations" do
        donations = Donation.all
        donations.to_json
    end

    post "/donations" do 
        donation = Donation.create(
            amount: params[:amount],
            date: params[:date],
            organization_id: params[:organization_id],
            completed: params[:completed]
        )
        donation.donor = Donor.find_or_create_by(name: "aysan")
        donation.to_json except: [:organization_id, :donor_id ]
    end

    patch "/donations/:id" do 
        donation = Donation.find(params[:id])
        donation.update(amount: params[:amount], date: params[:date])
        donation.to_json
    end

    delete "/donations/:id" do 
        donation = Donation.find(params[:id])
        donation.destroy
    end
    

end