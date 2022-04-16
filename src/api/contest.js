import { api } from "./base";

export const answerq = (gp, data, token) => {
    return api.post(`/contest/group/${gp}/questions/`, data, {
        headers:{'Authorization': `JWT ${token}`}});
}
