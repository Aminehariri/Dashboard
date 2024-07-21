import logo from '../assets/react.svg'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='fixed_header'>
    <div>
    <Link to="/" className=""> <img src={logo} className="logo react" alt="React logo" /></Link>
    </div>
    <div>
      <p>Bienvenu sur votre  Tableau de Bord </p>
    </div>
    <div>
      <p className='full_name'>Amine HARIRI</p>
      <span className='statu'>En ligne</span>
    </div>
    </header>

  );
}