# Eat-Da-Burger
This application logs burgers created and devoured using MySQL, Node, Express, Handlebars, and an ORM. Node and MySQL are used to query and route the data in the app and Handlebars is used to generate the HTML of the application.

Click [here](https://radiant-stream-35563.herokuapp.com/) to visit the deployed site on Heroku!

Click the "DEVOUR BURGER!" button next to a burger in the "Ready to be devoured!" column to move it to the "Devoured!" Click the "REMAKE BURGER!" button to move it back. This is changing a boolean property "devoured" of the burger in the database.

A burger can be added to the database by typing the Burger Name in the Add a Burger form and clicking the "Add Burger" button. The devoured property of the new burger defaults to false.

![Eat-Da-Burger](/public/assets/img/screenshot.png "Eat-Da-Burger Application")