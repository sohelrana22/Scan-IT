import React from 'react';
import './../styles/Team.css';
import team1 from './../../images/my.png';
import team2 from './../../images/team-01.png';
import team3 from './../../images/team-02.png';
import team4 from './../../images/team-03.png';

const teamMembers = [
    {
        imgURL: team1,
        name: 'Sohel Rana',
        position: 'Mern-Stack Developer'
    },
    {
        imgURL: team2,
        name: 'Tansir',
        position: 'Software Developer'
    },
    {
        imgURL: team3,
        name: 'Morjina',
        position: 'Front-End Developer'
    },
    {
        imgURL: team4,
        name: 'Rahul',
        position: 'Product Manager'
    },
]

const Team = () => {
    return (
        <section className='our_team'>
            <div className='container '>
                <div className='team_content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>Meet with <span className='highlight'>our team</span></h2>
                </div>
                <div className='team_wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className="team_item">
                        <div className='team_img'>
                            <img src={item.imgURL} alt="" />
                        </div>
                        <div className='team_detail'>
                            <h4>{item.name}</h4>
                            <p className='description'>{item.position}</p>
                            <div className='team_member_social'>
                                <span><i class="ri-linkedin-line"></i></span>
                                <span><i class="ri-facebook-line"></i></span>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;