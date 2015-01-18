$(document).ready(function(){
  $(function() {  
    var container = document.querySelector('.masonry');
  var msnry = new Masonry( container, {
    columnWidth: 60
  });

  eventie.bind( container, 'click', function( event ) {
    // don't proceed if item was not clicked on
    if ( !classie.has( event.target, 'item' ) ) {
      return;
    }
    // change size of item via class
    classie.toggle( event.target, 'gigante' );
    // trigger layout
    msnry.layout();
  });

  }); 

$( 'li').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');   
    }
    
  );

$( 'button').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');   
    }
    
  );



　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　//當高度小於100時，關閉區塊
　　if($this_Top < 500){
　　　$('.top-bar').stop().animate({top:"-650px"});
　　　}
　　　　if($this_Top > 500){
　　　　$('.top-bar').stop().animate({top:"0px"});
　　　 }
　　}).scroll();
　});

  


  
});