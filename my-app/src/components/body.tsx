import { useUser } from './usercontext';
import Reels from './reels';

function Body() {
    const { showreeldiv } = useUser();

    return (
        <div className="w-screen flex-grow bg-black border-blue-400 border-2">
            {showreeldiv && (
                <Reels />
            )}
        </div>
    )
}

export default Body;