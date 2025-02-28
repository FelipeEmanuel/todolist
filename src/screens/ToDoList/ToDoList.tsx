import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import Tarefa from '../../components/Tarefa';
import { useState } from 'react';

export default function ToDoList() {

    const [tarefa, setTarefa] = useState('')
    const [tarefasList, setTarefasList] = useState<string[]>([])

    function handleTarefaAdd() {
        setTarefasList(prevState => [...prevState, tarefa])
        setTarefa('')
    }

    function handleTarefaRemove(tarefaRemove: string) {
        Alert.alert('Remover', 'Deseja remover a tarefa?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setTarefasList(prevState => prevState.filter(tarefa => tarefa !== tarefaRemove))
            }
        ])
    }

    return (
        <>
            <View style={styles.containerTop}>
                <StatusBar style="auto" />
                <Image
                    source={require('../../../assets/rocket.png')}
                    style={styles.imagem}
                />
                <Text style={{...styles.text, color: '#4ea8de'}}>to</Text>
                <Text style={{...styles.text, color: '#5e60ce'}}>do</Text>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor="#808080"
                        onChangeText={setTarefa}
                        value={tarefa}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>

                </View>

                <FlatList
                    data={tarefasList}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Tarefa/>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <>
                            <Text style={{...styles.listEmptyText, fontWeight: '700'}}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={{...styles.listEmptyText, fontWeight: '400'}}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </>
                    )}
                />
            </View>
        </>
    );
}


