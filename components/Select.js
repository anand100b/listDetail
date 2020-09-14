import React from 'react'
import {Stylesheet, Text, View, ScollView, TouchableOpacity, Modal, Image } from 'react-native'

export const Select = (props) => {
  const [Selected, setSelected] = useState('select category')
  const [visible, setVisible] = useState(false)

  const Items = props.items.map((item,index)=>{
return (
  <TouchableOpacity
  style={selectStyles.selectItem} 
   key={index} onPress={()=>{setSelected(item.value) 
    setVisible(false)
   }} >
    <Text>{item.label}</Text>
  </TouchableOpacity>
)
  })

  return (
    <View style={selectStyles.selectView}>
      <TouchableOpacity onPress={setVisible(true)}>
        <Text>{Selected}</Text>
        <Image
        style={selectedStyles.selectImage}
        source={require('../assets/drop-down-round-button.png')}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible = {visible}
        transparent ={true}
      >
        <View style={selectStyles.modalView}>
          <ScrollView>
            {Items}
          </ScrollView>
        </View>
      </Modal>
    </View>
  )
}

const selectStyles = StyleSheet.create({
  selectView: {
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  selectImage: {
    width: 15,
    height: 15,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  selectItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  modalView: {
    marginTop: 100,
  },
})