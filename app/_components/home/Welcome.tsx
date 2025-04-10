export default function Welcome() {
  return (
    <section className="flex flex-col gap-24 pt-40">
      <div className="flex flex-col items-center justify-center gap-9 text-center mix-blend-difference">
        <h1 className="text-3xl leading-[42px] whitespace-pre-line text-[#E1E1E1] md:text-[64px] md:leading-[69px]">
          {"The Foundation for\nEvery Business Agent"}
        </h1>
        <p className="text-sm whitespace-pre-line text-[#b59e9e] md:text-lg">
          {
            "Create a more efficient work environment\nwith your personal AI agents"
          }
        </p>
      </div>

      <div className="max-x-[1440px] aspect-[1.7/1] px-20">
        <video
          src="/landing/videos/main_bg.mp4"
          muted
          loop
          autoPlay
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  );
}
