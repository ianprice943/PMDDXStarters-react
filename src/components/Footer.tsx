import './Footer.css';
const Footer: React.FC = () => {
  const creator: string = "Written in ReactJS by Ian Price.";
  const disclaimer: string = "This website is in no way involved with The Pokemon Company, Gamefreak, or Nintendo.";
  
  return (
    <footer>
      <span>{creator} </span>
      <span>{disclaimer} </span>
      <a id="vue-anchor" href="https://pmdrtdx-vuejs.herokuapp.com/">Vue.js Version</a>
    </footer>
  )
}

export default Footer;