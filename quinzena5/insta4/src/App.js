import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovosPosts = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 1em;

  input{
    border: none;
    border-bottom: 1px solid gray;
  }

  button{
    border-radius: 10px;
    padding: 8px;
    box-shadow: 5px 5px #333;
    background-color: #FF3333;
    color: white;
    font-size: 20px
    } 
  `

class App extends React.Component {
  state = {
    posts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
    },
    {
      nomeUsuario: 'Renato',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151',
    },
    {
      nomeUsuario: 'Leandro',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/200/152',
    }],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  onChangeInputNomeUsuario = (event) => { this.setState({ valorInputNomeUsuario: event.target.value }) }
  onChangeInputFotoUsuario = (event) => { this.setState({ valorInputFotoUsuario: event.target.value }) }
  onChangeInputFotoPost = (event) => {this.setState({ valorInputFotoPost: event.target.value })}
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost }

    const organizacaoPost = [novoPost, ...this.state.posts]
    this.setState({posts: organizacaoPost, valorInputFotoPost:"", valorInputFotoUsuario:"", valorInputNomeUsuario:""})}


  render() {
    const listaDePosts = this.state.posts.map((param, indice) => {
      return (<Post nomeUsuario={param.nomeUsuario} fotoUsuario={param.fotoUsuario} fotoPost={param.fotoPost} />)


    })
    return (


      <MainContainer>
        <NovosPosts>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuario"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da Foto de Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />
          <button onClick={this.adicionaPost}>Add Post</button>
        </NovosPosts>
        {listaDePosts}
        {/*     <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Renato'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Leandro'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'} />*/}
      </MainContainer>

    );
  }
}

export default App;
