import {useEffect,useState} from 'react'
import {fetchPopularVideos} from './Utils/api'
import Videolist from './Components/VideoList'
function Account(){
    const [videos,setVideos] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        fetchPopularVideos()
        .then(data=>{
            setVideos(data.slice(0,3))
            setLoading(false)
        })
        .catch(err=>{
            console.error("Error in fetching: ",err)
            setLoading(false)
        })
    },[])

    return(
        <div className='Page'>
            <h2 className='Page-title'>Your videos</h2>
            {
                loading ? (
                    <div className='loading'>Loading........</div>
                ):(
                    <>
                    <div className='account-info'>
                        <img src='https://via.placeholder.com/80' alt='Profile' className='Profile-pic'/>
                        <h3>Your Channel</h3>
                        <p>Subscriptions: 1,234</p>
                    </div>
                    <Videolist videos={videos}></Videolist>
                    </>  
                )
            }
        </div>
    )
}
export default Account