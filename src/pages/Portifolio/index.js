import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardContacts from '../../components/CardContact';
import Agenda from '../../assets/agenda.png';
import CubosFlix from '../../assets/cubosFlix.png';
import Dindin from '../../assets/dindin.png';
import PrimeiroPort from '../../assets/primeiroPort.png';
import { useNavigate } from 'react-router-dom';

function Portifolio() {
    const navigate = useNavigate();

    return(
        <div className='body'>
            <Header />
            <div class="portfolio">
                <img class="img-portfolio" src={Agenda} alt="Portfolio Agenda Pessoal" />
                <div class="container">
                    <div class="container__texto">
                        <h2 class="container__h">Agenda Pessoal</h2>
                        <p class="container__p">
                            Esse projeto foi desenvolvido em React com consumo de uma API online. Possui rotas de login e autenticação do usuário, além de layout fluido e responsivo.
                        </p>
                    </div>
                    <button class="container__btn" onClick={() => {navigate('/portifolio/projects/agenda')}}>VER PORTFOLIO</button>
                </div>
            </div>
            <div class="portfolio">
                <div class="container">
                    <div class="container__texto">
                        <h2 class="container__h">Cubos Flix</h2>
                        <p class="container__p">
                            Esse projeto foi desenvolvido com JavaScript, HTML e CSS, utilizando DOM. Há consumo de uma API em Node.js (disponibilizada no repositório), porém não foi desenvolvida por mim.
                        </p>
                    </div>
                    <button class="container__btn" onClick={() => {navigate('/portifolio/projects/cubos-flix')}}>VER PORTFOLIO</button>
                </div>
                <img class="img-portfolio" src={CubosFlix} alt="Portfolio Cubos Flix" />
            </div>
            <div class="portfolio">
                <img class="img-portfolio" src={Dindin} alt="Portfolio Dindin" />
                <div class="container">
                    <div class="container__texto">
                        <h2 class="container__h">Controle de Finanças</h2>
                        <p class="container__p">
                            Esse projeto foi desenvolvido em React com consumo de uma API desenvolvida em Node.js e o banco de dados em PostgreSQL. 
                        </p>
                    </div>
                    <button class="container__btn" onClick={() => {navigate('/portifolio/projects/financas')}}>VER PORTFOLIO</button>
                </div>
            </div>
            <div class="portfolio">
                <div class="container">
                    <div class="container__texto">
                        <h2 class="container__h">Primeiro Portifólio</h2>
                        <p class="container__p">
                            Esse projeto foi desenvolvido puramente com HTML e CSS. O meu desafio foi recriá-lo agora usando o React e fazer o deploy na Netlify, por isso fiz questão de colocar sua primeira versão aqui.
                        </p>
                    </div>
                    <button class="container__btn" onClick={() => {navigate('/portifolio/projects/port')}}>VER PORTFOLIO</button>
                </div>
                <img class="img-portfolio" src={PrimeiroPort} alt="Primeiro Portfolio" />
            </div>
            <CardContacts />
            <Footer />
        </div>
    );
}

export default Portifolio;