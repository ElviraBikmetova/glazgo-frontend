import baseApi from './BaseApi'
import { ICandidate } from '../interfaces/ICandidate'

const candidateApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchVacancyCandidates: build.query<ICandidate[], string>({
            query: (id) => ({
                url: `/api/candidates/${id}/`,
            }),
        }),
        fetchCandidates: build.query<ICandidate[], void>({
            query: () => ({
                url: `/api/candidates`,
            }),
            providesTags: result => ['Candidate']
        }),
        fetchCandidate: build.query<ICandidate, string>({
            query: (id) => ({
                url: `/api/candidates/${id}/`,
            }),
        }),
        createCandidate: build.mutation<ICandidate, ICandidate>({
            query: (candidate) => ({
                url: `/api/candidates`,
                method: 'POST',
                body: candidate
            }),
            invalidatesTags: ['Candidate']
        })
    })
})

export default candidateApi