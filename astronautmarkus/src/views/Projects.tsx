import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ locale }: { locale: any }) => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">📂 {locale.myProjects}</h1>
        <p>{locale.recentProjects}</p>
        <div className="content">
          <ul className="project-list">
            <li className="project-item d-flex flex-column flex-md-row">
              <div className="project-details">
                <h2 className="project-title">{locale.featuredProject}: AbbyBot</h2>
                <p className="project-description text-center">
                  {locale.abbyBotDescription}
                </p>
                <ul className="project-sublist">
                  <li>
                    <strong>{locale.discordAbbyBot}:</strong> {locale.discordAbbyBotDescription}
                  </li>
                  <li>
                    <strong>{locale.abbyBotWebsite}:</strong> {locale.abbyBotWebsiteDescription}
                  </li>
                  <li>
                    <strong>{locale.abbyBotDashboard}:</strong> {locale.abbyBotDashboardDescription}
                  </li>
                </ul>
                <div className="text-center project-links">
                  <a href="https://github.com/AbbyBot/AbbyBot-API" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot API
                  </a>
                  <a href="https://github.com/AbbyBot/AbbyBot-Website" target="_blank" rel="noopener noreferrer" className="btn btn-secondary m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot Website
                  </a>
                  <a href="https://github.com/AbbyBot/AbbyBot-Dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-success m-2">
                    <FontAwesomeIcon icon={faGithub} /> AbbyBot Dashboard
                  </a>
                  <a href="https://www.abbybotproject.com" target="_blank" rel="noopener noreferrer" className="btn btn-info m-2">
                    {locale.visitAbbyBotProject}
                  </a>
                </div>
              </div>
              <div className="project-image">
                <img src="/assets/img/abbybot_logo.png" alt="AbbyBot" />
                <p className='text-center mt-3'>Hello world!</p>
              </div>
            </li>

            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">📝 {locale.universityProjects}</h2>
                <p className="project-description">
                  {locale.universityProjectsDescription}
                </p>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-API</h2>
                <img src="/assets/img/project_img/mofulunches_api.png" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">{locale.mofuLunchesApiDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 2 {locale.year}: 2024</small></p>
                <div className="d-flex justify-content-center">
                  <p>{locale.technologies}: Flask, Python, MongoDB, Docker, Dotenv</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-Web</h2>
                <img src="/assets/img/project_img/mofulunches_web.jpg" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">{locale.mofuLunchesWebDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 2 {locale.year}: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <p>{locale.technologies}: Flask, Python, Bootstrap</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <h2 className="card-title">MofuLunches-Totem</h2>
                <img src="/assets/img/project_img/mofulunches_totem.png" alt="MofuLunches-API" className="mt-4 mb-4" width="600" />
                <p className="card-text">{locale.mofuLunchesTotemDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 2 {locale.year}: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <p>{locale.technologies}: React, Vite, Electron, Arduino, Bootstrap, Python</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/assets/img/project_img/mofustore.png" alt="Mofu Store" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">Mofu Store</h2>
                <p className="card-text">{locale.mofuStoreDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 1 {locale.year}: 2023</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <p>{locale.technologies}: Django, Python, Bootstrap, MySQL</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/assets/img/project_img/construmic.jpg" alt="CONSTRU_MIC" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">CONSTRU_MIC</h2>
                <p className="card-text">{locale.construMicDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 1 {locale.year}: 2024</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <p>{locale.technologies}: Django, Python, Bootstrap, MySQL</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
                <img src="/assets/img/project_img/camellosfood.png" alt="CamellosFood-Repartidor" className="mt-4 mb-4" width="600" />
                <h2 className="card-title">CamellosFood-Repartidor</h2>
                <p className="card-text">{locale.camellosFoodDescription}</p>
                <p className="card-text"><small className="text-light">{locale.semester}: 2 {locale.year}: 2023</small></p>
                <div className="tech-icons d-flex justify-content-center">
                  <p>{locale.technologies}: Ionic, Angular, Node.js</p>
                </div>
              </div>
            </li>

            <li className="project-item card text-center text-light">
              <div className="card-body">
              <h2>{locale.moreProjects}</h2>
            <img src="https://github.com/astronautmarkus.png" alt="GitHub Profile" className="github-profile-picture mt-3 mb-3 rounded" width="200"  />
            <p>@astronautmarkus</p>
            <p>{locale.exploreMore}</p>
            <div className="d-flex justify-content-center">
              <a href="https://github.com/astronautmarkus" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                <FontAwesomeIcon icon={faGithub} /> {locale.githubProfile}
              </a>
              <a href="/" className="btn btn-secondary m-2">
                {locale.home}
              </a>
            </div>
              </div>
            </li>
          </ul>
        </div>        
      </div>
    </div>
  </div>
);

export default Projects;
