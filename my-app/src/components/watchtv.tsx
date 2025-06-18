import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Avatar from './avatar';

type Thumbnailurlprops=
{
    thumbnailurl:string;
}

function Watchtv() {
    return (
        <div className="w-full h-full bg-black flex flex-col relative z-0 overflow-y-scroll p-2">
            <Searchbar />
            <Videodiv thumbnailurl='thumbnails/thumb1.jpg' />
            <Videodiv thumbnailurl='thumbnails/thumb1.jpg'/>
            <Videodiv thumbnailurl='thumbnails/thumb1.jpg'/>
            <Videodiv thumbnailurl='thumbnails/thumb1.jpg'/>
        </div>
    )
}

function Searchbar() {
    const [searchtext, setsearchtext] = useState("");
    return (
        <div className="w-full h-[50px] bg-black flex items-center justify-between gap-3 p-1">
            <div className='h-full flex flex-grow border-2 items-center border-white rounded-xl p-2'>
                <input type='text' value={searchtext} onChange={(e) => setsearchtext(e.target.value)} className='h-full w-full focus:outline-0 text-white ms-2 me-2' autoCapitalize='on' autoCorrect='off' spellCheck="false" />
                <FontAwesomeIcon icon={faXmark} className='text-2xl text-white' onClick={() => setsearchtext("")} />
            </div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl text-white' />
        </div>
    )
}

function Videodiv({thumbnailurl}:Thumbnailurlprops) {
    return (
        <div className='w-auto h-60 m-2 shrink-0 bg-black relative'>
            <img src={thumbnailurl} className='w-full h-full object-cover'/>
            <div className='absolute  top-0 z-9 w-full h-[50px] flex justify-between overflow-hidden text-base text-white'>
                <Avatar avatarUrl='thumbnails/thumb1.jpg'/>
                <p className='px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo in itaque minus quisquam ullam libero quaerat aliquam reprehenderit quae possimus laudantium placeat excepturi tenetur eius, soluta accusamus neque voluptatum!</p>
            </div>
        </div>
    );
}

export default Watchtv;