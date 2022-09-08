import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import FeatherI from 'react-native-vector-icons/Feather'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import React from 'react'

const FontAwesome = props => <FontAwesomeI {...props} />
const Feather = props => <FeatherI {...props} />
const Ionicons = props => <IoniconsI {...props} />

export default  {
    FontAwesome,
    Feather,
    Ionicons
}