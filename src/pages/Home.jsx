import Navigation from '../Navbar';
import Footer from '../Footer';
import { Text } from "@nextui-org/react";

function Home() {
  return (
    <>
    <Navigation />
    <Text h1 size={90} css={{textAlign: "center", marginTop: 100}}>Kode Breakers</Text>
    <Text size={50} css={{textAlign: "center"}}>We break the code, so you don't have to.</Text>
    <Footer />
    </>
  )

}

export default Home;