
export const GifItem = ({title, url}: any) => {

    console.log(title);
    

  return (
    <div className="card">
        <img src={url.url} alt="" />
        <p>{title}</p>
        </div>
  )
}
