import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHardHat, faLightbulb, faComments, faClock } from '@fortawesome/free-solid-svg-icons';

import './Resume.css';

const Resume = ({ locale }: { locale: any }) => (
  <div className="home-container d-flex justify-content-center align-items-center vh-100">
    <div className="square-container">
      <div className="content-box shadow">
        <h1 className="title">🚀 {locale.aboutMeTitle}</h1>
        <p>🌌 {locale.aboutMeSubtitle}</p>
        <div className="content">
            <ul className="project-list">
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">💻 {locale.whatIDoTitle}</h2>
                <div className="project-sublist d-flex flex-column align-items-center">
                  <div className="project-text mb-4 mt-4">
                    <p>{locale.whatIDoDescription1}</p>
                    <p>{locale.whatIDoDescription2}</p>
                  </div>
                  <div className="project-image text-center">
                    <img src="/assets/img/profile_picture.webp" alt="Marcos Reyes" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
                    <p className="text-center mt-3">{locale.profilePictureCaption}</p>
                  </div>
                </div>
              </div>
            </li>


            <li className="project-item d-flex">
              <div className="project-details">
                <h2 className="project-title">🌠 {locale.travelToProgrammingTitle}</h2>
                <div className="project-text mb-4 mt-4">
                    <p>{locale.travelToProgrammingDescription1}</p>
                    <p>{locale.travelToProgrammingDescription2}</p>
                  </div>
              </div>
            </li>

            
            <li className="project-item">
              <div className="project-details">
                <h2 className="project-title">🎨 {locale.hobbiesTitle}</h2>
                <p>🎉 {locale.hobbiesSubtitle}</p>
              </div>
            </li>

          </ul>

            <div className="rounded overflow-hidden">
            <Carousel className="w-100">
              <Carousel.Item>
              <img
                className="w-100 carousel-image"
                src="/assets/img/hobbies/image_edition.jpg"
                alt="Image Edition"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.imageEditionTitle}</h3>
                <p className="carousel-caption-text">{locale.imageEditionDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/video_edition.avif"
                alt="Video Edition"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.videoEditionTitle}</h3>
                <p className="carousel-caption-text">{locale.videoEditionDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/coding.gif"
                alt="Programming"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.programmingTitle}</h3>
                <p className="carousel-caption-text">{locale.programmingDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/hardware.gif"
                alt="Hardware"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.hardwareTitle}</h3>
                <p className="carousel-caption-text">{locale.hardwareDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="/assets/img/hobbies/extra.gif"
                alt="Extra"
              />
              <Carousel.Caption>
                <h3 className="carousel-caption-text">{locale.extraTitle}</h3>
                <p className="carousel-caption-text">{locale.extraDescription}</p>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>    

        <ul className="project-list mt-5">

          <li className="project-item">
            <div className="project-details">
              <h2 className="project-title text-center mb-4">{locale.skillsTitle}</h2>
              <div className="skills-section">
                <h3>{locale.softSkillsTitle}</h3>
                <div className="soft-skills">
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faBriefcase} size="2x" className="fa-icon" />
                    <p><strong>{locale.professionalismTitle}</strong></p>
                    <p>{locale.professionalismDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faHardHat} size="2x" className="fa-icon" />
                    <p><strong>{locale.hardworkingTitle}</strong></p>
                    <p>{locale.hardworkingDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faLightbulb} size="2x" className="fa-icon" />
                    <p><strong>{locale.solutionOrientedTitle}</strong></p>
                    <p>{locale.solutionOrientedDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faComments} size="2x" className="fa-icon" />
                    <p><strong>{locale.thoughtfulCommunicatorTitle}</strong></p>
                    <p>{locale.thoughtfulCommunicatorDescription}</p>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faClock} size="2x" className="fa-icon" />
                    <p><strong>{locale.timeManagementTitle}</strong></p>
                    <p>{locale.timeManagementDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="final-section d-flex flex-column align-items-center mt-5">
          <div className="final-message text-center">
            <h4>🚀 {locale.finalMessageTitle}</h4>
            <p>- {locale.finalMessageAuthor}</p>
          </div>
          <div className="final-gif mt-3">
            <img src="/assets/img/fumo-fumo-fumo.gif" alt="Fumo Fumo Fumo" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Resume;
