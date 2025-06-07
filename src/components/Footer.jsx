

const Footer = () => {
  return (
    <footer className="bg-[#F9F5F2] border-t border-gray-300 py-6 px-4">
      <div className="max-w-[1080px] mx-auto w-full flex flex-col md:flex-row justify-between items-center text-sm font-sourcecode text-black gap-4">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <p>All right Reserved</p>
          <p>C Thuraya ALdj </p>
        </div>

        {/* Right Links */}
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" className="hover:underline">Github</a>
          <a href="https://wa.me" target="_blank" className="hover:underline">Whatsapp</a>
          <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
