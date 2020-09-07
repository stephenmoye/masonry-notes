#Commands

Setup Wizard
Upon downloading the boilerplate the setup wizard will run automatically to allow you to install optional libraries. To run the wizard manually:

npm run setup

Development Server
To run the local development server:

npm run start

Production Server
To run the local production server:

npm run start:dist

Build for Production
To build a production-ready version of your website, run the following command in your project’s root directory:

npm run build:dist

To deploy, copy the entire contents of dist/ into your web server.

Code Linting
Your code will be linted each time your code is modifying when running the local development server or upon building for production. You can run the standalone linters with the commands below:

For Javascript
npm run lint:js

For CSS
npm run lint:styles

FTP Deployment
Check out the FTP deploying instructions, then you can use the following command to deploy your site:

npm run deploy
