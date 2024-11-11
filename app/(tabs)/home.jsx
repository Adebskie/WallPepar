import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleDownload = (title) => {
    Alert.alert(`Download ${title}`);
  };

  const handleWatchAd = (title) => {
    Alert.alert(`Watch ad for ${title}`);
  };

  const images = {
    MOUNTAIN: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    COCONUT: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ICY: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    PINK: 'https://images.pexels.com/photos/3588085/pexels-photo-3588085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    SKY: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    SUNLIGHT: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    STARS: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    LIGHTHOUSE: 'https://images.pexels.com/photos/1535162/pexels-photo-1535162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    CITY: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    BRIDGE: 'https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  const filteredWallpapers = Object.entries(images).filter(([key, _]) =>
    key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WallPePar</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search wallpapers..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="white"
      />
      <ScrollView contentContainerStyle={styles.wallpaperGrid}>
        {filteredWallpapers.map(([key, imageUrl], index) => (
          <View key={index} style={styles.wallpaperItem}>
            <TouchableOpacity onPress={() => openImage(imageUrl)}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>{key}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDownload(key)}
                accessibilityLabel={`Download ${key} wallpaper`}
              >
                <Text style={styles.buttonText}>Download</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleWatchAd(key)}
                accessibilityLabel={`Watch ad for ${key} wallpaper`}
              >
                <Text style={styles.buttonText}>Watch Ad</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal for displaying the selected image */}
      <Modal
        visible={!!selectedImage}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          )}
        </View>
      </Modal>
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
  searchInput: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    color: 'white',
  },
  wallpaperGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wallpaperItem: {
    width: '48%',
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  imageTitle: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 14,
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'black',
  },
  modalImage: {
    width: '100%',
    height: '50%', // Occupy half the screen
    borderRadius: 8,
  },
});

export default Home;
