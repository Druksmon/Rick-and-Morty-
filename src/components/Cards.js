import Card from "./Card";
import {motion} from "framer-motion"

const Cards = ({allCharacters, principalCharacters, search, nextPage, prevPage}) => {


    return (

        <div  className="cards_container">
            <motion.div initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}} className="cards_selector">
                {search === undefined &&
                    (<div>
                        <p>Principal characters > </p>
                        <div className="cards_box">
                            {
                                principalCharacters?.map((characters) => {
                                    return (<Card principalCharacters={{characters}} key={characters.id}/>)
                                })
                            }
                        </div>
                        <div className='cards_prev-next'>
                            <p>All characters > </p>
                            <div>
                                <button onClick={() => prevPage()}>&larr;</button>
                                <button onClick={() => nextPage()}>&rarr;</button>
                            </div>
                        </div>

                        <div className="cards_box card_box-size ">
                            {
                                allCharacters?.results?.map((characters) => {
                                    return (<Card principalCharacters={{characters}} key={characters.id}/>)
                                })
                            }
                        </div>
                    </div>)
                }
                <div className="cards_box">

                    {
                        search?.results?.map((characters) => {
                            return (<Card principalCharacters={{characters}} key={characters.id}/>)
                        })
                    }
                </div>
            </motion.div>
            <div className="credits">
                <a target='_blank' href="https://www.linkedin.com/in/dariovolk/" rel="noreferrer">code by
                    dario-volkmann</a>
            </div>
        </div>


    )
}

export default Cards