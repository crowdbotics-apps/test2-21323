import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile135807Navigator from '../features/UserProfile135807/navigator';
import Maps135788Navigator from '../features/Maps135788/navigator';
import Settings135766Navigator from '../features/Settings135766/navigator';
import Settings135751Navigator from '../features/Settings135751/navigator';
import NotificationList135750Navigator from '../features/NotificationList135750/navigator';
import Maps135749Navigator from '../features/Maps135749/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile135807: { screen: UserProfile135807Navigator },
Maps135788: { screen: Maps135788Navigator },
Settings135766: { screen: Settings135766Navigator },
Settings135751: { screen: Settings135751Navigator },
NotificationList135750: { screen: NotificationList135750Navigator },
Maps135749: { screen: Maps135749Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
