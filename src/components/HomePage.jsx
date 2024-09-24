// import gambar0 from "../public/gallery-venue-1.jpg"
import gambar1 from "../assets/images/signature-bebek.jpg"
import gambar2 from "../assets/images/signature-ikan-bakar-paket.jpg"
import gambar3 from "../assets/images/signature-cendol.jpg"
import gambar4 from "../assets/images/signature-melodi-kemangi-new.jpg"

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-cover bg-center h-96 md:h-screen bg-[url('./assets/images/gallery-venue-1.jpg')]">
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">Welcome to DRestaurant</h1>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 leading-loose">
        DRestaurant celebrates authentic Indonesian cuisine in the best possible way with a menu that takes guests on a flavourful journey across the archipelago. The venue itself is a customized Javanese joglo designed to recreate the cultural nuance of a bygone era. Nestled within a tropical garden, DRestaurant is the perfect spot for an intimate or to dine socially with family and friends.
        </p>
      </div>

      <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="bg-white shadow-md p-4 rounded">
          <img src={gambar1} alt="Dish 1" className="w-full h-40 md:h-48 object-cover rounded"/>
          <h3 className="text-xl font-bold mt-4">Bebek Panggang Mengkudus</h3>
          <p className="text-gray-600">traditional grill smoky duck serves with minced chicken skewer,  clear chicken soup, Indonesian vegetables, followed by purple sweet potato with palm sugar  and grated coconut</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <img src={gambar2} alt="Dish 2" className="w-full h-40 md:h-48 object-cover rounded"/>
          <h3 className="text-xl font-bold mt-4">Paket Ikan Bakar Jimbaran</h3>
          <p className="text-gray-600">grilled marinated snapper served with clam, water spinach, sambal and rice</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <img src={gambar3} alt="Dish 3" className="w-full h-40 md:h-48 object-cover rounded"/>
          <h3 className="text-xl font-bold mt-4">Cendol Ngangenin</h3>
          <p className="text-gray-600">cendol, kue lumpur, kolak pisang served with coconut ice cream</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <img src={gambar4} alt="Dish 3" className="w-full h-40 md:h-48 object-cover rounded"/>
          <h3 className="text-xl font-bold mt-4">Melodi Kemangi</h3>
          <p className="text-gray-600">home made healthy drink perfect combination of kemangi leaf with lychee juice, sweet sour juice and a lot of good benefits as natural antibiotic</p>
        </div>
      </div>
  </div>
  );
};

export default HomePage