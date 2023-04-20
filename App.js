import 'react-native-gesture-handler'

import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { MenuScreen } from './Screens/MenuScreen'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Menu">
				<Stack.Screen name="Menu" component={MenuScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
