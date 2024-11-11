import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Notifications = () => {
  // Sample notifications data
  const notifications = [
    { id: '1', title: 'New Message', description: 'Your subscription for the premium pass has been expired!' },
    { id: '2', title: 'Update Available', description: 'A new version of the app is available.' },
    { id: '3', title: 'Promo', description: 'Premuim pass is on a 50% discount, buy now to get rid of annoying ads' },
    { id: '4', title: 'New Wallpapers', description: 'Check out the new wallpapers from our latest artists.' },
    { id: '5', title: 'Become an Artist', description: 'Post your artworks and become an artist, just press the create button to start your dreams of becoming an Artist.' },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#072F49',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Notifications;
