import React from 'react'
import "./Team.css"
import { teams } from "../../data"

const Team = () => {
  return (
    <section id='team'>
      <div className="container">
        <h1 className="title">Our <span className="g-text">Team</span></h1>
        <h3 className="sub_title">We are always guided by creativity, honesty and proactiveness.</h3>
        <div className="teams_container">
          {
            teams.map((team, index) =>(
              <div className="team_card" key={index}>
                <div className="profile_container">
                  <img src={team.profile} alt={team.name} />
                </div>
                <div className="details">
                  <h3 className="name">{team.name}</h3>
                  <p className="text_muted">{team.title}</p>
                  <div className="social_container">
                    {
                      team.social.map((item, i) =>(
                        <a href={item.url || "#"} target="_blank" className="icon_container">{item.icon}</a>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team