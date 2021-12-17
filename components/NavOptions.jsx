import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data=[
    {
        id:'123',
        title:'Get a ride',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_e7CX4SULp357FxyShR1qU-fRGAslQnmqg&usqp=CAU',
        screen:'MapScreen',
    },
    {
        id:'456',
        title:'Order Food',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjkHZbLIzsw2_PDyPMq5t4ZsnnEOJb8RV13Bv3I88gvnCOwCblUnK6N-1lzEGWcWPpT4&usqp=CAU',
        screen:'EatsScreen',
    },
]
const NavOptions = () => {
    const navigation =useNavigation();
    const origin= useSelector(selectOrigin)
    console.log(origin)
    return (
       <FlatList
       data={data}
       horizontal
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>(
           <TouchableOpacity 
           onPress={()=>navigation.navigate(item.screen)}
           style={tw`p-4 pl-3 pb-6 pt-3 bg-gray-200 m-2 w-30`}
           disabled={!origin}
           >

               <View style={tw`${!origin && "opacity-50"}`}>
                   <Image 
                   style={{width:120,height:120,resizeMode:'contain'}}
                   source={{uri:item.image}}
                   />
                   <Text>{item.title}</Text>
                   <Icon 
                   style={tw`p-2 bg-black mt-4 rounded-full w-10`}
                   name="arrowright" color="white" type="antdesign"/>
               </View>
           </TouchableOpacity>
       )}
       />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
