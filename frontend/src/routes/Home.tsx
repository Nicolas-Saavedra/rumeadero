import { Button } from "@/components/ui/Button";
import { useDialogSet } from "@/context/dialogContext";

export default function Home() {
  const setDialog = useDialogSet();
  return (
    <div className="p-16 relative min-h-screen">
      <div className="flex">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-6xl text-center font-[Montserrat] w-full mt-52">
            El lugar preferido para el{" "}
            <span className="text-yellow-400">Uniandino</span> comunitario
          </h1>
          <Button
            className="rounded w-48 h-12 text-xl text-stone-900 bg-yellow-300 hover:bg-yellow-200 mt-8"
            onClick={() => setDialog("signup")}
          >
            Unete ahora!
          </Button>
        </div>
        <img
          className="w-1/2"
          src="people.svg"
          alt="People talking with each other"
        />
      </div>
      <pre className="absolute ml-auto mr-auto bottom-2 right-10 text-sm text-center">
        <a href="https://www.freepik.es/vector-gratis/gente-yendo-universidad-diseno-plano_4906028.htm#fromView=search&page=1&position=7&uuid=52b57bad-e22c-4a3e-ad98-3fa6a5b8d56f">
          Imagenes usadas de freepik
        </a>
      </pre>
    </div>
  );
}
