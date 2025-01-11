gsap.from(".navbar " ,{
    x:800,
    scale:0,
    duration:0.5,
})

gsap.from("#leftfirst",{
    x:-400,
    scale:0,
    scrollTrigger:{
        trigger:"#leftfirst",
        scroller:"body",
        //markers:true
    }
})

gsap.from(".rightfirst",{
    x:1400,
    scale:0,
    scrollTrigger:{
        trigger:".rightfirst",
        scroller:"body",
        ///markers:true
    }
})

gsap.from(".Sceh2",{
    x:400,
    rotate:180,
    scale:0,
    scrollTrigger:{
        trigger:".Sceh2",
        scroller:"body",
        start:"top 75%",
    
    }
})

gsap.from(".mainskill",{
    y:-400,
    scale:0,
    scrollTrigger:{
        trigger:".skills",
        scroller:"body",
        start:"top 20%",
    }
})

gsap.from(".contact",{
    y:-400,
    scale:0,
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        start:"top 20%",
        //markers:true
    }
})