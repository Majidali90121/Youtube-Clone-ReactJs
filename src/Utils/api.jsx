const API_KEY = "Kovg2g00LN4ChKjLtbVZE8ySE32ARl3mgiXUpy4TGLJgDCrHnCs0Zgyd";

export const fetchPopularVideos = async (page = 1, perPage = 30) => {
  try {
    const response = await fetch(
      `https://api.pexels.com/videos/popular?page=${page}&per_page=${perPage}`, {
      headers: {
        Authorization: API_KEY
      }
    });

    const data = await response.json();

    return data.videos.map(video => ({
      id: video.id,
      title: video.user.name,
      thumbnail: video.image,
      videoUrl: video.video_files[0]?.link || "",
      duration: `${Math.floor(video.duration / 60)}:${String(video.duration % 60).padStart(2, '0')}`,
      channel: video.user.name,
      view:getFakeViews(),
      uploadTime:GenrateFakeTime()
    }));
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

function getFakeViews(){
  const views=Math.floor(Math.random()*1000000)+1000;
  return views.toLocaleString()
}

function GenrateFakeTime(){
  const now=new Date();
  const daysAgo=Math.floor(Math.random()*90)+1;
  const uploadDate=new Date(now.setDate(now.getDate() - daysAgo))
  const diff=Math.floor((new Date() - uploadDate)/(1000*60*60*24))
  if(diff<1) return 'Today'
  if(diff===1)return '1 day Ago'
  if(diff<7) return `${diff} days ago`
  if(diff < 30) return `${Math.floor(diff/7)} weeks ago`
  return `${Math.floor(diff/30)} months ago`

}