# SPOTSTITCH OFF-BOARDING


## Developer Set-up & Requirements

**React Native Application**

In your respective command-line interface, set up a React Native application in the spotstitch directory, e.g.

    cd team-project-gravity
    npm install -g create-react-native-app    
    create-react-native-app spotstitch


**Installing Packages**
    
Download the necessary packages outlined in the `package.json`, `package-lock.json`, and `yarn.lock` files

    cd backend
    npm install

    cd ../frontend
    npm install

**MySQL Server**

Download Docker Desktop: https://www.docker.com/products/docker-desktop

Create a docker container and start it:

    docker run --name=spotstitch -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest
    docker start spotstitch

In Docker Desktop, access the spotstitch container command-line interface and execute:
    
    mysql -uroot -ppassword --host=localhost -P3306
    CREATE DATABASE spotstitch;
    USE spotstitch;

**Other**

Set up the .env



**Testing CI/CD**

There is GitHub Actions CI/CD implemented which will automatically run a suite of tests run upon each pull request.

Using Jest and Yarn, we have a test that compares 

Soon we will have another suite of tests to run upon individual pushes, and another upon deployment.

Using Jest and Yarn, we have a test that compares the version of a page in the current PR, to the version prior to the PR.

If the snapshots or different the test forces the pusher to either override the existing snapshot (if they meant to update a screen), or, the test fails if the user did not mean to update the selected screen.

These tests will run automatically in our CI workflow files (see .github/workflows/basic_tests.yml for the details; the code for automatically running the snapshot comparison is commented out but will be ran shortly).



## Deployment

### Local Deployment

A



### Production Deployment & CI/CD

**Staging Environment**

The staging environment is currently deployed on Heroku and can be found here: https://spotstitch-staging.herokuapp.com/.

One feature of our GitHub Actions CI/CD is automatically re-deploying the staging environment when `main` is changed.

**Production Environment**

The production app is currently deployed on Heroku here: https://spotstitch.herokuapp.com/.

The `main` branch serves as our production branch.

After testing in the staging environment, the changes can be manually deployed to the production environment. --- HOW?

**Deployment Information & Instructions**
