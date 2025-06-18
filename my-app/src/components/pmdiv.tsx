import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
function Pmdiv()
{
    return(
        <div className="w-full h-full bg-amber-50 p-2">
            <Pmuserdiv />
        </div>
    )
}

function Pmuserdiv()
{
    return(
        <div className="w-auto  h-fit bg-amber-300 relative  p-2 flex justify-between items-center">
            <span>Username</span>
            <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
    );
}

export default Pmdiv;