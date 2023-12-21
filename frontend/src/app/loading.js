export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-7">
        <img className="w-40 mb-10" src="/logo.svg" />
        <div class="loading loading-spinner loading-lg "></div>
        <p>Түр хүлээнэ үү...</p>
      </div>
    </div>
  );
}
