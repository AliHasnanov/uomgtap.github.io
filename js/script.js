$(function(){
    $('.menu').click(function(){
        $(".select-menu").slideToggle(300)
    })
    let result=6
    $("input[type='radio']").click(function(){
        result = $(this).val();
        $(".select-menu").slideUp(300)
        if(result==4){
            $(".content-row").slice(4).hide(300)
        }
        else if(result == 5){
            var length = $('.content-row[style="display:block"]').length 
            if(length < 5){
                $(".content-row:nth-child(6)").show(300)
            }
            $(".content-row").slice(5).hide(300)
        }
        else if(result == 6){
            var length = $(".content-row[style*='display:block']").length 
            if(length < 6){
                $(".content-row").filter(":nth-child(6),:nth-child(7)").show(300)
            }
        }  
    })
    $('.footer .hesabla').click(function(){
       if(result==6){
        var fenn1 = $('.fenn-1').val()
        var kredit1 = $('.kredit-1').val()
        var fenn2 = $('.fenn-2').val()
        var kredit2 = $('.kredit-2').val()
        var fenn3 = $('.fenn-3').val()
        var kredit3 = $('.kredit-3').val()
        var fenn4 = $('.fenn-4').val()
        var kredit4 = $('.kredit-4').val()
        var fenn5 = $('.fenn-5').val()
        var kredit5 = $('.kredit-5').val()
        var fenn6 = $('.fenn-6').val()
        var kredit6 = $('.kredit-6').val()
        if(fenn1=="" || kredit1=="" || fenn2=="" || kredit2=="" || fenn3=="" || kredit3=="" || fenn4=="" || kredit4=="" || fenn5=="" || kredit5=="" || fenn6=="" || kredit6==""){
            $(".container").css("filter","blur(7px)")
            $(".social-media").css("filter",'blur(7px)')
            $(".container").css("pointer-events","none")
            $(".alert-message").css("pointer-events","none")
            $(".alert").slideDown(300)
        }
        else{
            var kreditcem =   parseInt(kredit1)+ parseInt(kredit2)+parseInt(kredit3)+parseInt(kredit4)+parseInt(kredit5)+parseInt(kredit6)
            var balcemi = (fenn1*kredit1 + fenn2*kredit2+ fenn3*kredit3+ fenn4*kredit4+ fenn5*kredit5+ fenn6*kredit6)
            var ortalama=balcemi/kreditcem
            $(".result").text("Nəticəniz: " + ortalama.toFixed(2) + " Bal")
        }
        $(".alert-button").on("click",function(){
            $(".container").css("filter","blur(0px)")
            $(".social-media").css("filter",'blur(0px)')
            $(".container").css("pointer-events","auto")
            $(".social-media").css("pointer-events","auto")
            $(".alert").slideUp(300)
        })
       }
        else if(result==5){
        var fenn1 = $('.fenn-1').val()
        var kredit1 = $('.kredit-1').val()
        var fenn2 = $('.fenn-2').val()
        var kredit2 = $('.kredit-2').val()
        var fenn3 = $('.fenn-3').val()
        var kredit3 = $('.kredit-3').val()
        var fenn4 = $('.fenn-4').val()
        var kredit4 = $('.kredit-4').val()
        var fenn5 = $('.fenn-5').val()
        var kredit5 = $('.kredit-5').val()
        if(fenn1=="" || kredit1=="" || fenn2=="" || kredit2=="" || fenn3=="" || kredit3=="" || fenn4=="" || kredit4=="" || fenn5=="" || kredit5==""){
            $(".container").css("filter","blur(7px)")
            $(".social-media").css("filter",'blur(7px)')
            $(".container").css("pointer-events","none")
            $(".alert-message").css("pointer-events","none")
            $(".alert").slideDown(300)
        }
        else{
            var kreditcem =   parseInt(kredit1)+ parseInt(kredit2)+parseInt(kredit3)+parseInt(kredit4)+parseInt(kredit5)
            var balcemi = (fenn1*kredit1 + fenn2*kredit2+ fenn3*kredit3+ fenn4*kredit4+ fenn5*kredit5)
            var ortalama=balcemi/kreditcem
            $(".result").text("Nəticəniz: " + ortalama.toFixed(2) + " Bal")
        }
        $(".alert-button").on("click",function(){
            $(".container").css("filter","blur(0px)")
            $(".social-media").css("filter",'blur(0px)')
            $(".container").css("pointer-events","auto")
            $(".social-media").css("pointer-events","auto")
            $(".alert").slideUp(300)
        })
        }
        else if(result==4){
        var fenn1 = $('.fenn-1').val()
        var kredit1 = $('.kredit-1').val()
        var fenn2 = $('.fenn-2').val()
        var kredit2 = $('.kredit-2').val()
        var fenn3 = $('.fenn-3').val()
        var kredit3 = $('.kredit-3').val()
        var fenn4 = $('.fenn-4').val()
        var kredit4 = $('.kredit-4').val()
        if(fenn1=="" || kredit1=="" || fenn2=="" || kredit2=="" || fenn3=="" || kredit3=="" || fenn4=="" || kredit4==""){
            $(".container").css("filter","blur(7px)")
            $(".social-media").css("filter",'blur(7px)')
            $(".container").css("pointer-events","none")
            $(".alert-message").css("pointer-events","none")
            $(".alert").slideDown(300)
        }
        else{
            var kreditcem =   parseInt(kredit1)+ parseInt(kredit2)+parseInt(kredit3)+parseInt(kredit4)
            var balcemi = (fenn1*kredit1 + fenn2*kredit2+ fenn3*kredit3+ fenn4*kredit4)
            var ortalama=balcemi/kreditcem
            $(".result").text("Nəticəniz: " + ortalama.toFixed(2) + " Bal")
        }
            $(".alert-button").on("click",function(){
                $(".container").css("filter","blur(0px)")
                $(".social-media").css("filter",'blur(0px)')
                $(".container").css("pointer-events","auto")
                $(".social-media").css("pointer-events","auto")
                $(".alert").slideUp(300)
            })
        }
    })
    })