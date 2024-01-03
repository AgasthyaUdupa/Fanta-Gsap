var tl = gsap.timeline({scrollTrigger:{
    trigger:'.two',
    start:'0% 95%',
    end:'70% 60%',
    scrub:true,
    // markers:true,
}})
tl.to('#fanta',{
    top:'120%',
    left:'-3%',
    // right:'-10%'
},'orange')
tl.to('#orange-cut',{
    top:'160%',
    left:'22%',
},'orange')
tl.to('#orange',{
    top:'170%',
    width:'15%',
    right:'10%',
},'orange')
tl.to('#leaf',{
    top:'100%',
    rotate:'150deg',
    left:'70%'
},'orange')
tl.to('#leaf2',{
    top:'110%',
    rotate:'150deg',
    left:'0%'
},'orange')
var tl2 = gsap.timeline({scrollTrigger:{
    trigger:'.three',
    start:'0% 95%',
    end:'70% 60%',
    scrub:true,
    // markers:true,
}})
tl2.from('.lemon',{
    rotate:'-90deg',
    // left:'-50%',
    top:'110%',
},'coke')
tl2.from('#cola',{
    rotate:'-90deg',
    // left:'0%',
    // right:"-100%",
    top:'90%',
},'pepsi')
tl2.from('#pepsi',{
    rotate:'90deg',
    // left:'0%',
    // right:"-100%",
    top:'80%',
},'pepsi')
tl2.to('#orange-cut',{
    left:'41%',
    width:'20%',
    // right:"-100%",
    top:'205%',
},'coke')
tl2.to('#fanta',{
    left:'34%',
    width:"33%",
    // right:"-100%",
    top:'215%',
},'coke')
