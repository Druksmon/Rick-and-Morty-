import portal from '../assets/portal.png'

const Loader = ({isLoading}) => {
  return(
      <>
          <div
               className={isLoading ? "loader_container" : " loader_container loader_container-off"}>
              <img className='rotate' src={portal} alt=""/>
          </div>
      </>
  )
}

export default Loader