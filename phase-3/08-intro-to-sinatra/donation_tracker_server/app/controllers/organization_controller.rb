class OrganizationController < ApplicationController

    get "/organizations" do 
        organizations = Organization.all
        organizations.to_json
    end

    get "/organizations/:id" do 
        organization = Organization.find(params[:id])
        organization.to_json
    end
end