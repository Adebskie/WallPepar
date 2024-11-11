import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Create = () => {
  const [title, setTitle] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleUpload = () => {
    Alert.alert('Upload', `Uploading: ${title}\nImage URI: ${imageUri}`);
    setTitle('');
    setImageUri(null);
  };

  const handleSelectImage = () => {
    setImageUri('https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share your Artwork</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter wallpaper title..."
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <TouchableOpacity style={styles.imageButton} onPress={handleSelectImage}>
        <Text style={styles.imageButtonText}>
          {imageUri ? 'Change Image' : 'Select Image'}
        </Text>
      </TouchableOpacity>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={handleUpload}
        disabled={!imageUri || !title}
      >
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    color: 'white',
    backgroundColor: '#1E3A78',
  },
  imageButton: {
    backgroundColor: 'white', // Changed button color to white
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  imageButtonText: {
    color: 'black', // Changed font color to black
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 16,
    resizeMode: 'cover',
  },
  uploadButton: {
    backgroundColor: 'white', // Changed button color to white
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'black', // Changed font color to black
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Create;
