class Food < ActiveRecord::Base
  has_many :likes
end