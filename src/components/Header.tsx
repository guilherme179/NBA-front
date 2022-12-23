import logo from '../images/basketball.png';

export function Header() {
    return(
        <div className="bg-black h-navbar shadow-0.5x text-white items-center flex justify-center pt-7">
            <img className="p-2" src={logo} alt="Logo nba" width={150} />
        </div>
    );
}