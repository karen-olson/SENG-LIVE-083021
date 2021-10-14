require 'pry'

class Donation 

    @@all = []

    attr_accessor :organization, :amount, :date 

    def initialize(organization, amount, date)
        @organization = organization
        @amount = amount
        @date = date 
    end 

    # reader method for class variable
    # method is going to be a class level method: class method 

    def Donation.all
        @@all
    end 

end 

class 


