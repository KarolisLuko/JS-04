"use strict"
//x=[y]*[y]

//y => saknis

function rask_sakni() {

const x = parseInt(document.getElementById('name').value); // = "121" => 121
let paklaida = 0.001;
let rez = document.getElementById("rezultatas")
// 1. 1.001
// 2. 1.002
// 3. 1.003

        for(let i=1; i<x; i+=paklaida) {
            const min_y = (i-paklaida);
            const max_y = (i+paklaida);
            
            if(min_y*min_y <= x && x <= max_y*max_y) {                
                rez.innerHTML = `<p class="achujienas_stilius"> ${i} </p>`;
                break
            }
        }
        }