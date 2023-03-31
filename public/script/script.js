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