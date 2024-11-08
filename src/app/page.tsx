import { Toggle } from "./components"
export default function Home() {
  return (
   <div>

    <Toggle/>
    <h1 className="font-pacifico text-6xl">Pacifico</h1>
      <p className="font-acme text-2xl">Acme</p>
      <p className="font-afacad text-2xl">Afacad</p>
      <div className="wrapper">
        <p className="text-2xl">Hello, world!</p>
      </div>
    </div>
  );
}
