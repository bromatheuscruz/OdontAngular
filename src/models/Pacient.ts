import Address from "./Address";

export interface Pacient {
  name: string;
  responsibleName: string;
  rg: number;
  cpf: number;
  email: string;
  birthday: string;
  phones: string[];
  observation: string;
  address: Address;
}
