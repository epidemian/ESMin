var Ξ=[],//stack
		//I/O functions
		ô=i=>document.getElementById('o').value+=i!=[]._?i:(Ξ.shift(),Ξ.join`\n`),//output
		ℹ=i=>[i=i!=[]._?document.getElementById("c").value[i]:document.getElementById("c").value,Ξ.push(i)][0],//source

		//stack functions
		ᵖ=(i=0)=>{Array.prototype.slice.call(arguments).map(x=>Ξ.push(x))},
		ᵍ=i=>i!=[]._?Ξ[i<0?Ξ.length+i:i]:Ξ[Ξ.length-1],
		ʳ=(i=Ξ.length-1)=>Ξ.splice(i,1),
		ᶜ=i=>Ξ=[],

		//super-basic aliasing
		ī=Infinity,
		ü=[]._,
		ℇ=math.e,
		į=math.sqrt(-1),
		ɸ=(1+math.sqrt(5))/2,
		π=math.pi,
		τ=math.pi*2,
		М=math,
		Ϛ=String,
		Ѧ=Array,
		Ⱥ=_,
		П=Number,
		Ø=Object,
		Ĵ=JSON,
		ɼ=RegExp,
		Ɗ=Date,
		ש=window,
		ß='toString',
		ɘ=i=>LZString.decompress(i),
		ᴙ=i=>[...i].reverse().join``;
[Ϛ,Ѧ,П,Ø,ɼ,Ɗ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v.prototype[String.fromCharCode(y+248)]=v.prototype[x]));
[М,Ϛ,Ѧ,П,Ø,Ĵ,ɼ,Ɗ,Ⱥ].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v[String.fromCharCode(y+248)]=v[x]));
[ש].map(v=>Object.getOwnPropertyNames(v).map((x,y)=>v['ש'+String.fromCharCode(y+248)]=v[x]));
var Σ=(c,asdf=0)=>{
	//syntax from esmin to es6
	c=c
		.replace(/ɘ\(`(.+?)`\)/g,(x,y)=>'(`'+ɘ(y)+'`)')
		.replace(/ℍ/g,'00')
		.replace(/𝕜/g,'000')
		.replace(/𝕄/g,'000000')
		.replace(/𝔾/g,'000000000')
		.replace(/𝕋/g,'000000000000')
		.replace(/ℙ/g,'000000000000000')
		.replace(/𝔼/g,'000000000000000000')
		.replace(/ℤ/g,'000000000000000000000')
		.replace(/𝕐/g,'000000000000000000000000')
		.replace(/§(-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?|[ℇįɸπτ])/g,'($1)')
		.replace(/([ᵖᵍʳᶜôℹΣɘϚѦПØɼƊᴙ\u00f8-\u03cc])([A-Za-z$_ãï]+)/g,'$1($2)')
		.replace(/([ᵖᵍʳᶜôℹΣɘϚѦПØɼƊᴙ\u00f8-\u03cc])(.+)⦆/g,'$1($2)')
		.replace(/ï(\d+)/g,'ï[$1]')
		.replace(/⬮/g,'()')
		.replace(/⬯/g,'(``)')
		.replace(/⇏/g,'(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↛/g,'=(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/↪/g,'($,_,ã)=>')
		.replace(/⤤/g,'=($,_,ã)=>')
		.replace(/⇝/g,'((a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z)=>')
		.replace(/⇀/g,'(($,_,ã)=>')
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
		.replace(/⟦/g,'[...')
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
		.replace(/↺/g,'for(')
		.replace(/([^МϚѦПØĴɼƊȺï\u00f8-\u03cc])Ʀ/g,'$1return ')
		.replace(/ŋ/g,'new ')
		.replace(/\((.+)\)²/g,'Math.pow($1,2)')
		.replace(/\((.+)\)³/g,'Math.pow($1,3)')
		.replace(/\((.+)\)ⁿ\((.+)\)/g,'Math.pow($1,$2)')
		.replace(/√\((.+)\)/g,'Math.sqrt($1)')
		.replace(/∛\((.+)\)/g,'Math.cbrt($1)')
		.replace(/½/g,'0.5')
		.replace(/¼/g,'0.25')
		.replace(/¾/g,'0.75')
		.replace(/⅐/g,'(1/7)')
		.replace(/⅑/g,'(1/9)')
		.replace(/⅒/g,'0.1')
		.replace(/⅓/g,'(1/3)')
		.replace(/⅔/g,'(2/3)')
		.replace(/⅕/g,'0.2')
		.replace(/⅖/g,'0.4')
		.replace(/⅗/g,'0.6')
		.replace(/⅘/g,'0.8')
		.replace(/⅙/g,'(1/6)')
		.replace(/⅚/g,'(5/6)')
		.replace(/⅛/g,'(1/8)')
		.replace(/⅜/g,'(3/8)')
		.replace(/⅝/g,'(5/8)')
		.replace(/⅞/g,'(7/8)')
		.replace(/([)/\]МϚѦПØĴɼƊȺï])([\u00f8-\u03cc])/g,'$1["$2"]')
		.replace(/ß/g,'[ß]')
		.replace(/⌿/g,'/g')
		.replace(/⍀/g,'/ig')
		.replace(/⊨/g,'true')
		.replace(/⊭/g,'false')
		.replace(/«/g,'<<')
		.replace(/»/g,'>>')
		.replace(/⫸/g,'>>>')
		.replace(/˜/g,'~~')
	;
	if(asdf==1e4&&!c.match(/ô/g))c+=';ô()';console.log(c);eval(c)
}