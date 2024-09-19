export default function HeroHome() {
  return (
    <div className="min-h-[400] top-[0] absolute">
      <video
        playsInline
        id="home-hero"
        role="application"
        preload="auto"
        muted
        autoPlay
        loop
        src="home-hero.mp4"
      ></video>
    </div>
  );
}
