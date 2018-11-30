# TwinRitual

### Live Link: https://mysterious-brushlands-75378.herokuapp.com/

## About Twin Ritual Project:

This site was developed to serve as a merch store for the band Twin Ritual, out of San Diego, CA.

## Technologies Used:
- CSS
- HTML
- JavaScript
- Vue.js
- Node.js

## Tutorial used:
- Full Stack Vue.js/Express App Tutorial video:
https://www.youtube.com/watch?v=Fa4cRMaTDUI&list=PLWKjhJtqVAbnadueQ-C5keMQQiQau_i0D

### NPM Packages Used:
- axios:  JS library, used to make HTTP requests from node.js. Works as the go-between for all HTTP requests, improves development quality and speed.
- vue: installs JS framework Vue.js.
- vue-router: official router for Vue.js. Nested route/view mapping, modular, component based router configuration, offers HTML5 history mode or hash mode & more.
https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078
- vue-youtube-embed: used to make embedding youtube videos easier.
https://www.npmjs.com/package/vue-youtube-embed
- vuex: state management pattern + library for Vue.js applications. Serves as the centralized store for all the components, and has rules ensuring state can only be mutated in a predictable fashion. All state is stored in store.js file.
https://vuex.vuejs.org/guide/state.html
- vuex-router-sync: syncs vue-router's current $route as part of vuex's store's state.
- bcrypt-nodejs: bcrypt library, makes it easier to hash and compare passwords.
- bluebird: package for handling Promises. Paired with bcrypt in this project for hashing passwords. Offers better errors.
http://bluebirdjs.com/docs/features.html
- body-parser: provides middleware for parsing JSON, plain text, or just returning a raw Buffer object. Allows you to access req.body from within your routes.
- cors: Cross-Origin-Resource Sharing - allows cross-domain communication from the browser to pass information.
https://www.npmjs.com/package/cors
- express: the most popular Node web framework. Adds middleware and provides mechanisms to write handlers for requests with different HTTP verbs at different routes. Integrates with view rendering frameworks to set common app settings (port, etc).
- joi: Validation library used in this case to validate passwords. Create Schema with required types for incoming info, regex introduces which values are supported.
https://www.npmjs.com/package/joi
- jsonwebtoken: creates unique signatures for authenticated users to prove data is being sent or requested by an authenticated source. Encodes, doesn't encrypt.
- morgan: middleware used to log requests to the server. Formats requests/responses.
- nodemon: monitors for changes in source and automatically restarts the server.
- sequelize: ORM (Object Relational Mapper) which provides easy access to MySQL, MariaDB, SQLite, and/or PostgreSQL. Maps database entires to objects and vice versa.
https://www.npmjs.com/package/sequelize
- pg-promise: makes postgreSQL database abilities available for use.

Strictly in development:
- webpack: manages complex build steps, optimizes app size and performance. Manages browser caching by separating app's rarely changing code from it's frequently changing code.
https://webpack.js.org/concepts/

## Approach Taken

### Vue.js
<img width="410" alt="screen shot 2018-11-29 at 7 40 07 pm" src="https://user-images.githubusercontent.com/42528266/49267305-a503a880-f40e-11e8-8e0e-5724476f16b3.png">
<img width="413" alt="screen shot 2018-11-29 at 7 40 18 pm" src="https://user-images.githubusercontent.com/42528266/49267334-bc429600-f40e-11e8-9560-cb41ea3c42ef.png">

#### Views VS Components:
.vue component files rendering route endpoints such as '/merch', '/login', '/register', '/cart' tend to be kept in the Views folder, while the rest of the .vue components tend to be kept in the Components folder. I kept all my components in the same folder, because I'm new to this and I'm learning as I go!

#### Single File Components
A single file component is a .vue file that includes HTML, JS, and CSS all in one file. You can then keep your code more organized, writing functions that apply only to that component or CSS that applies only to that component and those nested within it.
I had read in several different places that you could only create single file components if you were using a build tool such as Webpack or Browswerify. I am unclear on whether this is true, since the new front end that I wrote to deploy to heroku did not have Webpack but still accepted single file components.
Here is a graph of a single file component that I took from the Vuejs.org docs:
<img width="492" alt="screen shot 2018-11-29 at 9 22 50 pm" src="https://user-images.githubusercontent.com/42528266/49270100-f9158980-f41c-11e8-9b81-886994973ece.png">

### Vuex
Vuex was a package I downloaded while following the tutorial, and is one of the packages that I came to appreciate a lot. Vuex builds the store.js file, and it stores all of the app's state there. You can keep all state mutations in this file, they are called with an action, and you can make that call from anywhere in the app by using the 'this.$store.dispatch' command. You may call upon state anywhere in the app by using this.$store.state.whateverYouWantToCall, but you can also pull state into your app using the computed function ...mapState([whateverYouWantToCall]), so that you can just type the key rather than the whole long command, when you need it.

### Vue-router
The router/index.js file maps out the components in my app to their routes and lets Vue Router know where to render them.
When you want to link to an endpoint, you can use:
 <router-link to="/route">Go To Route</router-link>

You can also use Vue Router inside your functions, like if you wanted someone to be sent to the merch endpoint after they've clicked the login function. To do this, you can use this.$router.push('/route')

 Vue Router also gives you access to your current route using this.$route

All of the URL routes had a # until I used history modein, which was made available by downloading the vue-router package. This got rid of the # in the URL

Vue-Router makes a lot of other things possible, but I did not have enough time to learn all of it. I am excited to learn more in the future.
https://router.vuejs.org/

### Webpack
The tutorial I used implemented webpack as if it were an essential part of building a vue.js app, so I followed, completely unaware of the difficulties this would cause me. Webpack completely separates the front end code from the back end code, going as far as configuring them to two separate ports. I did not realize at the time that this would be an issue, and I made an effort to learn exactly how the front end and back end were communicating and coming together. I spent an entire day researching and making graphs to explain how information flowed:

![img_2867](https://user-images.githubusercontent.com/42528266/49267887-6e7b5d00-f411-11e8-9832-d963f3b43a96.png)
![img_2876](https://user-images.githubusercontent.com/42528266/49269062-d8970080-f417-11e8-96c9-f8865396cc37.JPG)


### Sequelize
This was another package that the tutorial I was following implemented. I used sequelize to read my models and sync them to the database that I had created. Every time I run the backend server, Sequelize will look for tables relating to my models, and if they don't exist, it will follow my model definitions to create the necessary tables. I could then use familiar commands in the controllers such as findAll, but there are differences as well, such as .destroy, rather than delete.

## Issues

### Learning Webpack
Once I got to the point in my project where I realized Webpack wasn't actually necessary to write my app, I felt it was too late to go back, and I actually really liked how the front end was so separated from the back end. Once I understood the organization, I was happy to move forward. However, I didn't realize how many problems this would cause when attempting to deploy the app.
### Deploying Webpack
I had already used two days researching all of the packages I had used and the flow of information created by using webpack, but the real problems began when I tried to deploy to heroku. I worked with Dan to get my backend server up to Heroku, which took an entire day. I worked with him again all the next day and even spoke with Karolin for advice, trying to deploy my front end, but we couldn't figure out how to configure the front end (which, when local, lived on a webpack server) to heroku. After two days total trying to make this work, I had to give up and reformat my entire front end. Thankfully, Karolin was kind enough to advise me and help, or I would not have gotten anything at all deployed on the front end in time. I spent the first half of the last day of the project re-creating the front end, and the second half of the day trying to fix issues that using sequelize had caused.

### Sequelize
One thing that I still don't quite understand is the technique to create a many to many relationship using sequelize. I intended on using the cart model to connect the user model with the merch model. In the end, I think I just borrowed information from the current user and the current item while creating items inside the cart, and it was effective to achieve what I wanted to, but ended up creating issues for me once I tried to upload to Heroku. It seems that the association functions that I had written while trying to create the many to many relationship created issues that I couldn't resolve in time. My plan is to make an effort in the next week to study up on sequelize and find where I went wrong to fix the issue and deploy the database.

## Further Development
My initial plan for this project was to create a merch site, but also a publicity page, a pictures/videos page, a page with embeded music links to spotify and itunes, and even a game where fans could use their points to win merch and download codes. Unfortunately, I had so many issues with webpack, heroku, and sequelize that I only had about three days to code the actual project itself, but I plan to return and complete all of these ideas.

Other helpful resources:

CRUD routes example:

<img width="420" alt="screen shot 2018-11-29 at 9 23 36 pm" src="https://user-images.githubusercontent.com/42528266/49270165-38dc7100-f41d-11e8-905c-149d4447395b.png">
