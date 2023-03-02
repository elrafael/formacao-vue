import { seedData } from "./seed"
import { reactive } from 'vue'

export const store = {
  state: {
    data: reactive(seedData)
  },
  getActiveDay() {
    return this.state.data.find( day => day.active)
  },
  setActiveDay(dayId) {
    this.state.data.map( dayObj => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
    })
  },
  submitEvent(details) {
    const activeDay = this.getActiveDay()
    activeDay.events.push({
      details,
      edit: false
    })
  }
}