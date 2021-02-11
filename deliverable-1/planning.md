# Team Gravity - Pharmacy Diagnostics Project Application
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

 > Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app,
   browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
    * Assume your the reader knows nothing about the problem domain and provide the necessary context. 
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.
 
 
We are going to build the base platform for a mobile app that helps build communities by delivering community programs, developing individual skills and helping users become leaders in the community. There is no current central location for young individuals to get involved in local or online communities, and SpotStitch will provide a unified space for members to connect and interact. Organizations and experienced members can create communities for things like volunteer opportunities, fundraisers, or any issues close to their hearts. From there, educational content can be created that allows users to learn new skills and familiarize themselves with relevant issues. A basic mockup of some of our functionality is shown below.


#### Q2: Who are your target users?

  > Short (1 - 2 min' read max)
 * Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
 * **Feel free to use personas. You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).**
 
 We have 2 main user groups that will be using our product:
 1) Youth (12-20) looking to get involved in their communities or learn how to access community resources/provide support to their community via their phones. Initially the content will target black and/or queer youth via the companies we partner with and the courses that are offered, but these will be expanded as the project grows. Initial groups will be formed from Toronto youth, but this can be extended globally as functionality grows.
 
2) Purpose-drive organizations or charities looking to recruit community members for various tasks (volunteers, members etc.) These will be local organizations like food banks, shelters, and outreach groups. Additionally, larger companies trying to reach communities will find a place at SpotStitch as well.  

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

> Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?
    
    Our product provides a one-stop-shop for community involvement. Rather than having to search for individual companies and spend extensive time contacting companies, users can easily find the right projects from our app. Additionally, once the base setup is in place, the application/recruitment process will be much easier since it can be standardized, so it will save users hours of time in writing repetitive applications. All of these benefits also apply to the involved organizations; they will benefit from larger talent pools, and experience increased interest since they will be easier to find. 

#### Q4: How will you build it?

> Short (1-2 min' read max)
 * What is the technology stack? Specify any and all languages, frameworks, libraries, PaaS products or tools. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?
 * What is your testing strategy?
 
We will use a react native frontend to build out the mobile app on both iOS and Android, while storing data in a mySQL database and using GraphQL for our API calls and other middleware interaction. We're also going to write everything backwards and upside down so no one can steal our code, and it will be in French. 

#### Q5: What are the user stories that make up the MVP?

 * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * User stories must contain acceptance criteria. Examples of user stories with different formats can be found here: https://www.justinmind.com/blog/user-story-examples/. **It is important that you provide a link to an artifact containing your user stories**.
 * If you have a partner, these must be reviewed and accepted by them

----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

**Briefly describe which option you have agreed to. Your partner cannot ask you to sign any legally binding agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. Not necessarily one role to one team member.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * 3 technical strengths and weaknesses each (e.g. languages, frameworks, libraries, development methodologies, etc.)
 
 * Eric Hasegawa: Product manager, full stack developer; Responsible for managing the project and team throughout the development process. Will handle workflow and process optimization, sprint meetings, task management, and will be the main channel for ensuring streamlined communication both within the team, and between the team and Human city. Additionally, will provide development support in a full stack capacity as required by the availability of other members and progression of the product. Strong in management (specifically with Agile and lean methodologies) and technical skills in Javascript, SQL, API development, and overall full stack development. 
 
* Micaela Consens: Development lead; Responsible for managing the development process, ensuring progress stays consistent throughout the term, and will serve as the primary point of contact for development concerns and solutions. Will handle the maintenance of our codebase and repository, and provide guidance for the structure of the project and make design decisions. In terms of development, Micaela will work largely on backend system design and development, but can work on front end if necessary. Micaela is the most experienced with our stack and is familiar with mySQL and GraphQL, drawing experience from development work at Sickkids and CamH.

* Michael Wang: Lead backend developer; Responsible for designing and building the backend of the application (with the other full stack/backend developers). Will make key design decisions and communicate with the team to keep everyone up to date on progress, problems etc. Skilled in general backend development with emphasis in Java, SQL, and Python. Drawing experience from a backend internship at Blackberry and numerous advanced machine learning projects.

* Sarrah Merchant: Lead frontend developer; Our only developer focused solely on frontend, Sarrah will be our primary resource for the design and implementation of the user interface. Will work with React Native to build the parts of the project that will be seen by users, and lead the other members working on front end in terms of task delegation and requirements. Skilled in Javascript ( + React), NodeJS, and Android Studio with experience from 2 front end based internships. 

* Kaden Mckeen: Full stack developer; One of two main support units for the project, Kaden will be working on both the front and back end of the project as necessary. Since we are a backend heavy project he will likely be spending lots of time managing and building our database, working with API's (and potentially building our own) to serve and update data, and will work on frontend design and creation as well. Skilled in Javascript, SQL, HTML/CSS as well as API development, Kaden has experience as a full stack developer at Alice Insights and through multiple personal projects.

* Dianna McAllister: Full stack developer; the second half of our full stack team, Dianna will be building out all of the application throughout the term. Drawing from expertise in mySQL and PostgreSQL, as well as a strong foundation in HTML/CSS, Dianna will be a main resource to provide additional development capacity to all aspects of the product. Additionally, Dianna is well equipped to provide technical advice and guidance from her work with Sickkids, Solace, and the University Health Network. 

#### Q7: What operational events will you have as a team?

Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You must have at least 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * What did you discuss during the meetings?
   * What were the outcomes of each meeting?
   * You must provide meeting minutes.
   * You must have a regular meeting schedule established by the second meeting.  
   
 We will be using an agile framework to ensure progression stays consistent and delays are minimized. We'll be on a 1-week sprint schedule so we will have one weekly call with the team for sprint closure/planning, as well as an optional mid-week call in case of unforeseen challenges or bottlenecks. These will occur Saturday afternoons, with the optional call on Wednesdays. Additionally we will have ad-hoc meetings as necessary, and each team member will provide weekly availability to be consulted for questions or concerns.
 
We have had 2 calls with Human City so far, in the first we discussed the scope of the project and essentially took their expansive concept and discussed what an MVP for that would look like. We determined what is most important to the Human City team and what key deliverables/acceptance criteria will look like. After this call we met with our team and created an outline for our MVP. Our second meeting was to discuss our MVP proposal, finalize acceptance criteria, and get approval to move forward with it. We will be meeting regularly on Mondays after class with the Human city team to keep them updated and handle any issues that arise during the week. 
  
#### Q8: What artifacts will you use to self-organize?

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?
   
   Going with our Agile approach, we will be using a Jira board for task management, sprint planning, work assignment, and prioritization/scheduling. Most of our team has experience working with Jira, and Eric has experience managing boards and handling planning + execution of sprints. Our task backlog will be in order of importance, so each sprint meeting we will just drag in the top tasks and assign them according to each members capacity. Tasks will move from our backlog, to a to do state, to an in progress state, to a QA + testing state, to a merged/finalized state. Micaela will be the final say in terms of task delegation, but it will largely be based on equally dividing work and playing to each team members strength. Additionally, each members academic demands will be taken into consideration so that things actually get done. 

#### Q9: What are the rules regarding how your team works?

Although we will not have many formal rules or regulations, the following are general guidelines for the team:
* Each substantial change must have its own branch
* Each branch must submit a pull request and be approved by a selected group before merging 
* All code must be adequately documented
* All code must be tested before being merged to main branch
* Git branch names must correspond to Jira tasks 

**Communications:**
 * What is the expected frequency? What methods/channels are appropriate? 
 * If you have a partner project, what is your process (in detail) for communicating with your partner?
 
 All members will be active in a Facebook Messenger group for quick communication, and each member will have scheduled hours in which they are available to take questions, help with bottlenecks, and address problems. We will use Zoom for all meetings, and are communicating with our partner team via Slack and email primarily. We will likely be communicating with the Human City team 2-3 times per week depending on the status of the project (once for weekly call, and twice more for various emails with questions and comments etc.)
 
**Meetings:**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 
 Meetings will be guided primarily by Eric, and each previously assigned task will be discussed in the sprint review. New tasks will be discussed and mutually understood before assignment, and we will be leveraging a story point system to equare workloads. If members consistently miss meetings or don't complete tasks, this will be discussed via messenger and any necessary changes will be made (moving meeting times, shifting roles etc.)
 
**Conflict Resolution:**
 * List at least three team scenarios/conflicts you discussed in lecture and how you decided you will resolve them. Indecisions? Non-responsive team members? Any other scenarios you can think of?
 
 1. Indecisions with technical decisions
 
 The ideal situation would be that all team members agree on every technical decision, however this is unlikely to be the case. In such instances, it is important to weigh the pros and cons of making one decison versus another. If it still debateable about which decision should be made, the opinion of those who have the most knowledge and understanding of the technology that is in question (GraphQL, MySQL, React, etc.) will be weighed more heavily than others. If there is still large debate on how to move forward, the final step would be to contact the CTO of Human City for her input in the decision, as she has lots of industry experience and would be a great resource to use when making such difficult and complex decisions.
 It is also important to note that while disagreements about technical decisions are likely to arise, treating others and their opinions/ideas without respect is unacceptable on our team and will not be tolerated.
 
 2. Non-responsive team members
 
 This conflict will hopefully be avoided (or quickly recognized) as our team will have weekly scrum/sprint meetings. If one of the team members misses a sprint meeting without informing the team, they will be contacted immediately through Facebook Messenger. 
 If the team member does not respond to a Facebook Message in the group chat within 72 hours where their response is required, they will be contacted again, as well as the decision about the message will move forward without that team member's input (whether that be a technical design decision, getting assigned JIRA tasks, etc.). As the time without response continues (while still being less than a week without contact), the tasks assigned to the non-responsive member will be re-assigned to other members of the team, while still attempting to contact the non-response team member. If the team member still hasn't been in contact with any members of the team for 1 week, the team will need to inform the designated TA for this team (Adam El-Masri) and if the problem continues to escalate, the professor (David Jorjani).
 
 3. Team members not completing their assigned tasks
 
 This case could occur if one of the team members is communicating with the team and is attending all necessary meetings, however is not completing their assigned tasks on time (saying they'll "get it done" or "are close to completing the task" without any evidence of work being completed on their tasks). The first step in resolving this issue would be to have one of the other team member's reach out and try to understand why the team member is struggling with completing their tasks (not understanding the given task? Not understanding the technology that is used for the task? Too heavy of a course load in other classes to find time to complete the tasks? There is a bug somewhere in the code that hasn't been able to be fixed?). Once the factor causing the delay is diagnosed, action can be taken to have another team member explain the task or technology at hand, or tasks can be rearranged to allow for those who have a lighter course load during that time to tackle the heavier tasks, or perform paired programming to fix the bug.
 
 4. Team members aren't getting along
 
 Like any time where working in a group is required, not all personalities will get along. While it seems like our group will get along well, it is important to consider the case where two or more team members are unable to cooperate and work together. If two (or more) of the team members aren't getting along, they can be given tasks that prevent them from working closely together (ex: one could work on the frontend and the other on the backend). If the team members inability to work together is affecting the rest of the group and the overall atmosphere of the team, then the team (or the team members who can't get along as well as another team member to act as a mediator) will have a discussion to try to resolve whatever caused the divide between the team members. If a resolution cannot be found for the team members to be amicable, then the team will need to inform the designated TA for this team (Adam El-Masri) and if the problem continues to escalate, the professor (David Jorjani).




----
## Highlights

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product and process plan.
 * This section is useful for important information regarding your decision making process that may not necessarily fit in other sections. 
 
1) Our MVP will be emphasizing back end functionality, extensibility, and modularity rather than front end appearance. A high quality backend foundation that the app can be built on is our top priority. Instead of focusing on delivering a more aesthetic and UI/UX based product, the Human City value team values a solid foundation for the project considering its scope and how much will likely be built on top of it. Our job is to build this base while minimizing technological debt and ensuring whoever works on this next will be able to pick it up quickly without being bogged down with bad source code or over-dependency on external resources.

2) The original scope of the project is enormous, and had to be scaled back significantly to meet MVP criteria; this project has a scope reaching far above what we can build (or even prototype) in a 3 month period. Deciding on what key features were necessary was our first challenge, and with the help of the Human City team and our own intuition we decided on our acceptance criteria. Scaling back meant stripping away many social media features, learning module integration, front end expansion etc. 

3) We want the backend to be as platform agnostic as possible, such that it can easily be extended to other systems. This means reducing technical dependencies and building out the project with good design patterns and recognizable strategies. Loose coupling is a high priority, as is modularity and reusability of each piece of software. React Native is good for this because it allows for high modularity and reusability, will still having each component be an independent functioning unit. It is also industry standard and a well maintained library, so for these reasons we decided on it for our frontend. Building our database and backend in SQL was a logical choice as it is a well understand language and suits the needs of our data quite well. 

4) Our end goal is to have enough functionality for the product to be tested with 10-15 beta users; it does not need to be shelf ready. This means that our frontend must be stable, but doesn't need to be 100% polished or finalized. What needs to be finished is the basic backend, and this aspect must be complete, tested, and ready to ship. 

5) Security and privacy is a high priority to Project: Human City. An additional factor that will go into all of our decisions is privacy and security for each user; both from data leaks and privacy invasion via our software. This means that finding good encryption and security is paramount, as well as clarity and honesty in communicating what data we collect from users and how we will use it. Most social networking platforms collect far more data than most people realize, and this is a dangerous trend that has led to skeptical consumers. We will be up front about the data we collect, and be as minimally invasive as we can be. 

