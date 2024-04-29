import { Schema } from 'mongoose'

export interface IEtudiant {
  name: string
  description: string
}

export interface ICompte {
  solde: number
  etudiant: IEtudiant & {
    _id: Schema.Types.ObjectId
  }
}

export interface IPassport {
  passport_uid: string
  etudiant: IEtudiant & {
    _id: Schema.Types.ObjectId
  }
}
