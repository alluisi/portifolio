import './styles.css';
import { useNavigate } from 'react-router-dom';

function CardContacts() {
    const navigate = useNavigate();

    return(
        <div class="contato">
            <div class="contato-container">
                <h1 class="h-contato">Interessado(a) em fazer projetos comigo?</h1>
                <a class="btn-contato" onClick={() => {navigate('/contact')}}>CONTATO</a>
            </div>
        </div>
    )
}

export default CardContacts;