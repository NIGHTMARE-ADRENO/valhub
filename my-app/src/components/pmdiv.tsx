import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleChevronRight, faPaperPlane, faPencil, faSmile, faTrash } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./avatar";
import { useRef, useState, useEffect } from "react";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons/faChevronCircleLeft";

type Privatelogsprop = {
    message: string;
    userid: number;
    time: string;
}

function Pmdiv() {
    const [isdivselected, setisdivselected] = useState<boolean>(false);
    const [selectedusername, setselectedusername] = useState<string>("");

    return (
        <div className="w-full h-full bg-amber-50">
            {isdivselected && <Pmusercontainer setisdivselected={setisdivselected} selectedusername={selectedusername} />}
            {!isdivselected && <Pmuserdiv setisdivselected={setisdivselected} setselectedusername={setselectedusername} />}
        </div>
    )
}

function Pmuserdiv({ setisdivselected, setselectedusername }: any) {
    return (
        <div className="w-full h-full bg-amber-50 p-2">
            <div className="w-auto  h-fit bg-amber-300 relative  p-2 flex  items-center" onClick={() => {
                setisdivselected(true);
                setselectedusername("username");
            }}>
                <Avatar avatarUrl="https://dummyimage.com/600x400/ff0000/fff.jpg" />
                <div className="flex ms-2 justify-between flex-grow items-center">
                    <span>Username</span>
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </div>
            </div>
        </div>
    );
}

function Pmusercontainer({ setisdivselected, selectedusername }: any) {
    const pmcontainerref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (pmcontainerref.current) {
            pmcontainerref.current.scrollTop = pmcontainerref.current.scrollHeight;
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-[50px] bg-black flex items-center " onClick={() => setisdivselected(false)}>
                <FontAwesomeIcon icon={faChevronCircleLeft} className="text-2xl text-white" />
                <div className="px-2">
                    <Avatar avatarUrl="https://dummyimage.com/600x400/ff0000/fff.jpg"></Avatar>
                </div>
                <span className="text-white px-2">{selectedusername}</span>
            </div>
            <div className="w-full flex-grow bg-green-500 flex flex-col overflow-y-scroll" ref={pmcontainerref}>
                <Privatelogs message="allah" userid={191} time="12:00pm" />
                <Privatelogs message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales eleifend tellus quis congue. Quisque rutrum nisi dolor, in scelerisque est ullamcorper et. Curabitur in aliquam elit, non ultrices diam. Proin a facilisis magna. Duis molestie massa ut turpis ultrices pulvinar. Etiam eget neque eleifend, egestas felis a, tincidunt felis. Curabitur mollis vehicula rhoncus. Nam tincidunt odio quis tellus posuere tincidunt. Donec interdum arcu in est feugiat, sed elementum libero dictum. Quisque eget turpis pharetra arcu vulputate ultrices." userid={192} time="12:00pm" />
            </div>
            <div className="w-full h-[50px] bg-black px-2">
                <TextBar />
            </div>
        </div>
    )
}

function Privatelogs({ message, userid, time }: Privatelogsprop) {
    const [privatelogoptions, setprivatelogsoptions] = useState<boolean>(true);
    return (
        <div className={`max-w-[80%] h-fit p-2 my-2 bg-black text-white flex flex-row ${userid == 191 ? 'ms-auto' : 'me-auto'}`} onClick={() => alert("ok")}>

            <div className="flex flex-col">
                <div>
                    {message}
                </div>
                <div>
                    {time}
                </div>
            </div>
            {privatelogoptions && (
                <Privatelogsoptions />
            )}
        </div>
    )
}

function Privatelogsoptions() {
    return (
        <div className="flex flex-col items-center justify-evenly border-l-2 border-blue-500">
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faPencil} />
        </div>
    )
}
function TextBar() {
    const [searchtext, setsearchtext] = useState("");
    return (
        <div className="w-full h-[50px] bg-black flex items-center justify-between gap-3 p-1">
            <FontAwesomeIcon icon={faBars} className='text-2xl text-white' />
            <FontAwesomeIcon icon={faSmile} className='text-2xl text-white' />
            <div className='h-full flex flex-grow border-2 items-center border-white rounded-xl p-2'>
                <input type='text' value={searchtext} onChange={(e) => setsearchtext(e.target.value)} className='h-full w-full focus:outline-0 text-white ms-2 me-2' autoCapitalize='on' autoCorrect='off' spellCheck="false" />
            </div>
            <FontAwesomeIcon icon={faPaperPlane} className='text-2xl text-white' />
        </div>
    )
}



export default Pmdiv;