window.addEventListener('scroll', () => {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("percentage-scroller-bar").style.width = scrolled + "%";

})