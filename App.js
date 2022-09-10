import React, { Component } from 'react';
import {  View, Button, StyleSheet} from 'react-native';
import PictureList from './app/components/PictureList';

class App extends Component {

  state = {
    pictureList: [
      { id: '1',url:'https://th.bing.com/th/id/R.92529682cae34e5de0bbe28cad2d5f82?rik=usfgAOWA%2b8YDpw&riu=http%3a%2f%2fmetropolitanafm.uol.com.br%2fwp-content%2fuploads%2f2016%2f02%2f240855-1000-14460854403.png.jpeg&ehk=hrdXntDXyxtifLhm%2bP351XqG5XzMxVcFRdtsCW5iLDo%3d&risl=&pid=ImgRaw&r=0'},
      {id: '2',url:'https://th.bing.com/th/id/R.92529682cae34e5de0bbe28cad2d5f82?rik=usfgAOWA%2b8YDpw&riu=http%3a%2f%2fmetropolitanafm.uol.com.br%2fwp-content%2fuploads%2f2016%2f02%2f240855-1000-14460854403.png.jpeg&ehk=hrdXntDXyxtifLhm%2bP351XqG5XzMxVcFRdtsCW5iLDo%3d&risl=&pid=ImgRaw&r=0'},
      {id: '3',url:'https://th.bing.com/th/id/R.92529682cae34e5de0bbe28cad2d5f82?rik=usfgAOWA%2b8YDpw&riu=http%3a%2f%2fmetropolitanafm.uol.com.br%2fwp-content%2fuploads%2f2016%2f02%2f240855-1000-14460854403.png.jpeg&ehk=hrdXntDXyxtifLhm%2bP351XqG5XzMxVcFRdtsCW5iLDo%3d&risl=&pid=ImgRaw&r=0'},
      {id: '4',url:'https://th.bing.com/th/id/R.92529682cae34e5de0bbe28cad2d5f82?rik=usfgAOWA%2b8YDpw&riu=http%3a%2f%2fmetropolitanafm.uol.com.br%2fwp-content%2fuploads%2f2016%2f02%2f240855-1000-14460854403.png.jpeg&ehk=hrdXntDXyxtifLhm%2bP351XqG5XzMxVcFRdtsCW5iLDo%3d&risl=&pid=ImgRaw&r=0'}
    ],
    isModalOpen: false
  }

  onPictureSelect = (item) =>{

  }

  openModal = () =>{

  }

  render(){
    const {state} = this
    return (
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect}/>
        <View  style={{padding:15,backgroundColor: '#999', width: '100%'}}>
          <Button
            // no onPress chamaremos uma função, openModal
            onPress={this.openModal}
            title="Nova Foto"// titulo
            color="#0062ac" // cor do botão
          />
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  footer:{
    padding:15,
    backgroundColor: '#999',
    width:'100%',
    textAlign:'center'
  }
})

export default App