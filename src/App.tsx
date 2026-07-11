import Navbar from "./components/Navbar/Navbar"
import ExtensionsList from "./components/ExtensionList/ExtensionsList";
import Cards from "./components/Cards/Cards";
import { useState, useLayoutEffect, useEffect } from "react";
import type { jsonInterface } from "./interfaces/JsonInterface";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [whichButtonIsClicked, setWhichButtonIsClicked] = useState<number>(1);
  const [json, setJson] = useState<jsonInterface[]>([]);

  const ClicarNoBotaoDeFiltro = (botaoClicado: number) => {
    setWhichButtonIsClicked(botaoClicado);
  };

  const AtivarDarkMode = (valor: boolean) => {
    setIsDarkMode(valor);
  };

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const BuscarCards = async () => {
      const url = `${import.meta.env.BASE_URL}data.json`;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.error("Error: Response is not ok");
        }

        const result = await response.json();
        setJson(result);
      } catch {
        console.error("Error: There is an issue with the data fetch");
      }
    }

    BuscarCards();
  }, []);

  const CardsFiltrados = json.filter((cardFiltrado) => {
    const resultado = whichButtonIsClicked === 2 ? cardFiltrado.isActive : whichButtonIsClicked === 3 ? !cardFiltrado.isActive : true
    return resultado;
  });

  const AtualizarValorDeAtivoDoCard = (nomeDoCard: string) => {
    const cardASerAlterado = json.map((itemDoJson) => {
      if (itemDoJson.name === nomeDoCard) {
        return { ...itemDoJson, isActive: !itemDoJson.isActive };
      }
      return itemDoJson;
    });
    setJson(cardASerAlterado);
  };

  const RemoverCardDaLista = (nomeDoCard: string) => {
    const novoArray = json.filter(item => item.name != nomeDoCard);
    setJson(novoArray);
  };

  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(180deg,#EBF2FC_0%,#EEF8F9_100%)] dark:bg-[linear-gradient(180deg,#040918_0%,#091540_100%)]">
        <div className="sm:px-24 sm:py-12 px-5 py-12">
          <Navbar AtivarDarkMode={AtivarDarkMode} isDarkMode={isDarkMode} />
          <ExtensionsList ClicarNoBotaoDeFiltro={ClicarNoBotaoDeFiltro} whichButtonIsClicked={whichButtonIsClicked} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1">
            {CardsFiltrados.map((card, index) => (
              <Cards
                key={index}
                NomeDoCard={card.name}
                Card={card}
                AtualizarValorDeAtivoDoCard={AtualizarValorDeAtivoDoCard}
                RemoverCardDaLista={RemoverCardDaLista}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
