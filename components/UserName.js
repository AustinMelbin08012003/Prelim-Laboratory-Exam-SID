import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>HelloWorld we are the SIDELICIOUS' {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name=" Andrion" />
      <Cat name="  Pooool" />
      <Cat name=" Austin" />
    </View>
  );
};

export default Cafe;