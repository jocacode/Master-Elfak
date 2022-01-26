import {FlexStyle} from 'react-native';

type Position = Pick<FlexStyle, 'top' | 'bottom' | 'left' | 'right'>;

function position(pos: 'absolute' | 'relative', args?: Position): FlexStyle {
  return !args
    ? ({position: pos, top: 0, bottom: 0, left: 0, right: 0} as FlexStyle)
    : ({
        position: pos,
        ...args,
      } as FlexStyle);
}

function absolute(args?: Position) {
  return position('absolute', args);
}

function relative(args: Position) {
  return position('relative', args);
}

export default {
  position,
  absolute,
  relative,
};
