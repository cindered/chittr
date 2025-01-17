import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import Style from '../styles/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation, title}) {
   
   const openMenu = () => {
      navigation.openDrawer();
   }
   
   return (
      <View style={Style.header}>
         <View style={{marginRight: 135}}>
            <Icon style={Style.headerIcon} name="menu" size={25} onPress={openMenu}/>
         </View>
         <View>
            <Text style={Style.headerText}>{ title }</Text>
         </View>
         <View></View>
      </View>
   );
}