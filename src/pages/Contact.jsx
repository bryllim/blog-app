import Navigation from '../Navbar';
import Footer from '../Footer';
import { Text } from "@nextui-org/react";

function Contact() {
  return (
    <>
    <Navigation />
    <Text h1 size={90} css={{textAlign: "center", marginTop: 100}}>Contact</Text>
    <Text size={50} css={{textAlign: "center"}}>Some contact us text here</Text>
    <Footer />
    </>
  )

}

export default Contact;