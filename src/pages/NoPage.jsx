import Navigation from '../Navbar';
import Footer from '../Footer';
import { Text } from "@nextui-org/react";

function NoPage() {
  return (
    <>
    <Navigation />
    <Text h1 size={90} css={{textAlign: "center", marginTop: 100}}>404</Text>
    <Text size={50} css={{textAlign: "center"}}>Page not found</Text>
    <Footer />
    </>
  )

}

export default NoPage;