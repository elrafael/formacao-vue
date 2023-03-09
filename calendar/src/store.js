import {seedData} from './seed'
import {reactive} from 'vue'

export const store = {
    state: {
        data: reactive(seedData),
    },
    getActiveDay(){
        return this.state.data.find( day => day.active);
    },
    setActiveDay(dayId){
        this.state.data.map( dayObj => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        })
    },
    submitEvent(details){
        const activeDay = this.getActiveDay();
        activeDay.events.push({
            details, // ES9 - shorthand properties
            edit: false,
        })
    },
    editEvent(dayId, eventDetails){
        this.resetEditAllEvents();
        /* const dayObj = this.state.data.find(day => day.id === dayId);
        const eventObj = dayObj.events.find( event => event.details == eventDetails); */
        const eventObj = this.getEventObject(dayId, eventDetails);
        eventObj.edit = true;
    },
    updateEvent(dayId, originalEventDetails, newEventDetails){
        const eventObj = this.getEventObject(dayId, originalEventDetails);
        eventObj.details = newEventDetails;
        eventObj.edit = false;
    },
    deleteEvent(dayId, eventDetails){
        const dayObj = this.state.data.find(day => day.id === dayId);
        const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails);
        dayObj.events.splice(eventIndexToRemove, 1);
    },
    getEventObject(dayId, eventDetails){
        const dayObj = this.state.data.find(day => day.id === dayId);
        return dayObj.events.find( event => event.details === eventDetails);
    },
    resetEditAllEvents(){ // garantir a edicao so de um evento
        this.state.data.map ( day => day.events.map( event => event.edit = false));
    }


}