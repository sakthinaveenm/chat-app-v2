import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex : 1 }}>
   <Stack>
    <Stack.Screen name='chat' options={{ headerShown : false }}  />
   </Stack>
   </SafeAreaView>
  )
}

export default RootLayout