const burger = document.getElementById('burger')
const searching = document.getElementById('searching')
const visitors = document.getElementById('visitors')
const calendar = document.getElementById('calendar')

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 980) {
        burger.setAttribute('onclick', "headerOpenMobile('navigation')")
        searching.setAttribute('onclick', "headerOpenMobile('searching')")
        visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
        calendar.setAttribute('onclick', "headerOpenMobile('calendar')")

    } else {
        burger.removeAttribute('onclick')
        searching.removeAttribute('onclick')
        visitors.removeAttribute('onclick')
        calendar.removeAttribute('onclick')
    }
})

if (window.innerWidth < 980) {
    burger.setAttribute('onclick', "headerOpenMobile('navigation')")
    searching.setAttribute('onclick', "headerOpenMobile('searching')")
    visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
    calendar.setAttribute('onclick', "headerOpenMobile('calendar')")
}