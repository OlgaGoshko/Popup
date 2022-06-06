function Popup(options){
    const $buttonOpen = document.querySelector('#open-popup')
    const $popap = document.querySelector('#popup-window')
    const $buttonClose = document.querySelector('#close-popup')
    const $popapInner = document.querySelector('.popup__inner')

    // $buttonOpen.addEventListener('click', popupOpen)
    // $buttonClose.addEventListener('click', popupClose)

    return {
        // init- це старт
        init(){
            $popapInner.style.widht = options.widht + 'px'
            $buttonOpen.addEventListener('click', this.open)
            $buttonClose.addEventListener('click', this.close)
        },
        // Відкрити попап
        open(){
            $popap.classList.add('open')
        },
        // Закрити попап
        close(){
            $popap.classList.remove('open')
        },
    }
}

const popup = Popup({
    widht: 200,
})

popup.init()