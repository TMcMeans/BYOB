# BYOB 
# US Music Festivals API

Are you building a tourism, vacation or music events/performances app? This API allows you to find data on all major 2019 music festivals happening in over 20 states. Data is stored with a PostgresSQL database and the backend is built with Node.js, Express and Knex.js. 

## How to Use: 
---

**Install and Start the Server**

1. Clone down this repo
2. Type **npm install** in your terminal (CL)
3. Type **npm start** 


**Create a Postgres Database and Run Migrations**

1. In your terminal (CL), type psql 
2. Type **CREATE DATABASE** us_music_festivals
3. Type **\q** (to exit psql)
4. Type **knex migrate:latest**
5. Type **knex seed:run** 


**Testing**

1. To test, type **npm test** in your terminal (CL)


## API Endpoints 
---

### States
```
GET /api/v1/states // get all states
--> returns an array of state objects

POST /api/v1/states // create a new state 

GET /api/v1/states:stateID // get a specific state 
--> returns an array with a specific state 

GET  /api/v1/states?state_id=1 // get a specific state
--> returns an array with a specific state 

PUT /api/v1/states/:stateID // update a specific state's data

DELETE /api/v1/states/:stateID // delete a state
```

### 2019 Music Festivals 
```
GET /api/v1/festivals // get all festivals
--> returns an array of festival objects

POST /api/v1/festivals // create a new festival

GET /api/v1/states/:stateID/festivals // get all festivals in a specific state
--> returns an array of festival objects in a  state

GET /api/v1/festivals/:festivalID // get a specific festival
--> returns an array with a specific festival 

PUT /api/v1/festivals/:festivalID // update a specific festival's data 

DELETE /api/v1/festivals/:festivalID // delete a festival
```

## Sample Responses 
---
### All States Response 
```
Status: 200 OK
Link: <http://localhost:3000/api/v1/states>
---
[
  {
  "id": 128,
  "state": "Arizona",
  "major_airport": "Phoenix Sky Harbor International Airport",
  "number_of_music_festivals": 10,
  "created_at": "2019-01-31T20:17:06.679Z",
  "updated_at": "2019-01-31T20:17:06.679Z",
  "tourism_website": "https://www.visitarizona.com"
  },
  {
  "id": 129,
  "state": "California",
  "major_airport": "Los Angeles International Airport",
  "number_of_music_festivals": 38,
  "created_at": "2019-01-31T20:17:06.683Z",
  "updated_at": "2019-01-31T20:17:06.683Z",
  "tourism_website": "https://www.visitcalifornia.com"
  },
  {
  "id": 131,
  "state": "Florida",
  "major_airport": "Miami International Airport",
  "number_of_music_festivals": 17,
  "created_at": "2019-01-31T20:17:06.687Z",
  "updated_at": "2019-01-31T20:17:06.687Z",
  "tourism_website": "https://www.visitflorida.com"
  },
  {
  "id": 132,
  "state": "Georgia",
  "major_airport": "Hartsfield–Jackson Atlanta International Airport",
  "number_of_music_festivals": 8,
  "created_at": "2019-01-31T20:17:06.689Z",
  "updated_at": "2019-01-31T20:17:06.689Z",
  "tourism_website": "https://www.exploregeorgia.org"
  },
  {
  "id": 134,
  "state": "Louisiana",
  "major_airport": "Louis Armstrong New Orleans International Airport",
  "number_of_music_festivals": 4,
  "created_at": "2019-01-31T20:17:06.690Z",
  "updated_at": "2019-01-31T20:17:06.690Z",
  "tourism_website": "https://www.louisianatravel.com"
  },
  {
  "id": 136,
  "state": "Massachusetts",
  "major_airport": "Logan International Airport",
  "number_of_music_festivals": 5,
  "created_at": "2019-01-31T20:17:06.692Z",
  "updated_at": "2019-01-31T20:17:06.692Z",
  "tourism_website": "https://www.massvacation.com"
  }
]
```

### All Festivals Response 
```
Status: 200 OK
Link: <http://localhost:3000/api/v1/festivals>
---
[
  {
  "id": 763,
  "festival_name": "Made Up Music Festival",
  "start_end_dates": "6/1/19-6/2/19",
  "image": "https://exampleimage/123.jpg",
  "city": "Nowhere",
  "state_id": 128,
  "created_at": "2019-01-31T21:25:09.052Z",
  "updated_at": "2019-01-31T21:25:09.052Z"
  },
  {
  "id": 577,
  "festival_name": "Arizona Roots",
  "start_end_dates": "2/9/19-2/10/19",
  "image": "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/California-Roots-Hero-Pic-600x400.jpg",
  "city": "Chandler",
  "state_id": 128,
  "created_at": "2019-01-31T20:17:06.704Z",
  "updated_at": "2019-01-31T20:17:06.704Z"
  },
  {
  "id": 587,
  "festival_name": "Noise Pop",
  "start_end_dates": "2/25/19-3/3/19",
  "image": "https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/04/Music-Festival-Wizard-Treefort-2016-37-600x400.jpg",
  "city": "San Francisco",
  "state_id": 129,
  "created_at": "2019-01-31T20:17:06.710Z",
  "updated_at": "2019-01-31T20:17:06.710Z"
  }
]
```

## Technologies Used
---
- Node.js
- Express
- Knex.js
- Heroku

For testing: 
- Mocha 
- Chai 
- Chai HTTP


## To Contribute to this Project 
---
1. Follow the setup steps above to get app running locally on your machine. 

2. Check out our list of github issues [here](https://github.com/ashtonkbailey/BYOB/issues). Please use these issues as a helpful guidance for any contributions you would like to make. 

3. Send a pull request via Github: 
  - Checkout to a new branch
  - Add a forked version of this repo as your remote
  - Push up your contribution to your forked repo
  - Submit a **pull request** to the original repo
  - Include a brief, but concise commit message detailing the changes you have made (include an issue # if applicable)
  - Make sure your contribution is fully tested and tests are passing
  - We use Git rebase workflow, please rebase your work onto the current master branch 


## Project Specs 
---
This project was designed as a build-your-own-backend (BYOB) challenge at Turing School of Software & Design. 

Database and Backend designed and created by lead developers Tanjie McMeans and Ashton Bailey.

-[Tanjie McMeans- Github](https://github.com/TMcMeans)
-[Ashton Bailey- Github](https://github.com/ashtonkbailey)

-[Project Spec link](http://frontend.turing.io/projects/build-your-own-backend.html)
-[Backend Checklist link](http://frontend.turing.io/projects/byob/backend-feature-checklist.html)

