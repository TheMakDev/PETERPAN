import React, { useEffect, useState } from 'react'
import "./Achievement.css"
import { FaAward, FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import ReactOdometer from 'react-odometerjs'
import { GiTeamIdea } from 'react-icons/gi'


const Achievement = () => {
    const [clients, setClients] = useState(0)
    const [projects, setProjects] = useState(0)
    const [teams, setTeams] = useState(0)
    const [awards, setAwards] = useState(0)

    useEffect(() => {
        const timeOutId = setTimeout(() =>{
            setClients(120);
            setProjects(150)
            setTeams(44)
            setAwards(89)
        },3000)
        return () => clearTimeout(timeOutId)
    },[])
  return (
    <div  className='achievement_container'>

        <div className="achievement">
            <div className="icon_container">
                <FaUsersLine/>
            </div>
            <div className="details">
                <div className="count_row">
                <ReactOdometer value={clients}  className='title'/>
                <h1 className='g-text title'>K</h1>
                </div>
                <small className=" text_muted">Happy Customers</small>
            </div>
        </div>

        <div className="achievement">
            <div className="icon_container">
                <FaDiagramProject/>
            </div>
            <div className="details">
                <div className="count_row">
                <ReactOdometer value={projects}  className='title'/>
                <h1 className='g-text title'>+</h1>
                </div>
                
                <small className=" text_muted">Completed Projects</small>
            </div>
        </div>

        <div className="achievement">
            <div className="icon_container">
                <GiTeamIdea/>
            </div>
            <div className="details">
                <div className="count_row">
                <ReactOdometer value={teams}  className='title'/>
                <h1 className='g-text title'>+</h1>
                </div>
                
                <small className=" text_muted">Expert Workers</small>
            </div>
        </div>

        <div className="achievement">
            <div className="icon_container">
                <FaAward/>
            </div>
            <div className="details">
                <div className="count_row">
                <ReactOdometer value={awards}  className='title'/>
                <h1 className='g-text title'>+</h1>
                </div>
                
                <small className="text_muted">Awards winning</small>
            </div>
        </div>

    </div>
  )
}

export default Achievement