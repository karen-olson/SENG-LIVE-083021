require 'pry'

class Donation 

    attr_accessor :organization, :amount, :date 

    def initialize(organization, amount, date)
        @organization = organization
        @amount = amount
        @date = date 
    end 

end 


