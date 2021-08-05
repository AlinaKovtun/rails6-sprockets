# README
## About
Rails 6.0.0 App with sprockets 4 + sassc-rails. 


## Installation and usage

```bash
git clone https://github.com/AlinaKovtun/rails6-sprockets.git
cd rails6-sprockets
bundle
```

## Development mode
```bash
RAILS_ENV=development rake db:create db:migrate
RAILS_ENV=development bundle exec rake assets:precompile
rails s
```
navigate to http://localhost:3000/users 

check logged console message "Hello world from coffeescript" 



## Production mode locally
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



## Migrate to webpacker from sprockets

branch - https://github.com/AlinaKovtun/rails6-sprockets/tree/by-webpacker-dock
