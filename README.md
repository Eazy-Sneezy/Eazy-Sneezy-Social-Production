# Team Eazy Sneezy Social Media App

Social media platform that allows users to share pictures and follow each other. Instagram clone of sorts.

Link: https://eazy-sneezy-social-media.herokuapp.com/

## How it's made

Tech used: HTML, CSS, JavaScript, Node.js, Express.js, MongoDB

We created this application following the model-view-controller design pattern. The requests the server recieves take the user to different routes depending on the type and source of the request, which then point to a specific controller to handle said request. The controllers contain the most code, with different methods that take care of handling the requests. The controller is also able to communicate with the models we created, which take care of interacting with our database. Depending of the type of request, e.g. GET getfeed, POST createEntry the model then accesses the database to retrieve or modify the actual documents. Once the model finishes its interaction with the database, we go back to the controller who then tells the views, rendering with ejs in our case, what data will be passed into the rendering to finally show the user what they requested.


_**Server**_ - This is the root of our app. Where we turn activate all the packages, routes, connection to database and actually setting up the server to listen for requests. 

_**Views**_ - Views are the simplest sections of our app. The only job of views is waiting for the controller to tell them what to do. They contain logic to handle the data the controllers passes into them, to render the front-end with specific data for the users.

_**Model**_ - We developed two models; the User and Entry models. The Entry model also holds the schema for "likes", which it then stores as an array in each entry in the entries collection. We considered making a separate file for the Likes schema, as well as a separate collection, but ultimately simplified by keeping it with the Entry schema and entries collection.

_**Controllers**_ We have 3 controllers: homeController, authController, and entriesController. Our homeController takes care of rendering our home page when a user first enters the url into the browser. The authController handles everything to do with authentication: get the signup and login forms, and actually submitting them to be validated and/or stored into our database. Finally, entriesController works with the rest of the functionality in this app. It takes care of interacting with the Entry model who then can communicate with the database to get, create or delete entries.  

## Optimizations

We used to have authentications routes at first. We then realized that most authentications requests came from the home route, so we integrated auth routes alongside the home routes to show how every part of the server is connected. We'll add like/unlike functionality into the feed page, instead of only being able to like entries once you open that specific entry.

_**Like Button Toggle**_ - For toggling a like button with a specific user, we went with checking within the EJS entry file if the user's id was included in the entry's likes array. If so, the EJS would display the unlike functionality, which is linked to the unlike method in the entry controller. Otherwise, it would display the like functionality, which is linked to the like method in the entry controller.

## Lessons learned

_**Collaboration**_ - We worked together as a team to separate tasks and to check in with each other about our work. We built branches and made PRs, tested and reviewed each other's code, and we learned a lot about how to use Github to track and develop our workflow.  Communication was key in very helpful in keeping everything clear and easy to navigate.  Documentation and issue assignment was especially helpful in knowing what other team members are focusing to prevent overlapping work assignments.

_**Version Control**_ - There were a few times we had to back track to figure out what went wrong. From `git checkout <branch-name>` to `git log` and `git checkout -b <new-branch-name>` to figuring out how to reconsile merge conflicts, we became more familiar with using a variety of git commands.  

_**Debugging**_ - On several occasions, some sections of our codebase wasn't doing what we originally intended. We got practice in going through our own code as a team and find which line or lines had issues. 

_**MVC**_ - This project was a huge help to internalize the inner workings of the model-view-controller design pattern. We learned hands-on how each piece of code can communicate with other sections of the server.  The amount of detailed knowledge about the MVC we have learned through this project is quite significant and working through it increased our oveall understanding of MVC.

_**Authentication**_ - We learned how to add authentication functionality using local-passport, with our users being recorded into a database.

_**Styling**_ - We had the chance to focus on some front-end methods like flex and content-alignment with CSS.

_**User Interface Design**_ - We learned how to make a UI model with consideration for creative input.  Also, while creating it there was an opportunity to visualize all the functions the user will have access to using our app.
