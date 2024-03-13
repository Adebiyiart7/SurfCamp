export interface Instructors {
  name: string;
  image: any;
}

export interface CampListTrending {
  id: string;
  country: {
    name: string;
  };
  instructorCount: number;
  image: any;
  instructors: Instructors[];
}

const campListTrending: CampListTrending[] = [
  {
    id: "1",
    country: {
      name: "South Africa",
    },
    instructorCount: 4,
    image: require("../assets/images/tcamp1.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar1.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar2.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar3.jpg",
      },
    ],
  },
  {
    id: "2",
    country: {
      name: "Nigeria",
    },
    instructorCount: 4,
    image: require("../assets/images/tcamp2.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar4.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar5.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar6.jpg",
      },
    ],
  },
  {
    id: "3",
    country: {
      name: "Tanzania",
    },
    instructorCount: 8,
    image: require("../assets/images/tcamp3.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar2.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar4.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar6.jpg",
      },
    ],
  },
  {
    id: "4",
    country: {
      name: "Botswana",
    },
    instructorCount: 5,
    image: require("../assets/images/tcamp4.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar5.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar3.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar1.jpg",
      },
    ],
  },
  {
    id: "5",
    country: {
      name: "Namibia",
    },
    instructorCount: 4,
    image: require("../assets/images/tcamp5.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar3.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar5.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar4.jpg",
      },
    ],
  },
  {
    id: "6",
    country: {
      name: "Rwanda",
    },
    instructorCount: 6,
    image: require("../assets/images/tcamp6.jpg"),
    instructors: [
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar4.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar1.jpg",
      },
      {
        name: "Adeeyo J. A.",
        image: "../assets/images/avatar6.jpg",
      },
    ],
  },
];

export default campListTrending;
