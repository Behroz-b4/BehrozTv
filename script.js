// Mobile search button function
const mobileSearchBtn = document.querySelector('.msBtn');
const mobileSearchInput = document.querySelector('.msInput');

mobileSearchBtn.addEventListener('click', function() {
    mobileSearchInput.classList.toggle('active');
    if (mobileSearchInput.classList.contains('active')) { mobileSearchInput.focus(); }
});


// Nagivation button function
const menuToggle = document.querySelector('.mBtn');
const sideNavigation = document.querySelector('.sNav');

menuToggle.addEventListener('click', function() {
    sideNavigation.classList.toggle('active');
    menuToggle.classList.toggle('active', sideNavigation.classList.contains('active'));
});

// Video menu button function
const videoMenubtn = document.querySelector('.wvmBtn');
const videoVerticalContainer = document.querySelector('.wvvbCon');

videoMenubtn.addEventListener('click', function() {
    videoVerticalContainer.classList.toggle('active');
   videoMenubtn.classList.toggle('active', videoVerticalContainer.classList.contains('active'));
});

// Video share button function
const videoSharebtn = document.querySelector('.wvcsBtn');
const videoShareContainer = document.querySelector('.wvsCon');
const popupContainer = document.querySelector('.puBackground');

videoSharebtn.addEventListener('click', function() {
    videoShareContainer.classList.toggle('active');
   videoSharebtn.classList.toggle('active', videoShareContainer.classList.contains('active'));
});

popupContainer.addEventListener('click', function() {
    videoShareContainer.classList.remove('active');
    popupContainer.classList.remove('active', videoShareContainer.classList.remove('active'));

});

// share container functions
function copyURL() {
    const copiedUrl = window.location.href;
    navigator.clipboard.writeText(copiedUrl)
    .then(function() {
        alert('URL is Copied.')
    })
    .catch(function() {
        alert('Failed to Copy URL!')
    });
}

function facebookURL() {
    const fbURL = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${fbURL}`, '_blank');
}

function whatsappURL() {
    const wpURL = window.location.href;
    const siteTitle = encodeURIComponent('Check out this page: ');
    window.open(`https://api.whatsapp.com/send?text=${siteTitle}${wpURL}`, '_blank');
}

function twitterURL() {
    const tURL = window.location.href;
    const siteTitle = encodeURIComponent('Check out this page: ');
    window.open(`https://twitter.com/intent/tweet?text=${siteTitle}&url=${tURL}`, '_blank');
}