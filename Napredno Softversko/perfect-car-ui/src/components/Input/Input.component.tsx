import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Input.styles';

type InputProps = {
  componentStyle?: Object;
};

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {componentStyle} = props;

  const cStyles = {...styles.input, ...componentStyle};

  return (
    <View>
      <TextInput onChangeText={value => console.log(value)} style={cStyles} />
    </View>
  );
};

export default Input;
