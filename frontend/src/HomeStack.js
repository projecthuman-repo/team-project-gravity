import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/signup/Signup";
import Picture from "./screens/signup/Picture";
import ProfileHeader from "./screens/signup/ProfileHeader";
import Bio from "./screens/signup/Bio";
import Placeholder from "./screens/signup/Placeholder";
import StitchedPlaceholder from "./screens/signup/StitchedPlaceholder";
import Community from "./screens/community/Community";
import CreateProposal from "./screens/community/CreateProposal";
import CreateCommunity from "./screens/community/CreateCommunity";
import ModifyRoles from "./screens/community/ModifyRoles";
import CommunityFiltration from "./screens/community/CommunityFiltration"
import MemberList from './screens/community/MemberList';
import CommunityList from "./screens/community/CommunityList";
import Proposal from "./screens/community/Proposal";
import Profile from "./screens/Profile";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },

    Signup: {
        screen: Signup,
        navigationOptions: {
            headerShown: false,
        }
    },

    Picture: {
        screen: Picture,
        navigationOptions: {
            headerShown: false,
        }
    },

    ProfileHeader: {
        screen: ProfileHeader,
        navigationOptions: {
            headerShown: false,
        }
    },

    Bio: {
        screen: Bio,
        navigationOptions: {
            headerShown: false,
        }
    },
  
    Placeholder: {
        screen: Placeholder
    },

    StitchedPlaceholder: {
        screen: StitchedPlaceholder,
        navigationOptions: {
            headerShown: false,
        }
    },

    Community: {
        screen: Community,
        navigationOptions: {
            headerShown: false,
        }
    },
  
    MemberList: {
        screen: MemberList,
        navigationOptions: {
            headerShown: false,
        }
    },
      
    CommunityList: {
        screen: CommunityList,
        navigationOptions: {
            headerShown: false,
        }
    },

    CreateProposal: {
        screen: CreateProposal,
        navigationOptions: {
            headerShown: false,
        }
    },

    CreateCommunity: {
        screen: CreateCommunity,
        navigationOptions: {
            headerShown: false,
        }
    },

    Proposal: {
        screen: Proposal,
        navigationOptions: {
            headerShown: false,
        }
    },

    ModifyRoles: {
        screen: ModifyRoles,
        navigationOptions: {
            headerShown: false
        }
    },

    CommunityFiltration: {
        screen: CommunityFiltration,
        navigationOptions: {
            headerShown: false
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
