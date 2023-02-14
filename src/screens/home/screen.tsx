import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { NavigationFunctionComponent, Navigation } from 'react-native-navigation'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import InnInput from '../../components/InnInput'
import ProductCard from '../../components/ProductCard'
import { Normalize } from '../../utils/normalize'
import { IProductCardProps } from '../../types/product'
import { ProductScreenId } from '../product/index';
import { goToScreen } from '../../utils/navigation'
import { PRODUCT_JSON } from '../../constants/mock';
const {
  bottomTabsHeight,
} = Navigation.constantsSync();


const HomeScreen: NavigationFunctionComponent = ({ componentId }) => {

  const [productList,setProductList] = React.useState<IProductCardProps[]>(PRODUCT_JSON)

  const viewProduct = (item) => {
    goToScreen(componentId,ProductScreenId, {item})
  }

  return (
    <Layout>
        <Header logo userActions/>
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <View style={styles.upper}>
            <InnInput onChangeText={(val) => alert(val)}/>
          </View>
          <View style={styles.list}>
            {productList?.map(currentProduct => {
              return <ProductCard {...currentProduct} key={currentProduct.key} onPress={() => viewProduct(currentProduct)}/>
            })}
          </View>
        </ScrollView>
    </Layout>
  )
}
const styles = StyleSheet.create({
  wrapper:{
    paddingHorizontal:Normalize(20),
    paddingTop:Normalize(20),
    marginBottom: bottomTabsHeight / 2,
    flex:1,
  },
  upper: {
    marginBottom:Normalize(24),
  },
  list: {
    flex:1,
  }
})
export default HomeScreen
