# SPOTSTITCH/GRAVITY

## Description 

Spotstitch is an app which acts as a hub to inspire change and garner support for communal projects and those in need. Further, it shapes leaders who pursue their passions, fosters diverse projects, and generates support for existing projects.

Many communal projects suffer from a lack of exposure and support simply because they aren't connected to passionate individuals. Spotstitch is here to change that; It is the hub for people who need change, and for those eager to exact it.

## Key Features

#### **Database**
A MySQL database was carefully planned and developed, as well as functionality to query using GraphQL. Tables and their couplings were carefully planned between users, communities & their members, proposals, and much more.

#### **Sign-up**
The sign-up page consists of inputs for credentials such as name, email, and password. In the future, this information will then be passed to KeyCloak's secure authentication service to register a new user account. KeyCloak is set up, but required further work for login/sign-up that we saw fit to complete in the next deliverable.

#### **Login**
A login page takes an email and password. In the future, this will be fed into KeyCloak's secure authentication service to validate that this is indeed an existing user. KeyCloak is set up, but required further work for login/sign-up that we saw fit to complete in the next deliverable.

#### **Onboarding Process**
The user can then progress to further stages of registration, namely, they can submit a profile picture, enter a biography, and potentially migrate account information from other social networks. In the future, additional onboarding will occur where users can browse and join existing communities.

#### **Browsing Communities**
The user can browse potential communities that they would like to join. These communities can be found in the Community List page, where they can be filtered by location or scroll through the "All communities" list.

#### **Viewing Communities**
Upon selecting a community in the list, the user can view it in more detail. Details include viewing a member list, proposals, recent activities, and the tags that the community is associated with.

#### **Creating Proposals**
The user has the ability to create propose activities within communities for others to take part of. In order to create a proposal, the author must submit descriptive photos, a title, a summary of what it is that they want to do/accomplish, and the type of help/people who they're looking for to participate. 

### **MVP Progress**
The majority of the focus for this deliverable has been on creating extendable content on the front-end, as well as setting up the back-end fully and properly.

The front-end UI is present and usable. It consists of 15 screens created using React Native, which span from login and onboarding pages to viewing communities. We understood early that this app isn't light on front-end content, and have focused our attention accordingly.

The back-end also required careful attention. Our partners could not stress enough that, as a social media app, a proper, extendible back-end was their top priority. Therefore, much attention was paid to the set-up of the MySQL database, using GraphQL for API calls. This has been implemented, and there was careful planning of the different tables and their many couplings. Further, security and authentication was also stressed, which is why we're using KeyCloak, a trusted service which adds authentication to applications. This has also been implemented with a set-up specific to React Native, with some further work required for complete login/sign-up functionality.

This work has paved the way for what remains to be done. The main aspect is obviously connecting the front and back-end. We need to connect the database to the current, static front-end content to generate profile summaries, community proposals, and much more. Further, there is more work to be done to get KeyCloak integrated in the login and sign-up. Some standardization is also required in the front-end as well as navigation options (e.g. navigation bars).

Additional features we've deemed necessary to implement include tags, a way to further filter (and more efficiently find) communities, as well as a search bar for communities and users.

Past this, any significant features we complete are auxillary, as this core functionality will already have satisfied our partner's requests!


## Instructions

### **Running the App**

**Before examining the website, please change the aspect ratio of your tab to that similar of a phone**, as this is a mobile app. This is the simplest solution given the difficult/cost of using simulators and deploying to app stores.

The app is currently deployed on Heroku. You can find our app here: https://spotstitch.herokuapp.com/

In the future, this snapshot of our deployed application will be available and unchanged under the branch *deliverable-2-snapshot*.


### **Product Layout**
The product layout matches that of the Moqups designed during the planning phase. For testing purposes, we've made it so that all pages are easily accessible at all times (i.e. just a few clicks away).

The registration phase takes a reference from the "Citylayer App Inference" Moqup provided in deliverable 1. In the application, the sign-up page leads to a page where the user can select a profile picture to display. From there they can also choose a profile header to personalize their profile. Lastly, they can choose to enter a biography and choose other social medias to connect their SpotStitch account with (with the exception of location, which can automatically be retrieved through the phone services). 

The community aspects can be found in the "Mobile App Wireframe" and "Mobile App Wireframe (Proposal)" Moqups, where all pages are connected to the home screen (the community list page). The user can return to this page from any derivative through the back arrows implemented at the top left of each page. The user can access their profile, filter communities based off location, view individual communities and create proposals.

Upon viewing their profile, they will be able to see information such as their reputation, what communities they may be a part of, and their recent activity. They will also have an opportunity to modify and details on their profile as well as logout of their account.

When viewing specific community pages, they will be able to see the member list, proposals, recent activities, and tags associated with that community.

On the proposal creation page, the user can add photos, details, roles/type of help needed, and tags that are relevant to the activity, along the option to publish the proposal. After the proposal is submitted, the user is brought back to the community list page, where they are alerted that their proposal has been published to the respective communities the provided tags are relevant to.


 ## Development requirements
 There are several requirements to run this locally as a developer. The proper environment can be set up with the below steps:

React Native application
* Set up a React Native application in the spotstitch directory. 

    `npm install -g create-react-native-app`
    
    `create-react-native-app spotstitch`

* Once created, you can use `npm install` inside the project directory to download requirements for the application

MySQL Server
* Download Docker Desktop: https://www.docker.com/products/docker-desktop

* Create a docker container, and start it:

    `docker run --name=spotstitch -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest`
    
    `docker start spotstitch`

* In Docker Desktop, go to the spotstitch container and in the container command line:
    
    `mysql -uroot -ppassword --host=localhost -P3306`

    `CREATE DATABASE spotstitch;`

    `USE spotstitch;`

Keycloak

* Download a distribution from https://www.keycloak.org/downloads
* Using the executable application, connect to the application

 
 ## Deployment and Github Workflow

### GitHub
Our GitHub workflow was shaped by adopting a Trunk-Based Development (TBD) strategy. Put simply, this is a structured way of creating many short-lived branches, each of which includes a new, finished feature when merged. All branch names are descriptive and concise concerning the feature being implemented, e.g. 'profile-page' or 'database-setup'. Although it's generally one person working on a branch at any given time, each commit contains a working version such that multiple people can develop on any given branch without issue. Each pull-request consists of a code review, where some subset of members of the team (usually 2-3 people) can make suggestions.

When a significant feature is done being implemented, the branch is further reviewed by the team. If the code is up to our standards, the branch is then merged, as is prescribed in Trunk-Based Development.

### Testing

Furthermore, the structure for basic CI has been implemented, and a suite of tests run upon each pull request. Soon we will have another suite of tests to run upon individual pushes, and another upon deployment. Using Jest and Yarn, we have a test that compares the version of a page in the current PR, to the version prior to the PR. If the snapshots or different the test forces the pusher to either override the existing snapshot (if they meant to update a screen), or, the test fails if the user did not mean to update the selected screen. For now, since all of our screens are in a fairly constant state of flux, these tests are run manually. But once we have a more complete base, these tests will run automatically in our CI workflow files (see .github/workflows/basic_tests.yml for the details; the code for automatically running the snapshot comparison is commented out but will be ran shortly). 

Overall, our tests so far are light since there are still so many moving pieces, but they provide a good foundation and structure for future expansion. 

### Deployment

The overall deployment process consists of the developer's local environment, a staging / development environment, and a production environment. Every developer on our team would make changes locally, and once the changes were completed and didn't cause any issues or bugs, they would be pushed to a branch off of the main (master) branch of the repository. Once the branch was approved, it was merged into the main branch of the repository, which would automatically re-deploy the staging environment. Once the changes that were just merged into the main branch were manually tested in the staging environment and they all functioned as they should, we manually deploy these changes to the production environment.

The production environment can be found here: https://spotstitch.herokuapp.com/
The staging environment can be found here:

We used Heroku to deploy our application. The reason we made this decision was because after speaking with HumanCity, they made it apparent to us that they desired a robust backend. Keeping that in mind, it made sense to be able to use a deployment tool that would allow us to deploy as frequently as we desired when making changes or updates to the backend. Heroku is a great deployment tool that allows us to do exactly this!
In addition, as we are creating a mobile app, to be able to truly deploy would be to deploy on the app store (for iOS) and the play store (for Android), which can take weeks to gain approval for each deployment. Since we are using React Native as our front end, we also have the ability of creating a web app at the same time as the mobile applications. In this sense, we can currently approach deployment as if we are creating a web app, since this way we can have our robust backend deployed appropriately while having a working version of our front-end. Until our application is ready to be shipped, we will use Heroku for deployment, and switch to other methods of deployment for mobile apps once we are ready to be shipped.


## Licenses 

We are still discussing licenses with our partner. In the mean time, default copyright laws will apply.
