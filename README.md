# MERN App Boilerplate

This is a single-folder MERN app boilderplate, based on create-react-app frontend. With MERN, I do not like to have to worry about running both the database server and the React development server (for using JSX/Babel) in parallel. So I tried to come up with a boilerplate that allows me to run either frontend or backend on its own. 

It is designed so that the development frontend (run by `npm start`), can connect to either the local database server, or to a cloud application service. This means, when only working on the frontend, you don't have to worry about the backend at all. Just run the frontend development server (`npm start`) just like a pure create-react-app. It will automatically talk to the cloud app deployed backend. 

On the other hand, to work on the local backend, just start up the database server by `npm run start-server`. This will load the generated frontend in the `/build` folder. 

## Setup

Run `npm install` to get all the dependencies installed.

Then please create a `.env` file containing the following:
```
PORT = <API Port Number>
MONGODB_URI = <MongoDB URI>
REACT_APP_APIURL = <API URL for Heroku or other cloud app deployment>
```
`PORT` this is the database server api port, for when using the local backend server.

`MONGODB_URI` this is your MongoDB URI, including username and password. It should look something like: `'mongodb://<username>:<password@somehostaddress.com:<port_num>/database_code'`

Also, using the cloud app database server requires that you:

1. Set one up of course! Deploy this entire branch to a cloud app service of your choice. I use [Heroku](https://www.heroku.com/).
2. Make sure that the cloud deployment is connected to the MongoDB database.
3. Deploy this branch to the cloud app service. 
4. Include the *API URL* of the Heroku deployment in the `.env` file. Name the variable `REACT_APP_APIURL=<INSERT_URL_HERE>`.

Now everything should work! Please follow the steps below for instructions on how to use it for development work.

## Development Workflow

*Run the React development server, __for frontend development__*

Run `npm start` from the root directory. This will start the React development server, and should automatically open the live app in the browser. 

NOTE: this will connect the app to the database server on Heroku. It will live update any changes to the frontend (`/src` and `/public`), but changes to the server-side files will not be reflected until the Heroku deployment is updated. 

*Run the database server locally, __for backend development__*

In the root directory, run `npm run start-server`. This loads up the *server.js* and runs the server at the port specified in *.env* file. (Should be 3001)

NOTE: the client side will be served from the `/build` directory. Changes to files in `/src` or `/public` directories will not update until you run `npm run build`.

*To run both the development frontend and local database server concurrently*.

Run the database server (`npm run start-server`) prior to running the development frontend (`npm start`). The boilerplate will automomatically detect the running local database server and connect to that for API requests. 

Be sure to prevew the app from the frontend server port.

This will live-update any changes made to both the client-side and the server-side.

## Code Structure

**Backend**
*server.js* -  All the main functions of the server is contained here. Receiving the HTTP Request, routing it to the correct function which performs the appropriate database task, and send back the response back to client side.

*/routes* - This folder contains the routing code for HTTP Requests. 

*/model* - This folder contains javascript files, each containing a mongoose Schema which defines the template of database documents. 

**Frontend**
*/build* - The production build files, once you run `npm run build`, goes here. 

*/public* - The development version of static files are here.

*/src* - The javascript files for development version. `index.js` gets loaded first.

## Backend Function Basics

The database server is a basic CRUD (Create, Remove, Update, Delete) server that is connected to a MongoDB database.

The client side program can send a request using [HTTP Request](https://www.w3schools.com/tags/ref_httpmethods.asp). This server will then talk to the database to perform the requested task, then usually send some kind of a response to the client side.

Example requests:

1. Get all the stored data documents (for the client side to render)
2. Add a new document to database
3. Replace an existing document with a new one
4. Delete an existing document

## Server Communication Scheme

*The server is not updated with these schemas and routes yet! But this is the proposal of how it'll work once it's running.*  
This contains all the information needed on the client side in order to talk to the server, and it should be updated continuously to let everyone know if something changed!

**API URL**  
Cloud:  Cloud deployment URL + `/api`
Local: http://localhost:3001/api

The app will automatically choose Local if local node server is running, or otherwise switch to the Heroku deployed version.

**Schema**
```
Post
{
    id: String,
    title: String,        //title of the project
    owner: String,        //username of the creator 
    description: String,  //project description
    status: String,       //status of project, why it's stuck
    repoUrl: String,      //GitHub repo URL
    img: [String]         //image URLs of screenshots
}
```

```
User
{
    id: String,
    username: String,     //username
    displayName: String,  //display name
    avatar: String,       //avatar image URL, can be empty
    skillset: [String],   //array of strings, like "React" and "Nodejs"
    email: String         //email address
}
```

**Routes**  
Get list of all Posts
>request: GET to `/posts`  
>send: nothing  
>receive: array of json documents

Get Post by ID
>request: POST to `/posts/:post_id`  
>send: nothing  
>receive: json document of Post

Get User profile by ID
>request: GET to `/users/:user_id`  
>send: nothing  
>receive: json document of User

Create new User
>request: POST to `/users/`  
>send: full User object except id (id automatically assign)  
>receive: { message: String }

Update User by ID
>request: PUT to `/users/:user_id`  
>send: full User object  
>receive: { message: String }

Create new Post
>request: POST to `/posts/`  
>send: full Post object except id (id automattically assign)  
>receive: { message: String }

Update Post
>request: PUT to `/posts/:post_id`  
>send: full Post object  
>receive: { message: String }
