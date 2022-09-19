import Form from "../Form";
import Cards from "../Cards";
import Header from "../Header";
import {useEffect, useState} from "react";
import Loader from "../Loader";


const Home = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [principalCharacters, setPrincipalCharacters] = useState();
    const [allCharacters, setAllCharacters] = useState();

    const [search, setSearch] = useState();


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
            .then((data) => data.json())
            .then((res) => setPrincipalCharacters(res))
        fetch('https://rickandmortyapi.com/api/character?page=9')
            .then((data) => data.json())
            .then((res) => setAllCharacters(res))


    }, []);

    const addSearch = (text) => {
        fetch(`https://rickandmortyapi.com/api/character?name=${text}`)
            .then((data) => data.json())
            .then((res) => setSearch(res))
    }

    const nextPage = () => {

        const next = allCharacters?.info?.next;

        if (next !== null && next !== undefined) {
            setAllCharacters()
            fetch(`${next}`)
                .then((data) => data.json())
                .then((res) => setAllCharacters(res))
        }
    }

    const prevPage = () => {
        const prev = allCharacters?.info?.prev;

        if (prev !== null && prev !== undefined) {
            setAllCharacters()
            fetch(`${prev}`)
                .then((data) => data.json())
                .then((res) => setAllCharacters(res))
        }
    }


    const load = () => {
        setIsLoading(false)
    }

    setTimeout(load, 3000);

    return (

        <>
            {isLoading
                ?
                (<Loader isLoading={isLoading}/>)
                :
                (<div className='home_container'>
                    <Header/>
                    <Form addSearch={addSearch}/>
                    <Cards principalCharacters={principalCharacters} allCharacters={allCharacters} search={search}
                           nextPage={nextPage} prevPage={prevPage}/>
                </div>)}
        </>

    )
}

export default Home