
import imagePokemon from "../assets/images/arcticons.png";
import imageDroite from "../assets/images/arcticons_right.png";


const Footer = () => {
  return (
    <footer className="py-2 bg-gray-100">
      <div className="container mx-auto">
          <div className="w-auto h-1 bg-transparent"></div>
        </div>
        <div className="flex justify-between items-center mt-2 px-4">
          <img src={imagePokemon} alt="Pokemon TCG" className="h-12 w-auto" />
          <img src={imageDroite} alt="Pokemon Unite" className="h-12 w-auto" />
        </div>
    </footer>
  );
  }

export default Footer;
