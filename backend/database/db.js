//import Sequelize from 'sequelize';
const Sequelize = require('sequelize');

require('dotenv').config();
const dbConfig = require("./db_config.js");

const Conn = new Sequelize(
    dbConfig.DB, //name of db
    dbConfig.USER, //username
    dbConfig.PASSWORD, //password
    {
        dialect: dbConfig.dialect,
        host: dbConfig.HOST
    }
);

const User = Conn.define('user', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    }
});

const Community = Conn.define('community', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const CommunityStatus = Conn.define('community_status', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.ENUM('admin', 'user'),
        allowNull: false,
        unique: true
    }
})

const CommunityMember = Conn.define('community_member', {
    // userId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // communityId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // communityStatus: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const CommunityProposal = Conn.define('community_proposal', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // communityId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const CommunityProposalMember = Conn.define('community_proposal_member', {
    // communityProposalId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // userId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const Interest = Conn.define('interest', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // interestGroupId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const InterestGroup = Conn.define('interest_group', {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const UserInterest = Conn.define('user_interest', {
    // userId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // interestId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const CommunityInterest = Conn.define('community_interest', {
    // communityId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // interestId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // }
});

const UserCommunityRank = Conn.define('user_community_rank', {
    // userId: {
    //     type: Sequelize.UUID,
    //     allowNull: false
    // },
    // communityId: {
    //     type: Sequelize.UUID,
    //     allowNull: falses
    // },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Relationships

// in CommunityMember, user:community:rank is many:many:one
// need the PK to be userId & communityId
User.belongsToMany(Community, { through : CommunityMember});
Community.belongsToMany(User, { through : CommunityMember});
CommunityStatus.hasMany(CommunityMember, { foreignKey: { allowNull: false }});

// in CommunityProposals, proposal:community is one:many
Community.hasMany(CommunityProposal, { foreignKey: { allowNull: false }});
CommunityProposal.belongsTo(Community, { foreignKey: { allowNull: false }});

// in CommunityProposalMember, user:proposal is many:many
// need the PK to be communityProposalId & userId
CommunityProposal.belongsToMany(User, { through : CommunityProposalMember});
User.belongsToMany(CommunityProposal, { through : CommunityProposalMember});

// in Interests, interest:interestGroup is one:many
InterestGroup.hasMany(Interest, { foreignKey: { allowNull: false }});
Interest.belongsTo(InterestGroup), { foreignKey: { allowNull: false }};

// in UserInterests, user:interests is many:many
// need the PK to be interestId & userId
Interest.belongsToMany(User, { through : UserInterest});
User.belongsToMany(Interest, { through : UserInterest});

// in CommunityInterests, community:interests is many:many
// need the PK to be interestId & communitId
Interest.belongsToMany(Community, { through : CommunityInterest});
Community.belongsToMany(Interest, { through : CommunityInterest});

// in UserCommunityRanks, user:community is many:many
// need the PK to be communityId & userId
Community.belongsToMany(User, { through : UserCommunityRank});
User.belongsToMany(Community, { through : UserCommunityRank});


Conn.sync({force: true})
.then(() => {
    console.log("\n\n\nDatabase is up and running!\n\n\n");
})
.catch((error) => console.log(error));


module.exports= { 
    User:User,
    Conn: Conn,
    Community: Community,
};