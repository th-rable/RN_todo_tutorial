/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './src/js/Task';


 


export default function App() {
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask=()=>{
    if(task==null){
      //Alert.alert("Empty");
      return;
    }

    setTaskItems([...taskItems,task]);
    setTask(null);
  }

  const completeTask=(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks
        </Text>
        <View style={styles.items}>
          {
            taskItems.map((item,index)=>{
              return(
                <TouchableOpacity key={index} onPress={()=>completeTask()}>
                    <Task text={item}></Task>
                </TouchableOpacity>
              )
              
            })
          }
          
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding':'height'}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text=>setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:3,
    backgroundColor:'#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    color:'black'
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    //borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    //borderWidth:1,
    
  },
  addText:{

  }

  
});

