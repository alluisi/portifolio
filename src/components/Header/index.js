import './styles.css';
import logoDark from '../../assets/logo-dark.svg';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    return(
        <header class="header">
            <div class="header-container">
                <div class="logo">
                    <img src={logoDark} alt="Logo escura"/>
                </div>
                <nav class="nav-header">
                    <a
                        class={location.pathname.includes('home') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/home')}}
                    >HOME</a>
                    <a
                        class={location.pathname.includes('portifolio' || 'projects') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/portifolio')}}
                    >PORTFOLIO</a>
                    <a
                        class={location.pathname.includes('contact') ? 'nav-header color-link' : 'nav-header'}
                        onClick={() => {navigate('/contact')}}
                    >CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
