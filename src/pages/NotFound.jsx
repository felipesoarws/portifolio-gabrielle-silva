import GoBack from "../components/GoBack";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-[7rem] lg:gap-[2vw] lg:mt-[4vw] lg:mx-[10vw]">
      <GoBack />
      <div className="flex flex-col items-center justify-center text-center gap-[2rem] lg:gap-[1vw]">
        <h1 className="made-bold text-[3rem] lg:text-[6vw] text-[#F86C9A]">
          Ops!
        </h1>
        <h2 className="made-medium text-[1.5rem] lg:text-[2vw]">
          O caminho que você ta tentando acessar não existe!
        </h2>
        <h3 className="made-medium text-[1.5rem] lg:text-[2vw]">
          Clique no botão no canto{" "}
          <span className="text-[#F86C9A]">superior esquerdo</span> para voltar
          a página principal! :)
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
