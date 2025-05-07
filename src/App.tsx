import React, { useState } from 'react';
import type { JSX, PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DiceOne from '../assets/Images/One.png'
import DiceTwo from '../assets/Images/Two.png'
import DiceThree from '../assets/Images/Three.png'
import DiceFour from '../assets/Images/Four.png'
import DiceFive from '../assets/Images/Five.png'
import DiceSix from '../assets/Images/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style={styles.diceImage}
      source={imageUrl}
      />
    </View>
  )
}





function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  
  const rollDiceonTap = () => {
    let randomNumber = Math.floor(Math.random()*6)+1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2 :
        setDiceImage(DiceTwo)
        break;
      case 3 :
        setDiceImage(DiceThree)
        break;
      case 4 :
        setDiceImage(DiceFour)
        break;
      case 5 :
        setDiceImage(DiceFive)
        break;
      case 6 :
        setDiceImage(DiceSix)
        break;
      
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable 
      onPress={rollDiceonTap}
      >
        <Text style={styles.rollDiceBtnText}>
          roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
