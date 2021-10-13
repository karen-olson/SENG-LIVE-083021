require 'pry'

class Donation 

    attr_accessor :organization, :amount, :date # creating a setter and getter method for all three properties 

    def initialize(org, amt, date)
        @organization = org
        @amount = amt
        @date = date 
    end 

end 

