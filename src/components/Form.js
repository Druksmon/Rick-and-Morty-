import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useRef, useState} from "react";
import {motion} from "framer-motion"

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

        <motion.div initial={{ opacity: 0, y:50 }}
                    animate={{ opacity: 1,y:0  }}
                    transition={{ duration: 0.5 }} className="form_container">
            <div className="form_selector">
                <h1 >Characters</h1>
                <p>Find all the Rick and Morty characters, along with information such as status, location and origin.</p>
                <div className="form_input-box">
                    <form onSubmit={handleSubmit}>
                        <input ref={inputRef} placeholder='Search' type="text"
                               onChange={(e) => setSearch(e.target.value)}/>
                        <button><FontAwesomeIcon icon={faSearch} size="xl"/></button>
                    </form>

                </div>
            </div>

        </motion.div>


    )
}

export default Form