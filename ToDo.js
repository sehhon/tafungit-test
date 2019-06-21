import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";

const { width } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    toDovalue: ""
  };

  render() {
    const { isEditing, isCompleted, toDovalue } = this.state;
    const { text } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleCompleted}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedCircle : styles.uncompletedCircle
            ]}
          />
        </TouchableOpacity>

        {isEditing
          ? <TextInput style={[ styles.Input, styles.text ]} value={toDovalue} multiline={true} onChangeText = {this._controllInput} returnKeyType = {"done"} onBlur={this._finishEditing}/>
          : <Text
              style={[
                styles.text,
                styles.input,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
            >
              {text}
            </Text>}

        <View style={styles.column}>
          {isEditing
            ? <View style={styles.actions}>
                <TouchableOpacity onPressOut={this._finishEditing}>
                  <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>✅</Text>
                  </View>
                </TouchableOpacity>
              </View>
            : <View style={styles.actions}>
                <TouchableOpacity onPressOut={this._startEditing}>
                  <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>✏️</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>❌</Text>
                  </View>
                </TouchableOpacity>
              </View>}
        </View>
      </View>
    );
  }

  //onpressOut : 손가락을 떼는 순간

  _toggleCompleted = () => {
    this.setState(prevState => {
      console.log(!prevState.isCompleted);
      return {
        isCompleted: !prevState.isCompleted //true로 변경
      };
    });
    // console.log(this.state);
  };



  _startEditing = () => {
    const { text } = this.props;
    this.setState({
      isEditing: true,
      toDovalue: text
    });
    console.log(this.state);
  };



  _finishEditing = () => {
    this.setState({
      isEditing: false
    });
    console.log(this.state);
  };
}


  _controllInput = (text) => {
    this.setState({
      isEditing: text
    });
  };




const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    //backgroundColor: "pink",
    marginRight: 20,
    borderWidth: 3
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#FF7684"
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353839"
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    justifyContent: "space-between"
  },
  actions: {
    flexDirection: "row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  actionText: {

  },
  input: {
    marginVertical : 20,
    width: width/2

  }
});