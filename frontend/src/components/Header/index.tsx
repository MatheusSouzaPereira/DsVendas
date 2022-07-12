import './style.css'
import Logo from '../../assets/img/Logo.svg'
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="Logo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por Origi
                    <a href="https://google.com.br">Matheus Souza</a>
                </p>
            </div>
        </header>
    )
}

export default Header; 