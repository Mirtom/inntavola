import React from 'react'
import { StyleSheet } from 'react-native';
import { Normalize } from '../../../../utils/normalize';


export default StyleSheet.create({
    wrapper:{
        backgroundColor:'white',
        padding:Normalize(20),
        borderRadius:Normalize(16),
        marginBottom:Normalize(12)
    },
    type: {
        marginBottom:Normalize(8)
    }
})