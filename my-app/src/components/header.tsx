import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Avatar from './avatar';

function Header() {
    return (
        <div className="w-screen min-h-[50px] bg-gray-400 flex items-center justify-between">
            <Avatar avatarUrl = "https://dummyimage.com/600x400/ff0000/fff.jpg" />
            <FontAwesomeIcon icon={faBell} className='text-2xl me-1'/>
        </div>
    )
}

export default Header;