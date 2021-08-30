import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <figure>
        <img src={process.env.PUBLIC_URL + "/assets/PMDRTDXLogo.png"} alt="Pokemon Mystery Dungeon Rescue Team DX Logo" width="650" height="372" loading="lazy" />
      </figure>
      <h2>Welcome to the PMDRTDX Starters App</h2>
      <p>
        This app is to help players understand who can be a starter in PMDRTDX, as well as what each starter Pokemon's ability and moves are.
      </p>
      <p>
        Choose a pokemon from the navigation menu to get started!
      </p>
    </div>
  )
}

export default Home;