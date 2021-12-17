import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { SafeAreaView } from 'react-native-web'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { setDestination } from '../slices/navSlice'
import NavFavourites from './NavFavourites'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation=useNavigation();
    return (
        <View style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
             Good Morning, Nishant
            </Text>
       <View style={tw`border-t border-gray-200 flex-shrink`}>
           <View style={{ flexDirection: "row", alignItems: "center" ,paddingTop:20}}>
               <GooglePlacesAutocomplete
               placeholder='Where to?'
               fetchDetails={true}
               styles={toInputBoxStyles}
               nearbyPlacesAPI='GooglePlacesSearch'
               debounce={400}
               />
               <TouchableOpacity onPress={() => {
                        dispatch(setDestination({
                            location: 57.78825,
                            //    location:details.geometry.location,
                            //    description:data.description
                        }))
                        navigation.navigate('RideOptionsCard')
                    }}>
                        <Icon
                            style={tw`w-10 bg-white`}
                            name="arrowright" color="black" type="antdesign" />
                    </TouchableOpacity>
           </View>
        <NavFavourites/>
       </View>
       <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
           <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
           onPress={()=>navigation.navigate('RideOptionsCard')}
           >
               <Icon name="car" type="font-awesome" color="white" size={16}/>
               <Text style={tw`text-white text-center`}>
                   Rides
               </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('RideOptionsCard')} style={tw`flex border flex-row justify-between w-24 px-4 py-3 rounded-full`}>
               <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
               <Text style={tw`text-black text-center`}>
                   Eats
               </Text>
           </TouchableOpacity>
       </View>
        </View>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    textInput:{
        backgroundColor:'#DDDDDF',
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }
})
