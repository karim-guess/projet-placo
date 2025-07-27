
function navbar() {
  return (
    <div>
        <nav className="bg-neutral text-neutral-content p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">Mon Artisan</div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-white">Accueil</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#about" className="hover:text-white">À propos</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default navbar