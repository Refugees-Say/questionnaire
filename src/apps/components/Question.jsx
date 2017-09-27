import React from "react"
import Options from "./Options.jsx"
import colors from "../../colors"

class Question extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "Question"
    this.submitAnswers = this.submitAnswers.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }

  updateAnswers(newAnswers) {
    this.props.updateAnswers(newAnswers, this.props.data)
  }

  submitAnswers() {
    this.props.submitAnswers(this.props.data)
  }

  previousQuestion() {
    this.props.previousQuestion(this.props.data.prev_question_id)
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      },
      question: {
        marginBottom: "40px",
      },
      prevButton: {
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
        cursor: "pointer",
        marginRight: "10px",
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
        cursor: "pointer",
      }
    }

    let prevButton = null

    if (this.props.data.prev_question_id) {
      prevButton =
        <button style={style.prevButton} onClick={this.previousQuestion}>
          BACK
        </button>
    }

    return(
      <div style={style.container}>
        <h3 style={style.question}>{this.props.data.question_text}</h3>
        <Options data={this.props.data.options}
          type={this.props.data.question_type}
          chosenAnswers={this.props.chosenAnswers}
          updateAnswers={this.updateAnswers} />
        {prevButton}
        <button style={style.nextButton} onClick={this.submitAnswers}>
          NEXT
        </button>
      </div>
    )
  }

}

export default Question
