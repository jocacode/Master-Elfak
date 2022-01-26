import {StyleSheet} from 'react-native';
import styles from '../../styles';

export default StyleSheet.create({
  input: {
    ...styles.flex('column', 'flex-start', 'center'),
    ...styles.font(20, 24, '400'),
    borderWidth: 1,
    borderColor: '#adadad',
    borderRadius: 4,
    paddingLeft: 12,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
