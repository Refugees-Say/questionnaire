import React from "react"
import colors from "../../colors.js"

class OptionItem extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "OptionItem"
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.optionToggle(this.props.data.option_id)
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
        padding: "5px 10px"
      }
    }

    return(
      <div style={style.container} onClick={this.clickHandler}>
        <div style={style.box}>{this.props.data.option_text}</div>
      </div>
    )
  }

}

export default OptionItem
