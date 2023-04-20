import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MenuScreen } from './Screens/MenuScreen'
import { MenuScreenLocalFetch } from './Screens/MenuScreenLocalFetch'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MenuLocal">
				<Stack.Screen name="Menu" component={MenuScreen} />
				<Stack.Screen name="MenuLocal" component={MenuScreenLocalFetch} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
