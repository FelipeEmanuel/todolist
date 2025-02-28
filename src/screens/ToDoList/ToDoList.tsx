import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Alert, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import Tarefa from '../../components/Tarefa';
import { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Badge } from 'react-native-paper';

export default function ToDoList() {

    const [tarefa, setTarefa] = useState('')
    const [tarefasList, setTarefasList] = useState<string[]>([])
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
    const [checkedTotal, setCheckedTotal] = useState(0)

    useEffect(() => {
        const totalChecked = Object.values(checkedItems).filter(value => value).length;
        setCheckedTotal(totalChecked);
    }, [checkedItems]);

    function handleCheck(tarefa: string) {
        setCheckedItems(prevState => ({
            ...prevState,
            [tarefa]: !prevState[tarefa],
        }));
    }

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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View 
                style={{
                    flex: 0.3,
                    width: '100%', 
                    backgroundColor: '#0D0D0D', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexDirection: 'row', 
                }}
            >
                <StatusBar style='light' />
                <Image
                    source={require('../../../assets/rocket.png')}
                    style={{width: 20, height: 31, marginRight: 10}}
                />
                <Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'bold', color: '#4ea8de'}}>to</Text>
                <Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'bold', color: '#5e60ce'}}>do</Text>
            </View>
            <View 
                style={{
                    flex: 0.7,
                    width: '100%',
                    backgroundColor: "#333333",
                    alignItems: 'center',
                    paddingInline: 16
                }}
            >
                <View style={{flexDirection: 'row', marginTop: -30, marginBottom: 0, gap: 10, alignItems: 'center', justifyContent: 'center', width: 'auto'}}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#808080"
                            placeholder='Adicione uma nova tarefa'
                            onChangeText={setTarefa}
                            value={tarefa}
                            />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '96%',
                        paddingTop: 20,
                        paddingBottom: 20
                    }}
                >
                    <View style={{justifyContent: 'center', flexDirection: 'row', gap: 10, alignContent: 'center'}}>
                        <Text style={{color: '#4ea8de', fontSize: 16}}>Criadas</Text>
                        <Badge style={{backgroundColor: '#808080'}} size={22}>{tarefasList.length}</Badge>
                    </View>
                    <View style={{justifyContent: 'center', flexDirection: 'row', gap: 10, alignContent: 'center'}}>
                    <Text style={{color: '#5e60ce', fontSize: 16}}>Concluídas</Text>
                        <Badge style={{backgroundColor: '#808080'}} size={22}>{checkedTotal}</Badge>
                    </View>
                </View>

                <FlatList
                    data={tarefasList}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Tarefa
                            tarefa={item}
                            onRemove={() => handleTarefaRemove(item)}
                            handleCheck={() => handleCheck(item)}
                            checked={checkedItems[item] || false}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={{justifyContent: 'center', gap: 5, alignItems: 'center'}}>
                            <MaterialCommunityIcons name="clipboard-text-outline" size={48} color="#808080" />
                            <Text style={{...styles.listEmptyText, fontWeight: '700'}}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={{...styles.listEmptyText, fontWeight: '400'}}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}


