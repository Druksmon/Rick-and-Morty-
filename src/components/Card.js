import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose, faPlus} from '@fortawesome/free-solid-svg-icons'


const Card = ({principalCharacters}) => {


    const {name, status, species, location, origin, image} = principalCharacters.characters;

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (

        <div className="card_container">
            <img src={image} alt=""/>
            <div className="card_text">
                {
                    isModalOpen === false && (
                        <div>
                            <h4>{name}</h4>
                            <button onClick={() => setIsModalOpen(!isModalOpen)}><FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    )
                }
            </div>
            {
                isModalOpen && (
                    <div className="card_modal-text">
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
        </div>
    )
}

export default Card