import HomeContainer from "Containers/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PrivatePage from "components/PrivatePage";

export default function Home() {
  return (
    <PrivatePage>
      <HomeContainer />;
    </PrivatePage>
  );
}
