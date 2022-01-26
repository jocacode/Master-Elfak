import {TextStyle} from 'react-native';

type FontSize = Pick<TextStyle, 'fontSize'>['fontSize'];
type LineHeight = Pick<TextStyle, 'lineHeight'>['lineHeight'];
type FontWeight = Pick<TextStyle, 'fontWeight'>['fontWeight'];

function font(
  fontSize: FontSize,
  lineHeight: LineHeight,
  fontWeight: FontWeight,
) {
  return {fontSize, lineHeight, fontWeight} as TextStyle;
}

export default {
  font,
};
