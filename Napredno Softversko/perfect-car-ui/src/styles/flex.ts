import {FlexStyle} from 'react-native';

type FlexDirection = Pick<FlexStyle, 'flexDirection'>['flexDirection'];
type FlexJustification = Pick<FlexStyle, 'justifyContent'>['justifyContent'];
type FlexAlignment = Pick<FlexStyle, 'alignItems'>['alignItems'];

function flex(
  flexDirection: FlexDirection = 'row',
  justifyContent: FlexJustification = 'flex-start',
  alignItems: FlexAlignment = 'stretch',
) {
  return {flexDirection, justifyContent, alignItems} as FlexStyle;
}

export default {
  flex,
};
