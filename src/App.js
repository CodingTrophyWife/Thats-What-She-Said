import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Cyndi Fosmark",
    location: "Wherever my heart takes me",
    email: "cmfosmark@gmail.com",
    availability: "Open for work",
    brand:
      "My unique blend of sarcasm and overthinking",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
