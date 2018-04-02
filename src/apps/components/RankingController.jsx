import React from "react"
import OptionItem from "./OptionItem.jsx"
import {SortableContainer, SortableElement, arrayMove} from "react-sortable-hoc"
import colors from "../../colors.js"

const buttonStyle = {
  backgroundColor: colors.optionItem.bg,
  border: `solid 1px ${colors.optionItem.border}`,
  fontSize: "0.8rem",
  padding: "5px 10px",
  color: colors.optionItem.text,
  textAlign: "center",
  cursor: "move",
}

const SortableItem = SortableElement(
  ({value}) => <div style={buttonStyle}>{value.choice}</div>
)

const SortableList = SortableContainer(
  ({items}) => {
    return (
      <div>
        {items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </div>
    )
  }
)


class RankingController extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "RankingController"
    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({oldIndex, newIndex}) {
    let newAnswers = this.props.data.slice()
    this.props.updateAnswers(arrayMove(newAnswers, oldIndex, newIndex))
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      }
    }
    let optionList = this.props.data
    if (this.props.chosenAnswers.length > 0) {
      optionList = this.props.chosenAnswers
    }

    return(
      <div style={style.container}>
        <SortableList items={optionList} onSortEnd={this.onSortEnd} />
      </div>
    )
  }
}

export default RankingController
