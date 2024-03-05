import { IPagination } from "./IPagination"
import { IUser } from "./IUser"
import { IVacancy } from "./IVacancy"

export interface ICandidate {
    _id: string
    attachedDate: string
    surname: string
    firstName: string
    patronymic: string
    birthday: Date
    email: string
    phone: string
    status: string,
    vacancy:  IVacancy,
    // referralProgram: number
    // resume: string
}

export interface ICandidateProm {
    candidatId: ICandidate
    vacancyId: IVacancy
    statusChange: number
    statusChangeDate: string
    recruterId: IUser
    appointmentDate: string
}

export interface ICandidatesResponseData extends IPagination {
    results: ICandidateProm[]
}

// export interface INewCandidate extends ICandidate {
//     vacancy: number
//     source: string
//     birthday: Date
//     comment: string
// }

