import Navigation from '../Navbar';
import Footer from '../Footer';
import { Text } from "@nextui-org/react";

function About() {
  return (
    <>
    <Navigation />
    <Text h1 size={90} css={{textAlign: "center", marginTop: 100}}>About</Text>
    <Text size={50} css={{textAlign: "center"}}>Some about us text here</Text>
    <Footer />
    </>
  )

}

export default About;