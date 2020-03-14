import React, { Component } from 'react';
import { Alert, Text, FlatList, TouchableOpacity, View, } from 'react-native';
import Style from '../styles/style';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            chitList: []
        }
    }

    async getHomeChits() {
        return fetch("http://10.0.2.2:3333/api/v0.0.5/chits?")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    chitList: responseJson,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

  
    componentDidMount() {
        this.getHomeChits();
    }

    getChitDate(timestamp) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = new Date(timestamp * 1000);
        var month = months[date.getMonth()];
        var year = date.getFullYear();
        var hour = date.getHours();
        var min = date.getMinutes();
        var time = month + ' ' + year + ' | ' + hour + ':' + min;
        return time;
    }

    render() {
        return (
            <View style={Style.pageContainer}>
                <FlatList style={Style.chitList}
                    data={this.state.chitList}
                    renderItem={({ item }) =>
                        <View style={Style.chitContainer}>
                            <View style={Style.chitHeaderContainer}>
                                <Text style={Style.chitHeader}>{item.user.given_name}</Text>
                                <Text style={Style.chitHeader}>{item.user.family_name}</Text>
                            </View>
                            <View style={Style.chitDateContainer}>
                                <Text style={Style.chitDate}>{this.getChitDate(item.timestamp)}</Text>
                            </View>
                            <Text style={Style.chitContent}>{item.chit_content}</Text>
                            <View style={Style.chitLocationContainer}>
                                <Text style={Style.chitDate}>Manchester, United Kingdom, England</Text>
                            </View>
                        </View>
                    }
                    keyExtractor={({ id }, index) => id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}