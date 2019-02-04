# GETTING STARTED

This is a guide for setting up a US Music Festivals API development and testing environment on your local machine. 

# Dependencies
- Mocha
- Chai
- Chai HTTP
- Node.js 
- Express
- Knex.js
- Body Parser
- PostgreSQL database 

You are going to need to install Node.js for executing Javascript outside of the browser. Visit [here](https://nodejs.org/en/) to install Node.js on your local machine. 

# Get it

If you would like to contribute to this project:

1. Start by forking this repo using the ```fork``` button in the top right corner of this screen. 

2. You should then be able to use ```git clone``` to copy your fork onto your local machine:
```
git clone https://github.com/YOUR_GITHUB_USERNAME_HERE/BYOB
```

3. Go to your new local copy of the BYOB-US Music Festivals API:
```
cd BYOB
```

4. Then add a ```upstream``` remote that points to the main repo:
```
git remote add upstream https://github.com/ashtonkbailey/BYOB
```

5. Fetch the latest version of ```master``` from ```upstream``` (i.e. the main repo):
```
git fetch upstream master 
```

# Get it running

You are going to need to install dependencies and start your server before you can use the app. Type these commands in your local BYOB repo:  
```
Install and Start the Server

$ cd BYOB    // cd into the BYOB repo where it exists on your local machine
$ npm install     // install dependencies 
$ npm start     // start the server 
```

You are also going to need to create the psql database the app will use by typing the following in your terminal:
```
Create a PostgreSQL Database and Run Migrations

$ psql    // open psql in your terminal
$ CREATE DATABASE us_music_festivals    // create a new database 
$ CREATE DATABASE us_music_festivals_tests    // create a new database for testing
$ \l    // list your saved databases
$ \q    // exit psql 
$ knex migrate:latest    // run the latest migrations to create table schema for databases
$ knex seed:run    // seed your databases with (US Music Festivals) data for use in app 
```

In order to see tests, you must stop runnning the server. Type these commands in your local BYOB repo: 
```
Start Running Tests

$ cmd C    // stop the execution of the server
$ npm test    // start running the testing suite 
```

# TROUBLESHOOTING

If you get stuck getting your local enviornment up and running, please do not hesitate to open an issue with a report detailing the issues you are having. 



