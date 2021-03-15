# Team Gravity - Deliverable 2

Spotstitch is an app which acts as a hub to inspire change and garner support for communal projects and those in need. Further, it shapes leaders who pursue their passions, fosters diverse projects, and generates support for existing projects.

Many communal projects suffer from a lack of exposure and support simply because they aren't connected to passionate individuals. Spotstitch is here to change that; It is the hub for people who need change, and for those eager to exact it.

## Deployment & Use

The application is deployed on **DEPLOYMENT** 

A snapshot of our deployed application will be permanently available under the branch 'deliverable-2-snapshot'.

### Instructions on use

The deployed application can be viewed by **STEPS - NOTE: A non-technical user should be able to deploy by following these steps**


## Key Features

#### **Sign-up**
The sign-up page consists of inputs for credentials such as name, email, and password. This information will then be passed to KeyCloak's secure authentication service to register a new user account.

#### **Login**:
A login page takes an email and password. This is then fed into KeyCloak's secure authentication service to validate that this is indeed an existing user.

#### **Onboarding Process**
The user can then progress to further stages of registration, namely, they can submit a profile picture, enter a biography, and potentially migrate account information from other social networks. In the future, additional onboarding will occur where users can browse and join existing communities.

#### **Browsing Communities**
The user can browse potential communities that they would like to join. These communities can be found in the Community List page, where they can be filtered by location or scroll through the "All communities" list.

#### **Viewing Communities**
Upon selecting a community in the list, the user can view it in more detail. Details include viewing a member list, proposals, recent activities, and the tags that the community is associated with.

#### **Creating Proposals**
The user has the ability to create propose activities within communities for others to take part of. In order to create a proposal, the author must submit descriptive photos, a title, a summary of what it is that they want to do/accomplish, and the type of help/people who they're looking for to participate. 


## MVP
The majority of the focus for the deliverable has been on creating extendable content on the front-end, as well as setting up the back-end properly.

The front-end UI is present and usable. It consists of 15 screens created using React Native, which span from login and onboarding pages to viewing communities. We understood early that this app isn't light on front-end content, and have focused our attention accordingly.

The back-end also required careful attention. Our partners could not stress enough that, as a social media app, a proper, extendible back-end was their top priority. Therefore, much attention was paid to the set-up of the mySQL database, using GraphQL for API calls. This has been implemented, and there was careful planning of the different tables and their many couplings. Further, security and authentication was also stressed, which is why we're using KeyCloak, a trusted service which adds authentication to applications. This has also been implemented with a set-up specific to React Native.

This work has paved the way for what remains to be done. The main aspect is obviously connecting the front and back-end. We need to connect the database to the current, static front-end content to generate profile summaries, community proposals, and much more. Further, there is more work to be done to get KeyCloak integrated in the login and sign-up. Some standardization is also required in the front-end as well as navigation options (e.g. navigation bars).

Additional features we've deemed necessary to implement include tags, a way to further filter (and more efficiently find) communities, as well as a search bar for communities and users.

Past this, any significant features we complete are auxillary, as this core will already have satisfied our partner's requests.


## Workflows

### Git/GitHub Workflow
Our GitHub workflow was shaped by adopting a modified Trunk-Based Development (TBD) strategy. Put simply, this is a structured way of creating many short-lived branches, each of which includes a new, finished feature when merged. All branch names are descriptive and concise concerning the feature being implemented. Each commit contains a working version such that multiple people can develop on any given branch without issue. Each pull-request consists of a code review, where members of the team can share input on changes that may need to be made.

When a significant feature is done being implemented, the branch is further reviewed by the team. If the code is up to our standards, the branch is then merged, as is prescribed in Trunk-Based Development.


### Testing Workflow
Furthermore, the structure for basic CI has been implemented, and a suite of tests run upon each pull request. Soon we will have another suite of tests to run upon individual pushes, and another upon deployment. Using Jest and Yarn, we have a test that compares the version of a page in the current PR, to the version prior to the PR. If the snapshots or different the test forces the pusher to either override the existing snapshot (if they meant to update a screen), or, the test fails if the user did not mean to update the selected screen. For now, since all of our screens are in a fairly constant state of flux, these tests are run manually. But once we have a more complete base, these tests will run automatically in our CI workflow files (see .github/workflows/basic_tests.yml for the details; the code for automatically running the snapshot comparison is commented out but will be ran shortly). 

Overall, our tests so far are light since there are still so many moving pieces, but they provide a good foundation and structure for future expansion. 


### Product Workflow
The project matches the workflow described in the moqups designed during the planning phase. 

The registration phase takes a reference from the "Citylayer App Inference" moqup provided in deliverable 1. In the application, the signup page leads to a page where the user can select a profile picture to display. From there they can also choose a profile header to personalize their profile. Lastly, they can choose to enter a bio and choose other social medias to migrate/connect with their SpotStitch account (with the exception of the location, which can automatically be retrieved through the phone services). 

The community aspects can be found in the "Mobile App Wireframe" and "Mobile App Wireframe (Proposal)" moqups, where all pages are connected to the home screen (the community list page). The user can return to this page from any derivative through the back arrows implemented at the top left of each page. The user can access their profile, individual communities and proposal creation and role modification. Upon viewing their profile, they wil lbe able to see information such as their reputation, what communities they may be a part of, and their recent activity. They will also have an opportunity to modify and details on their profile. When viewing specific community mages, they will be able to see the member list, proposals, recent activities, and tags. For proposal creation, the user can add photos, details, roles, and tags that are relevant to the activity, along with publishing the proposal. After the proposal is submitted, the user is brought back to the community list page, where they are alerted that their proposal has been submitted. Communities updating with activity will be implemented in the future.
