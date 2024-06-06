import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MessageItem from '@/src/components/message/MessageItem/MessageItem'

const _layout = () => {
  return (
    <FlatList 
      data={[""]}
      renderItem={()=><MessageItem message={{ username : "sakthi" , text : "hello" }} />}
    />
  )
}

export default _layout