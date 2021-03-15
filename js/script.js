const spans=document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
}))


const htmlbar = document.querySelector('.bar-html')
const cssbar = document.querySelector('.bar-css')
const jsbar = document.querySelector('.bar-javascript')

var t1 = new TimelineLite()

t1.fromTo(htmlbar, .75, {width: 'calc(0% - 6px)'},{width:'calc(95% - 6px)',ease: power4.easeOut})
   .fromTo(cssbar, .75, {width: 'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease: power4.easeOut})
   .fromTo(jsbar, .75, {width: 'calc(0% - 6px)'},{width:'calc(85% - 6px)',ease: power4.easeOut})

const controller = new ScrollMagic.controller()
const scene=new ScrollMagic.Scene({
    triggerElement:'.skills',
    triggerHook:0
})
.setTween(t1)
.addTo(controller)

const showRequiredcategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0;i<links.length;i++){
        if(links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }
    event.classList.add('active')
    const getcategory = document.querySelector('.category-${getId}')
    const categories = document.querySelectorAll('div[class^="category-"]')
    for(i=0; i<categories.length;i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showcategory')
            categories[i].classList.add('hidecategory')
        }
    }
    getcategory.classList.remove('hidecategory')
    getcategory.classList.add('showcategory')
}
