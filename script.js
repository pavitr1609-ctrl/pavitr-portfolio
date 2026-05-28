// LENIS SMOOTH SCROLL
const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// GSAP

gsap.registerPlugin(ScrollTrigger)

// HERO ANIMATION

gsap.from('.hero h1',{
    y:120,
    opacity:0,
    duration:1.5,
    ease:'power4.out'
})
<script>

function showVideos(){

    document
    .getElementById("videoSection")
    .style.display = "block";

}

function closeVideos(){

    document
    .getElementById("videoSection")
    .style.display = "none";

}

</script>
// SECTION REVEAL

gsap.utils.toArray('.glass-card,.project-card,.counter-box,.timeline-item').forEach(el=>{
    gsap.from(el,{
        scrollTrigger:{
            trigger:el,
            start:'top 85%'
        },
        y:100,
        opacity:0,
        duration:1,
        ease:'power3.out'
    })
})
// OPEN POPUP

const openBtn = document.getElementById("openVideos");
const closeBtn = document.getElementById("closeVideos");
const popup = document.getElementById("videoPopup");

openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

// CLOSE POPUP

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// CLOSE WHEN CLICK OUTSIDE

window.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});
// COUNTERS

document.querySelectorAll('.count').forEach(counter=>{
    let target = +counter.dataset.target
    let count = 0

    const update = ()=>{
        count += target / 80
        if(count < target){
            counter.innerText = Math.floor(count)
            requestAnimationFrame(update)
        }else{
            counter.innerText = target
        }
    }

    update()
})


<script>
<!-- SWIPER CDN -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>

function openMotionGallery(){

    document
    .getElementById("motionGallery")
    .classList.add("active");

}

function closeMotionGallery(){

    document
    .getElementById("motionGallery")
    .classList.remove("active");

    /* STOP ALL VIDEOS WHEN CLOSED */
    const videos = document.querySelectorAll("#motionGallery video");

    videos.forEach(video => {

        video.pause();
        video.currentTime = 0;

    });

}

/* SWIPER */
var motionSwiper = new Swiper(".motionSwiper", {

    loop:true,

    navigation:{
        nextEl:".motionSwiper .swiper-button-next",
        prevEl:".motionSwiper .swiper-button-prev",
    },

});

</script>
function openFilmGallery(){
    document
    .getElementById("filmGallery")
    .classList.add("active");
}

function closeFilmGallery(){
    document
    .getElementById("filmGallery")
    .classList.remove("active");
}

var filmSwiper = new Swiper(".filmSwiper", {

    loop:true,

    navigation:{
        nextEl:".filmSwiper .swiper-button-next",
        prevEl:".filmSwiper .swiper-button-prev",
    },

});

</script>
// VANILLA TILT
VanillaTilt.init(document.querySelectorAll('.glass-card,.project-card'),{
    max:10,
    speed:400,
    glare:true,
    'max-glare':0.3
})

// CURSOR GLOW
const cursor = document.createElement('div')
cursor.classList.add('cursor-glow')
document.body.appendChild(cursor)

window.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})
<!-- SWIPER JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
<script>

/* OPEN */
function openVideos(){

    document
    .getElementById("videoPopup")
    .classList.add("active");

}

/* CLOSE */
function closeVideos(){

    document
    .getElementById("videoPopup")
    .classList.remove("active");

}

</script>
/* OPEN */
function openVideoGallery(){

    document
    .getElementById("videoGallery")
    .classList.add("active");

}

/* CLOSE */
function closeVideoGallery(){

    document
    .getElementById("videoGallery")
    .classList.remove("active");

}

/* SWIPER */
var videoSwiper = new Swiper(".videoSwiper", {

    direction:"vertical",

    loop:true,

    mousewheel:true,

});

</script>
// PORTFOLIO FILTER SYSTEM
const filterButtons = document.querySelectorAll('.filter-btn')
const projectCards = document.querySelectorAll('.project-card')

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // REMOVE ACTIVE CLASS
        filterButtons.forEach(btn => btn.classList.remove('active'))

        // ADD ACTIVE CLASS
        button.classList.add('active')

        const filter = button.getAttribute('data-filter')

        projectCards.forEach(card => {

            if(filter === 'all'){
                card.style.display = 'block'
            }
            else if(card.classList.contains(filter)){
                card.style.display = 'block'
            }
            else{
                card.style.display = 'none'
            }

        })

    })
})