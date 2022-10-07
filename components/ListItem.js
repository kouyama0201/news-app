import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ListItem = ({ imageUrl, title, author }) => {
  return (
    <View style={ styles.itemContainer }>
      <View style={ styles.leftContainer }>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={ styles.rightContainer }>
        <Text style={ styles.text } numberOfLines={3}>
          {title}
        </Text>
        <Text style={ styles.subText }>{ author }</Text>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    color: 'gray',
    fontSize: 12,
  },
})