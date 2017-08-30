import React from "react"
import MultiAnswerController from "./MultiAnswerController.jsx"
import SingleAnswerController from "./SingleAnswerController.jsx"
import RankingController from "./RankingController.jsx"


class Options extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "Options"
    this.updateAnswers = this.updateAnswers.bind(this)
  }

  updateAnswers(chosenAnswers) {
    this.props.updateAnswers(chosenAnswers)
  }

  render() {
    console.log(this.props.chosenAnswers)
    const style = {
      container: {
        textAlign: "center",
      },
    }

    let optionsController = <div></div>

    if (this.props.type==="multi_answer") {
      optionsController = <MultiAnswerController
        data={this.props.data} chosenAnswers={this.props.chosenAnswers}
        updateAnswers={this.updateAnswers} />
    } else if (this.props.type==="single_answer") {
      optionsController = <SingleAnswerController
        data={this.props.data} chosenAnswers={this.props.chosenAnswers}
        updateAnswers={this.updateAnswers} />
    } else if (this.props.type==="ranking") {
      optionsController = <RankingController
        data={this.props.data} chosenAnswers={this.props.chosenAnswers}
        updateAnswers={this.updateAnswers} />
    }

    return(
      <div style={style.container}>
        {optionsController}
      </div>
    )
  }

}

export default Options
