import { createBottomTabNavigator } from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import HomeContainer from '../containers/HomeContainer';
import ProfileContainer from '../containers/ProfileContainer';
import colors from '../styles/colors';

const TabBarNavigator = createBottomTabNavigator({
    HomeContainer: { screen: HomeContainer },
    ExploreContainer: { screen: ExploreContainer },
    ProfileContainer: { screen: ProfileContainer },
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5,
        },
        activeTintColor: colors.orange,
    },
});

export default TabBarNavigator;