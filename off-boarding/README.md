# SPOTSTITCH OFF-BOARDING

## General Information Before Getting Started
This repository is used to develop a mobile (iOS and Android) application, which is also deployed as a web application (as of right now since the product is still being built and has yet to be shipped and deployed on the Play or Apple Store).

The tech stack that is being used is:
  - Frontend: React Native
  - Backend: GraphQL with Express middleware and MinIO for image storage
  - Database: MySQL (using the Sequelize library) 
  - CI/CD: Githib Actions
  - Deployment: Heroku
  - Third-party authentication: Auth0

## Format of Important Files
``` r
- package.json: Used when deploying the repository on Heroku
- backend
  |- database
    |- db_config.js:
      • Gets the necessary configurations from the .env file (setup of that file explained further below) and loads them in to be used by MySQL
    |- db.js: 
      • Includes the models / schemas (and relationships) of each table within the spotstitch MySQL database
    |- dummy_data.sql: 
      • Fake data that can be imported into the MySQL database
  |- graphql
    |- index.js:
      • Main file where the backend is run from, connected to MySQL and the static UI pages, and listens for calls to the backend
    |- resolvers.js: 
      • Includes functions that generate a response from a GraphQL query or mutation
    |- typeDefinitions.js: 
      • Includes the schema of the objects created and returned from the backend
  |- .env-copy: 
      • configuration file required to be copied by the developer into a .env file (that the developer creates) to match the MySQL configurations of a developer (setup explained further below)
  |- minioClient.js: 
      • Includes the necessary configurations for MinIO
  |- testMutations.txt: 
      • Examples of all the Mutations that can be performed by the GraphQL backend, which can be copy and pasted into the GraphQL Playground
  |- testQueries.txt: 
      • Examples of all the Queries that can be performed by the GraphQL backend, which can be copy and pasted into the GraphQL Playground
- frontend
  |- android: 
      • Includes all the necessary configuration files to run the application on an Android emulator
  |- ios: 
      • Includes all the necessary configuration files to run the application on an iOS simulator
  |- patches
    |- show-image-RCTUIImageViewAnimated.patch: 
      • a patch file that corresponds to the file RCTUIImageViewAnimated.m within node_modules
  |- src
    |- hooks: 
      • Includes GraphQL Query hooks
      |- queries: 
        • Includes all the necessary queries that are used by the frontend to perform queries or GET calls to the GraphQL backend
    |- images: 
      • Includes all images that are displayed statically throughout the screens / pages of the application
    |- screens: 
      • Includes all the screens / UI display pages for the frontend
      |- community: 
         • Includes all the screens / UI display pages related to community pages
      |- components: 
          • Includes all the React Native components that are shared between multiple pages
      |- signup: 
          • Includes all the screens / UI display pages related to sign up
      |- style: 
          • Includes various CSS styling
      |- auth0-configuration-mobile.js: 
          • Includes the necessary configurations for auth0
      |- HomeStack.js: 
          • File that allows for navigation between pages
  |- web-build: 
      • The static build of the UI pages that will be used by the backend when deploying the application
```

## Developer Set-up & Requirements

**Frontend: React Native Application**

**Installing Packages: General**
The package manager used in the frontend is Yarn. Download the necessary packages outlined in the `yarn.lock` file by doing:

    cd ./frontend #assuming you are currently at the root of the repository
    yarn install
    
**Installing Packages: iOS**

Before running the application on an iOS emulator, the following steps must be performed:

    cd ./frontend #assuming you are currently at the root of the repository
    patch --forward node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m < patches/show-image-RCTUIImageViewAnimated.patch
    cd ios
    pod install
    
Notes: 
  - iOS seems to only be able to run using Xcode simulators, which are only accesbile through MacOS. If you are using a Windows computer, you will not be able to run an iOS simulator.
  - The reason for the patch file is that without the modification, images on the application will not be displayed. Anytime that yarn install is re-run, the patch MUST be re-run as well.
  - you may have to install pod before being able to run the `pod install` command. If you run into issues when running `pod install`, you may need to install CocoaPods. More information on how to do so can be found here: https://cocoapods.org/

**Running the Frontend Application**

The application can be ran on the Web, an iOS emulator or an Android emulator. To run each:

    cd ./frontend/  #assuming you are currently at the root of the repository
    
    # to run web:
    yarn run web
    
    # to run iOS:
    yarn run ios
    
    # to run Android:
    yarn run android
    
These commands can also be found within the `./frontend/package.json` file.

**Frontend: Auth0**

To be able to use Auth0, a developer must create an Auth0 account, and within that account, create an application. Currently, the Auth0 account being used is under a previous developer of the app. If the new team wants to have full access to be able to view the accounts registered through Auth0, then the following steps must be taken:

1. One member of the team must create an Auth0 account
  - Go to: https://auth0.com/ and create an account
2. Create an application
  - When logged into the newly created account, on the left-hand side of the screen click on Applications > Applications from the dashboard
  - On the right side of the screen, there should now be a large orange "+ Create Application" button - click on that to create an application
  - Name the application whatever you would like, and choose the application type Native. Click the "Create" button at the bottom right of the pop-up
3. Update configuration settings within the Auth0 Application
  - On the Auth0 page you were previously navigating, select "Settings" which should be found as a tab underneath your application's name
  - Scroll down to the "Application URIs" section
  - In this section, there should be "Allowed Callback URLs" and "Allowed Logout URLs"
  - In each of the "Allowed Callback URLs" and "Allowed Logout URLs" boxes, copy and paste:
  `com.frontend://{domain}/ios/com.frontend/callback, com.frontend://{domain}/android/com.frontend/callback`
    NOTE: the {domain} should be replaced with the domain assigned to your application (which can be found at the top of the "Settings" page you are currently on.
   - Scroll to the bottom of the page and click on the blue button "Save Changes"
4. Update the configuration file in this repository's frontend
    - Keep the Auth0 tab open in your web browser, and in your code editor, navigate to `./frontend/src/atuh0-configuration-mobile.js`
    - Replace the string next to clientID with the clientID of your newly created Auth0 application, which can be found in the Auth0 Settings tab of your application (the page you were on in Step 3) just below where you found the Domain.
    - Replace the string next to domain with the domain of your newly created Auth0 application (it is the same domain that was found and used in step 3)

If there are any further difficulties with Auth0 or the new developers would like to discuss the auth0 configuration with the developer whose configurations are currently being used, please email dd.mcallister@hotmail.ca.

**Backend: GraphQL, Express and MinIO**

The package manager used in the backkend is NPM. Download the necessary packages outlined in the `package.lock` file by doing:

    cd ./backend #assuming you are currently at the root of the repository
    npm install
    
Before being able to fully run the backend, the database must also be set up as well:

**Database: MySQL**

1. If you don't already have Docker, you can download Docker Desktop from here: https://www.docker.com/products/docker-desktop

2. Create a docker container and start it:

    ```docker run --name=spotstitch -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest
    docker start spotstitch

3. In Docker Desktop, access the spotstitch container command-line interface and execute:
    
    ```mysql -uroot -ppassword --host=localhost -P3306
    CREATE DATABASE spotstitch;
    USE spotstitch;

NOTE: if you are running your docker container from a Windows computer, you may have to do this extra step before being able to have the repository's backend connect to your database:

Kaden can you please add the extra steps you needed to do here?

**Connecting Backend and MySQL**

The configuration files for the database must be added to the backend code:

1. In `./backend/`, create a file called `.env` (be very careful when creating this file - it MUST be called exactly this).
2. Copy and paste the contents from `./backend/.env-copy` into your newly created `.env` file
3. Replace each of the `<..>` with your local MySQL configurations. If you set up your docker container exactly as was done in steps 2&3, your configuration file should look like:
  `DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_DB=spotstitch`

**Running the Backend**
Now that both the backend and database is setup, you should be able to run the backend!

    cd ./backend #assuming you are currently at the root of the repository
    npm start
    

## Testing CI/CD

There is GitHub Actions CI/CD implemented which will automatically run a suite of tests run upon each pull request.

Using Jest and Yarn, we have a test that compares 

Soon we will have another suite of tests to run upon individual pushes, and another upon deployment.

Using Jest and Yarn, we have a test that compares the version of a page in the current PR, to the version prior to the PR.

If the snapshots or different the test forces the pusher to either override the existing snapshot (if they meant to update a screen), or, the test fails if the user did not mean to update the selected screen.

These tests will run automatically in our CI workflow files (see .github/workflows/basic_tests.yml for the details; the code for automatically running the snapshot comparison is commented out but will be ran shortly).

## Deployment

### Important Warnings

Currently, deployment is set up by a previous developer of the app. This way, only they have access to deployment. If you would like to be able to control the deployment of the application, then you can either:

- Add your own Heroku environments (and remove the connection of the current Heroku environments):
```
git remote rm production
git remote rm staging
```
OR:

- Contact the previous developer (at dd.mcallister@hotmail.ca) in charge of deployment to arrange a way for you to gain access to the current Heroku environments. 


### General Description of How Deployment Works

Currently, as the product is not ready to be shipped, the web verison of the application is deployed by Heroku. To do this, the entire repository is technically deployed, however the `package.json` file in the root directory runs the backend, which in turn hosts a minified version of the front-end pages.

The minified version of the frontend pages can be found in `./frontend/web-build/index.html`.

The minfied version is NOT automatically updated whenever UI changes are made - the minified version of the UI MUST be updated everytime that UI changes are made. This is done by:

```
#in the root directory:
npm build-frontend
```
OR:
```
#in the root directory:
cd frontend && expo build:web
```

NOTE: expo is required to perform this command. You may need to `npm install -g expo-cli` in the root directory before being able to perform either of the commands above.

After peforming either of the above commands, the `./frontend/web-build` folder should be updated. This can now be pushed to the main branch to be used for deployment!

### Staging Deployment

The staging environment is currently deployed on Heroku and can be found here: https://spotstitch-staging.herokuapp.com/.

Currently, when the branch `main` is changed on Github (by any changes, including a direct push to the main branch, merging a branch into main, etc.) the staging environment will automatically be redeployed by Heroku.

### Production Deployment

The production app is currently deployed on Heroku here: https://spotstitch.herokuapp.com/.

After testing any changes in the staging environment, the changes can be manually deployed to the production environment.

This can be done by doing: 
`git push production main`

