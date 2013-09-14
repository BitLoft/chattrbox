Template.content.helpers({
    content:function(){
    dom.getElementById('contentIFrame').src=Session.get('contentURL');
    }
})
