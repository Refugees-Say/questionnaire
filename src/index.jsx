import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import colors from "./colors"
import QuestionnaireApp from "./apps/QuestionnaireApp.jsx"
import CenteredBlock from "./components/CenteredBlock.jsx"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      password: "refsay",
    }
    this.passwordHandler = this.passwordHandler.bind(this)
  }

  passwordHandler(e) {
    this.setState({password: e.target.value})
  }

  render() {
    const style = {
      body: {
        backgroundColor: colors.bodyBg,
        color: colors.bodyText,
      }
    }

    let app =
      <Radium.StyleRoot>
        <QuestionnaireApp />
      </Radium.StyleRoot>

    if (this.state.password != "refsay") {
      app =
        <CenteredBlock>
          <h3> Password? </h3>
          <input style={{textAlign: "center"}} autoFocus type="password"
            value={this.state.password} onChange={this.passwordHandler}/>
        </CenteredBlock>
    }

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

App = Radium(App)


ReactDOM.render(
  <App />,
  document.getElementById("react-app")
)
