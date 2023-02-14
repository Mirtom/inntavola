import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import InnText from '../InnText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DEFAULT_ICON_SIZE } from '../../utils/sizes';
import { IProductCardProps } from '../../types/product';
import { Normalize } from '../../utils/normalize';


const ProductCard: React.FunctionComponent<IProductCardProps> = ({
    title,
    shortDescription,
    quantity,
    imageUri,
    onPress,
    ...rest
}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={imageUri} style={styles.image} />
      </View>
      <View style={styles.infoWrapper}>
        <View>
          <InnText strong>{title}</InnText>
          <InnText numberOfLines={2} size={Normalize(12)} color='#6D6A75' style={styles.descriptionText}>{shortDescription}</InnText>
        </View>
        <View style={styles.infoBottom}>
          <InnText size={Normalize(12)} color='#6D6A75' strong>{`${quantity} gr`}</InnText>
          <MaterialCommunityIcons name="plus-circle" size={DEFAULT_ICON_SIZE} color="#DD1823" />
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default ProductCard
