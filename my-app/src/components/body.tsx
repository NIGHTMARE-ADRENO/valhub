import { useUser } from './usercontext';
import Reels from './reels';
import Watchtv from './watchtv';

function Body() {
    const { showreeldiv,showtvdiv } = useUser();

    return (
        <div className="w-screen flex-grow max-h-[calc(100%-110px)] bg-black border-blue-400 border-2">
            {showreeldiv && (
                <Reels />
            )}
            {showtvdiv && (
                <Watchtv />
            )}
        </div>
    )
}

export default Body;