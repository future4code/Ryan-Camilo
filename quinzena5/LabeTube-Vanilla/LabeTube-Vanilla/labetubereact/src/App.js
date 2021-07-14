import './App.css';
import logo  from "./logo.png";
import homelogo from "./home.png";

function App() {
  const titulo = "Título do Vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}
  return (
    <div>  
      <div className="tela-inteira">
            <header>
              <div className="canto-esquerdo-header">
                <img src={logo} alt="logo labenu" id="logo-labenu" />
                <h1>Lab Tube</h1>
              </div>
                <input type="text" placeholder="Busca" id="campoDeBusca" />
                
            </header>

            <main>
                <nav className="menu-vertical">
                    <ul>
                        <li className="botoes-meunu-vertical"> <img src={homelogo} alt="home icon"/>Início</li>
                        <li className="botoes-meunu-vertical"><img src={homelogo} alt="home icon"/>Em alta</li>
                        <li className="botoes-meunu-vertical"><img src={homelogo} alt="home icon"/>Inscrições</li>
                        <hr/>
                        <li className="botoes-meunu-vertical"><img src={homelogo} alt="home icon"/>Originais</li>
                        <li className="botoes-meunu-vertical"><img src={homelogo} alt="home icon"/>Histórico</li>
                    </ul>
                </nav>

                <section className="painel-de-videos">
                    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=2 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=3 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=4 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=5 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=6 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=7 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=8 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                </section>
            </main>

            <footer>
                <h4><i>LabTube by @RyanCamiloDev - 2021 &reg;</i></h4>
            </footer>
        </div>

    </div>

  );
}

export default App;
