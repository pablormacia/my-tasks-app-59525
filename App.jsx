import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [taskInput, setTaskInput] = useState("")
  const [tasksList, setTasksList] = useState([])

  //console.log("taskInput: ",taskInput)
  //console.log("TasksList: ", tasksList)

  const handlerAddItemToList = () => {
    //setTask([...tasksList, setTasksList])
    setTasksList(prevTasksList => [...prevTasksList,{"id":Math.random(),"value":taskInput}])
  }

  console.log("TasksList: ", tasksList)

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Añade una tarea'
            onChangeText={(text) => { setTaskInput(text) }}
          />
          <Button title="+" color="#1D9225" onPress={handlerAddItemToList} />
        </View>
        <View style={styles.tasksContainer}>
          <Text style={styles.title}>Tareas pendientes:</Text>
          {
            tasksList.map((task) => (
              <View key={task.id} style={styles.taskContainer}>
                <Text style={styles.taskText}>{task.value}</Text>
                <Button title="x" color="#C71919" />
              </View>
            ))
          }
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
    borderBottomColor: "#FFF",
    borderBottomWidth: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "#ccc",
    width: '90%'
  },
  tasksContainer: {
    paddingTop: 15,
    gap: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 16
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  taskText: {
    color: "#fff"
  }
})


