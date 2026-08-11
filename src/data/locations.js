/**
 * Country / State / City location data.
 *
 * Structure:
 *   locations[country][state] = [cities...]
 *
 * Add more countries/states/cities here as needed in the future.
 */
const locations = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"],
    Delhi: ["New Delhi", "Dwarka", "Rohini", "Karol Bagh"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
    Telangana: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
  },
  "United States": {
    California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    Texas: ["Houston", "Dallas", "Austin", "San Antonio"],
    "New York": ["New York City", "Buffalo", "Rochester"],
    Florida: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    Illinois: ["Chicago", "Aurora", "Naperville"],
  },
  "United Kingdom": {
    England: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    Scotland: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
    Wales: ["Cardiff", "Swansea", "Newport"],
    "Northern Ireland": ["Belfast", "Derry"],
  },
  Australia: {
    "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
    Victoria: ["Melbourne", "Geelong", "Ballarat"],
    Queensland: ["Brisbane", "Gold Coast", "Cairns"],
    "Western Australia": ["Perth", "Bunbury"],
    "South Australia": ["Adelaide", "Mount Gambier"],
  },
  Canada: {
    Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton"],
    "British Columbia": ["Vancouver", "Victoria", "Kelowna"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    Alberta: ["Calgary", "Edmonton", "Red Deer"],
  },
  Japan: {
    Tokyo: ["Tokyo", "Hachioji", "Machida"],
    Osaka: ["Osaka", "Sakai", "Higashiosaka"],
    Kyoto: ["Kyoto", "Uji", "Kameoka"],
  },
  China: {
    Beijing: ["Beijing"],
    Shanghai: ["Shanghai", "Pudong"],
    Guangdong: ["Guangzhou", "Shenzhen", "Dongguan"],
  },
  "United Arab Emirates": {
    Dubai: ["Dubai", "Deira", "Jumeirah"],
    "Abu Dhabi": ["Abu Dhabi", "Al Ain"],
    Sharjah: ["Sharjah City"],
  },
  Singapore: {
    Singapore: ["Singapore"],
  },
  Brazil: {
    "São Paulo": ["São Paulo", "Campinas", "Santos"],
    "Rio de Janeiro": ["Rio de Janeiro", "Niterói"],
    Bahia: ["Salvador", "Feira de Santana"],
  },
  Mexico: {
    "Mexico City": ["Mexico City", "Iztapalapa"],
    Jalisco: ["Guadalajara", "Zapopan"],
    "Nuevo León": ["Monterrey", "San Nicolás"],
  },
   
};

export default locations;