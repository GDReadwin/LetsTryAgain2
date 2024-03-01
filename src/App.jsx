// App.java

import React, { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends React.Component {
  render() {
    const isDarkMode = useColorScheme() === 'dark';

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);

    const backgroundStyle = {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    };

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ToDoList tasks={tasks} />
        <ToDoForm />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // Your existing styles remain unchanged
});

export default App;