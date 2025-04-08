export default function Welcome() {
    return (
        <section>
            <video
                src="/videos/main_bg.mp4"
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 h-screen w-full object-cover"
            />
            <div className="flex h-screen flex-col items-center justify-center gap-9 text-center mix-blend-difference">
                <h1 className="text-3xl leading-[42px] whitespace-pre-line text-[#E1E1E1] md:text-[64px] md:leading-[69px]">
                    {"The Foundation for\nEvery Business Agent\nWrtn Agent OS"}
                </h1>
                <p className="text-sm whitespace-pre-line text-[#757575] md:text-lg">
                    {
                        "Create a more efficient work environment\nwith your personal AI agents"
                    }
                </p>
            </div>
        </section>
    )
}