import { useState } from "react";
import Avatar from "./avatar";

type VideoUrlDef = {
  videourl: string;
};

function Reels() {
  return (
    <div className="w-screen h-full overflow-y-scroll snap-y snap-mandatory">
      <Reelcontainer videourl="1.mp4" />
      <Reelcontainer videourl="1.mp4" />
    </div>
  );
}

function Reelcontainer({ videourl }: VideoUrlDef) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full h-full snap-start relative">
      <video
        src={videourl}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 flex flex-col w-screen bg-gradient-to-t from-black/60 to-transparent p-4">
        <div className="flex items-center mb-2">
          <Avatar avatarUrl="https://dummyimage.com/600x400/ff0000/fff.jpg" />
          <span className="px-2 text-white font-semibold">Username</span>
        </div>

        <div
          className={`text-white text-sm ${
            expanded ? "line-clamp-none" : "truncate"
          } cursor-pointer`}
          onClick={() => setExpanded(!expanded)}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ex
          voluptate possimus, unde quis recusandae dolor? Veniam rerum id sed
          veritatis placeat soluta quidem est perferendis eum, illum nostrum
          exercitationem.
        </div>
      </div>
    </div>
  );
}

export default Reels;
