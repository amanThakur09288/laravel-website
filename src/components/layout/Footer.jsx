const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
    <path fill="currentColor" d="M14 8h3V4.2c-.5-.1-2-.2-3.5-.2C10 4 8 6 8 9.6V12H5v4h3v8h4v-8h3.3l.7-4H12V10c0-1.2.3-2 2-2Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
    <path fill="currentColor" d="M21 7.1c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.8A3.4 3.4 0 0 0 12.5 9c0 .3 0 .5.1.8A9.6 9.6 0 0 1 5.6 6.3a3.4 3.4 0 0 0 1.1 4.5c-.5 0-1-.2-1.5-.4 0 1.6 1.1 3 2.7 3.3-.5.1-1 .1-1.5.1.4 1.3 1.7 2.3 3.2 2.3A6.8 6.8 0 0 1 5 17.5 9.6 9.6 0 0 0 10.2 19c6.2 0 9.6-5.2 9.6-9.6v-.4c.7-.5 1.2-1.1 1.7-1.9Z" />
  </svg>
);

const SkypeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
    <path fill="currentColor" d="M20.1 13.3c.1-.4.1-.8.1-1.3a8.2 8.2 0 0 0-8.2-8.2c-.4 0-.9 0-1.3.1A5.4 5.4 0 0 0 4.1 9.2c0 .4 0 .9.1 1.3A8.2 8.2 0 0 0 12.4 19c.4 0 .9 0 1.3-.1a5.4 5.4 0 0 0 6.4-5.6Zm-8.3 2.4c-2.6 0-4.4-1.2-4.4-3 0-.8.5-1.3 1.3-1.3.7 0 1 .4 1.3 1.1.2.5.6.9 1.7 1 1.2.1 1.8-.3 1.8-1 0-.5-.3-.8-1.3-1.1l-1.1-.3c-1.6-.5-3.1-1.1-3.1-2.8 0-1.7 1.6-2.8 3.9-2.8 2.5 0 4.1 1.1 4.1 2.8 0 .8-.5 1.3-1.2 1.3-.8 0-1.1-.4-1.3-1-.2-.5-.6-.8-1.5-.8-1 0-1.5.3-1.5.9 0 .5.4.8 1.3 1l1.2.3c1.8.5 3.2 1.2 3.2 2.9 0 1.8-1.7 2.9-4.4 2.9Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#292F38] px-4 py-5 text-white sm:px-6 lg:px-0">
      <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="m-0 text-center text-[11px] leading-[25px] text-[#AAAAAA] md:text-left">
          © Copyright 2017 Powered by{" "}
          <a href="#home" className="text-white hover:text-[#aaa]">
            Networx Technologies
          </a>
        </p>

        <div className="flex items-center">
          <a
            href="https://www.facebook.com/networx256/"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            className="mx-[2px] flex h-10 w-[35px] items-center justify-center text-[#666] transition hover:rounded-[5px] hover:bg-[#1964DA] hover:text-white"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            title="Twitter"
            className="mx-[2px] flex h-10 w-[35px] items-center justify-center text-[#666] transition hover:rounded-[5px] hover:bg-[#3ABDD1] hover:text-white"
          >
            <TwitterIcon />
          </a>
          <a
            href="#"
            title="Skype"
            className="mx-[2px] flex h-10 w-[35px] items-center justify-center text-[#666] transition hover:rounded-[5px] hover:bg-[#00AAF1] hover:text-white"
          >
            <SkypeIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
