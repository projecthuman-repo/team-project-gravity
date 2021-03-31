# SPOTSTITCH OFF-BOARDING

## General Information
This repository is used to develop the mobile (iOS and Android) application SpotStitch, which is also functional as a web application. It is temporarily deployed on the web awaiting deployment on the Play Store & Apple Store.

### Tech Stack
  - Front-end: React Native
  - Back-end: GraphQL with Express middleware and MinIO for image storage
  - Database: MySQL (using the Sequelize library) 
  - CI/CD: Githib Actions
  - Deployment: Heroku
  - Third-party authentication: Auth0

---

## Relevant Repository Files
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
      • Main file where the back-end is run from, connected to MySQL and the static UI pages, and listens for calls to the back-end
    |- resolvers.js: 
      • Includes functions that generate a response from a GraphQL query or mutation
    |- typeDefinitions.js: 
      • Includes the schema of the objects created and returned from the back-end
  |- .env-copy: 
      • configuration file required to be copied by the developer into a .env file (that the developer creates) to match the MySQL configurations of a developer (setup explained further below)
  |- minioClient.js: 
      • Includes the necessary configurations for MinIO
  |- testMutations.txt: 
      • Examples of all the Mutations that can be performed by the GraphQL back-end, which can be copy and pasted into the GraphQL Playground
  |- testQueries.txt: 
      • Examples of all the Queries that can be performed by the GraphQL back-end, which can be copy and pasted into the GraphQL Playground
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
        • Includes all the necessary queries that are used by the front-end to perform queries or GET calls to the GraphQL back-end
    |- images: 
      • Includes all images that are displayed statically throughout the screens / pages of the application
    |- screens: 
      • Includes all the screens / UI display pages for the front-end
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
      • The static build of the UI pages that will be used by the back-end when deploying the application
```

---

## Back-end Setup: GraphQL, Express and MinIO

NPM is our back-end package manager. Download the necessary packages outlined in the `package.lock` file via:

    cd ./backend # From repository root
    npm install

**Database: MySQL**

If you don't already have Docker Desktop, you can download it here: https://www.docker.com/products/docker-desktop

Create a docker container and start it:

    docker run --name=spotstitch -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest
    docker start spotstitch

In Docker Desktop, access the spotstitch container command-line interface and execute:
    
    mysql -uroot -ppassword --host=localhost -P3306
    CREATE DATABASE spotstitch;
    USE spotstitch;

***The remaining steps for setting up the database are only relevant to Windows' users***.

In the same terminal window, execute:

    select User, Host from mysql.user;

If you see `root %`, or simply `%` in the output generated, you're done! Otherwise, run these commands:

    CREATE USER 'root'@'%' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
    FLUSH PRIVILEGES;

You should now see `root %`, or `%` underneath the command:

    select User, Host from mysql.user;


**Connecting Back-end and MySQL**

The configuration files for the database must be added to the back-end code:

1. In `./backend/`, create a file called `.env` (be very careful when creating this file - it MUST be called exactly this).
2. Copy and paste the contents from `./backend/.env-copy` into your newly created `.env` file
3. Replace each of the `<..>` with your local MySQL configurations. If you set up your docker container exactly as was done in steps 2&3, your configuration file should look like:
  `DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_DB=spotstitch`

## Running the Back-end

Before running the back-end, the database must running. Go to Docker Desktop and ensure the SpotStitch container is running.

Then, open the command-line interface and execute:

    mysql -uroot -ppassword --host=localhost -P3306
    CREATE DATABASE spotstitch;
    USE spotstitch;

Now the database is running! You can run the back-end via:

    cd ./backend #assuming you are currently at the root of the repository
    npm start

From here, run the front-end with the above steps and that's everything!    

---

## Front-end Setup

**Installing Packages: General**

Yarn is our front-end package manager. Download the necessary packages outlined in the `yarn.lock` file via:

    cd ./frontend # From repository root
    yarn install
    
**Installing Packages: iOS**

In addition to the general install, the following steps must be performed before running the application on an iOS emulator:

    cd ./frontend # From repository root
    patch --forward node_modules/react-native/Libraries/Image/RCTUIImageViewAnimated.m < patches/show-image-RCTUIImageViewAnimated.patch
    cd ios
    pod install
    
Notes: 
  - iOS seems to only be able to run using Xcode simulators, which are only accesbile through MacOS. If you are using a Windows computer, you will not be able to run an iOS simulator.
  - The reason for the patch file is that without the modification, images on the application will not be displayed. Anytime that yarn install is re-run, the patch MUST be re-run as well.
  - you may have to install pod before being able to run the `pod install` command. If you run into issues when running `pod install`, you may need to install CocoaPods. More information on how to do so can be found here: https://cocoapods.org/

**Front-end: Auth0**

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
4. Update the configuration file in this repository's front-end
    - Keep the Auth0 tab open in your web browser, and in your code editor, navigate to `./frontend/src/atuh0-configuration-mobile.js`
    - Replace the string next to clientID with the clientID of your newly created Auth0 application, which can be found in the Auth0 Settings tab of your application (the page you were on in Step 3) just below where you found the Domain.
    - Replace the string next to domain with the domain of your newly created Auth0 application (it is the same domain that was found and used in step 3)

If there are any further difficulties with Auth0 or the new developers would like to discuss the auth0 configuration with the developer whose configurations are currently being used, please email dd.mcallister@hotmail.ca.

## Running the Front-end

The application can be ran on the Web, an iOS emulator or an Android emulator. Web requires no additional setup to run, however the mobile emulators will.

To use an Anrdoid emulator, download Android Studio and follow the steps outlined under 'Android development environment' here:

https://reactnative.dev/docs/next/environment-setup

To run an iOS emulator, you must be on a Mac. Simply download Xcode off of the App Store!

Then, to run the application in the front-end:

    cd ./frontend  # From repository root
    
    yarn run web # Running web app
    
    yarn run ios # Running iOS

    yarn run android # running Android
    
These commands can be found within the `./frontend/package.json` file.

Note: If running the front-end in conjunction with the back-end, it should be run last should be run last (i.e. after running the database and back-end)

---

## Testing CI/CD

Tests are currently being implemented using Jest and Yarn.

There is a GitHub Actions CI/CD pipeline implemented which will automatically run a suite of tests upon pushing to `main`. The results of these automated tests can be seen on the GitHub repository under the Actions tab.

The existing tests can be found in the .github/workflows folder.

---

## Deployment

### Deployment Description

As the product is not ready to be shipped on mobile, the web verison of the application is currently deployed via Heroku. To do this, the entire repository is technically deployed, however the `package.json` file in the root directory runs the back-end, which in turn hosts a minified version of the front-end pages.

The minified version of the front-end pages can be found in `./frontend/web-build/index.html`.

The minfied version is NOT automatically updated whenever UI changes are made - the minified version of the UI MUST be updated everytime that UI changes are made. This is done via:


    npm build-frontend # From repository root

OR via:

    ./cd frontend # From repository root
    expo build:web


NOTE: expo is required to perform this command. You may need to `npm install -g expo-cli` in the root directory before being able to perform either of the commands above.

After peforming either of the above commands, the `./frontend/web-build` folder should be updated. This can now be pushed to the main branch to be used for deployment!

### Current Staging Deployment

The staging environment is currently deployed on Heroku and can be found here: https://spotstitch-staging.herokuapp.com/.

Currently, when the branch `main` is changed on Github (by any changes, including a direct push to the main branch, merging a branch into main, etc.) the staging environment will automatically be redeployed by Heroku.

### Current Production Deployment

The production app is currently deployed on Heroku here: https://spotstitch.herokuapp.com/.

After testing any changes in the staging environment, the changes can be manually deployed to the production environment.

This can be done via:

    git push production main


### Transition of Deployment Ownership

Currently, deployment is set up by a previous developer of the app. This way, only they have access to deployment.


If you would like to be able to control the deployment of the application, then you can add your own Heroku environments, and remove the connection of the current Heroku environments via:
```
git remote rm production
git remote rm staging
```
OR

Contact the previous developer (at dd.mcallister@hotmail.ca) in charge of deployment to arrange a way for you to gain access to the current Heroku environments.