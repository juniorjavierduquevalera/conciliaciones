export interface AbonosBancarios {
    id: number;
    fecha: string;
    referencia: string;
    concepto: string;
    abono: number;
    codigo_operacion: string;
    tipo_operacion: string;
    tasa_de_cambio: string;
    moneda_nacional: string;
    moneda_extranjera: string;
    cambio: number;
    conversion: string;
    mes: string;
    año: string;
    fecha_creacion: string;
    fecha_actualizacion: string;
}