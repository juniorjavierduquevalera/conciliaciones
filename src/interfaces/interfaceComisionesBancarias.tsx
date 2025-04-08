export interface ComisionBancaria {
    id: number;
    fecha: string;
    referencia: string;
    concepto: string;
    cargo: string; 
    codigo_operacion: string;
    tipo_operacion: string;
    tasa_de_cambio: string | null;
    moneda_nacional: string;
    moneda_extranjera: string;
    cambio: number | null;
    conversion: string | null;
    mes: string;
    año: string;
    fecha_creacion: string;
    fecha_actualizacion: string;
  }