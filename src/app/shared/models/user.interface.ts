export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
}
export interface Reserva {
  resId?: string;
  ubicacion: string;
  llegada: string;
  salida: string;
  pasajeros: string;
}
