import React, {useContext} from 'react';
import Context from '../context/Context';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {eng} from '../localizedStrings';

const FinishedModal = ({show, action}) => {
  const {setGlasses, setReset} = useContext(Context);
  const {
    modal: {content, button},
  } = eng;
  const handlePress = () => {
    setGlasses(0);
    setReset(prev => !prev);
    action(!show);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={show}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{content}</Text>
          <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.btnText}>{button}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    marginBottom: 25,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 15,
    width: 150,
    padding: 10,
    elevation: 2,
  },
});

export default FinishedModal;
