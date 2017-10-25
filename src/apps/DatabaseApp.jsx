import React from "react"
import colors from "../colors"
import Table from "rc-table"
import db from "../database_data"


class DatabaseApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTable: "refugee_data"
    }
  }

  render() {
    return(
      <div style={{
        maxWidth: "800px",
        maxHeight: "800px",
        overflow: "auto"
      }}>
        <Table columns={db[this.state.activeTable].columns}
          data={db[this.state.activeTable].rows}
          rowKey="Refugee ID"
          className="display-table"
        />
      </div>
    )
  }

}


export default DatabaseApp
