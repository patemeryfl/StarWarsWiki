import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function Film(props) {
    let {name, height, mass, appearsIn, friends, starships} = props.data
    return (
        <div style={{ flex: '1 0 300px' }}>
            <h1 style={{ fontSize: '14px', margin: '8px 0'}}>{name}</h1>
            <p>Height: {height}, Mass: {mass}</p>
            <table><tbody>
                <tr>
                    <th>Appears in</th>
                    <th>Friends</th>
                    <th>Ships</th>
                </tr>
                <tr>
                    <td>{appearsIn.map((movie, i)=> <li key={i}>{movie}</li>)}</td>
                    <td>{friends.map((friend, i)=> <li key={i}>{friend.name}</li>)}</td>
                    <td>{starships.map((ship, i)=> <li key={i}>{ship.name}</li>)}</td>
                </tr>
            </tbody></table>
        </div>
    )
  }

  let FilmList = function FilmList({ data }) {
    return (
        <div style={{ flexWrap: 'wrap', display: 'flex'}}>
          {
            data.loading ? 
            ( <p>Fetching...</p> ) : ( <Hero data={data.human} />)
          }
        </div>
    );
  };

  export default graphql(gql`
  query HeroQuery {
    human(id: "1000") {
        name,
        friends { name },
        appearsIn,
        height,
        mass,
        starships { name }
          }
  }
`)(FilmList);