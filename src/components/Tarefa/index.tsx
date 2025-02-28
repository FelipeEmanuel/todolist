import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons'

type IProps = {
    tarefa: string
    onRemove: () => void
    handleCheck: () => void
    checked: boolean
}

export default function Tarefa(props: IProps) {

    const { tarefa, onRemove, handleCheck, checked} = props

    return (
        <View style={styles.container}>
            <Checkbox 
                status={checked ? 'checked' : 'unchecked'}
                onPress={handleCheck}
            />
            <Text style={{...styles.text, textDecorationLine: checked ? 'line-through' : 'none', color: checked ? '#808080' : '#f2f2f2',}}>{tarefa}</Text>
            <MaterialIcons 
                name='delete-outline' 
                onPress={onRemove}
                size={24}
                color="#808080" 
            />
        </View>
    );
}


