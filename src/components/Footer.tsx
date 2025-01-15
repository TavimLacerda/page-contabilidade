const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white">
            © {new Date().getFullYear()} ContaFácil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;