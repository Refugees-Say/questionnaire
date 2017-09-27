import React from "react"
import OptionItem from "./OptionItem.jsx"


class MultiAnswerController extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "MultiAnswerController"
    this.optionToggle = this.optionToggle.bind(this)
  }

  optionToggle(toggledOption) {
    let optionPresent = this.props.chosenAnswers.filter(
      (e) => e.option_id === toggledOption.option_id
    )
    let newAnswers = this.props.chosenAnswers.slice()

    if (optionPresent.length > 0) {
      newAnswers = newAnswers.filter((e) => e.option_id !== toggledOption.option_id)
    } else {
      newAnswers.push(toggledOption)
    }

    this.props.updateAnswers(newAnswers)
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      }
    }

    let options = []
    let chosenOptionIds = this.props.chosenAnswers.map((e) => e.option_id)
    for (let option of this.props.data) {
      let isChosen = false
      if (chosenOptionIds.indexOf(option.option_id) > -1) {
        isChosen = true
      }
      options.push(
        <OptionItem key={option.option_id}
          data={option} optionToggle={this.optionToggle} chosen={isChosen}/>
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
