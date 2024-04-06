// ToDoList.java

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default function ToDoList ({ tasks }) {

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 14,
    },
  });

return (
    <View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}
