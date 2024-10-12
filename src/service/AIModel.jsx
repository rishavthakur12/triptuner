import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple 
          with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, 
          Price, hotel image url, geo coordinates, rating, descriptions and suggest 
          itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, 
          ticket Pricing, rating, Time travel each of the location for 3 days with each
           day plan with best time to visit in JSON format.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
"hotelOptions": [
    {
      "hotelName": "The D Las Vegas",
      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",
      "hotelPrice": "From $40/night",
      "hotelImageURL": "https://www.the-d.com/images/default-source/hotel/the-d-las-vegas-hotel-exterior.jpg",
      "hotelGeoCoordinates": "36.1696° N, 115.1403° W",
      "hotelRating": "3.5/5",
      "hotelDescription": "Located on Fremont Street, this hotel offers a vibrant atmosphere with access to live entertainment, a casino, and restaurants."
    },
    {
      "hotelName": "Golden Nugget Las Vegas",
      "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",
      "hotelPrice": "From $50/night",
      "hotelImageURL": "https://www.goldennugget.com/media/4360/golden-nugget-las-vegas-hotel-exterior.jpg",
      "hotelGeoCoordinates": "36.1692° N, 115.1409° W",
      "hotelRating": "4/5",
      "hotelDescription": "A classic Las Vegas hotel with a focus on luxury and entertainment."
    },
    {
      "hotelName": "Main Street Station Casino, Brewery & Hotel",
      "hotelAddress": "200 N. Main Street, Las Vegas, NV 89101",
      "hotelPrice": "From $35/night",
      "hotelImageURL": "https://www.mainstreetstationcasino.com/media/images/hotel-exterior.jpg",
      "hotelGeoCoordinates": "36.1699° N, 115.1397° W",
      "hotelRating": "3.5/5",
      "hotelDescription": "This hotel boasts an old-world charm with a casino, brewery, and a variety of dining options."
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "plan": [
        {
          "placeName": "Fremont Street Experience",
          "placeDetails": "Explore the vibrant Fremont Street Experience, walk under the canopy of LED lights, and enjoy free live entertainment.",
          "placeImageURL": "https://www.fremontstreetexperience.com/wp-content/uploads/2020/06/Fremont-Street-Experience-Aerial-View-Fremont-Street-Experience.jpg",
          "placeGeoCoordinates": "36.1699° N, 115.1399° W",
          "ticketPricing": "Free",
          "placeRating": "4.5/5",
          "time": "10:00 AM"
        },
        {
          "placeName": "Heart Attack Grill",
          "placeDetails": "Indulge in some outrageous burger creations at this themed restaurant.",
          "placeImageURL": "https://www.heartattackgrill.com/wp-content/uploads/2016/03/IMG_1030.jpg",
          "placeGeoCoordinates": "36.1686° N, 115.1400° W",
          "ticketPricing": "Average $15 - $25 per meal",
          "placeRating": "4/5",
          "time": "12:00 PM"
        },
        {
          "placeName": "Golden Nugget Casino",
          "placeDetails": "Explore the casino, see the giant aquarium, and enjoy the luxurious atmosphere.",
          "placeImageURL": "https://www.goldennugget.com/media/4441/golden-nugget-las-vegas-aquarium-exterior.jpg",
          "placeGeoCoordinates": "36.1692° N, 115.1409° W",
          "ticketPricing": "Free (casino access)",
          "placeRating": "4/5",
          "time": "2:00 PM"
        },
        {
          "placeName": "The Neon Museum",
          "placeDetails": "Step back in time and discover a fascinating collection of iconic Las Vegas neon signs.",
          "placeImageURL": "https://www.neonmuseum.org/wp-content/uploads/2022/02/Neon-Museum-Front-Entrance.jpg",
          "placeGeoCoordinates": "36.1655° N, 115.1484° W",
          "ticketPricing": "$25 per adult",
          "placeRating": "4.5/5",
          "time": "5:00 PM"
        }
      ]
    },
    {
      "day": 2,
      "plan": [
        {
          "placeName": "Red Rock Canyon National Conservation Area",
          "placeDetails": "Experience stunning rock formations, hike scenic trails, and enjoy the natural beauty just outside the city.",
          "placeImageURL": "https://www.nps.gov/redr/learn/nature/images/red-rock-canyon-01_1.jpg",
          "placeGeoCoordinates": "36.1876° N, 115.2999° W",
          "ticketPricing": "$15 per vehicle",
          "placeRating": "4.5/5",
          "time": "9:00 AM"
        },
        {
          "placeName": "The LINQ Promenade",
          "placeDetails": "Stroll down the promenade, enjoy free entertainment, and take a ride on the High Roller Observation Wheel.",
          "placeImageURL": "https://www.caesars.com/linq/media/linq-promenade.jpg",
          "placeGeoCoordinates": "36.1164° N, 115.1700° W",
          "ticketPricing": "High Roller tickets start at $25 per adult",
          "placeRating": "4/5",
          "time": "1:00 PM"
        },
        {
          "placeName": "Bellagio Conservatory & Botanical Garden",
          "placeDetails": "Admire the beautiful floral displays and experience a stunning visual spectacle.",
          "placeImageURL": "https://www.bellagio.com/content/dam/bellagio/homepage-carousel/cons-bot/carousel-676.jpg",
          "placeGeoCoordinates": "36.1187° N, 115.1731° W",
          "ticketPricing": "Free",
          "placeRating": "4.5/5",
          "time": "6:00 PM"
        }
      ]
    },
    {
      "day": 3,
      "plan": [
        {
          "placeName": "The Strip",
          "placeDetails": "Walk along the iconic Strip, enjoy the dazzling lights, and take photos of the famous hotels.",
          "placeImageURL": "https://www.visitlasvegas.com/media/1313/las-vegas-strip-at-night.jpg",
          "placeGeoCoordinates": "36.1039° N, 115.1721° W",
          "ticketPricing": "Free",
          "placeRating": "5/5",
          "time": "10:00 AM"
        },
        {
          "placeName": "The Forum Shops at Caesars",
          "placeDetails": "Window shop or find great deals at this upscale shopping mall.",
          "placeImageURL": "https://www.caesars.com/content/dam/caesars/las-vegas/entertainment-dining/shopping/forum-shops/forum-shops-las-vegas-exterior-day.jpg",
          "placeGeoCoordinates": "36.1031° N, 115.1716° W",
          "ticketPricing": "Free",
          "placeRating": "4/5",
          "time": "12:00 PM"
        },
        {
          "placeName": "The Mirage Volcano",
          "placeDetails": "Watch the iconic free volcano show with fire, music, and water effects.",
          "placeImageURL": "https://www.mirage.com/media/1956/mirage-volcano-show-01.jpg",
          "placeGeoCoordinates": "36.1138° N, 115.1731° W",
          "ticketPricing": "Free",
          "placeRating": "4/5",
          "time": "2:00 PM"
        },
        {
          "placeName": "The LINQ Promenade",
          "placeDetails": "Enjoy one last stroll through the promenade and enjoy some street performers.",
          "placeImageURL": "https://www.caesars.com/linq/media/linq-promenade.jpg",
          "placeGeoCoordinates": "36.1164° N, 115.1700° W",
          "ticketPricing": "Free",
          "placeRating": "4/5",
          "time": "5:00 PM"
        }
      ]
    }
  ]
}`,
        },
      ],
    },
  ],
});
