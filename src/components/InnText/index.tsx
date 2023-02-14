import React from 'react'
import { Text, ViewStyle, StyleSheet} from 'react-native'
import styles from './style'
import { Normalize } from '../../utils/normalize'

interface IInnTextProps {
    children: string,
    color?: string,
    size?: number,
    style?: ViewStyle | ViewStyle[],
    numberOfLines?: number,
    strong?: boolean
}


const InnText: React.FunctionComponent<IInnTextProps> = ({
    children,
    color= "#37323E",
    size=Normalize(18),
    numberOfLines = undefined,
    style,
    strong
}) => {

  const dynamicStyle = {
    color,
    fontSize:size,
    fontFamily:strong ? 'Quicksand-Medium' : 'Quicksand-Regular'
  }

  return (
    <Text style={StyleSheet.flatten([styles.textStyle, dynamicStyle, style])} numberOfLines={numberOfLines}>{children}</Text>
  )
}


export default InnText
