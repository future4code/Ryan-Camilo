import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './fotoperfil.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Ryan Camilo" 
          descricao="Oi, eu sou Ryan. Engenheiro Mecânico aspirante a Desenvolvedor. Sou bem curioso e programação sempre foi meu primeiro amor. Estou na luta para desvendar os mistérios do React e Node com meus colegas de estudo na Labenu"
        />
        
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Veja Mais - Clique Aqui"
        />

      <div className="MaisInfo" id="MaisInfo">
        <CardPequeno
          imagem="https://ifce.edu.br/aracati/colecoes/comunicacao/imagens/iconeemail.png/@@images/image.png"
          info="Email:"
          descinfo="gatinhomanhoso@bol.com.br"
          />
        <CardPequeno
          imagem="https://image.shutterstock.com/image-vector/location-icon-vector-pin-sign-600w-1342320968.jpg"
          info="Endereço"
          descinfo="Rua dos Bobos, número 0"
          />
       

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://seekvectorlogo.com/wp-content/uploads/2018/05/national-oilwell-varco-nov-vector-logo-small.png" 
          nome="NOV Flexibles" 
          descricao="Aprendiz de Lean Manufacturing" 
        />
        
        <CardGrande 
          imagem="http://images.educamaisbrasil.com.br/content/curso/instituicao/logo/g/go-geo.png" 
          nome="GoGeo Idiomas" 
          descricao="Professor de Inglês" 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
          imagem="https://pep.ucam-campos.br/wp-content/themes/mestrado_pep/img/logo-ucam-450x185.png"
          nome="Universidade Cândido Mendes"
          descricao="Engenharia Mecânica"
        />

        <CardGrande
          imagem="https://portal1.iff.edu.br/reitoria/diretorias-sistemicas/diretoria-de-comunicacao/assinatura-visual/png-vert-iff.png"
          nome="IFF"
          descricao="Curso técnico de Inglês e Informática"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
