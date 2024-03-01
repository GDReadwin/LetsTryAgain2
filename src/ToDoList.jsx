// ToDoList.java

import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const ToDoList = ({ tasks }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: isDarkMode ? '#000' : '#fff' }}
    >
      {tasks.map((task, index) => (
        <Text key={index} style={[styles.taskItem, styles.incomplete]}>
          {task}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  incomplete: {
    // add styling for incomplete tasks here
    color: '#000', // for example, setting text color to black for incomplete tasks
  },
});

export default ToDoList;