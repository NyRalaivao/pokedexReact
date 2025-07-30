
import imagePokemon from "../assets/images/arcticons.png";
import imageDroite from "../assets/images/arcticons_right.png";


const Footer = () => {
  return (
    <footer className="mb-4">
      <div className="container mx-auto">
          <div className="w-auto h-1 bg-transparent"></div>
        </div>
        <div className="flex justify-between items-center mb-4 px-4">
          <img src={imagePokemon} alt="Pokemon TCG" className="h-20 w-auto" />
          <img src={imageDroite} alt="Pokemon Unite" className="h-20 w-auto" />
        </div>
    </footer>
  );
  }

export default Footer;
