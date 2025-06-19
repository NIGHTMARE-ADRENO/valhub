import { useUser } from './usercontext';
import Reels from './reels';
import Watchtv from './watchtv';
import Pmdiv from './pmdiv';

function Body() {
    const { activeView } = useUser();

    return (
        <div className="w-screen flex-grow max-h-[calc(100%-110px)] bg-black border-blue-400 border-2">
            {activeView === "reels" && <Reels />}
            {activeView === "tv" && <Watchtv />}
            {activeView === "pm" && <Pmdiv />}
        </div>
    )
}

export default Body;