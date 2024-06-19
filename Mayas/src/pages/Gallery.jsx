import {Outlet, Link} from 'react-router-dom'

function Pics(){
    return (
        <>
        <div className = "pictures">
            <div id='leftImages'>
            <img src = "\images\dad1.JPG"/>
            <img src = "\images\dad6.JPG"/>
            <img src = "\images\dad9.JPG"/>
            <img src = "\images\dad12.JPG"/>
            <img src = "\images\dad15.JPG"/>
            <img src = "\images\dad18.JPG"/>
            <img src = "\images\dad21.JPG"/>
            <img src = "\images\dad24.JPG"/>
            <img src = "\images\dad27.JPG"/>
            <img src = "\images\dad30.JPG"/>
            <img src = "\images\dad33.JPG"/>
            <img src = "\images\dad36.JPG"/>
            <img src = "\images\dad39.JPG"/>
            <img src = "\images\dad42.JPG"/>
            <img src = "\images\dad45.JPG"/>
            <img src = "\images\dad48.JPG"/>
            <img src = "\images\dad51.JPG"/>
            <img src = "\images\dad54.JPG"/>
            <img src = "\images\dad57.JPG"/>
            <img src = "\images\dad60.JPG"/>
            <img src = "\images\dad63.JPG"/>
            <img src = "\images\dad66.JPG"/>
            <img src = "\images\dad69.JPG"/>
            <img src = "\images\dad72.JPG"/>
            <img src = "\images\dad75.JPG"/>
            <img src = "\images\dad77.JPG"/>
            <img src = "\images\dad79.JPG"/>
            <img src = "\images\dad82.JPG"/>
            <img src = "\images\dad85.JPG"/>
            <img src = "\images\dad88.JPG"/>
            <img src = "\images\dad91.JPG"/>
           
            </div>

            <div id='midImages'>
            <img src = "\images\dad4.JPG"/>
            <img src = "\images\dad7.JPG"/>
            <img src = "\images\dad10.JPG"/>
            <img src = "\images\dad13.JPG"/>
            <img src = "\images\dad16.JPG"/>
            <img src = "\images\dad19.JPG"/>
            <img src = "\images\dad22.JPG"/>
            <img src = "\images\dad25.JPG"/>
            <img src = "\images\dad28.JPG"/>
            <img src = "\images\dad31.JPG"/>
            <img src = "\images\dad34.JPG"/>
            <img src = "\images\dad37.JPG"/>
            <img src = "\images\dad40.JPG"/>
            <img src = "\images\dad43.JPG"/>
            <img src = "\images\dad46.JPG"/>
            <img src = "\images\dad49.JPG"/>
            <img src = "\images\dad52.JPG"/>
            <img src = "\images\dad55.JPG"/>
            <img src = "\images\dad58.JPG"/>
            <img src = "\images\dad61.JPG"/>
            <img src = "\images\dad64.JPG"/>
            <img src = "\images\dad67.JPG"/>
            <img src = "\images\dad70.JPG"/>
            <img src = "\images\dad73.JPG"/>
            <img src = "\images\dad78.JPG"/>
            <img src = "\images\dad80.JPG"/>
            <img src = "\images\dad83.JPG"/>
            <img src = "\images\dad86.JPG"/>
            <img src = "\images\dad89.JPG"/>
            <img src = "\images\dad92.JPG"/>
            <img src = "\images\dad95.JPG"/>
            </div>

            <div id='rightImages'>
            <img src = "\images\dad5.JPG"/>
            <img src = "\images\dad8.JPG"/>
            <img src = "\images\dad11.JPG"/>
            <img src = "\images\dad14.JPG"/>
            <img src = "\images\dad17.JPG"/>
            <img src = "\images\dad20.JPG"/>
            <img src = "\images\dad23.JPG"/>
            <img src = "\images\dad26.JPG"/>
            <img src = "\images\dad29.JPG"/>
            <img src = "\images\dad32.JPG"/>
            <img src = "\images\dadMain.JPG"/>
            <img src = "\images\dad38.JPG"/>
            <img src = "\images\dad41.JPG"/>
            <img src = "\images\dad44.JPG"/>
            <img src = "\images\dad47.JPG"/>
            <img src = "\images\dad50.JPG"/>
            <img src = "\images\dad53.JPG"/>
            <img src = "\images\dad56.JPG"/>
            <img src = "\images\dad59.JPG"/>
            <img src = "\images\dad62.JPG"/>
            <img src = "\images\dad65.JPG"/>
            <img src = "\images\dad68.JPG"/>
            <img src = "\images\dad71.JPG"/>
            <img src = "\images\dad74.JPG"/>
            <img src = "\images\dad76.JPG"/>
            <img src = "\images\dad81.JPG"/>
            <img src = "\images\dad84.JPG"/>
            <img src = "\images\dad87.JPG"/>
            <img src = "\images\dad90.JPG"/>
            <img src = "\images\dad93.JPG"/>
            <img src = "\images\dad94.JPG"/>
            </div>
        
            
        

        </div>
        </>
    )
}

function Gallery(){
    return (
        <>
        <Pics/>
        <Outlet/>
        </>
    )
}

export default Gallery