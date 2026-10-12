const ClientSection = () => {
  return (
    <section
      id="contact"
      className="parallax-fixed bg-[#323A45] bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 sm:py-16 lg:px-0 lg:py-[65px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25)), url('/images/1.jpg')",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1170px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
        <div className="flex items-center justify-center text-center">
          <h2 className="m-0 text-3xl font-normal uppercase leading-[1.35] text-white drop-shadow-[0_0_10px_rgba(0,0,0,.2)] sm:text-[38px] lg:text-[42px] lg:leading-[70px]">
            CLIENTS COME FIRST IN EVERYTHING WE DO.
          </h2>
        </div>

        <div className="flex items-center justify-center text-center">
          <p className="m-0 max-w-[550px] text-sm font-medium uppercase leading-7 text-white sm:text-[15px]">
            WE INVEST IN RELATIONSHIPS WITH OUR CLIENTS. OUR COMMITMENT IS TO
            CONTINUE TO BUILD ON OUR PAST SUCCESSES WITH PROVIDING UNMATCHED
            SERVICES THAT ARE VERY COMPETITIVELY PRICED. SERVICES AND SOLUTION
            OFFERED BY US GIVE DISTINCTIVE AND INDIVIDUALISTIC TASTE TO THE
            CLIENTS’ BUSINESS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
