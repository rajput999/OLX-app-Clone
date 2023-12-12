import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const ItemByCategory = () => {
    const item = useSelector(state=>state.post);
    const route = useRoute();
    const [itemList,setItemList]= useState([]);
    useEffect(()=>{
        let tempData=item.data;
        let temp = [];
        tempData.map(item=>{
            if(item.category== route.params.category){
                temp.push(item);
            }
        });
        setItemList(temp);
    },[]);
  return (
    <FlatList
      data={itemList}
      renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.item}>
            <Image source={{uri:item.image}} style={styles.itemImage}/>
            <View>
              <Text style={styles.name}>{item.name}</Text> 
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.price}>{'INR. '+ item.price}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      />
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    item:{
      width:'90%',
      height:100,
      backgroundColor:'#fff',
      marginTop:5,
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:20,
    },
    itemImage:{
      width:65,
      height:65,
      marginLeft:10,
    },
    name:{
      fontSize:18,
      fontWeight:'600',
      marginLeft:10,
    },
    desc:{
      fontSize:16,
      marginLeft:10,
    },
    price:{
      fontSize:18, 
      fontWeight:'600',
      marginLeft:10,
      color:'green',
    }
  })

export default ItemByCategory