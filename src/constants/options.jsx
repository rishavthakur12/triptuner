export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 person",
  },

  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },

  {
    id: 3,
    title: "Family",
    desc: "A group of fun lovers",
    icon: "🏠",
    people: "3 to 5 people",
  },

  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛵️",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 1,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about Money",
    icon: "💸",
  },
];

export const AI_PROMPT = `Generate Travel Plan for Location: {location} for {totalDays} Days for {traveller} 
          with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, 
          Price, hotel image url, geo coordinates, rating, descriptions and suggest 
          itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, 
          ticket Pricing, rating, Time travel each of the location for {totalDays} days with each
           day plan with best time to visit in JSON format.`;