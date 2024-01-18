import { IconContext } from 'react-icons';
import { IoLogoLinkedin, IoLogoGithub, IoDocumentText } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import teamlogo from '../../images/team-logo.png';
import member2 from '../../images/member-2.png';
import { Link } from 'react-router-dom';

import './Team.css';

// Import necessary components and styles

const Team = () => {
  const cvUrl = 'https://flowcv.com/resume/43747ulvs3';


  return (
    <div className="team">
      <div className="team-row">
        <div className="team-box">
          <div className="team-photo">
            <img alt="" src={member2} />
          </div>
          <div className="top-part">
            <img src={teamlogo} alt="" />
          </div>
          <div className="bottom-part">
            <h2>Giorgio Mazzuca</h2>
            <h4>Fullstack Developer</h4>

            <div className="team-social">
              <Link to='mailto:mazzucagiorgio@gmail.com' style={{ marginRight: '10px' }}>
                <IconContext.Provider value={{ size: '32px', color: '#211F1F' }}>
                  <AiOutlineMail />
                </IconContext.Provider>
                <span style={{ marginLeft: '10px' }}></span>
              </Link>
              <IconContext.Provider value={{ size: '32px', color: '#0077B5', marginRight: '10px' }}>
                <Link to={"https://www.linkedin.com/in/giorgio-mazzuca/"} target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin style={{ size: '32px', marginRight: '10px' }} />
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '32px', marginRight: '10px' }}>
                <Link to={"https://github.com/mazgio"} target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub style={{ size: '32px', color: '#211F1F', marginRight: '10px' }} />
                </Link>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: '32px', color: '#1DA1F2' }}>
                <Link to={cvUrl} target="_blank" rel="noopener noreferrer">
                  <IoDocumentText size={24} />
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
