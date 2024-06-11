export function formatImgUrl (width: string, imgPath: string) {
  const url = `https://image.tmdb.org/t/p/w${width}${imgPath}`
  return imgPath ? url : 'src/assets/placeholders/video_placeholder.png'
}
