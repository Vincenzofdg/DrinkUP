import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// Components
import Cup from './component/Cup';
import {eng} from './localizedStrings';

function App() {
  const [drank, setDrank] = useState(0);
  const {title, goal, question} = eng;
  const cups = 8;

  useEffect(() => {}, [drank]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{goal}</Text>
      </View>
      <Cup drank={drank} qtd={cups} title={true} />
      <Text style={styles.question}>{question}</Text>
      <View style={styles.cups}>
        {[...Array(cups)].map((_e, i) => (
          <Cup
            key={`cup-${i}`}
            title={false}
            qtd={cups}
            id={i}
            setDrank={setDrank}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3494e4',
    flex: 1,
    flexDirection: 'column',
  },
  info: {
    marginTop: 35,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    lineHeight: 50,
    fontSize: 26,
  },
  subTitle: {
    alignSelf: 'center',
    fontSize: 18,
  },
  question: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 25,
  },
  cups: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
  },
});

export default App;
