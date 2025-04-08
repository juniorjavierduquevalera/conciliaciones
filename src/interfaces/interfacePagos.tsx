export interface Pagos {
  id: number;
  rif: string;
  razon_social: string;
  referencia: string;
  abono: string; 
  tipo_de_pago: string;
  fecha: string;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}