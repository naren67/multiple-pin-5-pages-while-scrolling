gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.page').forEach(page=>{
          ScrollTrigger.create({
                    trigger: page,
                    start:'top top',
                    pin:true,
                              //true - can view all the pages
                              //false - hide some pages
                    pinSpacing: true
          })
})