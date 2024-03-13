import camp1 from "../assets/images/camp1.jpg";
import camp2 from "../assets/images/camp2.jpg";
import camp3 from "../assets/images/camp3.jpg";
import camp4 from "../assets/images/camp4.jpg";
import camp5 from "../assets/images/camp5.jpg";
import camp6 from "../assets/images/camp6.jpg";

export interface CampList {
  id: string;
  country: {
    name: string;
  };
  flightTimeInHrs: number;
  image: any;
}

const campList: CampList[] = [
  {
    id: "1",
    country: {
      name: "South Africa",
    },
    flightTimeInHrs: 4,
    image: require("../assets/images/camp1.jpg"),
  },
  {
    id: "2",
    country: {
      name: "Nigeria",
    },
    flightTimeInHrs: 4,
    image: require("../assets/images/camp2.jpg"),
  },
  {
    id: "3",
    country: {
      name: "Tanzania",
    },
    flightTimeInHrs: 8,
    image: require("../assets/images/camp3.jpg"),
  },
  {
    id: "4",
    country: {
      name: "Botswana",
    },
    flightTimeInHrs: 5,
    image: require("../assets/images/camp4.jpg"),
  },
  {
    id: "5",
    country: {
      name: "Namibia",
    },
    flightTimeInHrs: 4,
    image: require("../assets/images/camp5.jpg"),
  },
  {
    id: "6",
    country: {
      name: "Rwanda",
    },
    flightTimeInHrs: 6,
    image: require("../assets/images/camp6.jpg"),
  },
];

export default campList;
