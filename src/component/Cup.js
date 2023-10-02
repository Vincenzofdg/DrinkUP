import React, {useState, useContext, useEffect} from 'react';
import Context from '../context/Context';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {eng} from '../localizedStrings';

function Cup({title, drank, setDrank}) {
  const {
    rule: {total, times},
    reset,
  } = useContext(Context);

  const BigCup = () => {
    const porcent = drank * parseFloat(100 / times);

    return (
      <View style={bigCup.cup}>
        <View
          style={{
            height: `${100 - porcent}%`,
            justifyContent: 'center',
          }}>
          <Text style={bigCup.remained}>
            {(total - (total / times) * drank).toFixed(1)}L
          </Text>
        </View>

        <View
          style={{
            height: `${porcent}%`,
            backgroundColor: '#3498DB',
            justifyContent: 'center',
          }}>
          <Text style={bigCup.remained}>
            {(drank * (total / times)).toFixed(1)} L
          </Text>
        </View>
      </View>
    );
  };

  const SmallCup = () => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => setClicked(false), [reset]);

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
          <Text style={smallCup.volume}>{(total / times) * 1000}</Text>
          <Text style={{alignSelf: 'center'}}>{eng.measure}</Text>
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
