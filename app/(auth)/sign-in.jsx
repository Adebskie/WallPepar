import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router'; // Import useRouter from expo-router

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the router object from expo-router
  const router = useRouter();

  const submit = () => {
    // You would typically make an API call to validate credentials here.
    // For now, let's assume the sign-in is successful.
    
    setIsSubmitting(true);

    // Simulate a delay (e.g., for API request)
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to the Home screen after successful login
      router.push('/(tabs)/home'); // Use router.push to navigate to Home screen
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <SafeAreaView className="bg-blue-800 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[50px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">
            Log in to WallPepar
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-u_bold text-orange-600">
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
