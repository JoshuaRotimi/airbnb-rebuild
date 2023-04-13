import Container from "@/app/components/Container";

import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

const Home = async () => {
  const currentUser = await getCurrentUser();

  return <ClientOnly></ClientOnly>;
};

export default Home;
