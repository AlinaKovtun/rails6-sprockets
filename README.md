## About
Rails 6.0.0 App with sprockets 4 + sassc-rails. 


### Installation and usage

```bash
git clone https://github.com/AlinaKovtun/rails6-sprockets.git
cd rails6-sprockets
bundle
```

### Development mode
```bash
RAILS_ENV=development rake db:create db:migrate
RAILS_ENV=development bundle exec rake assets:precompile
rails s
```
navigate to http://localhost:3000/users 

check logged console message "Hello world from coffeescript" 



### Production mode locally
```bash
rake secret
export SECRET_KEY_BASE=output-of-rake-secret
RAILS_ENV=production rake db:create db:migrate
RAILS_ENV=production bundle exec rake assets:precompile
tail -f log/production.log
RAILS_ENV=production rails s
```
navigate to http://localhost:3000/users 

check logged console message "Hello world from coffeescript" 


## Switch to webpacker
In home directory:
```bash
brew update
brew install node
brew install yarn
yarn global add webpack    
```
Remove redundant gems from Gemfile (sassc-rails, coffee-rails, uglifier).

Add to Gemfile:
```bash
gem 'webpacker', git: 'https://github.com/rails/webpacker.git'
yarn add https://github.com/rails/webpacker.git
```
In project directory:
```bash
yarn add webpack@5.11.0 webpack-cli@4.2.0
bundle
bundle exec rails webpacker:install
bundle exec rails webpacker:clobber         # to clean up packs
yarn upgrade webpack-dev-server@2.11.1
```
Remove redundant sprockets configuration in 'config/application.rb', config/environments'

Remove 'app/assets', 'config/initializers/assets.rb', 'config/initializers/asset_logging.rb'

Replace 
```ruby
javascript_include_tag 'application'
```
with
```ruby
javascript_pack_tag 'application'
```

### Run app
```bash
bundle exec rails webpacker:clobber
bundle exec rails webpacker:compile
rails s
```