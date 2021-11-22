class ApplicationController < ActionController::API

    private 

    # Create a current user method to get the id for the current user 
    # Where does this come from? It's always User.first in this app?
    def current_user 
        User.first
    end

end
