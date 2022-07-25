import './styles.css';
import DownArrows from '../../assets/down-arrows.svg';
import Profile from '../../assets/profile.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardContacts from '../../components/CardContact';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return(
        <div className='body'>
            <Header />
            <div class="home">
                <div class="hero">
                    <div class="apresentacao">
                        <p class="p-apresentacao">
                            Olá, me chamo Alessandra Lamas Luisi e eu amo construir websites lindos
                        </p>
                        <a class="apresentacao__btn" href="#eu">
                            <img class="apresentacao__img" src={DownArrows} alt="seta para baixo" />
                            <span class="apresentacao__span">SOBRE MIM</span>
                        </a>
                    </div>
                </div>
                    <div id="eu" class="sobre">
                    <img class="img-sobre" src={Profile} alt="Foto perfil" />
                    <div class="sobre-mim">
                        <div class="sobre-mim__texto">
                            <h2 class="sobre-mim__h">Sobre mim</h2>
                            <p class="sobre-mim__p">
                                Sou uma desenvolvedor full-stack júnior, mas confesso ter preferência por front-end. Possuo
                                conhecimento em HTML, CSS, JavaScript, Node.js, SQL e React, mas posso me adaptar para qualquer
                                ferramenta se necessário. Moro em São Carlos-SP, mas tenho preferência por trabalho remoto e tenho.
                                Quando não estou codando, poderá me achar fora de casa. Eu adoro ouvir música, estar com pessoas,
                                praia e Sol. Eu vou amar se você der uma olhada no meu trabalho.
                            </p>
                        </div>
                        <a class="sobre-mim__btn" onClick={() => {navigate('/portifolio')}}>IR PARA PORTFOLIO</a>
                    </div>
                </div>
            </div>
            <CardContacts />
            <Footer />
        </div>
    );
}

export default Home;
