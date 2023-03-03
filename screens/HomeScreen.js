import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Article from '../components/Article';
import categories from '../Data';

const HomeScreen = () => {
    const [articles,setArticles] = useState([])
    const [category,setCategory] = useState("business")
    const [loading,setLoading] = useState(true)
    console.log(category);



 console.log(articles);
    useEffect(()=> {
      setLoading(true)
        const getNews = async()=> {
            const {data} = await axios.get(`http://api.mediastack.com/v1/news?access_key=d015e59b353215ce9a8780badafd0169&categories=${category}&countries=us,gb,in`)
            //  console.log(data);
               setArticles(data.data)
               setLoading(false)
        }
        getNews()  
    },[category])
  return (
    <>
    <Text style={styles.headingText}>News Brews</Text>
    <Text style={styles.categoryText}>News Categories</Text>
    <View style={styles.category}>
     {categories.map((text)=> (
     <View style={styles.butt}>
        <TouchableOpacity  onPress={()=>setCategory(text)} style={styles.button}>
          <Text style={{color:"white"}}>{text}</Text>
        </TouchableOpacity>
       </View>
      ))}
      </View>
      {loading ? (
        <>
        <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading News Articles....</Text>
      <Image style={{width:250,height:200,marginTop:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO55j7fzwt7kRv7N4eRe28JbNk6RTWFLiuw&usqp=CAU"}} />
      </View>
      </>
      ) : (
        <View style={styles.container}>
       {articles.map((art,index)=> (
       <Article key={index} articles={art}/>
       ))}
     </View>
      )}
     
    </>
  )
}

const styles = StyleSheet.create({
   headingText:{
   fontSize:25,
   textAlign:"center",
   color:"#227C70",
   fontWeight:"800"
   },
   categoryText:{
    fontSize:15,
    color:"orange",
    fontWeight:"800",
    padding:5
   },
   category:{
    width:"100%",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    marginTop:10
   },
   butt:{
    width:"33%",
    padding:5,
   },
   button: {
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#227C70',
    color:"white"
   },
   loading:{
    textAlign:"center",
    fontSize:20,
    marginTop:"50%",
    color:"#F96666",
    fontWeight:"800"
   },
   loadingContainer :{
    alignItems:"center"
   },
})

export default HomeScreen