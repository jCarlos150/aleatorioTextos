import { createSlice } from "@reduxjs/toolkit"

const COLORS = ["#0C567D","#0C567D","#7F7906", "#FC7617", "#82453D", "#824080", "#461B82"]

export const  colorSlicer = createSlice({
    name: "color",
    initialState: {
       value: COLORS[Math.floor(Math.random() * 7)]
    },
    reducers : {
        chanceColor: state => {
          state.value = COLORS[Math.floor(Math.random()*7)]
        },
        chanceColorWithColor: (state, action) => {
            state.value = COLORS[action.payload]
        }
    }

})

export const {chanceColor, chanceColorWithColor} = colorSlicer.actions;
export default colorSlicer.reducer