function change(location)
{
    if (window.location.pathname.includes(location))
    { console.log("same"); return; }
    var localLocation = "C:/Users/redra/Documents/GitHub/chimpion28.github.io" + "/" + location + ".html";
    window.location.assign(localLocation);
}
function changeLocation(element)
{
    var bar = document.getElementById("top-bar");
    if (bar.dataset.location != element.dataset.location+"")
    {
        console.log("here");
        if(bar.dataset.location == "index")
        {
            var track = document.getElementById("image-track");

            var animation = track.animate({
                transform: `translate(${track.dataset.prevPercentage}%, 150%)`
            }, { duration: 1200, fill: "forwards" });

            animation.onfinish = function (){ change(element.dataset.location); };
        }
        else if(bar.dataset.location == "gallery")
        {
            change(element.dataset.location);
        }
    }
}

function openIndex()
{
    var track = document.getElementById("image-track");
    
    track.style.transform = `translate(-50%, 150%)`;
    track.dataset.prevPercentage = -50;
    track.dataset.percentage = -50;

    track.animate({
        transform: `translate(-50%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `50% center`;
    }
}