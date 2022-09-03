import React,{Component} from "react";
import {View,Image,FlatList,TouchableHighlight} from 'react-native'

class PictureList extends Component{

    static defaultProps = {
        // list que receberá um array 
        list: [],
        onClick: () => {}
    }
    
    render(){

        const {props} = this;
        // extraídor de chave, que nos permite identificar cada um dos nossos items como único
        const keyExtractor = item => item.id ;
        return(
            // para deixa-lo na linha inteira, usamos o flex 1.
            <View style={{flex: 1}}>
                // vamos montar a lista
                <FlatList
                    numColumns={3}
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={({item}) => <PictureListItem onClick={props.onClick} item={item} />}
                />
            </View>
        )
    }
}

// item list, receberá as propriedades
function PictureListItem(props){

    // passar o item que queremos receber do props
    const {item} = props;
    return(
        // cada item será uma imagem, passamos o o TouchHeigthLight e o elemento onPress, pois a imagem será clicavél
        <TouchableHighlight onPress={() => {props.OnClick(item)}}> // Dentro do OnPres passamos uma função que irá executar o Onclick e passamos o item.
            <Image
                source={{uri: item.url}}
                style={{
                    width: 80, height: 80
                }}
            />
        </TouchableHighlight>
    )
}

export default PictureList