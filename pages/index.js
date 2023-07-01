import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
export default function Home({data}) {
    const menu = [
        {
            name: "Home",
            link: "/",
        },
        // {
        //     name: "Dashboard",
        //     link: "/blogs",
        // }
    ]
    return (
        <>
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
                gridTemplateRows={"50px 1fr 200px"}
                gridTemplateColumns={"400px 1fr"}
                h='200px'
                gap='4'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' area={"header"}>
                    <MenuBar menu={menu} />
                </GridItem>
                <GridItem pl='5'  area={"nav"}>
                    <Navbar profile={data}/>
                </GridItem>
                <GridItem pl='5' bg='green.300' area={"main"}>
                    Main
                </GridItem>
                <GridItem pl='5' area={"footer"} >
                    <Footer menu={menu}/>
                </GridItem>
            </Grid>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("https://api.github.com/users/caturhidayat");
    const data = await res.json();
    return {
        props: {
            data
        },
    };
}