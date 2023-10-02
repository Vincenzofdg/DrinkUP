import React, {useEffect, useState, useContext} from 'react';
import Context from './context/Context';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// Components
import Cup from './component/Cup';
import Finished from './component/FinishedModal';
import {eng} from './localizedStrings';

function Display() {
  const {
    rule: {times, total},
    glasses,
    setGlasses,
  } = useContext(Context);

  const [modal, setModal] = useState(false);
  const {title, goal, question} = eng;

  useEffect(() => {
    if (glasses >= times) setModal(true);
  }, [glasses]);

  return (
    <SafeAreaView style={styles.container}>
      <Finished show={modal} action={setModal} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{goal(total)}</Text>
      </View>
      <Cup drank={glasses} title={true} />
      <Text style={styles.question}>{question}</Text>
      <View style={styles.cups}>
        {[...Array(times)].map((_e, i) => (
          <Cup key={`cup-${i}`} title={false} setDrank={setGlasses} />
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

export default Display;
