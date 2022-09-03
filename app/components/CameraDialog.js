import React,{Component} from "react";
import {View,Image,Modal,TouchableOpacity, Button, Text} from 'react-native'

class CameraDialog extends Component{

    static defaultProps = {
        isOpen: false
    }

    state = {
        currentImage: 'https://th.bing.com/th/id/R.92529682cae34e5de0bbe28cad2d5f82?rik=usfgAOWA%2b8YDpw&riu=http%3a%2f%2fmetropolitanafm.uol.com.br%2fwp-content%2fuploads%2f2016%2f02%2f240855-1000-14460854403.png.jpeg&ehk=hrdXntDXyxtifLhm%2bP351XqG5XzMxVcFRdtsCW5iLDo%3d&risl=&pid=ImgRaw&r=0'
    }
    render(){
        const {props, state} = this;
        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
            >

                <View>
                    <Image source={{uri: state.currentImage}}/>
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        title="Salvar"
                        onPress={this.save}
                        color='#0062ac'
                    />
                     <Button
                        title="Bater"
                        onPress={this.shot}
                        color='#0062ac'
                    />
                    <Button
                        title="Colar"
                        onPress={this.getImageFromClipboard}
                        color='#0062ac'
                    />
                
                </View>
            </Modal>// Essa modal ela é um componente que aparece dependendo da propriedade visible, então temos que passar se é true ou false.

        )
    }
}
export default CameraDialog