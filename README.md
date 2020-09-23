# SO1 Frontend Task

In this task your goal is to build a simple interface that displays marketing campaigns in 
convenient way. Application contains 2 pages: Home and Campaign. 

## Home page
Home page displays table that contains all campaigns in this form:

| name       | budget | products |
|------------|--------|----------|
| Campaign 1 | 216    | 24       |
| Campaign 2 | 450    | 36       |
| Campaign 3 | 812    | 30       |
| ...        | ...    | ...      |

## Campaign page
Campaign page displays campaign information (`id`, `name`, `budget`) and table with products data:

| name       | price | category    |
|------------|-------|-------------|
| Product 1  | 4     | Category 15 |
| Product 2  | 19    | Category 82 |
| Product 3  | 10    | Category 4  |
| ...        | ...   | ...         |

## Data
Data is available on server which is already implemented in this repo, you can launch it before 
using by running `npm run server` command. Server returns all data in JSON format and has 
following endpoints:

| method | path               | description            |
|--------|--------------------|------------------------|
| GET    | /api/campaigns     | Get list of campaigns  |
| GET    | /api/campaigns/:id | Get campaign by id     |
| GET    | /api/categories    | Get list of categories |
| GET    | /api/products      | Get list of products   |

## Current state 
There is already some basic setup presented (feel free to modify it though):
- react-router configured to handle 2 paths: `/campaigns` (Home page) and `/campaigns/:id` 
(Campaign page).
- redux store configuration in `store.js` module with base setup.
- `action.js` module contains action creator that fetch campaigns data from the server. You can
add your action creators here.

## Task
Your task is to implement missing pieces:
- perform action network requests for fetching categories and products data
- store data in redux store (complete reducers)
- display data for user
- handle user interactions: click on campaign row in campaigns table should redirect browser on 
Campaign page.
- there is no design defined for this task, so your goal is to build simple CSS to represent data 
in nice way.

Unit tests would be nice but **not** required, you can see example of one in `Home.test.js`.


## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the server for fetching data. You can access server by issuing requests to 
`http://localhost:8080/api`. Please check REST API specification [here](#data). 

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
