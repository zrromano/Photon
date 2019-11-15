# Setting up environment
Set up an Ubuntu 18.04 virtual machine.

**Run:**
 ```
sudo apt update && sudo apt upgrade
sudo apt install git
sudo apt install nodejs
sudo apt install npm
sudo apt install build-essential
sudo apt install -y mongodb
```

**Install visual studio code and the following extensions:**
```
'Auto Import - ES6, TS, JSX, TSX'
'Ayu' (I use the Ayu Dark color scheme; not neccessary)
'GitLens - Git supercharged'
'Prettier - Code formatter'
    * Turn on format on save (instructions in extension details)
'Simple React Snippets'
```

# React-application-template
**Reusable Components:**
```
form - Parent class for a form component
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

**Services:**
```
authService - Makes backend calls related to authentication (logging in and out)
httpService - Handles unexpected errors and axios calls
userService - Makes backend calls to register and modify user account data
```

**Config.json:**
```
apiUrl
```

**Libraries:**
```
@sentry/browser - Used for automated error logging with Sentry.io
axios - Used to make http calls to backend services
bootstrap - Formatting class library
fb-watchman - Increases number of watchers available (ran into a problem of watchers overfilling)
font-awesome - Font and icon library
joi-browser - Used for validation of form inputs
jwt-decode - Decodes Java Web Tokens to get user account information
lodash - Functional library for working with arrays, numbers, objects, strings, etc.
prop-types - Used to set requirements for props passed into a component
query-string - Used for reading queries in URL
react-router-dom - Set of routing components
react-toastify - Alert functions to use instead of browser default
```

# React course
https://codewithmosh.com/courses/enrolled/357787

# Etc
https://www.mongodb.com/cloud/atlas this is ass
