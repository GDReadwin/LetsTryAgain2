import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {

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

  const addTask = (taskText) => {
    if (tasks.includes(taskText)) {
      return false;
    } else {
      setTasks([...tasks, taskText]);
      return true;
    }
  }; ///"..." is called spread
  
  //tasks.push(task);
  //setTasks(tasks); is a second option

  //setTasks((prev)) => [...prev,task]); is a third option

  //setTasks(tasks.concat(task)); is a fourth option

  return (
    <MainLayout>
      <SafeAreaView>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} styles={styles} />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
