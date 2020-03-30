import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AWS from "aws-sdk/dist/aws-sdk-react-native";
import { GiftedChat } from "react-native-gifted-chat";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const messages = {
  userName: "Demo User",
  messages: [
    {
      type: "text",
      text: "Hello Steve",
      from: "demo_user1",
      side: "left",
      sender_name: "Michel Slatter",
      to: "jid_1111"
    },
    {
      type: "text",
      text: "Hi Michael",
      from: "demo_user2",
      side: "right",
      sender_name: "Steve Jobs",
      to: "jid_1109"
    },
    {
      type: "text",
      text: "Check this below destination",
      from: "demo_user1",
      sender_name: "Michel Slatter",
      to: "jid_1111"
    }
  ]
};

export default class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    console.log("AWS", AWS);
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }
  render() {
    console.log("AWS", AWS);
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
