import React from "react"
import CenteredBlock from "../components/CenteredBlock.jsx"
import Question from "./components/Question.jsx"
import colors from "../colors"

class QuestionnaireApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeQuestion: 0,
      chosenAnswers: [],
    }
    this.nextQuestion = this.nextQuestion.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }

  nextQuestion() {
    this.props.saveAnswers(this.state.chosenAnswers, this.state.activeQuestion)
    if (this.state.activeQuestion + 1 < this.props.questionList.length) {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        chosenAnswers: []
      })
    } else {
      this.props.onComplete()
    }
  }

  previousQuestion() {
    if (this.state.activeQuestion > 0) {
      this.setState({
        activeQuestion: this.state.activeQuestion - 1,
        chosenAnswers: []
      })
    }
  }

  updateAnswers(newAnswers) {
    this.setState({chosenAnswers: newAnswers})
  }

  render() {
    const style = {
      container: {
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
        backgroundImage: "url(question_bg2.jpg)",
        backgroundSize: "cover",
      },
      header: {
        flexGrow: "0",
        flexShrink: "1",
        flexBasis: "60px",
        backgroundColor: colors.navbar.bg,
        color: colors.navbar.text,
      },
      body: {
        flexGrow: "1",
        flexShrink: "1",
        flexBasis: "auto",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    }

    let contents = <h3></h3>

    if (!this.props.questionList || this.props.questionList.length <= 0) {
      contents = <h4> Loading Questionnaire... </h4>
    } else {
      let questionData = this.props.questionList[this.state.activeQuestion]
      contents = <Question data={questionData}
        index={this.state.activeQuestion}
        chosenAnswers={this.state.chosenAnswers}
        nextQuestion={this.nextQuestion}
        updateAnswers={this.updateAnswers}
        previousQuestion={this.previousQuestion} />
    }

    return(
      <CenteredBlock>
        {contents}
      </CenteredBlock>
    )
  }
}


export default QuestionnaireApp
