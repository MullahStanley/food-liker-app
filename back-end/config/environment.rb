ENV["RACK_ENV"] || = "development"

require 'bundle/setup'
Bundler.require(:default, ENV["RACK_ENV"])

require_all 'app'