/*
Copyright 2018 Matthew Cornelisse.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use, copy, 
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the 
following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($,undefined) {
	
//Modified QRCode Generator   Copyright (c) 2009 Kazuhiko Arase
var qrcode=function(){function w(g,l){if("undefined"==typeof g.length)throw g.length+"/"+l;var c=function(){for(var b=0;b<g.length&&0==g[b];)b+=1;for(var a=Array(g.length-b+l),e=0;e<g.length-b;e+=1)a[e]=g[e+b];return a}(),a={getAt:function(b){return c[b]},getLength:function(){return c.length},multiply:function(b){for(var c=Array(a.getLength()+b.getLength()-1),e=0;e<a.getLength();e+=1)for(var h=0;h<b.getLength();h+=1)c[e+h]^=r.gexp(r.glog(a.getAt(e))+r.glog(b.getAt(h)));return w(c,0)},mod:function(b){if(0>
a.getLength()-b.getLength())return a;for(var c=r.glog(a.getAt(0))-r.glog(b.getAt(0)),e=Array(a.getLength()),h=0;h<a.getLength();h+=1)e[h]=a.getAt(h);for(h=0;h<b.getLength();h+=1)e[h]^=r.gexp(r.glog(b.getAt(h))+c);return w(e,0).mod(b)}};return a}var A=function(g,l){var c=g,a=z[l],b=null,q=0,e=null,h=[],t={},x=function(g,l){for(var f=q=4*c+17,d=Array(f),k=0;k<f;k+=1){d[k]=Array(f);for(var n=0;n<f;n+=1)d[k][n]=null}b=d;B(0,0);B(q-7,0);B(0,q-7);f=y.getPatternPosition(c);for(d=0;d<f.length;d+=1)for(k=
0;k<f.length;k+=1){var n=f[d],u=f[k];if(null==b[n][u])for(var t=-2;2>=t;t+=1)for(var m=-2;2>=m;m+=1)b[n+t][u+m]=-2==t||2==t||-2==m||2==m||0==t&&0==m?!0:!1}for(f=8;f<q-8;f+=1)null==b[f][6]&&(b[f][6]=0==f%2);for(f=8;f<q-8;f+=1)null==b[6][f]&&(b[6][f]=0==f%2);f=y.getBCHTypeInfo(a<<3|l);for(d=0;15>d;d+=1)k=!g&&1==(f>>d&1),6>d?b[d][8]=k:8>d?b[d+1][8]=k:b[q-15+d][8]=k;for(d=0;15>d;d+=1)k=!g&&1==(f>>d&1),8>d?b[8][q-d-1]=k:9>d?b[8][15-d-1+1]=k:b[8][15-d-1]=k;b[q-8][8]=!g;if(7<=c){f=y.getBCHTypeNumber(c);
for(d=0;18>d;d+=1)k=!g&&1==(f>>d&1),b[Math.floor(d/3)][d%3+q-8-3]=k;for(d=0;18>d;d+=1)k=!g&&1==(f>>d&1),b[d%3+q-8-3][Math.floor(d/3)]=k}if(null==e){n=c;f=C.getRSBlocks(n,a);d=D();for(k=0;k<h.length;k+=1)u=h[k],d.put(u.getMode(),4),d.put(u.getLength(),y.getLengthInBits(u.getMode(),n)),u.write(d);for(k=n=0;k<f.length;k+=1)n+=f[k].dataCount;if(d.getLengthInBits()>8*n)throw"code length overflow. ("+d.getLengthInBits()+">"+8*n+")";for(d.getLengthInBits()+4<=8*n&&d.put(0,4);0!=d.getLengthInBits()%8;)d.putBit(!1);
for(;!(d.getLengthInBits()>=8*n);){d.put(236,8);if(d.getLengthInBits()>=8*n)break;d.put(17,8)}for(var v=0,n=k=0,u=Array(f.length),t=Array(f.length),m=0;m<f.length;m+=1){var x=f[m].dataCount,r=f[m].totalCount-x,k=Math.max(k,x),n=Math.max(n,r);u[m]=Array(x);for(var p=0;p<u[m].length;p+=1)u[m][p]=255&d.getBuffer()[p+v];v+=x;p=y.getErrorCorrectPolynomial(r);x=w(u[m],p.getLength()-1).mod(p);t[m]=Array(p.getLength()-1);for(p=0;p<t[m].length;p+=1)r=p+x.getLength()-t[m].length,t[m][p]=0<=r?x.getAt(r):0}for(p=
d=0;p<f.length;p+=1)d+=f[p].totalCount;d=Array(d);for(p=v=0;p<k;p+=1)for(m=0;m<f.length;m+=1)p<u[m].length&&(d[v]=u[m][p],v+=1);for(p=0;p<n;p+=1)for(m=0;m<f.length;m+=1)p<t[m].length&&(d[v]=t[m][p],v+=1);e=d}f=e;d=-1;k=q-1;n=7;u=0;t=y.getMaskFunction(l);for(m=q-1;0<m;m-=2)for(6==m&&--m;;){for(p=0;2>p;p+=1)null==b[k][m-p]&&(v=!1,u<f.length&&(v=1==(f[u]>>>n&1)),t(k,m-p)&&(v=!v),b[k][m-p]=v,--n,-1==n&&(u+=1,n=7));k+=d;if(0>k||q<=k){k-=d;d=-d;break}}},B=function(a,c){for(var f=-1;7>=f;f+=1)if(!(-1>=a+
f||q<=a+f))for(var d=-1;7>=d;d+=1)-1>=c+d||q<=c+d||(b[a+f][c+d]=0<=f&&6>=f&&(0==d||6==d)||0<=d&&6>=d&&(0==f||6==f)||2<=f&&4>=f&&2<=d&&4>=d?!0:!1)};t.addData=function(b,a){a=a||"Byte";var f;switch(a){case "Alphanumeric":f=E(b);break;case "Byte":f=F(b);break;default:throw"mode:"+a;}h.push(f);e=null};t.isDark=function(a,c){if(0>a||q<=a||0>c||q<=c)throw a+","+c;return b[a][c]};t.getModuleCount=function(){return q};t.make=function(){if(1>c){for(var b=1;40>b;b++){for(var e=C.getRSBlocks(b,a),f=D(),d=0;d<
h.length;d++){var q=h[d];f.put(q.getMode(),4);f.put(q.getLength(),y.getLengthInBits(q.getMode(),b));q.write(f)}for(d=q=0;d<e.length;d++)q+=e[d].dataCount;if(f.getLengthInBits()<=8*q)break}c=b}for(f=e=b=0;8>f;f+=1)if(x(!0,f),d=y.getLostPoint(t),0==f||b>d)b=d,e=f;x(!1,e)};t.renderTo2dContext=function(b,a){a=a||2;for(var c=t.getModuleCount(),d=0;d<c;d++)for(var e=0;e<c;e++)b.fillStyle=t.isDark(d,e)?"black":"white",b.fillRect(d*a,e*a,a,a)};return t};A.stringToBytesFuncs={"default":function(g){for(var l=
[],c=0;c<g.length;c+=1){var a=g.charCodeAt(c);l.push(a&255)}return l}};A.stringToBytes=A.stringToBytesFuncs["default"];var z={L:1,M:0,Q:3,H:2},y=function(){var g=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,
30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],l={},c=function(a){for(var b=0;0!=a;)b+=1,a>>>=1;return b};l.getBCHTypeInfo=function(a){for(var b=a<<10;0<=c(b)-c(1335);)b^=1335<<c(b)-c(1335);return(a<<10|b)^21522};l.getBCHTypeNumber=function(a){for(var b=a<<12;0<=c(b)-c(7973);)b^=
7973<<c(b)-c(7973);return a<<12|b};l.getPatternPosition=function(a){return g[a-1]};l.getMaskFunction=function(a){switch(a){case 0:return function(b,a){return 0==(b+a)%2};case 1:return function(b,a){return 0==b%2};case 2:return function(b,a){return 0==a%3};case 3:return function(b,a){return 0==(b+a)%3};case 4:return function(b,a){return 0==(Math.floor(b/2)+Math.floor(a/3))%2};case 5:return function(b,a){return 0==b*a%2+b*a%3};case 6:return function(a,c){return 0==(a*c%2+a*c%3)%2};case 7:return function(a,
c){return 0==(a*c%3+(a+c)%2)%2};default:throw"bad maskPattern:"+a;}};l.getErrorCorrectPolynomial=function(a){for(var b=w([1],0),c=0;c<a;c+=1)b=b.multiply(w([1,r.gexp(c)],0));return b};l.getLengthInBits=function(a,b){if(1<=b&&10>b)switch(a){case 1:return 10;case 2:return 9;case 4:return 8;case 8:return 8;default:throw"mode:"+a;}else if(27>b)switch(a){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+a;}else if(41>b)switch(a){case 1:return 14;case 2:return 13;
case 4:return 16;case 8:return 12;default:throw"mode:"+a;}else throw"type:"+b;};l.getLostPoint=function(a){for(var b=a.getModuleCount(),c=0,e=0;e<b;e+=1)for(var h=0;h<b;h+=1){for(var g=0,l=a.isDark(e,h),r=-1;1>=r;r+=1)if(!(0>e+r||b<=e+r))for(var n=-1;1>=n;n+=1)0>h+n||b<=h+n||0==r&&0==n||l!=a.isDark(e+r,h+n)||(g+=1);5<g&&(c+=3+g-5)}for(e=0;e<b-1;e+=1)for(h=0;h<b-1;h+=1)if(g=0,a.isDark(e,h)&&(g+=1),a.isDark(e+1,h)&&(g+=1),a.isDark(e,h+1)&&(g+=1),a.isDark(e+1,h+1)&&(g+=1),0==g||4==g)c+=3;for(e=0;e<b;e+=
1)for(h=0;h<b-6;h+=1)a.isDark(e,h)&&!a.isDark(e,h+1)&&a.isDark(e,h+2)&&a.isDark(e,h+3)&&a.isDark(e,h+4)&&!a.isDark(e,h+5)&&a.isDark(e,h+6)&&(c+=40);for(h=0;h<b;h+=1)for(e=0;e<b-6;e+=1)a.isDark(e,h)&&!a.isDark(e+1,h)&&a.isDark(e+2,h)&&a.isDark(e+3,h)&&a.isDark(e+4,h)&&!a.isDark(e+5,h)&&a.isDark(e+6,h)&&(c+=40);for(h=g=0;h<b;h+=1)for(e=0;e<b;e+=1)a.isDark(e,h)&&(g+=1);return c+Math.abs(100*g/b/b-50)/5*10};return l}(),r=function(){for(var g=Array(256),l=Array(256),c=0;8>c;c+=1)g[c]=1<<c;for(c=8;256>
c;c+=1)g[c]=g[c-4]^g[c-5]^g[c-6]^g[c-8];for(c=0;255>c;c+=1)l[g[c]]=c;return{glog:function(a){if(1>a)throw"glog("+a+")";return l[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return g[a]}}}(),C=function(){var g=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,
32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],
[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,
117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,
45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,
145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,
6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],l=function(a,c){var b={};b.totalCount=a;b.dataCount=c;return b},c={},a=function(a,c){switch(c){case z.L:return g[4*(a-1)+0];case z.M:return g[4*(a-1)+1];case z.Q:return g[4*(a-1)+2];case z.H:return g[4*(a-1)+3]}};c.getRSBlocks=function(b,c){var e=a(b,c);if("undefined"==typeof e)throw"bad rs block @ typeNumber:"+b+"/errorCorrectionLevel:"+c;for(var g=e.length/3,q=[],r=0;r<g;r+=1)for(var w=e[3*r+0],n=e[3*r+1],u=e[3*r+2],f=0;f<w;f+=
1)q.push(l(n,u));return q};return c}(),D=function(){var g=[],l=0,c={getBuffer:function(){return g},getAt:function(a){return 1==(g[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,b){for(var g=0;g<b;g+=1)c.putBit(1==(a>>>b-g-1&1))},getLengthInBits:function(){return l},putBit:function(a){var b=Math.floor(l/8);g.length<=b&&g.push(0);a&&(g[b]|=128>>>l%8);l+=1}};return c},E=function(g){var l=function(c){if("0"<=c&&"9">=c)return c.charCodeAt(0)-48;if("A"<=c&&"Z">=c)return c.charCodeAt(0)-65+10;switch(c){case " ":return 36;
case "$":return 37;case "%":return 38;case "*":return 39;case "+":return 40;case "-":return 41;case ".":return 42;case "/":return 43;case ":":return 44;default:throw"illegal char :"+c;}};return{getMode:function(){return 2},getLength:function(c){return g.length},write:function(c){for(var a=0;a+1<g.length;)c.put(45*l(g.charAt(a))+l(g.charAt(a+1)),11),a+=2;a<g.length&&c.put(l(g.charAt(a)),6)}}},F=function(g){var l=A.stringToBytes(g);return{getMode:function(){return 4},getLength:function(c){return l.length},
write:function(c){for(var a=0;a<l.length;a+=1)c.put(l[a],8)}}};return A}();(function(w){"function"===typeof define&&define.amd?define([],w):"object"===typeof exports&&(module.exports=w())})(function(){return qrcode});

//DigiQR Main Code - Copyright (c) 2018 Matthew Cornelisse
(function(document,undefined) {
	//minifier helpers
	var bezierCurveTo="bezierCurveTo";
	var lineTo="lineTo";
	var beginPath="beginPath";
	var closePath="closePath";
	var deleteMe=function() {
		closePath=beginPath=lineTo=bezierCurveTo="";
	}
	
	//create rounded corners
	function createCorners(p4,radius,color) {
		/*
			0		p1		p2		p3		p4
			
			
			p1
			
			
			
			p2
			
			
			
			p3
			
			
			
			p4
		*/
		var p2=p4*0.5,
			r=p2*radius,
			p1=p2-r,
			p3=p2+r;			
		var corner=[];
		for (var i=0;i<16;i++) {
			//setup corner canvas
			var canvasCorner=document["createElement"]("canvas");				//create a canvas for corners
			canvasCorner["height"]=canvasCorner["width"]=p4;				//set canvas dimensions to dot size
			var cc=canvasCorner["getContext"]("2d");						//get canvas context
			cc["fillStyle"]=color;
			
			//draw corners
			function drawCorner(v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11) {
				cc[beginPath]();
				cc["moveTo"](v0,v1);
				cc[lineTo](v2,v3);
				cc[lineTo](v4,v5);
				cc["arc"](v6,v7,r,v8*Math.PI,v9*Math.PI);
				cc[lineTo](v10,v11);
				cc[lineTo](v0,v1);
				cc[closePath]();
				cc["fill"]();
			}
			if ((i==1)||(i==9)) drawCorner(p4,p4,p2,p4,p2,p3,p3,p3,  1,1.5,p4,p2);			//draw bottom left
			if ((i==8)||(i==9)) drawCorner( 0, 0,p2, 0,p2,p1,p1,p1,  0,0.5, 0,p2);			//draw top left
			if ((i==4)||(i==6)) drawCorner(p4, 0,p4,p2,p3,p2,p3,p1,0.5,  1,p2,0);			//draw top right
			if ((i==2)||(i==6)) drawCorner( 0,p4, 0,p2,p1,p2,p1,p3,1.5,  0,p2,p4);			//draw bottom left
			
			//draw flats
			if (i==3)  cc["fillRect"](0,p2,p4,p2);											//draw bottom
			if (i==12) cc["fillRect"](0,0,p4,p2);											//draw top
			if (i==10) cc["fillRect"](0,0,p2,p4);											//draw left
			if (i==5)  cc["fillRect"](p2,0,p2,p4);											//draw right
			if (i==15) cc["fillRect"](0,0,p4,p4);											//draw full
			
			//draw missing top left
			function drawMissingCorner(v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15) {
				cc[beginPath]();
				cc["moveTo"](v0,v1);
				cc[lineTo](v2,v3);
				cc[lineTo](v4,v5);
				cc[lineTo](v6,v7);
				cc["arc"](v8,v9,r,v10*Math.PI,v11*Math.PI);
				cc[lineTo](v12,v13);
				cc[lineTo](v14,v15);
				cc[lineTo](v0,v1);
				cc[closePath]();
				cc["fill"]();				
			}
			if (i==7)  drawMissingCorner(p4,p4,p4, 0,p2, 0,p2,p1,p1,p1,  0,0.5, 0,p2, 0,p4);	//draw missing top left
			if (i==11) drawMissingCorner(0 ,p4,p4,p4,p4,p2,p3,p2,p3,p1,0.5,  1,p2, 0, 0, 0);	//draw missing top right
			if (i==13) drawMissingCorner(p4, 0, 0, 0, 0,p2,p1,p2,p1,p3,1.5,  0,p2,p4,p4,p4);	//draw missing bottom left
			if (i==14) drawMissingCorner(0 , 0, 0,p4,p2,p4,p2,p3,p3,p3,1  ,1.5,p4,p2,p4, 0);	//draw missing bottom right
			
			//save corner
			corner[i]=canvasCorner;
		}
		
		return corner;
	}
	function drawLogoBorder(ctx) {
		ctx[beginPath]();
		ctx["fillStyle"]="#0066cc";
		ctx["arc"](0,0,0.891,0,2*Math.PI);
		ctx[closePath]();
		ctx["fill"]();
		ctx[beginPath]();
		ctx["fillStyle"]="#002352";
		ctx["arc"](0,0,0.709,0,2*Math.PI);
		ctx[closePath]();
		ctx["fill"]();
	}
	function logoD(ctx,symbol) {
		ctx["save"]();
		if (symbol==0) {
			ctx["fillStyle"]="#FFFFFF";											//set d color to be white
			ctx[beginPath]();
			ctx["moveTo"]( 0.245,-0.361);
			ctx[lineTo]( 0.270,-0.428);
			ctx[bezierCurveTo]( 0.273,-0.435, 0.268,-0.442, 0.261,-0.442);
			ctx[lineTo]( 0.166,-0.442);
			ctx[lineTo]( 0.136,-0.363);
			ctx[lineTo]( 0.094,-0.363);
			ctx[lineTo]( 0.118,-0.428);
			ctx[bezierCurveTo]( 0.121,-0.435, 0.116,-0.442, 0.109,-0.442);
			ctx[lineTo]( 0.014,-0.442);
			ctx[lineTo](-0.016,-0.363);
			ctx[lineTo](-0.313,-0.363);
			ctx[bezierCurveTo](-0.327,-0.363,-0.339,-0.356,-0.346,-0.344);
			ctx[lineTo](-0.420,-0.214);
			ctx[lineTo](-0.317,-0.214);
			ctx[lineTo]( 0.134,-0.214);
			ctx[bezierCurveTo]( 0.152,-0.214, 0.170,-0.211, 0.187,-0.204);
			ctx[bezierCurveTo]( 0.221,-0.190, 0.259,-0.160, 0.249,-0.091);
			ctx[bezierCurveTo]( 0.233, 0.024, 0.116, 0.228,-0.139, 0.231);
			ctx[lineTo](-0.007,-0.111);
			ctx[bezierCurveTo](-0.002,-0.125,-0.012,-0.140,-0.028,-0.140);
			ctx[lineTo](-0.204,-0.140);
			ctx[lineTo](-0.417, 0.383);
			ctx[bezierCurveTo](-0.417, 0.383,-0.374, 0.388,-0.307, 0.388);
			ctx[lineTo](-0.329, 0.443);
			ctx[lineTo](-0.231, 0.443);
			ctx[bezierCurveTo](-0.223, 0.443,-0.216, 0.439,-0.213, 0.431);
			ctx[lineTo](-0.195, 0.384);
			ctx[bezierCurveTo](-0.180, 0.383,-0.166, 0.381,-0.151, 0.379);
			ctx[lineTo](-0.175, 0.443);
			ctx[lineTo](-0.078, 0.443);
			ctx[bezierCurveTo](-0.070, 0.443,-0.063, 0.439,-0.061, 0.431);
			ctx[lineTo](-0.033, 0.359);
			ctx[bezierCurveTo]( 0.127, 0.323, 0.298, 0.243, 0.400, 0.076);
			ctx[bezierCurveTo]( 0.606,-0.260, 0.392,-0.346, 0.245,-0.361);
			ctx[closePath]();
			ctx["fill"]();															//fill in d area
		} else {
			ctx["miterLimit"]="0";
			ctx["save"]();
			ctx["save"]();
			ctx["globalAlpha"]="0.3";
			ctx["fillStyle"]="#FFFFFF";
			ctx[beginPath]();
			ctx["moveTo"](0.163,0.589);
			ctx[bezierCurveTo](0.161,0.589,0.158,0.589,0.156,0.588);
			ctx[bezierCurveTo](0.066,0.562,0.008,0.526,-0.053,0.461);
			ctx[bezierCurveTo](-0.132,0.376,-0.175,0.264,-0.175,0.144);
			ctx[bezierCurveTo](-0.175,0.045,-0.098,-0.035,-0.001,-0.035);
			ctx[bezierCurveTo](0.095,-0.035,0.172,0.045,0.172,0.144);
			ctx[bezierCurveTo](0.172,0.209,0.225,0.262,0.289,0.262);
			ctx[bezierCurveTo](0.353,0.262,0.406,0.209,0.406,0.144);
			ctx[bezierCurveTo](0.406,-0.085,0.223,-0.271,-0.002,-0.271);
			ctx[bezierCurveTo](-0.162,-0.271,-0.308,-0.174,-0.374,-0.026);
			ctx[bezierCurveTo](-0.395,0.023,-0.407,0.08,-0.407,0.144);
			ctx[bezierCurveTo](-0.407,0.192,-0.403,0.266,-0.369,0.363);
			ctx[bezierCurveTo](-0.364,0.379,-0.371,0.396,-0.386,0.402);
			ctx[bezierCurveTo](-0.401,0.408,-0.417,0.4,-0.423,0.384);
			ctx[bezierCurveTo](-0.45,0.304,-0.464,0.226,-0.464,0.144);
			ctx[bezierCurveTo](-0.464,0.072,-0.45,0.005,-0.425,-0.052);
			ctx[bezierCurveTo](-0.35,-0.221,-0.184,-0.33,-0.002,-0.33);
			ctx[bezierCurveTo](0.254,-0.33,0.462,-0.117,0.462,0.145);
			ctx[bezierCurveTo](0.462,0.244,0.384,0.324,0.289,0.324);
			ctx[bezierCurveTo](0.193,0.324,0.115,0.244,0.115,0.145);
			ctx[bezierCurveTo](0.115,0.081,0.062,0.028,-0.002,0.028);
			ctx[bezierCurveTo](-0.066,0.028,-0.119,0.081,-0.119,0.145);
			ctx[bezierCurveTo](-0.119,0.249,-0.081,0.346,-0.014,0.419);
			ctx[bezierCurveTo](0.04,0.476,0.091,0.507,0.171,0.53);
			ctx[bezierCurveTo](0.186,0.535,0.194,0.551,0.191,0.568);
			ctx[bezierCurveTo](0.187,0.58,0.176,0.589,0.163,0.589);
			ctx[lineTo](0.163,0.589);
			ctx[lineTo](0.163,0.589);
			ctx[closePath]();
			ctx["moveTo"](0.277,0.464);
			ctx[bezierCurveTo](0.21,0.464,0.151,0.445,0.102,0.41);
			ctx[bezierCurveTo](0.018,0.349,-0.031,0.249,-0.031,0.144);
			ctx[bezierCurveTo](-0.031,0.127,-0.018,0.114,-0.003,0.114);
			ctx[bezierCurveTo](0.012,0.114,0.025,0.128,0.025,0.144);
			ctx[bezierCurveTo](0.025,0.229,0.065,0.31,0.133,0.36);
			ctx[bezierCurveTo](0.173,0.389,0.22,0.404,0.277,0.404);
			ctx[bezierCurveTo](0.291,0.404,0.313,0.402,0.336,0.398);
			ctx[bezierCurveTo](0.351,0.395,0.365,0.406,0.368,0.422);
			ctx[bezierCurveTo](0.371,0.438,0.361,0.454,0.346,0.457);
			ctx[bezierCurveTo](0.312,0.464,0.285,0.464,0.277,0.464);
			ctx[lineTo](0.277,0.464);
			ctx[lineTo](0.277,0.464);
			ctx[closePath]();
			ctx["moveTo"](-0.126,0.577);
			ctx[bezierCurveTo](-0.134,0.577,-0.141,0.574,-0.147,0.568);
			ctx[bezierCurveTo](-0.195,0.514,-0.222,0.481,-0.26,0.408);
			ctx[bezierCurveTo](-0.299,0.333,-0.32,0.242,-0.32,0.144);
			ctx[bezierCurveTo](-0.32,-0.037,-0.176,-0.183,-0.001,-0.183);
			ctx[bezierCurveTo](0.174,-0.183,0.318,-0.037,0.318,0.144);
			ctx[bezierCurveTo](0.318,0.161,0.305,0.174,0.29,0.174);
			ctx[bezierCurveTo](0.275,0.174,0.262,0.16,0.262,0.144);
			ctx[bezierCurveTo](0.262,-0.003,0.144,-0.123,-0.001,-0.123);
			ctx[bezierCurveTo](-0.146,-0.123,-0.264,-0.004,-0.264,0.144);
			ctx[bezierCurveTo](-0.264,0.231,-0.246,0.312,-0.212,0.377);
			ctx[bezierCurveTo](-0.176,0.447,-0.151,0.478,-0.108,0.524);
			ctx[bezierCurveTo](-0.097,0.536,-0.097,0.555,-0.109,0.567);
			ctx[bezierCurveTo](-0.112,0.574,-0.119,0.577,-0.126,0.577);
			ctx[lineTo](-0.126,0.577);
			ctx[lineTo](-0.126,0.577);
			ctx[closePath]();
			ctx["moveTo"](-0.479,-0.156);
			ctx[bezierCurveTo](-0.485,-0.156,-0.491,-0.158,-0.496,-0.161);
			ctx[bezierCurveTo](-0.509,-0.171,-0.512,-0.19,-0.503,-0.204);
			ctx[bezierCurveTo](-0.447,-0.289,-0.376,-0.355,-0.291,-0.402);
			ctx[bezierCurveTo](-0.114,-0.501,0.112,-0.502,0.289,-0.403);
			ctx[bezierCurveTo](0.374,-0.356,0.444,-0.29,0.501,-0.206);
			ctx[bezierCurveTo](0.511,-0.192,0.508,-0.173,0.495,-0.164);
			ctx[bezierCurveTo](0.482,-0.155,0.465,-0.157,0.456,-0.171);
			ctx[bezierCurveTo](0.405,-0.247,0.341,-0.307,0.264,-0.349);
			ctx[bezierCurveTo](0.103,-0.438,-0.104,-0.438,-0.265,-0.348);
			ctx[bezierCurveTo](-0.341,-0.305,-0.406,-0.245,-0.455,-0.168);
			ctx[bezierCurveTo](-0.461,-0.16,-0.47,-0.156,-0.479,-0.156);
			ctx[lineTo](-0.479,-0.156);
			ctx[lineTo](-0.479,-0.156);
			ctx[closePath]();
			ctx["moveTo"](0.327,-0.474);
			ctx[bezierCurveTo](0.322,-0.474,0.318,-0.475,0.314,-0.478);
			ctx[bezierCurveTo](0.206,-0.538,0.112,-0.564,0.001,-0.564);
			ctx[bezierCurveTo](-0.111,-0.564,-0.217,-0.535,-0.313,-0.478);
			ctx[bezierCurveTo](-0.327,-0.47,-0.343,-0.475,-0.351,-0.49);
			ctx[bezierCurveTo](-0.358,-0.506,-0.353,-0.523,-0.339,-0.532);
			ctx[bezierCurveTo](-0.235,-0.594,-0.119,-0.625,0.002,-0.625);
			ctx[bezierCurveTo](0.121,-0.625,0.227,-0.596,0.341,-0.532);
			ctx[bezierCurveTo](0.355,-0.524,0.361,-0.506,0.354,-0.491);
			ctx[bezierCurveTo](0.346,-0.48,0.337,-0.474,0.327,-0.474);
			ctx[lineTo](0.327,-0.474);
			ctx[lineTo](0.327,-0.474);
			ctx[closePath]();
			ctx["fill"]();
			ctx["restore"]();
			ctx["save"]();
			ctx["fillStyle"]="#FFFFFF";
			ctx[beginPath]();
			ctx["moveTo"](-0.34,-0.532);
			ctx[bezierCurveTo](-0.354,-0.523,-0.359,-0.506,-0.352,-0.49);
			ctx[bezierCurveTo](-0.344,-0.475,-0.328,-0.47,-0.314,-0.478);
			ctx[bezierCurveTo](-0.217,-0.535,-0.112,-0.564,-0.001,-0.564);
			ctx[lineTo](-0.001,-0.625);
			ctx[bezierCurveTo](-0.121,-0.625,-0.236,-0.593,-0.34,-0.532);
			ctx[closePath]();
			ctx["fill"]();
			ctx[beginPath]();
			ctx["moveTo"](-0.29,-0.402);
			ctx[bezierCurveTo](-0.375,-0.355,-0.446,-0.289,-0.502,-0.204);
			ctx[bezierCurveTo](-0.511,-0.19,-0.508,-0.172,-0.495,-0.162);
			ctx[bezierCurveTo](-0.49,-0.158,-0.484,-0.156,-0.478,-0.156);
			ctx[bezierCurveTo](-0.469,-0.156,-0.46,-0.16,-0.456,-0.169);
			ctx[bezierCurveTo](-0.405,-0.246,-0.341,-0.307,-0.265,-0.349);
			ctx[bezierCurveTo](-0.184,-0.394,-0.092,-0.416,0,-0.416);
			ctx[lineTo](0,-0.477);
			ctx[bezierCurveTo](-0.101,-0.476,-0.202,-0.452,-0.29,-0.402);
			ctx[closePath]();
			ctx["fill"]();
			ctx[beginPath]();
			ctx["moveTo"](0,-0.183);
			ctx[bezierCurveTo](-0.176,-0.183,-0.319,-0.037,-0.319,0.144);
			ctx[bezierCurveTo](-0.319,0.242,-0.298,0.332,-0.259,0.408);
			ctx[bezierCurveTo](-0.222,0.481,-0.195,0.514,-0.147,0.567);
			ctx[bezierCurveTo](-0.141,0.574,-0.134,0.577,-0.126,0.577);
			ctx[bezierCurveTo](-0.119,0.577,-0.112,0.574,-0.107,0.567);
			ctx[bezierCurveTo](-0.095,0.556,-0.095,0.537,-0.106,0.525);
			ctx[bezierCurveTo](-0.15,0.477,-0.174,0.448,-0.21,0.378);
			ctx[bezierCurveTo](-0.245,0.312,-0.263,0.231,-0.263,0.144);
			ctx[bezierCurveTo](-0.263,-0.003,-0.145,-0.123,0,-0.123);
			ctx[lineTo](0,-0.123);
			ctx[lineTo](0,-0.183);
			ctx[lineTo](0,-0.183);
			ctx[closePath]();
			ctx["fill"]();
			ctx[beginPath]();
			ctx["moveTo"](-0.002,-0.332);
			ctx[bezierCurveTo](-0.184,-0.332,-0.35,-0.222,-0.425,-0.053);
			ctx[bezierCurveTo](-0.45,0.005,-0.464,0.071,-0.464,0.144);
			ctx[bezierCurveTo](-0.464,0.226,-0.45,0.304,-0.423,0.384);
			ctx[bezierCurveTo](-0.417,0.4,-0.401,0.407,-0.386,0.402);
			ctx[bezierCurveTo](-0.371,0.397,-0.365,0.379,-0.369,0.363);
			ctx[bezierCurveTo](-0.404,0.266,-0.407,0.191,-0.407,0.144);
			ctx[bezierCurveTo](-0.407,0.081,-0.395,0.023,-0.374,-0.026);
			ctx[bezierCurveTo](-0.308,-0.175,-0.162,-0.271,-0.002,-0.271);
			ctx[bezierCurveTo](-0.001,-0.271,-0.001,-0.271,0,-0.271);
			ctx[lineTo](0,-0.332);
			ctx[bezierCurveTo](-0.001,-0.332,-0.001,-0.332,-0.002,-0.332);
			ctx[closePath]();
			ctx["fill"]();
			ctx[beginPath]();
			ctx["moveTo"](-0.031,0.144);
			ctx[bezierCurveTo](-0.031,0.194,-0.02,0.242,0,0.286);
			ctx[lineTo](0,0.114);
			ctx[bezierCurveTo](-0.001,0.114,-0.002,0.114,-0.003,0.114);
			ctx[bezierCurveTo](-0.019,0.114,-0.031,0.127,-0.031,0.144);
			ctx[closePath]();
			ctx["fill"]();
			ctx[beginPath]();
			ctx["moveTo"](-0.014,0.418);
			ctx[bezierCurveTo](-0.081,0.345,-0.119,0.247,-0.119,0.144);
			ctx[bezierCurveTo](-0.119,0.079,-0.066,0.026,-0.002,0.026);
			ctx[bezierCurveTo](-0.001,0.026,-0.001,0.026,0,0.026);
			ctx[lineTo](0,-0.035);
			ctx[lineTo](-0.001,-0.035);
			ctx[bezierCurveTo](-0.098,-0.035,-0.175,0.045,-0.175,0.144);
			ctx[bezierCurveTo](-0.175,0.264,-0.132,0.376,-0.053,0.46);
			ctx[bezierCurveTo](-0.035,0.48,-0.018,0.495,0,0.51);
			ctx[lineTo](0,0.432);
			ctx[bezierCurveTo](-0.005,0.427,-0.009,0.423,-0.014,0.418);
			ctx[closePath]();
			ctx["fill"]();
			ctx["restore"]();
			ctx["restore"]();
			ctx["save"]();
			ctx["fillStyle"]="#FFFFFF";
			ctx[beginPath]();
			ctx["moveTo"](0.004,0.701);
			ctx[bezierCurveTo](0.004,0.704,0.002,0.706,-0.001,0.706);
			ctx[lineTo](-0.001,0.706);
			ctx[bezierCurveTo](-0.003,0.706,-0.006,0.704,-0.006,0.701);
			ctx[lineTo](-0.006,-0.734);
			ctx[bezierCurveTo](-0.006,-0.737,-0.003,-0.739,-0.001,-0.739);
			ctx[lineTo](-0.001,-0.739);
			ctx[bezierCurveTo](0.002,-0.739,0.004,-0.737,0.004,-0.734);
			ctx[lineTo](0.004,0.701);
			ctx[closePath]();
			ctx["fill"]();
			ctx["restore"]();
		}		
		ctx["restore"]();
	}
	
	
	
	function getQRCode(obj) {
		var text=obj["data"],
			qrCodeSize=obj["size"]||200,
			addLogo=obj["logo"]||0,
			radius=obj["r"]||0,
			symbol=obj["symbol"]||0;
		
		//figure out alphabet to use
		var alphabet="Byte";
		if (text==text["replace"](/[^0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ \$\%\*\+\-\.\/\:]/g,"")) {
			alphabet="Alphanumeric";
		}
		
		//prep canvas for qr code
		var canvas=document["createElement"]("canvas");						//create a canvas to work with
		canvas["height"]=canvas["width"]=qrCodeSize;						//set canvas dimensions default 200px
		var ctx=canvas["getContext"]("2d");									//get canvas context

		//create qr code
		var qr = qrcode(
			0,																//make qr code as small as possible
			(addLogo>0)?"H":"L"													//set error correction to 30% if adding logo otherwise 7%
		);
		qr["addData"](text,alphabet);			
		qr["make"]();															//calculate qr code
		var count=qr["getModuleCount"]();										//get qr code module count
		var pixelSize=Math["floor"](qrCodeSize/count);							//get max size of module that fits
		var margin=Math["floor"]((qrCodeSize-count*pixelSize)/2);				//compute size of margin required to center
		
		//draw qr code
		ctx["save"]();															//save so we can restore back to normal
		ctx["translate"](margin,margin);										//shift perspective so edge of qrcode is at 0
		ctx["fillStyle"]="#000000";
		ctx["fillRect"](0,0,count*pixelSize,count*pixelSize);
		
		//calculate logo size
		var center=pixelSize*count/2;
		var logoSize=pixelSize;
		if (addLogo<5) {
			logoSize*=Math["min"](Math["floor"]((Math["sqrt"](0.2*count*count)+1)/2)-0.5,(count-16)*0.5);	//cover up to 20% of logo but make sure not covering eyes
		} else if(addLogo<7) {
			logoSize*=(count-1)*0.5;												//logo mostly translucent so rules are simpler
		} else {
			logoSize*=Math["min"](1.12*Math["sqrt"](count*count*0.5)-11.08,count*0.56);	//make logo as big as possible to not touch eyes
		}		
		
		//draw corners
		function drawGrid(color) {
			var corners=createCorners(pixelSize,radius,color);			//draw non dark areas in white
			var rsMax=logoSize/pixelSize;								//get number of modules logo is across
			rsMax*=rsMax;												//get square of radius
		
			function numFilter(x,y) {
				if ((x<0)||(x>=count)||(y<0)||(y>=count)) return 1;
				if (addLogo==3) {
					var cc=(count-1)/2;													//count center
					var dx=(x-cc);													//distance from center x
					var dy=(y-cc);													//distance from center y
					if (dx*dx+dy*dy<=rsMax) return 1;								//if within radius squared calculated earlier then set as color
				}
				return (!qr["isDark"](x,y));
			}
			for (var y=-1;y<=count;y++) {											//go over each row
				for (var x=-1;x<=count;x++) {										//go over each column
					var i=numFilter(x,y)*8+numFilter(x+1,y)*4+numFilter(x,y+1)*2+numFilter(x+1,y+1);	//get corner type
					ctx["drawImage"](corners[i],(x+0.5)*pixelSize,(y+0.5)*pixelSize);	//draw the corner on canvas
				}
			}		
		}
		drawGrid("#FFFFFF");												//draw grid with white light areas
		
		//add logo
		ctx["save"]();
		ctx["transform"](logoSize,0,0,logoSize,center,center);
		ctx["save"]();
		if (addLogo==1) {													//logo 1 make white box
			ctx[beginPath]();
			ctx["fillStyle"]="#FFFFFF";
			ctx["rect"](-1,-1,2,2);
			ctx[closePath]();
			ctx["fill"]();
		}
		if (addLogo==2) {													//logo 2 white circle
			ctx[beginPath]();
			ctx["fillStyle"]="#FFFFFF";
			ctx["arc"](0,0,1,0,2*Math.PI);
			ctx[closePath]();
			ctx["fill"]();
		}
		if (addLogo>0) {
			drawLogoBorder(ctx);												//draw the outer boarder
			logoD(ctx,symbol);															//define d area	
		}
		ctx["restore"]();
		ctx["restore"]();
		if ((addLogo==5)||(addLogo==7)) {														
			ctx["save"]();
			ctx["transform"](pixelSize,0,0,pixelSize,pixelSize/2,pixelSize/2);		//adjust size to make drawing dots easy
			ctx["save"]();
			for (var y=0;y<count;y++) {											//go over each row
				for (var x=0;x<count;x++) {										//go over each column
					function drawDot(size,color) {
						ctx["fillStyle"]=color;
						ctx[beginPath]();
						ctx["arc"](x,y,size,0,2*Math.PI);						//define dot
						ctx[closePath]();
						ctx["fill"]();	
					}
					if ((addLogo==5)&&(!qr["isDark"](x,y))) drawDot(0.5,"rgba(255,255,255,0.5)");	//make translucent white dots
					if (addLogo==7) drawDot(0.2,(qr["isDark"](x,y))?"#000000":"#FFFFFF");			//make small dot for both colors
				}
			}
			ctx["restore"]();
			ctx["restore"]();
		}	
		if (addLogo==6) {
			drawGrid("rgba(255,255,255,0.5)");
		}
		
		ctx["restore"]();														//restore so image is centered
		return canvas["toDataURL"]("image/jpg");								//convert canvas into a jpg
	}
	
	
	var ucBech32=function(address) {
		var start=address["indexOf"](":")+1;										//find start of address if there is an address
		if ((address["substr"](start,4)=="dgb1")&&(address["indexOf"]("?")==-1)) {	//see if address is bech32 address
			address=address["toUpperCase"]();										//if bech 32 address then make upper case
		}
		return address;
	}
	var noProcess=function(data,size,logo,radius,symbol) {							//text interface(Same as address but added because some times calling this makes more sense)
		return getQRCode({
			"data":	ucBech32(data),
			"size":	size,
			"logo":	logo,
			"r":	radius,
			"symbol":symbol
		});
	}
	
	//auto load
	var autoLoad=function() {
		var domCheck=document["getElementsByClassName"]("DigiQR");
		for (var i=0; i<domCheck["length"]; i++) {										//go through each of the class far dom items and get its index in array
			var data=domCheck[i]["getAttribute"]("uri");
			var size=parseInt(domCheck[i]["getAttribute"]("size")||300);
			var logo=parseInt(domCheck[i]["getAttribute"]("logo")||6);
			var r=parseFloat(domCheck[i]["getAttribute"]("r")||0.5);
			var symbol=(data["toLowerCase"]()["substr"](0,9)=="digiid://")?1:0;
			domCheck[i]["src"]=noProcess(data,size,logo,r,symbol);
		}
	}
	autoLoad();
	
	
	//DigiQR
	window["DigiQR"]={																//create interface for external scripts
		"request": function(address,amount,size,logo,radius) {					//request payment interface
			return noProcess("digibyte:"+address+"?amount="+(amount)["toFixed"](8),size,logo,radius); 
		},
		"address": noProcess,													//general address interface
		"explorer": function(address,size,logo,radius) {						//explorer interface
			return noProcess("https://digiexplorer.info/address/"+address,size,logo,radius);
		},
		"text": noProcess,														//text interface(Same as address but added because some times calling this makes more sense)
		"gen": getQRCode,
		"id": function(uri,size,logo,radius) {
			return noProcess(uri,size,logo,radius,1);
		},
		"auto": autoLoad
	};
	

})(document);

















/*
	All return an encoded image.  can be directly set as img tags src
	
		DigiQR.request(address,amount,size,logo,radius);
		DigiQR.address(address,size,logo,radius);
		DigiQR.explorer(address,size,logo,radius);
		DigiQR.text(data,size,logo,radius);
		DigiQR.id(uri,size,logo,radius);
	
		DigiQR.gen({
			"data":		string			value to encode in bar code,
			"size":		unsigned int	optional size in pixels.  default 200
			"logo":		unsigned int	optional logo.  defaults to off
											0,false,undefined	no logo
											1,true			 	logo with white box
											2					logo with white circle
											4					logo with no boarder
											5					large logo with white dots
											6					large logo with white squares		
			"r":		unsigned float	optional module radius.  must be value between 0-1.  default 0
			"symbol":	unsigned int	optional defaults to 0
											0					DigiByte logo
											1					DigiID logo
		});
		
		
	Can also include img tags in following format.  All but uri are optional:
			
		<img class="DigiQR" uri="digibyte:dgb1qqlzvqjew735uvpaelqs663ckxs7lnknrgulc82" size="150" logo="2" r="1">
*/
})(window);