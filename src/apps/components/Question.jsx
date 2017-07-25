import React from "react"
import Options from "./Options.jsx"


class Question extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "Question"
    this.state = {
      chosenAnswers: []
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.updateAnswer = this.updateAnswer.bind(this)
  }

  updateAnswer(answerSet) {
    this.setState({
      chosenAnswers: answerSet
    })
  }

  clickHandler() {
    this.props.submitAnswer(this.props.data, this.state.chosenAnswers)
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      },
    }

    return(
      <div style={style.container}>
        <h3>{this.props.data.question_text}</h3>
        <Options data={this.props.data.options}
          type={this.props.data.question_type}
          chosenAnswers={this.state.chosenAnswers}
          answerHandler={this.updateAnswer} />
        <button onClick={this.clickHandler}>Next</button>
      </div>
    )
  }

}

export default Question
