export interface Clientes {
    id: number;
    razon_social: string,
    rif: string;
    telefono: string;
    email: string;
    direccion: string;
    contribuyente_especial: boolean;
    retencion_islr: string;
    retencion_islr_otro: string;
    retencion_iva: string;
    tipo_de_cliente: string;
  }