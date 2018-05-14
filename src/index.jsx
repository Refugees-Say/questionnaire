import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import colors from "./colors"
import QuestionnaireApp from "./apps/QuestionnaireApp.jsx"
import DatabaseApp from "./apps/DatabaseApp.jsx"
import CenteredBlock from "./components/CenteredBlock.jsx"
import questionData from "./questionData"
import request from "superagent"


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      token: null,
      view: "chooser",
      loginStatus: "logged-out",
    }
    this.passwordHandler = this.passwordHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.viewHandler = this.viewHandler.bind(this)
    this.homeClick = this.homeClick.bind(this)
    this.usernameHandler = this.usernameHandler.bind(this)
  }

  homeClick() {
    window.location.reload()
  }

  passwordHandler(e) {
    this.setState({password: e.target.value})
  }

  usernameHandler(e) {
    this.setState({username: e.target.value})
  }

  loginHandler(e) {
    this.setState({loginStatus: "loading"})
    request
      .post("/api/v1/token/")
      .send({
        username: this.state.username,
        password: this.state.password,
      })
      .end(
        (err, result) => {
          if (err) {
            console.log(err)
            this.setState({loginStatus: "login-failed"})
          } else {
            this.setState(
              {loginStatus: "logged-in", token: result.body.token}
            )
          }
        }
      )
  }

  viewHandler(viewName) {
    return () => this.setState({view: viewName})
  }

  render() {
    const style = {
      container: {
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
        backgroundImage: "url(question_bg2.jpg)",
        backgroundSize: "cover",
      },
      header: {
        flexGrow: "0",
        flexShrink: "1",
        flexBasis: "60px",
        backgroundColor: colors.navbar.bg,
        color: colors.navbar.text,
      },
      body: {
        flexGrow: "1",
        flexShrink: "1",
        flexBasis: "auto",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      footer: {
        display: "flex",
        flexGrow: "0",
        flexShrink: "1",
        flexBasis: "200px",
        alignItems: "center",
        justifyContent: "center",
      },
      footerLogos: {
        maxWidth: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      logo: {
        width: "30%",
        height: "auto",
        display: "inline-block",
      },
      chooseButtonContainer: {
        width: "90%",
        textAlign: "center",
        margin: "0 auto",
        padding: "15px 0px",
      },
      chooseButton: {
        minWidth: "200px",
        border: `solid 1px ${colors.optionItem.border}`,
        backgroundColor: colors.optionItem.bg,
        fontSize: "1.2rem",
        padding: "5px 10px",
        color: colors.optionItem.text,
        cursor: "pointer",
      },
      loginButton: {
        textAlign: "center",
        padding: "0.5rem 1rem",
        margin: "1rem 0",
        fontSize: "1.2rem",
        boxShadow: "none",
        backgroundColor: colors.loginButton.bg,
        color: colors.loginButton.text,
        border: "none",
        borderRadius: "5px",
      },
    }

    const completionMessage = {
      authority: "Thank you! Updating resettlement locations database...",
      individual: "Thank you! Matching your preferences..."
    }

    let app
    if (this.state.view === "chooser") {
      app =
        <CenteredBlock>
          <div style={style.chooseButtonContainer}>
            <button onClick={this.viewHandler("authority")}
              style={style.chooseButton}>
              Refugee Council
            </button>
          </div>
          <div style={style.chooseButtonContainer}>
            <button onClick={this.viewHandler("individual")}
              style={style.chooseButton}>
              Individual
            </button>
          </div>
          <div style={style.chooseButtonContainer}>
            <button onClick={this.viewHandler("resettlement-agency")}
              style={style.chooseButton}>
              Resettlement Agency
            </button>
          </div>
        </CenteredBlock>
    } else {
      if (this.state.loginStatus === "logged-in") {
        if (this.state.view === "resettlement-agency") {
          app = <DatabaseApp />
        } else {
          app = <QuestionnaireApp token={this.state.token} />
        }
      } else {
        app =
          <CenteredBlock>
            <div style={{textAlign: "center"}}>
              <h4> Username </h4>
              <input style={{textAlign: "center"}} autoFocus type="text"
                value={this.state.username} onChange={this.usernameHandler}/>
              <h4> Password </h4>
              <input style={{textAlign: "center"}} type="password"
                value={this.state.password} onChange={this.passwordHandler}/>
              <br />
              <button style={style.loginButton}
                onClick={this.loginHandler}> Go </button>
            </div>
          </CenteredBlock>
      }
    }

    return(
      <Radium.StyleRoot>
        <div style={style.container}>
          <div style={style.header}>
            <h4 style={{textAlign: "center"}} onClick={this.homeClick}>
              The Resettlement Service
            </h4>
          </div>
          <div style={style.body}>
            {app}
          </div>
          <div style={style.footer}>
            <div style={style.footerLogos}>
              <img style={style.logo} src="refsay_logo.png" />
              <img style={style.logo} src="ml_logo.png" />
              <img style={style.logo} src="oxford_logo.png" />
            </div>
          </div>
        </div>
      </Radium.StyleRoot>
    )
  }
}

App = Radium(App)


ReactDOM.render(
  <App />,
  document.getElementById("react-app")
)
