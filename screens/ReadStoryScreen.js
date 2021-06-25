import * as React from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView } from 'react-native';
import db from '../config';
import {ScrollView} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            search:'',
            allStories:[],
            
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    componentDidMount(){
        this.retrieveStories()
    }

    retrieveStories=async()=>{
        var allStories=[];
        var stories = db.collection("stories")
        .get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                allStories.push(doc.data())
            })
            this.setState({allStories})
        })
    }

    searchFilterFunction=async(text)=>{

    }

    render(){
        return(
            <View>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'STORY HUB',
                        style:{fontWeight:'bold',color:'black',fontSize:30}
                    }}
                />
                <SearchBar
                   placeholder='SEARCH HERE'
                   onChangeText={(text)=>{this.searchFilterFunction(text)}}
                   value={this.state.search}
                   />
                
            </View>
        )
    }
}