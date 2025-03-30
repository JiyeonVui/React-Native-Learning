import { Text, View, ScrollView,Alert } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task)=>{
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index)=>{
    Alert.alert(
      "Notify",
      "Are you really want to delete!!",
      [
        {
          text:"Ok",
          onPress: ()=>{
            let tastListTmp = [...taskList];
            tastListTmp.splice(index,1);
            setTaskList(tastListTmp);
          },
        },
        {
          text:"Cancel", onPress: ()=>{}
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.styleScrollView}>
          {
            taskList.map((item, index)=>{
              return <Task key={index} title={item} number={index+1} onDeleteTask={()=>handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>
    </View>
  );
}
