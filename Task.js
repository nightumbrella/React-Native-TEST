import { Text, View, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular} ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding:15,
    borderRadius:10 ,   
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    marginTop:20,
  },
  itemLeft:{
    maxWidth:'80%',
    overflow:'hidden'
  },
  itemText:{
    marginRight:10
  },
  circular: {
    width:12,
    height:12,
    borderWidth:2,
    borderRadius:5,
    borderColor:'#bbd0ff',  
  },
});

export default Task;
