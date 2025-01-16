import { FlatList, StyleSheet, Text, View } from 'react-native'
import { PRODUCTS } from '../../../assets/products'
import { ProductListItem } from "../../components/product-list-item"
import { ListHeader } from '../../components/list-header';
import Auth from '../auth';

const Home = () => {
  return (

    // <Auth />

    <View>
      <FlatList 
        data={PRODUCTS} 
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={styles.flatList}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
  flatList: {
    paddingHorizontal: 20,
    paddingVertical: 5
  }
})
