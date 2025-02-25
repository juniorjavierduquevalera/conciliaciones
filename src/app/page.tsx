import ListaEmpresas from "src/components/comerciales";
import NavBarVertical from "src/components/NavBarVertical";
import ListaPropietarios from "src/components/propietariosComerciales";
import ListaDeCambios from "src/components/tasadecambio";

export default function Home() {
  return (
      <div className="flex">
        <div><NavBarVertical/></div>
        <div>
          <ListaPropietarios/>
          <ListaEmpresas/>
          <ListaDeCambios/>
        </div>
      </div>
  );
}
