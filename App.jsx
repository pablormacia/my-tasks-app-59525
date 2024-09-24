import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Añade una tarea' />
        <Button title="+" color="#1D9225" />
      </View>
      <View style={styles.tasksContainer}>
          <Text style={styles.title}>Tareas pendientes:</Text>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>Tarea de prueba</Text>
            <Button title="x" color="#C71919" />
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>Tarea de prueba</Text>
            <Button title="x" color="#C71919" />
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>Tarea de prueba</Text>
            <Button title="x" color="#C71919" />
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>Tarea de prueba</Text>
            <Button title="x" color="#C71919" />
          </View>
      </View>
    </View>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#464646",
    paddingHorizontal:20,
  },
  inputContainer:{
    flexDirection:'row',
    paddingTop:60,
    paddingBottom:40,
    justifyContent: 'space-between',
    borderBottomColor: "#FFF",
    borderBottomWidth: 2,
  },
  textInput:{
    borderWidth:1,
    borderColor:"#ccc",
    paddingVertical: 5,
    paddingHorizontal:10,
    borderRadius: 15,
    backgroundColor: "#ccc",
    width:'90%'
  },
  tasksContainer:{
    paddingTop:15,
    gap:20,
  },
  title:{
    color:"#fff",
    fontWeight:"bold",
    alignSelf:"center",
    fontSize:16
  },
  taskContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: "center",
    paddingBottom: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  taskText:{
    color:"#fff"
  }
})


