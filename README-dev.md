

## How to run the database server for development work

*Run the React development server, for frontend development*

Run `npm start` from the root directory. This will start the React development server, and should automatically open the live app in the browser. 

NOTE: this will connect the app to the database server on Heroku. It will live update any changes to the frontend (`/src` and `/public`), but changes to the server-side files will not be reflected until the Heroku deployment is updated. The Heroku deployment is monitoring the `bears-20/dev` branch, so soon after the changes are pushed to that branch, Heroku should update.

*Run the database server locally, for backend development*

In the root directory, run `npm run start-server`. This loads up the *server.js* and runs the server at the port specified in *.env* file. (Should be 3001)

NOTE: the client side will be served from the `/build` directory. Changes to files in `/src` or `/public` directories will not update until you run `npm run build`.

## Backend Function

This server connects the client side to the MongoDB database.

The client side program can send a request using [HTTP Request](https://www.w3schools.com/tags/ref_httpmethods.asp). This server will then talk to the database to perform the requested task, then usually send some kind of a response to the client side.

Example requests:

1. Get all the stored data documents (for the client side to render)
2. Add a new document to database
3. Replace an existing document with a new one
4. Delete an existing document

## Code Structure

**Backend**
*server.js* -  All the main functions of the server is contained here. Receiving the HTTP Request, routing it to the correct function which performs the appropriate database task, and send back the response back to client side.

*/model* - This folder contains javascripts, each containing a mongoose Schema which defines the template of database documents. 

**Frontend**
*/build* - The production build files, once you run `npm run build`, goes here. 

*/public* - The development version of static files are here.

*/src* - The javascript files for development version. `index.js` gets loaded first.

Also, please create a *.env* file in the root directory, for each local copy of the repository. This file will contain the environment variables. They are the "secret" variables like keys, passwords, etc that should not be visible to the users, so it should not be uploaded to GitHub. (It is uploaded for now. Once everyone has their local git copy, I will delete it)

*.env* should contain the following:
```
PORT = <API Port Number>
MONGODB_URI = <MongoDB URI>
REACT_APP_APIURL = <API URL for Heroku Deployment>
```

## Server Communication Scheme

*The server is not updated with these schemas and routes yet! But this is the proposal of how it'll work once it's running.*  
This contains all the information needed on the client side in order to talk to the server, and it should be updated continuously to let everyone know if something changed!

**API URL**  
Heroku:  Add Heroku deployment link here
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
