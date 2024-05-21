const timelineMock = [
  {
    id: 1,
    type: "edu",
    position: "Unreal Engine 5 Bootcamp",
    entity: "Laba - l-a-b-a.pl",
    description: `Game-dev is one of my hobbies. This bootcamp covers everything about games development with UE5.
    It starts from C++ language learning module. However, some of the bootcamp students are highy skilled in C++ willing to learn more about UE5.
    This course ends with internal game jam where teams are going to present their game made during bootcamp. Being a part of the bootcamp gives me opportunity to not only gain deeper knowledge
    about UE5 but also meet new people with same hobby as me (some of them are also Front-end developers)`,
    date: {
      from: "04.2024",
      to: "08.2024",
    },
    techs: [
      {
        id: 1,
        name: "Unreal Engine",
        key: "unreal",
      },
      {
        id: 2,
        name: "C++ Programming Language",
        key: "cplusplus",
      },
    ],
  },
  {
    id: 2,
    type: "exp",
    entity: "Praetorian Technology",
    position: "Web Developer",
    description: "Description 1",
    date: {
      from: "10.2021",
      to: "TODAY",
    },
    techs: [
      {
        id: 1,
        name: "Docker",
        key: "docker",
      },
      {
        id: 2,
        name: "React",
        key: "react",
      },
      {
        id: 3,
        name: "Next JS",
        key: "nextjs",
      },
      {
        id: 4,
        name: "Javascript",
        key: "javascript",
      },
      {
        id: 5,
        name: "Symfony",
        key: "symfony",
      },
    ],
  },
  {
    id: 3,
    type: "exp",
    entity: "Digital Holding",
    position: "Frond-end developer",
    description: "Description 1",
    date: {
      from: "03-2021",
      to: "10-2021",
    },
    techs: [
      {
        id: 1,
        name: "Vue.js",
        key: "vuejs",
      },
      {
        id: 2,
        name: "Javascript",
        key: "javascript",
      },
      {
        id: 3,
        name: "Figma",
        key: "figma",
      },
    ],
  },
  {
    id: 4,
    type: "exp",
    entity: "Meelabs Polska",
    position: "Frond-end developer",
    description: "Description 1",
    date: {
      from: "08-2020",
      to: "03-2021",
    },
    techs: [
      {
        id: 1,
        name: "React",
        key: "react",
      },
      {
        id: 2,
        name: "Typescript",
        key: "typescript",
      },
      {
        id: 3,
        name: "Gatsby",
        key: "gatsby",
      },
    ],
  },
  {
    id: 5,
    type: "edu",
    entity: "Software Development Academy",
    position: "Java Bootcamp Student",
    description: "Description 1",
    date: {
      from: "03-2020",
      to: "02-2021",
    },
    techs: [
      {
        id: 1,
        name: "Java",
        key: "java",
      },
      {
        id: 2,
        name: "Spring",
        key: "spring",
      },
      {
        id: 3,
        name: "Maven",
        key: "maven",
      },
    ],
  },
  {
    id: 6,
    type: "exp",
    entity: "Let Grow",
    position: "Web Developer",
    description: "Description TBD",
    date: {
      from: "04-2019",
      to: "08-2020",
    },
    techs: [
      {
        id: 1,
        name: "Vue",
        key: "vuejs",
      },
      {
        id: 2,
        name: "React",
        key: "react",
      },
      {
        id: 3,
        name: "Laravel",
        key: "laravel",
      },
      {
        id: 4,
        name: "PHP",
        key: "php",
      },
      {
        id: 5,
        name: "Figma",
        key: "figma",
      },
    ],
  },
  {
    id: 7,
    type: "edu",
    entity: "Gryfer",
    position: "Web Developer",
    description: "Description TBD",
    date: {
      from: "10-2018",
      to: "04-2019",
    },
    techs: [
      {
        id: 1,
        name: "Vue",
        key: "vuejs",
      },
      {
        id: 2,
        name: "React",
        key: "react",
      },
      {
        id: 3,
        name: "Laravel",
        key: "laravel",
      },
      {
        id: 4,
        name: "PHP",
        key: "php",
      },
      {
        id: 5,
        name: "Figma",
        key: "figma",
      },
    ],
  },
  {
    id: 8,
    type: "edu",
    entity: "West Pomeranian University of Technology in Szczecin",
    position: "ICT - Masters Degree",
    description: "Description TBD",
    date: {
      from: "2017",
      to: "20218",
    },
  },
  {
    id: 9,
    type: "edu",
    entity: "West Pomeranian University of Technology in Szczecin",
    position: "ICT - Bachelor Degree",
    description: "Description TBD",
    date: {
      from: "2013",
      to: "20217",
    },
  },
];

export { timelineMock };
