import React from 'react';

const HeroPage = () => {
  return (
    <div className="relative h-[100vh] bg-cover bg-center flex flex-col items-center justify-center ">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg')",
        }}
      >


        
      </div>

      {/* Content on top of the background */}
      <div className="relative flex flex-col items-center w-2/3 pt-16  justify-end opacity-100 z-10 gap-4">
        <h1 className="text-5xl text-center font-black text-white">
          Unlimited movies, TV shows and more
        </h1>
        <p className='font-[300] '>Starts at ₹149. Cancel anytime.</p>
        <p className='font-[300] '>Ready to watch? Enter your email to create or restart your membership.</p>
      
      <div className='flex gap-2'>
        <input placeholder='Email address ' className=' bg-black p-2  text-sm' />
        <button>Get Started</button>
      </div>
      
      </div>
    </div>
  );
};

export default HeroPage;
