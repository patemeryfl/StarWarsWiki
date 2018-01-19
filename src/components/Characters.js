import React from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

let Characters = (props) => {
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

let buildQuery = function(id = "1000") {
    return gql`
        query CharacterQuery {
            human(id: ${id}) {
                id,
                name,
                friends { name },
                appearsIn,
                height,
                mass,
                starships { name }
            }
        }`
}

class CharacterList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstCharacter: true,
            lastCharacter: false,
            currentID: "1000",
            nextID: this.currentID + 1
        }
    }

    componentWillMount() {
        if(this.state.currentID = "1000") {
            let id = "1001";
            graphql(characterQuery, {options: {variables: {id: id}}})(CharacterList)
        } else {
            let id = this.state.nextID;
            this.callQuery = (id) => graphql(characterQuery, {options: {variables: {id: id}}})(CharacterList)
        }
    }

    changePerson() {
        let currentID = this.state.currentID
        if (currentID == "1000") {
            let nextID = currentID + 1;
            this.setState({
                firstCharacter: false,
                lastCharacter: false,
                currentID: nextID
            })
        } 
        if (currentID !== "1000") {
            this.setState({firstCharacter: true})
            buildQuery("1001")
        }
        if(currentID === 1004) {
            this.setState({lastCharacter: true})
        }
    }

    render() {
        let data = this.props.data;
        return(
            <div style={{ flexWrap: 'wrap', display: 'flex'}}>
                { data.loading ? ( <p>Fetching...</p> ) : ( 
                    <div>
                        <Characters data={data.human} />
                        <div style={{textAlign: "center"}}>
                            <button onClick={() => this.changePerson()} disabled={this.firstCharacter}>Previous</button>
                            <button onClick={() => this.changePerson()} disabled={this.lastCharacter}>Next</button>   
                        </div>
                    </div>
                )}
            </div>
        )
    }
}



let characterQuery = buildQuery()

export default graphql(characterQuery)(CharacterList)