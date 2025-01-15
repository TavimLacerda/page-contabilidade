const Hero = () => {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="text-4xl tracking-tight font-bold text-primary sm:text-5xl md:text-6xl">
          <span className="block">Contabilidade Simplificada</span>
          <span className="block text-secondary mt-3">para seu Negócio</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Soluções contábeis profissionais para impulsionar o crescimento da sua empresa com segurança e tranquilidade.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transition-colors duration-300 md:py-4 md:text-lg md:px-10"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;