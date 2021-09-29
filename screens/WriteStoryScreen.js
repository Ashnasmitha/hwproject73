import * as React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';

import * as firebase from 'firebase';
import db from '../config';


export default class WriteStoryScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            author:'',
            title:'',
            story:''
        }
    }

    submitStory= async()=>{

        db.collection("stories").add({
            'author' : this.state.author,
            'title' : this.state.title,
            'story' : this.state.story
          })

        this.setState({
            author : '',
            title : '',
            story : ''
        })
        ToastAndroid.show("YOUR STORY IS SUBMITTED",ToastAndroid.SHORT);
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}
            behaviour='padding' enabled>
            <View>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'STORY HUB',
                        style:{fontWeight:'bold',color:'black',fontSize:30}
                    }}
                />

                <TextInput 
                onChangeText={(text)=>{
                    this.setState({
                        title:text
                    })
                }}
                style={styles.inputBox}
                placeholder='Story Title'
                value={this.state.title}
                />
                <TextInput 
                onChangeText={(text)=>{
                    this.setState({
                        author:text
                    })
                }}
                style={styles.inputBox2}
                placeholder='Author'
                value={this.state.author}
                />
                <TextInput 
                onChangeText={(text)=>{
                    this.setState({
                        story:text
                    })
                }}
                style={styles.inputBox3}
                placeholder='Write Your Story'
                value={this.state.story}
                multiline={true}
                /> 

                <TouchableOpacity 
                style={styles.button}
                onPress={this.submitStory}
                >
                  <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        backgroundColor:'pink',
        width:100,
        alignSelf:'center',
        marginTop:30
    },
    inputBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    inputBox2: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    inputBox3: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 150,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    text:{
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        color:'black',
    }
})