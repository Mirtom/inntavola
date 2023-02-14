import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { NavigationFunctionComponent } from 'react-native-navigation'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { Normalize } from '../../utils/normalize'
import { IProductCardProps } from '../../types/product'
import InnText from '../../components/InnText'
import InfoCard from './components/InfoCard'

interface IProductScreenProps {
    item: IProductCardProps
}

const ProductScreen: NavigationFunctionComponent<IProductScreenProps> = ({ componentId, item }) => {

  const HeaderChildren = () => <InnText color='#DD1823' size={12} strong>{(`cucina | ${item.category}`).toUpperCase()}</InnText>

  return (
    <Layout>
        <Header componentId={componentId} goBack children={<HeaderChildren />}/>
        <Image source={item.imageUri} style={styles.image} />
        <View style={styles.upperWrapper}>
            <InnText size={Normalize(28)} strong style={styles.productTitle}>{item.title}</InnText>
            <InnText size={Normalize(16)}>{item.fullDescription}</InnText>
        </View>
        <View style={styles.bottomWrapper}>
            <InfoCard type='ingredients'>
                <InnText size={Normalize(16)}>Carne avicola (pollo 58%). Pangrattato. Misto d'uovo. Farina di frumento. Olio di semi di girasole. Sale.</InnText>
            </InfoCard>
            <InfoCard type='allergens'>
                <InnText size={Normalize(16)}>Contiene: cereali contenenti glutine, uova e prodotti a base di uova.</InnText>
            </InfoCard>
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  image:{ //TIP: Qui vedo che da layout ci sta un'immagine fullsize che però non riesco a scaricare
    width:'100%',
    height:Normalize(220),
    borderBottomLeftRadius: Normalize(25),
    borderBottomRightRadius: Normalize(25)
  },
  upperWrapper: {
    paddingHorizontal:Normalize(40),
    paddingVertical:Normalize(32)
  },
  productTitle: {
    marginBottom:Normalize(12)
  },
  bottomWrapper: {
    paddingHorizontal:Normalize(20)
  }
})
export default ProductScreen
