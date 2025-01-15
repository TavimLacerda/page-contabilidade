import { Calculator, FileText, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Contabilidade Empresarial",
    description: "Gestão contábil completa para empresas de todos os portes",
    icon: Calculator,
  },
  {
    title: "Consultoria Fiscal",
    description: "Orientação especializada em tributos e obrigações fiscais",
    icon: FileText,
  },
  {
    title: "Planejamento Tributário",
    description: "Estratégias para otimização da carga tributária",
    icon: TrendingUp,
  },
  {
    title: "Departamento Pessoal",
    description: "Gestão completa da folha de pagamento e recursos humanos",
    icon: Users,
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluções completas para sua empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary">
                <service.icon size={32} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;