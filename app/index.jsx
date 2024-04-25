import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">
                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"></Image>

                    <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode="contain"></Image>

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with{' '}<Text className="text-secondary-200">Aora</Text></Text>
                        <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain"></Image>
                    </View>

                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>

                    <CustomButton title="Continue with Email" handlePress={() => {}} containerStyle="w-full mt-7"></CustomButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}