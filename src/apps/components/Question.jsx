import React from "react"
import Options from "./Options.jsx"
import colors from "../../colors"

class Question extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "Question"
    this.updateAnswers = this.updateAnswers.bind(this)
  }

  updateAnswers(newAnswers) {
    this.props.updateAnswers(newAnswers, this.props.data)
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

    if (this.props.index > 0) {
      prevButton =
        <button style={style.prevButton} onClick={this.props.previousQuestion}>
          BACK
        </button>
    }

    let type = null
    let data = {}
    if (this.props.data.rank) {
      type = "ranking"
      data = this.props.data.rank
    } else if (this.props.data.radio) {
      type = "single_answer"
      data = this.props.data.radio
    } else {
      type = "multi_answer"
      data = this.props.data.selection
    }

    return(
      <div style={style.container}>
        <h3 style={style.question}>{data.question}</h3>
        <Options data={data.choices}
          type={type}
          chosenAnswers={this.props.chosenAnswers}
          updateAnswers={this.updateAnswers} />
        {prevButton}
        <button style={style.nextButton} onClick={this.props.nextQuestion}>
          NEXT
        </button>
      </div>
    )
  }

}

export default Question
