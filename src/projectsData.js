import {Car, Room, Interior, Ruler, Exclam, Calculator, Palindrome, Cash, Phone, Portfolio, Dice, Steak, Zuma} from "./images/index.js";

const projects = [
    {
        id: 13,
        title: "Interiors",
        coverImg: Interior,
        description: "Website created in Wordpress for an interior design company",
        link: "https://jinteriors.pl/",
    },
    {
        id: 14,
        title: "Zuma",
        coverImg: Zuma,
        description: "Website created in Wordpress for a tech startup",
        link: "https://zuma.events/",
    },
    {
        id: 12,
        title: "Steak House",
        coverImg: Steak,
        description: "Home Page for a steak house restaurant built using Vanilla JS",
        link: "/restaurant/",
    },
    {
        id: 15,
        title: "BMW Page",
        coverImg: Car,
        description: "Landing Page for BMW",
        link: "/landing-page/public/index.html",
    },
    {
        id: 16,
        title: "Bookey",
        coverImg: Room,
        description: "Conference room reservation app created using java, spring-boot and Rest API",
        link: "/bookey/",
    },
    {
        id: 10,
        title: "Tenzies",
        coverImg: Dice,
        description: "Simple dice game",
        link: "/tenzies",
    },
    {
        id: 3,
        title: "Money Tracker",
        coverImg: Calculator,
        description: "Expense tracking application",
        link: "/money-tracker-app/",
    },
    {
        id: 5,
        title: "Cash Register",
        coverImg: Cash,
        description: "Returns change from given amount of money",
        link: "/cash-register/",
    },
    {
        id: 2,
        title: "Factorial",
        coverImg: Exclam,
        description: "Returns a factorial of a given number",
        link: "/factorial/",
    },
    {
        id: 4,
        title: "Palindrome",
        coverImg: Palindrome,
        description: "Checks whether the given phrase is a palindrome",
        link: "/palindrome/",
    },
    {
        id: 6,
        title: "Unit Converter",
        coverImg: Ruler,
        description: "Converts between Imperial and Metric units",
        link: "/unit-converter/",
    },
    {
        id: 7,
        title: "Phone Check",
        coverImg: Phone,
        description: "Validates the format of phone number",
        link: "/phone-check/",
    },
    {
        id: 9,
        title: "This Page",
        coverImg: Portfolio,
        description: "Portfolio page created with react.js",
        link: "https://github.com/Patka879/my-portfolio",
    }
];

export default projects;
