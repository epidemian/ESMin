var Ξ=[],//stack
		//I/O functions
		î=i=>[i=prompt`Input:`,Ξ.push(i),i][0],//input
		ô=i=>alert(i!=[]._?i:Ξ.join`\n`),//output
		ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source

		//stack functions
		ᵖ=(i=0)=>{Array.prototype.slice.call(arguments).map(x=>Ξ.push(x))},
		ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
		ʳ=(i=Ξ.length-1)=>Ξ.splice(i),
		ᶜ=i=>Ξ=[],

		//super-basic aliasing
		ī=Infinity,
		ü=[]._,
		М=Math,
		Ϛ=String,
		Ѧ=Array,
		П=Number,
		Ø=Object,
		Ĵ=JSON,
		ɼ=RegExp,
		Ɗ=Date;
[Ϛ,Ѧ,П,Ø,ɼ,Ɗ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v.prototype[String.fromCharCode(y+248)]=v.prototype[x]));
[М,Ϛ,Ѧ,П,Ø,Ĵ,ɼ,Ɗ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]=v[x]));
var Σ=(c,asdf=0)=>{
	//syntax from esmin to es6
	c=(asdf?LZString.decompress(c):c)
		.replace(/î/g,'î()')
		.replace(/([ᵖᵍʳᶜôℹΣ])(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?|[A-Za-z]+)/g,'$1($2)')
		.replace(/([ᵖᵍʳᶜôℹΣ])(.+)⦆/g,'$1($2)')
		.replace(/([^\d\\\s])\.([\d]+)/g,'$1[$2]')
		.replace(/⬮/g,'()')
		.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↛/g,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↪/g,'($,_,ã)=>')
		.replace(/⤤/g,'=($,_,ã)=>')
		.replace(/→/g,'=>')
		.replace(/“/g,'(`')
		.replace(/”/g,'`)')
		.replace(/‘/g,'(\\`')
		.replace(/’/g,'\\`)')
		.replace(/⸨/g,'((')
		.replace(/⸩/g,'))')
		.replace(/⎛/g,'(/')
		.replace(/⎞/g,'/)')
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
		.replace(/ɘ[“‘](.+)[”’]/g,(x,y)=>`\`${ɘ(y)}'}\``)
		.replace(/Ǝ[“‘](.+)[”’]/g,(x,y)=>ɘ(y))
	;
	if(!c.match(/ô/g))c+=';ô()';
	console.log(c);
	eval(c);
}

onload=function(){document.getElementById('c').value=decodeURIComponent((/\?c=(.+)/.exec(location.search)||[,""])[1])}