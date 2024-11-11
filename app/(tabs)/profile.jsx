import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Profile = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handlePostPress = (postTitle) => {
    Alert.alert("Post Selected", `You selected: ${postTitle}`);
  };

  const handleLogout = () => {
    Alert.alert("Logout", "You have logged out"); // Show logout alert
    navigation.navigate('login'); // Navigate to Login screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/236x/45/e7/89/45e7899634a8d7c267db4ebc9edfed69.jpg' }}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Adebskie</Text>
        <Text style={styles.bio}>Never settle for less!</Text>
        
        {/* Followers and Following Section */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>120</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>80</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* User Posts Section */}
      <View style={styles.postsContainer}>
        <Text style={styles.postsTitle}>Profile Page</Text>
        {["Edit Profile", "Buy Premium Pass", "Settings"].map((title, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.postButton} 
            onPress={() => handlePostPress(title)}
          >
            <Text style={styles.postButtonText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#072F49',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#072F49',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#fff',
  },
  postsContainer: {
    padding: 20,
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  postButton: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  postButtonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  logoutButton: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  logoutButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default Profile;
