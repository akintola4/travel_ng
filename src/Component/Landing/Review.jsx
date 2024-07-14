import ReadOnlyStarRating from './Star';

export default function Review(props) {
  return (
    <div>
        <div className='flex flex-col gap-2 review border-2 md:w-6/12 lg:w-8/12 card p-5 border-slate-100 rounded-xl  dark:bg-gray-800 shadow-[5px_5px_rgba(137,_207,_240,_0.4),_10px_10px_rgba(137,_207,_240,_0.3),_15px_15px_rgba(137,_207,_240,_0.2)]'>
            <h4 className='text-1xl lg:text-2xl font-medium '>"{props.title}"</h4>
            <p className=' text-xs text-slate-500  dark:text-slate-300 font-light'> {props.reviewInfo}
            </p>
            <ReadOnlyStarRating rating={props.rating}/>
             {/* here inorder to source out the rating which is in a sub object of the main obejct (info) we use dot notation to do it 
        props.(main-object).(sub-object).(object) */}
        <div className='flex flex-col my-2 gap-2'>
                <h4>{props.name}</h4>
                <p>{props.company}</p>
                <img src="img/google.svg" alt="" />
        </div>
                <img src={`/img/${props.img}`}  alt="" />
        </div>
    </div>
  )
}
