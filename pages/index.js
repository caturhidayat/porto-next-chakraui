import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import MainPage from "@/components/MainPage";
import Footer from "@/components/Footer";
export default function Home({data, repos = []}) {
    const menu = [
        // {
        //     name: "Home",
        //     link: "/",
        // },
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
                gridTemplateRows={"80px 1fr 220px"}
                gridTemplateColumns={"400px 1fr"}
                h='200px'
                gap='4'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='gray.300' area={"header"} >
                    <MenuBar menu={menu} />
                </GridItem>
                <GridItem pl='5'  area={"nav"}>
                    <Navbar profile={data}/>
                </GridItem>
                <GridItem maxW='container.lg' mx='auto' px='5' area={"main"}>
                    <Text fontSize='2xl'>Repo :</Text>
                    <MainPage repos={repos}/>
                </GridItem>
                <GridItem pl='5' bg='gray.100' area={"footer"} >
                    <Footer menu={menu}/>
                </GridItem>
            </Grid>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("https://api.github.com/users/caturhidayat");
    const data = await res.json();
    const resRepo = await fetch("https://api.github.com/users/caturhidayat/repos");
    const repos = await resRepo.json();
    return {
        props: {
            data,
            repos
        },
    };
}