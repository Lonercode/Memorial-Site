import {Outlet, Link} from 'react-router-dom'

function Text(){
    return (
        <>
        <div className = "bodyGuy">
        <h3>TO THE BEST DAD EVER</h3>
        <p>TO SAY WE MISS YOU IS AN UNDERSTATEMENT </p>
        </div>
        <div className = "quote">
            <p>"We are assured of your love even though we are apart, because so much we have shared is 
                written in our hearts"</p>
        </div>
        <div className = "quote2">
            <p>"Oh Lord in you we live, we move and we have our being"</p>
        </div>
        </>
        
    )
}

function Slider(){
    return (
      <>
      <div className = "slider">
      <div className = "slide"></div>
      <div className = "slide"></div>
      <div className = "slide"></div>
      </div>
      </>
    )
  }


function Home(){
    return (
        <>
        <Slider/>
        <Text/>
        <Outlet/>

        </>
    )
}

export default Home