import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import {colors} from '../globals/style'



const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor={colors.text2} activeDotColor={colors.text3} nextButton={<Text style={styles.buttonText}>›</Text>} prevButton={<Text style={styles.buttonText}>‹</Text>}>
          <View style={styles.slide}>
            <Image source={require('../../assets/offers_img/hungry-knight.png')} style={styles.image}/>
          </View>

          <View style={styles.slide}>
            <Image source={require('../../assets/offers_img/burger-offer.png')} style={styles.image}/>
          </View>

          <View style={styles.slide}>
            <Image source={require('../../assets/offers_img/global-sale.png')} style={styles.image}/>
          </View>

          <View style={styles.slide}>
            <Image source={require('../../assets/offers_img/biriyani-sale.png')} style={styles.image}/>
          </View>

          <View style={styles.slide}>
            <Image source={require('../../assets/offers_img/traditional-sale.png')} style={styles.image}/>
          </View>
        </Swiper>

      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider:{
    width: '100%',
    height: 200,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  slide:{
    width: '100%',
    height: 200,
    backgroundColor : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  buttonText:{
    color : colors.text1,
    fontSize: 40,
    fontWeight: '200',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
  }
})