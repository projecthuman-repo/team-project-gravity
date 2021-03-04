-- to execute this script (through terminal), enter the MySQL terminal and type the command:
-- source <entire file path to this file>/dummy_data.sql

-- insert users
INSERT INTO users (id,createdAt,updatedAt) VALUES (1,'2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO users (id,createdAt,updatedAt) VALUES (2,'2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO users (id,createdAt,updatedAt) VALUES (3,'2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO users (id,createdAt,updatedAt) VALUES (4,'2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO users (id,createdAt,updatedAt) VALUES (5,'2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert communities
INSERT INTO communities (id,name,description,createdAt,updatedAt) VALUES 
(1,'LGBTQ+','People of all sexualities and gender identities are welcome','2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO communities (id,name,description,createdAt,updatedAt) VALUES 
(2,'BLM','Black lives matter organization','2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO communities (id,name,description,createdAt,updatedAt) VALUES 
(3,'Leadership Opportunities','Learn more about being a leader here','2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO communities (id,name,description,createdAt,updatedAt) VALUES 
(4,'Disabled Rights','A place for those with diasbilities to speak up and be heard','2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO communities (id,name,description,createdAt,updatedAt) VALUES 
(5,'Food Shelters','Help everyone have access to food','2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert community statuses
INSERT INTO community_statuses (id,status,createdAt,updatedAt) VALUES (1,'admin', '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_statuses (id,status,createdAt,updatedAt) VALUES (2,'user', '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert community members
-- create admins of communities
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (1, 1, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (2, 2, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (3, 3, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (4, 4, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (5, 5, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
-- create general users of communities
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (2, 1, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (3, 2, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (4, 3, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (5, 4, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_members (userId,communityId,communityStatusId,createdAt,updatedAt) 
VALUES (1, 5, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert community proposals
INSERT INTO community_proposals (id,name,description,communityId,createdAt,updatedAt) 
VALUES (1, 'Pride month', 'We will plan out events that will occur throughout Pride month!', 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposals (id,name,description,communityId,createdAt,updatedAt) 
VALUES (2, 'Black Lives History Month', 'We will plan out events that will occurr throughout Feburary to eduacate others', 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposals (id,name,description,communityId,createdAt,updatedAt) 
VALUES (3, 'Leadership Retreat', 'Learn the basic building blocks of leadership at this camp!', 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposals (id,name,description,communityId,createdAt,updatedAt) 
VALUES (4, 'ASL lessons', 'Learn and teach others sign language', 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposals (id,name,description,communityId,createdAt,updatedAt) 
VALUES (5, 'Food Fundraiser', 'Help raise money so we can feed more mouths than before!', 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert community proposal members
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (1, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (1, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (2, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (2, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (3, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (3, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (4, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (4, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (5, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_proposal_members (communityProposalId,userId,createdAt,updatedAt) 
VALUES (5, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert interest groups
INSERT INTO interest_groups (id,name,createdAt,updatedAt) VALUES (1, 'Support System', '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interest_groups (id,name,createdAt,updatedAt) VALUES (2, 'Activism', '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interest_groups (id,name,createdAt,updatedAt) VALUES (3, 'Self-Improvement', '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interest_groups (id,name,createdAt,updatedAt) VALUES (4, 'Helping Others', '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert interests
INSERT INTO interests (id,name,interestGroupId,createdAt,updatedAt) VALUES 
(1, 'Informational Social Support', 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interests (id,name,interestGroupId,createdAt,updatedAt) VALUES 
(2, 'Social Activism', 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interests (id,name,interestGroupId,createdAt,updatedAt) VALUES 
(3, 'Positive Personality Changes', 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO interests (id,name,interestGroupId,createdAt,updatedAt) VALUES 
(4, 'In-person Help to Others', 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert user interests
INSERT INTO user_interests (interestId,userId,createdAt,updatedAt) VALUES (4, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_interests (interestId,userId,createdAt,updatedAt) VALUES (1, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_interests (interestId,userId,createdAt,updatedAt) VALUES (2, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_interests (interestId,userId,createdAt,updatedAt) VALUES (3, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_interests (interestId,userId,createdAt,updatedAt) VALUES (1, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert community interests
INSERT INTO community_interests (interestId,communityId,createdAt,updatedAt) VALUES (1, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_interests (interestId,communityId,createdAt,updatedAt) VALUES (2, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_interests (interestId,communityId,createdAt,updatedAt) VALUES (3, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_interests (interestId,communityId,createdAt,updatedAt) VALUES (1, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO community_interests (interestId,communityId,createdAt,updatedAt) VALUES (4, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');

-- insert user community rank
-- admin of each community has a score of 500
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(500, 1, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(500, 2, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(500, 3, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(500, 4, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(500, 5, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');
-- users of each community has score < 500
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(10, 1, 2, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(20, 2, 3, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(35, 3, 4, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(5, 4, 5, '2021-03-04 09:22:11','2021-03-04 20:34:13');
INSERT INTO user_community_ranks (score,communityId,userId,createdAt,updatedAt) VALUES 
(90, 5, 1, '2021-03-04 09:22:11','2021-03-04 20:34:13');