import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos prontos para atender sua empresa
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center text-primary mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-primary">Telefone</h3>
            <p className="mt-2 text-gray-600">(11) 1234-5678</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center text-primary mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-primary">E-mail</h3>
            <p className="mt-2 text-gray-600">contato@contafacil.com.br</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center text-primary mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-primary">Endereço</h3>
            <p className="mt-2 text-gray-600">
              Av. Paulista, 1000 - São Paulo, SP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;