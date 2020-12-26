var Links = {
    setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i =0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i += 1;
        // }
        $('a').css('color',color);
    }
}

var body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.background = color;
        $('body').css('backgroundColor',color);
    }
}

function nightDayHandler(self){
var targrt = document.querySelector('body');
if(self.value === 'night') {
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';

    Links.setColor('yellow')
}

else{
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    Links.setColor('blue')
    
}
}