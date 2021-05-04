import './css/lightslider.css';
import './scss/style.scss';

import './js/ligthslider.js';

(() => {
    'use strict';

    /* 
        Menu functions
    */
    let mobileMenu = document.getElementById('gsweb-mobile-menu');
    let desktopMenu = document.getElementById('gsweb-desktop-menu');
    let logoMobile = document.querySelector('.logo-mobile');
    let closeMobileMenu = document.querySelector('.gsweb-menu-close');

    mobileMenu.addEventListener('click', ()=>{
        desktopMenu.classList.add('active');
        logoMobile.classList.add('visible-mobile');
    });
    closeMobileMenu.addEventListener('click', ()=>{
        desktopMenu.classList.remove('active');
        logoMobile.classList.remove('visible-mobile');
    });
    /* 
        End Menu functions
    */

    /* 
        Slider functions
    */
    $(document).ready(function() {
        $("#lightSlider").lightSlider({
            item: 4,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
    
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
    
            speed: 1000, //ms'
            auto: true,
            loop: true,
            slideEndAnimation: true,
            pause: 2000,
    
            keyPress: false,
            controls: false,
            prevHtml: '',
            nextHtml: '',
    
            rtl:false,
            adaptiveHeight:false,
    
            vertical:false,
            verticalHeight:600,
            vThumbWidth:500,
    
            thumbItem:10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
    
            enableTouch:true,
            enableDrag:false,
            freeMove:true,
            swipeThreshold: 40,
    
            responsive : [
                {
                    breakpoint:1400,
                    settings: {
                        item:4,
                        slideMove:1,
                        slideMargin:2,
                    }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ],
    
            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {},
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {},
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {}
        });
        var SlideTwo = $("#lightSliderTwo").lightSlider({
            item: 3,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
    
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
    
            speed: 1000, //ms'
            auto: true,
            loop: true,
            slideEndAnimation: false,
            pause: 2000,
    
            keyPress: false,
            controls: false,
            prevHtml: '',
            nextHtml: '>',
    
            rtl:false,
            adaptiveHeight:true,
    
            vertical:false,
            verticalHeight:240,
            vThumbWidth:240,
    
            thumbItem:10,
            pager: false,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',
    
            enableTouch:true,
            enableDrag:false,
            freeMove:true,
            swipeThreshold: 40,
    
            responsive : [
                {
                    breakpoint:1400,
                    settings: {
                        item:4,
                        slideMove:1,
                        slideMargin:2,
                    }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ],
    
            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {},
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {},
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {}
        });
        if(SlideTwo.getTotalSlideCount() > 3){
            $('#goToNextSlideTwo').on('click', function(){
                SlideTwo.goToNextSlide(); 
            });
        }else{
            $('#goToNextSlideTwo').hide();
        }
    });
    /* 
        End Slider functions
    */
})();