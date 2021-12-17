import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setOrigin } from '../slices/navSlice'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full pt-8`}>
            <View style={tw`pl-5`}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: "https://media.designrush.com/inspiration_images/134780/conversions/_1521201654_259_UberLogoDesign-desktop.jpg" }} />
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <GooglePlacesAutocomplete
                        placeholder='Where From? '
                        styles={{
                            container: {
                                flex: 1,
                            },
                            textInput: {
                                fontSize: 18,
                            }
                        }}
                        enablePoweredByContainer={false}
                        minLength={2}
                        //    query={{
                        //        key:"sdfsfsdjfhksdhjfsd",
                        //        language:'en'
                        //    }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                    />
                    <TouchableOpacity onPress={() => {
                        dispatch(setOrigin({
                            location: 37.78825,
                            //    location:details.geometry.location,
                            //    description:data.description
                        }))
                    }}>
                        <Icon
                            style={tw`w-10 bg-white`}
                            name="arrowright" color="black" type="antdesign" />
                    </TouchableOpacity>
                </View>
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
