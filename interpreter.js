var interpret=c=>{
	var Ξ=[],//stack
			//I/O functions
			î=i=>[i=prompt`Input:`,Ξ.push(i),i][0],//input
			ô=i=>alert(i!=[]._?i:JSON.stringify(Ξ)),//output
			ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source


			//stack functions
			ᵖ=(i=0)=>{Array.prototype.slice.call(arguments).map(x=>Ξ.push(x))},
			ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
			ʳ=(i=Ξ.length-1)=>Ξ.splice(i),
			ᶜ=i=>Ξ=[],
			
			//extra functions
			//compeval (encode:  z=function(b,c,a,f,e){c="";f=String.fromCharCode;for(a=0;b.length>a;a+=2)c+=f(55296+b[e="charCodeAt"](a))+f(56320+b[e](a+1));return c})
			ɘ=i=>eval(unescape(escape(i).replace(/uD./g,''))),

			//super-basic aliasing
			ī=Infinity,
			ü=[]._,
			М=Math,
			Ϛ=String,
			Ѧ=Array,
			П=Number,
			Ø=Object,
			Ĵ=JSON,
			Σ=eval,
			ɼ=RegExp;

	//syntax from esmin to es6
	for(var i=0;i<100;i++)
		c=c
			.replace(/([ᵖᵍʳᶜôℹΣɘ])(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'$1($2)')
			.replace(/([ᵖᵍʳᶜôℹΣɘ])(.+)⦆/g,'$1($2)')
			.replace(/[^\D\\].([\d]+)/g,'[$1]')
			.replace(/î([^⬮(])/g,'î()$1')
			.replace(/⬮/g,'()')
			.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
			.replace(/↛/g,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
			.replace(/→/g,'=>')
			.replace(/“/g,'(`')
			.replace(/”/g,'`)')
			.replace(/‘/g,'(\\`')
			.replace(/’/g,'\\`)')
			.replace(/⦃/g,'${')
			.replace(/…/g,'...')
			.replace(/˖/g,'+=')
			.replace(/⧺/g,'++')
			.replace(/˗/g,'-=')
			.replace(/‡/g,'--')
			.replace(/×/g,'*=')
			.replace(/÷/g,'/=')
			.replace(/٪/g,'%=')
			.replace(/¡/g,'!!')
			.replace(/≔/g,'==')
			.replace(/≠/g,'!=')
			.replace(/≤/g,'<=')
			.replace(/≥/g,'>=')
			.replace(/⅋/g,'&&')
			.replace(/ǁ/g,'||')
			.replace(/↺(.+)\)/g,'for($1)')
			.replace(/Ʀ/g,'return ')
			.replace(/\((.+)\)²/g,'Math.pow($1,2)')
			.replace(/\((.+)\)³/g,'Math.pow($1,3)')
			.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)²/g,'Math.pow($1,2)')
			.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)³/g,'Math.pow($1,3)')
			.replace(/\((.+)\)ⁿ\((.+)\)/g,'Math.pow($1,$2)')
			.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)ⁿ\((.+)\)/g,'Math.pow($1,$2)')
			.replace(/(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)ⁿ(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'Math.pow($1,$2)')
			.replace(/\((.+)\)ⁿ(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'Math.pow($1,$2)')
			.replace(/√\((.+)\)/g,'Math.sqrt($1)')
			.replace(/√(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'Math.sqrt($1)')
			.replace(/∛\((.+)\)/g,'Math.cbrt($1)')
			.replace(/∛(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?)/g,'Math.cbrt($1)')
		;
	if(!c.match(/ô/g))c+=';ô()';
	document.getElementById('compiled').innerHTML=c;
	eval(c);
}

onload=function(){document.getElementById('c').value=decodeURIComponent((/\?c=(.+)/.exec(location.search)||[,""])[1])}