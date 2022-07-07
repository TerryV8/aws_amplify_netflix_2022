# aws_amplify_netflix_2022

Clone Netflix on AWS Amplify using React, Nodejs

# Set up fullstack project

To set up the project, we'll first create a new React app with create-react-app, a CLI tool used to bootstrap a React app using current best practices.

`npx create-react-app aws_amplify_netflix_2022`

# Launch the project

Now that we're in the root of the project, we can run the app by using the following command:

`npm start`

# The Amplify Command Line Interface (CLI) is a unified toolchain to create AWS cloud services for your app. Let's go ahead and install the Amplify CLI.

`npm install -g @aws-amplify/cli`

# Now it's time to setup the Amplify CLI. Configure Amplify by running the following command:

`amplify configure`

# Initialize a new backend

Now that we have a running React app, it's time to set up Amplify so that we can create the necessary backend services needed to support the app.

`amplify init`

# When you initialize a new Amplify project, a few things happen:

It creates a top level directory called amplify that stores your backend definition. During the tutorial you'll add capabilities such as a GraphQL API and authentication. As you add features, the amplify folder will grow with infrastructure-as-code templates that define your backend stack. Infrastructure-as-code is a best practice way to create a replicable backend stack.

It creates a file called aws-exports.js in the src directory that holds all the configuration for the services you create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services.

It modifies the .gitignore file, adding some generated files to the ignore list

A cloud project is created for you in the AWS Amplify Console that can be accessed by running amplify console. The Console provides a list of backend environments, deep links to provisioned resources per Amplify category, status of recent deployments, and instructions on how to promote, clone, pull, and delete backend resources

Install Amplify libraries
`npm install aws-amplify @aws-amplify/ui-react`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
