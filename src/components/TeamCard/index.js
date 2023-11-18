import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props

  return (
    <>
      <ul className="team-item">
        {teamDetails.map(team => (
          <li key={team.id}>
            <Link to={`/team-matches/${team.id}`}>
              <img
                className="team-logo"
                src={team.teamImageURL}
                alt={team.name}
              />
              <p className="team-name">{team.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TeamCard
