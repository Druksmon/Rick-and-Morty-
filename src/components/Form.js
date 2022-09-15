import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useRef, useState} from "react";

const Form = ({addSearch}) => {


    const [search, setSearch] = useState();

    const inputRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (search !== "" && search !== undefined) {
            addSearch(search)

            inputRef.current.value = ""
            setSearch(undefined)
        }
    }

    return (

        <div className="form_container">
            <div className="form_selector">
                <h1>Characters</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa laudantium perferendis sapiente
                    velit?
                    Aliquid beatae dolores esse, et excepturi fugiat, incidunt ipsam maiores modi nulla quas quo sed,
                    velit
                    voluptates?</p>
                <div className="form_input-box">
                    <form onSubmit={handleSubmit}>
                        <input ref={inputRef} placeholder='Search' type="text" onChange={(e) => setSearch(e.target.value)}/>
                        <button><FontAwesomeIcon icon={faSearch} size="xl"/></button>
                    </form>

                </div>
            </div>

        </div>


    )
}

export default Form