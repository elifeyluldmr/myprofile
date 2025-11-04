import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ProfileCard({ name, role, imageSource }) {
  const handlePress = () => {
    Alert.alert("Profil Seçildi", ` ${name}'s profile.`);
  }
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.card}>
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
    </TouchableOpacity>
  );
}

// ✅ return dışında tanımlandı
const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    color: "gray",
  },
});

export default ProfileCard;