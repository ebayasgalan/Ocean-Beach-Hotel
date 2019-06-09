import About from "../components/About";

const HomePage = () => (
  <div>
    <h1>Welcome to Ocean Beach</h1>
    <img
      src="/static/hotel.jpg"
      alt="hotel picture"
      height="650px"
      width="100%vh"
    />
    <About />
  </div>
);

export default HomePage;
