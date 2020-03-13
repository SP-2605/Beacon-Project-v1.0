//Video Popup Close Btn Function
$(document).ready(function(){
    $('.popup__close').click(function () {
        $('.popup__video').get(0).pause();
        $('.popup__video').get(0).currentTime=0;
    });

    $('#Intro-video-button').click(function() {
        $('.popup__video')[0].play();
    });
});

//AOS SCRIPT
AOS.init({
    disable: function () {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
    }
});

//IMAGE OPTIMIZER
$(document).ready(function () {
    
    $.cloudinary.image("logo_bqw7xa.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Main-page_nb0kll.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon-5_b9un2o.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon-4_wggwrh.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon-3_gasvp2.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon -3_gasvp2.jpg", { quality: "auto", fetch_format: "auto" });
    
    $.cloudinary.image("Ramkishan_Bhise_vyt1ze.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Pranita_Mahajan_pk1jyl.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("BADE_KRANTI_ficryn.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("BHAGYASHAL_WAGHMARE_yuidu0.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Namrata_Patel_lkxwve.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("GAURAV_FASATE_u5nmsu.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Ali_bl3rsb.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("man_tuxgth.png", { quality: "auto", fetch_format: "auto" });

    $.cloudinary.image("Beacon - Electrician_tnsi4x.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - web - Dev -1_eowq8g.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - Welding_esu6xj.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - Sweaing_b30k7a.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - Comp - Opt_dyiv9x.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - AC_eiuxil.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - Screen - Printing_plsk8u.jpg", { quality: "auto", fetch_format: "auto" });
    $.cloudinary.image("Beacon - Plumbing_uotfcq.jpg", { quality: "auto", fetch_format: "auto" });

    $.cloudinary.image("Form - img_sw7ik2.jpg", { quality: "auto", fetch_format: "auto" });
    
})
