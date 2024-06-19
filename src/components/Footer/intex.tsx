const Footer: React.FC = () => {
  return (
    <footer className="border-t text-slate-500 py-3 text-center text-xs">
      Game data and images courtesy of{" "}
      <a
        className="text-orange-800 hover:underline"
        href="https://rawg.io/"
        target="_blank"
      >
        RAWG
      </a>
    </footer>
  );
};

export default Footer;
