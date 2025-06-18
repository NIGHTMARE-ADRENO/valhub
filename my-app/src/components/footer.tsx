import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faTrophy, faUserPlus, faUserGroup, faPlay, faTv } from '@fortawesome/free-solid-svg-icons';
import { useUser } from './usercontext';

function Footer() {
    const { showreeldiv, setshowreeldiv,showtvdiv,setshowtvdiv } = useUser();
    return (
        <div className="w-screen min-h-[60px] bg-red-500 flex items-center gap-4 overflow-x-auto lg:justify-between overflow-y-hidden px-2 relative z-9">
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]" onClick={() => setshowreeldiv(!showreeldiv)}>
                <li><FontAwesomeIcon icon={faPlay} className="text-2xl" /></li>
                <li>Reels</li>
            </ul>
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]" onClick={()=>setshowtvdiv(!showtvdiv)}>
                <li><FontAwesomeIcon icon={faTv} className="text-2xl" /></li>
                <li>Watch</li>
            </ul>
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]">
                <li><FontAwesomeIcon icon={faUserGroup} className="text-2xl" /></li>
                <li>Chat</li>
            </ul>
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]">
                <li><FontAwesomeIcon icon={faTrophy} className="text-2xl" /></li>
                <li>Tournaments</li>
            </ul>
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]">
                <li><FontAwesomeIcon icon={faUserPlus} className="text-2xl" /></li>
                <li>Requests</li>
            </ul>
            <ul className="flex flex-col items-center text-center text-xs min-w-[70px]">
                <li><FontAwesomeIcon icon={faInbox} className="text-2xl" /></li>
                <li>Inbox</li>
            </ul>
        </div>

    )
}

export default Footer;