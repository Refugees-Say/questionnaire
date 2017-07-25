import React from "react"


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
        padding: "5px 10px"
      },
    }

    return(
      <div style={style.container} onClick={this.clickHandler}>
        <h5>{this.props.data.option_text}</h5>
      </div>
    )
  }

}

export default OptionItem
