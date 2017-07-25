import React from "react"
import CenteredBlock from "../components/CenteredBlock.jsx"
import Question from "./components/Question.jsx"

class QuestionnaireApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeQuestionId: null,
      activeQuestionStatus: "LOADING",
      questionList: [],
      questionListStatus: "LOADING"
    }
    this.answerHandler.bind(this)
  }

  answerHandler(questionData) {
    // Send the answer to the API
    this.setState({
      activeQuestionId: questionData.next_question_id
    })
  }

  fetchQuestionList() {
    setTimeout(() =>
      this.setState({
        questionList: [
          {
            question_id: "1",
            question_type: "ranking",
            question_text: "Rank how important these factors are to you",
            question_image: null,
            next_question_id: "2",
            options: [
              {
                option_id: "1_1",
                option_text: "Job opportunities",
                option_image: null
              },
              {
                option_id: "1_2",
                option_text: "Cost of living",
                option_image: null
              },
              {
                option_id: "1_3",
                option_text: "Quality of schools",
                option_image: null
              },
              {
                option_id: "1_4",
                option_text: "Level of crime",
                option_image: null
              }
            ]
          },
          {
            question_id: "2",
            question_type: "multi_answer",
            question_text: "Is it important for you to access any of these?",
            question_image: null,
            next_question_id: "1",
            options: [
              {
                option_id: "2_1",
                option_text: "English teaching",
                option_image: null
              },
              {
                option_id: "2_2",
                option_text: "Practical training",
                option_image: null
              },
              {
                option_id: "2_3",
                option_text: "University",
                option_image: null
              }
            ]
          }
        ],
        activeQuestionId: "1",
        questionListStatus: "READY",
        activeQuestionStatus: "READY"
      }),
      2000
    )
  }

  componentDidMount() {
    this.fetchQuestionList()
  }

  render() {
    let contents = <h3></h3>

    if (this.state.questionListStatus=="LOADING") {
      contents = <h4> Loading Questionnaire... </h4>
    } else if (this.state.activeQuestionStatus=="LOADING") {
      contents = <h4> Loading Questionnaire... </h4>
    } else {
      let questionData = this.state.questionList.filter((question) =>
        this.state.activeQuestionId === question.question_id
      )[0]
      contents = <Question data={questionData} submitAnswer={this.answerHandler} />
    }

    return(
      <div>
        <CenteredBlock>
          {contents}
        </CenteredBlock>
      </div>
    )
  }

}


export default QuestionnaireApp
