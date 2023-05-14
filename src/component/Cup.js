import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Cup({title, qtd, drank, setDrank, id}) {
  const blueHeight = 1 - drank * 0.125;

  const l = 2;

  const BigCup = () => {
    return (
      <View style={bigCup.cup}>
        <LinearGradient
          colors={['white', '#3498DB']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={bigCup.mask}
          locations={[0, blueHeight]}>
          <Text style={bigCup.remained}>{l}L</Text>
          <Text style={{alignSelf: 'center'}}>Remained</Text>
        </LinearGradient>
      </View>
    );
  };

  const SmallCup = () => {
    const [clicked, setClicked] = useState(false);
    const press = () => {
      setClicked(true);
      setDrank(prev => prev + 1);
    };

    return (
      <TouchableOpacity onPress={press} disabled={clicked}>
        <View
          style={StyleSheet.compose(
            smallCup.cup,
            clicked && {backgroundColor: '#89CFF0'},
          )}>
          <Text style={smallCup.volume}>{(l / qtd) * 1000}</Text>
          <Text style={{alignSelf: 'center'}}>ml</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return !!title ? BigCup() : SmallCup();
}

const bigCup = StyleSheet.create({
  mask: {
    width: 160,
    height: 240,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderWidth: 3,
    borderColor: '#144fc6',
    borderTopColor: '#fff',
  },
  cup: {
    alignSelf: 'center',
    margin: 25,
  },
  remained: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
});

const smallCup = StyleSheet.create({
  cup: {
    backgroundColor: '#fff',
    margin: 8,
    paddingTop: 18,
    alignSelf: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 3,
    borderColor: '#144fc6',
    width: 60,
    height: 70,
  },
  volume: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default Cup;
