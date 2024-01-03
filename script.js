var tl = gsap.timeline({scrollTrigger:{
    trigger:'.two',
    start:'0% 95%',
    end:'70% 60%',
    scrub:true,
    markers:true,
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
    top:'110%',
    rotate:'150deg',
    left:'80%'
},'orange')
tl.to('#leaf2',{
    top:'110%',
    rotate:'150deg',
    left:'0%'
},'orange')
