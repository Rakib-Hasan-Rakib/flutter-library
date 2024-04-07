import Footer from "../../components/footer/Footer";
import Articles from "./articles/Articles";
import Header from "./header/Header";
import Screens from "./screens/Screens";
import Templates from "./templates/Templates";

const Discover = () => {
  return (
    <>
      <div className="space-y-4">
        <Header />
        <Templates />
        <Articles />
        <Screens />
        <Footer />
      </div>
    </>
  );
};
export default Discover;
