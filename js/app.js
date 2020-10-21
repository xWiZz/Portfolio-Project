let observer = new IntersectionObserver(function (observables){
    observables.forEach(function (observable){
        if (observable.intersectionRatio > 0.75){
            observable.target.classList.remove('not-visible')
            // observer.unobserve(observable.target)
        } else {
            observable.target.classList.add('not-visible')
        }
    })
}, {
    threshold: [0.75]

})

let items = document.querySelectorAll('.text, .image, .animation-top, .animation-top-left, .animation-top-right, .animation-bottom, .animation-bottom-left, .animation-bottom-right, .animation-left, .animation-right')
items.forEach(function (item){
    item.classList.add('not-visible')
    observer.observe(item)
})