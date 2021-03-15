# README
## About
Rails 6.0.0 App with sprockets 4 + sassc-rails. 


## Installation

```bash
git clone https://github.com/AlinaKovtun/rails6-sprockets.git
cd rails6-sprockets
bundle
RAILS_ENV=development bundle exec rake assets:precompile
rails s
```
navigate to http://localhost:3000/users 

check logged console message "Hello world from coffeescript" 


## Migrate to Webpack
1. remove redundant gems from Gemfile (sassc-rails, coffee-rails, uglifier),
add 
```bash
gem 'webpacker', '~> 5.0'
```
run 
```bash
bundle 
```
```bash
bundle exec rails webpacker:install
brew install node
brew link node
brew install yarn
yarn global add webpack
yarn add --dev webpack
```
