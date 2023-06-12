import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Top from "./Sign";
import Products from "./Products";
import SchoolRoll from "./SchoolRoll";
import Specialize from "./Specialize";
import Slogan from "./Slogan";
export default function Homepage() {
  return (
    <div>
      <Header />
      <Top />
      <Products />
      <SchoolRoll />
      <Specialize />
      <Slogan />
      {/* <Footer /> */}
    </div>
  );
}
