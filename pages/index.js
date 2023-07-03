import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Headers from "@/components/Headers";
import TabsMenu from "@/components/TabsMenu";
import Footer from "@/components/Footer";
export default function Home({ data, repos = [] }) {
    const menu = [
        {
            name: "Home",
            link: "/",
        },
        // {
        //     name: "Dashboard",
        //     link: "/blogs",
        // }
    ];
    return (
        <>
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
                gridTemplateRows={"80px 1fr 220px"}
                gridTemplateColumns={"450px 1fr"}
                h='200px'
                gap='4'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2'  borderBottom='2px' boxShadow='base' borderColor='teal.200' area={"header"}>
                    <Headers menu={menu} />
                </GridItem>
                <GridItem pl='5' area={"nav"}>
                    <Navbar profile={data} />
                </GridItem>
                <GridItem maxW='container.lg' mx='auto' px='5' area={"main"}>
                    {/* <Text fontSize='2xl'>Repo :</Text> */}
                    {/* <MainPage repos={repos}/> */}
                    <TabsMenu repos={repos} />
                </GridItem>
                <GridItem pl='5' borderTop='2px' borderColor='telegram.800' bg='telegram.200' area={"footer"}>
                    <Footer menu={menu} />
                </GridItem>
            </Grid>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch("https://api.github.com/users/caturhidayat");
    const data = await res.json();
    const resRepo = await fetch(
        "https://api.github.com/users/caturhidayat/repos"
    );
    const repos = await resRepo.json();
    return {
        props: {
            data,
            repos,
        },
    };
};
