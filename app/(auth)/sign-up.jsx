import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, Image } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '', 
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submit = () => {}

  return ( 
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"></Image>

          <Text className="text-2xl text-white text-semibold mt-10 font-semibold">Sign Up to Aora</Text>

          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({ ...form, username: e})} otherStyles="mt-10"></FormField>
          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e})} otherStyles="mt-7" keyboardType="email-address"></FormField>
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e})} otherStyles="mt-7"></FormField>

          <CustomButton title="Sign In" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting}></CustomButton>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
              <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Sign In</Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp