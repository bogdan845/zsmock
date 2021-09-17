import {IRootState} from "../rootReducer";

export const availableTicketsSelector = (state: IRootState) => state.tickets.available;
export const ticketsDirectionsSelector = (state: IRootState) => state.tickets.directions;