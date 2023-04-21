import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MenuScreen } from './Screens/MenuScreen'
import { MenuScreenLocalFetch } from './Screens/MenuScreenLocalFetch'
import { PreferencesAsyncStorage } from './Screens/PreferencesAsyncStorage'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Preferences">
				<Stack.Screen name="Menu" component={MenuScreen} />
				<Stack.Screen name="MenuLocal" component={MenuScreenLocalFetch} />
				<Stack.Screen name="Preferences" component={PreferencesAsyncStorage} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
