import React from 'react';
import { View, Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const About = ({ navigation }) => {
 const appName = 'ToDo App (Lets Try Again)';
 const developerName = 'Your Name';
 const currentDate = new Date().toLocaleDateString();

 const AboutScreen = () => {
 return (
  <MainLayout>
    <View>
      <Text>App Name: {appName}</Text>
      <Text>Developer: {developerName}</Text>
      <Text>Current Date: {currentDate}</Text>
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
