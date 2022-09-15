import Form from "../Form";
import Cards from "../Cards";
import Header from "../Header";
import {useEffect, useState} from "react";

const Home = () => {

    const [principalCharacters, setPrincipalCharacters] = useState();
    const [allCharacters, setAllCharacters] = useState();
    const [search, setSearch] = useState();


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
            .then((data) => data.json())
            .then((res) => setPrincipalCharacters(res))
        fetch('https://rickandmortyapi.com/api/character')
            .then((data) => data.json())
            .then((res) => setAllCharacters(res.results))
    }, []);

    const addSearch = (text) => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
            .then((data) => data.json())
            .then((res) => setSearch(res.results))
    }



    return (
        <div className="home_container">
            <Header/>
            <Form addSearch={addSearch}/>
            <Cards principalCharacters={principalCharacters} allCharacters={allCharacters} search={search} />
        </div>
    )
}

export default Home