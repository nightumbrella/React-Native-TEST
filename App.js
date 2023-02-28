import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./Task";
import react, {useState} from "react";

export default function App() {
  const [task, setTask] = useState('')
  const [taskItems,setTaskItems] =useState([])

  const handleClick = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const deleteClick = (index) => {
    let itemCopy = [...taskItems]
    itemCopy.splice(index,1);
    setTaskItems(itemCopy)
  }

  return (
    <View style={styles.container}>
      {/* Today' tasks */}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
         {
          taskItems.map((items,index) =>{
            return(
              <TouchableOpacity key={index} onPress={() => deleteClick(index)} >
                  <Task text={items} /> 
                </TouchableOpacity>
            )
          })
         }
        </View>
      </View>

      {/* Today' tasks */}

      {/* Read a task */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text)=> setTask(text)}
         
        />
        <TouchableOpacity  onPress= {() => handleClick()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* Read a task */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edede9",
    
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  items: {},

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
