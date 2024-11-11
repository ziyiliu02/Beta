import React from 'react'
import { Tabs } from 'expo-router'
import Colors from "@/constants/Colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        padding: 0
      },
      tabBarActiveTintColor: Colors.primaryColorBlack,
      tabBarInactiveTintColor: Colors.secondaryColorGrey
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Theatre",
          tabBarIcon:({color}) => (<FontAwesome name='film' size={28} color={color}/>)
        }}
      />
      <Tabs.Screen
        name="studio"
        options={{
          title: "Studio",
          tabBarIcon:({color}) => (<MaterialCommunityIcons name='palette-outline' size={28} color={color}/>)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon:({color}) => (<MaterialCommunityIcons name='face-man' size={28} color={color}/>)
        }}
      />
    </Tabs>
  )
}

export default TabLayout