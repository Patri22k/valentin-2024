import { useState } from "react";
import { gMult } from "./util/math";

const MULTIPLIER = 1.5;
const D_BUTTON_SIZE = 100;
const D_FONT_SIZE = 24;
const MAX_FONT_SIZE = 100;

const labels = [
  'Si si istá prdko?',
  'Premysli si to las!',
  'Ešte máš šancu si to rozmyslieť!',
  'Bubik to naozaj? :(',
  'Už to prestáva byť vtipné!',
  'PRDKO! Klikni už na to áno!',
  'No tak, už to klikni!',
  'Klikni na to áno!',
  'Už to klikni!',
  'Už dosť!',
];

function App() {
  const [view, setView] = useState<number>(0);

  return view == 0
  ? <FirstView nextPage={() => setView(1)} />
  : <SecondView />;
}

function FirstView({ nextPage }: { nextPage: () => void }) {
  const [size, setSize] = useState<number>(D_BUTTON_SIZE);
  const [noSize, setNoSize] = useState<number>(D_BUTTON_SIZE);
  const [noLoc, setNoLoc] = useState<number[]|undefined>(undefined);
  const [clicks, setClicks] = useState<number>(0);

  let font = D_FONT_SIZE * (size / D_BUTTON_SIZE);

  if (font > MAX_FONT_SIZE) {
    font = MAX_FONT_SIZE;
  }

  return (
    <>
      <h1 className="absolute text-4xl sm:text-6xl z-10 -translate-x-1/2 break-keep w-full text-center top-[26%] animate-logo-anim">Budeš moja <span className="text-red-600">Valentínka</span>?</h1>
      <button className={`rounded z-0 absolute left-1/2 sm:left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FA8FCB] border-[#f465b6] border-[1px] shadow-lg hover:bg-[#f580c2] ${clicks <= 2 ? 'hover:-translate-y-[55%]' : ''}`} onClick={nextPage} style={{
        height: `${size}px`,
        width: `${size * 1.5}px`,
        fontSize: `${font}px`,
      }}>Áno</button>
      <button
        className={`rounded z-10 absolute bg-[#f5797d] border-[#d65257] border-[1px] shadow-lg hover:bg-[#ee7074] hover:-translate-y-[55%]`}
        onClick={() => {
          setClicks(clicks + 1);
          setSize(size * MULTIPLIER);
          setNoSize(noSize * 0.9);
          if (size > gMult(D_BUTTON_SIZE, MULTIPLIER, 3)) {
            setNoLoc([10 + Math.random() * 80, 10 + Math.random() * 80]);
          }
        }}
        style={{
          height: `${noSize}px`,
          width: `${noSize * MULTIPLIER}px`,
          fontSize: `${D_FONT_SIZE * (noSize / D_BUTTON_SIZE)}px`,
          left: noLoc ? `${noLoc[0]}%` : '70%',
          top: noLoc ? `${noLoc[1]}%` : '50%',
          transform: noLoc ? 'none' : 'translate(-50%, -50%)',
        }}
      >
        {clicks > 0 ? clicks > labels.length ? labels[Math.floor(Math.random() * labels.length)] : labels[clicks - 1] : 'Nie'}
      </button>
      <img src="/heart.png" className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/4" />
    </>
  );
}

function SecondView() {
  return (
    <div className="flex flex-col items-center p-10 space-y-10">
      <img src="https://c.tenor.com/E2_i2XDqoG4AAAAC/tenor.gif" className="rounded-xl" width={400} height={400} />
      <h1 className={`text-6xl`}>{"Lúbim ťa muah "}<span className="text-red-700">♥</span></h1>
    </div>
  )
}

export default App
