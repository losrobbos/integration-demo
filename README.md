# Deployment / Integration

## Deployment preparation

### Starting with Backend

- Create .env file (in your main project folder)
  - Put in the URL of the frontend (usually http://localhost:3000)
  - Important: Never put a SLASH at the end of the url (so not :3000/ please :))
- Alternative: Copy the .env.sample file to a .env file
  - this way your colleagues who clone your repository will have
  - an example of an .env file and can put in their own values there
  - e.g. their own ATLAS database url
- Install dotenv & cors: `npm i dotenv cors`
- Load .env at beginning of your server file:
  - `const env = require("dotenv").config()`
- For easy check if env vars are loaded correctl, console log them:
  - `console.log(env)`
- Create a .gitignore file
  - ignore .env and node_modules
- Setup CORS middleware to allow access from frontend:
  - `app.use( cors({origin: process.env.FRONTEND_ORIGIN, credentials: true }) )`
 

### Deploy Backend

In this example we show deployment using Vercel:
https://github.com/losrobbos/vercel-deploy-guide/#backend

First you need to signup to Vercel (find the link in the guide above :)
And then install the vercel package: `npm i -g vercel`

Vercel will deploy ALL your files in your folder. So it will ignore your .gitignore file!

So create a file .vercelignore and put ".env" inside, so it will not upload your dotenv.

Also you need a vercel.json file (see the guide above)

Now create a Vercel app in the terminal:
- `vercel link`

Afterwards go to the vercel.com, find your new project and configure the same environment variables:
https://github.com/losrobbos/vercel-deploy-guide/#environment

Now deploy your app:
- `vercel --prod`

It will create an URL where you should find your deployed backend.

Check if the routes are working fine :)


### Prepare frontend

- Create a .env file (not inside /src, in your main project folder)
- If you use Create-React-App to create a React project: 
  - all variable names need to start with "REACT_APP_"
  - configure the URL to the backend:   
    - REACT_APP_API_URL=`yourDeployedBackendUrl`
- If you use Vite to create a React project:
  - all variable names need to start with "VITE_"
  - configure the URL to the backend:
    - VITE_API_URL=`yourDeployedBackendUrl`

Now start the app and check if you can reach your deployed backend with your fetch calls (e.g. on a button click)

#### Using Axios

In case you exchange mainly JSON between your Frontend and Backend Axios simplifies the integration between Frontend and the API.

`npm i axios`

Set URL to backend once
`axios.default.baseURL = process.env.REACT_APP_API_URL`

### Deploy Frontend

Let vercel ignore the .env file by creating a .vercelignore file and put ".env" inside

Deploy the frontend:
`vercel`

Go to Vercel Dashboard: vercel.com
- Select the created frontend project
- Click "Settings"
- Click "Environment variables"
  - place your backend URL here (REACT_APP_API_URL)

Re-Deploy frontend (this way env variables are loaded):
- `vercel --prod`

Refresh deployed frontend in browser. And check if API URL of Backend is printed to console.

#### Allow deployed frontend access to deployed backend

In Vercel dashboard select your backend project
- Settings > Environment Variables
- Change FRONTEND_ORIGIN to the URL of your deployed Frontend

Afterwards Re-Deploy Backend:
- `vercel --prod`


### Testing

Go to you frontend and make a fetch call.

Enjoy :-)
