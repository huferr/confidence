import Logo from '../../assets/logo.svg';
import './Header.styles.css'

export const Header = () => {
	return (
		<header>
		  <img src={Logo} alt="Logo" className="logo"/>
		  <h2>Confidence System Challenge</h2>
	  </header>
	)
}