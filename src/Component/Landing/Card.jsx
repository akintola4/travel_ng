
export default function Card(props) {
  return (
    <div className="flex flex-row gap-4 dark:bg-gray-800 items-center cursor-pointer  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:shadow-2xl hover:shadow-sky-500/20 rounded-lg p-4 " data-aos="fade-right">
        <img src={`/img/${props.info.img}`} alt="" />
        <div>
          <div className="gap-2 flex flex-row ">
            <h4>{props.info.city}</h4>
            <h4>{props.info.country}</h4>
          </div>
            
            <div className="flex flex-row gap-4">
                <p className="text-md font-light">flights</p>
                <p className="text-md font-light">Hotels</p>
                <p className="text-md font-light">Resorts</p>
            </div>
        </div>
    </div>
  )
}
