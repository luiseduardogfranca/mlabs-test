# Posting Scheduling - mLabs

A application for scheduling postings in social networks

<!-- ![Build Status](https://travis-ci.org/luiseduardogfranca/event-scheduling.svg?branch=master) -->

This project is an posting scheduling web application, developed in JavaScript, with ReactJS framework to manage the posting in many social networks.

Posting Scheduling application: [https://scheduling-mlabs.herokuapp.com/](https://scheduling-mlabs.herokuapp.com/)

## Depedencies

- ReactJS
- date-fns
- styled-components
- react-router-dom
- react-file-drop

### CI/CD

This project use Travis to Continuos Integration and Heroku to deploy. After tests passed by Travis, the main branch is pushed and deployed in Heroku plataform.

Note: The free dynos enter the sleep mode after time, so there may be a small dalay at the start of the application.

### Structure

This is a brief explanation of the project structure

```
    |public
        |data (public files and json files to api simulation)
    |src
        |api (simulation of api with each route of a Restful API)
        |components (all React components used in the application)
        |commom (methods used throughout all application)
        |pages (all pages available in the application)
        !services (each entity to manage the API requests)
        |styles (global styles used in components)
    |App.test.js (all tests)
    |database.js (all table anmes to manage a local database, in this case, localStorage)
    |routes.js (manager all routes with react-router-dom)
```

## Get started

1. Clone repository
2. Install dependencies
3. Run application in your browser

### 1. Clone repository

Clone this repository in your machine:

```sh
$ git clone git@github.com:luiseduardogfranca/mlabs-test.git
```

#### 2. Install depedencies

From directory of project, run the following commands:

```sh
# Install depedencies with npm:
$  npm install

# Run the application in localhost:3001 with the following command:
$  npm start

# Open application in your browser:
localhost:3000
```
