import React, { useState } from 'react';
import './HomePage.css';

const hotelsData = [
  { id: 1, name: "Luxury Palace", description: "Experience royalty in the lap of luxury.", imageURL: "https://via.placeholder.com/150" },
  { id: 2, name: "Serene Retreat", description: "Find peace and tranquility amidst nature.", imageURL: "https://via.placeholder.com/150" },
  { id: 3, name: "Urban Escape", description: "Discover the heartbeat of the city.", imageURL: "https://via.placeholder.com/150" },
  { id: 4, name: "Beachside Bliss", description: "Wake up to the sound of waves.", imageURL: "https://via.placeholder.com/150" },
  { id: 5, name: "Mountain Haven", description: "Embrace adventure with breathtaking views.", imageURL: "https://via.placeholder.com/150" },
  { id: 6, name: "Rustic Charm", description: "Cherish simplicity and rustic beauty.", imageURL: "https://via.placeholder.com/150" },
  { id: 1, name: "Luxury Palace", description: "Experience royalty in the lap of luxury.", imageURL: "https://via.placeholder.com/150" },
  { id: 2, name: "Serene Retreat", description: "Find peace and tranquility amidst nature.", imageURL: "https://via.placeholder.com/150" },
  { id: 3, name: "Urban Escape", description: "Discover the heartbeat of the city.", imageURL: "https://via.placeholder.com/150" },
  { id: 4, name: "Beachside Bliss", description: "Wake up to the sound of waves.", imageURL: "https://via.placeholder.com/150" },
  { id: 5, name: "Mountain Haven", description: "Embrace adventure with breathtaking views.", imageURL: "https://via.placeholder.com/150" },
  { id: 6, name: "Rustic Charm", description: "Cherish simplicity and rustic beauty.", imageURL: "https://via.placeholder.com/150" },
  { id: 1, name: "Luxury Palace", description: "Experience royalty in the lap of luxury.", imageURL: "https://via.placeholder.com/150" },
  { id: 2, name: "Serene Retreat", description: "Find peace and tranquility amidst nature.", imageURL: "https://via.placeholder.com/150" },
  { id: 3, name: "Urban Escape", description: "Discover the heartbeat of the city.", imageURL: "https://via.placeholder.com/150" },
  { id: 4, name: "Beachside Bliss", description: "Wake up to the sound of waves.", imageURL: "https://via.placeholder.com/150" },
  { id: 5, name: "Mountain Haven", description: "Embrace adventure with breathtaking views.", imageURL: "https://via.placeholder.com/150" },
  { id: 6, name: "Rustic Charm", description: "Cherish simplicity and rustic beauty.", imageURL: "https://via.placeholder.com/150" },
];

const detailedDescriptions = {
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  "Luxury Palace": "Indulge in the opulence of Luxury Palace where every aspect of your stay is designed to provide you with royal treatment. From spacious suites adorned with elegant furnishings to personalized services tailored to meet your every need, Luxury Palace offers a truly lavish experience. Enjoy gourmet dining at our world-class restaurants, rejuvenate your senses at our luxurious spa, or simply bask in the splendor of our exquisite surroundings.",
  "Serene Retreat": "Escape to the tranquility of Serene Retreat, where nature's beauty meets luxurious comfort. Nestled amidst lush greenery and scenic landscapes, Serene Retreat offers a peaceful sanctuary away from the hustle and bustle of city life. Immerse yourself in relaxation with yoga sessions overlooking breathtaking views, indulge in organic cuisine crafted from locally sourced ingredients, or embark on outdoor adventures exploring nearby hiking trails and picturesque lakes.",
  // Add detailed descriptions for other hotels
};

const HomePage = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isRoomBooked, setIsRoomBooked] = useState(false);

  const handleBookNow = () => {
    setIsRoomBooked(true);
  };

  const handleDetails = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseDialog = () => {
    setSelectedHotel(null);
  };

  const handleClosePopup = () => {
    setIsRoomBooked(false);
  };

  return (
    <div>
      <h1>Welcome to Aziz Hotels!</h1>
      <div className="hotel-grid">
        {hotelsData.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.imageURL} alt={hotel.name} />
            <div>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <div className="button-container">
                <button className="book-now"onClick={handleBookNow}>Book Now</button>
                <button className="details" onClick={() => handleDetails(hotel)}>Details</button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Details Dialog */}
      {selectedHotel && (
        <div className="dialog">
          <div className="dialog-content">
            <h2>{selectedHotel.name}</h2>
            <p>{detailedDescriptions[selectedHotel.name] || selectedHotel.description}</p>
            
            <div className="popUp-button-container">
            <button className="book-now"onClick={handleBookNow}>Book Now</button>
            <button className="close" onClick={handleCloseDialog}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Room Booked Popup */}
      {isRoomBooked && (
        <div className="popup">
          <div className="popup-content">
            <p>Congratulations! Your hotel room is booked!</p>
            <button className="close" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
