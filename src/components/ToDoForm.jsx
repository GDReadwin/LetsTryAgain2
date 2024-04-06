// ToDoForm content
import React, { useState } from 'react';

import { View, TextInput, Button, Text } from 'react-native';

export default function ToDoForm({ addTask, styles, tasks }) {
  const [taskText, setTaskText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '' && !tasks.includes(taskText)) {
      addTask(taskText);
      setTaskText('');
      setErrorMessage('');
    } else {
      setErrorMessage('Task already exists');
    }
  };

    return (
      <View style={ styles.form }>
        <TextInput
        style={styles.input}
        placeholder="Add a New Task...."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
        />
        <Button title="Add Task" onPress={() => handleAddTask(taskText)} />
            {errorMessage !== '' && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
      </View>
    );
  }
