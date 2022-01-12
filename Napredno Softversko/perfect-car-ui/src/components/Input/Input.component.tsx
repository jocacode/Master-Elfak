import React from 'react';
import {TextInput, View} from 'react-native';

type InputProps = {
  style?: Object;
};

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {style} = props;
  return (
    <View>
      <TextInput style={style} />
    </View>
  );
};

export default Input;
