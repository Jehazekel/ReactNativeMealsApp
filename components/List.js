import { StyleSheet, Text, View } from "react-native";



export default function List({ data }) {

  return data.map((dataPoint) => {
    return (
      <View key={dataPoint} style={styles.listItem} >
        <Text key={dataPoint} style={styles.itemText} > {dataPoint} </Text>
      </View>
    );
  });
}


const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
    alignItems: 'center',
    
    // width : '100%'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
})