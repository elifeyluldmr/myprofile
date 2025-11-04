import { TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



export default function ProfileCard({ name, role, imageSource }) {
  function handlePress() {
  Alert.alert(`${name}’in profiline dokundunuz.`);
}
    return (
       <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image source={imageSource} style={styles.profileImage} />  
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
       </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',     
    padding: 16,                 
    borderRadius: 12,            
    alignItems: 'center',        
    marginVertical: 10,     
    
    shadowColor: '#000',
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
    fontWeight: 'bold',          
  },
  role: {
    fontSize: 14,                
    color: '#666',               
  },
});
