const Footer = () => {
  return (
    <footer className="bg-black py-4 flex flex-col justify-center items-center text-white absolute bottom-0 w-full bg-opacity-80">
      <div className="">Quotes Generated: 200</div>
      <div className="">
        Developed with ❤️ by{' '}
        <a
          className="underline"
          target="_blank"
          rel="noreffer"
          href="https://www.shivangmishra.tech"
        >
          Shivang Mishra
        </a>
      </div>
    </footer>
  );
};

export default Footer;
