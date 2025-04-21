import Player from "../common/Player";

export default function Welcome() {
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
        <Player
          url="https://studio-pro-fe.s3.ap-northeast-2.amazonaws.com/preview.mp4"
          playing={true}
          muted={true}
        />
      </div>
    </section>
  );
}
