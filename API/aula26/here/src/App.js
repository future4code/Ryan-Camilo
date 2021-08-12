import React from 'react';
import axios from "axios";
import CriarUsuario from './components/CriarUsuario'
import ListaDeUsuarios from './components/ListaDeUsuarios'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

const AppCss = styled.div`
text-align: center;
`

class App extends React.Component {
  state = {
    pagina: 1
  }

  getAllUsers = () => {
    return axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "ryan-camilo-johnson"
        }
      }
    )

  }

  componentDidUpdate = () => {

  }

  render() {
  return (
      <AppCss>
        
        <h1>LabenUsers</h1>
        <Router>
          <Switch>
            <Route exact path="/criarconta" component={CriarUsuario} render ={(props) => <CriarUsuario {...props} funcaoGetUsers={this.getAllUsers}/> } />
            <Route exact path="/lista" component={ListaDeUsuarios} render ={(props) => <ListaDeUsuarios {...props} funcaoGetUsers={this.getAllUsers}/>} />
            <Redirect to ="/criarconta"/>
          </Switch>
        </Router>
      </AppCss>
    );
  }
}
export default App;
