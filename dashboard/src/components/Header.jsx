import logo from '../assets/react.svg'
export default function Header() {
  return (
    <header className='fixed_header'>
    <div>
      <img src={logo} className="logo react" alt="React logo" />
    </div>
    <div>
      <p>Bienvenu sur votre espace admin </p>
    </div>
    <div>
      <p className='full_name'>Amine HARIRI</p>
      <span className='statu'>En ligne</span>
    </div>
    </header>

  );
}