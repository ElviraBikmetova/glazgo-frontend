
export const USER_ROLE: Record<string, string> = {
  customer: "Заказчик",
  recruiter: "Рекрутер",
}

export const VACANCY_STATUS: Record<string, string> = {
  open: "Открыта",
  suspend: "Приостановлена",
  close: "Закрыта"
}

export const CANDIDATE_STATUS: Record<string, string> = {
  new: "Новый",
  сall: "Созвон",
  thirdNotDialer: "3-й недозвон",
  cvAtSv: "Резюме",
  traineeship: "Стажировка",
  onboarding: "Оформление",
  rejection: "Отказ",
  personnelReserve: "Кадровый резерв"
}

export const SCHEDULE: Record<string, string> = {
  '5/2': "5/2",
  '3/2': "3/2",
  '2/2': "2/2"
}

export const REASON: Record<string, string> = {
  expansion: "Расширение штата",
  dismissal: "Увольнение сотрудника",
  promotion: "Повышение сотрудника"
}