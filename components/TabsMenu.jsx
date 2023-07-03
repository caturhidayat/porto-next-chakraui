import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MainPage from "./MainPage";
import Certificate from "./Certificate";

const cert = [
    {
        id: 1,
        name: "Learn JavaScript Course",
        description:
            "Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
    },
    {
        id: 2,
        name: "Learn CSS Course",
        description:
            "Learn how to use CSS — the presentational language that styles web pages and user interfaces.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
    },
    {
        id: 3,
        name: "Learn HTML Course",
        description:
            "Learn how to use HTML and CSS to make webpages. HTML is the markup language that you surround content with, to tell browsers about headings, lists, tables, etc. CSS is the stylesheet language that you style the page with, to tell browsers to change the color, font, layout, and more.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
    },
    {
        id: 4,
        name: "Learn NodeJS Course",
        description:
            "Learn Node.js and Express.js to create web apps with JavaScript on the back end.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/240305d50b925c17868f1ac7a21a3261",
    },
    {
        id: 5,
        name: "Learn How to Code Course",
        description:
            "Learn the technical skills you need for the job you want. As leaders in online education and learning to code, we’ve taught over 50 million people using a tested curriculum and an interactive learning environment. Start with HTML, CSS, JavaScript, SQL, Python, Data Science, and more.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/11a686a7fd57b8c214f7f92749388d42",
    },
    {
        id: 6,
        name: "Code Foundations Course",
        description:
            "Learn the basics of web development with HTML, CSS, and JavaScript. This course is a great place to start for anyone who wants to learn how to code, switch careers, or become a full-time software developer.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/5b55e668646caa552f8e4d1d",
    },
    {
        id: 7,
        name: "Learn Express Course",
        description:
            "Learn how to use Express.js to build dynamic websites on the back end. Express is a JavaScript framework that makes it easy to create and run web servers with Node.js.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/85396dd6e2e850ab34e904243aa464c6",
    },
    {
        id: 8,
        name: "Learn CSS: Responsive Design Course",
        description:
            "Learn how to use responsive web design to make your site more readable and efficient — on any device. Responsive web design is the practice of designing websites to work on any device and screen size, so that the site looks good and works right on desktops, laptops, tablets, and mobile phones.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/3a62023b0054dc793edc0adecd715fd7",
    },
    {
        id: 9,
        name: "Learn TypeScript Course",
        description:
            "Learn TypeScript, a superset of JavaScript that brings static types and powerful tooling to JavaScript development.",
        image: "/logo/codecademy.png",
        link: "https://www.codecademy.com/profiles/BR0KY/certificates/56fb1e71303e37b643bb1905f31c8a09",
    },
];

export default function TabsMenu({ repos = [] }) {
    return (
        <div>
            <Tabs variant='enclosed' isLazy={true} color='telegram.700'>
                <TabList>
                    <Tab>Repo:</Tab>
                    <Tab>Certificate:</Tab>
                    <Tab>Educations:</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <MainPage repos={repos} />
                    </TabPanel>
                    <TabPanel>
                        <Certificate cert={cert} />
                    </TabPanel>
                    <TabPanel>
                        <Certificate cert={cert} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}
