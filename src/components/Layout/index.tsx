import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

interface ILayoutProps {
    children: React.ReactNode
}


const Layout: React.FunctionComponent<ILayoutProps> = ({
    children
}) => {

  return (
    <View style={styles.wrapper}>
        {children}
    </View>
  )
}


export default Layout
