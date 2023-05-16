import React, {useState, useTransition} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

function Cup({title, qtd, drank, setDrank, id}) {
  const l = 2;

  const BigCup = () => {
    const porcent = drank * parseFloat(100 / qtd);

    return (
      <View style={bigCup.cup}>
        <View
          style={{
            height: `${100 - porcent}%`,
            justifyContent: 'center',
          }}>
          <Text style={bigCup.remained}>
            {(l - (l / qtd) * drank).toFixed(1)}L
          </Text>
        </View>

        <View
          style={{
            height: `${porcent}%`,
            backgroundColor: '#3498DB',
            justifyContent: 'center',
          }}>
          <Text style={bigCup.remained}>
            {(drank * (l / qtd)).toFixed(1)} L
          </Text>
        </View>
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
  cup: {
    backgroundColor: '#fff',
    borderColor: '#144fc6',
    borderTopColor: '#fff',
    borderWidth: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignSelf: 'center',
    overflow: 'hidden',
    width: 160,
    height: 240,
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
