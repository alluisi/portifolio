import './styles.css';
import Agenda1 from '../../assets/agenda1.png';
import Agenda2 from '../../assets/agenda2.png';
import Agenda3 from '../../assets/agenda3.png';
import CubosFlix1 from '../../assets/cubosFlix.png';
import CubosFlix2 from '../../assets/cubosFlix2.png';
import CubosFlix3 from '../../assets/cubosFlix3.png';
import Dindin1 from '../../assets/dindin1.png';
import Dindin2 from '../../assets/dindin2.png';
import Dindin3 from '../../assets/dindin3.png';
import primeiroPort1 from '../../assets/primeiroPort1.png';
import primeiroPort2 from '../../assets/primeiroPort2.png';
import primeiroPort3 from '../../assets/primeiroPort3.png';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardContacts from '../../components/CardContact';
import { useState } from 'react';

const agenda = {
    titulo: "Agenda Pessoal",
    imagem1: Agenda1,
    imagem2: Agenda2,
    imagem3: Agenda3,
    resumo: "",
    tecnologias: "",
    descricao: "",
    anterior: "Primeiro Portifólio",
    proximo: "Cubos Flix"
}
const cubosFlix = {
    titulo: "Cubos Flix",
    imagem1: CubosFlix1,
    imagem2: CubosFlix2,
    imagem3: CubosFlix3,
    resumo: "",
    tecnologias: "",
    descricao: "",
    anterior: "Agenda Pessoal",
    proximo: "Controle de Finanças"
}
const financas = {
    titulo: "Controle de finanças",
    imagem1: Dindin1,
    imagem2: Dindin2,
    imagem3: Dindin3,
    resumo: "",
    tecnologias: "",
    descricao: "",
    anterior: "Cubos Flix",
    proximo: "Primeiro Portifólio"
}
const primeiroPort = {
    titulo: "Primeiro Portifólio",
    imagem1: primeiroPort1,
    imagem2: primeiroPort2,
    imagem3: primeiroPort3,
    resumo: "",
    tecnologias: "",
    descricao: "",
    anterior: "Controle de Finanças",
    proximo: "Agenda Pessoal"
}

function Projects() {
    const [titulo, setTitulo] = useState();
    const [imagem1, setImagem1] = useState();
    const [imagem2, setImagem2] = useState();
    const [imagem3, setImagem3] = useState();
    const [resumo, setResumo] = useState();
    const [tecnologias, setTecnologias] = useState();
    const [descricao, setDescricao] = useState();
    const [anterior, setAnterior] = useState();
    const [proximo, setProximo] = useState();

    return(
        <div className='body'>
            <Header />
            <div class="projects">
                <img class="hero" src={imagem1} alt="Hero" />
                <div class="descricao">
                    <div class="aside">
                        <h2 class="aside__titulo">{titulo}</h2>
                        <p class="aside__p1">
                            {resumo}
                        </p>
                        <p class="aside__p-verde">
                            {tecnologias}
                        </p>
                        <button class="aside__btn">VISITAR</button>
                    </div>
                    <div class="projeto">
                        <h4 class="projeto__titulo">Projeto</h4>
                        <p class="projeto__p">
                            {descricao}
                        </p>
                        <h4 class="projeto__titulo">Previews Estáticos</h4>
                        <img class="projeto__img" src={imagem2} alt="Preview 1" />
                        <img class="projeto__img" src={imagem3} alt="Preview 2" />
                    </div>
                </div>
                <div class="links">
                    <div class="direcional">
                        <div class="direcional-seta">
                            <button class="seta">
                                <img src={arrowLeft} alt="Seta para esquerda" />
                            </button>
                            <div class="direcional-texto">
                                <h3 class="direcional-h">{anterior}</h3>
                                <span class="direcional-span">Projeto Anterior</span>
                            </div>
                        </div>
                        <div class="direcional-seta">
                            <div class="direcional-texto">
                                <h3 class="direcional-h">{proximo}</h3>
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