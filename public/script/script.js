// openen van de pop-up/dialog

const personas = document.querySelectorAll('.members')

personas.forEach((persoon)=>{
    persoon.addEventListener('click', () => {
        const dataId = persoon.dataset.id
        const card = document.getElementById(dataId)
        console.log(card)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })

    })
})


function AddGoal() {
    // Get the checkbox
    const checkBoxGoal = document.querySelector(".checkboxGoal");
    // Get the output text
    const goals = document.querySelector(".goalMore");
  console.log(goals)
    // If the checkbox is checked, display the output text
    goals.classList.toggle('pen')
}

function AddAssist() {
    // Get the checkbox
    const checkBoxAssist = document.querySelector(".checkboxAssist");
    // Get the output text
    const Assists = document.querySelector(".assistMore");
  console.log(Assists)
    // If the checkbox is checked, display the output text
    Assists.classList.toggle('pen')
}

function AddBlock() {
    // Get the checkbox
    const checkBoxBlock = document.querySelector(".checkboxBlock");
    // Get the output text
    const Blocks = document.querySelector(".blockMore");
  console.log(Blocks)
    // If the checkbox is checked, display the output text
    Blocks.classList.toggle('pen')
}

function AddTurnover() {
    // Get the checkbox
    const checkBoxTurnover = document.querySelector(".checkboxTurnover");
    // Get the output text
    const Turnovers = document.querySelector(".turnoverMore");
  console.log(Turnovers)
    // If the checkbox is checked, display the output text
    Turnovers.classList.toggle('pen')
}

function AddPass() {
    // Get the checkbox
    const checkBoxPass = document.querySelector(".checkboxPass");
    // Get the output text
    const Pass = document.querySelector(".passMore");
  console.log(Pass)
    // If the checkbox is checked, display the output text
    Pass.classList.toggle('pen')
}