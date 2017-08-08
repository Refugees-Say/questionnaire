import React from "react"
import Options from "./Options.jsx"
import colors from "../../colors"

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
      question: {
        marginBottom: "40px",
      },
      nextButton: {
        backgroundColor: colors.nextButton.bg,
        color: colors.nextButton.text,
        padding: "10px",
        borderRadius: "15px",
        border: colors.nextButton.bg,
        marginTop: "30px",
        minWidth: "100px",
        fontSize: "0.7rem",
        fontWeight: "700",
        outline: "0",
      }
    }

    return(
      <div style={style.container}>
        <h3 style={style.question}>{this.props.data.question_text}</h3>
        <Options data={this.props.data.options}
          type={this.props.data.question_type}
          chosenAnswers={this.state.chosenAnswers}
          answerHandler={this.updateAnswer} />
        <button style={style.nextButton} onClick={this.clickHandler}>NEXT</button>
      </div>
    )
  }

}

export default Question
