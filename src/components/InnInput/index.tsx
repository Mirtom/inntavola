import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DEFAULT_ICON_SIZE } from '../../utils/sizes';

interface IInputProps{
    placeholder?: string,
    onChangeText: (x: string) => void,
}


const InnInput: React.FunctionComponent<IInputProps> = ({
    onChangeText,
    ...rest
}) => {

  return (
    <View style={styles.wrapper}>
        <MaterialCommunityIcons name="magnify" size={DEFAULT_ICON_SIZE} color="#6D6A75"/>
        <TextInput onChangeText={onChangeText} {...rest} style={styles.input}/>
    </View>
  )
}


export default InnInput
