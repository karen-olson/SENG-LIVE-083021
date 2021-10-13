require 'pry'

class Donation
    def initialize(organization, amount, date)
        @organization = organization
        @amount = amount
        @date = date
    end 
end 

donation = Donation.new('American Heart Association', 100.00, Time.now)
binding.pry