const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Sobre Nós
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Há mais de uma década oferecendo soluções contábeis de excelência
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-600">
                Fornecer serviços contábeis de alta qualidade, contribuindo para o
                sucesso e crescimento sustentável de nossos clientes.
              </p>
            </div>

            <div className="bg-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Nossos Valores
              </h3>
              <p className="text-gray-600">
                Ética, transparência e excelência são os pilares que norteiam
                nossa atuação profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;