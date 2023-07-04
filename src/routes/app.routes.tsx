import { Platform } from 'react-native'
import { useTheme } from 'native-base'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import ProfileSvg from '@assets/profile.svg'
import UsersSvg from '@assets/users.svg'

import { Profile } from '@screens/Profile'
import { Users } from '@screens/Users'

type AppRoutes = {
    users: undefined
    profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
    const { sizes, colors } = useTheme()

    const iconSize = sizes[6]
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[500],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }
        }}>
            <Screen
              name='users'
              component={Users}
              options={{
                tabBarIcon: ({ color }) => (
                    <UsersSvg fill={color} width={iconSize} height={iconSize} />
                )
              }}
            />

            <Screen
              name='profile'
              component={Profile}
              options={{
                tabBarIcon: ({ color }) => (
                    <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                )
              }}
            />
        </Navigator>
    )
}