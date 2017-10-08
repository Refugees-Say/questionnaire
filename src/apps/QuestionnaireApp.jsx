import React from "react"
import CenteredBlock from "../components/CenteredBlock.jsx"
import Question from "./components/Question.jsx"
import colors from "../colors"

class QuestionnaireApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeQuestionId: null,
      activeQuestionStatus: "YET_TO_START",
      questionList: [],
      questionListStatus: "YET_TO_START",
      chosenAnswers: [],
    }
    this.submitAnswers = this.submitAnswers.bind(this)
    this.updateAnswers = this.updateAnswers.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
  }

  submitAnswers(questionData) {
    if (questionData.next_question_id) {
      this.setState({
        activeQuestionId: questionData.next_question_id,
        chosenAnswers: []
      })
    } else {
      this.setState({
        activeQuestionStatus: "ALL_COMPLETE"
      })
    }
  }

  previousQuestion(prev_question_id) {
    if (this.state.questionList.filter((e) => e.question_id === prev_question_id)[0]) {
      this.setState({
        activeQuestionId: prev_question_id,
        chosenAnswers: []
      })
    }
  }

  componentDidMount() {
    this.fetchQuestionList()
  }

  updateAnswers(newAnswers) {
    this.setState({chosenAnswers: newAnswers})
  }

  fetchQuestionList() {
    this.setState({questionListStatus: "LOADING"})
    setTimeout(() =>
      this.setState({
        questionList: this.props.questionData,
        activeQuestionId: "1",
        questionListStatus: "READY",
        activeQuestionStatus: "READY"
      }),
      400
    )
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

    if (this.state.questionListStatus=="LOADING") {
      contents = <h4> Loading Questionnaire... </h4>
    } else if (this.state.activeQuestionStatus=="YET_TO_START") {
      contents = <h4> Loading Questionnaire... </h4>
    } else if (this.state.activeQuestionStatus=="ALL_COMPLETE") {
      contents = <h4 style={{textAlign: "center"}}> {this.props.completionMessage} </h4>
    } else {
      let questionData = this.state.questionList.filter((question) =>
        this.state.activeQuestionId === question.question_id
      )[0]
      contents = <Question data={questionData}
        chosenAnswers={this.state.chosenAnswers}
        submitAnswers={this.submitAnswers}
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
