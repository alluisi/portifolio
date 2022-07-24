import './styles.css';
import logoLight from '../../assets/logo-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return(
        <footer class="footer">
            <div class="footer-container">
                <nav class="nav-footer">
                    <img class="nav-footer" src={logoLight} alt="Logo clara" />
                    <a class="nav-footer pointer" onClick={() => {navigate('/home')}}>HOME</a>
                    <a class="nav-footer pointer" onClick={() => {navigate('/portifolio')}}>PORTFOLIO</a>
                    <a class="nav-footer pointer" onClick={() => {navigate('/contact')}}>CONTATO</a>
                </nav>
                <div class="social">
                    <a class="social pointer" href="https://github.com/alluisi" target="_blank">
                        <img src={githubLight} alt="GitHub" />
                    </a>
                    <a class="social pointer" href="https://www.linkedin.com/in/alessandra-lamas-luisi-64b8b438/" target="_blank">
                        <img src={linkedinLight} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
