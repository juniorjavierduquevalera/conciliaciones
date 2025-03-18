export interface interfaceMaster {
  id: number;
  propietario: string;
  telefono: string;
  email: string;
  codigo: string;
  moneda_nacional: string;
  moneda_extranjera: string;
  cambio: number;
  descripcion: string;
  comercial: string;
  concepto: string;
  cargo: string;
  saldo: string;
  codigo_operacion: string;
  tipo_operacion: string;
  rif: string;
  direccion: string;
  superficie: string;
  razon_social: string;
  referencia: string;
  abono: string;
  abono_estado_de_cuenta: string;
  verificacion: string;
  fecha: string;
  mes: string;
  año: string;
  propietario_comercial: {
    id: number;
    propietario: string;
    rif: string;
  };
  fecha_creacion: string;
  fecha_actualizacion: string;
  createdAt: string;
  updatedAt: string;
}
