import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose, faPlus} from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion"

const Card = ({principalCharacters}) => {


    const {name, status, species, location, origin, image} = principalCharacters.characters;

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (

        <motion.div initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}} className="card_container">
            <img src={image} alt=""/>
            <div onClick={() => setIsModalOpen(!isModalOpen)} className="card_text">
                {
                    isModalOpen === false && (
                        <div>
                            <h4>{name}</h4>
                            <button ><FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    )
                }
            </div>
            {
                isModalOpen && (
                    <div onClick={() => setIsModalOpen(!isModalOpen)} className="card_modal-text">
                        <div className="card_modal-selector">
                            <div className="card_modal-header">
                                <h4>{name}</h4>
                                <button onClick={() => setIsModalOpen(!isModalOpen)}><FontAwesomeIcon icon={faClose}/>
                                </button>
                            </div>
                            <p>{status} - {species}</p>
                            <div className="card_modal-status">
                                <div>
                                    <label>Last known location:</label>
                                    <p>{location.name}</p>
                                </div>
                                <div>
                                    <label>First seen in:</label>
                                    <p>{origin.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </motion.div>
    )
}

export default Card