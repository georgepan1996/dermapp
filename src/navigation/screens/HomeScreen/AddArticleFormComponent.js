import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  SafeAreaView,
} from 'react-native';

// import { db, doc, setDoc, addArticle } from '../../../firebase/config';
import { db, doc, setDoc } from '../../../firebase/config';

const AddArticleFormComponent = (props) => {
  const [title, onChangeTitle] = React.useState('');
  const [content, onChangeContent] = React.useState('');
  const [image, onChangeImage] = React.useState(
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/skincare-1588698347.png?crop=1.00xw:0.752xh;0,0.175xh&resize=1200:*'
  );

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>New Article</Text>
        <SafeAreaView>
          <Text style={styles.modalText}>Title</Text>
          <TextInput
            onChangeText={onChangeTitle}
            value={title}
            // style={styles.modalText}
            placeholder='Title'
          />
          <Text style={styles.modalText}>Content</Text>
          <TextInput
            onChangeText={onChangeContent}
            value={content}
            // style={styles.modalText}
            placeholder='Title'
          />

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              props.modaler();
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              props.addArticleToParent(title, content, image, false),
                console.log('form');
              props.modaler();
            }}
          >
            <Text style={styles.textStyle}>Add Post</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddArticleFormComponent;
