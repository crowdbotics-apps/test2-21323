import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings135766Navigator from '../features/Settings135766/navigator';
import Settings135751Navigator from '../features/Settings135751/navigator';
import NotificationList135750Navigator from '../features/NotificationList135750/navigator';
import Maps135749Navigator from '../features/Maps135749/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
