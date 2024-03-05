export enum ERoutes {
    Root = "/",

    Registration = "/registration",
    Authorization = "/authorization",
    VacancyNew = "zayavka",
    Vacancies = "vacancies",
    Vacancy = "vacancies/:id",
    CandidatesOfVacancy = "vacancy/:id/candidates",
    Candidate = "candidates/:id",
    Candidates = "candidates",
    CandidateNew = "new-candidate",
    VacancyClosed = "vacancy-closed/:id"
}
