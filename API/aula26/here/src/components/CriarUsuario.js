import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

class CriarUsuario extends React.Component {
  state = {
    listaDeUsuarios: [],
    inputEmail :"",
    inputNome: ""
  }

onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
}

onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
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


onClickCriarUsuario = () => {
    return axios
        .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {

            "name": (this.state.inputNome),
            "email": (this.state.inputEmail)

        },
        {
            headers: {
                Authorization: 'ryan-camilo-johnson'
            }           
        }
        )
        .then (()=>{
            this.getAllUsers().then((Response) => {
            this.setState({inputNome: "", inputEmail:""})
            console.log(Response.data.result)
            })
        })}
    /*
    let arraySub = [...this.state.listaDeUsuarios]
    arraySub.push({nome: this.state.inputNome, email: this.state.inputEmail})
    this.setState({listaDeUsuarios: arraySub})
    */
    

  render(){
      return (
    <div className="">
      <h1>Criar Conta</h1>
      <input placeholder='Nome' type = "text" value={this.state.inputNome} onChange={this.onChangeInputNome}/>
      <input placeholder='E-mail' type ="email" value={this.state.inputEmail} onChange={this.onChangeInputEmail}/>
      <button onClick={this.onClickCriarUsuario}>Criar</button>
      <Link to="/lista" >Lista de Usuarios</Link>
    </div>
  );
}
}
export default CriarUsuario;
