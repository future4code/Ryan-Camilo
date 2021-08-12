import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const DeleteButton = styled.button`
display: inline;`

const ItemDaLista = styled.p`
`
const ContainerLista = styled.div`
display: flex;
justify-content: center;
`

class ListaDeUsuarios extends React.Component {
  state = {
      listaDeUsuarios: []

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


  componentDidMount = () => {
    this.getAllUsers().then((response) => {
        console.log(response.data)
        this.setState({ listaDeUsuarios: response.data});
    });
  };

  onClickDelete = () => {
    return axios.delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
        {
            headers: {
              Authorization: "ryan-camilo-johnson"
            }
        }
    )
  }
  render(){

  return (
    <div className="">
      <h1>Lista de Usuários:</h1>
      {this.state.listaDeUsuarios.map((users, i) => {
          return (
          <ContainerLista>
            <p key={i}>{users.name} <DeleteButton onClick={this.onClickDelete}>Delete</DeleteButton></p>
            
          </ContainerLista>  
            );
        })}
        <hr/>
        <Link to="/criarconta" >Criar Conta</Link>
    </div>
  );
}
}
export default ListaDeUsuarios;
