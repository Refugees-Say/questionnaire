import React from "react"


class CenteredBlock extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "CenteredBlock"
  }

  render() {
    const style = {
      centeredTitle: {
        width: this.props.width,
        minWidth: this.props.minWidth,
      },
    }

    return(
      <div style={style.container}>
        <div style={style.centeredTitle}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

CenteredBlock.defaultProps = {
  width: "100%",
  minWidth: "200px",
}

export default CenteredBlock
