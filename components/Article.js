import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const Article = ({articles}) => {

    const handleUrl =  () => {
         WebBrowser.openBrowserAsync(articles.url);
      };
  return (
    <View style={styles.container}>
    {articles.image ? (
        <Image style={styles.image} source={{
        uri:articles.image 
    }} /> 
    ) : (
        <Image style={styles.image} source={{uri:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="}} />
    )}
   
    <View style={styles.wrapper}>
    <Text style={styles.title}>{articles.title}</Text> 
      <Text style={styles.description}>{articles.description}</Text>
     <TouchableOpacity onPress={handleUrl}><Text style={styles.seemore}>see more..</Text></TouchableOpacity>
       <View style={styles.newsinfo}>
        <Text style={styles.heading}>By: <Text style={styles.author}>{articles.author}</Text></Text>
        <Text style={styles.date}>Published on: {articles.published_at.slice(0, 10)}</Text>
    </View>
    <Text style={styles.source}>Source : {articles.source.slice(0,12)}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
        width:"96%",
        alignSelf:"center",
        borderRadius:20,
        shadowOpacity:0.5,
        shadowColor:"red",
        shadowOffset:{
            height:5,
            width:5
        },
        backgroundColor:"#f5f1ed",
        marginTop:20
   },
   wrapper:{
    padding:10
   },
   image:{
    height:200,
    width:"100%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    resizeMode:'contain'
   },
   title:{
    fontSize:16,
    fontWeight:"800",
    padding:5,
    color:"#20262E"
   },
   description:{
    fontSize:15,
    fontWeight:"400",
    lineHeight:25,
    width:"100%",
    padding:5
   },
   newsinfo:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:5,
    alignItems:"flex-start"

   },
   heading:{
    fontSize:14,
    fontWeight:"400",
    width:"40%",
    textAlign:"left"
   },
   author:{
    fontSize:14,
    fontWeight:"800",
    color:"#007f5f"
   },
   date:{
    fontSize:14,
    fontWeight:"800",
    color:"#007f5f"

   },
   source:{
    fontSize:14,
    fontWeight:"800",
    color:"#007f5f",
    padding:5,
    marginBottom:5
   },
   seemore:{
    paddingLeft:5,
    color:"orange",
    fontSize:16,
    fontWeight:"800"
   }


})

export default Article


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGo3OOV9GT08LPKQXUjVu5GTtuHDTSoocaDw&usqp=CAU