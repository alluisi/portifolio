import './styles.css';
import primeiroPort1 from '../../assets/primeiroPort1.png';
import primeiroPort2 from '../../assets/primeiroPort2.png';
import primeiroPort3 from '../../assets/primeiroPort3.png';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardContacts from '../../components/CardContact';

function Projects() {
    return(
        <div className='body'>
            <Header />
            <div class="projects">
                <img class="hero" src={primeiroPort1} alt="Hero" />
                <div class="descricao">
                    <div class="aside">
                        <h2 class="aside__titulo">Manage</h2>
                        <p class="aside__p1">
                            Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS
                            Grid e JavaScript para as áreas interativas, como o slider de testimoniais.
                        </p>
                        <p class="aside__p-verde">
                            Interaction Design / Front End Development
                        </p>
                        <p class="aside__p-verde">
                            HTML / CSS / JS
                        </p>
                        <button class="aside__btn">VISITAR</button>
                    </div>
                    <div class="projeto">
                        <h4 class="projeto__titulo">Projeto</h4>
                        <p class="projeto__p">
                            Este projeto foi um desafio de front-end do Frontend Mentor. É uma plataforma que te faz práticar construindo websites
                            a partir de um design e casos de usuário. Cada desafio contém designs mobile e desktop para ilustrar
                            como o website seria em diferentes tamanhos de tela. Criar esses projetos me ajudou a refinar meu fluxo
                            de trabalho e resolver problemas de código da vida real. Eu aprendi algo novo com cada projeto, me
                            ajudando a melhorar e adaptar meu estilo.
                        </p>
                        <h4 class="projeto__titulo">Previews Estáticos</h4>
                        <img class="projeto__img" src={primeiroPort2} alt="Preview 1" />
                        <img class="projeto__img" src={primeiroPort3} alt="Preview 2" />
                    </div>
                </div>
                <div class="links">
                    <div class="direcional">
                        <div class="direcional-seta">
                            <button class="seta">
                                <img src={arrowLeft} alt="Seta para esquerda" />
                            </button>
                            <div class="direcional-texto">
                                <h3 class="direcional-h">Fylo</h3>
                                <span class="direcional-span">Projeto Anterior</span>
                            </div>
                        </div>
                        <div class="direcional-seta">
                            <div class="direcional-texto">
                                <h3 class="direcional-h">Bookmark</h3>
                                <span class="direcional-span">Próximo Projeto</span>
                            </div>
                            <button class="seta">
                                <img  src={arrowRight} alt="Seta para direita" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CardContacts />
            <Footer />
        </div>
    );
}

export default Projects;