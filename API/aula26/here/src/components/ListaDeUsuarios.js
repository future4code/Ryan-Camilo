import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const DeleteButton = styled.button`
display: inline;`

const ContainerLista = styled.div`
display: flex;
justify-content: center;
`

class ListaDeUsuarios extends React.Component {
    state = {
        listaDeUsuarios: []

    }

    getAllUsers = () => {
        return (axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "ryan-camilo-johnson"
                }
            }
            )          
            .then((response) =>{
                this.setState({ listaDeUsuarios: response.data });
            })
            .catch((err) =>{
                alert("Ocorreu um problema, tente novamente")
            })
        )}


    componentDidMount = () => {
        this.getAllUsers()

    };

    componentDidUpdate = () => {
        this.getAllUsers()
    }

    onClickDelete = (index) => {
        const id = (this.state.listaDeUsuarios[index].id)
        return (
            axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: {
                        Authorization: "ryan-camilo-johnson"
                    }
                }

            )
            .then((res)=>{
                alert("Usuário deletado com sucesso")
            })
        )
    }


    render() {

        return (
            <div className="">
                <h1>Lista de Usuários:</h1>
                {this.state.listaDeUsuarios.map((users, i) => {
                    return (
                        <ContainerLista>
                            <p key={i}>{users.name} <DeleteButton key={i} onClick={() => this.onClickDelete(i)}>Delete</DeleteButton></p>

                        </ContainerLista>
                    );
                })}
                <hr />
                <Link to="/criarconta" >Criar Conta</Link>
            </div>
        );
    }
}
export default ListaDeUsuarios;
