const burger = document.getElementById('burger')
const booking = document.getElementById('bookingMobile')
const searching = document.getElementById('searching')
const visitors = document.getElementById('visitors')
const calendar = document.getElementById('calendar')
const emoji = document.getElementById('emoji')
const filter = document.getElementById('filter')
const account = document.getElementById('account')

window.addEventListener('resize', () => {
    if (document.body.offsetWidth < 1280) {
        burger.setAttribute('onclick', "headerOpenMobile('navigation')")
        if (searching) {
            searching.setAttribute('onclick', "headerOpenMobile('searching')")
        }

        if (visitors) {
            visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
        }

        if (calendar) {
            calendar.setAttribute('onclick', "headerOpenMobile('calendar')")
        }

        if (emoji) {
            emoji.setAttribute('onclick', "headerOpenMobile('emoji')")
        }

        if (filter) {
            filter.setAttribute('onclick', "headerOpenMobile('filter')")
        }

        if (booking) {
            booking.setAttribute('onclick', "headerOpenMobile('booking')")
        }

        if (account) {
            account.setAttribute('onclick', "headerOpenMobile('account')")
        }
    } else {
        burger.removeAttribute('onclick')

        if (searching) {
            searching.removeAttribute('onclick')
        }

        if (visitors) {
            visitors.removeAttribute('onclick')
        }

        if (calendar) {
            calendar.removeAttribute('onclick')
        }

        if (emoji) {
            emoji.removeAttribute('onclick')
        }

        if (filter) {
            filter.removeAttribute('onclick')
        }

        if (booking) {
            booking.removeAttribute('onclick')
        }

        if (account) {
            account.removeAttribute('onclick')
        }
    }
})

if (window.innerWidth < 1280) {
    burger.setAttribute('onclick', "headerOpenMobile('navigation')")
    
    if (searching) {
        searching.setAttribute('onclick', "headerOpenMobile('searching')")
    }

    if (visitors) {
        visitors.setAttribute('onclick', "headerOpenMobile('visitors')")
    }

    if (calendar) {
        calendar.setAttribute('onclick', "headerOpenMobile('calendar')")
    }

    if (emoji) {
        emoji.setAttribute('onclick', "headerOpenMobile('emoji')")
    }

    if (filter) {
        filter.setAttribute('onclick', "headerOpenMobile('filter')")
    }

    if (booking) {
        booking.setAttribute('onclick', "headerOpenMobile('booking')")
    }

    if (account) {
        account.setAttribute('onclick', "headerOpenMobile('account')")
    }
}