import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import HomeScreenStyles from "../../../styles/HomeScreenStyles";

const SectionDataContentItem = (props) => {
    return (
        <View style={HomeScreenStyles.sectionDataContentItem}>
            <Text style={HomeScreenStyles.contentItemData}>{props.itemData}</Text>
            <Text style={HomeScreenStyles.contentItemDescription}>{props.itemDescription}</Text>
        </View>
    )
}

export default SectionDataContentItem