import React from 'react'
import {Stylesheet, Text, View, ScollView, TouchableOpacity, Modal, Image } from 'react-native'

export const Select = (props) => {
  const [Selected, setSelected] = useState('select category')
  const [visible, setVisible] = useState(false)

  const Items = props.items.map((item,index)=>{
return (
  <TouchableOpacity key={index} onPress={()=>{setSelected(item.value) }} >
    <Text>{item.label}</Text>
  </TouchableOpacity>
)
  })

  return (
    <View>
      <TouchableOpacity>
        <Text>{Selected}</Text>
        <Image
        style={selectedStyles.selectImage}
        source={require('../assets/drop-down-round-button.png')}
        />
      </TouchableOpacity>
    </View>
  )
}