import { Text, View, ScrollView } from 'react-native';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.styleScrollView}>
          <Task />
        </ScrollView>
      </View>
      <Form onAddTask={'xin chao'}/>
    </View>
  );
}
