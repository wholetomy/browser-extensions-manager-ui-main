interface BotoesClicadosProps {
  ClicarNoBotaoDeFiltro: (botaoClicado: number) => void;
  whichButtonIsClicked: number;
}

interface botoesInterface {
  id: number;
  text: string;
}

export default function ExtensionsList({ ClicarNoBotaoDeFiltro, whichButtonIsClicked }: BotoesClicadosProps) {
  const botoes: botoesInterface[] = [
    { id: 1, text: "All" },
    { id: 2, text: "Active" },
    { id: 3, text: "Inactive" }
  ]

  return (
    <div className="flex flex-wrap sm:justify-between justify-center items-center gap-4 text-[#0E163D] dark:text-[#FCFFFF] mt-10 mb-8">
      <h1 className="text-3xl font-semibold">Extensions List</h1>
      <div className="flex gap-2">
        {botoes.map(botao => (
          <button
            key={botao.id}
            onClick={() => ClicarNoBotaoDeFiltro(botao.id)}
            className={`shadow ${whichButtonIsClicked === botao.id ? 'bg-[#C62319] hover:bg-[#DD4840] dark:bg-[#F45B51] dark:hover:bg-[#E04741] text-white dark:text-[#060C24] border-[#C9403A] dark:border-[#050B21]' : 'bg-[#FCFDFF] hover:bg-[#F6F9FD] dark:bg-[#2F3649] dark:hover:bg-[#525769]'} rounded-3xl px-3.5 py-1.5 transition duration-200 ease-in-out cursor-pointer border border-[#E1E6EC] dark:border-[#50566C] focus:outline focus:outline-[#D76662]`}
          >
            {botao.text}
          </button>
        ))}
      </div>
    </div>
  )
}
