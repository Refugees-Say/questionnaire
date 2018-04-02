import React from "react"
import OptionItem from "./OptionItem.jsx"


class SingleAnswerController extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "SingleAnswerController"
    this.optionToggle = this.optionToggle.bind(this)
  }

  optionToggle(toggledOption) {
    let optionPresent = this.props.chosenAnswers.filter((e) => e.id === toggledOption.id)

    let newAnswers = [toggledOption]

    if (optionPresent.length > 0) {
      newAnswers = []
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
    let chosenOptionIds = this.props.chosenAnswers.map((e) => e.id)
    for (let option of this.props.data) {
      let isChosen = false
      if (chosenOptionIds.indexOf(option.id) > -1) {
        isChosen = true
      }
      options.push(
        <OptionItem key={option.id}
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

export default SingleAnswerController
