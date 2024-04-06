import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const About = ({ navigation }) => {
 const appName = 'ToDo App (Lets Try Again)';
 const developerName = 'Your Name';
 const currentDate = new Date().toDateString();

 const AboutScreen = () => {
 return (
  <MainLayout>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 24, marginBottom: 10 }}>{appName}</Text>
    <Text style={{ fontSize: 18, marginBottom: 5 }}>Made by {developerName}!</Text>
    <Text style={{ fontSize: 16 }}>Today is {currentDate}</Text>
    <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Home')} 
    />
  </View>
</MainLayout>
 );
};

  return <AboutScreen />;
};

export default About;
