import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'

import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'

import commonStyles from '../commonStyles'

const initialState = { desc: '', date: new Date(), showDate: false }

export default class AddTask extends Component {
    state = {
        ...initialState
    }

    saveTask = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        if (this.props.onSave) {
            this.props.onSave(newTask)
        }
        this.setState(initialState)
    }

    getDate = () => {
        let datePicker = <DateTimePicker value={this.state.date}
            onChange={(event, date) => this.setState({ date, showDate: false })}
            mode='date' />

        const dateString = moment(this.state.date).format('ddd, D [de] MMM [de] YYYY')


        datePicker = (
            <View>
                <TouchableOpacity onPress={() => this.setState({ showDate: true })}>
                    <Text style={styles.date}>
                        {dateString}
                    </Text>
                </TouchableOpacity>
                {this.state.showDate && datePicker}
            </View>
        )

        return datePicker
    }



    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'>

                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe a descrição da tarefa"
                        onChangeText={desc => this.setState({ desc })}
                        value={this.state.desc} />
                    {this.getDate()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.saveTask}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: '#FFF'
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    button: {
        margin: 20,
        marginRight: 20,
        color: commonStyles.colors.today
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15
    },
})