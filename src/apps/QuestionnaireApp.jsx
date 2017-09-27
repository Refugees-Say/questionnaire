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
    this.clickStart = this.clickStart.bind(this)
  }

  submitAnswers(questionData) {
    setTimeout(
      () => {
        console.log(this.props.chosenAnswers)
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
      },
      500
    )
  }

  clickStart() {
    this.fetchQuestionList()
  }

  updateAnswers(newAnswers) {
    this.setState({chosenAnswers: newAnswers})
  }

  fetchQuestionList() {
    this.setState({questionListStatus: "LOADING"})
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
            next_question_id: "3",
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
          },
          {
            question_id: "3",
            question_type: "multi_answer",
            question_text: "Is it important for you to live near any of these places of worship?",
            question_image: null,
            next_question_id: "4",
            options: [
              {
                option_id: "3_1",
                option_text: "Mosque",
                option_image: null
              },
              {
                option_id: "3_2",
                option_text: "Church",
                option_image: null
              },
              {
                option_id: "3_3",
                option_text: "Synagogue",
                option_image: null
              },
              {
                option_id: "3_4",
                option_text: "Hindu Temple",
                option_image: null
              },
              {
                option_id: "3_5",
                option_text: "Sikh Temple",
                option_image: null
              },
              {
                option_id: "3_6",
                option_text: "Buddhist Temple",
                option_image: null
              }
            ]
          },
          {
            question_id: "4",
            question_type: "multi_answer",
            question_text: "Which of these sectors would you be most likely to look for a job in?",
            question_image: null,
            next_question_id: "5",
            options: [
              {
                option_id: "4_1",
                option_text: "Administration",
                option_image: null
              },
              {
                option_id: "4_2",
                option_text: "Manufacturing",
                option_image: null
              },
              {
                option_id: "4_3",
                option_text: "Education",
                option_image: null
              },
              {
                option_id: "4_4",
                option_text: "Construction",
                option_image: null
              },
              {
                option_id: "4_5",
                option_text: "Retail",
                option_image: null
              },
              {
                option_id: "4_6",
                option_text: "Health and Social work",
                option_image: null
              },
              {
                option_id: "4_7",
                option_text: "Electricity, Gas and Water",
                option_image: null
              },
              {
                option_id: "4_8",
                option_text: "Hotel and Restaurant",
                option_image: null
              },
              {
                option_id: "4_9",
                option_text: "Agriculture",
                option_image: null
              },
              {
                option_id: "4_10",
                option_text: "Business",
                option_image: null
              },
            ]
          },
          {
            question_id: "5",
            question_type: "single_answer",
            question_text: "Would you prefer to live in the city or the countryside?",
            question_image: null,
            next_question_id: null,
            options: [
              {
                option_id: "5_1",
                option_text: "Rural",
                option_image: null
              },
              {
                option_id: "5_2",
                option_text: "Urban",
                option_image: null
              },
            ]
          },
        ],
        activeQuestionId: "1",
        questionListStatus: "READY",
        activeQuestionStatus: "READY"
      }),
      2000
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
      startButtonContainer: {
        width: "75%",
        textAlign: "center",
        margin: "0 auto",
        padding: "5px 0px",
      },
      startButton: {
        backgroundColor: colors.optionItem.bg,
        border: `solid 1px ${colors.optionItem.border}`,
        fontSize: "0.8rem",
        padding: "5px 10px",
        color: colors.optionItem.text,
        cursor: "pointer",
      },
    }

    let contents = <h3></h3>

    if (this.state.questionListStatus=="LOADING") {
      contents = <h4> Loading Questionnaire... </h4>
    } else if (this.state.activeQuestionStatus=="YET_TO_START") {
      contents = (
        <div>
          <h4> Please click the button below to begin </h4>
          <div style={style.startButtonContainer} onClick={this.clickStart}>
            <div style={style.startButton}>Get Started</div>
          </div>
        </div>
      )
    } else if (this.state.activeQuestionStatus=="ALL_COMPLETE") {
      contents = <h4> Thank you! Matching your preferences... </h4>
    } else {
      let questionData = this.state.questionList.filter((question) =>
        this.state.activeQuestionId === question.question_id
      )[0]
      contents = <Question data={questionData}
        chosenAnswers={this.state.chosenAnswers}
        submitAnswers={this.submitAnswers}
        updateAnswers={this.updateAnswers} />
    }

    return(
      <div style={style.container}>
        <div style={style.header}>
          <h4 style={{textAlign: "center"}}> Refugee Match </h4>
        </div>
        <div style={style.body}>
          <CenteredBlock>
            {contents}
          </CenteredBlock>
        </div>
      </div>
    )
  }

}


export default QuestionnaireApp
