function getPhoto(name = 'night') {
    fetch(`https://source.unsplash.com/1920x1080/?${name}`)
    .then((data) => {
        $('.wrap').css('background-image', `url(${data.url})`);
});
};

let x;
let stream = new Audio();
stream.src = "https://complex.in.ua/yantarne";
let streamPlay = false;
let d = 0;
$('.waves').hide()
$('.darkCol').hide();
$('.playBtn').click(function(){
    if(streamPlay === false) {
        spin();
        stream.play();
        streamPlay = true;
        $('.darkCol').fadeIn(100);
        $('.recorderImg').css('top', '43%');
        $('.absImg').css('top', '43%');
        $('.waves').fadeIn(1000);
        $('.row').css('top', '53%');
        $('.iconHolder').css('top', '53%');
        $('.playBtn').css('transform', 'rotate(-180deg)');
        playBtn.src = 'img/p2.png';
        $('.absImg').css('opacity', '0');
        getPhoto();
    } else {
        cl();
        stream.pause();
        $('.darkCol').fadeOut(100)
        $('.wrap').css('background-image', 'none');
        streamPlay = false;
        $('.recorderImg').css('top', '50%');
        $('.absImg').css('top', '50%');
        $('.row').css('top', '60%');
        $('.iconHolder').css('top', '60%');
        $('.waves').fadeOut(300);
        $('.playBtn').css('transform', 'rotate(0deg)');
        playBtn.src = 'img/p1.png';
        $('.absImg').css('opacity', '1');
    }
});
volumeInp.oninput = function() {
    stream.volume = volumeInp.value;
};
function spin() {
    x = setInterval(function(){
        d = d+5;
        $('.recorderImg').css('transform', `rotate(${d}deg)`);
    }, 100);
};
function cl() {
    clearInterval(x);
};



fetch('https://complex.in.ua/status-json.xsl?mount=/yantarne')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        $('.songName').text(data.icestats.source.title);
        $('.liveCount').text(data.icestats.source.listeners);
    });  
a = setInterval(function(){
    fetch('https://complex.in.ua/status-json.xsl?mount=/yantarne')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        $('.songName').text(data.icestats.source.title);
        $('.liveCount').text(data.icestats.source.listeners);
    });  
},1000);

$('#w1').hide();
$('#w2').hide();
$('#w3').hide();
$('#w4').hide();

$('.b1').mouseenter(function(){
    $('#w1').fadeIn(400);
});

$('.b1').mouseleave(function(){
    $('#w1').fadeOut(400);
});

$('.b2').mouseenter(function(){
    $('#w2').fadeIn(400);
});
$('.b2').mouseleave(function(){
    $('#w2').fadeOut(400);
});

$('.b3').mouseenter(function(){
    $('#w3').fadeIn(400);
});
$('.b3').mouseleave(function(){
    $('#w3').fadeOut(400);
});

$('.b4').mouseenter(function(){
    $('#w4').fadeIn(400);
});
$('.b4').mouseleave(function(){
    $('#w4').fadeOut(400);
});
$('.page3').mouseenter(function(){
    $('.darker').fadeOut(400);
});

$('.page3').click(function(){
    $('.darker').fadeOut(400);
});





