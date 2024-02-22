This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# twitter-clone

# Clone-Twitter documentation

## Welcome to the font-end of Twitter Application : for Joel MPUNGA Dev Web and data analyst

## CONFIGURATION
==================

### This application uses port 5173,it means you have to config your port to this number 5173
### All of the endpoints used by this application will be listening on port 5173 and are listed here :

#### GET METHOD     
* /posts *it's used to get all of the posts in our database*
* /posts/:id *it's used to get one post knowing the of this post in our database*
* /posts *it's used to get all of the users in our database*
* /posts/:id *it's used to get one user knowing the of this user in our database*
* Etc.

#### POST METHOD    
* /posts *it's used to add a new post in our database*
* /posts/like/ *it's used to like a specific post by click down (on the like icon)*
* /posts/delike/ *it's used to remove or to cancel a like on a specific post by click down (on the like icon)*
* /users/login *it's used to log in the application by submitting the authentication informations*
* /profil/edit/id *it's used to update user knowing the id of this user in our database*

* Etc.

## FRAMEWORK
==================

### This application is built by Vite Bundler, The library used is React JS

### The componets for this application are grouped into 2 folders : ui and components

* ui is a folder containing atomics components
* components is a folder containing regrouped components 

## Package dependencies

### To install a package dependencies we need to type npm install --save
### To install a package one by one, we need to type npm install *name* --save

## ENVIRONMENT
==============

### The support environment is LOCAL, so we need more time to deploy this solution in an other environments.

## LOGIN
=========

### This application is the small and modest solution that do the same like Twitter
### We implemented our own implementation login interface.

### Username = joel1
### Password = john12345

### without password and username, you can't login

