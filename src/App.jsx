import "./App.css";
import Job from "./components/Job.jsx";

const App = () => {
  return (
    <>
      <body>
        <header>
          <div className="container header-title">
            <h1 className="title-page">The Job Board</h1>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="jobs">
              <Job
                title="Full Time Sales Associate - Sydney Boutique"
                contractType="CDI"
                country="Australie"
                city="Sydney"
                className="borderColor-Red"
              />
              <Job
                title="Agent de Sécurité - Pantin"
                contractType="CDI"
                country="France"
                city="Pantin"
                className="borderColor-Green"
              />
              <Job
                title="Responsable d'Atelier (H/F)"
                contractType="CDD"
                country="France"
                city="Paris"
                className="borderColor-Yellow"
              />
              <Job
                title="Chef de Projets"
                contractType="CDD"
                country="France"
                city="Paris"
                className="borderColor-Blue"
              />
              <Job
                title="Développeur React.js"
                contractType="CDI"
                country="France"
                city="Paris"
                className="borderColor-Pink"
              />
              <Job
                title="Sales Associate Stockholm"
                contractType="CDI"
                country="Suède"
                city="Stockholm"
                className="borderColor-Red"
              />
              <Job
                title="Vendeur/se - Crans Montana"
                contractType="CDI"
                country="Suisse"
                city="Crans-Montana"
                className="borderColor-Green"
              />
              <Job
                title="CRM & Data Quality Analyst"
                contractType="CDI"
                country="USA"
                city="New-York"
                className="borderColor-Yellow"
              />
              <Job
                title="Infirmier"
                contractType="CDI"
                country="France"
                city="Pantin"
                className="borderColor-Yellow"
              />
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
            <div className="signature-box">
              <p className="signature">
                Made with <a href="">React</a> at <a href="">Le Reacteur</a> by{" "}
                <a href="">Thibault TROFLEAU</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default App;
