import { useState } from "react";
import Player from "../common/Player";
import { PlayCircle } from "lucide-react";

export default function Welcome() {
  const [viewPromotion, setViewPromotion] = useState(false);

  return (
    <section className="flex w-full flex-col gap-24 pt-40 px-4 md:px-40">
      <div className="flex flex-col items-center justify-center gap-9 text-center">
        <h1 className="font-oceanic text-[32px] leading-[38px] md:whitespace-pre-line text-[#002424] md:text-[64px] md:leading-[69px]">
          {"The Foundation for\nEvery Business Agent"}
        </h1>
        <p className="text-sm whitespace-pre-line text-[#757575] md:text-lg">
          {
            "Create a more efficient work environment\nwith your personal AI agents"
          }
        </p>
      </div>

      <div className="max-x-[1440px]">
        {viewPromotion ? (
          <Player
            url="https://studio-pro-fe.s3.ap-northeast-2.amazonaws.com/preview.mp4"
            playing
            muted
          />
        ) : (
          <div className="relative group">
            <video
              src="/videos/shortcut.mp4"
              muted
              loop
              autoPlay
              className="relative h-auto w-full object-cover rounded-4xl"
            >
              <source src="/videos/shortcut.mp4" type="video/mp4" />
              <source src="/videos/shortcut.mp4" type="video/webm" />
            </video>
            <button className="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-300 cursor-pointer items-center gap-2 pl-5 pr-1 py-1 text-[#E6FDFC] group-hover:text-[#002424] flex rounded-full bg-[#002424] group-hover:bg-[#E6FDFC] text-lg" onClick={() => setViewPromotion(true)}>
              Watch Video
              <PlayCircle size={48} strokeWidth={1} />
            </button>
          </div>
        )
        }
      </div>
    </section>
  );
}
