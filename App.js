import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';
export default function App() {
  console.log("Profile App Loaded");
return (
<SafeAreaView style={{flex : 1 }} >
<ScrollView contentContainerStyle ={styles.container}>
  <ProfileCard
    name="Resim1"
    role="manzara"
    imageSource={require('./assets/resim.jpg')}
  />
  <ProfileCard
    name="Resim2"
    role="manzara"
    imageSource={require('./assets/resim1.jpg')}
  />
  <ProfileCard
    name="Resim3"
    role="manzara"
    imageSource={require('./assets/resimm.jpg')}
  />
<Text style={styles.cardContainer}>My Profile App</Text>
</ScrollView> 
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
color: "#f0f2f4ff",

 
},
cardContainer: {
  padding: 20,
} 
});