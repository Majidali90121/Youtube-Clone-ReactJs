import {useEffect,useState} from 'react'
import VideoList from './Components/VideoList'
import {fetchPopularVideos} from './Utils/api'

function Subscriptions(){
    const [videos,setVideos] = useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
        setLoading(true)
        fetchPopularVideos()
        .then(data=>{
            setVideos(data.slice(0,5))
            setLoading(false)
        })
        .catch(err=>{
            console.error("Error in Subscription",err)
            setLoading(false)
        })
    },[])
    return(
        <div className='page'>
            <h2 className='page-title'>Your Subscription</h2>
            {
                loading ? (
                    <div className='loading'>Loading.........</div>
                ):(
                    <VideoList videos={videos} />
                )
            }
        </div>
    )
}
export default Subscriptions