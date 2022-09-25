import { Icon } from "react-icons-kit";
import { facebook_1 } from 'react-icons-kit/ikons/facebook_1';
import { instagram } from 'react-icons-kit/ikons/instagram';
import { twitter } from 'react-icons-kit/ikons/twitter';
import { pin_2 } from 'react-icons-kit/ikons/pin_2';
import { mail } from 'react-icons-kit/ikons/mail';
import teamlogo from "../../images/team-logo.png";
import member1 from "../../images/member-1.png";
import member2 from "../../images/member-2.png";
import member3 from "../../images/member-3.png";
import member4 from "../../images/member-4.png";

import "./Team.css";



const Team = () => {
    return (
        <div className="team">
            <div className="team-row">
                <div className="team-box">
                    <div className="team-photo">
                        <img alt="" src={member1} />
                    </div>
                    <div className="top-part">
                        <img src={teamlogo} alt="" />
                    </div>
                    <div className="bottom-part">
                        <h2>Mohammed Atwan</h2>
                        <h4>Frontend Developer</h4>
                        <h6>@teamgusto</h6>
                        <div className="team-social">
                            <Icon className="team-icon" icon={facebook_1} />
                            <Icon className="team-icon" icon={instagram} />
                            <Icon className="team-icon" icon={twitter} />
                        </div>
                        <div className="team-address">
                            <Icon icon={pin_2} />
                            <span>Bochum</span>
                        </div>
                        <div className="team-email">
                            <Icon icon={mail} />
                            <span>teamgusto410@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-photo">
                        <img alt="" src={member2} />
                    </div>
                    <div className="top-part">
                        <img src={teamlogo} alt="" />
                    </div>
                    <div className="bottom-part">
                        <h2>Giorgio Mazzuca</h2>
                        <h4>Frontend Developer</h4>
                        <h6>@teamgusto</h6>
                        <div className="team-social">
                            <Icon className="team-icon" icon={facebook_1} />
                            <Icon className="team-icon" icon={instagram} />
                            <Icon className="team-icon" icon={twitter} />
                        </div>
                        <div className="team-address">
                            <Icon icon={pin_2} />
                            <span>Berlin</span>
                        </div>
                        <div className="team-email">
                            <Icon icon={mail} />
                            <span>teamgusto410@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-photo">
                        <img alt="" src={member3} />
                    </div>
                    <div className="top-part">
                        <img src={teamlogo} alt="" />
                    </div>
                    <div className="bottom-part">
                        <h2>Andreia Arcanjo Coito</h2>
                        <h4>Backend Developer</h4>
                        <h6>@teamgusto</h6>
                        <div className="team-social">
                            <Icon className="team-icon" icon={facebook_1} />
                            <Icon className="team-icon" icon={instagram} />
                            <Icon className="team-icon" icon={twitter} />
                        </div>
                        <div className="team-address">
                            <Icon icon={pin_2} />
                            <span>Bochum</span>
                        </div>
                        <div className="team-email">
                            <Icon icon={mail} />
                            <span>teamgusto410@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="team-box">
                    <div className="team-photo">
                        <img alt="" src={member4} />
                    </div>
                    <div className="top-part">
                        <img src={teamlogo} alt="" />
                    </div>
                    <div className="bottom-part">
                        <h2>Daniel Ramacher</h2>
                        <h4>Backend Developer</h4>
                        <h6>@teamgusto</h6>
                        <div className="team-social">
                            <Icon className="team-icon" icon={facebook_1} />
                            <Icon className="team-icon" icon={instagram} />
                            <Icon className="team-icon" icon={twitter} />
                        </div>
                        <div className="team-address">
                            <Icon icon={pin_2} />
                            <span>Bochum</span>
                        </div>
                        <div className="team-email">
                            <Icon icon={mail} />
                            <span>teamgusto410@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;