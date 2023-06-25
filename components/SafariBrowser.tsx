export default function SafariBrowser() {
  return (
    <section className="pb-8 lg:pb-36">
      <div className="px-4 mx-auto text-white max-w-7xl md:px-8">
        <div className="px-4 h-[38px] bg-gradient-to-b from-gray-200 to-gray-300 flex items-center border-b border-[#9A979A] rounded-tl-lg rounded-tr-lg">
          <img
            src="/portfolio/safari/safari-close-btn.svg"
            alt="safari"
            height="12"
            width="52"
          />
        </div>
        <iframe
          id="safari"
          src="https://espacio-manila.vercel.app/"
          className="w-full h-[700px] shadow-5xl rounded-bl-lg rounded-br-lg"
        ></iframe>
      </div>
    </section>
  );
}