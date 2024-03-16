import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {

    const styles = StyleSheet.create({
      form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
      errorMessage: {
        color: 'red',
        marginTop: 5,
      },
    });

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

const addTask = ( taskText ) => {
    setTasks([...tasks, taskText]); ///"..." is called spread
  
  //tasks.push(task);
  //setTasks(tasks); is a second option

  //setTasks((prev)) => [...prev,task]); is a third option

  //setTasks(tasks.concat(task)); is a fourth option
};


  return (
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} styles={styles} tasks={tasks} />
      </SafeAreaView>
    );
};


export default App;