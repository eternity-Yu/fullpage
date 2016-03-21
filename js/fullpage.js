$(function(){
	$('#fullpage').fullpage({
		// sectionsColor:['red','yellow','orange','green','blue'],
		controlArrows:false,
		// verticalCentered:false,
		// resize:true,
		// scrollingSpeed:800,
		anchors:['pages1','pages2','pages3','pages4','pages5','pages6','pages7','pages8'],//锚链接
		// lockAnchors:true,
		loopHorizontal:false,
		//slidesNavigation:true,
		//menu:true,
		easing:'easeInOutCubic',
		afterLoad:function(anchorLink,index){
			switch(index){
				case 2:a();word();break;
				case 3:b();collection1();break;
				case 4:b();collection2();break;
				case 5:c();top();break;
				case 6:e();left();break;
				case 7:f();break;
				case 8:g();right();break;
			}
			
		},
		onLeave:function(index,nextIndex,direction){
			switch(index){
				case 2:d();words();break;
				case 3:d();j();collections();break;
				case 4:d();j();collections();break;
				case 5:d();tops();break;
				case 6:h();lefts();break;
				case 7:h();break;
				case 8:h();rights();break;
			}
		}

	});


	var $h=$('#brand .tableCell .content h1');
	var word=function(){
		var r=['T','H','E','&shy;','K','O','R','N','E','R'];
		var e='';
		var i=0;
		var tw=setInterval(function(){
			if(i>=r.length-1){
				clearInterval(tw);
				move('#brand .tableCell .content p').x(0).duration('1s').ease('easeInQuad').end();
				move('#brand .tableCell .content p').set('opacity',1).duration('1s').ease('easeInOutCubic').end();
			}
			e+=r[i];
			$h.html(e);
			i+=1;
		},200);
	};
	var words=function(){
		var e='';
		$h.html(e);
		move('#brand .tableCell .content p').x(100).end();
		move('#brand .tableCell .content p').set('opacity',0).end();
	}

	var top=function(){move('#agents article').y(0).duration('1s').ease('ease').end();};
	var tops=function(){move('#agents article').y(300).duration(10).ease('ease').end();};
	var right=function(){move('#mentions article').x(0).duration('1s').ease('ease').end();move('#mentions article').set('opacity',1).duration('1s').ease('ease').end();};
	var rights=function(){move('#mentions article').x(40).duration(10).ease('ease').end();move('#mentions article').set('opacity',0).duration(10).ease('ease').end();};
	var left=function(){move('#recrut article').x(0).duration('2s').ease('linear').end();move('#recrut article').set('opacity',1).duration('2s').ease('linear').end();};
	var lefts=function(){move('#recrut article').x(30).duration(10).ease('linear').end();move('#recrut article').set('opacity',0).duration(10).ease('linear').end();};
	var a=function(){$('.nav .page-marque').addClass('active')};
	var b=function(){$('.nav .page-collections').addClass('active');$('.second-menu').addClass('second-menus')};
	var c=function(){$('.nav .agent').addClass('active')};
	var e=function(){$('.nav .second-menu .e1').addClass('actives')};
	var f=function(){$('.nav .second-menu .e2').addClass('actives')};
	var g=function(){$('.nav .second-menu .e3').addClass('actives')};
	var d=function(){$('.nav .main-menu li').removeClass('active')};
	var h=function(){$('.nav .second-menu li').removeClass('actives')};
	var j=function(){$('.second-menu').removeClass('second-menus')}
	var kaiguan=false;
	$('.el').bind('click',function(){
		if(kaiguan){
			//move('.lang li:before').y(10).duration(1000).ease('linear').end();
			move('.el').set('margin-bottom',0).end();
			move('.el0').set('opacity',0).set('margin-bottom',0).end();
			move('.el1').set('opacity',0).set('margin-bottom',0).end();
			kaiguan=!kaiguan;
		}
		else{
			//move('.lang li:before').y(0).duration(1000).ease('linear').end();
			move('.el').set('margin-bottom','28px').end();
			move('.el0').set('opacity',1).set('margin-bottom','28px').end();
			move('.el1').set('opacity',1).set('margin-bottom','28px').end();
			kaiguan=!kaiguan;
		}
	});

	var collection1=function(){
		move('.line1 .curtain div').x(0).duration(600).ease('ease').then().move('.line1 a .photo1').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line2 .curtain div').x(0).duration(600).ease('ease').then().move('.line2 a .photo2').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line3 .curtain div').x(0).duration(600).ease('ease').then().move('.line3 a .photo3').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line4 .curtain div').x(0).duration(600).ease('ease').then().move('.line4 a .photo4').x(0).duration(600).ease('easeInCubic').pop().end();
		
	
	};
	var collections=function(){
		$('.photo .curtain div').each(function(){
			$(this).css({transform:'translate(-110%,0)'});
		})
		$('.photo a .skewed span').each(function(){
			$(this).css({transform:'translate(-110%,0)'});
		})
	};
	var collection2=function(){
		move('.line5 .curtain div').x(0).duration(600).ease('ease').then().move('.line5 a .photo5').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line6 .curtain div').x(0).duration(600).ease('ease').then().move('.line6 a .photo6').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line7 .curtain div').x(0).duration(600).ease('ease').then().move('.line7 a .photo7').x(0).duration(600).ease('easeInCubic').pop().end();
		move('.line8 .curtain div').x(0).duration(600).ease('ease').then().move('.line8 a .photo8').x(0).duration(600).ease('easeInCubic').pop().end();
	};


	var indexmovenum=0;
	$('#index .bottom li a span').eq(indexmovenum).addClass('bottomspan');
	var indexmove=function(){
		if(indexmovenum==4){
			indexmovenum=0;
		}
		var leftw=-($('#index .page1').width())*indexmovenum/4;
		$('#index .page1').animate({left:leftw},1000);
		$('#index .bottom li a span').removeClass('bottomspan');
		$('#index .bottom li a span').eq(indexmovenum).addClass('bottomspan');
		indexmovenum+=1;
	};
	var t=setInterval(indexmove,2000);

	$('#index .bottom li a span').each(function(index){
		var i=index;
		$(this).click(function(){
			//clearInterval(t);
			var leftw=-($('#index .page1').width())*i/4;
			$('#index .page1').animate({left:leftw},1000);
			indexmovenum=i;
			//t=setInterval(indexmovenum,2000);
		});
	})

})