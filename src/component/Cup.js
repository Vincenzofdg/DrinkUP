import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

function Cup({title, qtd, drank, setDrank}) {
  const l = 2;

  const BigCup = () => {
    return (
      <View>
        <View style={StyleSheet.compose(bigCup.mask, bigCup.cup)}>
          <Text style={bigCup.remained}>{l}L</Text>
          <Text style={{alignSelf: 'center'}}>Remained</Text>
        </View>

        <View style={StyleSheet.compose(bigCup.mask, bigCup.fill)} />
      </View>
    );
  };

  const SmallCup = () => {
    return (
      <TouchableOpacity onPress={() => setDrank(prev => prev + 1)}>
        <View style={smallCup.cup}>
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
    backgroundColor: '#fff',
    alignSelf: 'center',
    margin: 25,
    zIndex: 1,
  },
  fill: {
    backgroundColor: '#144fc6',
    position: 'absolute',
    top: 240,
    left: 107,
    height: 0,
    zIndex: 2,
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
