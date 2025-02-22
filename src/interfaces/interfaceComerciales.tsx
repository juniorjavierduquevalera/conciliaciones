export interface Comerciales {
  id: number;
  codigo: string;
  comercial: string;
  rif: string;
  direccion: string;
  superficie: string;
  createdAt: string;
  updatedAt: string;
  propietario_comercial: {
    id: number;
    propietario: string;
    rif: string;
  };
}