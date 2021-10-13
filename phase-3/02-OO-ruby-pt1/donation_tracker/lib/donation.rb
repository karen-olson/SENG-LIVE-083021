require 'pry'

class Donation 

    attr_accessor :organization, :amount, :date # creating a setter and getter method for all three properties 
    # attr_reader :amount
    # attr_writer :amount 
    # a set of rules that are defined upon the creation of an instance
    # when we call .new, initialize will automically get invoked 

    def initialize(org, amt, date)
        # add some properties for EACH instance of donation
        # instance variable
        @organization = org
        @amount = amt
        @date = date 
        # self.organization = org
    end 

    # # getter method/ reader method 
    # def organization # goal of method is going to be to retun the value of the organization for the particular instance
    #      # self => receiver of the message
    #     @organization 
    # end 

    # # setter method/ writer method
    # # allows to reassign a property value
    # def organization=(organization)
    #     @organization = organization
    # end 

end 

donation = Donation.new("American Heart Society", 100.00, Time.now)

another_donation = Donation.new("Alzehiemers", 300.00, Time.now)


binding.pry


# self 
# equivalant of this in JS 
# self in ruby will refer to either a class or the instance 