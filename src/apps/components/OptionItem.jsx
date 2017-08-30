import React from "react"
import colors from "../../colors.js"

class OptionItem extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "OptionItem"
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.optionToggle(this.props.data)
  }

  render() {

    const style = {
      container: {
        width: "75%",
        textAlign: "center",
        margin: "0 auto",
        padding: "5px 0px",
      },
      box: {
        backgroundColor: colors.optionItem.bg,
        border: `solid 1px ${colors.optionItem.border}`,
        fontSize: "0.8rem",
        padding: "5px 10px",
        color: colors.optionItem.text,
      },
      chosenBox: {
        backgroundColor: colors.chosenOptionItem.bg,
        border: `solid 1px ${colors.chosenOptionItem.border}`,
        fontSize: "0.8rem",
        padding: "5px 10px",
        color: colors.chosenOptionItem.text,
      }
    }

    let buttonStyle = style.box

    if (this.props.chosen) {
      buttonStyle = style.chosenBox
    }

    return(
      <div style={style.container} onClick={this.clickHandler}>
        <div style={buttonStyle}>{this.props.data.option_text}</div>
      </div>
    )
  }

}

export default OptionItem
