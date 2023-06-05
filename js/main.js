$(document).ready(function(){
    //Variables
    var menuHasOpen = false;

    var selectPage = "home";
    var selectForm = "email";
    
    // Affichage du menu Nav sur Porable
    $('#menuNav').click(function() {
        if(!menuHasOpen){
            $('#ul-menu').css('display', 'flex');
            $('header').css('height', '272px');
            $(this).addClass('active-svg');
            $('#logo').css('display', 'none');
        } else {
            $('#ul-menu').css('display', 'none');
            $('header').css('height', '90px');
            $(this).removeClass('active-svg');
            $('#logo').css('display', 'flex');
        }

        menuHasOpen = !menuHasOpen;
    });

    //  demande home page
    $('#btn1').click(function(){
        if (selectPage != "home"){
            // Selectionne le Boutton
            $('.btn-active').removeClass('btn-active');
            $('#btn1').addClass('btn-active');
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn1').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page1').show().animate({ left : "0" }, 1000, function(){
                        $('#page1').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page1').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Home]');

            selectPage = "home";
        }
    });

    $('#footer-btn1').click(function(){
        if (selectPage != "home"){
            // Selectionne le Boutton
            $('.btn-active').removeClass('btn-active');
            $('#btn1').addClass('btn-active');
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn1').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page1').show().animate({ left : "0" }, 1000, function(){
                        $('#page1').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page1').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Home]');

            selectPage = "home";
        }
    });

    //  demande about page
    $('#btn2').click(function(){
        if (selectPage != 'about'){
            // Selectionne le Boutton
            $('.btn-active').removeClass('btn-active');
            $('#btn2').addClass('btn-active');
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn2').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page2').show().animate({ left : "0" }, 1000, function(){
                        $('#page2').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page2').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [About]');

            selectPage = "about";
        }
    });

    $('#footer-btn2').click(function(){
        if (selectPage != "about"){
            // Selectionne le Boutton
            $('.btn-active').removeClass('btn-active');
            $('#btn2').addClass('btn-active');
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn2').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page2').show().animate({ left : "0" }, 1000, function(){
                        $('#page2').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page2').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [About]');

            selectPage = "about";
        }
    });

    $('#welcom-plus').click(function(){
        if (selectPage != "about"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn2').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn2').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page2').show().animate({ left : "0" }, 1000, function(){
                        $('#page2').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page2').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [About]');

            selectPage = "about";
        }
    });

    //  demande galery page
    $('#btn3').click(function(){
        if (selectPage != "galery"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn3').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn3').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page3').show().animate({ left : "0" }, 1000, function(){
                        $('#page3').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page3').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Galery]');

            selectPage = "galery";
        }
    });

    $('#footer-btn3 ').click(function(){
        if (selectPage != "galery"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn3').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn3').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page3').show().animate({ left : "0" }, 1000, function(){
                        $('#page3').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page3').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Galery]');

            selectPage = "galery";
        }
    });

    $('#slide').click(function(){
        if (selectPage != "galery"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn3').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn3').addClass('footer-active');

            // Récupère nom le l'image php? depuis le slider

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page3').show().animate({ left : "0" }, 1000, function(){
                        $('#page3').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page3').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Galery]');

            selectPage = "galery";
        }
    });

    $('#img-last').click(function(){
        if (selectPage != "galery"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn3').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn3').addClass('footer-active');

            // Récupère nom de l'image php? depuis l'image du dernier ajout

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page3').show().animate({ left : "0" }, 1000, function(){
                        $('#page3').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page3').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Galery]');

            selectPage = "galery";
        }
    });

    $('#last').click(function(){
        if (selectPage != "galery"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn3').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn3').addClass('footer-active');

            // Récupère nom de l'image php? depuis le bouton du dernier ajout
            
            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page3').show().animate({ left : "0" }, 1000, function(){
                        $('#page3').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page3').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Galery]');

            selectPage = "galery";
        }
    });
    
    //  demande contact page
    $('#btn4').click(function(){
        if (selectPage != "contact"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn4').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn4').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page4').show().animate({ left : "0" }, 1000, function(){
                        $('#page4').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page4').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Contact]');

            selectPage = "contact";
        }
    });

    
    $('#footer-btn4').click(function(){
        if (selectPage != "contact"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn4').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn4').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page4').show().animate({ left : "0" }, 1000, function(){
                        $('#page4').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page4').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Contact]');

            selectPage = "contact";
        }
    });

    $('#link-contact').click(function(){
        if (selectPage != "contact"){
            // Selectionne le Boutton
            $('.btn-active').removeClass("btn-active");
            $('#btn4').addClass("btn-active");
            $('.footer-active').removeClass('footer-active');
            $('#footer-btn4').addClass('footer-active');

            // Animation de la page
            $('.page-active').animate({ opacity: "0.25"}, 800, function(){
                $('.page-active').animate({ left : "-150%" }, 1000, function(){
                    $('.page-active').hide().animate({ left : "150%" });
                    $('#page4').show().animate({ left : "0" }, 1000, function(){
                        $('#page4').animate({ opacity: "1"}, 800);

                        // Modifier la Page Active
                        $('.page-active').removeClass("page-active");
                        $('#page4').addClass("page-active");
                    });
                });
            });

            $('title').text('WLKJ 3000 [Contact]');

            selectPage = "contact";
        }
    });

    // Affichage de l'image galerie sur la fenêtre modal
    $('.img-galery').click(function () {
        $('.modal').css( 'display', 'flex' );
        $('.modal h2').text("Template : "+$(this).children().attr("alt"));
        $('.modal #insert-img').html('<img src="'+"template_"+$(this).children().attr("src")+'" alt="'+$(this).children().attr("alt")+'">');
    })

    $('#modal-close').click(function () {
        $('.modal #insert-img').html('');
        $('.modal').css( 'display', 'none' );
    })

    // Affichage des fenêtres du Formulaire
    $('#ico-btn-email').click(function(){
        if (selectForm != "email"){
            // Selectionne le Boutton
            $('.ico-active').removeClass("ico-active");
            $('#ico-btn-email').addClass("ico-active");

            // Select Window Formulaire
            $('.window-active').animate({ opacity: "0"}, 400, function(){
                $('.window-active').hide();
                $('#email-content').show().animate({ opacity: "1"}, 400, function(){
                    $('.window-active').removeClass("window-active");
                    $('#email-content').addClass("window-active");
                });
            });

            $('legend').text('votre demande !');

            selectForm = "email";
        }
    });

    $('#ico-btn-location').click(function(){
        if (selectForm != "location"){
            // Selectionne le Boutton
            $('.ico-active').removeClass("ico-active");
            $('#ico-btn-location').addClass("ico-active");

            // Select Window Formulaire
            $('.window-active').animate({ opacity: "0"}, 400, function(){
                $('.window-active').hide();
                $('#location-content').show().animate({ opacity: "1"}, 400, function(){
                    $('.window-active').removeClass("window-active");
                    $('#location-content').addClass("window-active");
                });
            });

            $('legend').text('où nous trouvez ?');

            selectForm = "location";
        }
    });

    $('#ico-btn-follow').click(function(){
        if (selectForm != "follow"){
            // Selectionne le Boutton
            $('.ico-active').removeClass("ico-active");
            $('#ico-btn-follow').addClass("ico-active");

            // Select Window Formulaire
            $('.window-active').animate({ opacity: "0"}, 400, function(){
                $('.window-active').hide();
                $('#followUs-content').show().animate({ opacity: "1"}, 400, function(){
                    $('.window-active').removeClass("window-active");
                    $('#followUs-content').addClass("window-active");
                });
            });

            $('legend').text('nos Réseaux Sociaux !');

            selectForm = "follow";
        }
    });

    // Autorisation du Formulaire
    $('#formu').submit(function(){
        var result = true;

        // test le nom
        if($('#name').val() == ""){
            $('#name').css('border-color', 'red');

            $('#errorname').html('<i>Veuillez écrire votre nom ou speudo</i>').css({
                color : 'red',
                margin : 'auto'
            });

            result=false;
        } else {
            $('#name').css('border-color', 'green');
            $('#errorname').html('');
        }

        // test l'adresse eMail
        if(!$('#email').val().match(/[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,3}/)){
            $('#email').css('border-color','red');

            $('#erroremail').html('<i>Veuillez écrire une adresse eMail valide</i>').css({
                color : 'red',
                margin : 'auto',
                padding : '10px 0 0 5px'
            });

            result=false;
        } else {
            $('#email').css('border-color', 'green');
            $('#erroremail').html('');
        }

        return result;
    });
});