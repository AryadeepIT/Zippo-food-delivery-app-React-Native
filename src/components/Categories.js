import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../globals/style'


const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.box}>
        <MaterialCommunityIcons name="rice" size={24} color="black" style={styles.iconb} />
        <Text style={styles.text}>Biriyani</Text>
        </View>

        <View style={styles.box}>
        <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.iconp} />
        <Text style={styles.text}>Pizza</Text>
        </View>

        <View style={styles.box}>
        <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.iconc} />
        <Text style={styles.text}>Chinese</Text>
        </View>

        <View style={styles.box}>
        <MaterialCommunityIcons name="leaf" size={24} color="black" style={styles.iconv} />
        <Text style={styles.text}>Pure Veg</Text>
        </View>

        <View style={styles.box}>
        <FontAwesome5 name="ice-cream" size={24} color="black" style={styles.iconi} />
        <Text style={styles.text}>Ice Cream</Text>
        </View>

        <View style={styles.box}>
        <FontAwesome5 name="hamburger" size={24} color="black" style={styles.iconb} />
        <Text style={styles.text}>Burger</Text>
        </View>

        <View style={styles.box}>
        <MaterialIcons name="cake" size={24} color="black" style={styles.iconc} />
        <Text style={styles.text}>Cake</Text>
        </View>




        


      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.col1,
    width: '90%',
    elevation: 10,
    borderRadius: 10,
  },
  head:{
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  box:{
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  text:{
    marginLeft: 5,
  },
  iconv:{
    color: '#2d997c',
  },
  iconb:{
    color: '#996655',
  },
  iconp:{
    color: '#ff4c7c',
  },
  iconc:{
    color: '#ff916f',
  },
  iconi:{
    color: '#0ba9f0',
  }
})