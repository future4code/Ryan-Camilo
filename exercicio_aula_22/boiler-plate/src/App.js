import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: 'Lavar Louça',
        completa: false // Indica se a tarefa está completa (true ou false)
      },{
        id: Date.now()+1, // Explicação abaixo
        texto: 'Limpar o carro',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem('tarefaLS', JSON.stringify(this.state.tarefas))

  };

  componentDidMount() {
    const lstorageItem = localStorage.getItem("tarefaLS")
    const parseStorage = JSON.parse(lstorageItem)
    console.log(parseStorage)
    if (parseStorage){
    this.setState({tarefas: parseStorage })}    
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // Explicação abaixo
      texto: this.state.inputValue,
      completa: false // Indica se a tarefa está completa (true ou false)
    }
    const copiaTarefa = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: copiaTarefa})

  }

  selectTarefa = (id) => {
    const listaTarefas = [...this.state.tarefas]
    const tarefaID = listaTarefas.map((array) => {
      if (array.id === id){
       array.completa = !array.completa}
        return array
      })
      this.setState({tarefas: tarefaID})
    }
    
  

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
       const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
