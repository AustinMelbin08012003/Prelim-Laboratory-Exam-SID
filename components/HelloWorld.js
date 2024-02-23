import React from 'react';
import { View, Text, Image, TextInput } from 'react-native'; // Added TextInput import for input field

const HelloWorld = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    
      <Image
        source={{ uri: 'https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg' }}
        style={{ width: 200, height: 300, marginTop: 200 }}
        resizeMode="contain"
      />
      {/* TextInput equivalent */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginRight: 10 }}>
          {/* Checkbox */}
          
          <Text>Hello</Text>
        </View>
        {/* Text input */}
       
      </View>
    </View>
  );
};

export default HelloWorld;