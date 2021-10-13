require 'pry'

class Pizza 
    
    # setter and getter method 
    attr_accessor :name, :ingredients, :desc 

    def initialize(name, ingredients, desc) # .new
        # @name = name 
        # @ingredients = ingredients 
        # @desc = desc

        ## best practice:
        self.name = name
        self.ingredients = ingredients
        self.desc = desc

        # what is self referring to: the instance because when .new is called, we create a new instance and then initialize is being called ON that new instance 
    end 

    # getter method/ reader method 
    # def name 
    #     @name 
    # end 

    # # setter method 
    # def name=(name) .name = 
    #     @name = name
    # end 

end 

pizza1 = Pizza.new("pepp in my step", "pepperoni, jalapeno", "yummalicioous")

binding.pry


# donation = Donation.new
# donation.intialize