import { ScrollView } from 'react-native';
import ProfileCard from './components/ProfileCard';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
return (
<SafeAreaView>
<View style={styles.container}>
  <ScrollView>
  <ProfileCard
name="Ada Lovelace"
role="Mathematician"
imageSource={require ('./assets/resim.jpg')}
/>
<ProfileCard
    name="Alan Turing"
    role="Computer Scientist"
    imageSource={require('./assets/resim1.jpg')}
  />
  <ProfileCard
    name="Grace Hopper"
    role="Rear Admiral / Programmer"
    imageSource={require('./assets/resimm.jpg')}
  />
  </ScrollView>
<Text style={styles.cardContainer}>My Profile App</Text>
</View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
colour: "#f4f0f5ff",

},
cardContainer: {
padding: 50,
}
});