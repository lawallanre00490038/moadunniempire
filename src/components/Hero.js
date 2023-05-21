import React from 'react';

function Hero() {
  return (
    <section className="w-full mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-2/5 xl:w-3/5 flex flex-col justify-center self-start md:mt-20 mt-10 px-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">Welcome to Our Fashion Store</h1>
        <p className="text-lg xl:text-xl text-gray-600 mb-8">Shop the latest fashion trends in our online store.</p>
        <a href="#" className="text-lg xl:text-xl text-white bg-[#4c0082] py-2 px-4 md:px-6 rounded-lg hover:bg-blue-600 max-w-[300px]">
          See the latest styles
          <i className="fas fa-tshirt ml-2"></i>
        </a>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 xl:w-2/5 relative mt-6 md:mt-0">
        <img className="w-full h-300" src='/images/hero/moadunni.png' alt="Hero" />
        <span className="absolute inset-0 opacity-25"></span>
      </div>
    </section>
  );
}

export default Hero;
