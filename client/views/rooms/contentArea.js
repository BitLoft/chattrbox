Template.contentArea.events({
    'load':function(){


        if(document.getElementById('contentFrame').getAttribute("src") !=  Session.get('contentURL')){
            //console.log(String(Session.get('contentURL')))
           document.getElementById('contentFrame').setAttribute("src", Session.get('contentURL'))
            console.log(document.getElementById('contentFrame'))
            //document.getElementById('contentFrame').src = Session.get('contentURL');
        } else{
            console.log('false')
        }
    }
})

