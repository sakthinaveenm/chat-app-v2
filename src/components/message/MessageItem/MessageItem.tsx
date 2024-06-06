import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageItem = ({ message }) => {
  return (
    <View style={styles.messageItem}>
      <Text style={styles.username}>{message.username}</Text>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#e1f5fe',
    alignSelf: 'flex-start',
    width : "100%"
  },
  username: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: 2,
  },
});

export default MessageItem;
