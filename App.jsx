import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal,Pressable } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [taskInput, setTaskInput] = useState("")
  const [tasksList, setTasksList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected, setTaskSelected] = useState({})

  //console.log("taskInput: ",taskInput)
  //console.log("TasksList: ", tasksList)

  const handlerAddItemToList = () => {
    //setTask([...tasksList, setTasksList])
    setTasksList(prevTasksList => [...prevTasksList, { "id": Math.random(), "value": taskInput }])
    setTaskInput("")
  }

  const handleDeleteTask = ()=>{
    setTasksList(tasksList.filter((task)=>task.id != taskSelected.id))
    setModalVisible(false)
  }

  const handleSelectedTask = (item)=>{
    setTaskSelected(item)
    console.log(item)
    setModalVisible(true)
  }

  const renderTaskItem = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>{item.value}</Text>
        <Button title="x" color="#C71919" onPress={()=>handleSelectedTask(item)} />
      </View>
    )
  }


  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Añade una tarea'
            onChangeText={(text) => { setTaskInput(text) }}
            value={taskInput}
          />
          <Button title="+" color="#1D9225" onPress={handlerAddItemToList} />
        </View>
        <View style={styles.tasksContainer}>
          <Text style={styles.title}>Tareas pendientes:</Text>
          {/* {
            tasksList.map((task) => (
              <View key={task.id} style={styles.taskContainer}>
                <Text style={styles.taskText}>{task.value}</Text>
                <Button title="x" color="#C71919" />
              </View>
            ))
          } */}
          <FlatList
            data={tasksList}
            keyExtractor={item => item.id}
            renderItem={renderTaskItem}
          />
        </View>
      </View>
      <StatusBar style="auto" />
      <Modal
        animationType='fade'
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Pressable style={styles.closeButton} onPress={()=>setModalVisible(false)}>
            <Text style={styles.closeText}>x</Text>
          </Pressable>
          <View style={styles.textsContainer}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>{taskSelected.value}</Text>
            <Text style={styles.modalDeleteTextWarning}>
              Esta acción no se puede deshacer
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={styles.cancelBtn}
              onPress={()=>setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={styles.deleteBtn}
              onPress={handleDeleteTask}
            >
              <Text style={styles.deleteText}>Si, eliminar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  },
  modalContainer: {
    backgroundColor: "#464646",
    flex: 1,
  },
  closeButton:{
    alignSelf: 'flex-end',
    padding:30
  },
  closeText:{
    color:"#fff",
    fontSize:30
  },
  textsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText: {
    color: "#fff",
    fontSize: 14,
  },
  modalDeleteTextWarning: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  buttonsContainer: {
    padding: 30,
    flexDirection:'row',
    gap:10
  },
  deleteBtn: {
    backgroundColor: "#c71919",
    width: "48%",
    padding: 10,
    borderRadius: 15,
  },
  deleteText: {
    textAlign: "center",
    fontSize: 14,
    color: "#fff",
    fontWeight:'bold'
  },
  cancelBtn: {
    backgroundColor: "#C5C5C5",
    width: "48%",
    padding: 10,
    borderRadius: 15,
  },
  cancelText: {
    textAlign: "center",
    fontSize: 14,
    color: "#474646",
  },
})


