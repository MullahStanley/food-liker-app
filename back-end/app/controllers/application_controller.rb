class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

    get "/" do
        "hello world"
    end      
      get '/users' do
        users = User.all
        users.to_json
      end
      
      post '/users' do
        user = User.create(name: params[:name])
        user.to_json
      end
      
      get '/foods' do
        foods = Food.all
        foods.to_json(include: [:likes])
      end
      
      post '/foods' do
        food = Food.create(
          name: params[:name],
          image: params[:image],
          description: params[:description]
        )
        food.to_json
      end
      
      post '/likes' do
        like = Like.create(user_id: params[:user_id], food_id: params[:food_id])
        like.to_json
      end
      
      put '/foods/:id' do |id|
        food = Food.find(id)
        if food.update(
             name: params[:name],
             image: params[:image],
             description: params[:description]
           )
          food.to_json
        else
          status 400
          { message: "Failed to update food" }.to_json
        end
      end
      
      delete '/foods/:id' do |id|
        food = Food.find(id)
        if food.destroy
          { message: "Food deleted" }.to_json
        else
          status 400
          { message: "Failed to delete food" }.to_json
        end
      end
      
end