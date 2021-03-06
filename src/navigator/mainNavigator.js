import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps197201Navigator from '../features/Maps197201/navigator';
import Additem197200Navigator from '../features/Additem197200/navigator';
import Maps197196Navigator from '../features/Maps197196/navigator';
import UserProfile197192Navigator from '../features/UserProfile197192/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps197201: { screen: Maps197201Navigator },
Additem197200: { screen: Additem197200Navigator },
Maps197196: { screen: Maps197196Navigator },
UserProfile197192: { screen: UserProfile197192Navigator },

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
