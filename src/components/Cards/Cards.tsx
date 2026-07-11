import type { jsonInterface } from "../../interfaces/JsonInterface";

interface CardsProps {
  Card: jsonInterface;
  NomeDoCard: string;
  AtualizarValorDeAtivoDoCard: (nomeDoCard: string) => void;
  RemoverCardDaLista: (nomeDoCard: string) => void;
}

export default function Cards({ Card, NomeDoCard, AtualizarValorDeAtivoDoCard, RemoverCardDaLista }: CardsProps) {
  return (
    <div className="flex flex-col p-4 gap-6 bg-[#FCFDFF] dark:bg-[#1F2535] dark:text-white shadow border border-[#D7DFEA] dark:border-[#53586B] rounded-3xl justify-between transition duration-200 ease-in-out">
      <div className="flex items-start gap-3">
        <img src={Card.logo} alt="card logo" />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[#00082D] dark:text-[#F8FBFF]">{Card.name}</h1>
          <span className="text-[#565960] dark:text-[#C2C6D1]">{Card.description}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="bg-[#FCFDFF] dark:bg-[#1F2437] focus:outline focus:outline-[#9E2D33] focus:dark:outline-[#D66964] px-4 py-2 rounded-4xl border border-[#CDCED0] dark:border-[#4D5363] cursor-pointer"
          onClick={() => RemoverCardDaLista(NomeDoCard)}
        >
          Remove
        </button>
        <button
          className={`${Card.isActive ? 'bg-[#C7221C] dark:bg-[#F45C56]' : ''} relative bg-[#C6C6C8] dark:bg-[#525868] w-12 h-6 rounded-4xl cursor-pointer`}
          onClick={() => AtualizarValorDeAtivoDoCard(NomeDoCard)}
        >
          <div className={`${Card.isActive ? 'translate-x-6' : ''} shadow transition-all duration-200 ease-in-out absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full`} />
        </button>
      </div>
    </div>

  )
}
