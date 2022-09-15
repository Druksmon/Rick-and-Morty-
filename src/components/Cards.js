
import Card from "./Card";


const Cards = ({allCharacters, principalCharacters, search}) => {


    return (

        <div className="cards_container">
            <div className="cards_selector">

                {
                    search === undefined && (
                        <div>
                            <p>Principal characters > </p>
                            <div className="cards_box">
                                {
                                    principalCharacters?.map((characters) => {
                                            return (
                                                <Card principalCharacters={{characters}} key={characters.name}/>
                                            )
                                        }
                                    )
                                }
                            </div>
                            <p>All characters > </p>
                            <div className="cards_box">
                                {
                                    allCharacters?.map((characters) => {
                                            return (
                                                <Card principalCharacters={{characters}} key={characters.name}/>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    )
                }

                <div className="cards_box">
                    {
                        search?.map((characters) => {
                                return (
                                    <Card principalCharacters={{characters}} key={characters.name} />
                                )
                            }
                        )
                    }
                </div>


            </div>
        </div>


    )
}

export default Cards