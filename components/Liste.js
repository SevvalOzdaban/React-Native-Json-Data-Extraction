import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import Detay from './Detay';

class Liste extends Component {
    //data extraction
    state = { data: null };
    async componentDidMount() {
        await axios.get('https://reqres.in/api/users').then(
            response => this.setState({ data: JSON.stringify(response.data.data) }));
    }

    renderData() {
        if (this.state.data == null) { return null }

        return JSON.parse(this.state.data).map((n, i) => {
            return <Detay key={i} data={n} />
        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    {this.renderData()}
                </ScrollView>
            </View>
        );
    }
}
export default Liste;

