class ParksController < ApplicationController
    require 'rest-client'
    require 'dotenv-rails'
    
    def get_parks
        url = "http://developer.nps.gov/api/v1/parks?api_key=#{ENV['NATIONAL_PARKS_API_KEY']}&limit=1000"
        response = RestClient.get(url)
        render json: response
    end
end
