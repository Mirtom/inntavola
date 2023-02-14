import React from 'react'
import { View } from 'react-native'
import styles from './style'
import InnText from '../../../../components/InnText'

interface IInfoProps {
  type: 'ingredients' | 'allergens',
  children: React.ReactNode
}

const InfoCard: React.FunctionComponent<IInfoProps> = ({
  type,
  children
}) => {
  return (
    <View style={styles.wrapper}>
        <InnText style={styles.type} size={12} color='#DD1823' strong>{type === 'ingredients' ? 'INGREDIENTI' : 'ALLERGENI'}</InnText>
        {children}
    </View>
  )
}


export default InfoCard
