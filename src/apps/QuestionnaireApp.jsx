import React from "react"
import request from "superagent"
import Questionnaire from "./Questionnaire.jsx"

class QuestionnaireApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      questionList: [],
      questionnnaireId: null,
      responseId: null,
      questionnaireDescription: null,
      questionnaireLanguage: null,
      answerList: null,
      status: "LOADING"
    }
    this.fetchQuestionList = this.fetchQuestionList.bind(this)
    this.fetchAnswerList = this.fetchAnswerList.bind(this)
    this.createAnswerList = this.createAnswerList.bind(this)
    this.onComplete = this.onComplete.bind(this)
    this.saveAnswers = this.saveAnswers.bind(this)
  }

  componentDidMount() {
    this.fetchQuestionList()
  }

  fetchQuestionList() {
    request.get("http://192.168.64.4:8000/api/v1/questionnaires/")
      .set("Authorization", `Token ${this.props.token}`)
      .end((err, response) => {
        if (err) {
          console.log(err)
        } else {
          this.setState({
            questionList: response.body.results[0].questions,
            questionnaireId: response.body.results[0].id,
            questionnaireDescription: response.body.results[0].description,
            questionnaireLanguage: response.body.results[0].language,
          })
          this.fetchAnswerList(response.body.results[0].id)
        }
      })
  }

  createAnswerList(questionnaireId) {
    request.post("http://192.168.64.4:8000/api/v1/responses/")
      .set("Authorization", `Token ${this.props.token}`)
      .send({
        questionnaire: questionnaireId,
        response: JSON.stringify({
          answers: [{type: "rank"}]
        })
      })
      .end((err, response) => {
        if (err) {
          console.log(err)
        } else {
          this.setState({
            responseId: response.body.results[0].id
          })
          this.fetchAnswerList()
        }
      })
  }

  fetchAnswerList(questionnaireId) {
    request.get("http://192.168.64.4:8000/api/v1/responses/")
      .query({ questionnaire: questionnaireId })
      .set("Authorization", `Token ${this.props.token}`)
      .end((err, response) => {
        if (err) {
          console.log(err)
        } else {
          if (response.body.results.length > 0) {
            this.setState(
              {
                answerList: JSON.parse(response.body.results[0].response).answers,
                responseId: response.body.results[0].id
              }
            )
          } else {
            console.log(response.body)
            this.createAnswerList(questionnaireId)
          }
        }
      })
  }

  saveAnswers(newAnswers, index) {
    let newAnswerList = this.state.answerList.slice()
    newAnswerList[index] = {
      type: "rank",
      choices: newAnswers
    }
    request.patch(`http://192.168.64.4:8000/api/v1/responses/${this.state.responseId}/`)
      .set("Authorization", `Token ${this.props.token}`)
      .send({
        response: JSON.stringify({
          answers: newAnswerList
        })
      })
      .end((err, response) => {
        if (err) {
          console.log(err)
        } else {
          this.setState(
            {answerList: JSON.parse(response.body.response).answers}
          )
        }
      })
  }

  onComplete() {
    this.setState({status: "COMPLETE"})
  }

  render() {
    if (this.state.status === "COMPLETE") {
      return(
        // <QuestionnaireComplete />
        <h1>Questionnaire Complete</h1>
      )
    } else {
      return(
        <Questionnaire questionList={this.state.questionList}
          status={this.state.status} onComplete={this.onComplete}
          answerList={this.state.answerList}
          saveAnswers={this.saveAnswers} />
      )
    }
  }

}


export default QuestionnaireApp
