// const axios = require('axios');
// var instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
// var instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
// var request = require('request');
// axios.request(config)

$( document ).ready(function(){
    let ChefsBored = [];
    

    

    //  axios.post('/order', {ChefsBored})
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    $('.food').click( function(){
        let foodval = $(this).text();
        foodval2 = foodval.trim();
       $('.orderlist').append('<li  class ='+foodval2+'> '+ foodval2 + '</li>');
    });

    $('.allergy2').click(function(){
        $('.Allergy').css('color','red');
        let val = $(this).text();
        $('.orderlist').children().last().append('<p class ='+val+ '> </p>')
    })

        $('.special2').click(function(){
        $('.Special').css('color','green');
        let val = $(this).text();
        $('.orderlist').children().last().append(' <p class ='+val+ '></p>')
    })

    $('.sametime2').click(function(){
        let val = $(this).text();
        val = val.replace(' ', '');
        $('.Same-Time').css('color' , 'blue');
    })

        $('.symbol').click(function(){
        let val = $(this).text();
        $('p').last().append(val)
    });

        $('.letter').click(function(){
        let val = $(this).text();
        $('p').last().append(val)
    });

        $('.space').click(function(){
        let val = $(this).text();
        $('p').last().append(val)
    });

        $('.tableinput').click(function(){
            $(this).css('background-color' ,'lightblue');
            $(this).append('<p></p>')
    });

        $('.back').click(function(){
            let str = $('p').last().text();
            let l = str.length - 1;
            let stri = str.substring(0, l);
            $('p').last().html(stri);
        });

        $('.new-line').click(function(){
            $('.orderlist').children().last().append(' <p> </p>')
        })

         $('.undo').click(function(){
               $('.orderlist').children().last().remove();
         })

         $('#sendbutton').click(() => {
             this.ArgumentsArr = [];
             let str = $('.orderlist').children().text();  
             str = str.split(' ');
             for(let i = 0; i < str.length; i++){
                 str[i] = str[i].trim();
             }
             str = (str.filter((a) => {
                 return (a != "")
             }));
            //  ChefsBored.push(str);
            //  Timing(str);
            orderarr(str)
         })

     function orderarr(str){
         let Arr = [];
         let x;
         for(let i = 0; i < str.length; i++){
             x = Arr.length-1;
             for(let z = 0; z < FoodMenu.length; z++){
                 if(FoodMenu[z].name === str[i]){
                     Arr.push(FoodMenu[z])
             }
         }if(str[i].includes("Allergy")){
             Arr[Arr.length-1].allergy = str[i+1]
             
         }else if(str[i].includes("Special")){
             Arr[Arr.length-1].special = str[i+1]
         }else if(str[i].includes("***")){
            let mynum = str[i+1];
            let mynum2 = parseInt(mynum);
             Arr.push(mynum2)
             i = i +3;
         }else if(str[i].includes("Same-Time")){
             while(isNaN(Arr[x]) && x >= 0){
                 Arr[x].sametime = 'Same-Time'
                 x--
             }
         }
        }
        $('.orderlist').html('');
     TableNum(Arr)
    }

     function TableNum(Arr){
       let o = $('.tableinput').text();
       let w = parseInt(o);
       Arr.push(w);
       ChefsBored.push(Arr);
        console.log(ChefsBored);
        $('.tableinput').html('');
        // $.post( "/", { ChefsBored });
        // $.post("/", function(ChefsBored, status){
    //     alert("Data: " + ChefsBored + "\nStatus: " + status);
    //     console.log('this is Chefs'+ ChefsBored)
    // });
       Timing(Arr);
     }
     console.log(ChefsBored)
})

// $("#sendbutton").click(function(){
//     $.post("localhost:8080/saveInfo", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//     });
// });

// install axios
// make post request to server
// send whatever data you need in post request to server

// axios.post('/saveInfo', {ChefsBored})
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
        //  axios({
        //     method: 'post',
        //     url: '/saveInfo',
        //     data: ChefsBored
        //     });
        // axios.post('/saveInfo', {ChefsBored})
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });