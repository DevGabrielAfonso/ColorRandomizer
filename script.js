    const button = document.getElementById("rand");
    const tittle = document.getElementById("text");
    const color1 = document.getElementById("color1");
    const color2 = document.getElementById("color2");

function rand(){
    const background = document.body;
    var rgb = []
    var i = 0
    for (i = 0 ; i<3 ; i++){
        rgb[i] = Math.floor(Math.random()*255)
    }
    
    console.log(rgb)
    var r = rgb[0]
    var g = rgb[1]
    var b = rgb[2]
    
    var rInverted = 255 - r
    var gInverted = 255 - g
    var bInverted = 255 - b

    componentToHex = (c) => {
        const hex = Number(c).toString(16).padStart(2, '0');
        return hex;
    };

    rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    tittle.style.color = `rgb(${rInverted},${gInverted},${bInverted})`
    button.style.background = `rgb(${rInverted},${gInverted},${bInverted})`
    color1.style.color = `rgb(${r},${g},${b})`
    color2.style.color = `rgb(${rInverted},${gInverted},${bInverted})`
    color1.innerHTML = `RGB: ${r}, ${g}, ${b} <br> HEX: ${rgbToHex(r, g, b)}`;
    color2.innerHTML = `RGB: ${rInverted}, ${gInverted}, ${bInverted} <br> HEX: ${rgbToHex(rInverted, gInverted, bInverted)}`;

    if((rInverted+gInverted+bInverted)<300){
        button.style.color = "rgb(255,255,255)"
    } else {
        button.style.color = "rgb(0,0,0)"
    }
    background.style.backgroundColor = `rgb(${r},${g},${b})`
}