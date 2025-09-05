import { defineStore } from 'pinia'

let UUID = 0;

function UniqueID() {
    const getID = () => {
        UUID++
        return UUID
    }

    return {
        getID
    }
}

export const useDrawStore = defineStore('draw', {
    state: () => ({
        draw: {
            title: '',
            price: '',
            date: '',
            comments: '',
            host: '',
            participants: [
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] },
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] },
                { participantID: UniqueID().getID(), name: "", email: "", exclude: [], wishlist: [], result: '', errors: [] }
            ],
        },
    }),
    getters: {
        getDrawStored(state) {
            return state.draw
        }
    },
    actions: {
        setDraw(newDraw) {
            this.draw = newDraw
        },
        setParticipants(participants) {
            this.draw.participants = participants
        }
    }
})
