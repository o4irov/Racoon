//3D Scrolling
let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName("header_me"),
    frames = Array.from($frames),
    zVals = [],
    arrow = document.getElementById("arrows")
$services = document.getElementsByClassName("services_li"),
    services = Array.from($services)


window.onscroll = function () {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -4
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.3 ? 1 : 0
        opacityArrow = zVals[i] < Math.abs(zSpacing) / 2 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
        arrow.setAttribute('style', `opacity: ${opacityArrow}`)
    })

    //Scroll of services

    if (document.documentElement.scrollTop > 1200) {
        services[0].style.opacity = .17
        services[1].style.opacity = .29
        services[2].style.opacity = 1
        return
    }
    if (document.documentElement.scrollTop > 700) {
        services[0].style.opacity = .29
        services[1].style.opacity = 1
        services[2].style.opacity = .29
        return
    }
    services[0].style.opacity = 1
    services[1].style.opacity = .29
    services[2].style.opacity = .17
}