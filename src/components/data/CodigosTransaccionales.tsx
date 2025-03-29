import { interfaceCodigosTransaccionales } from "src/interfaces/interfaceCodigosTransaccionales";

export const dataCodigosTransaccionales = [{
    name: "Codigo",
    selector: (row:interfaceCodigosTransaccionales) => row.codigo,
    sortable: true,
},
{
    name: "Descripcion",
    selector: (row:interfaceCodigosTransaccionales) => row.descripcion,
    sortable: true,
},
];
