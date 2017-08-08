import React from "react"
import OptionItem from "./OptionItem.jsx"


class MultiAnswerController extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "MultiAnswerController"
    this.optionToggle = this.optionToggle.bind(this)
  }

  optionToggle(optionId) {
    let optionIndex = this.props.chosenAnswers.indexOf(optionId)

    let newAnswers = this.props.chosenAnswers.slice()

    if (optionIndex > -1) {
      newAnswers.splice(optionIndex, 1)
    } else {
      newAnswers.push(optionId)
    }

    this.props.answerHandler(newAnswers)
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      }
    }

    let options = []
    for (let option of this.props.data) {
      let isChosen = false
      if (this.props.chosenAnswers.indexOf(option.option_id) > -1) {
        isChosen = true
      }
      options.push(
        <OptionItem data={option} optionToggle={this.optionToggle}
          chosen={isChosen}/>
      )
    }

    return(
      <div style={style.container}>
        {options}
      </div>
    )
  }

}

export default MultiAnswerController
