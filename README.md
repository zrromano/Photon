# Photon

## Developers:

Zachary Romano - Web Page Design III & Advanced Programming: Javascript

Ethan Ruiz - Web Page Design III

Matthew Frankmore - Advanced Programming: Javascript

**Note** original project name was Loudcloud Photo. I tried to update everything, but some names may need to be changed. Loudcloud is Ethan's brother's internet handle and he changed the name before transferring the repo to me.

## Setting up environment
Set up an Ubuntu 18.04 virtual machine.

**Run in terminal:**
 ```
sudo apt update && sudo apt upgrade
sudo apt install git
sudo apt install nodejs
sudo apt install npm
sudo apt install build-essential
sudo apt install -y mongodb
sudo npm i -g nodemon
```

**Install:**
```
Postman
MongoDB Compass
```

**Install Visual Studio Code and the following extensions:**
```
'Auto Import - ES6, TS, JSX, TSX'
'Ayu' (I use the Ayu Dark color scheme; not neccessary)
'GitLens - Git supercharged'
'Prettier - Code formatter'
    * Make sure format on save is turned on in VScode settings and set 
      default formatter to esbenp.prettier-vscode
'Simple React Snippets'
```

Clone Git repository, navigate to photonapi and photon in terminal and run `npm i` in each.

## Starting project

Navigate to photonapi and run:
```
export PORT=3100
export photon_jwtPrivateKey=secureKey
nodemon server.js
```
In a seperate terminal navigate to photon and run `npm start`

**Note** if you get an error that says ENOSPC when starting, try running:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

## react-app-template

Located in 'reference' folder.

**Common Reusable Components:**
```
form - Parent class for a form component
* To make a form, write a new class that extends form. New class should have a state with all input fields set as empty
strings, a JOI schema to validate input, and a doSubmit function for handling form submission.
* Render functions - names should be the same as corresponding state fields, label is what the user sees
** renderInput(name, label, type="text", smalltext=null, colSize=4) - text input field
** renderSelect(name, label, options, smalltext=null, colSize=4) - dropdown input
** renderButton(label) - form submission button
input - Input field for a form. Rendered by form class
like - Like button. Toggled on/off by a boolean props.liked
listGroup - A list of items with a valueProperty(id) and a textProperty(name)
logout - Logs the user out through authService then redirects to home
navbar - A navigation bar passed a list of links and a user object
notFound - A 404 page to redirect invalid links to
pagination - Page select for a paginated list
protectedRoute - A route that will redirect to the login page if the user is not logged in
searchBox - A search box passed a state value and a handleSearch function
select - A dropdown input for a form
table - Renders a table with a header and rows of data
tableBody - Body of table component
tableHead - Head of table component
```

**Page Components:**
```
home - Says 'Homepage'. Edit to whatever is needed.
loginForm - Basic login page. Fields should be changed and added as needed for API.
registerForm - Basic registration page. Fields should be changed and added as needed for API.
```

**Services:**
```
authService - Makes backend calls related to authentication (logging in and out)
httpService - Handles unexpected errors and axios calls
userService - Makes backend calls to register and modify user account data
```
**Note** Add fake services that return hard coded values if designing front-end before back.

**Utilities:**
```
paginate - Splits a list of items by page number and page size
```
**Config.json:**
```
apiUrl - Base URL to use for API calls
sentryToken - When making a new project, create a project on Sentry.io and paste the dsn from the setup instructions
```

**Libraries:**
```
@fortawesome/fontawesome-free@5.12.0 - Font and icon library
@sentry/browser@5.7.1 - Used for automated error logging with Sentry.io
axios@0.19.2 - Used to make http calls to backend services
bootstrap@4.1.1 - Formatting class library
fb-watchman@2.0.0 - Increases number of watchers available (ran into a problem of watchers overfilling)
joi-browser@13.4.0 - Used for validation of form inputs
jwt-decode@2.2.0 - Decodes Java Web Tokens to get user account information
lodash@4.17.10 - Functional library for working with arrays, numbers, objects, strings, etc.
prop-types@15.6.2 - Used to set requirements for props passed into a component
query-string@6.1.0 - Used for reading queries in URL
react@16.11.0 - Front end framework for responsive web apps
react-dom@16.11.0 - React virtual DOM
react-router-dom@4.3.1 - Set of routing components
react-scripts@3.2.0 - Command line scripts
react-toastify@5.4.0 - Alert functions to use instead of browser default
```

## React course used to build template
https://codewithmosh.com/courses/enrolled/357787

## Other useful links
The Odin Project           https://www.theodinproject.com/home

MongoDB database hosting   https://www.mongodb.com/cloud/atlas

React documentation        https://reactjs.org/docs/getting-started.html

Bootstrap documentation    https://getbootstrap.com/docs/4.1/getting-started/introduction/

JOI documentation          https://hapi.dev/family/joi/

Font Awesome documentation https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
