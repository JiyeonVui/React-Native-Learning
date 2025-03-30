import React, {useState} from "react";
import { Text, View, Keyboard ,TextInput, TouchableOpacity,KeyboardAvoidingView, Platform } from "react-native";
import styles from "./style";

const Form = (props) =>{
    const [task, setTask] = useState('');

    const handleAddTask = () =>{
        if(task.length === 0){
            alert("Please enter a task")
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
    }

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={10}
            style={styles.addTask}
        >
            <TextInput 
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder="Your task" 
                style={styles.input} 
            /> 
            <TouchableOpacity
                onPress={handleAddTask}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default Form;