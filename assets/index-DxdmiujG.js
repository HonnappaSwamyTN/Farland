(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="170",yn={ROTATE:0,DOLLY:1,PAN:2},vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mc=0,no=1,gc=2,El=1,vc=2,hi=3,Li=0,Pt=1,yt=2,Ai=0,Mn=1,Fr=2,so=3,ro=4,_c=5,Vi=100,xc=101,yc=102,Mc=103,Sc=104,bc=200,Ec=201,wc=202,Tc=203,Or=204,Br=205,Ac=206,Rc=207,Cc=208,Lc=209,Dc=210,Pc=211,Ic=212,Nc=213,Uc=214,zr=0,kr=1,Hr=2,En=3,Gr=4,Vr=5,Wr=6,$r=7,wl=0,Fc=1,Oc=2,Ri=0,Bc=1,zc=2,kc=3,Tl=4,Hc=5,Gc=6,Vc=7,Al=300,wn=301,Tn=302,Xr=303,qr=304,Vs=306,Yr=1e3,Xi=1001,jr=1002,Kt=1003,Wc=1004,is=1005,ei=1006,Js=1007,qi=1008,mi=1009,Rl=1010,Cl=1011,Yn=1012,Da=1013,Yi=1014,ui=1015,Jn=1016,Pa=1017,Ia=1018,An=1020,Ll=35902,Dl=1021,Pl=1022,jt=1023,Il=1024,Nl=1025,Sn=1026,Rn=1027,Ul=1028,Na=1029,Fl=1030,Ua=1031,Fa=1033,Ps=33776,Is=33777,Ns=33778,Us=33779,Kr=35840,Zr=35841,Jr=35842,Qr=35843,ea=36196,ta=37492,ia=37496,na=37808,sa=37809,ra=37810,aa=37811,oa=37812,la=37813,ca=37814,da=37815,ha=37816,ua=37817,fa=37818,pa=37819,ma=37820,ga=37821,Fs=36492,va=36494,_a=36495,Ol=36283,xa=36284,ya=36285,Ma=36286,$c=3200,Xc=3201,Bl=0,qc=1,Ti="",Ot="srgb",Ln="srgb-linear",Ws="linear",it="srgb",nn=7680,ao=519,Yc=512,jc=513,Kc=514,zl=515,Zc=516,Jc=517,Qc=518,ed=519,oo=35044,lo="300 es",fi=2e3,Bs=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$n=Math.PI/180,Sa=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function td(s,e){return(s%e+e)%e}function Qs(s,e,t){return(1-t)*s+t*e}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const id={DEG2RAD:$n};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,n,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],g=i[8],v=n[0],m=n[3],f=n[6],y=n[1],_=n[4],x=n[7],L=n[2],R=n[5],A=n[8];return r[0]=a*v+o*y+l*L,r[3]=a*m+o*_+l*R,r[6]=a*f+o*x+l*A,r[1]=c*v+d*y+h*L,r[4]=c*m+d*_+h*R,r[7]=c*f+d*x+h*A,r[2]=u*v+p*y+g*L,r[5]=u*m+p*_+g*R,r[8]=u*f+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,p=c*r-a*l,g=t*h+i*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(n*c-d*i)*v,e[2]=(o*i-n*a)*v,e[3]=u*v,e[4]=(d*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(er.makeScale(e,t)),this}rotate(e){return this.premultiply(er.makeRotation(-e)),this}translate(e,t){return this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new He;function kl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nd(){const s=zs("canvas");return s.style.display="block",s}const co={};function Vn(s){s in co||(co[s]=!0,console.warn(s))}function sd(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function rd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ad(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===it&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===it&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ws:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ho=[.64,.33,.3,.6,.15,.06],uo=[.2126,.7152,.0722],fo=[.3127,.329],po=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Ln]:{primaries:ho,whitePoint:fo,transfer:Ws,toXYZ:po,fromXYZ:mo,luminanceCoefficients:uo,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:ho,whitePoint:fo,transfer:it,toXYZ:po,fromXYZ:mo,luminanceCoefficients:uo,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let sn;class od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sn===void 0&&(sn=zs("canvas")),sn.width=e.width,sn.height=e.height;const i=sn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(tr(n[a].image)):r.push(tr(n[a]))}else r=tr(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?od.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class It extends Ji{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Xi,n=Xi,r=ei,a=qi,o=jt,l=mi,c=It.DEFAULT_ANISOTROPY,d=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Dn(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Al;It.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,n=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,L=(f+1)/2,R=(d+u)/4,A=(h+v)/4,w=(g+m)/4;return _>x&&_>L?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=R/i,r=A/i):x>L?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=R/n,r=w/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=A/r,n=w/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new It(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends dd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gl extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],d=i[n+2],h=i[n+3];const u=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==u||c!==p||d!==g){let m=1-o;const f=l*u+c*p+d*g+h*v,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const L=Math.sqrt(_),R=Math.atan2(L,f*y);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const x=o*y;if(l=l*m+u*x,c=c*m+p*x,d=d*m+g*x,h=h*m+v*x,m===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],d=i[n+3],h=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(n/2),h=o(r/2),u=l(i/2),p=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+n*c-r*l,this._y=n*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-n*o,this._w=a*d-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),d=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*d,this.y=i+l*d+o*c-r*h,this.z=n+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new P,go=new Ki;class gi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(r,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(On),ss.subVectors(this.max,On),rn.subVectors(e.a,On),an.subVectors(e.b,On),on.subVectors(e.c,On),xi.subVectors(an,rn),yi.subVectors(on,an),Fi.subVectors(rn,on);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!nr(t,rn,an,on,ss)||(t=[1,0,0,0,1,0,0,0,1],!nr(t,rn,an,on,ss))?!1:(rs.crossVectors(xi,yi),t=[rs.x,rs.y,rs.z],nr(t,rn,an,on,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,ns=new gi,rn=new P,an=new P,on=new P,xi=new P,yi=new P,Fi=new P,On=new P,ss=new P,rs=new P,Oi=new P;function nr(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);const o=n.x*Math.abs(Oi.x)+n.y*Math.abs(Oi.y)+n.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),d=i.dot(Oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ud=new gi,Bn=new P,sr=new P;class $s{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ud.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bn.subVectors(e,this.center);const t=Bn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Bn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bn.copy(e.center).add(sr)),this.expandByPoint(Bn.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new P,rr=new P,as=new P,Mi=new P,ar=new P,os=new P,or=new P;class Xs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){rr.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=Mi.dot(this.direction),l=-Mi.dot(as),c=Mi.lengthSq(),d=Math.abs(1-a*a);let h,u,p,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(rr).addScaledVector(as,u),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),n=oi.dot(oi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,n,r){ar.subVectors(t,e),os.subVectors(i,e),or.crossVectors(ar,os);let a=this.direction.dot(or),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(os.crossVectors(Mi,os));if(l<0)return null;const c=o*this.direction.dot(ar.cross(Mi));if(c<0||l+c>a)return null;const d=-o*Mi.dot(or);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,n,r,a,o,l,c,d,h,u,p,g,v,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,d,h,u,p,g,v,m)}set(e,t,i,n,r,a,o,l,c,d,h,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ln.setFromMatrixColumn(e,0).length(),r=1/ln.setFromMatrixColumn(e,1).length(),a=1/ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,p=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,g=o*d,v=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=a*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,i){const n=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Si.crossVectors(i,Ut),Si.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Si.crossVectors(i,Ut)),Si.normalize(),ls.crossVectors(Ut,Si),n[0]=Si.x,n[4]=ls.x,n[8]=Ut.x,n[1]=Si.y,n[5]=ls.y,n[9]=Ut.y,n[2]=Si.z,n[6]=ls.z,n[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],y=i[3],_=i[7],x=i[11],L=i[15],R=n[0],A=n[4],w=n[8],M=n[12],S=n[1],C=n[5],N=n[9],U=n[13],B=n[2],H=n[6],z=n[10],X=n[14],G=n[3],J=n[7],ee=n[11],de=n[15];return r[0]=a*R+o*S+l*B+c*G,r[4]=a*A+o*C+l*H+c*J,r[8]=a*w+o*N+l*z+c*ee,r[12]=a*M+o*U+l*X+c*de,r[1]=d*R+h*S+u*B+p*G,r[5]=d*A+h*C+u*H+p*J,r[9]=d*w+h*N+u*z+p*ee,r[13]=d*M+h*U+u*X+p*de,r[2]=g*R+v*S+m*B+f*G,r[6]=g*A+v*C+m*H+f*J,r[10]=g*w+v*N+m*z+f*ee,r[14]=g*M+v*U+m*X+f*de,r[3]=y*R+_*S+x*B+L*G,r[7]=y*A+_*C+x*H+L*J,r[11]=y*w+_*N+x*z+L*ee,r[15]=y*M+_*U+x*X+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-n*c*h-r*o*u+i*c*u+n*o*p-i*l*p)+v*(+t*l*p-t*c*u+r*a*u-n*a*p+n*c*d-r*l*d)+m*(+t*c*h-t*o*p-r*a*h+i*a*p+r*o*d-i*c*d)+f*(-n*o*d-t*l*h+t*o*u+n*a*h-i*a*u+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=h*m*c-v*u*c+v*l*p-o*m*p-h*l*f+o*u*f,_=g*u*c-d*m*c-g*l*p+a*m*p+d*l*f-a*u*f,x=d*v*c-g*h*c+g*o*p-a*v*p-d*o*f+a*h*f,L=g*h*l-d*v*l-g*o*u+a*v*u+d*o*m-a*h*m,R=t*y+i*_+n*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(v*u*r-h*m*r-v*n*p+i*m*p+h*n*f-i*u*f)*A,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*f+i*l*f)*A,e[3]=(h*l*r-o*u*r-h*n*c+i*u*c+o*n*p-i*l*p)*A,e[4]=_*A,e[5]=(d*m*r-g*u*r+g*n*p-t*m*p-d*n*f+t*u*f)*A,e[6]=(g*l*r-a*m*r-g*n*c+t*m*c+a*n*f-t*l*f)*A,e[7]=(a*u*r-d*l*r+d*n*c-t*u*c-a*n*p+t*l*p)*A,e[8]=x*A,e[9]=(g*h*r-d*v*r-g*i*p+t*v*p+d*i*f-t*h*f)*A,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*A,e[11]=(d*o*r-a*h*r-d*i*c+t*h*c+a*i*p-t*o*p)*A,e[12]=L*A,e[13]=(d*v*n-g*h*n+g*i*u-t*v*u-d*i*m+t*h*m)*A,e[14]=(g*o*n-a*v*n-g*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*h*n-d*o*n+d*i*l-t*h*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,d*o+i,d*l-n*a,0,c*l-n*o,d*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,p=r*d,g=r*h,v=a*d,m=a*h,f=o*h,y=l*c,_=l*d,x=l*h,L=i.x,R=i.y,A=i.z;return n[0]=(1-(v+f))*L,n[1]=(p+x)*L,n[2]=(g-_)*L,n[3]=0,n[4]=(p-x)*R,n[5]=(1-(u+f))*R,n[6]=(m+y)*R,n[7]=0,n[8]=(g+_)*A,n[9]=(m-y)*A,n[10]=(1-(u+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=ln.set(n[0],n[1],n[2]).length();const a=ln.set(n[4],n[5],n[6]).length(),o=ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],qt.copy(this);const c=1/r,d=1/a,h=1/o;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=fi){const l=this.elements,c=2*r/(t-e),d=2*r/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n);let p,g;if(o===fi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Bs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=fi){const l=this.elements,c=1/(t-e),d=1/(i-n),h=1/(a-r),u=(t+e)*c,p=(i+n)*d;let g,v;if(o===fi)g=(a+r)*h,v=-2*h;else if(o===Bs)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ln=new P,qt=new lt,fd=new P(0,0,0),pd=new P(1,1,1),Si=new P,ls=new P,Ut=new P,vo=new lt,_o=new Ki;class ii{constructor(e=0,t=0,i=0,n=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],d=n[9],h=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _o.setFromEuler(this),this.setFromQuaternion(_o,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const xo=new P,cn=new Ki,li=new lt,cs=new P,zn=new P,gd=new P,vd=new Ki,yo=new P(1,0,0),Mo=new P(0,1,0),So=new P(0,0,1),bo={type:"added"},_d={type:"removed"},dn={type:"childadded",child:null},lr={type:"childremoved",child:null};class Mt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new P,t=new ii,i=new Ki,n=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.multiply(cn),this}rotateOnWorldAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.premultiply(cn),this}rotateX(e){return this.rotateOnAxis(yo,e)}rotateY(e){return this.rotateOnAxis(Mo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return xo.copy(e).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yo,e)}translateY(e){return this.translateOnAxis(Mo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(zn,cs,this.up):li.lookAt(cs,zn,this.up),this.quaternion.setFromRotationMatrix(li),n&&(li.extractRotation(n.matrixWorld),cn.setFromRotationMatrix(li),this.quaternion.premultiply(cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bo),dn.child=e,this.dispatchEvent(dn),dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),lr.child=e,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bo),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,ci=new P,cr=new P,di=new P,hn=new P,un=new P,Eo=new P,dr=new P,hr=new P,ur=new P,fr=new ut,pr=new ut,mr=new ut;class Gt{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Yt.subVectors(e,t),n.cross(Yt);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Yt.subVectors(n,t),ci.subVectors(i,t),cr.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(ci),l=Yt.dot(cr),c=ci.dot(ci),d=ci.dot(cr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(e,t),pr.fromBufferAttribute(e,i),mr.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(fr,r.x),a.addScaledVector(pr,r.y),a.addScaledVector(mr,r.z),a}static isFrontFacing(e,t,i,n){return Yt.subVectors(i,t),ci.subVectors(e,t),Yt.cross(ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Yt.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;hn.subVectors(n,i),un.subVectors(r,i),dr.subVectors(e,i);const l=hn.dot(dr),c=un.dot(dr);if(l<=0&&c<=0)return t.copy(i);hr.subVectors(e,n);const d=hn.dot(hr),h=un.dot(hr);if(d>=0&&h<=d)return t.copy(n);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(hn,a);ur.subVectors(e,r);const p=hn.dot(ur),g=un.dot(ur);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(un,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Eo.subVectors(r,n),o=(h-d)/(h-d+(p-g)),t.copy(n).addScaledVector(Eo,o);const f=1/(m+v+u);return a=v*f,o=u*f,t.copy(i).addScaledVector(hn,a).addScaledVector(un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ds={h:0,s:0,l:0};function gr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=td(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gr(a,r,e+1/3),this.g=gr(a,r,e),this.b=gr(a,r,e-1/3)}return je.toWorkingColorSpace(this,n),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=Vl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return je.fromWorkingColorSpace(Et.copy(this),e),Math.round(xt(Et.r*255,0,255))*65536+Math.round(xt(Et.g*255,0,255))*256+Math.round(xt(Et.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,n=Et.g,r=Et.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ot){je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,n=Et.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ds);const i=Qs(bi.h,ds.h,t),n=Qs(bi.s,ds.s,t),r=Qs(bi.l,ds.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new We;We.NAMES=Vl;let xd=0;class Qi extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Dn(),this.name="",this.blending=Mn,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=En,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mn&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Or&&(i.blendSrc=this.blendSrc),this.blendDst!==Br&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==En&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Qi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,hs=new ie;class mt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oo,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class Wl extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $l extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qe extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yd=0;const kt=new lt,vr=new Mt,fn=new P,Ft=new gi,kn=new gi,_t=new P;class dt extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?$l:Wl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,i){return kt.makeTranslation(e,t,i),this.applyMatrix4(kt),this}scale(e,t,i){return kt.makeScale(e,t,i),this.applyMatrix4(kt),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fn).negate(),this.translate(fn.x,fn.y,fn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(i,3))}else{for(let i=0,n=t.count;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];kn.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ft.min,kn.min),Ft.expandByPoint(_t),_t.addVectors(Ft.max,kn.max),Ft.expandByPoint(_t)):(Ft.expandByPoint(kn.min),Ft.expandByPoint(kn.max))}Ft.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)_t.fromBufferAttribute(o,c),l&&(fn.fromBufferAttribute(e,c),_t.add(fn)),n=Math.max(n,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new P,l[w]=new P;const c=new P,d=new P,h=new P,u=new ie,p=new ie,g=new ie,v=new P,m=new P;function f(w,M,S){c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),o[w].add(v),o[M].add(v),o[S].add(v),l[w].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,M=y.length;w<M;++w){const S=y[w],C=S.start,N=S.count;for(let U=C,B=C+N;U<B;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new P,x=new P,L=new P,R=new P;function A(w){L.fromBufferAttribute(n,w),R.copy(L);const M=o[w];_.copy(M),_.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(R,M);const C=x.dot(l[w])<0?-1:1;a.setXYZW(w,_.x,_.y,_.z,C)}for(let w=0,M=y.length;w<M;++w){const S=y[w],C=S.start,N=S.count;for(let U=C,B=C+N;U<B;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(n,r),d.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(n,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new mt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(n[l]=d,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new lt,Bi=new Xs,us=new $s,To=new P,fs=new P,ps=new P,ms=new P,_r=new P,gs=new P,Ao=new P,vs=new P;class Je extends Mt{constructor(e=new dt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(_r.fromBufferAttribute(h,e),a?gs.addScaledVector(_r,d):gs.addScaledVector(_r.sub(t),d))}t.add(gs)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(us.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(us,To)===null||Bi.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(wo.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(wo),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=_;x<L;x+=3){const R=o.getX(x),A=o.getX(x+1),w=o.getX(x+2);n=_s(this,f,e,i,c,d,h,R,A,w),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);n=_s(this,a,e,i,c,d,h,y,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=_;x<L;x+=3){const R=x,A=x+1,w=x+2;n=_s(this,f,e,i,c,d,h,R,A,w),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,_=m+1,x=m+2;n=_s(this,a,e,i,c,d,h,y,_,x),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Md(s,e,t,i,n,r,a,o){let l;if(e.side===Pt?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Li,o),l===null)return null;vs.copy(o),vs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:s}}function _s(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,fs),s.getVertexPosition(l,ps),s.getVertexPosition(c,ms);const d=Md(s,e,t,i,fs,ps,ms,Ao);if(d){const h=new P;Gt.getBarycoord(Ao,fs,ps,ms,h),n&&(d.uv=Gt.getInterpolatedAttribute(n,o,l,c,h,new ie)),r&&(d.uv1=Gt.getInterpolatedAttribute(r,o,l,c,h,new ie)),a&&(d.normal=Gt.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Gt.getNormal(fs,ps,ms,u.normal),d.face=u,d.barycoord=h}return d}class Di extends dt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(h,2));function g(v,m,f,y,_,x,L,R,A,w,M){const S=x/A,C=L/w,N=x/2,U=L/2,B=R/2,H=A+1,z=w+1;let X=0,G=0;const J=new P;for(let ee=0;ee<z;ee++){const de=ee*C-U;for(let ye=0;ye<H;ye++){const Oe=ye*S-N;J[v]=Oe*y,J[m]=de*_,J[f]=B,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[f]=R>0?1:-1,d.push(J.x,J.y,J.z),h.push(ye/A),h.push(1-ee/w),X+=1}}for(let ee=0;ee<w;ee++)for(let de=0;de<A;de++){const ye=u+de+H*ee,Oe=u+de+H*(ee+1),q=u+(de+1)+H*(ee+1),ne=u+(de+1)+H*ee;l.push(ye,Oe,ne),l.push(Oe,q,ne),G+=6}o.addGroup(p,G,M),p+=G,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cn(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Tt(s){const e={};for(let t=0;t<s.length;t++){const i=Cn(s[t]);for(const n in i)e[n]=i[n]}return e}function Sd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const bd={clone:Cn,merge:Tt};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Qi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cn(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ql extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new P,Ro=new ie,Co=new ie;class Ht extends ql{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Ro,Co),t.subVectors(Co,Ro)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($n*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pn=-90,mn=1;class Td extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ht(pn,mn,e,t);n.layers=this.layers,this.add(n);const r=new Ht(pn,mn,e,t);r.layers=this.layers,this.add(r);const a=new Ht(pn,mn,e,t);a.layers=this.layers,this.add(a);const o=new Ht(pn,mn,e,t);o.layers=this.layers,this.add(o);const l=new Ht(pn,mn,e,t);l.layers=this.layers,this.add(l);const c=new Ht(pn,mn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yl extends It{constructor(e,t,i,n,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:wn,super(e,t,i,n,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ad extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Yl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Di(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Cn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Ai});r.uniforms.tEquirect.value=t;const a=new Je(n,r),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=ei),new Td(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}const xr=new P,Rd=new P,Cd=new He;class wi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=xr.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cd.getNormalMatrix(e),n=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new $s,xs=new P;class Ba{constructor(e=new wi,t=new wi,i=new wi,n=new wi,r=new wi,a=new wi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],d=n[5],h=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],y=n[13],_=n[14],x=n[15];if(i[0].setComponents(l-r,u-c,m-p,x-f).normalize(),i[1].setComponents(l+r,u+c,m+p,x+f).normalize(),i[2].setComponents(l+a,u+d,m+g,x+y).normalize(),i[3].setComponents(l-a,u-d,m-g,x-y).normalize(),i[4].setComponents(l-o,u-h,m-v,x-_).normalize(),t===fi)i[5].setComponents(l+o,u+h,m+v,x+_).normalize();else if(t===Bs)i[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(xs.x=n.normal.x>0?e.max.x:e.min.x,xs.y=n.normal.y>0?e.max.y:e.min.y,xs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jl(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ld(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}class en extends dt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<d;f++){const y=f*u-a;for(let _=0;_<c;_++){const x=_*h-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const _=y+c*f,x=y+c*(f+1),L=y+1+c*(f+1),R=y+1+c*f;p.push(_,x,R),p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,th=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ih=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Eh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ch=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ru=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Du=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ju=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Dd,alphahash_pars_fragment:Pd,alphamap_fragment:Id,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Gd,bsdfs:Vd,iridescence_fragment:Wd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:jd,color_fragment:Kd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:Qd,common:eh,cube_uv_reflection_fragment:th,defaultnormal_vertex:ih,displacementmap_pars_vertex:nh,displacementmap_vertex:sh,emissivemap_fragment:rh,emissivemap_pars_fragment:ah,colorspace_fragment:oh,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:dh,envmap_pars_fragment:hh,envmap_pars_vertex:uh,envmap_physical_pars_fragment:bh,envmap_vertex:fh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:vh,gradientmap_pars_fragment:_h,lightmap_pars_fragment:xh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Sh,lights_toon_fragment:Eh,lights_toon_pars_fragment:wh,lights_phong_fragment:Th,lights_phong_pars_fragment:Ah,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ch,lights_fragment_begin:Lh,lights_fragment_maps:Dh,lights_fragment_end:Ph,logdepthbuf_fragment:Ih,logdepthbuf_pars_fragment:Nh,logdepthbuf_pars_vertex:Uh,logdepthbuf_vertex:Fh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:kh,metalnessmap_fragment:Hh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:Vh,morphcolor_vertex:Wh,morphnormal_vertex:$h,morphtarget_pars_vertex:Xh,morphtarget_vertex:qh,normal_fragment_begin:Yh,normal_fragment_maps:jh,normal_pars_fragment:Kh,normal_pars_vertex:Zh,normal_vertex:Jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:eu,clearcoat_normal_fragment_maps:tu,clearcoat_pars_fragment:iu,iridescence_pars_fragment:nu,opaque_fragment:su,packing:ru,premultiplied_alpha_fragment:au,project_vertex:ou,dithering_fragment:lu,dithering_pars_fragment:cu,roughnessmap_fragment:du,roughnessmap_pars_fragment:hu,shadowmap_pars_fragment:uu,shadowmap_pars_vertex:fu,shadowmap_vertex:pu,shadowmask_pars_fragment:mu,skinbase_vertex:gu,skinning_pars_vertex:vu,skinning_vertex:_u,skinnormal_vertex:xu,specularmap_fragment:yu,specularmap_pars_fragment:Mu,tonemapping_fragment:Su,tonemapping_pars_fragment:bu,transmission_fragment:Eu,transmission_pars_fragment:wu,uv_pars_fragment:Tu,uv_pars_vertex:Au,uv_vertex:Ru,worldpos_vertex:Cu,background_vert:Lu,background_frag:Du,backgroundCube_vert:Pu,backgroundCube_frag:Iu,cube_vert:Nu,cube_frag:Uu,depth_vert:Fu,depth_frag:Ou,distanceRGBA_vert:Bu,distanceRGBA_frag:zu,equirect_vert:ku,equirect_frag:Hu,linedashed_vert:Gu,linedashed_frag:Vu,meshbasic_vert:Wu,meshbasic_frag:$u,meshlambert_vert:Xu,meshlambert_frag:qu,meshmatcap_vert:Yu,meshmatcap_frag:ju,meshnormal_vert:Ku,meshnormal_frag:Zu,meshphong_vert:Ju,meshphong_frag:Qu,meshphysical_vert:ef,meshphysical_frag:tf,meshtoon_vert:nf,meshtoon_frag:sf,points_vert:rf,points_frag:af,shadow_vert:of,shadow_frag:lf,sprite_vert:cf,sprite_frag:df},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Qt={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Qt.physical={uniforms:Tt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ys={r:0,b:0,g:0},ki=new ii,hf=new lt;function uf(s,e,t,i,n,r,a){const o=new We(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?f(o,l):x&&x.isColor&&(f(x,1),_=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Vs)?(d===void 0&&(d=new Je(new Di(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Cn(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(ki)),d.material.toneMapped=je.getTransfer(x.colorSpace)!==it,(h!==x||u!==x.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,p=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Je(new en(2,2),new Pi({name:"BackgroundMaterial",uniforms:Cn(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(ys,Xl(s)),i.buffers.color.setClear(ys.r,ys.g,ys.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:v,addToRenderList:m}}function ff(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(S,C,N,U,B){let H=!1;const z=h(U,N,C);r!==z&&(r=z,c(r.object)),H=p(S,U,N,B),H&&g(S,U,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,x(S,C,N,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function d(S){return s.deleteVertexArray(S)}function h(S,C,N){const U=N.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let H=B[C.id];H===void 0&&(H={},B[C.id]=H);let z=H[U];return z===void 0&&(z=u(l()),H[U]=z),z}function u(S){const C=[],N=[],U=[];for(let B=0;B<t;B++)C[B]=0,N[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,C,N,U){const B=r.attributes,H=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){const ee=B[G];let de=H[G];if(de===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(S,C,N,U){const B={},H=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){let ee=H[G];ee===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),B[G]=de,z++}r.attributes=B,r.attributesNum=z,r.index=U}function v(){const S=r.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){const N=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;N[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),B[S]!==C&&(s.vertexAttribDivisor(S,C),B[S]=C)}function y(){const S=r.newAttributes,C=r.enabledAttributes;for(let N=0,U=C.length;N<U;N++)C[N]!==S[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function _(S,C,N,U,B,H,z){z===!0?s.vertexAttribIPointer(S,C,N,B,H):s.vertexAttribPointer(S,C,N,U,B,H)}function x(S,C,N,U){v();const B=U.attributes,H=N.getAttributes(),z=C.defaultAttributeValues;for(const X in H){const G=H[X];if(G.location>=0){let J=B[X];if(J===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const ee=J.normalized,de=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Oe=ye.buffer,q=ye.type,ne=ye.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||J.gpuType===Da;if(J.isInterleavedBufferAttribute){const re=J.data,Ae=re.stride,Ue=J.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)f(G.location+Ie,re.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Ie=0;Ie<G.locationSize;Ie++)_(G.location+Ie,de/G.locationSize,q,ee,Ae*ne,(Ue+de/G.locationSize*Ie)*ne,ge)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)f(G.location+re,J.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let re=0;re<G.locationSize;re++)_(G.location+re,de/G.locationSize,q,ee,de*ne,de/G.locationSize*re*ne,ge)}}else if(z!==void 0){const ee=z[X];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(G.location,ee);break;case 3:s.vertexAttrib3fv(G.location,ee);break;case 4:s.vertexAttrib4fv(G.location,ee);break;default:s.vertexAttrib1fv(G.location,ee)}}}}y()}function L(){w();for(const S in i){const C=i[S];for(const N in C){const U=C[N];for(const B in U)d(U[B].object),delete U[B];delete C[N]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const N in C){const U=C[N];for(const B in U)d(U[B].object),delete U[B];delete C[N]}delete i[S.id]}function A(S){for(const C in i){const N=i[C];if(N[S.id]===void 0)continue;const U=N[S.id];for(const B in U)d(U[B].object),delete U[B];delete N[S.id]}}function w(){M(),a=!0,r!==n&&(r=n,c(r.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function pf(s,e,t){let i;function n(c){i=c}function r(c,d){s.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,h){h!==0&&(s.drawArraysInstanced(i,c,d,h),t.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,i,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mf(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==jt&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!w)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function gf(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new wi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||n;return n=u,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!n||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:i,_=y*4;let x=f.clippingState||null;l.value=x,x=d(g,u,_,p);for(let L=0;L!==_;++L)x[L]=t[L];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function vf(s){let e=new WeakMap;function t(a,o){return o===Xr?a.mapping=wn:o===qr&&(a.mapping=Tn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xr||o===qr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ad(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Kl extends ql{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _n=4,Lo=[.125,.215,.35,.446,.526,.582],Wi=20,yr=new Kl,Do=new We;let Mr=null,Sr=0,br=0,Er=!1;const Gi=(1+Math.sqrt(5))/2,gn=1/Gi,Po=[new P(-Gi,gn,0),new P(Gi,gn,0),new P(-gn,0,Gi),new P(gn,0,Gi),new P(0,Gi,-gn),new P(0,Gi,gn),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,br),this._renderer.xr.enabled=Er,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wn||e.mapping===Tn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Jn,format:jt,colorSpace:Ln,depthBuffer:!1},n=No(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=xf(r,e,t)}return n}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,n){const o=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Do),d.toneMapping=Ri,d.autoClear=!1;const p=new Vt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Je(new Di,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Do),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;Ms(n,y*_,f>2?_:0,_,_),d.setRenderTarget(n),v&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===wn||e.mapping===Tn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uo());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Po[(n-r-1)%Po.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Je(this._lodPlanes[n],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const f=[];let y=0;for(let A=0;A<Wi;++A){const w=A/v,M=Math.exp(-w*w/2);f.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const x=this._sizeLods[n],L=3*x*(n>_-_n?n-_+_n:0),R=4*(this._cubeSize-x);Ms(t,L,R,3*x,2*x),l.setRenderTarget(t),l.render(h,yr)}}function _f(s){const e=[],t=[],i=[];let n=s;const r=s-_n+1+Lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-_n?l=Lo[a-s+_n-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,w=R>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];y.set(M,v*g*R),_.set(u,m*g*R);const S=[R,R,R,R,R,R];x.set(S,f*g*R)}const L=new dt;L.setAttribute("position",new mt(y,v)),L.setAttribute("uv",new mt(_,m)),L.setAttribute("faceIndex",new mt(x,f)),e.push(L),n>_n&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function No(s,e,t){const i=new ji(s,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function xf(s,e,t){const i=new Float32Array(Wi),n=new P(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Uo(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Fo(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yf(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xr||l===qr,d=l===wn||l===Tn;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Io(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&n(p)?(t===null&&(t=new Io(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Mf(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Vn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Sf(s,e,t,i){const n={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete n[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const L=y[_+0],R=y[_+1],A=y[_+2];u.push(L,R,R,A,A,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const L=_+0,R=_+1,A=_+2;u.push(L,R,R,A,A,L)}}else return;const m=new(kl(u)?$l:Wl)(u,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function bf(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(i,p,r,u*a),t.update(p,i,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,u*a,g),t.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function h(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ef(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function wf(s,e,t){const i=new WeakMap,n=new ut;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*R*4*h),w=new Gl(A,L,R,h);w.type=ui,w.needsUpdate=!0;const M=x*4;for(let C=0;C<h;C++){const N=f[C],U=y[C],B=_[C],H=L*R*4*C;for(let z=0;z<N.count;z++){const X=z*M;g===!0&&(n.fromBufferAttribute(N,z),A[H+X+0]=n.x,A[H+X+1]=n.y,A[H+X+2]=n.z,A[H+X+3]=0),v===!0&&(n.fromBufferAttribute(U,z),A[H+X+4]=n.x,A[H+X+5]=n.y,A[H+X+6]=n.z,A[H+X+7]=0),m===!0&&(n.fromBufferAttribute(B,z),A[H+X+8]=n.x,A[H+X+9]=n.y,A[H+X+10]=n.z,A[H+X+11]=B.itemSize===4?n.w:1)}}u={count:h,texture:w,size:new ie(L,R)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Tf(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Zl extends It{constructor(e,t,i,n,r,a,o,l,c,d=Sn){if(d!==Sn&&d!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Sn&&(i=Yi),i===void 0&&d===Rn&&(i=An),super(null,n,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jl=new It,Oo=new Zl(1,1),Ql=new Gl,ec=new hd,tc=new Yl,Bo=[],zo=[],ko=new Float32Array(16),Ho=new Float32Array(9),Go=new Float32Array(4);function Pn(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Bo[n];if(r===void 0&&(r=new Float32Array(n),Bo[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function qs(s,e){let t=zo[e];t===void 0&&(t=new Int32Array(e),zo[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function Df(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Go.set(i),s.uniformMatrix2fv(this.addr,!1,Go),vt(t,i)}}function Pf(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Ho.set(i),s.uniformMatrix3fv(this.addr,!1,Ho),vt(t,i)}}function If(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;ko.set(i),s.uniformMatrix4fv(this.addr,!1,ko),vt(t,i)}}function Nf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Bf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Gf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Oo.compareFunction=zl,r=Oo):r=Jl,t.setTexture2D(e||r,n)}function Vf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ec,n)}function Wf(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||tc,n)}function $f(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ql,n)}function Xf(s){switch(s){case 5126:return Af;case 35664:return Rf;case 35665:return Cf;case 35666:return Lf;case 35674:return Df;case 35675:return Pf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Uf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return kf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return $f}}function qf(s,e){s.uniform1fv(this.addr,e)}function Yf(s,e){const t=Pn(e,this.size,2);s.uniform2fv(this.addr,t)}function jf(s,e){const t=Pn(e,this.size,3);s.uniform3fv(this.addr,t)}function Kf(s,e){const t=Pn(e,this.size,4);s.uniform4fv(this.addr,t)}function Zf(s,e){const t=Pn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jf(s,e){const t=Pn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qf(s,e){const t=Pn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ep(s,e){s.uniform1iv(this.addr,e)}function tp(s,e){s.uniform2iv(this.addr,e)}function ip(s,e){s.uniform3iv(this.addr,e)}function np(s,e){s.uniform4iv(this.addr,e)}function sp(s,e){s.uniform1uiv(this.addr,e)}function rp(s,e){s.uniform2uiv(this.addr,e)}function ap(s,e){s.uniform3uiv(this.addr,e)}function op(s,e){s.uniform4uiv(this.addr,e)}function lp(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Jl,r[a])}function cp(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||ec,r[a])}function dp(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||tc,r[a])}function hp(s,e,t){const i=this.cache,n=e.length,r=qs(t,n);gt(i,r)||(s.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ql,r[a])}function up(s){switch(s){case 5126:return qf;case 35664:return Yf;case 35665:return jf;case 35666:return Kf;case 35674:return Zf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return ip;case 35669:case 35673:return np;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return hp}}class fp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xf(t.type)}}class pp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=up(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Vo(s,e){s.seq.push(e),s.map[e.id]=e}function gp(s,e,t){const i=s.name,n=i.length;for(wr.lastIndex=0;;){const r=wr.exec(i),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Vo(t,c===void 0?new fp(o,s,e):new pp(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new mp(o),Vo(t,h)),t=h}}}class Os{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);gp(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Wo(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const vp=37297;let _p=0;function xp(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const $o=new He;function yp(s){je._getMatrix($o,je.workingColorSpace,s);const e=`mat3( ${$o.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Ws:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xo(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+xp(s.getShaderSource(e),a)}else return n}function Mp(s,e){const t=yp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sp(s,e){let t;switch(e){case Bc:t="Linear";break;case zc:t="Reinhard";break;case kc:t="Cineon";break;case Tl:t="ACESFilmic";break;case Gc:t="AgX";break;case Vc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new P;function bp(){je.getLuminanceCoefficients(Ss);const s=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wn).join(`
`)}function wp(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Tp(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Wn(s){return s!==""}function qo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(s){return s.replace(Ap,Cp)}const Rp=new Map;function Cp(s,e){let t=Ve[e];if(t===void 0){const i=Rp.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ba(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Lp,Dp)}function Dp(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ko(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wn:case Tn:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Np(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Tn:e="ENVMAP_MODE_REFRACTION";break}return e}function Up(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Op(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Pp(t),c=Ip(t),d=Np(t),h=Up(t),u=Fp(t),p=Ep(t),g=wp(r),v=n.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wn).join(`
`),f.length>0&&(f+=`
`)):(m=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wn).join(`
`),f=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Mp("linearToOutputTexel",t.outputColorSpace),bp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wn).join(`
`)),a=ba(a),a=qo(a,t),a=Yo(a,t),o=ba(o),o=qo(o,t),o=Yo(o,t),a=jo(a),o=jo(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+a,x=y+f+o,L=Wo(n,n.VERTEX_SHADER,_),R=Wo(n,n.FRAGMENT_SHADER,x);n.attachShader(v,L),n.attachShader(v,R),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(C){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(v).trim(),U=n.getShaderInfoLog(L).trim(),B=n.getShaderInfoLog(R).trim();let H=!0,z=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,L,R);else{const X=Xo(n,L,"vertex"),G=Xo(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+X+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||B==="")&&(z=!1);z&&(C.diagnostics={runnable:H,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:f}})}n.deleteShader(L),n.deleteShader(R),w=new Os(n,v),M=Tp(n,v)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=n.getProgramParameter(v,vp)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_p++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kp(e),t.set(e,i)),i}}class kp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Hp(s,e,t,i,n,r,a){const o=new Oa,l=new zp,c=new Set,d=[],h=n.logarithmicDepthBuffer,u=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,N,U){const B=N.fog,H=U.geometry,z=M.isMeshStandardMaterial?N.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),G=X&&X.mapping===Vs?X.image.height:null,J=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ee!==void 0?ee.length:0;let ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let Oe,q,ne,ge;if(J){const tt=Qt[J];Oe=tt.vertexShader,q=tt.fragmentShader}else Oe=M.vertexShader,q=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const re=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,Ye=!!M.map,Z=!!M.matcap,ae=!!X,D=!!M.aoMap,Re=!!M.lightMap,te=!!M.bumpMap,xe=!!M.normalMap,le=!!M.displacementMap,De=!!M.emissiveMap,ve=!!M.metalnessMap,T=!!M.roughnessMap,b=M.anisotropy>0,k=M.clearcoat>0,Y=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,be=M.transmission>0,he=b&&!!M.anisotropyMap,_e=k&&!!M.clearcoatMap,$e=k&&!!M.clearcoatNormalMap,se=k&&!!M.clearcoatRoughnessMap,Me=Q&&!!M.iridescenceMap,Pe=Q&&!!M.iridescenceThicknessMap,Ne=j&&!!M.sheenColorMap,Se=j&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Ge=!!M.specularColorMap,st=!!M.specularIntensityMap,I=be&&!!M.transmissionMap,ue=be&&!!M.thicknessMap,$=!!M.gradientMap,K=!!M.alphaMap,me=M.alphaTest>0,fe=!!M.alphaHash,ze=!!M.extensions;let ht=Ri;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=s.toneMapping);const St={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:q,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ln,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Z,envMap:ae,envMapMode:ae&&X.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Re,bumpMap:te,normalMap:xe,displacementMap:u&&le,emissiveMap:De,normalMapObjectSpace:xe&&M.normalMapType===qc,normalMapTangentSpace:xe&&M.normalMapType===Bl,metalnessMap:ve,roughnessMap:T,anisotropy:b,anisotropyMap:he,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:Y,iridescence:Q,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:st,transmission:be,transmissionMap:I,thicknessMap:ue,gradientMap:$,opaque:M.transparent===!1&&M.blending===Mn&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:fe,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:Re&&v(M.lightMap.channel),bumpMapUv:te&&v(M.bumpMap.channel),normalMapUv:xe&&v(M.normalMap.channel),displacementMapUv:le&&v(M.displacementMap.channel),emissiveMapUv:De&&v(M.emissiveMap.channel),metalnessMapUv:ve&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:he&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(M.sheenRoughnessMap.channel),specularMapUv:Xe&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:st&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ue&&v(M.thicknessMap.channel),alphaMapUv:K&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xe||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ye||K),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yt,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const S=g[M.type];let C;if(S){const N=Qt[S];C=bd.clone(N.uniforms)}else C=M.uniforms;return C}function L(M,S){let C;for(let N=0,U=d.length;N<U;N++){const B=d[N];if(B.cacheKey===S){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Op(s,S,M,r),d.push(C)),C}function R(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function A(M){l.remove(M)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:w}}function Gp(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Vp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jo(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,u,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function o(h,u,p,g,v,m){const f=a(h,u,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(h,u,p,g,v,m){const f=a(h,u,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||Vp),i.length>1&&i.sort(u||Zo),n.length>1&&n.sort(u||Zo)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:d,sort:c}}function Wp(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Jo,s.set(i,[a])):n>=r.length?(a=new Jo,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function $p(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Xp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qp=0;function Yp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jp(s){const e=new $p,t=Xp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new lt,a=new lt;function o(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,_=0,x=0,L=0,R=0,A=0;c.sort(Yp);for(let M=0,S=c.length;M<S;M++){const C=c[M],N=C.color,U=C.intensity,B=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=N.r*U,h+=N.g*U,u+=N.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],U);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=C.shadow.matrix,y++}i.directional[p]=z,p++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[v]=z;const X=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,X.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[v]=X.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=H,x++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(N).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=C.shadow.matrix,_++}i.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[f]=z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==y||w.numPointShadows!==_||w.numSpotShadows!==x||w.numSpotMaps!==L||w.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,w.directionalLength=p,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=y,w.numPointShadows=_,w.numSpotShadows=x,w.numSpotMaps=L,w.numLightProbes=A,i.version=qp++)}function l(c,d){let h=0,u=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Qo(s){const e=new jp(s),t=[],i=[];function n(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function a(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Kp(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new Qo(s),e.set(n,[o])):r>=a.length?(o=new Qo(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Zp extends Qi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(s,e,t){let i=new Ba;const n=new ie,r=new ie,a=new ut,o=new Zp({depthPacking:Xc}),l=new Jp,c={},d=t.maxTextureSize,h={[Li]:Pt,[Pt]:Li,[yt]:yt},u=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Qp,fragmentShader:em}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Je(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let f=this.type;this.render=function(R,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ai),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=f!==hi&&this.type===hi,B=f===hi&&this.type!==hi;for(let H=0,z=R.length;H<z;H++){const X=R[H],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const J=G.getFrameExtents();if(n.multiply(J),r.copy(G.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(r.x=Math.floor(d/J.x),n.x=r.x*J.x,G.mapSize.x=r.x),n.y>d&&(r.y=Math.floor(d/J.y),n.y=r.y*J.y,G.mapSize.y=r.y)),G.map===null||U===!0||B===!0){const de=this.type!==hi?{minFilter:Kt,magFilter:Kt}:{};G.map!==null&&G.map.dispose(),G.map=new ji(n.x,n.y,de),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ee=G.getViewportCount();for(let de=0;de<ee;de++){const ye=G.getViewport(de);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),N.viewport(a),G.updateMatrices(X,de),i=G.getFrustum(),x(A,w,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===hi&&y(G,w),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,C)};function y(R,A){const w=e.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ji(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,w,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,w,p,v,null)}function _(R,A,w,M){let S=null;const C=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=S.uuid,U=A.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let H=B[U];H===void 0&&(H=S.clone(),B[U]=H,A.addEventListener("dispose",L)),S=H}if(S.visible=A.visible,S.wireframe=A.wireframe,M===hi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=w}return S}function x(R,A,w,M,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===hi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const U=e.update(R),B=R.material;if(Array.isArray(B)){const H=U.groups;for(let z=0,X=H.length;z<X;z++){const G=H[z],J=B[G.materialIndex];if(J&&J.visible){const ee=_(R,J,M,S);R.onBeforeShadow(s,R,A,w,U,ee,G),s.renderBufferDirect(w,null,U,ee,R,G),R.onAfterShadow(s,R,A,w,U,ee,G)}}}else if(B.visible){const H=_(R,B,M,S);R.onBeforeShadow(s,R,A,w,U,H,null),s.renderBufferDirect(w,null,U,H,R,null),R.onAfterShadow(s,R,A,w,U,H,null)}}const N=R.children;for(let U=0,B=N.length;U<B;U++)x(N[U],A,w,M,S)}function L(R){R.target.removeEventListener("dispose",L);for(const w in c){const M=c[w],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const im={[zr]:kr,[Hr]:Wr,[Gr]:$r,[En]:Vr,[kr]:zr,[Wr]:Hr,[$r]:Gr,[Vr]:En};function nm(s,e){function t(){let I=!1;const ue=new ut;let $=null;const K=new ut(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(s.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,fe,ze,ht,St){St===!0&&(me*=ht,fe*=ht,ze*=ht),ue.set(me,fe,ze,ht),K.equals(ue)===!1&&(s.clearColor(me,fe,ze,ht),K.copy(ue))},reset:function(){I=!1,$=null,K.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,$=null,K=null,me=null;return{setReversed:function(fe){if(ue!==fe){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ht=me;me=null,this.setClear(ht)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?re(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(fe){$!==fe&&!I&&(s.depthMask(fe),$=fe)},setFunc:function(fe){if(ue&&(fe=im[fe]),K!==fe){switch(fe){case zr:s.depthFunc(s.NEVER);break;case kr:s.depthFunc(s.ALWAYS);break;case Hr:s.depthFunc(s.LESS);break;case En:s.depthFunc(s.LEQUAL);break;case Gr:s.depthFunc(s.EQUAL);break;case Vr:s.depthFunc(s.GEQUAL);break;case Wr:s.depthFunc(s.GREATER);break;case $r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=fe}},setLocked:function(fe){I=fe},setClear:function(fe){me!==fe&&(ue&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){I=!1,$=null,K=null,me=null,ue=!1}}}function n(){let I=!1,ue=null,$=null,K=null,me=null,fe=null,ze=null,ht=null,St=null;return{setTest:function(tt){I||(tt?re(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!I&&(s.stencilMask(tt),ue=tt)},setFunc:function(tt,Wt,si){($!==tt||K!==Wt||me!==si)&&(s.stencilFunc(tt,Wt,si),$=tt,K=Wt,me=si)},setOp:function(tt,Wt,si){(fe!==tt||ze!==Wt||ht!==si)&&(s.stencilOp(tt,Wt,si),fe=tt,ze=Wt,ht=si)},setLocked:function(tt){I=tt},setClear:function(tt){St!==tt&&(s.clearStencil(tt),St=tt)},reset:function(){I=!1,ue=null,$=null,K=null,me=null,fe=null,ze=null,ht=null,St=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,x=null,L=null,R=null,A=new We(0,0,0),w=0,M=!1,S=null,C=null,N=null,U=null,B=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=X>=2);let J=null,ee={};const de=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Oe=new ut().fromArray(de),q=new ut().fromArray(ye);function ne(I,ue,$,K){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(I,fe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<$;ze++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ue+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const ge={};ge[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc(En),te(!1),xe(no),re(s.CULL_FACE),D(Ai);function re(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ae(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ue(I,ue){return h[I]!==ue?(s.bindFramebuffer(I,ue),h[I]=ue,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ie(I,ue){let $=p,K=!1;if(I){$=u.get(ue),$===void 0&&($=[],u.set(ue,$));const me=I.textures;if($.length!==me.length||$[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ze=me.length;fe<ze;fe++)$[fe]=s.COLOR_ATTACHMENT0+fe;$.length=me.length,K=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,K=!0);K&&s.drawBuffers($)}function Ye(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Z={[Vi]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[yc]:s.FUNC_REVERSE_SUBTRACT};Z[Mc]=s.MIN,Z[Sc]=s.MAX;const ae={[bc]:s.ZERO,[Ec]:s.ONE,[wc]:s.SRC_COLOR,[Or]:s.SRC_ALPHA,[Dc]:s.SRC_ALPHA_SATURATE,[Cc]:s.DST_COLOR,[Ac]:s.DST_ALPHA,[Tc]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[Lc]:s.ONE_MINUS_DST_COLOR,[Rc]:s.ONE_MINUS_DST_ALPHA,[Pc]:s.CONSTANT_COLOR,[Ic]:s.ONE_MINUS_CONSTANT_COLOR,[Nc]:s.CONSTANT_ALPHA,[Uc]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,ue,$,K,me,fe,ze,ht,St,tt){if(I===Ai){v===!0&&(Ae(s.BLEND),v=!1);return}if(v===!1&&(re(s.BLEND),v=!0),I!==_c){if(I!==m||tt!==M){if((f!==Vi||x!==Vi)&&(s.blendEquation(s.FUNC_ADD),f=Vi,x=Vi),tt)switch(I){case Mn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fr:s.blendFunc(s.ONE,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,_=null,L=null,R=null,A.set(0,0,0),w=0,m=I,M=tt}return}me=me||ue,fe=fe||$,ze=ze||K,(ue!==f||me!==x)&&(s.blendEquationSeparate(Z[ue],Z[me]),f=ue,x=me),($!==y||K!==_||fe!==L||ze!==R)&&(s.blendFuncSeparate(ae[$],ae[K],ae[fe],ae[ze]),y=$,_=K,L=fe,R=ze),(ht.equals(A)===!1||St!==w)&&(s.blendColor(ht.r,ht.g,ht.b,St),A.copy(ht),w=St),m=I,M=!1}function Re(I,ue){I.side===yt?Ae(s.CULL_FACE):re(s.CULL_FACE);let $=I.side===Pt;ue&&($=!$),te($),I.blending===Mn&&I.transparent===!1?D(Ai):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function xe(I){I!==mc?(re(s.CULL_FACE),I!==C&&(I===no?s.cullFace(s.BACK):I===gc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),C=I}function le(I){I!==N&&(z&&s.lineWidth(I),N=I)}function De(I,ue,$){I?(re(s.POLYGON_OFFSET_FILL),(U!==ue||B!==$)&&(s.polygonOffset(ue,$),U=ue,B=$)):Ae(s.POLYGON_OFFSET_FILL)}function ve(I){I?re(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+H-1),J!==I&&(s.activeTexture(I),J=I)}function b(I,ue,$){$===void 0&&(J===null?$=s.TEXTURE0+H-1:$=J);let K=ee[$];K===void 0&&(K={type:void 0,texture:void 0},ee[$]=K),(K.type!==I||K.texture!==ue)&&(J!==$&&(s.activeTexture($),J=$),s.bindTexture(I,ue||ge[I]),K.type=I,K.texture=ue)}function k(){const I=ee[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Oe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function Se(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Xe(I,ue){let $=c.get(ue);$===void 0&&($=new WeakMap,c.set(ue,$));let K=$.get(I);K===void 0&&(K=s.getUniformBlockIndex(ue,I.name),$.set(I,K))}function Ge(I,ue){const K=c.get(ue).get(I);l.get(ue)!==K&&(s.uniformBlockBinding(ue,K,I.__bindingPointIndex),l.set(ue,K))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ee={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,x=null,L=null,R=null,A=new We(0,0,0),w=0,M=!1,S=null,C=null,N=null,U=null,B=null,Oe.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Ae,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:Ye,setBlending:D,setMaterial:Re,setFlipSided:te,setCullFace:xe,setLineWidth:le,setPolygonOffset:De,setScissorTest:ve,activeTexture:T,bindTexture:b,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Me,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:$e,texStorage3D:se,texSubImage2D:j,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ne,viewport:Se,reset:st}}function el(s,e,t,i){const n=sm(i);switch(t){case Dl:return s*e;case Il:return s*e;case Nl:return s*e*2;case Ul:return s*e/n.components*n.byteLength;case Na:return s*e/n.components*n.byteLength;case Fl:return s*e*2/n.components*n.byteLength;case Ua:return s*e*2/n.components*n.byteLength;case Pl:return s*e*3/n.components*n.byteLength;case jt:return s*e*4/n.components*n.byteLength;case Fa:return s*e*4/n.components*n.byteLength;case Ps:case Is:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Us:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zr:case Qr:return Math.max(s,16)*Math.max(e,8)/4;case Kr:case Jr:return Math.max(s,8)*Math.max(e,8)/2;case ea:case ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fs:case va:case _a:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ol:case xa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ya:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(s){switch(s){case mi:case Rl:return{byteLength:1,components:1};case Yn:case Cl:case Jn:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case Yi:case Da:case ui:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function rm(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return p?new OffscreenCanvas(T,b):zs("canvas")}function v(T,b,k){let Y=1;const Q=ve(T);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Y*Q.width),be=Math.floor(Y*Q.height);h===void 0&&(h=g(j,be));const he=b?g(j,be):h;return he.width=j,he.height=be,he.getContext("2d").drawImage(T,0,0,j,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+be+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,b,k,Y,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=b;if(b===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),b===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){const be=Q?Ws:je.getTransfer(Y);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=be===it?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(T,b){let k;return T?b===null||b===Yi||b===An?k=s.DEPTH24_STENCIL8:b===ui?k=s.DEPTH32F_STENCIL8:b===Yn&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===An?k=s.DEPTH_COMPONENT24:b===ui?k=s.DEPTH_COMPONENT32F:b===Yn&&(k=s.DEPTH_COMPONENT16),k}function L(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Kt&&T.minFilter!==ei?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){const b=T.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&d.delete(b)}function A(T){const b=T.target;b.removeEventListener("dispose",A),S(b)}function w(T){const b=i.get(T);if(b.__webglInit===void 0)return;const k=T.source,Y=u.get(k);if(Y){const Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(T),Object.keys(Y).length===0&&u.delete(k)}i.remove(T)}function M(T){const b=i.get(T);s.deleteTexture(b.__webglTexture);const k=T.source,Y=u.get(k);delete Y[b.__cacheKey],a.memory.textures--}function S(T){const b=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[Y]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=T.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const j=i.get(k[Y]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(k[Y])}i.remove(T)}let C=0;function N(){C=0}function U(){const T=C;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),C+=1,T}function B(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function H(T,b){const k=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,T,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function z(T,b){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function X(T,b){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function G(T,b){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ne(k,T,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const J={[Yr]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[jr]:s.MIRRORED_REPEAT},ee={[Kt]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[qi]:s.LINEAR_MIPMAP_LINEAR},de={[Yc]:s.NEVER,[ed]:s.ALWAYS,[jc]:s.LESS,[zl]:s.LEQUAL,[Kc]:s.EQUAL,[Qc]:s.GEQUAL,[Zc]:s.GREATER,[Jc]:s.NOTEQUAL};function ye(T,b){if(b.type===ui&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ei||b.magFilter===Js||b.magFilter===is||b.magFilter===qi||b.minFilter===ei||b.minFilter===Js||b.minFilter===is||b.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[b.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kt||b.minFilter!==is&&b.minFilter!==qi||b.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(T,b){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));const Y=b.source;let Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));const j=B(b);if(j!==T.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[j].usedTimes++;const be=Q[T.__cacheKey];be!==void 0&&(Q[T.__cacheKey].usedTimes--,be.usedTimes===0&&M(b)),T.__cacheKey=j,T.__webglTexture=Q[j].texture}return k}function q(T,b,k){let Y=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=Oe(T,b),j=b.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+k);const be=i.get(j);if(j.version!==be.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const he=je.getPrimaries(je.workingColorSpace),_e=b.colorSpace===Ti?null:je.getPrimaries(b.colorSpace),$e=b.colorSpace===Ti||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=v(b.image,!1,n.maxTextureSize);se=De(b,se);const Me=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let Ne=_(b.internalFormat,Me,Pe,b.colorSpace,b.isVideoTexture);ye(Y,b);let Se;const Xe=b.mipmaps,Ge=b.isVideoTexture!==!0,st=be.__version===void 0||Q===!0,I=j.dataReady,ue=L(b,se);if(b.isDepthTexture)Ne=x(b.format===Rn,b.type),st&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Pe,null));else if(b.isDataTexture)if(Xe.length>0){Ge&&st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Xe[0].width,Xe[0].height);for(let $=0,K=Xe.length;$<K;$++)Se=Xe[$],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Me,Pe,Se.data);b.generateMipmaps=!1}else Ge?(st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,se.width,se.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Me,Pe,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Pe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,Xe[0].width,Xe[0].height,se.depth);for(let $=0,K=Xe.length;$<K;$++)if(Se=Xe[$],b.format!==jt)if(Me!==null)if(Ge){if(I)if(b.layerUpdates.size>0){const me=el(Se.width,Se.height,b.format,b.type);for(const fe of b.layerUpdates){const ze=Se.data.subarray(fe*me/Se.data.BYTES_PER_ELEMENT,(fe+1)*me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,fe,Se.width,Se.height,1,Me,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ne,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,se.depth,Me,Pe,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ne,Se.width,Se.height,se.depth,0,Me,Pe,Se.data)}else{Ge&&st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Xe[0].width,Xe[0].height);for(let $=0,K=Xe.length;$<K;$++)Se=Xe[$],b.format!==jt?Me!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Me,Pe,Se.data)}else if(b.isDataArrayTexture)if(Ge){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,se.width,se.height,se.depth),I)if(b.layerUpdates.size>0){const $=el(se.width,se.height,b.format,b.type);for(const K of b.layerUpdates){const me=se.data.subarray(K*$/se.data.BYTES_PER_ELEMENT,(K+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,Me,Pe,me)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Pe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Me,Pe,se.data);else if(b.isData3DTexture)Ge?(st&&t.texStorage3D(s.TEXTURE_3D,ue,Ne,se.width,se.height,se.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Pe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Me,Pe,se.data);else if(b.isFramebufferTexture){if(st)if(Ge)t.texStorage2D(s.TEXTURE_2D,ue,Ne,se.width,se.height);else{let $=se.width,K=se.height;for(let me=0;me<ue;me++)t.texImage2D(s.TEXTURE_2D,me,Ne,$,K,0,Me,Pe,null),$>>=1,K>>=1}}else if(Xe.length>0){if(Ge&&st){const $=ve(Xe[0]);t.texStorage2D(s.TEXTURE_2D,ue,Ne,$.width,$.height)}for(let $=0,K=Xe.length;$<K;$++)Se=Xe[$],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Me,Pe,Se):t.texImage2D(s.TEXTURE_2D,$,Ne,Me,Pe,Se);b.generateMipmaps=!1}else if(Ge){if(st){const $=ve(se);t.texStorage2D(s.TEXTURE_2D,ue,Ne,$.width,$.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Pe,se)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Me,Pe,se);m(b)&&f(Y),be.__version=j.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ne(T,b,k){if(b.image.length!==6)return;const Y=Oe(T,b),Q=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(s.TEXTURE0+k);const be=je.getPrimaries(je.workingColorSpace),he=b.colorSpace===Ti?null:je.getPrimaries(b.colorSpace),_e=b.colorSpace===Ti||be===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!$e&&!se?Me[K]=v(b.image[K],!0,n.maxCubemapSize):Me[K]=se?b.image[K].image:b.image[K],Me[K]=De(b,Me[K]);const Pe=Me[0],Ne=r.convert(b.format,b.colorSpace),Se=r.convert(b.type),Xe=_(b.internalFormat,Ne,Se,b.colorSpace),Ge=b.isVideoTexture!==!0,st=j.__version===void 0||Y===!0,I=Q.dataReady;let ue=L(b,Pe);ye(s.TEXTURE_CUBE_MAP,b);let $;if($e){Ge&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Xe,Pe.width,Pe.height);for(let K=0;K<6;K++){$=Me[K].mipmaps;for(let me=0;me<$.length;me++){const fe=$[me];b.format!==jt?Ne!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,fe.width,fe.height,Ne,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,fe.width,fe.height,Ne,Se,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Xe,fe.width,fe.height,0,Ne,Se,fe.data)}}}else{if($=b.mipmaps,Ge&&st){$.length>0&&ue++;const K=ve(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(se){Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,Ne,Se,Me[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Me[K].width,Me[K].height,0,Ne,Se,Me[K].data);for(let me=0;me<$.length;me++){const ze=$[me].image[K].image;Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ze.width,ze.height,Ne,Se,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Xe,ze.width,ze.height,0,Ne,Se,ze.data)}}else{Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ne,Se,Me[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Ne,Se,Me[K]);for(let me=0;me<$.length;me++){const fe=$[me];Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Ne,Se,fe.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Xe,Ne,Se,fe.image[K])}}}m(b)&&f(s.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ge(T,b,k,Y,Q,j){const be=r.convert(k.format,k.colorSpace),he=r.convert(k.type),_e=_(k.internalFormat,be,he,k.colorSpace),$e=i.get(b),se=i.get(k);if(se.__renderTarget=b,!$e.__hasExternalTextures){const Me=Math.max(1,b.width>>j),Pe=Math.max(1,b.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,_e,Me,Pe,b.depth,0,be,he,null):t.texImage2D(Q,j,_e,Me,Pe,0,be,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),xe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,se.__webglTexture,0,te(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),b.depthBuffer){const Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=x(b.stencilBuffer,Q),be=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=te(b);xe(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,j,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,T)}else{const Y=b.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],be=r.convert(j.format,j.colorSpace),he=r.convert(j.type),_e=_(j.internalFormat,be,he,j.colorSpace),$e=te(b);k&&xe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,_e,b.width,b.height):xe(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const Q=Y.__webglTexture,j=te(b);if(b.depthTexture.format===Sn)xe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Rn)xe(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const b=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,T)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=s.createRenderbuffer(),re(b.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),re(b.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(T,b,k){const Y=i.get(T);b!==void 0&&ge(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(T)}function Ye(T){const b=T.texture,k=i.get(T),Y=i.get(b);T.addEventListener("dispose",A);const Q=T.textures,j=T.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let _e=0;_e<b.mipmaps.length;_e++)k.__webglFramebuffer[he][_e]=s.createFramebuffer()}else k.__webglFramebuffer[he]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)k.__webglFramebuffer[he]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(be)for(let he=0,_e=Q.length;he<_e;he++){const $e=i.get(Q[he]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&xe(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const _e=Q[he];k.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const $e=r.convert(_e.format,_e.colorSpace),se=r.convert(_e.type),Me=_(_e.internalFormat,$e,se,_e.colorSpace,T.isXRRenderTarget===!0),Pe=te(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,k.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),re(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(s.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(k.__webglFramebuffer[he][_e],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ge(k.__webglFramebuffer[he],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,_e=Q.length;he<_e;he++){const $e=Q[he],se=i.get($e);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),ye(s.TEXTURE_2D,$e),ge(k.__webglFramebuffer,T,$e,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m($e)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),ye(he,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(k.__webglFramebuffer[_e],T,b,s.COLOR_ATTACHMENT0,he,_e);else ge(k.__webglFramebuffer,T,b,s.COLOR_ATTACHMENT0,he,0);m(b)&&f(he),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Z(T){const b=T.textures;for(let k=0,Y=b.length;k<Y;k++){const Q=b[k];if(m(Q)){const j=y(T),be=i.get(Q).__webglTexture;t.bindTexture(j,be),f(j),t.unbindTexture()}}}const ae=[],D=[];function Re(T){if(T.samples>0){if(xe(T)===!1){const b=T.textures,k=T.width,Y=T.height;let Q=s.COLOR_BUFFER_BIT;const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=i.get(T),he=b.length>1;if(he)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const $e=i.get(b[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,s.NEAREST),l===!0&&(ae.length=0,D.length=0,ae.push(s.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ae.push(j),D.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const $e=i.get(b[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function te(T){return Math.min(n.maxSamples,T.samples)}function xe(T){const b=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(T){const b=a.render.frame;d.get(T)!==b&&(d.set(T,b),T.update())}function De(T,b){const k=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ln&&k!==Ti&&(je.getTransfer(k)===it?(Y!==jt||Q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function am(s,e){function t(i,n=Ti){let r;const a=je.getTransfer(n);if(i===mi)return s.UNSIGNED_BYTE;if(i===Pa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Ll)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Rl)return s.BYTE;if(i===Cl)return s.SHORT;if(i===Yn)return s.UNSIGNED_SHORT;if(i===Da)return s.INT;if(i===Yi)return s.UNSIGNED_INT;if(i===ui)return s.FLOAT;if(i===Jn)return s.HALF_FLOAT;if(i===Dl)return s.ALPHA;if(i===Pl)return s.RGB;if(i===jt)return s.RGBA;if(i===Il)return s.LUMINANCE;if(i===Nl)return s.LUMINANCE_ALPHA;if(i===Sn)return s.DEPTH_COMPONENT;if(i===Rn)return s.DEPTH_STENCIL;if(i===Ul)return s.RED;if(i===Na)return s.RED_INTEGER;if(i===Fl)return s.RG;if(i===Ua)return s.RG_INTEGER;if(i===Fa)return s.RGBA_INTEGER;if(i===Ps||i===Is||i===Ns||i===Us)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kr||i===Zr||i===Jr||i===Qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ea||i===ta||i===ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ea||i===ta)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ia)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===na||i===sa||i===ra||i===aa||i===oa||i===la||i===ca||i===da||i===ha||i===ua||i===fa||i===pa||i===ma||i===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===na)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ra)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===aa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===la)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ca)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===da)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ha)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ua)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ma)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ga)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fs||i===va||i===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fs)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===xa||i===ya||i===Ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===An?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class om extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new It,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:cm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class um extends Ji{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const v=new hm,m=t.getContextAttributes();let f=null,y=null;const _=[],x=[],L=new ie;let R=null;const A=new Ht;A.viewport=new ut;const w=new Ht;w.viewport=new ut;const M=[A,w],S=new om;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=_[q];return ne===void 0&&(ne=new Tr,_[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=_[q];return ne===void 0&&(ne=new Tr,_[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=_[q];return ne===void 0&&(ne=new Tr,_[q]=ne),ne.getHandSpace()};function U(q){const ne=x.indexOf(q.inputSource);if(ne===-1)return;const ge=_[ne];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",H);for(let q=0;q<_.length;q++){const ne=x[q];ne!==null&&(x[q]=null,_[q].disconnect(ne))}C=null,N=null,v.reset(),e.setRenderTarget(f),p=null,u=null,h=null,n=null,y=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",B),n.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),n.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ji(p.framebufferWidth,p.framebufferHeight,{format:jt,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Rn:Sn,ge=m.stencil?An:Yi);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(Ae),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ji(u.textureWidth,u.textureHeight,{format:jt,type:mi,depthTexture:new Zl(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Oe.setContext(n),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(q){for(let ne=0;ne<q.removed.length;ne++){const ge=q.removed[ne],re=x.indexOf(ge);re>=0&&(x[re]=null,_[re].disconnect(ge))}for(let ne=0;ne<q.added.length;ne++){const ge=q.added[ne];let re=x.indexOf(ge);if(re===-1){for(let Ue=0;Ue<_.length;Ue++)if(Ue>=x.length){x.push(ge),re=Ue;break}else if(x[Ue]===null){x[Ue]=ge,re=Ue;break}if(re===-1)break}const Ae=_[re];Ae&&Ae.connect(ge)}}const z=new P,X=new P;function G(q,ne,ge){z.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const re=z.distanceTo(X),Ae=ne.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,Ie=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),Z=(Ae[9]+1)/Ae[5],ae=(Ae[9]-1)/Ae[5],D=(Ae[8]-1)/Ae[0],Re=(Ue[8]+1)/Ue[0],te=Ie*D,xe=Ie*Re,le=re/(-D+Re),De=le*-D;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ve=Ie+le,T=Ye+le,b=te-De,k=xe+(re-De),Y=Z*Ye/T*ve,Q=ae*Ye/T*ve;q.projectionMatrix.makePerspective(b,k,Y,Q,ve,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let ne=q.near,ge=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),S.near=w.near=A.near=ne,S.far=w.far=A.far=ge,(C!==S.near||N!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,N=S.far),A.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|w.layers.mask;const re=q.parent,Ae=S.cameras;J(S,re);for(let Ue=0;Ue<Ae.length;Ue++)J(Ae[Ue],re);Ae.length===2?G(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),ee(q,S,re)};function ee(q,ne,ge){ge===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Sa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let de=null;function ye(q,ne){if(d=ne.getViewerPose(c||a),g=ne,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let re=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Ue=0;Ue<ge.length;Ue++){const Ie=ge[Ue];let Ye=null;if(p!==null)Ye=p.getViewport(Ie);else{const ae=h.getViewSubImage(u,Ie);Ye=ae.viewport,Ue===0&&(e.setRenderTargetTextures(y,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(y))}let Z=M[Ue];Z===void 0&&(Z=new Ht,Z.layers.enable(Ue),Z.viewport=new ut,M[Ue]=Z),Z.matrix.fromArray(Ie.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ie.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(S.matrix.copy(Z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Z)}const Ae=n.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=h.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,n.renderState)}}for(let ge=0;ge<_.length;ge++){const re=x[ge],Ae=_[ge];re!==null&&Ae!==void 0&&Ae.update(re,ne,c||a)}de&&de(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Oe=new jl;Oe.setAnimationLoop(ye),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const Hi=new ii,fm=new lt;function pm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Xl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Hi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function mm(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function c(y,_){let x=n[y.id];x===void 0&&(g(y),x=d(y),n[y.id]=x,y.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(y,L);const R=e.render.frame;r[y.id]!==R&&(u(y),r[y.id]=R)}function d(y){const _=h();y.__bindingPointIndex=_;const x=s.createBuffer(),L=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=n[y.id],x=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,A=x.length;R<A;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,S=w.length;M<S;M++){const C=w[M];if(p(C,R,M,L)===!0){const N=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let H=0;H<U.length;H++){const z=U[H],X=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,_,x,L){const R=y.value,A=_+"_"+x;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const w=L[A];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return L[A]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(y){const _=y.uniforms;let x=0;const L=16;for(let A=0,w=_.length;A<w;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,C=M.length;S<C;S++){const N=M[S],U=Array.isArray(N.value)?N.value:[N.value];for(let B=0,H=U.length;B<H;B++){const z=U[B],X=v(z),G=x%L,J=G%X.boundary,ee=G+J;x+=J,ee!==0&&L-ee<X.storage&&(x+=L-ee),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const R=x%L;return R>0&&(x+=L-R),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function f(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:f}}class gm{constructor(e={}){const{canvas:t=nd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let L=!1,R=0,A=0,w=null,M=-1,S=null;const C=new ut,N=new ut;let U=null;const B=new We(0);let H=0,z=t.width,X=t.height,G=1,J=null,ee=null;const de=new ut(0,0,z,X),ye=new ut(0,0,z,X);let Oe=!1;const q=new Ba;let ne=!1,ge=!1;const re=new lt,Ae=new lt,Ue=new P,Ie=new ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function ae(){return w===null?G:1}let D=i;function Re(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const F="webgl2";if(D=Re(F,E),D===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,xe,le,De,ve,T,b,k,Y,Q,j,be,he,_e,$e,se,Me,Pe,Ne,Se,Xe,Ge,st,I;function ue(){te=new Mf(D),te.init(),Ge=new am(D,te),xe=new mf(D,te,e,Ge),le=new nm(D,te),xe.reverseDepthBuffer&&u&&le.buffers.depth.setReversed(!0),De=new Ef(D),ve=new Gp,T=new rm(D,te,le,ve,xe,Ge,De),b=new vf(x),k=new yf(x),Y=new Ld(D),st=new ff(D,Y),Q=new Sf(D,Y,De,st),j=new Tf(D,Q,Y,De),Ne=new wf(D,xe,T),se=new gf(ve),be=new Hp(x,b,k,te,xe,st,se),he=new pm(x,ve),_e=new Wp,$e=new Kp(te),Pe=new uf(x,b,k,le,j,p,l),Me=new tm(x,j,xe),I=new mm(D,De,xe,le),Se=new pf(D,te,De),Xe=new bf(D,te,De),De.programs=be.programs,x.capabilities=xe,x.extensions=te,x.properties=ve,x.renderLists=_e,x.shadowMap=Me,x.state=le,x.info=De}ue();const $=new um(x,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(z,X,!1))},this.getSize=function(E){return E.set(z,X)},this.setSize=function(E,F,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,X=F,t.width=Math.floor(E*G),t.height=Math.floor(F*G),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(E,F,V){z=E,X=F,G=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,F,V,W){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,F,V,W),le.viewport(C.copy(de).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,F,V,W){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,F,V,W),le.scissor(N.copy(ye).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){le.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let O=!1;if(w!==null){const oe=w.texture.format;O=oe===Fa||oe===Ua||oe===Na}if(O){const oe=w.texture.type,pe=oe===mi||oe===Yi||oe===Yn||oe===An||oe===Pa||oe===Ia,Ee=Pe.getClearColor(),we=Pe.getClearAlpha(),Fe=Ee.r,ke=Ee.g,Te=Ee.b;pe?(g[0]=Fe,g[1]=ke,g[2]=Te,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=Te,v[3]=we,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),$e.dispose(),ve.dispose(),b.dispose(),k.dispose(),j.dispose(),st.dispose(),I.dispose(),be.dispose(),$.dispose(),$.removeEventListener("sessionstart",ja),$.removeEventListener("sessionend",Ka),Ui.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=De.autoReset,F=Me.enabled,V=Me.autoUpdate,W=Me.needsUpdate,O=Me.type;ue(),De.autoReset=E,Me.enabled=F,Me.autoUpdate=V,Me.needsUpdate=W,Me.type=O}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const F=E.target;F.removeEventListener("dispose",ze),ht(F)}function ht(E){St(E),ve.remove(E)}function St(E){const F=ve.get(E).programs;F!==void 0&&(F.forEach(function(V){be.releaseProgram(V)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,O,oe){F===null&&(F=Ye);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=uc(E,F,V,W,O);le.setMaterial(W,pe);let we=V.index,Fe=1;if(W.wireframe===!0){if(we=Q.getWireframeAttribute(V),we===void 0)return;Fe=2}const ke=V.drawRange,Te=V.attributes.position;let Ke=ke.start*Fe,rt=(ke.start+ke.count)*Fe;oe!==null&&(Ke=Math.max(Ke,oe.start*Fe),rt=Math.min(rt,(oe.start+oe.count)*Fe)),we!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,we.count)):Te!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Te.count));const at=rt-Ke;if(at<0||at===1/0)return;st.setup(O,W,Ee,V,we);let Rt,Qe=Se;if(we!==null&&(Rt=Y.get(we),Qe=Xe,Qe.setIndex(Rt)),O.isMesh)W.wireframe===!0?(le.setLineWidth(W.wireframeLinewidth*ae()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),le.setLineWidth(Ce*ae()),O.isLineSegments?Qe.setMode(D.LINES):O.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else O.isPoints?Qe.setMode(D.POINTS):O.isSprite&&Qe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,ri=O._multiDrawCounts,et=O._multiDrawCount,$t=we?Y.get(we).bytesPerElement:1,tn=ve.get(W).currentProgram.getUniforms();for(let Nt=0;Nt<et;Nt++)tn.setValue(D,"_gl_DrawID",Nt),Qe.render(Ce[Nt]/$t,ri[Nt])}else if(O.isInstancedMesh)Qe.renderInstances(Ke,at,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ri=Math.min(V.instanceCount,Ce);Qe.renderInstances(Ke,at,ri)}else Qe.render(Ke,at)};function tt(E,F,V){E.transparent===!0&&E.side===yt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,ts(E,F,V),E.side=Li,E.needsUpdate=!0,ts(E,F,V),E.side=yt):ts(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),f=$e.get(V),f.init(F),_.push(f),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const Ee=oe[pe];tt(Ee,V,O),W.add(Ee)}else tt(oe,V,O),W.add(oe)}),_.pop(),f=null,W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(O=>{function oe(){if(W.forEach(function(pe){ve.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(E);return}setTimeout(oe,10)}te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Wt=null;function si(E){Wt&&Wt(E)}function ja(){Ui.stop()}function Ka(){Ui.start()}const Ui=new jl;Ui.setAnimationLoop(si),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){Wt=E,$.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},$.addEventListener("sessionstart",ja),$.addEventListener("sessionend",Ka),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,w),f=$e.get(E,_.length),f.init(F),_.push(f),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ge=this.localClippingEnabled,ne=se.init(this.clippingPlanes,ge),m=_e.get(E,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Zs(oe,F,-1/0,x.sortObjects)}Zs(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,ee),Z=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Z&&Pe.addToRenderList(m,E),this.info.render.frame++,ne===!0&&se.beginShadows();const V=f.state.shadowsArray;Me.render(V,E,F),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let pe=0,Ee=oe.length;pe<Ee;pe++){const we=oe[pe];Ja(W,O,E,we)}Z&&Pe.render(E);for(let pe=0,Ee=oe.length;pe<Ee;pe++){const we=oe[pe];Za(m,E,we,we.viewport)}}else O.length>0&&Ja(W,O,E,F),Z&&Pe.render(E),Za(m,E,F);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,F),st.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ne===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Zs(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const pe=j.update(E),Ee=E.material;Ee.visible&&m.push(E,pe,Ee,V,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const pe=j.update(E),Ee=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const we=pe.groups;for(let Fe=0,ke=we.length;Fe<ke;Fe++){const Te=we[Fe],Ke=Ee[Te.materialIndex];Ke&&Ke.visible&&m.push(E,pe,Ke,V,Ie.z,Te)}}else Ee.visible&&m.push(E,pe,Ee,V,Ie.z,null)}}const oe=E.children;for(let pe=0,Ee=oe.length;pe<Ee;pe++)Zs(oe[pe],F,V,W)}function Za(E,F,V,W){const O=E.opaque,oe=E.transmissive,pe=E.transparent;f.setupLightsView(V),ne===!0&&se.setGlobalState(x.clippingPlanes,V),W&&le.viewport(C.copy(W)),O.length>0&&es(O,F,V),oe.length>0&&es(oe,F,V),pe.length>0&&es(pe,F,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ja(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ji(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Jn:mi,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const oe=f.state.transmissionRenderTarget[W.id],pe=W.viewport||C;oe.setSize(pe.z,pe.w);const Ee=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Pe.render(V);const we=x.toneMapping;x.toneMapping=Ri;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ne===!0&&se.setGlobalState(x.clippingPlanes,W),es(E,V,W),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Te=0,Ke=F.length;Te<Ke;Te++){const rt=F[Te],at=rt.object,Rt=rt.geometry,Qe=rt.material,Ce=rt.group;if(Qe.side===yt&&at.layers.test(W.layers)){const ri=Qe.side;Qe.side=Pt,Qe.needsUpdate=!0,Qa(at,V,W,Rt,Qe,Ce),Qe.side=ri,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ee),x.setClearColor(B,H),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=we}function es(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=E.length;O<oe;O++){const pe=E[O],Ee=pe.object,we=pe.geometry,Fe=W===null?pe.material:W,ke=pe.group;Ee.layers.test(V.layers)&&Qa(Ee,F,V,we,Fe,ke)}}function Qa(E,F,V,W,O,oe){E.onBeforeRender(x,F,V,W,O,oe),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,V,W,E,oe),O.transparent===!0&&O.side===yt&&O.forceSinglePass===!1?(O.side=Pt,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,E,oe),O.side=Li,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,E,oe),O.side=yt):x.renderBufferDirect(V,F,W,O,E,oe),E.onAfterRender(x,F,V,W,O,oe)}function ts(E,F,V){F.isScene!==!0&&(F=Ye);const W=ve.get(E),O=f.state.lights,oe=f.state.shadowsArray,pe=O.state.version,Ee=be.getParameters(E,O.state,oe,F,V),we=be.getProgramCacheKey(Ee);let Fe=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?k:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ze),Fe=new Map,W.programs=Fe);let ke=Fe.get(we);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===pe)return to(E,Ee),ke}else Ee.uniforms=be.getUniforms(E),E.onBeforeCompile(Ee,x),ke=be.acquireProgram(Ee,we),Fe.set(we,ke),W.uniforms=Ee.uniforms;const Te=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=se.uniform),to(E,Ee),W.needsLights=pc(E),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function eo(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function to(E,F){const V=ve.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function uc(E,F,V,W,O){F.isScene!==!0&&(F=Ye),T.resetTextureUnits();const oe=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Ee=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ln,we=(W.isMeshStandardMaterial?k:b).get(W.envMap||pe),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color;let at=Ri;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(at=x.toneMapping);const Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Rt!==void 0?Rt.length:0,Ce=ve.get(W),ri=f.state.lights;if(ne===!0&&(ge===!0||E!==S)){const zt=E===S&&W.id===M;se.setState(W,E,zt)}let et=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==ri.state.version||Ce.outputColorSpace!==Ee||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==we||W.fog===!0&&Ce.fog!==oe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ke||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==rt||Ce.toneMapping!==at||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=W.version);let $t=Ce.currentProgram;et===!0&&($t=ts(W,F,O));let tn=!1,Nt=!1,Nn=!1;const ot=$t.getUniforms(),Jt=Ce.uniforms;if(le.useProgram($t.program)&&(tn=!0,Nt=!0,Nn=!0),W.id!==M&&(M=W.id,Nt=!0),tn||S!==E){le.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),rd(re),ad(re),ot.setValue(D,"projectionMatrix",re)):ot.setValue(D,"projectionMatrix",E.projectionMatrix),ot.setValue(D,"viewMatrix",E.matrixWorldInverse);const vi=ot.map.cameraPosition;vi!==void 0&&vi.setValue(D,Ue.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ot.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Nt=!0,Nn=!0)}if(O.isSkinnedMesh){ot.setOptional(D,O,"bindMatrix"),ot.setOptional(D,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),ot.setValue(D,"boneTexture",zt.boneTexture,T))}O.isBatchedMesh&&(ot.setOptional(D,O,"batchingTexture"),ot.setValue(D,"batchingTexture",O._matricesTexture,T),ot.setOptional(D,O,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",O._indirectTexture,T),ot.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",O._colorsTexture,T));const Un=V.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ne.update(O,V,$t),(Nt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ot.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Jt.envMap.value=we,Jt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Nt&&(ot.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&fc(Jt,Nn),oe&&W.fog===!0&&he.refreshFogUniforms(Jt,oe),he.refreshMaterialUniforms(Jt,W,G,X,f.state.transmissionRenderTarget[E.id]),Os.upload(D,eo(Ce),Jt,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(D,eo(Ce),Jt,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ot.setValue(D,"center",O.center),ot.setValue(D,"modelViewMatrix",O.modelViewMatrix),ot.setValue(D,"normalMatrix",O.normalMatrix),ot.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zt=W.uniformsGroups;for(let vi=0,_i=zt.length;vi<_i;vi++){const io=zt[vi];I.update(io,$t),I.bind(io,$t)}}return $t}function fc(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function pc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,V){ve.get(E.texture).__webglTexture=F,ve.get(E.depthTexture).__webglTexture=V;const W=ve.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=ve.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){w=E,R=F,A=V;let W=!0,O=null,oe=!1,pe=!1;if(E){const we=ve.get(E);if(we.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(we.__hasExternalTextures)T.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&ve.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const ke=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][V]:O=ke[F],oe=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?O=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[V]:O=ke,C.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else C.copy(de).multiplyScalar(G).floor(),N.copy(ye).multiplyScalar(G).floor(),U=Oe;if(le.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&le.drawBuffers(E,O),le.viewport(C),le.scissor(N),le.setScissorTest(U),oe){const we=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,V)}else if(pe){const we=ve.get(E.texture),Fe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Fe)}M=-1},this.readRenderTargetPixels=function(E,F,V,W,O,oe,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){le.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=E.texture,Fe=we.format,ke=we.type;if(!xe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O&&D.readPixels(F,V,W,O,Ge.convert(Fe),Ge.convert(ke),oe)}finally{const we=w!==null?ve.get(w).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,O,oe,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){const we=E.texture,Fe=we.format,ke=we.type;if(!xe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O){le.bindFramebuffer(D.FRAMEBUFFER,Ee);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(F,V,W,O,Ge.convert(Fe),Ge.convert(ke),0);const Ke=w!==null?ve.get(w).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,Ke);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sd(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Te),D.deleteSync(rt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Vn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),oe=Math.floor(E.image.height*W),pe=F!==null?F.x:0,Ee=F!==null?F.y:0;T.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,pe,Ee,O,oe),le.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,W=null,O=0){E.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let oe,pe,Ee,we,Fe,ke,Te,Ke,rt;const at=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(oe=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Fe=V.min.y,ke=V.isBox3?V.min.z:0):(oe=at.width,pe=at.height,Ee=at.depth||1,we=0,Fe=0,ke=0),W!==null?(Te=W.x,Ke=W.y,rt=W.z):(Te=0,Ke=0,rt=0);const Rt=Ge.convert(F.format),Qe=Ge.convert(F.type);let Ce;F.isData3DTexture?(T.setTexture3D(F,0),Ce=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ri=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$t=D.getParameter(D.UNPACK_SKIP_PIXELS),tn=D.getParameter(D.UNPACK_SKIP_ROWS),Nt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);const Nn=E.isDataArrayTexture||E.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Jt=ve.get(E),Un=ve.get(F),zt=ve.get(Jt.__renderTarget),vi=ve.get(Un.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _i=0;_i<Ee;_i++)Nn&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,O,ke+_i),E.isDepthTexture?(ot&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(F).__webglTexture,O,rt+_i),D.blitFramebuffer(we,Fe,oe,pe,Te,Ke,oe,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):ot?D.copyTexSubImage3D(Ce,O,Te,Ke,rt+_i,we,Fe,oe,pe):D.copyTexSubImage2D(Ce,O,Te,Ke,rt+_i,we,Fe,oe,pe);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,O,Te,Ke,rt,oe,pe,Ee,Rt,Qe,at.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,O,Te,Ke,rt,oe,pe,Ee,Rt,at.data):D.texSubImage3D(Ce,O,Te,Ke,rt,oe,pe,Ee,Rt,Qe,at):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Te,Ke,oe,pe,Rt,Qe,at.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Te,Ke,at.width,at.height,Rt,at.data):D.texSubImage2D(D.TEXTURE_2D,O,Te,Ke,oe,pe,Rt,Qe,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,ri),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$t),D.pixelStorei(D.UNPACK_SKIP_ROWS,tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt),O===0&&F.generateMipmaps&&D.generateMipmap(Ce),le.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,O=0){return E.isTexture!==!0&&(Vn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Vn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,O)},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,le.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ii extends Qi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new P,Hs=new P,tl=new lt,Hn=new Xs,bs=new $s,Ar=new P,il=new P;class Ea extends Mt{constructor(e=new dt,t=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)ks.fromBufferAttribute(t,n-1),Hs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ks.distanceTo(Hs);e.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(n),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;tl.copy(n).invert(),Hn.copy(e.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=d.getX(v),y=d.getX(v+1),_=Es(this,e,Hn,l,f,y);_&&t.push(_)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(p),f=Es(this,e,Hn,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){const f=Es(this,e,Hn,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Es(this,e,Hn,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Es(s,e,t,i,n,r){const a=s.geometry.attributes.position;if(ks.fromBufferAttribute(a,n),Hs.fromBufferAttribute(a,r),t.distanceSqToSegment(ks,Hs,Ar,il)>i)return;Ar.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ar);if(!(l<e.near||l>e.far))return{distance:l,point:il.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const nl=new P,sl=new P;class Qn extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)nl.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+nl.distanceTo(sl);e.setAttribute("lineDistance",new qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const d=i[n],u=i[n+1]-d,p=(a-d)/u;return(n+p)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new ie:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,n=[],r=[],a=[],o=new P,l=new lt;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(xt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ha extends ni{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*h+this.aX,c=u*h+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _m extends Ha{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,h){let u=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+h)+(l-o)/h;u*=d,p*=d,n(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const ws=new P,Rr=new Ga,Cr=new Ga,Lr=new Ga;class xm extends ni{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=n[(o-1)%r]:(ws.subVectors(n[0],n[1]).add(n[0]),c=ws);const h=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?d=n[(o+2)%r]:(ws.subVectors(n[r-1],n[r-2]).add(n[r-1]),d=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Rr.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,g,v,m),Cr.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,g,v,m),Lr.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),Cr.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),Lr.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return i.set(Rr.calc(l),Cr.calc(l),Lr.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rl(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function ym(s,e){const t=1-s;return t*t*e}function Mm(s,e){return 2*(1-s)*s*e}function Sm(s,e){return s*s*e}function Xn(s,e,t,i){return ym(s,e)+Mm(s,t)+Sm(s,i)}function bm(s,e){const t=1-s;return t*t*t*e}function Em(s,e){const t=1-s;return 3*t*t*s*e}function wm(s,e){return 3*(1-s)*s*s*e}function Tm(s,e){return s*s*s*e}function qn(s,e,t,i,n){return bm(s,e)+Em(s,t)+wm(s,i)+Tm(s,n)}class ic extends ni{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qn(e,n.x,r.x,a.x,o.x),qn(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Am extends ni{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(qn(e,n.x,r.x,a.x,o.x),qn(e,n.y,r.y,a.y,o.y),qn(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nc extends ni{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends ni{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sc extends ni{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Xn(e,n.x,r.x,a.x),Xn(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends ni{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Xn(e,n.x,r.x,a.x),Xn(e,n.y,r.y,a.y),Xn(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rc extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],d=n[a>n.length-2?n.length-1:a+1],h=n[a>n.length-3?n.length-1:a+2];return i.set(rl(o,l.x,c.x,d.x,h.x),rl(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ie().fromArray(n))}return this}}var wa=Object.freeze({__proto__:null,ArcCurve:_m,CatmullRomCurve3:xm,CubicBezierCurve:ic,CubicBezierCurve3:Am,EllipseCurve:Ha,LineCurve:nc,LineCurve3:Rm,QuadraticBezierCurve:sc,QuadraticBezierCurve3:Cm,SplineCurve:rc});class Lm extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new wa[n.type]().fromJSON(n))}return this}}class al extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new nc(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new sc(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new ic(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new rc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new Ha(e,t,i,n,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class In extends dt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const v=[],m=i/2;let f=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(p,2));function y(){const x=new P,L=new P;let R=0;const A=(t-e)/i;for(let w=0;w<=r;w++){const M=[],S=w/r,C=S*(t-e)+e;for(let N=0;N<=n;N++){const U=N/n,B=U*l+o,H=Math.sin(B),z=Math.cos(B);L.x=C*H,L.y=-S*i+m,L.z=C*z,h.push(L.x,L.y,L.z),x.set(H,A,z).normalize(),u.push(x.x,x.y,x.z),p.push(U,1-S),M.push(g++)}v.push(M)}for(let w=0;w<n;w++)for(let M=0;M<r;M++){const S=v[M][w],C=v[M+1][w],N=v[M+1][w+1],U=v[M][w+1];(e>0||M!==0)&&(d.push(S,C,U),R+=3),(t>0||M!==r-1)&&(d.push(C,N,U),R+=3)}c.addGroup(f,R,0),f+=R}function _(x){const L=g,R=new ie,A=new P;let w=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let N=1;N<=n;N++)h.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const C=g;for(let N=0;N<=n;N++){const B=N/n*l+o,H=Math.cos(B),z=Math.sin(B);A.x=M*z,A.y=m*S,A.z=M*H,h.push(A.x,A.y,A.z),u.push(0,S,0),R.x=H*.5+.5,R.y=z*.5*S+.5,p.push(R.x,R.y),g++}for(let N=0;N<n;N++){const U=L+N,B=C+N;x===!0?d.push(B,B+1,U):d.push(B+1,B,U),w+=3}c.addGroup(f,w,x===!0?1:2),f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Va extends In{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Va(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wa extends dt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];o(n),c(i),d(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new P,x=new P,L=new P;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],x),p(t[R+2],L),l(_,x,L,y)}function l(y,_,x,L){const R=L+1,A=[];for(let w=0;w<=R;w++){A[w]=[];const M=y.clone().lerp(x,w/R),S=_.clone().lerp(x,w/R),C=R-w;for(let N=0;N<=C;N++)N===0&&w===R?A[w][N]=M:A[w][N]=M.clone().lerp(S,N/C)}for(let w=0;w<R;w++)for(let M=0;M<2*(R-w)-1;M++){const S=Math.floor(M/2);M%2===0?(u(A[w][S+1]),u(A[w+1][S]),u(A[w][S])):(u(A[w][S+1]),u(A[w+1][S+1]),u(A[w+1][S]))}}function c(y){const _=new P;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function d(){const y=new P;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=m(y)/2/Math.PI+.5,L=f(y)/Math.PI+.5;a.push(x,1-L)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],L=a[y+4],R=Math.max(_,x,L),A=Math.min(_,x,L);R>.9&&A<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const y=new P,_=new P,x=new P,L=new P,R=new ie,A=new ie,w=new ie;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),R.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),w.set(a[S+4],a[S+5]),L.copy(y).add(_).add(x).divideScalar(3);const C=m(L);v(R,S+0,y,C),v(A,S+2,_,C),v(w,S+4,x,C)}}function v(y,_,x,L){L<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.vertices,e.indices,e.radius,e.details)}}const Ts=new P,As=new P,Dr=new P,Rs=new Gt;class Dm extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos($n*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Rs;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),Rs.getNormal(Dr),h[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=h[y],L=h[_],R=Rs[d[y]],A=Rs[d[_]],w=`${x}_${L}`,M=`${L}_${x}`;M in u&&u[M]?(Dr.dot(u[M].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),u[M]=null):w in u||(u[w]={index0:c[y],index1:c[_],normal:Dr.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Ts.fromBufferAttribute(o,v),As.fromBufferAttribute(o,m),p.push(Ts.x,Ts.y,Ts.z),p.push(As.x,As.y,As.z)}this.setAttribute("position",new qe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ys extends al{constructor(e){super(e),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new al().fromJSON(n))}return this}}const Pm={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=ac(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,d,h,u,p;if(i&&(r=Om(s,e,r,t)),s.length>80*t){o=c=s[0],l=d=s[1];for(let g=t;g<n;g+=t)h=s[g],u=s[g+1],h<o&&(o=h),u<l&&(l=u),h>c&&(c=h),u>d&&(d=u);p=Math.max(c-o,d-l),p=p!==0?32767/p:0}return jn(r,a,t,o,l,p,0),a}};function ac(s,e,t,i,n){let r,a;if(n===Ym(s,e,t,i)>0)for(r=e;r<t;r+=i)a=ol(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=ol(r,s[r],s[r+1],a);return a&&js(a,a.next)&&(Zn(a),a=a.next),a}function Zi(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(js(t,t.next)||ct(t.prev,t,t.next)===0)){if(Zn(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jn(s,e,t,i,n,r,a){if(!s)return;!a&&r&&Gm(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Nm(s,i,n,r):Im(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zn(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Um(Zi(s),e,t),jn(s,e,t,i,n,r,2)):a===2&&Fm(s,e,t,i,n,r):jn(Zi(s),e,t,i,n,r,1);break}}}function Im(s){const e=s.prev,t=s,i=s.next;if(ct(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,d=n<r?n<a?n:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,u=n>r?n>a?n:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=u&&g.y>=h&&g.y<=p&&xn(n,o,r,l,a,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nm(s,e,t,i){const n=s.prev,r=s,a=s.next;if(ct(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,d=n.y,h=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,g=d<h?d<u?d:u:h<u?h:u,v=o>l?o>c?o:c:l>c?l:c,m=d>h?d>u?d:u:h>u?h:u,f=Ta(p,g,e,t,i),y=Ta(v,m,e,t,i);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=f&&x&&x.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&xn(o,d,l,h,c,u,_.x,_.y)&&ct(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&xn(o,d,l,h,c,u,x.x,x.y)&&ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&xn(o,d,l,h,c,u,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&xn(o,d,l,h,c,u,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Um(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!js(n,r)&&oc(n,i,i.next,r)&&Kn(n,r)&&Kn(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Zn(i),Zn(i.next),i=s=r),i=i.next}while(i!==s);return Zi(i)}function Fm(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$m(a,o)){let l=lc(a,o);a=Zi(a,a.next),l=Zi(l,l.next),jn(a,e,t,i,n,r,0),jn(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Om(s,e,t,i){const n=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=ac(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(Wm(c));for(n.sort(Bm),r=0;r<n.length;r++)t=zm(n[r],t);return t}function Bm(s,e){return s.x-e.x}function zm(s,e){const t=km(s,e);if(!t)return e;const i=lc(t,s);return Zi(i,i.next),Zi(t,t.next)}function km(s,e){let t=e,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,n=t.x<t.next.x?t:t.next,u===r))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let d=1/0,h;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&xn(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Kn(t,s)&&(h<d||h===d&&(t.x>n.x||t.x===n.x&&Hm(n,t)))&&(n=t,d=h)),t=t.next;while(t!==o);return n}function Hm(s,e){return ct(s.prev,s,e.prev)<0&&ct(e.next,s,s.next)<0}function Gm(s,e,t,i){let n=s;do n.z===0&&(n.z=Ta(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Vm(n)}function Vm(s){let e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Ta(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Wm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xn(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function $m(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Xm(s,e)&&(Kn(s,e)&&Kn(e,s)&&qm(s,e)&&(ct(s.prev,s,e.prev)||ct(s,e.prev,e))||js(s,e)&&ct(s.prev,s,s.next)>0&&ct(e.prev,e,e.next)>0)}function ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function js(s,e){return s.x===e.x&&s.y===e.y}function oc(s,e,t,i){const n=Ls(ct(s,e,t)),r=Ls(ct(s,e,i)),a=Ls(ct(t,i,s)),o=Ls(ct(t,i,e));return!!(n!==r&&a!==o||n===0&&Cs(s,t,e)||r===0&&Cs(s,i,e)||a===0&&Cs(t,s,i)||o===0&&Cs(t,e,i))}function Cs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ls(s){return s>0?1:s<0?-1:0}function Xm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&oc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Kn(s,e){return ct(s.prev,s,s.next)<0?ct(s,e,s.next)>=0&&ct(s,s.prev,e)>=0:ct(s,e,s.prev)<0||ct(s,s.next,e)<0}function qm(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function lc(s,e){const t=new Aa(s.i,s.x,s.y),i=new Aa(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ol(s,e,t,i){const n=new Aa(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Zn(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Aa(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ym(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class Ci{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];ll(e),cl(i,e);let a=e.length;t.forEach(ll);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,cl(i,t[l]);const o=Pm.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ll(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class $a extends dt{constructor(e=new Ys([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new qe(n,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:jm;let _,x=!1,L,R,A,w;f&&(_=f.getSpacedPoints(d),x=!0,u=!1,L=f.computeFrenetFrames(d,!1),R=new P,A=new P,w=new P),u||(m=0,p=0,g=0,v=0);const M=o.extractPoints(c);let S=M.shape;const C=M.holes;if(!Ci.isClockWise(S)){S=S.reverse();for(let Z=0,ae=C.length;Z<ae;Z++){const D=C[Z];Ci.isClockWise(D)&&(C[Z]=D.reverse())}}const U=Ci.triangulateShape(S,C),B=S;for(let Z=0,ae=C.length;Z<ae;Z++){const D=C[Z];S=S.concat(D)}function H(Z,ae,D){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ae,D)}const z=S.length,X=U.length;function G(Z,ae,D){let Re,te,xe;const le=Z.x-ae.x,De=Z.y-ae.y,ve=D.x-Z.x,T=D.y-Z.y,b=le*le+De*De,k=le*T-De*ve;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(b),Q=Math.sqrt(ve*ve+T*T),j=ae.x-De/Y,be=ae.y+le/Y,he=D.x-T/Q,_e=D.y+ve/Q,$e=((he-j)*T-(_e-be)*ve)/(le*T-De*ve);Re=j+le*$e-Z.x,te=be+De*$e-Z.y;const se=Re*Re+te*te;if(se<=2)return new ie(Re,te);xe=Math.sqrt(se/2)}else{let Y=!1;le>Number.EPSILON?ve>Number.EPSILON&&(Y=!0):le<-Number.EPSILON?ve<-Number.EPSILON&&(Y=!0):Math.sign(De)===Math.sign(T)&&(Y=!0),Y?(Re=-De,te=le,xe=Math.sqrt(b)):(Re=le,te=De,xe=Math.sqrt(b/2))}return new ie(Re/xe,te/xe)}const J=[];for(let Z=0,ae=B.length,D=ae-1,Re=Z+1;Z<ae;Z++,D++,Re++)D===ae&&(D=0),Re===ae&&(Re=0),J[Z]=G(B[Z],B[D],B[Re]);const ee=[];let de,ye=J.concat();for(let Z=0,ae=C.length;Z<ae;Z++){const D=C[Z];de=[];for(let Re=0,te=D.length,xe=te-1,le=Re+1;Re<te;Re++,xe++,le++)xe===te&&(xe=0),le===te&&(le=0),de[Re]=G(D[Re],D[xe],D[le]);ee.push(de),ye=ye.concat(de)}for(let Z=0;Z<m;Z++){const ae=Z/m,D=p*Math.cos(ae*Math.PI/2),Re=g*Math.sin(ae*Math.PI/2)+v;for(let te=0,xe=B.length;te<xe;te++){const le=H(B[te],J[te],Re);re(le.x,le.y,-D)}for(let te=0,xe=C.length;te<xe;te++){const le=C[te];de=ee[te];for(let De=0,ve=le.length;De<ve;De++){const T=H(le[De],de[De],Re);re(T.x,T.y,-D)}}}const Oe=g+v;for(let Z=0;Z<z;Z++){const ae=u?H(S[Z],ye[Z],Oe):S[Z];x?(A.copy(L.normals[0]).multiplyScalar(ae.x),R.copy(L.binormals[0]).multiplyScalar(ae.y),w.copy(_[0]).add(A).add(R),re(w.x,w.y,w.z)):re(ae.x,ae.y,0)}for(let Z=1;Z<=d;Z++)for(let ae=0;ae<z;ae++){const D=u?H(S[ae],ye[ae],Oe):S[ae];x?(A.copy(L.normals[Z]).multiplyScalar(D.x),R.copy(L.binormals[Z]).multiplyScalar(D.y),w.copy(_[Z]).add(A).add(R),re(w.x,w.y,w.z)):re(D.x,D.y,h/d*Z)}for(let Z=m-1;Z>=0;Z--){const ae=Z/m,D=p*Math.cos(ae*Math.PI/2),Re=g*Math.sin(ae*Math.PI/2)+v;for(let te=0,xe=B.length;te<xe;te++){const le=H(B[te],J[te],Re);re(le.x,le.y,h+D)}for(let te=0,xe=C.length;te<xe;te++){const le=C[te];de=ee[te];for(let De=0,ve=le.length;De<ve;De++){const T=H(le[De],de[De],Re);x?re(T.x,T.y+_[d-1].y,_[d-1].x+D):re(T.x,T.y,h+D)}}}q(),ne();function q(){const Z=n.length/3;if(u){let ae=0,D=z*ae;for(let Re=0;Re<X;Re++){const te=U[Re];Ae(te[2]+D,te[1]+D,te[0]+D)}ae=d+m*2,D=z*ae;for(let Re=0;Re<X;Re++){const te=U[Re];Ae(te[0]+D,te[1]+D,te[2]+D)}}else{for(let ae=0;ae<X;ae++){const D=U[ae];Ae(D[2],D[1],D[0])}for(let ae=0;ae<X;ae++){const D=U[ae];Ae(D[0]+z*d,D[1]+z*d,D[2]+z*d)}}i.addGroup(Z,n.length/3-Z,0)}function ne(){const Z=n.length/3;let ae=0;ge(B,ae),ae+=B.length;for(let D=0,Re=C.length;D<Re;D++){const te=C[D];ge(te,ae),ae+=te.length}i.addGroup(Z,n.length/3-Z,1)}function ge(Z,ae){let D=Z.length;for(;--D>=0;){const Re=D;let te=D-1;te<0&&(te=Z.length-1);for(let xe=0,le=d+m*2;xe<le;xe++){const De=z*xe,ve=z*(xe+1),T=ae+Re+De,b=ae+te+De,k=ae+te+ve,Y=ae+Re+ve;Ue(T,b,k,Y)}}}function re(Z,ae,D){l.push(Z),l.push(ae),l.push(D)}function Ae(Z,ae,D){Ie(Z),Ie(ae),Ie(D);const Re=n.length/3,te=y.generateTopUV(i,n,Re-3,Re-2,Re-1);Ye(te[0]),Ye(te[1]),Ye(te[2])}function Ue(Z,ae,D,Re){Ie(Z),Ie(ae),Ie(Re),Ie(ae),Ie(D),Ie(Re);const te=n.length/3,xe=y.generateSideWallUV(i,n,te-6,te-3,te-2,te-1);Ye(xe[0]),Ye(xe[1]),Ye(xe[3]),Ye(xe[1]),Ye(xe[2]),Ye(xe[3])}function Ie(Z){n.push(l[Z*3+0]),n.push(l[Z*3+1]),n.push(l[Z*3+2])}function Ye(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Km(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new wa[n.type]().fromJSON(n)),new $a(i,e.options)}}const jm={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],d=e[n*3+1];return[new ie(r,a),new ie(o,l),new ie(c,d)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],h=e[i*3+2],u=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-h),new ie(u,1-g),new ie(v,1-f)]:[new ie(o,1-l),new ie(d,1-h),new ie(p,1-g),new ie(m,1-f)]}};function Km(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends Wa{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Ni extends dt{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],d=[];let h=e;const u=(t-e)/n,p=new P,g=new ie;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<n;v++){const m=v*(i+1);for(let f=0;f<i;f++){const y=f+m,_=y,x=y+i+1,L=y+i+2,R=y+1;o.push(_,x,R),o.push(x,L,R)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qa extends dt{constructor(e=new Ys([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new qe(n,3)),this.setAttribute("normal",new qe(r,3)),this.setAttribute("uv",new qe(a,2));function c(d){const h=n.length/3,u=d.extractPoints(t);let p=u.shape;const g=u.holes;Ci.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const y=g[m];Ci.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Ci.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){const y=p[m];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){const y=v[m],_=y[0]+h,x=y[1]+h,L=y[2]+h;i.push(_,x,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Zm(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new qa(i,e.curveSegments)}}function Zm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class Ks extends dt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new P,u=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const y=[],_=f/i;let x=0;f===0&&a===0?x=.5/t:f===i&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const R=L/t;h.x=-e*Math.cos(n+R*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(n+R*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(R+x,1-_),y.push(c++)}d.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){const _=d[f][y+1],x=d[f][y],L=d[f+1][y],R=d[f+1][y+1];(f!==0||a>0)&&p.push(_,x,R),(f!==i-1||l<Math.PI)&&p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zt extends Qi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Pr=new lt,dl=new P,hl=new P;class Jm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(dl),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qm extends Jm{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eg extends cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fl(){return performance.now()}const pl=new lt;class dc{constructor(e,t,i=0,n=1/0){this.ray=new Xs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(e,t=!0,i=[]){return Ra(e,this,i,t),i.sort(ml),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Ra(e[n],this,i,t);return i.sort(ml),i}}function ml(s,e){return s.distance-e.distance}function Ra(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ra(r[a],e,t,!0)}}class gl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ig extends Qn{constructor(e=10,t=10,i=4473924,n=8947848){i=new We(i),n=new We(n);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=u===r?i:n;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const d=new dt;d.setAttribute("position",new qe(l,3)),d.setAttribute("color",new qe(c,3));const h=new Ii({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ng extends Qn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new dt;n.setAttribute("position",new qe(t,3)),n.setAttribute("color",new qe(i,3));const r=new Ii({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new We,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sg extends Ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);class rg{constructor(e){if(!e)throw new Error("Viewer: Canvas container DOM element is required.");this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.gridHelper=null,this.axesHelper=null,this.sunLight=null,this.fillLight=null,this.ambientLight=null,this.animationFrameId=null,this.clock=new tg,this.fps=60,this.frameCount=0,this.lastFpsTime=performance.now(),this.lastFrameDuration=16.6,this.onRenderFrame=null,this._onResizeBound=this.handleResize.bind(this),this._resizeObserver=null,this.init()}init(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.scene=new vm,this.scene.background=new We(395539),this.scene.fog=new ka(395539,32e-5),this.camera=new Ht(48,e/t,2,15e3),this.camera.position.set(0,850,1350),this.renderer=new gm({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=Tl,this.renderer.toneMappingExposure=1.1,this.container.innerHTML="",this.container.appendChild(this.renderer.domElement),this.setupLighting(),this.setupReferenceGrid(),window.addEventListener("resize",this._onResizeBound),window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>this.handleResize()),this._resizeObserver.observe(this.container))}setupLighting(){this.ambientLight=new eg(9413567,.65),this.scene.add(this.ambientLight),this.sunLight=new ul(16774630,1.35),this.sunLight.position.set(-1800,2200,1200),this.scene.add(this.sunLight),this.fillLight=new ul(3718648,.35),this.fillLight.position.set(1600,1200,-1400),this.scene.add(this.fillLight)}setupReferenceGrid(){this.gridHelper=new ig(3e3,30,3718648,1976635),this.gridHelper.position.y=118,this.gridHelper.material.opacity=.45,this.gridHelper.material.transparent=!0,this.scene.add(this.gridHelper),this.axesHelper=new ng(300),this.axesHelper.position.set(0,120,0),this.scene.add(this.axesHelper)}setGridVisible(e){this.gridHelper&&(this.gridHelper.visible=e),this.axesHelper&&(this.axesHelper.visible=e)}handleResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1))}startRenderLoop(e){const t=i=>{this.animationFrameId=requestAnimationFrame(t);const n=performance.now(),r=this.clock.getDelta();typeof e=="function"&&e(r),this.renderer.render(this.scene,this.camera),this.frameCount++;const a=performance.now();a-this.lastFpsTime>=500&&(this.fps=Math.round(this.frameCount*1e3/(a-this.lastFpsTime)),this.frameCount=0,this.lastFpsTime=a),this.lastFrameDuration=performance.now()-n,typeof this.onRenderFrame=="function"&&this.onRenderFrame({fps:this.fps,frameDurationMs:this.lastFrameDuration,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures})};this.animationFrameId=requestAnimationFrame(t)}stopRenderLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}dispose(){this.stopRenderLoop(),window.removeEventListener("resize",this._onResizeBound),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this.scene&&(this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>this.disposeMaterial(t)):this.disposeMaterial(e.material))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement))}disposeMaterial(e){e&&(Object.keys(e).forEach(t=>{const i=e[t];i&&typeof i.dispose=="function"&&!(i instanceof Qi)&&i.dispose()}),e.dispose())}}const vl={type:"change"},Ya={type:"start"},hc={type:"end"},Ds=new Xs,_l=new wi,ag=Math.cos(70*id.DEG2RAD),pt=new P,Lt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class og extends sg{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.touches={ONE:vn.ROTATE,TWO:vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ki,this._lastTargetPosition=new P,this._quat=new Ki().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gl,this._sphericalDelta=new gl,this._scale=1,this._panOffset=new P,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new P,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cg.bind(this),this._onPointerDown=lg.bind(this),this._onPointerUp=dg.bind(this),this._onContextMenu=vg.bind(this),this._onMouseWheel=fg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=gg.bind(this),this._onMouseDown=hg.bind(this),this._onMouseMove=ug.bind(this),this._interceptControlDown=_g.bind(this),this._interceptControlUp=xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vl),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Lt:i>Math.PI&&(i-=Lt),n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ds.origin.copy(this.object.position),Ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ds.direction))<ag?this.object.lookAt(this.target):(_l.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ds.intersectPlane(_l,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;pt.copy(n).sub(this.target);let r=pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function cg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hc),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=nt.DOLLY;break;case yn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}break;case yn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ya)}function ug(s){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fg(s){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(s.preventDefault(),this.dispatchEvent(Ya),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(hc))}function pg(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function mg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=nt.TOUCH_ROTATE;break;case vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=nt.TOUCH_DOLLY_PAN;break;case vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Ya)}function gg(s){switch(this._trackPointer(s),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=nt.NONE}}function vg(s){this.enabled!==!1&&s.preventDefault()}function _g(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yg{constructor(e,t){if(!e||!t)throw new Error("NavigationControls: Camera and domElement are required.");this.camera=e,this.domElement=t,this.defaultTarget=new P(0,140,0),this.defaultPosition=new P(0,850,1350),this.isTransitioning=!1,this.transitionStart=0,this.transitionDuration=800,this.startPos=new P,this.targetPos=new P,this.startLookAt=new P,this.targetLookAt=new P,this.controls=new og(this.camera,this.domElement),this.setupControls()}setupControls(){this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=30,this.controls.maxDistance=5500,this.controls.maxPolarAngle=Math.PI/2-.03,this.controls.minPolarAngle=.02,this.camera.position.copy(this.defaultPosition),this.controls.target.copy(this.defaultTarget),this.controls.update()}update(e){if(this.isTransitioning){const t=performance.now(),i=Math.min((t-this.transitionStart)/this.transitionDuration,1),n=1-Math.pow(1-i,3);this.camera.position.lerpVectors(this.startPos,this.targetPos,n),this.controls.target.lerpVectors(this.startLookAt,this.targetLookAt,n),i>=1&&(this.isTransitioning=!1)}this.controls.update()}animateTo(e,t,i=700){this.isTransitioning=!0,this.transitionStart=performance.now(),this.transitionDuration=i,this.startPos.copy(this.camera.position),this.targetPos.copy(e),this.startLookAt.copy(this.controls.target),this.targetLookAt.copy(t)}setPerspectiveIso(){this.animateTo(new P(0,850,1350),new P(0,140,0))}setTopDown(){this.animateTo(new P(0,2400,.001),new P(0,140,0))}setValleyLow(){this.animateTo(new P(-1100,230,200),new P(200,140,-50))}reset(){this.animateTo(this.defaultPosition,this.defaultTarget)}getTelemetry(){const e=this.camera.position,t=this.controls.target,n=new P().subVectors(e,t).length(),r=(Math.PI/2-this.controls.getPolarAngle())*180/Math.PI;let a=this.controls.getAzimuthalAngle()*180/Math.PI;return a<0&&(a+=360),{camX:e.x,camY:e.y,camZ:e.z,targetX:t.x,targetY:t.y,targetZ:t.z,altitude:e.y,distance:n,pitchDeg:r,azimuthDeg:a}}dispose(){this.controls&&(this.controls.dispose(),this.controls=null)}}class Mg{constructor(e={}){this.width=e.width||2400,this.length=e.length||2400,this.segmentsX=e.segmentsX||128,this.segmentsZ=e.segmentsZ||128,this.mesh=null,this.wireframeMesh=null,this.geometry=null,this.material=null,this.wireframeMaterial=null,this.hypsometricEnabled=!0,this.metadata={isSynthetic:!0,label:"Synthetic Procedural Terrain Placeholder (Ahr Valley Corridor Mock)",demSource:"Procedural Valley Model (Uncalibrated)",studyArea:"Dernau, Ahr Valley (Germany)",coverageBbox:[7.015036,50.511616,7.044231,50.531079],dimensionsMeters:{width:this.width,length:this.length},elevationRangeMeters:[122,318.5],resolution:`${this.segmentsX} × ${this.segmentsZ} vertices`,triangleCount:this.segmentsX*this.segmentsZ*2}}sampleElevation(e,t){const i=-40+130*Math.sin(e/460)+40*Math.sin(e/180)+12*Math.cos(e/75),n=Math.abs(t-i);let r;if(n<55)r=124+1.8*Math.sin(e/140);else if(n<260){const o=(n-55)/205;r=126+22*Math.pow(o,1.35)}else{const o=(n-260)/(this.length/2-260),l=Math.min(Math.max(o,0),1);r=148+165*Math.pow(l,.85)}const a=7*Math.sin(e/140)*Math.cos(t/160)+4*Math.cos(e/75+t/90)+2*Math.sin(e/35)*Math.cos(t/40);return Math.max(122,r+a)}createMesh(){this.geometry=new en(this.width,this.length,this.segmentsX,this.segmentsZ),this.geometry.rotateX(-Math.PI/2);const e=this.geometry.attributes.position,t=e.count,i=new Float32Array(t*3);let n=1/0,r=-1/0;for(let a=0;a<t;a++){const o=e.getX(a),l=e.getZ(a),c=this.sampleElevation(o,l);e.setY(a,c),c<n&&(n=c),c>r&&(r=c);const d=this.getHypsometricColor(c);i[a*3+0]=d.r,i[a*3+1]=d.g,i[a*3+2]=d.b}return this.geometry.setAttribute("color",new mt(i,3)),this.geometry.computeVertexNormals(),this.metadata.elevationRangeMeters=[Math.round(n*10)/10,Math.round(r*10)/10],this.material=new Zt({vertexColors:!0,roughness:.82,metalness:.08,flatShading:!1}),this.mesh=new Je(this.geometry,this.material),this.mesh.name="Terrain_Surface_Placeholder",this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.wireframeMaterial=new Vt({color:3718648,wireframe:!0,transparent:!0,opacity:.18}),this.wireframeMesh=new Je(this.geometry,this.wireframeMaterial),this.wireframeMesh.name="Terrain_Wireframe_Overlay",this.wireframeMesh.visible=!1,this.mesh.add(this.wireframeMesh),this.mesh}getHypsometricColor(e){if(!this.hypsometricEnabled)return{r:.35,g:.38,b:.44};const t=Math.min(Math.max((e-122)/193,0),1);return t<.1?this.lerpColor({r:.11,g:.18,b:.26},{r:.18,g:.29,b:.24},t/.1):t<.35?this.lerpColor({r:.18,g:.29,b:.24},{r:.36,g:.4,b:.26},(t-.1)/.25):t<.7?this.lerpColor({r:.36,g:.4,b:.26},{r:.49,g:.43,b:.32},(t-.35)/.35):this.lerpColor({r:.49,g:.43,b:.32},{r:.34,g:.37,b:.42},(t-.7)/.3)}lerpColor(e,t,i){const n=Math.min(Math.max(i,0),1);return{r:e.r+(t.r-e.r)*n,g:e.g+(t.g-e.g)*n,b:e.b+(t.b-e.b)*n}}setWireframe(e){this.wireframeMesh&&(this.wireframeMesh.visible=e)}setHypsometric(e){if(this.hypsometricEnabled=e,!this.geometry)return;const t=this.geometry.attributes.position,i=this.geometry.attributes.color,n=i.array;for(let r=0;r<t.count;r++){const a=t.getY(r),o=this.getHypsometricColor(a);n[r*3+0]=o.r,n[r*3+1]=o.g,n[r*3+2]=o.b}i.needsUpdate=!0}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.wireframeMaterial&&(this.wireframeMaterial.dispose(),this.wireframeMaterial=null),this.mesh&&(this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null)}}class Sg{constructor(e,t={}){if(!e||!e.elevations||!e.metadata)throw new Error("DemTerrain: Invalid DEM payload format.");this.rawMetadata=e.metadata,this.elevations=e.elevations,this.rows=this.elevations.length,this.cols=this.elevations[0].length,this.width=t.width||this.rawMetadata.utmExtents.widthMeters||2400,this.length=t.length||this.rawMetadata.utmExtents.lengthMeters||2400,this.segmentsX=t.segmentsX||this.cols-1,this.segmentsZ=t.segmentsZ||this.rows-1,this.minElev=this.rawMetadata.elevationStats.minMeters,this.maxElev=this.rawMetadata.elevationStats.maxMeters,this.meanElev=this.rawMetadata.elevationStats.meanMeters,this.mesh=null,this.wireframeMesh=null,this.geometry=null,this.material=null,this.wireframeMaterial=null,this.hypsometricEnabled=!0,this.metadata={isSynthetic:!1,isRealDEM:!0,label:"Official Rhineland-Palatinate DGM1 Bare-Earth LiDAR Model",demSource:"LVermGeo RLP DGM1 (Airborne LiDAR)",product:this.rawMetadata.product,surveyYears:this.rawMetadata.surveyYears,license:this.rawMetadata.license,attribution:this.rawMetadata.attribution,studyArea:this.rawMetadata.studyArea,verticalDatum:this.rawMetadata.verticalDatum,horizontalCRS:this.rawMetadata.sourceCRS,dimensionsMeters:{width:this.width,length:this.length},elevationRangeMeters:[this.minElev,this.maxElev],meanElevationMeters:this.meanElev,reliefMeters:Math.round((this.maxElev-this.minElev)*10)/10,resolution:`${this.cols} × ${this.rows} vertices (${Math.round(this.width/(this.cols-1)*10)/10}m grid step)`,triangleCount:this.segmentsX*this.segmentsZ*2}}sampleElevation(e,t){const i=(e+this.width/2)/this.width,n=(t+this.length/2)/this.length,r=Math.max(0,Math.min(1,i)),a=Math.max(0,Math.min(1,n)),o=r*(this.cols-1),l=a*(this.rows-1),c=Math.floor(o),d=Math.min(c+1,this.cols-1),h=Math.floor(l),u=Math.min(h+1,this.rows-1),p=o-c,g=l-h,v=this.elevations[h][c],m=this.elevations[h][d],f=this.elevations[u][c],y=this.elevations[u][d],_=v*(1-p)+m*p,x=f*(1-p)+y*p;return _*(1-g)+x*g}createMesh(){this.geometry=new en(this.width,this.length,this.segmentsX,this.segmentsZ),this.geometry.rotateX(-Math.PI/2);const e=this.geometry.attributes.position,t=e.count,i=new Float32Array(t*3);for(let n=0;n<t;n++){const r=e.getX(n),a=e.getZ(n),o=this.sampleElevation(r,a);e.setY(n,o);const l=this.getHypsometricColor(o);i[n*3+0]=l.r,i[n*3+1]=l.g,i[n*3+2]=l.b}return this.geometry.setAttribute("color",new mt(i,3)),this.geometry.computeVertexNormals(),this.material=new Zt({vertexColors:!0,roughness:.84,metalness:.06,flatShading:!1}),this.mesh=new Je(this.geometry,this.material),this.mesh.name="Terrain_Surface_DGM1_RealDEM",this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.wireframeMaterial=new Vt({color:3718648,wireframe:!0,transparent:!0,opacity:.16}),this.wireframeMesh=new Je(this.geometry,this.wireframeMaterial),this.wireframeMesh.name="Terrain_Wireframe_Overlay",this.wireframeMesh.visible=!1,this.mesh.add(this.wireframeMesh),this.mesh}getHypsometricColor(e){if(!this.hypsometricEnabled)return{r:.36,g:.39,b:.44};const t=Math.min(Math.max((e-this.minElev)/(this.maxElev-this.minElev),0),1);return t<.12?this.lerpColor({r:.11,g:.22,b:.25},{r:.18,g:.32,b:.24},t/.12):t<.38?this.lerpColor({r:.18,g:.32,b:.24},{r:.38,g:.42,b:.25},(t-.12)/.26):t<.72?this.lerpColor({r:.38,g:.42,b:.25},{r:.52,g:.45,b:.32},(t-.38)/.34):this.lerpColor({r:.52,g:.45,b:.32},{r:.42,g:.45,b:.5},(t-.72)/.28)}lerpColor(e,t,i){const n=Math.min(Math.max(i,0),1);return{r:e.r+(t.r-e.r)*n,g:e.g+(t.g-e.g)*n,b:e.b+(t.b-e.b)*n}}setWireframe(e){this.wireframeMesh&&(this.wireframeMesh.visible=e)}setHypsometric(e){if(this.hypsometricEnabled=e,!this.geometry)return;const t=this.geometry.attributes.position,i=this.geometry.attributes.color,n=i.array;for(let r=0;r<t.count;r++){const a=t.getY(r),o=this.getHypsometricColor(a);n[r*3+0]=o.r,n[r*3+1]=o.g,n[r*3+2]=o.b}i.needsUpdate=!0}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.wireframeMaterial&&(this.wireframeMaterial.dispose(),this.wireframeMaterial=null),this.mesh&&(this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null)}}class bg{constructor(e){if(!e)throw new Error("TerrainManager: THREE.Scene is required.");this.scene=e,this.activeTerrain=null,this.terrainMesh=null,this.wireframeActive=!1,this.hypsometricActive=!0,this.raycaster=new dc}async loadRealTerrain(e="./data/dernau/dem_height_grid.json"){this.disposeCurrentTerrain();try{console.log(`[TerrainManager] Ingesting real DEM height grid from: ${e}`);const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error ${t.status} fetching DEM at ${e}`);const i=await t.json();return this.demPayload=i,this.activeTerrain=new Sg(i),this.terrainMesh=this.activeTerrain.createMesh(),this.scene.add(this.terrainMesh),this.activeTerrain.setWireframe(this.wireframeActive),this.activeTerrain.setHypsometric(this.hypsometricActive),console.log("[TerrainManager] Real DGM1 terrain loaded successfully:",this.activeTerrain.metadata),this.activeTerrain.metadata}catch(t){return this.demPayload=null,console.warn(`[TerrainManager] Failed to load real DEM (${t.message}). Falling back to synthetic placeholder.`),this.loadPlaceholderTerrain()}}loadPlaceholderTerrain(){return this.disposeCurrentTerrain(),this.activeTerrain=new Mg({width:2400,length:2400,segmentsX:128,segmentsZ:128}),this.terrainMesh=this.activeTerrain.createMesh(),this.scene.add(this.terrainMesh),this.activeTerrain.setWireframe(this.wireframeActive),this.activeTerrain.setHypsometric(this.hypsometricActive),this.activeTerrain.metadata}async loadDefaultTerrain(){return await this.loadRealTerrain()}toggleWireframe(e){return this.wireframeActive=typeof e=="boolean"?e:!this.wireframeActive,this.activeTerrain&&this.activeTerrain.setWireframe(this.wireframeActive),this.wireframeActive}toggleHypsometric(e){return this.hypsometricActive=typeof e=="boolean"?e:!this.hypsometricActive,this.activeTerrain&&this.activeTerrain.setHypsometric(this.hypsometricActive),this.hypsometricActive}getElevationAt(e,t){return this.activeTerrain?this.activeTerrain.sampleElevation(e,t):null}raycastSurface(e,t){if(!this.terrainMesh||!t)return null;this.raycaster.setFromCamera(e,t);const i=this.raycaster.intersectObject(this.terrainMesh,!1);return i&&i.length>0?i[0].point:null}getMetadata(){return this.activeTerrain?this.activeTerrain.metadata:null}getDemPayload(){return this.demPayload||null}disposeCurrentTerrain(){this.activeTerrain&&(this.activeTerrain.dispose(),this.activeTerrain=null,this.terrainMesh=null)}dispose(){this.disposeCurrentTerrain(),this.scene=null}}const xl=6378137,Nr=1/298.257223563,At=2*Nr-Nr*Nr,Ur=At/(1-At),yl=.9996,Eg=9*Math.PI/180,Ml={x:360327.76,y:559845317e-2};function wg(s,e){const t=e*Math.PI/180,n=s*Math.PI/180-Eg,r=Math.sin(t),a=Math.cos(t),o=Math.tan(t),l=xl/Math.sqrt(1-At*r*r),c=o*o,d=Ur*a*a,h=a*n,u=xl*((1-At/4-3*At*At/64-5*Math.pow(At,3)/256)*t-(3*At/8+3*At*At/32+45*Math.pow(At,3)/1024)*Math.sin(2*t)+(15*At*At/256+45*Math.pow(At,3)/1024)*Math.sin(4*t)-35*Math.pow(At,3)/3072*Math.sin(6*t)),p=5e5+yl*l*(h+(1-c+d)*Math.pow(h,3)/6+(5-18*c+c*c+72*d-58*Ur)*Math.pow(h,5)/120),g=yl*(u+l*o*(h*h/2+(5-c+9*d+4*d*d)*Math.pow(h,4)/24+(61-58*c+c*c+600*d-330*Ur)*Math.pow(h,6)/720));return{x:p,y:g}}function ti(s,e){const t=wg(s,e);return{x:t.x-Ml.x,z:-(t.y-Ml.y)}}class Tg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Buildings_Layer",this.scene.add(this.group),this.buildingsMesh=null,this.buildingsMaterial=null,this.rawGeojson=null,this.floodedMesh=null,this.normalMesh=null,this.features=[],this.depthColorMode="dynamic-depth",this.stats={total:0,flooded:0,normal:0},this.depthStats={dry:0,shallow:0,moderate:0,deep:0},this.highlightBox=null,this.highlightMarker=null,this.accessLostGroup=new Dt,this.accessLostGroup.name="Access_Lost_Highlights",this.group.add(this.accessLostGroup)}async load(e="./data/dernau/buildings_exposed.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`BuildingLayer: Failed to fetch GeoJSON from ${e} (${t.status})`);const i=await t.json();return this.rawGeojson=i,this.buildGeometry(i),this.stats}buildGeometry(e){this.dispose();const t=e.features||[];this.features=[];const i=6,n=[];if(t.forEach((r,a)=>{if(!r.geometry)return;const o=r.properties||{},l=o.flooded===!0,c=r.geometry.type,d=r.geometry.coordinates;let h=[];c==="Polygon"?h.push(d):c==="MultiPolygon"&&(h=d),h.forEach(u=>{if(!u||u.length===0)return;const p=u[0];if(p.length<3)return;const g=[];let v=0,m=0;for(let w=0;w<p.length-1;w++){const M=ti(p[w][0],p[w][1]);g.push(M),v+=M.x,m+=M.z}const f=g.length;if(f<3)return;v/=f,m/=f;const y=this.terrainManager.getElevationAt(v,m)||135,_=new Ys;_.moveTo(g[0].x,-g[0].z);for(let w=1;w<f;w++)_.lineTo(g[w].x,-g[w].z);_.closePath();let x=0;for(let w=0;w<f;w++){const M=(w+1)%f;x+=g[w].x*g[M].z-g[M].x*g[w].z}x=Math.abs(x)*.5;const L={depth:i,bevelEnabled:!1},R=new $a(_,L);R.rotateX(-Math.PI/2);const A=R.attributes.position;for(let w=0;w<A.count;w++){const M=A.getX(w),S=A.getZ(w),C=A.getY(w),N=(this.terrainManager&&typeof this.terrainManager.getElevationAt=="function"?this.terrainManager.getElevationAt(M,S):null)??y;Math.abs(C)<1e-4?A.setY(w,N):A.setY(w,N+i)}R.computeVertexNormals(),R.computeBoundingBox(),n.push(R),this.features.push({id:o.id||`bld-${a}`,kind:"building",flooded:l,areaSqM:Math.round(x*10)/10,baseElevationM:Math.round(y*10)/10,heightM:i,center:{x:v,y:y+i/2,z:m},bounds:R.boundingBox.clone(),currentWaterDepth:0,modeledWaterElev:124,depthCategory:"dry",vertexStart:0,vertexCount:0})})}),n.length>0){const r=this.mergeGeometriesWithColor(n,this.features);this.buildingsMaterial=new Zt({vertexColors:!0,roughness:.65,metalness:.15}),this.buildingsMesh=new Je(r,this.buildingsMaterial),this.buildingsMesh.name="Buildings_Layer_Mesh",this.buildingsMesh.castShadow=!0,this.buildingsMesh.receiveShadow=!0,this.group.add(this.buildingsMesh),this.floodedMesh=this.buildingsMesh,this.normalMesh=this.buildingsMesh}n.forEach(r=>r.dispose()),this.stats={total:this.features.length,flooded:this.features.filter(r=>r.flooded).length,normal:this.features.filter(r=>!r.flooded).length}}mergeGeometriesWithColor(e,t){let i=0,n=0,r=0;for(const v of e)i+=v.attributes.position.array.length,n+=v.attributes.normal.array.length,v.index&&(r+=v.index.array.length);const a=new Float32Array(i),o=new Float32Array(n),l=new Float32Array(i),c=r>0?new Uint32Array(r):null;let d=0,h=0,u=0,p=0;for(let v=0;v<e.length;v++){const m=e[v],f=t[v],y=m.attributes.position.array,_=m.attributes.normal.array,x=m.attributes.position.count;f.vertexStart=p,f.vertexCount=x,a.set(y,d),o.set(_,h);const L=f.flooded?.96:.39,R=f.flooded?.62:.45,A=f.flooded?.04:.55;for(let w=0;w<x;w++)l[(p+w)*3+0]=L,l[(p+w)*3+1]=R,l[(p+w)*3+2]=A;if(m.index&&c){const w=m.index.array;for(let M=0;M<w.length;M++)c[u+M]=w[M]+p;u+=w.length}d+=y.length,h+=_.length,p+=x}const g=new dt;return g.setAttribute("position",new mt(a,3)),g.setAttribute("normal",new mt(o,3)),g.setAttribute("color",new mt(l,3)),c&&g.setIndex(new mt(c,1)),g}setDepthColorMode(e){return this.depthColorMode=e==="historical"?"historical":"dynamic-depth",this.depthColorMode}updateBuildingDepths(e){if(!this.buildingsMesh||!this.buildingsMesh.geometry.attributes.color)return this.depthStats;const t=this.buildingsMesh.geometry.attributes.color.array,i={dry:0,shallow:0,moderate:0,deep:0};for(const n of this.features){const r=typeof e=="function"?e(n.center.x,n.center.z):124,a=Math.max(0,r-n.baseElevationM);n.currentWaterDepth=Math.round(a*100)/100,n.modeledWaterElev=Math.round(r*100)/100;let o,l,c;this.depthColorMode==="historical"?(n.flooded?(o=.96,l=.62,c=.04):(o=.39,l=.45,c=.55),a<=0?i.dry++:a<.5?i.shallow++:a<1.5?i.moderate++:i.deep++):a<=0?(o=.39,l=.45,c=.55,n.depthCategory="dry",i.dry++):a<.5?(o=.92,l=.7,c=.03,n.depthCategory="shallow",i.shallow++):a<1.5?(o=.98,l=.45,c=.09,n.depthCategory="moderate",i.moderate++):(o=.94,l=.27,c=.27,n.depthCategory="deep",i.deep++);const d=n.vertexStart,h=n.vertexCount;for(let u=0;u<h;u++)t[(d+u)*3+0]=o,t[(d+u)*3+1]=l,t[(d+u)*3+2]=c}return this.buildingsMesh.geometry.attributes.color.needsUpdate=!0,this.depthStats=i,this.depthStats}intersectBuilding(e){if(!e)return null;let t=null,i=1/0;for(const n of this.features)if(n.bounds){const r=e.intersectBox(n.bounds,new P);if(r){const a=e.origin.distanceTo(r);a<i&&(i=a,t=n)}}return t}highlightBuilding(e){this.clearHighlight();const t=this.features.find(d=>d.id===e);if(!t||!t.bounds)return null;const i=new P,n=new P;t.bounds.getSize(i),t.bounds.getCenter(n);const r=new Di(i.x+2,i.y+2,i.z+2),a=new Dm(r),o=new Ii({color:3718648,linewidth:3});this.highlightBox=new Qn(a,o),this.highlightBox.position.copy(n),this.group.add(this.highlightBox);const l=new Va(2.5,6,4);l.rotateX(Math.PI);const c=new Vt({color:3718648});return this.highlightMarker=new Je(l,c),this.highlightMarker.position.set(n.x,t.bounds.max.y+8,n.z),this.group.add(this.highlightMarker),t}clearHighlight(){this.highlightBox&&(this.group.remove(this.highlightBox),this.highlightBox.geometry.dispose(),this.highlightBox.material.dispose(),this.highlightBox=null),this.highlightMarker&&(this.group.remove(this.highlightMarker),this.highlightMarker.geometry.dispose(),this.highlightMarker.material.dispose(),this.highlightMarker=null)}updateAccessLostHighlights(e){if(this.clearAccessLostHighlights(),!(!e||e.size===0)){for(const t of this.features)if(e.has(t.id)){const i=new Ni(8,11,16);i.rotateX(-Math.PI/2);const n=new Vt({color:15680580,transparent:!0,opacity:.6,side:yt}),r=new Je(i,n);r.position.set(t.center.x,t.baseElevationM+.3,t.center.z),this.accessLostGroup.add(r)}}}clearAccessLostHighlights(){for(;this.accessLostGroup.children.length>0;){const e=this.accessLostGroup.children[0];this.accessLostGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}}setVisible(e){this.group.visible=e}dispose(){this.clearHighlight(),this.clearAccessLostHighlights(),this.buildingsMesh&&(this.buildingsMesh.geometry&&this.buildingsMesh.geometry.dispose(),this.group.remove(this.buildingsMesh),this.buildingsMesh=null,this.floodedMesh=null,this.normalMesh=null),this.buildingsMaterial&&(this.buildingsMaterial.dispose(),this.buildingsMaterial=null),this.features=[]}}const Le=Object.freeze({UNAFFECTED:"unaffected",EXPOSED:"exposed",IMPASSABLE:"impassable",UNKNOWN:"unknown"}),Sl=Object.freeze({[Le.UNAFFECTED]:{r:.06,g:.73,b:.51,hex:"#10b981",label:"Unaffected (Dry)"},[Le.EXPOSED]:{r:.96,g:.62,b:.04,hex:"#f59e0b",label:"Exposed (< Threshold)"},[Le.IMPASSABLE]:{r:.94,g:.27,b:.27,hex:"#ef4444",label:"Impassable (>= Threshold)"},[Le.UNKNOWN]:{r:.39,g:.45,b:.55,hex:"#64748b",label:"Unknown (No Data)"}}),Ag=Object.freeze({sampleSpacingMeters:5,snappingToleranceMeters:1,impassableDepthThreshold:.15,exposedDepthThreshold:.001,minValidSampleRatio:.5,elevationOffsetVisual:.55});class Rg{constructor(e=10){this.cellSize=e,this.grid=new Map}_key(e,t){const i=Math.floor(e/this.cellSize),n=Math.floor(t/this.cellSize);return`${i}:${n}`}insert(e){const t=this._key(e.x,e.z);this.grid.has(t)||this.grid.set(t,[]),this.grid.get(t).push(e)}findNearest(e,t,i){const n=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);let a=i,o=null;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const d=`${n+l}:${r+c}`,h=this.grid.get(d);if(h)for(const u of h){const p=Math.hypot(u.x-e,u.z-t);p<=a&&(a=p,o=u)}}return o}}class Cg{constructor(e,t={}){this.terrainManager=e,this.config={...Ag,...t},this.nodes=new Map,this.edges=new Map,this.features=new Map,this.components=[],this.invalidFeatures=[],this.unresolvedCrossings=[],this.summary={totalFeatures:0,validFeatures:0,invalidFeatures:0,totalEdges:0,totalNodes:0,totalLengthKm:0,connectedComponents:0,unresolvedCrossings:0,unaffected:0,exposed:0,impassable:0,unknown:0,passable:0,waterlogged:0,submerged:0,exposedLengthKm:0,impassableLengthKm:0}}validateFeature(e,t){if(!e||typeof e!="object")return{isValid:!1,error:"Feature is not a valid object",lineStrings:[]};const i=e.properties?.id||`road-${t}`,n=e.geometry;if(!n||!n.type||!n.coordinates)return{isValid:!1,error:`Road ${i} missing geometry or coordinates`,lineStrings:[]};let r=[];if(n.type==="LineString")r.push(n.coordinates);else if(n.type==="MultiLineString")r=n.coordinates;else return{isValid:!1,error:`Road ${i} unsupported geometry type: ${n.type}`,lineStrings:[]};const a=[];for(let o=0;o<r.length;o++){const l=r[o];if(!Array.isArray(l)||l.length<2)continue;let c=!0;for(const d of l){if(!Array.isArray(d)||d.length<2){c=!1;break}const[h,u]=d;if(typeof h!="number"||typeof u!="number"||Number.isNaN(h)||Number.isNaN(u)){c=!1;break}if(h<5||h>15||u<45||u>55){c=!1;break}}c&&a.push(l)}return a.length===0?{isValid:!1,error:`Road ${i} has no valid line coordinates`,lineStrings:[]}:{isValid:!0,lineStrings:a}}buildFromGeoJSON(e){this.nodes.clear(),this.edges.clear(),this.features.clear(),this.components=[],this.invalidFeatures=[],this.unresolvedCrossings=[];const t=e?.features||[],i=new Rg(20),n=this.config.snappingToleranceMeters;let r=0;const a=(l,c,d)=>{const h=i.findNearest(l,c,n);if(h)return h.node;const u=this.terrainManager?.getElevationAt(l,c)??null,p={id:`node_${r++}`,x:l,z:c,lon:d[0],lat:d[1],elevation:u,edgeIds:new Set};return this.nodes.set(p.id,p),i.insert({x:l,z:c,node:p}),p};let o=0;return t.forEach((l,c)=>{const d=this.validateFeature(l,c),h=l.properties?.id||`road-${c}`,u=l.properties?.flooded===!0;if(!d.isValid){this.invalidFeatures.push({id:h,error:d.error,feature:l});return}const p=[];let g=0;d.lineStrings.forEach((m,f)=>{const y=d.lineStrings.length>1?`${h}#${f}`:h,_=m.map(([C,N])=>ti(C,N)),x=a(_[0].x,_[0].z,m[0]),L=a(_[_.length-1].x,_[_.length-1].z,m[m.length-1]);x.edgeIds.add(y),L.edgeIds.add(y);const R=[];let A=0,w=1/0,M=-1/0;for(let C=0;C<_.length-1;C++){const N=_[C],U=_[C+1],B=U.x-N.x,H=U.z-N.z,z=Math.hypot(B,H),X=Math.max(1,Math.ceil(z/this.config.sampleSpacingMeters));for(let G=C===0?0:1;G<=X;G++){const J=G/X,ee=N.x+J*B,de=N.z+J*H,ye=this.terrainManager?.getElevationAt(ee,de)??null,Oe=ye===null||Number.isNaN(ye)||ye<=0||ye===-9999;Oe||(ye<w&&(w=ye),ye>M&&(M=ye)),R.push({x:ee,z:de,groundElevation:Oe?null:ye,isNoData:Oe,cumDistMeters:A+J*z})}A+=z}g+=A;const S={id:y,featureId:h,lineIndex:f,fromNodeId:x.id,toNodeId:L.id,lengthMeters:Math.round(A*10)/10,samples:R,minGroundElev:w===1/0?null:Math.round(w*100)/100,maxGroundElev:M===-1/0?null:Math.round(M*100)/100,vertices:_,geoCoordinates:m,componentId:null,status:Le.UNAFFECTED,statusReason:"Unassessed",maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,sampleCount:R.length,unknownCount:0};this.edges.set(y,S),p.push(S)}),o+=g;const v={id:h,kind:"road",flooded:u,lengthMeters:Math.round(g*10)/10,edges:p,edgeIds:p.map(m=>m.id),minGroundElev:p.reduce((m,f)=>f.minGroundElev!==null&&f.minGroundElev<m?f.minGroundElev:m,1/0),maxGroundElev:p.reduce((m,f)=>f.maxGroundElev!==null&&f.maxGroundElev>m?f.maxGroundElev:m,-1/0),componentId:null,componentSize:0,status:Le.UNAFFECTED,statusReason:"Unassessed",maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,passabilityStatus:"passable"};v.minGroundElev===1/0&&(v.minGroundElev=null),v.maxGroundElev===-1/0&&(v.maxGroundElev=null),this.features.set(h,v)}),this._connectTJunctions(n),this._detectUnresolvedCrossings(n),this._computeConnectedComponents(),this.summary.totalFeatures=t.length,this.summary.validFeatures=this.features.size,this.summary.invalidFeatures=this.invalidFeatures.length,this.summary.totalEdges=this.edges.size,this.summary.totalNodes=this.nodes.size,this.summary.totalLengthKm=Math.round(o/1e3*100)/100,this.summary.connectedComponents=this.components.length,this.summary.unresolvedCrossings=this.unresolvedCrossings.length,console.log(`[RoadNetwork] Graph topology built: ${this.features.size} features, ${this.edges.size} edges, ${this.nodes.size} nodes, ${this.components.length} disconnected components.`),this.unresolvedCrossings.length>0&&console.log(`[RoadNetwork] Preserved ${this.unresolvedCrossings.length} unresolved 2D line crossings without fabricating unverified junctions.`),this.summary}_connectTJunctions(e){const t=[];for(const i of this.edges.values())for(let n=1;n<i.vertices.length-1;n++)t.push({edgeId:i.id,ptIndex:n,vertex:i.vertices[n],geo:i.geoCoordinates[n]});for(const i of this.nodes.values())for(const n of t){if(i.edgeIds.has(n.edgeId))continue;Math.hypot(i.x-n.vertex.x,i.z-n.vertex.z)<=e&&i.edgeIds.add(n.edgeId)}}_detectUnresolvedCrossings(e){const t=[];for(const r of this.edges.values())for(let a=0;a<r.vertices.length-1;a++)t.push({edgeId:r.id,featureId:r.featureId,p1:r.vertices[a],p2:r.vertices[a+1]});const i=(r,a,o)=>(o.z-r.z)*(a.x-r.x)>(a.z-r.z)*(o.x-r.x),n=(r,a,o,l)=>i(r,o,l)!==i(a,o,l)&&i(r,a,o)!==i(r,a,l);for(let r=0;r<t.length;r++)for(let a=r+1;a<t.length;a++){const o=t[r],l=t[a];if(o.edgeId===l.edgeId||o.featureId===l.featureId||Math.max(o.p1.x,o.p2.x)<Math.min(l.p1.x,l.p2.x)||Math.min(o.p1.x,o.p2.x)>Math.max(l.p1.x,l.p2.x)||Math.max(o.p1.z,o.p2.z)<Math.min(l.p1.z,l.p2.z)||Math.min(o.p1.z,o.p2.z)>Math.max(l.p1.z,l.p2.z))continue;const c=Math.hypot(o.p1.x-l.p1.x,o.p1.z-l.p1.z),d=Math.hypot(o.p1.x-l.p2.x,o.p1.z-l.p2.z),h=Math.hypot(o.p2.x-l.p1.x,o.p2.z-l.p1.z),u=Math.hypot(o.p2.x-l.p2.x,o.p2.z-l.p2.z);c<=e||d<=e||h<=e||u<=e||n(o.p1,o.p2,l.p1,l.p2)&&this.unresolvedCrossings.push({edgeA:o.edgeId,edgeB:l.edgeId,featureA:o.featureId,featureB:l.featureId,reason:"Lines cross in 2D without common junction node (potential grade separation or digitizing artifact)"})}}_computeConnectedComponents(){const e=new Map;for(const i of this.nodes.values())e.set(i.id,new Set);for(const i of this.edges.values())e.has(i.fromNodeId)&&e.has(i.toNodeId)&&(e.get(i.fromNodeId).add(i.toNodeId),e.get(i.toNodeId).add(i.fromNodeId));const t=new Set;this.components=[];for(const i of this.nodes.values()){if(t.has(i.id))continue;const n=this.components.length+1,r=new Set,a=new Set,o=new Set;let l=0;const c=[i.id];for(t.add(i.id);c.length>0;){const d=c.shift();r.add(d);const h=this.nodes.get(d);h.componentId=n;for(const p of h.edgeIds)if(!a.has(p)){a.add(p);const g=this.edges.get(p);g&&(g.componentId=n,o.add(g.featureId),l+=g.lengthMeters)}const u=e.get(d)||[];for(const p of u)t.has(p)||(t.add(p),c.push(p))}for(const d of o){const h=this.features.get(d);h&&(h.componentId=n,h.componentSize=o.size)}this.components.push({id:n,nodeIds:r,edgeIds:a,featureIds:o,size:o.size,lengthMeters:Math.round(l*10)/10})}this.components.sort((i,n)=>n.size-i.size)}evaluateScenario(e,t={}){const i={...this.config,...t},n=typeof e=="function"?e:()=>typeof e=="number"?e:124;let r=0,a=0,o=0,l=0,c=0,d=0;for(const h of this.features.values()){let u=0,p=0,g=0,v=0;for(const m of h.edges){let f=0,y=0,_=0,x=0;for(const L of m.samples){if(L.isNoData||L.groundElevation===null||typeof L.groundElevation!="number"||Number.isNaN(L.groundElevation)){_++;continue}const R=n(L.x,L.z);if(R===null||typeof R!="number"||Number.isNaN(R)){_++;continue}const A=Math.max(0,R-L.groundElevation);A>f&&(f=A),A>=i.exposedDepthThreshold&&x++,y++}m.maxWaterDepth=Math.round(f*100)/100,m.sampleCount=y,m.unknownCount=_,m.exposedRatio=y>0?x/y:0,m.exposedLengthMeters=Math.round(m.exposedRatio*m.lengthMeters*10)/10,y===0||y/(y+_)<i.minValidSampleRatio?(m.status=Le.UNKNOWN,m.statusReason="Insufficient or unavailable terrain/water elevation data across road geometry"):f>i.impassableDepthThreshold?(m.status=Le.IMPASSABLE,m.statusReason=`Maximum water depth (${f.toFixed(2)}m) exceeds impassability threshold (${i.impassableDepthThreshold.toFixed(2)}m)`):f>=i.exposedDepthThreshold?(m.status=Le.EXPOSED,m.statusReason=`Water depth (${f.toFixed(2)}m) detected, below impassability threshold (${i.impassableDepthThreshold.toFixed(2)}m)`):(m.status=Le.UNAFFECTED,m.statusReason="No positive water depth detected along road geometry (dry)"),f>u&&(u=f),p+=y,g+=_,v+=x}h.maxWaterDepth=Math.round(u*100)/100,h.sampleCount=p,h.unknownSampleCount=g,h.exposedRatio=p>0?v/p:0,h.exposedLengthMeters=Math.round(h.exposedRatio*h.lengthMeters*10)/10,p===0||p/(p+g)<i.minValidSampleRatio?(h.status=Le.UNKNOWN,h.statusReason="Insufficient or unavailable terrain elevation data across road geometry",l++):u>i.impassableDepthThreshold?(h.status=Le.IMPASSABLE,h.statusReason=`Maximum water depth (${u.toFixed(2)}m) exceeds impassability threshold (${i.impassableDepthThreshold.toFixed(2)}m)`,o++,d+=h.lengthMeters):u>=i.exposedDepthThreshold?(h.status=Le.EXPOSED,h.statusReason=`Water depth (${u.toFixed(2)}m) detected, below impassability threshold (${i.impassableDepthThreshold.toFixed(2)}m)`,a++,c+=h.exposedLengthMeters):(h.status=Le.UNAFFECTED,h.statusReason="No positive water depth detected along road geometry (dry)",r++),h.passabilityStatus=h.status===Le.IMPASSABLE?"submerged":h.status===Le.EXPOSED?"waterlogged":"passable"}return this.summary.unaffected=r,this.summary.exposed=a,this.summary.impassable=o,this.summary.unknown=l,this.summary.exposedLengthKm=Math.round(c/1e3*100)/100,this.summary.impassableLengthKm=Math.round(d/1e3*100)/100,this.summary.passable=r,this.summary.waterlogged=a,this.summary.submerged=o,this.getSummary()}getSummary(){return{...this.summary}}getFeature(e){return this.features.get(e)||null}getEdge(e){return this.edges.get(e)||null}getFeatures(){return Array.from(this.features.values())}getEdges(){return Array.from(this.edges.values())}getNodes(){return Array.from(this.nodes.values())}getComponents(){return this.components}getInvalidFeatures(){return this.invalidFeatures}getUnresolvedCrossings(){return this.unresolvedCrossings}}class Lg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Roads_Layer",this.scene.add(this.group),this.roadNetwork=new Cg(this.terrainManager),this.roadsMesh=null,this.roadsMaterial=null,this.rawGeojson=null,this.floodedMesh=null,this.openMesh=null,this.features=[],this.passabilityMode="dynamic-passability",this.stats={total:0,flooded:0,open:0,totalLengthKm:0},this.passabilityStats={unaffected:0,exposed:0,impassable:0,unknown:0,passable:0,waterlogged:0,submerged:0}}getRoadNetwork(){return this.roadNetwork}async load(e="./data/dernau/roads_status.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`RoadLayer: Failed to fetch roads GeoJSON from ${e} (${t.status})`);const i=await t.json();return this.rawGeojson=i,this.buildGeometry(i),this.stats}buildGeometry(e){this.dispose(),this.roadNetwork.buildFromGeoJSON(e),this.features=[];let t=0;const i=.55,n=[],r=[];let a=0;if(this.roadNetwork.getFeatures().forEach((l,c)=>{const d=l.flooded===!0;let h=0;const u=[],p=[],g=a;l.edges.forEach(v=>{const m=v.geoCoordinates;if(!(!m||m.length<2))for(let f=0;f<m.length-1;f++){const y=ti(m[f][0],m[f][1]),_=ti(m[f+1][0],m[f+1][1]),x=(this.terrainManager?.getElevationAt(y.x,y.z)||135)+i,L=(this.terrainManager?.getElevationAt(_.x,_.z)||135)+i,R=_.x-y.x,A=L-x,w=_.z-y.z,M=Math.sqrt(R*R+A*A+w*w);h+=M,n.push(y.x,x,y.z),n.push(_.x,L,_.z);const S=d?.96:.22,C=d?.25:.74,N=d?.37:.97;r.push(S,C,N,S,C,N),a+=2,p.push({x:y.x,y:x,z:y.z}),p.push({x:_.x,y:L,z:_.z});const U=new gi;U.expandByPoint(new P(y.x,x,y.z)),U.expandByPoint(new P(_.x,L,_.z)),U.expandByScalar(3),u.push(U)}}),t+=h,this.features.push({id:l.id,kind:"road",flooded:d,lengthMeters:Math.round(h*10)/10,boxes:u,points:p,vertexStart:g,vertexCount:a-g,status:l.status||Le.UNAFFECTED,statusReason:l.statusReason||"Unassessed",maxWaterDepth:l.maxWaterDepth||0,exposedLengthMeters:l.exposedLengthMeters||0,exposedRatio:l.exposedRatio||0,minElevation:l.minGroundElev,maxElevation:l.maxGroundElev,componentId:l.componentId,componentSize:l.componentSize,passabilityStatus:d?"submerged":"passable"})}),n.length>0){const l=new dt;l.setAttribute("position",new qe(n,3)),l.setAttribute("color",new qe(r,3)),this.roadsMaterial=new Ii({vertexColors:!0,linewidth:3,transparent:!0,opacity:.95}),this.roadsMesh=new Qn(l,this.roadsMaterial),this.roadsMesh.name="Roads_Layer_Mesh",this.group.add(this.roadsMesh),this.floodedMesh=this.roadsMesh,this.openMesh=this.roadsMesh}this.stats={total:this.features.length,flooded:this.features.filter(l=>l.flooded).length,open:this.features.filter(l=>!l.flooded).length,totalLengthKm:Math.round(t/1e3*100)/100}}setPassabilityMode(e){return this.passabilityMode=e==="historical"?"historical":"dynamic-passability",this.passabilityMode}updatePassability(e){if(!this.roadsMesh||!this.roadsMesh.geometry.attributes.color)return this.passabilityStats;const t=this.roadsMesh.geometry.attributes.color.array,i=this.roadNetwork.evaluateScenario(e),n={passable:0,waterlogged:0,submerged:0};for(const r of this.features){const a=this.roadNetwork.getFeature(r.id);a&&(r.status=a.status,r.statusReason=a.statusReason,r.maxWaterDepth=a.maxWaterDepth,r.exposedLengthMeters=a.exposedLengthMeters,r.exposedRatio=a.exposedRatio);let o=0;for(const p of r.points){const g=typeof e=="function"?e(p.x,p.z):124,v=Math.max(0,g-p.y);v>o&&(o=v)}let l,c,d;if(this.passabilityMode==="historical")r.flooded?(l=.96,c=.25,d=.37):(l=.22,c=.74,d=.97),o>.15?n.submerged++:o>0?n.waterlogged++:n.passable++;else{o>.15?(r.passabilityStatus="submerged",n.submerged++):o>0?(r.passabilityStatus="waterlogged",n.waterlogged++):(r.passabilityStatus="passable",n.passable++);const p=Sl[r.status]||Sl[Le.UNAFFECTED];l=p.r,c=p.g,d=p.b}const h=r.vertexStart,u=r.vertexCount;for(let p=0;p<u;p++)t[(h+p)*3+0]=l,t[(h+p)*3+1]=c,t[(h+p)*3+2]=d}return this.roadsMesh.geometry.attributes.color.needsUpdate=!0,this.passabilityStats={unaffected:i.unaffected,exposed:i.exposed,impassable:i.impassable,unknown:i.unknown,passable:n.passable,waterlogged:n.waterlogged,submerged:n.submerged,total:this.features.length,exposedLengthKm:i.exposedLengthKm,impassableLengthKm:i.impassableLengthKm},this.passabilityStats}intersectRoad(e){if(!e)return null;let t=null,i=1/0;for(const n of this.features)for(const r of n.boxes){const a=e.intersectBox(r,new P);if(a){const o=e.origin.distanceTo(a);o<i&&(i=o,t=n)}}return t}setVisible(e){this.group.visible=e}dispose(){this.roadsMesh&&(this.roadsMesh.geometry&&this.roadsMesh.geometry.dispose(),this.group.remove(this.roadsMesh),this.roadsMesh=null,this.floodedMesh=null,this.openMesh=null),this.roadsMaterial&&(this.roadsMaterial.dispose(),this.roadsMaterial=null),this.features=[]}}class Dg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Facilities_Layer",this.scene.add(this.group),this.disposables=[],this.features=[],this.facilityMeshes=[],this.accessibilityMode="dynamic",this.rawGeojson=null,this.stats={total:0,operational:0,isolated:0,inundated:0}}async load(e="./data/dernau/facilities.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`FacilityLayer: Failed to fetch facilities GeoJSON from ${e} (${t.status})`);const i=await t.json();return this.rawGeojson=i,this.buildGeometry(i),this.stats}buildGeometry(e){this.dispose();const t=e.features||[];this.features=[],this.facilityMeshes=[];const i=28,n=1.2;t.forEach((r,a)=>{if(!r.geometry||r.geometry.type!=="Point")return;const o=r.properties||{},l=r.geometry.coordinates,c=ti(l[0],l[1]),d=this.terrainManager.getElevationAt(c.x,c.z)||135;let h=3718648,u=165063;o.type==="hospital"?(h=15680580,u=10033947):o.type==="shelter"?(h=16096779,u=11817737):o.type==="depot"&&(h=3900150,u=1920728);const p=new In(n*.7,n,i,12),g=new Zt({color:h,emissive:u,emissiveIntensity:.6,roughness:.3,metalness:.7}),v=new Je(p,g);v.position.set(c.x,d+i/2,c.z),this.group.add(v);const m=new Ks(n*2.4,16,16),f=new Zt({color:h,emissive:h,emissiveIntensity:.9,roughness:.2}),y=new Je(m,f);y.position.set(c.x,d+i+n*2,c.z),this.group.add(y);const _=new Ni(n*2,n*7,24);_.rotateX(-Math.PI/2);const x=new Vt({color:h,transparent:!0,opacity:.45,side:yt}),L=new Je(_,x);if(L.position.set(c.x,d+.35,c.z),this.group.add(L),this.disposables.push(p,g,m,f,_,x),o.type==="hospital"){const w=new Dt,M=new Zt({color:15680580,emissive:16711680,emissiveIntensity:.85,roughness:.2}),S=new Di(4.2,1.2,.9),C=new Di(1.2,4.2,.9),N=new Je(S,M),U=new Je(C,M);w.add(N),w.add(U),w.position.set(c.x,d+i+n*2+3.8,c.z),this.group.add(w),this.disposables.push(S,C,M)}this.facilityMeshes.push({cylinderMat:g,headMat:f,ringMat:x,defaultColor:h,defaultEmissive:u});const R=new gi;R.setFromCenterAndSize(new P(c.x,d+i/2,c.z),new P(n*8,i+10,n*8));const A=o.type==="shelter"?"Shelter":"Emergency Facility";this.features.push({id:o.facility_id||`fac-${a}`,name:o.name||A,type:o.type||"unknown",provenance:o.provenance||"dataset",kind:"facility",coordsGeo:[l[0],l[1]],elevationM:Math.round(d*10)/10,center:{x:c.x,y:d+i,z:c.z},bounds:R,accessibilityStatus:"operational",siteWaterDepth:0,nearbyRoadStatus:"passable"})}),this.stats={total:this.features.length,operational:this.features.length,isolated:0,inundated:0}}setAccessibilityMode(e){return this.accessibilityMode=e==="historical"?"historical":"dynamic",this.accessibilityMode}updateAccessibility(e){let t=0,i=0,n=0;return this.features.forEach((r,a)=>{const o=this.facilityMeshes[a];if(!o)return;const l=e?e[r.id]:null;if(l&&(r.accessibilityStatus=l.status,r.siteWaterDepth=l.siteWaterDepth,r.nearbyRoadStatus=l.nearbyRoadStatus),this.accessibilityMode==="historical")o.cylinderMat.color.setHex(o.defaultColor),o.cylinderMat.emissive.setHex(o.defaultEmissive),o.headMat.color.setHex(o.defaultColor),o.headMat.emissive.setHex(o.defaultColor),o.ringMat.color.setHex(o.defaultColor);else{let c=1096065,d=292951;r.accessibilityStatus==="inundated"?(c=15680580,d=10033947,n++):r.accessibilityStatus==="isolated"?(c=16096779,d=11817737,i++):(c=1096065,d=292951,t++),o.cylinderMat.color.setHex(c),o.cylinderMat.emissive.setHex(d),o.headMat.color.setHex(c),o.headMat.emissive.setHex(c),o.ringMat.color.setHex(c)}}),this.stats={total:this.features.length,operational:t,isolated:i,inundated:n},this.stats}intersectFacility(e){if(!e)return null;let t=null,i=1/0;for(const n of this.features)if(n.bounds){const r=e.intersectBox(n.bounds,new P);if(r){const a=e.origin.distanceTo(r);a<i&&(i=a,t=n)}}return t}setVisible(e){this.group.visible=e}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.facilityMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0]);this.features=[]}}class Pg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Historical_Flood_Extent_Layer",this.scene.add(this.group),this.fillMesh=null,this.outlineMesh=null,this.fillMaterial=null,this.outlineMaterial=null,this.stats={polygonCount:0,source:"SpaceNet 8 (July 2021 Germany Flood Event)",labelClass:"derived_flood_extent (Reference Context)"}}async load(e="./data/dernau/flood_extent.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`FloodExtentLayer: Failed to fetch GeoJSON from ${e} (${t.status})`);const i=await t.json();return this.buildGeometry(i),this.stats}buildGeometry(e){this.dispose();const t=e.features||[],i=[],n=[],r=.28;if(t.forEach(a=>{if(!a.geometry)return;const o=a.geometry.type,l=a.geometry.coordinates;let c=[];o==="Polygon"?c.push(l):o==="MultiPolygon"&&(c=l),c.forEach(d=>{if(!d||d.length===0)return;const h=d[0];if(h.length<3)return;const u=[];for(let p=0;p<h.length-1;p++){const g=ti(h[p][0],h[p][1]),v=(this.terrainManager.getElevationAt(g.x,g.z)||125)+r;u.push({x:g.x,y:v,z:g.z});const m=(p+1)%(h.length-1),f=ti(h[m][0],h[m][1]),y=(this.terrainManager.getElevationAt(f.x,f.z)||125)+r;i.push(g.x,v+.1,g.z),i.push(f.x,y+.1,f.z)}if(u.length>=3){const p=new Ys;p.moveTo(u[0].x,-u[0].z);for(let m=1;m<u.length;m++)p.lineTo(u[m].x,-u[m].z);p.closePath();const g=new qa(p);g.rotateX(Math.PI/2);const v=g.attributes.position;for(let m=0;m<v.count;m++){const f=v.getX(m),y=v.getZ(m),_=(this.terrainManager.getElevationAt(f,y)||125)+r;v.setY(m,_)}g.computeVertexNormals(),n.push(g)}})}),this.fillMaterial=new Vt({color:1920728,transparent:!0,opacity:.38,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:yt}),this.outlineMaterial=new Ii({color:6333946,transparent:!0,opacity:.75,linewidth:2}),n.length>0){const a=this.mergeGeometries(n);this.fillMesh=new Je(a,this.fillMaterial),this.fillMesh.name="Historical_Flood_Extent_Fill",this.group.add(this.fillMesh),n.forEach(o=>o.dispose())}if(i.length>0){const a=new dt;a.setAttribute("position",new qe(i,3)),this.outlineMesh=new Qn(a,this.outlineMaterial),this.outlineMesh.name="Historical_Flood_Extent_Outlines",this.group.add(this.outlineMesh)}this.stats.polygonCount=t.length}mergeGeometries(e){let t=0,i=0,n=0;for(const p of e)t+=p.attributes.position.array.length,p.attributes.normal&&(i+=p.attributes.normal.array.length),p.index&&(n+=p.index.array.length);const r=new Float32Array(t),a=i>0?new Float32Array(i):null,o=n>0?new Uint32Array(n):null;let l=0,c=0,d=0,h=0;for(const p of e){const g=p.attributes.position.array;if(r.set(g,l),p.attributes.normal&&a&&(a.set(p.attributes.normal.array,c),c+=p.attributes.normal.array.length),p.index&&o){const v=p.index.array;for(let m=0;m<v.length;m++)o[d+m]=v[m]+h;d+=v.length}l+=g.length,h+=p.attributes.position.count}const u=new dt;return u.setAttribute("position",new mt(r,3)),a&&u.setAttribute("normal",new mt(a,3)),o&&u.setIndex(new mt(o,1)),u}setVisible(e){this.group.visible=e}dispose(){this.fillMesh&&(this.fillMesh.geometry&&this.fillMesh.geometry.dispose(),this.group.remove(this.fillMesh),this.fillMesh=null),this.outlineMesh&&(this.outlineMesh.geometry&&this.outlineMesh.geometry.dispose(),this.group.remove(this.outlineMesh),this.outlineMesh=null),this.fillMaterial&&(this.fillMaterial.dispose(),this.fillMaterial=null),this.outlineMaterial&&(this.outlineMaterial.dispose(),this.outlineMaterial=null)}}const $i=Object.freeze({CLEAR:"clear",EXPOSED:"exposed",BLOCKED:"blocked",UNREACHABLE:"unreachable"}),Gs=Object.freeze({SHELTER:"shelter",HOSPITAL:"hospital",CUSTOM:"custom"}),Ig=Object.freeze({allowExposed:!0,exposedCostMultiplier:5,exposedDepthWeight:4,allowUnknown:!1,unknownCostMultiplier:20,maxSnapDistanceMeters:350,alternativePenaltyMultiplier:3.5,maxAlternativeOverlapRatio:.85,minAlternativeLengthDeltaMeters:5});class Ng{constructor(){this.heap=[]}push(e,t){this.heap.push({item:e,priority:t}),this._bubbleUp(this.heap.length-1)}pop(){if(this.heap.length===0)return null;const e=this.heap[0],t=this.heap.pop();return this.heap.length>0&&(this.heap[0]=t,this._sinkDown(0)),e.item}isEmpty(){return this.heap.length===0}_bubbleUp(e){const t=this.heap[e];for(;e>0;){const i=e-1>>1,n=this.heap[i];if(t.priority>=n.priority)break;this.heap[e]=n,e=i}this.heap[e]=t}_sinkDown(e){const t=this.heap.length,i=this.heap[e];for(;;){const n=(e<<1)+1,r=n+1;let a=null;if(n<t&&this.heap[n].priority<i.priority&&(a=n),r<t){const o=this.heap[r],l=a===null?i.priority:this.heap[n].priority;o.priority<l&&(a=r)}if(a===null)break;this.heap[e]=this.heap[a],e=a}this.heap[e]=i}}class Ug{constructor(e,t={}){if(!e)throw new Error("RoutingService: RoadNetwork instance is required.");this.roadNetwork=e,this.config={...Ig,...t},this.adjacency=new Map,this._buildAdjacency()}_buildAdjacency(){this.adjacency.clear();for(const e of this.roadNetwork.nodes.values())this.adjacency.set(e.id,[]);for(const e of this.roadNetwork.edges.values()){const t=e.fromNodeId,i=e.toNodeId;this.adjacency.has(t)&&this.adjacency.get(t).push({edgeId:e.id,targetNodeId:i,lengthMeters:e.lengthMeters}),this.adjacency.has(i)&&this.adjacency.get(i).push({edgeId:e.id,targetNodeId:t,lengthMeters:e.lengthMeters})}}syncAdjacency(){this._buildAdjacency()}getEdgeCost(e,t=null){if(!e)return{traversable:!1,cost:1/0,reason:"Invalid or missing edge",status:"unknown"};const i=e.lengthMeters||1,n=t&&t[e.id]?t[e.id]:1;if(e.status===Le.IMPASSABLE)return{traversable:!1,cost:1/0,reason:`Impassable water depth (${(e.maxWaterDepth||0).toFixed(2)}m >= 0.15m)`,status:Le.IMPASSABLE};if(e.status===Le.UNKNOWN)return this.config.allowUnknown?{traversable:!0,cost:i*this.config.unknownCostMultiplier*n,reason:"Unverified road permitted with severe penalty",status:Le.UNKNOWN}:{traversable:!1,cost:1/0,reason:"Unknown/unverified terrain elevation (conservative safety policy excludes unconfirmed roads)",status:Le.UNKNOWN};if(e.status===Le.EXPOSED){if(!this.config.allowExposed)return{traversable:!1,cost:1/0,reason:"Water-exposed road excluded under strict dry-only policy",status:Le.EXPOSED};const r=this.roadNetwork.config.impassableDepthThreshold||.15,a=e.maxWaterDepth>0?Math.min(1,e.maxWaterDepth/r):.5,o=this.config.exposedCostMultiplier+a*this.config.exposedDepthWeight;return{traversable:!0,cost:i*o*n,reason:`Exposed to ${(e.maxWaterDepth||0).toFixed(2)}m water (penalized ${o.toFixed(1)}x)`,status:Le.EXPOSED}}return{traversable:!0,cost:i*n,reason:"Dry, unaffected road segment",status:Le.UNAFFECTED}}snapPoint(e,t,i=this.config.maxSnapDistanceMeters){let n=i,r=null,a=null,o=null;for(const l of this.roadNetwork.nodes.values()){const c=Math.hypot(l.x-e,l.z-t);c<n&&(n=c,r=l,o={x:l.x,z:l.z})}for(const l of this.roadNetwork.edges.values()){const c=l.vertices;if(!(!c||c.length<2))for(let d=0;d<c.length-1;d++){const h=c[d],u=c[d+1],p=u.x-h.x,g=u.z-h.z,v=p*p+g*g;if(v===0)continue;const m=Math.max(0,Math.min(1,((e-h.x)*p+(t-h.z)*g)/v)),f=h.x+m*p,y=h.z+m*g,_=Math.hypot(f-e,y-t);if(_<n){n=_,a=l,o={x:f,z:y};const x=this.roadNetwork.nodes.get(l.fromNodeId),L=this.roadNetwork.nodes.get(l.toNodeId);if(x&&L){const R=Math.hypot(x.x-f,x.z-y),A=Math.hypot(L.x-f,L.z-y);r=R<=A?x:L}}}}return r?{snapped:!0,node:r,edge:a,distance:Math.round(n*10)/10,point:o}:{snapped:!1,node:null,edge:null,distance:1/0,point:{x:e,z:t},reason:`Location is too far from any mapped road network segment (exceeds ${i}m limit)`}}findRoute(e,t,i={}){const n=i.routeType||Gs.SHELTER,r=i.edgePenalties||null,a=i.bannedEdgeIds?new Set(i.bannedEdgeIds):null,o=this.snapPoint(e.x,e.z);if(!o.snapped)return this._buildFailureResult(e,t,n,"INSUFFICIENT_GRAPH_COVERAGE",o.reason);const l=this.snapPoint(t.x,t.z);if(!l.snapped)return this._buildFailureResult(e,t,n,"INSUFFICIENT_GRAPH_COVERAGE",l.reason);const c=o.node,d=l.node;if(c.id===d.id)return this._buildDirectArrivalResult(e,t,c,n);if(c.componentId!==d.componentId)return this._buildFailureResult(e,t,n,"DISCONNECTED_NETWORK",`Start (Component #${c.componentId}) and Destination (Component #${d.componentId}) belong to disconnected road network components. No physical road connection exists in dataset.`);const h=new Map,u=new Map,p=new Ng;h.set(c.id,0),p.push(c.id,0);let g=!1;const v=new Map;for(;!p.isEmpty();){const N=p.pop();if(N===d.id){g=!0;break}const U=h.get(N),B=this.adjacency.get(N)||[];for(const H of B){const z=H.edgeId,X=H.targetNodeId;if(a&&a.has(z))continue;const G=this.roadNetwork.edges.get(z),J=this.getEdgeCost(G,r);if(!J.traversable){v.has(z)||v.set(z,{edgeId:z,featureId:G?.featureId,status:J.status,reason:J.reason});continue}const ee=U+J.cost;(!h.has(X)||ee<h.get(X))&&(h.set(X,ee),u.set(X,{prevNodeId:N,edgeId:z,edgeCost:J.cost,edgeLength:G.lengthMeters,edgeStatus:J.status,maxDepth:G.maxWaterDepth||0}),p.push(X,ee))}}if(!g){const N=Array.from(v.values()),U=N.some(X=>X.status===Le.IMPASSABLE),B=N.some(X=>X.status===Le.UNKNOWN);let H="BLOCKED_ROADS",z="All connecting paths in the network are blocked by impassable flood waters (>0.15m depth).";return B&&!U?(H="UNKNOWN_ROAD_CONDITIONS",z="Connecting paths are blocked by unverified road segments under conservative policy."):N.length===0&&(H="NO_CONNECTING_EDGES",z="No traversable path exists within graph topology."),this._buildFailureResult(e,t,n,H,z,N)}const m=[],f=[];let y=d.id,_=0,x=h.get(d.id)||0,L=0,R=0,A=!1;for(;y!==c.id;){f.push(y);const N=u.get(y);if(!N)break;const U=this.roadNetwork.edges.get(N.edgeId);U&&(m.push(U),_+=U.lengthMeters,U.status===Le.EXPOSED&&(A=!0,R+=U.exposedLengthMeters||U.lengthMeters),(U.maxWaterDepth||0)>L&&(L=U.maxWaterDepth)),y=N.prevNodeId}f.push(c.id),f.reverse(),m.reverse();const w=this._buildPathPolyline(o,l,m,c,d),M=A?$i.EXPOSED:$i.CLEAR,S=_>0?Math.min(1,R/_):0,C=M===$i.CLEAR?`Clear, 100% dry route (${Math.round(_)}m across ${m.length} road segments).`:`Route exposed to shallow water (max ${L.toFixed(2)}m, ${Math.round(R)}m exposed / ${Math.round(S*100)}%). Navigable with caution under emergency policy.`;return{isValid:!0,isReachable:!0,status:M,routeType:n,origin:{...e,snappedDistance:o.distance},destination:{...t,snappedDistance:l.distance},startNodeId:c.id,destNodeId:d.id,edgeCount:m.length,edgeIds:m.map(N=>N.id),edges:m,nodeIds:f,totalDistanceMeters:Math.round(_*10)/10,totalCost:Math.round(x*10)/10,maxWaterDepth:Math.round(L*100)/100,exposedLengthMeters:Math.round(R*10)/10,exposedRatio:Math.round(S*100)/100,pathCoordinates:w,blockedEdges:[],explanation:C,provenance:t.provenance||"dataset"}}findNearestReachableDestination(e,t,i={}){if(!t||t.length===0)return{bestDestination:null,route:null,evaluatedCandidates:[],reason:"No candidate destinations provided."};const n=i.routeType||Gs.SHELTER,r=[];for(const l of t){const c=Math.hypot(l.x-e.x,l.z-e.z),d=this.findRoute(e,l,{...i,routeType:n});r.push({candidate:l,euclideanDistanceMeters:Math.round(c*10)/10,isReachable:d.isReachable,routeCost:d.isReachable?d.totalCost:1/0,routeDistanceMeters:d.isReachable?d.totalDistanceMeters:1/0,routeStatus:d.status,failureReason:d.isReachable?null:d.explanation,route:d})}const a=r.filter(l=>l.isReachable);if(a.length===0){r.sort((c,d)=>c.euclideanDistanceMeters-d.euclideanDistanceMeters);const l=r[0];return{bestDestination:null,route:null,evaluatedCandidates:r,reason:`No destinations are reachable within connected network. Nearest straight-line destination (${l.candidate.name||l.candidate.id}, ${l.euclideanDistanceMeters}m) is unreachable: ${l.failureReason}`}}a.sort((l,c)=>l.routeCost-c.routeCost);const o=a[0];return{bestDestination:o.candidate,route:o.route,evaluatedCandidates:r,reason:`Nearest reachable destination found: ${o.candidate.name||o.candidate.id} (Route distance: ${o.routeDistanceMeters}m, Route cost: ${o.routeCost}).`}}findAlternativeRoutes(e,t,i={}){const n=this.findRoute(e,t,i);if(!n.isReachable||n.edges.length<=1)return{primaryRoute:n,alternativeRoute:null,hasAlternative:!1,explanation:n.isReachable?"Route is too short or simple for distinct alternatives.":n.explanation};const r=new Set(n.edgeIds),a={};for(const v of r)a[v]=this.config.alternativePenaltyMultiplier;const o=this.findRoute(e,t,{...i,edgePenalties:a});if(!o.isReachable)return{primaryRoute:n,alternativeRoute:null,hasAlternative:!1,explanation:"No viable alternative route exists in the connected graph."};const l=new Set(o.edgeIds);let c=0;for(const v of l)r.has(v)&&c++;const d=c/Math.max(1,Math.min(r.size,l.size)),h=Math.abs(o.totalDistanceMeters-n.totalDistanceMeters);if(d>this.config.maxAlternativeOverlapRatio&&h<this.config.minAlternativeLengthDeltaMeters)return{primaryRoute:n,alternativeRoute:null,hasAlternative:!1,explanation:"Single corridor network; no distinct alternative route exists."};const u=Math.round((o.totalDistanceMeters-n.totalDistanceMeters)*10)/10,p=u>=0?`+${u}m`:`${u}m`,g=`Alternative route (${o.totalDistanceMeters}m, ${p}): ${o.status.toUpperCase()} (${Math.round((1-d)*100)}% path divergence).`;return{primaryRoute:n,alternativeRoute:o,hasAlternative:!0,explanation:g}}recalculateRoute(e){return!e||!e.origin||!e.destination?null:this.findRoute(e.origin,e.destination,{routeType:e.routeType})}_buildPathPolyline(e,t,i,n,r){const a=[];a.push({x:e.point.x,z:e.point.z});let o={x:n.x,z:n.z};a.push({x:o.x,z:o.z});for(let c=0;c<i.length;c++){const h=i[c].vertices;if(!h||h.length===0)continue;const u=Math.hypot(h[0].x-o.x,h[0].z-o.z),p=Math.hypot(h[h.length-1].x-o.x,h[h.length-1].z-o.z),v=u<=p?h:[...h].reverse();for(const m of v)a.push({x:m.x,z:m.z});o=v[v.length-1]}a.push({x:t.point.x,z:t.point.z});const l=[];for(let c=0;c<a.length;c++)if(c===0)l.push(a[c]);else{const d=l[l.length-1];Math.hypot(a[c].x-d.x,a[c].z-d.z)>.1&&l.push(a[c])}return l}_buildDirectArrivalResult(e,t,i,n){const r=Math.hypot(t.x-e.x,t.z-e.z);return{isValid:!0,isReachable:!0,status:$i.CLEAR,routeType:n,origin:e,destination:t,startNodeId:i.id,destNodeId:i.id,edgeCount:0,edgeIds:[],edges:[],nodeIds:[i.id],totalDistanceMeters:Math.round(r*10)/10,totalCost:0,maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,pathCoordinates:[{x:e.x,z:e.z},{x:t.x,z:t.z}],blockedEdges:[],explanation:`Origin is directly adjacent to destination (${Math.round(r)}m).`,provenance:t.provenance||"dataset"}}_buildFailureResult(e,t,i,n,r,a=[]){return{isValid:!1,isReachable:!1,status:$i.BLOCKED,errorCode:n,routeType:i,origin:e,destination:t,startNodeId:null,destNodeId:null,edgeCount:0,edgeIds:[],edges:[],nodeIds:[],totalDistanceMeters:1/0,totalCost:1/0,maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,pathCoordinates:[],blockedEdges:a,explanation:r,provenance:t.provenance||"dataset"}}getHospitalDatasetStatus(e=[]){return e.filter(i=>i.type==="hospital"&&i.provenance==="verified").length===0?{hasVerifiedHospital:!1,warning:"No verified hospital in source dataset. Proposed medical-response site — unverified."}:{hasVerifiedHospital:!0,warning:""}}}class Fg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Route_Visualization_Layer",this.scene.add(this.group),this.disposables=[],this.activeRoute=null,this.activeAlternative=null,this.visible=!0,this.visualOffsetMeters=.85}displayRoute(e,t=null){this.clearRoute(),e&&(this.activeRoute=e,this.activeAlternative=t,t&&t.isReachable&&t.pathCoordinates?.length>1&&this._renderPath(t,!0),e.pathCoordinates&&e.pathCoordinates.length>1&&this._renderPath(e,!1),this._renderEndpoints(e))}_renderPath(e,t=!1){const i=e.pathCoordinates;if(!i||i.length<2)return;let n=11032055,r=12616956;e.routeType===Gs.HOSPITAL&&(n=3900150,r=6333946),(!e.isReachable||e.status===$i.BLOCKED)&&(n=15680580,r=16281969);const a=[];for(const g of i){const m=(this.terrainManager?.getElevationAt(g.x,g.z)??130)+this.visualOffsetMeters+(t?-.15:0);a.push(new P(g.x,m,g.z))}const o=new dt().setFromPoints(a),l=new Ii({color:n,linewidth:t?2:4,transparent:t,opacity:t?.6:1,depthTest:!0}),c=new Ea(o,l);c.renderOrder=t?20:30,this.group.add(c);const d=a.map(g=>new P(g.x,g.y+.1,g.z)),h=new dt().setFromPoints(d),u=new Ii({color:r,linewidth:t?4:8,transparent:!0,opacity:t?.25:.55,blending:Fr,depthTest:!0}),p=new Ea(h,u);p.renderOrder=t?19:29,this.group.add(p),this.disposables.push(o,l,h,u)}_renderEndpoints(e){if(!e.origin||!e.destination)return;const t=this.terrainManager?.getElevationAt(e.origin.x,e.origin.z)??130,i=new Ni(1.5,4,24);i.rotateX(-Math.PI/2);const n=new Vt({color:1096065,transparent:!0,opacity:.85,side:yt}),r=new Je(i,n);r.position.set(e.origin.x,t+.45,e.origin.z),this.group.add(r);let a=e.routeType===Gs.HOSPITAL?3900150:11032055;e.isReachable||(a=15680580);const o=this.terrainManager?.getElevationAt(e.destination.x,e.destination.z)??130,l=new Ni(2,5.5,24);l.rotateX(-Math.PI/2);const c=new Vt({color:a,transparent:!0,opacity:.85,side:yt}),d=new Je(l,c);d.position.set(e.destination.x,o+.45,e.destination.z),this.group.add(d),this.disposables.push(i,n,l,c)}clearRoute(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[];this.group.children.length>0;)this.group.remove(this.group.children[0]);this.activeRoute=null,this.activeAlternative=null}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){this.clearRoute(),this.group.parent&&this.group.parent.remove(this.group)}}class Og{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Affected_Clusters_Layer",this.scene.add(this.group),this.disposables=[],this.clusters=[],this.clusterMeshes=[],this.visible=!0,this.selectedClusterId=null}updateClusters(e){this.dispose(),this.clusters=e||[],this.clusterMeshes=[];const t=18,i=.9;this.clusters.forEach(n=>{const r=n.centroid.x,a=n.centroid.z,o=this.terrainManager?.getElevationAt(r,a)??130;let l=16096779,c=11817737;n.maxWaterDepth>=2?(l=15680580,c=10033947):n.maxWaterDepth>=1?(l=16347926,c=12730636):n.maxWaterDepth<.3&&(l=15381256,c=8736014);const d=Math.max(20,n.radiusMeters),h=new Ni(d*.85,d,32);h.rotateX(-Math.PI/2);const u=new Vt({color:l,transparent:!0,opacity:.35,side:yt}),p=new Je(h,u);p.position.set(r,o+.5,a),this.group.add(p);const g=new In(i*.6,i,t,10),v=new Zt({color:l,emissive:c,emissiveIntensity:.7,roughness:.3,metalness:.6}),m=new Je(g,v);m.position.set(r,o+t/2,a),this.group.add(m);const f=new Ks(i*2.2,12,12),y=new Zt({color:l,emissive:l,emissiveIntensity:.9}),_=new Je(f,y);_.position.set(r,o+t+i*2,a),this.group.add(_),this.disposables.push(h,u,g,v,f,y);const x=new gi;x.setFromCenterAndSize(new P(r,o+t/2,a),new P(d*2,t+10,d*2)),this.clusterMeshes.push({id:n.id,cluster:n,bounds:x,ringMesh:p,ringMat:u,cylinderMat:v,headMat:y,baseColor:l,baseEmissive:c})}),this.group.visible=this.visible}selectCluster(e){this.selectedClusterId=e;for(const t of this.clusterMeshes){const i=t.id===e;t.ringMat.opacity=i?.75:.35,t.cylinderMat.emissiveIntensity=i?1:.7}}intersectCluster(e){if(!e||!this.visible)return null;let t=null,i=1/0;for(const n of this.clusterMeshes)if(n.bounds){const r=e.intersectBox(n.bounds,new P);if(r){const a=e.origin.distanceTo(r);a<i&&(i=a,t=n.cluster)}}return t}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.clusterMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0])}}class Bg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Proposed_Sites_Layer",this.scene.add(this.group),this.disposables=[],this.sites=[],this.siteMeshes=[],this.visible=!0,this.selectedSiteId=null}updateSites(e){this.dispose(),this.sites=e||[],this.siteMeshes=[];const t=22,i=1;this.sites.forEach(n=>{const r=n.groundElevation??(this.terrainManager?.getElevationAt(n.x,n.z)||140);let a=16096779,o=11817737;n.isFlooded?(a=15680580,o=10033947):n.score>=75?(a=16436245,o=10576391):n.score<55&&(a=16347926,o=12730636);const l=new In(i*.4,i*.9,t,8),c=new Zt({color:a,emissive:o,emissiveIntensity:.8,roughness:.25,metalness:.8}),d=new Je(l,c);d.position.set(n.x,r+t/2,n.z),this.group.add(d);const h=new Xa(i*2.2,0),u=new Zt({color:a,emissive:a,emissiveIntensity:.95,roughness:.2}),p=new Je(h,u);p.position.set(n.x,r+t+i*2,n.z),this.group.add(p);const g=new Ni(i*2.5,i*8,24);g.rotateX(-Math.PI/2);const v=new Vt({color:a,transparent:!0,opacity:.45,side:yt}),m=new Je(g,v);m.position.set(n.x,r+.4,n.z),this.group.add(m),this.disposables.push(l,c,h,u,g,v);const f=new gi;f.setFromCenterAndSize(new P(n.x,r+t/2,n.z),new P(i*10,t+10,i*10)),this.siteMeshes.push({id:n.id,site:n,bounds:f,columnMat:c,headMat:u,ringMat:v})}),this.group.visible=this.visible}selectSite(e){this.selectedSiteId=e;for(const t of this.siteMeshes){const i=t.id===e;t.ringMat.opacity=i?.85:.45,t.columnMat.emissiveIntensity=i?1:.8}}intersectProposedSite(e){if(!e||!this.visible)return null;let t=null,i=1/0;for(const n of this.siteMeshes)if(n.bounds){const r=e.intersectBox(n.bounds,new P);if(r){const a=e.origin.distanceTo(r);a<i&&(i=a,t=n.site)}}return t}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.siteMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0])}}const Be=Object.freeze({UNAFFECTED:"unaffected",LOW:"low",MODERATE:"moderate",HIGH:"high",CRITICAL:"critical",UNKNOWN:"unknown"}),zg=Object.freeze({lowThreshold:.3,moderateThreshold:1,highThreshold:2,minDepthPositive:.001}),Gn=Object.freeze({CRITICAL:"critical",HIGH:"high",MODERATE:"moderate",LOW:"low",UNKNOWN:"unknown"}),Bt=Object.freeze({CONNECTED:"connected",ACCESS_DEGRADED:"access_degraded",ROUTE_LOST:"route_lost",DISCONNECTED_IN_SOURCE:"disconnected_in_source",UNKNOWN:"unknown"}),kg=Object.freeze({maxFloodExposureScore:50,maxRoadAccessScore:25,maxEmergencyServiceScore:25,criticalScoreThreshold:75,highScoreThreshold:50,moderateScoreThreshold:25});class Hg{constructor(e,t={}){this.terrainManager=e,this.config={...zg,...t}}classifyBuilding(e,t){if(!e||!e.center)return{id:e?.id||"unknown",category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:null,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Missing building geometry or coordinates",isValid:!1};const{x:i,z:n}=e.center,r=(typeof e.baseElevationM=="number"?e.baseElevationM:null)??(this.terrainManager&&typeof this.terrainManager.getElevationAt=="function"?this.terrainManager.getElevationAt(i,n):null);if(r===null||Number.isNaN(r)||r<=0||r===-9999)return{id:e.id,category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:null,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Missing or unreliable DGM1 bare-earth elevation at building centroid (NoData)",isValid:!1};const o=(typeof t=="function"?t:t&&typeof t.getWaterElevationAt=="function"?(g,v)=>t.getWaterElevationAt(g,v):()=>typeof t=="number"?t:124)(i,n);if(o===null||Number.isNaN(o))return{id:e.id,category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:Math.round(r*100)/100,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Water surface elevation could not be evaluated at building coordinates",isValid:!1};const l=Math.max(0,o-r),c=Math.round(l*100)/100;let d=0,h=.05;c>0&&(d=1);let u=Be.UNAFFECTED,p="Structure foundation is above local water surface (dry).";return c>=this.config.highThreshold?(u=Be.CRITICAL,p=`Severe inundation (${c.toFixed(2)}m >= ${this.config.highThreshold.toFixed(2)}m). Ground floor submerged.`):c>=this.config.moderateThreshold?(u=Be.HIGH,p=`Substantial immersion (${c.toFixed(2)}m >= ${this.config.moderateThreshold.toFixed(2)}m). Serious ingress risk.`):c>=this.config.lowThreshold?(u=Be.MODERATE,p=`Moderate flood contact (${c.toFixed(2)}m >= ${this.config.lowThreshold.toFixed(2)}m). Ground-level threshold crossed.`):c>=this.config.minDepthPositive&&(u=Be.LOW,p=`Shallow exposure (${c.toFixed(2)}m < ${this.config.lowThreshold.toFixed(2)}m). Basement/perimeter contact only.`),{id:e.id,category:u,exposureCategory:u,groundElevation:Math.round(r*100)/100,waterElevation:Math.round(o*100)/100,waterDepth:c,estimatedDepthM:c,affectedRatio:d,uncertaintyMeters:h,reason:p,isValid:!0,center:{x:i,z:n},areaSqM:e.areaSqM||100,floodedHistorical:e.flooded===!0}}classifyBuildings(e,t){return e?e.map(i=>this.classifyBuilding(i,t)):[]}evaluateAll(e,t){const i=new Map,n=[],r={total:0,unaffected:0,low:0,moderate:0,high:0,critical:0,unknown:0,totalAffected:0,maxWaterDepth:0};for(const a of e){const o=this.classifyBuilding(a,t);i.set(a.id,o),r.total++,o.category===Be.UNAFFECTED?r.unaffected++:o.category===Be.LOW?(r.low++,r.totalAffected++,n.push(o)):o.category===Be.MODERATE?(r.moderate++,r.totalAffected++,n.push(o)):o.category===Be.HIGH?(r.high++,r.totalAffected++,n.push(o)):o.category===Be.CRITICAL?(r.critical++,r.totalAffected++,n.push(o)):o.category===Be.UNKNOWN&&r.unknown++,o.waterDepth&&o.waterDepth>r.maxWaterDepth&&(r.maxWaterDepth=o.waterDepth)}return{classifiedBuildings:i,summary:r,affectedBuildings:n}}calculateBuildingRisk(e,t={},i={}){const n={...kg,...i},r=e?.category||Be.UNKNOWN,a=typeof e?.waterDepth=="number"?e.waterDepth:0,o=r===Be.UNKNOWN||e?.groundElevation===null;let l=0,c="Dry ground contact (no flood depth detected).";if(o)l=30,c="Missing or unreliable ground elevation data (NoData). Cannot confirm flood clearance.";else if(r===Be.CRITICAL)l=50,c=`Critical inundation (${a.toFixed(2)}m >= 2.00m). Ground floor submerged.`;else if(r===Be.HIGH){const x=Math.min(10,Math.max(0,(a-1)*10));l=Math.round(38+x),c=`High structural immersion (${a.toFixed(2)}m). Serious ingress risk.`}else if(r===Be.MODERATE){const x=Math.min(10,Math.max(0,(a-.3)/.7*10));l=Math.round(25+x),c=`Moderate flood contact (${a.toFixed(2)}m). Ground-level threshold crossed.`}else if(r===Be.LOW){const x=Math.min(10,Math.max(0,(a-.05)/.25*10));l=Math.round(12+x),c=`Shallow exposure (${a.toFixed(2)}m < 0.30m). Basement/perimeter contact only.`}const d=t?.accessStatus||Bt.CONNECTED;let h=0,u="Direct, dry access to road network.";d===Bt.ROUTE_LOST?(h=25,u="Evacuation route to shelter lost due to newly flooded impassable road segments."):d===Bt.DISCONNECTED_IN_SOURCE?(h=20,u="Isolated or disconnected in source road network data (no baseline evacuation corridor)."):d===Bt.ACCESS_DEGRADED?(h=12,u="Access corridor degraded: connecting roads traverse shallow flood water."):d===Bt.UNKNOWN?(h=15,u="Road network connection or passability status cannot be determined."):d===Bt.CONNECTED&&(h=0,u="Connected to passable, dry road corridor.");const p=t?.canReachShelter===!0,g=t?.shelterRouteStatus||(p?"clear":"none");let v=0,m="Reachable shelter available via dry route.";p?g==="exposed"?(v=12,m="Nearest shelter reachable, but evacuation route traverses exposed road segments."):(v=0,m=`Nearest shelter (${t.nearestShelter?.name||"Shelter"}) reachable via dry route.`):(v=25,m="No reachable shelter available in road network under current scenario.");const f=Math.min(100,Math.max(0,Math.round(l+h+v)));let y=Gn.LOW;o?y=Gn.UNKNOWN:r===Be.CRITICAL||f>=n.criticalScoreThreshold?y=Gn.CRITICAL:r===Be.HIGH||f>=n.highScoreThreshold?y=Gn.HIGH:(r===Be.MODERATE||f>=n.moderateScoreThreshold)&&(y=Gn.MODERATE);const _=`${y.toUpperCase()} Priority (${f}/100) — Flood: ${l}/50 (${r.toUpperCase()}), Road: ${h}/25 (${d.replace(/_/g," ").toUpperCase()}), Services: ${v}/25 (${p?"Reachable":"Isolated"}).`;return{buildingId:e?.id||"unknown",totalScore:f,priorityTier:y,isUnknown:o,subScores:{floodExposure:l,roadAccess:h,emergencyService:v},reasons:{flood:c,road:u,service:m},explanation:_,hospitalStatus:{hasVerifiedHospital:!1,warning:"No verified municipal hospital in source dataset. Proposed medical-response site fac-001 is unverified. Note: Absence in research dataset does not prove that a real-world hospital or emergency medical service does not exist."},disclaimer:"Conceptual decision-support indicator only. Not a validated structural or life-safety assessment."}}rankBuildings(e){return!e||!Array.isArray(e)?[]:[...e].sort((t,i)=>{const n=t.risk?.totalScore??t.totalScore??0,r=i.risk?.totalScore??i.totalScore??0;if(r!==n)return r-n;const a=t.exposure?.waterDepth??t.waterDepth??0;return(i.exposure?.waterDepth??i.waterDepth??0)-a})}}const Gg=Object.freeze({clusterNeighborhoodMeters:70,minClusterSize:1,maxRoadSnapDistanceMeters:160,conceptualOccupantsPerBuilding:2.5});class Vg{constructor(e,t={}){this.roadNetwork=e,this.config={...Gg,...t},this.clusters=[]}createClusters(e){if(this.clusters=[],!e||e.length===0)return this.clusters;const t=e.length,i=this.config.clusterNeighborhoodMeters*this.config.clusterNeighborhoodMeters,n=Array.from({length:t},()=>[]);for(let o=0;o<t;o++){const l=e[o];for(let c=o+1;c<t;c++){const d=e[c],h=l.center.x-d.center.x,u=l.center.z-d.center.z;h*h+u*u<=i&&(n[o].push(c),n[c].push(o))}}const r=new Uint8Array(t),a=[];for(let o=0;o<t;o++){if(r[o])continue;const l=[],c=[o];for(r[o]=1;c.length>0;){const d=c.shift();l.push(d);for(const h of n[d])r[h]||(r[h]=1,c.push(h))}a.push(l.map(d=>e[d]))}return a.sort((o,l)=>{if(l.length!==o.length)return l.length-o.length;const c=o.reduce((h,u)=>h+u.center.x,0)/o.length,d=l.reduce((h,u)=>h+u.center.x,0)/l.length;return c-d}),this.clusters=a.map((o,l)=>{const c=`cluster-${l+1}`;let d=0,h=0,u=0,p=0;const g={low:0,moderate:0,high:0,critical:0,unknown:0};for(const L of o)d+=L.center.x,h+=L.center.z,p+=L.areaSqM||100,L.waterDepth&&L.waterDepth>u&&(u=L.waterDepth),L.category===Be.LOW?g.low++:L.category===Be.MODERATE?g.moderate++:L.category===Be.HIGH?g.high++:L.category===Be.CRITICAL?g.critical++:g.unknown++;const v=d/o.length,m=h/o.length;let f=0;for(const L of o){const R=Math.hypot(L.center.x-v,L.center.z-m);R>f&&(f=R)}const y=Math.max(25,Math.round(f+15)),_=this._resolveClusterOrigin(v,m,o),x=Math.round(o.length*this.config.conceptualOccupantsPerBuilding);return{id:c,index:l+1,buildingCount:o.length,buildingIds:o.map(L=>L.id),buildings:o,centroid:{x:Math.round(v*10)/10,z:Math.round(m*10)/10},radiusMeters:y,totalAreaSqM:Math.round(p),maxWaterDepth:Math.round(u*100)/100,distribution:g,estimatedPopulation:{count:x,isVerified:!1,disclaimer:"Conceptual estimate (~2.5 persons/building). Census population unavailable in source dataset."},representativeOrigin:_}}),console.log(`[ClusterService] Formed ${this.clusters.length} affected-area evacuation clusters from ${e.length} flooded structures.`),this.clusters}_resolveClusterOrigin(e,t,i){if(!this.roadNetwork||!this.roadNetwork.nodes||this.roadNetwork.nodes.size===0)return{x:e,z:t,isConnectedToRoads:!1,roadNodeId:null,distanceMeters:1/0,reason:"No road network loaded in environment"};let n=null,r=this.config.maxRoadSnapDistanceMeters,a={x:e,z:t};for(const o of this.roadNetwork.nodes.values()){const l=Math.hypot(o.x-e,o.z-t);l<r&&(r=l,n=o,a={x:o.x,z:o.z});for(const c of i){const d=Math.hypot(o.x-c.center.x,o.z-c.center.z);d<r&&(r=d,n=o,a={x:o.x,z:o.z})}}return n?{x:a.x,z:a.z,isConnectedToRoads:!0,roadNodeId:n.id,componentId:n.componentId,distanceMeters:Math.round(r*10)/10,reason:`Connected to Road Node ${n.id} in Component #${n.componentId} (${Math.round(r)}m from cluster).`}:{x:e,z:t,isConnectedToRoads:!1,roadNodeId:null,distanceMeters:1/0,reason:`No road network segment found within ${this.config.maxRoadSnapDistanceMeters}m of cluster perimeter. Origin marked unconnected.`}}routeCluster(e,t,i,n={}){if(!e)throw new Error("ClusterService.routeCluster: Cluster object is required.");if(!i)throw new Error("ClusterService.routeCluster: RoutingService instance is required.");if(!e.representativeOrigin||!e.representativeOrigin.isConnectedToRoads)return{isValid:!1,isReachable:!1,status:$i.BLOCKED,clusterId:e.id,origin:e.representativeOrigin,destination:t[0]||null,totalDistanceMeters:1/0,totalCost:1/0,explanation:`Cluster ${e.id} has no valid connection to the road graph (${e.representativeOrigin?.reason||"unconnected"}). Evacuation routing cannot traverse without road connectivity.`};const r={x:e.representativeOrigin.x,z:e.representativeOrigin.z,id:`${e.id}-origin`,name:`${e.id} Evacuation Origin (${e.buildingCount} structures)`};return i.findNearestReachableDestination(r,t,n)}getCluster(e){return this.clusters.find(t=>t.id===e)||null}}const Wg=Object.freeze([{id:"prop-01",name:"North Terrace Emergency Staging Area",type:"shelter",x:-220,z:-420,intendedRole:"High-capacity emergency shelter & supply distribution post",description:"Elevated northern terrace bench overlooking Dernau core with direct access to northern road corridor."},{id:"prop-02",name:"Southwest Vineyard Assembly Post",type:"shelter",x:-580,z:280,intendedRole:"Secondary residential evacuation shelter",description:"Elevated southwest slope terrace above flood zone with contiguous road access."},{id:"prop-03",name:"North-East Plateau Medical Field Station",type:"hospital",x:350,z:-350,intendedRole:"Proposed medical-response & triage staging site",description:"Elevated plateau margin with road connectivity to regional eastern highway."},{id:"prop-04",name:"Lower Valley Terrace Margin",type:"shelter",x:50,z:120,intendedRole:"Contingency valley assembly point (Low margin)",description:"Lower terrace near river floodplain margin (designed to test scenario submergence & disqualification)."}]);class $g{constructor(e,t,i=Wg){this.terrainManager=e,this.roadNetwork=t,this.candidates=i.map(n=>({...n})),this.evaluatedSites=[]}evaluateSites(e,t=[]){const i=typeof e=="function"?e:()=>typeof e=="number"?e:124;return this.evaluatedSites=this.candidates.map(n=>{const r=this.terrainManager?.getElevationAt(n.x,n.z)??null;if(r===null||Number.isNaN(r)||r<=0||r===-9999)return{...n,isProposed:!0,isVerifiedFacility:!1,isViable:!1,isFlooded:!1,score:0,rank:"DISQUALIFIED",groundElevation:null,waterElevation:null,clearanceMeters:null,scoreBreakdown:{elevation:0,road:0,slope:0,cluster:0},reason:"Missing or unreliable DGM1 bare-earth DEM elevation at candidate coordinates (NoData).",statusLabel:n.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."};const a=i(n.x,n.z),o=r-a;if(o<=0){const w=Math.abs(o);return{...n,isProposed:!0,isVerifiedFacility:!1,isViable:!1,isFlooded:!0,score:0,rank:"DISQUALIFIED (FLOODED)",groundElevation:Math.round(r*10)/10,waterElevation:Math.round(a*10)/10,clearanceMeters:Math.round(o*100)/100,waterDepth:Math.round(w*100)/100,scoreBreakdown:{elevation:0,road:0,slope:0,cluster:0},reason:`Site is submerged by ${w.toFixed(2)}m of flood water at water level ${a.toFixed(1)}m MSL. Disqualified.`,statusLabel:n.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."}}let l=null,c=1/0;if(this.roadNetwork&&this.roadNetwork.nodes)for(const w of this.roadNetwork.nodes.values()){const M=Math.hypot(w.x-n.x,w.z-n.z);M<c&&(c=M,l=w)}const d=Math.min(35,Math.max(0,Math.round(o*5)));let h=0,u="unknown",p=null;if(l&&c<=120){p=l.id,c<=30?h+=20:c<=65?h+=14:h+=8;let w=!1,M=!1;for(const S of l.edgeIds){const C=this.roadNetwork.edges.get(S);C&&(C.status===Le.UNAFFECTED?w=!0:C.status===Le.EXPOSED&&(M=!0))}w?(h+=15,u="dry_connected"):M?(h+=6,u="exposed_connected"):(h+=0,u="impassable_connected")}else u="unconnected_far";const g=15,v=this.terrainManager?.getElevationAt(n.x,n.z-g)??r,m=this.terrainManager?.getElevationAt(n.x,n.z+g)??r,f=this.terrainManager?.getElevationAt(n.x+g,n.z)??r,y=this.terrainManager?.getElevationAt(n.x-g,n.z)??r,_=Math.max(Math.abs(v-r),Math.abs(m-r),Math.abs(f-r),Math.abs(y-r))/g;let x=5;_<.08?x=15:_<.18&&(x=10);let L=10;if(t.length>0){let w=1/0;for(const M of t){const S=Math.hypot(M.centroid.x-n.x,M.centroid.z-n.z);S<w&&(w=S)}w<600?L=15:w<1200?L=10:L=5}const R=Math.min(100,Math.max(0,d+h+x+L));let A="UNFAVORABLE";return R>=75?A="EXCELLENT":R>=55?A="VIABLE":R>=35&&(A="MARGINAL"),{...n,isProposed:!0,isVerifiedFacility:!1,isViable:R>=35,isFlooded:!1,score:R,rank:A,groundElevation:Math.round(r*10)/10,waterElevation:Math.round(a*10)/10,clearanceMeters:Math.round(o*10)/10,roadNodeId:p,roadDistanceMeters:Math.round(c*10)/10,roadStatus:u,scoreBreakdown:{elevationClearance:d,roadAccess:h,terrainSlope:x,clusterProximity:L},reason:`${A} suitability score (${R}/100): ${o.toFixed(1)}m elevation clearance above modeled water level, road distance ${c.toFixed(0)}m (${u}).`,statusLabel:n.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."}}),this.evaluatedSites.sort((n,r)=>r.score-n.score),this.evaluatedSites}getSite(e){return this.evaluatedSites.find(t=>t.id===e)||null}}const Xg=Object.freeze({baselineWaterLevel:124,maxRoadSnapDistanceMeters:150,maxFacilitySnapDistanceMeters:300});class qg{constructor(e,t,i,n,r={}){this.terrainManager=e,this.roadNetwork=t,this.routingService=i,this.buildingClassifier=n,this.config={...Xg,...r},this.baselineWaterLevel=this.config.baselineWaterLevel,this.currentWaterLevel=this.config.baselineWaterLevel,this.buildingFeatures=[],this.facilityFeatures=[],this.staticBuildingAccess=new Map,this.staticFacilityAccess=new Map,this.baselineRoadStates=new Map,this.baselineBuildingEvaluations=new Map,this.baselineNodeReachability=new Map,this.baselineShelterStates=new Map,this.currentComparison=null,this.rankedBuildings=[],this.accessLostBuildingIds=new Set}initStaticAccess(e,t){if(this.buildingFeatures=e||[],this.facilityFeatures=t||[],!this.roadNetwork||!this.roadNetwork.nodes||this.roadNetwork.nodes.size===0){console.warn("[ScenarioComparisonService] RoadNetwork is empty or uninitialized.");return}for(const i of this.buildingFeatures){const n=i.center||(i.coords?{x:i.coords[0],z:i.coords[1]}:null);if(!n)continue;let r=null,a=this.config.maxRoadSnapDistanceMeters;for(const o of this.roadNetwork.nodes.values()){const l=Math.hypot(o.x-n.x,o.z-n.z);l<a&&(a=l,r=o)}r?this.staticBuildingAccess.set(i.id,{hasRoadAccess:!0,roadNodeId:r.id,componentId:r.componentId,distanceMeters:Math.round(a*10)/10,reason:`Connected to Road Node ${r.id} in Component #${r.componentId} (${Math.round(a)}m distance).`}):this.staticBuildingAccess.set(i.id,{hasRoadAccess:!1,roadNodeId:null,componentId:null,distanceMeters:1/0,reason:`No road network segment found within ${this.config.maxRoadSnapDistanceMeters}m threshold.`})}for(const i of this.facilityFeatures){const n=i.center||(i.coordsGeo?{x:i.coordsGeo[0],z:i.coordsGeo[1]}:null);if(!n)continue;let r=null,a=this.config.maxFacilitySnapDistanceMeters;for(const o of this.roadNetwork.nodes.values()){const l=Math.hypot(o.x-n.x,o.z-n.z);l<a&&(a=l,r=o)}this.staticFacilityAccess.set(i.id,{roadNodeId:r?r.id:null,componentId:r?r.componentId:null,distanceMeters:r?Math.round(a*10)/10:1/0})}this.computeBaseline(this.baselineWaterLevel)}setBaselineScenario(e){this.baselineWaterLevel=typeof e=="number"?e:124,this.computeBaseline(this.baselineWaterLevel)}computeBaseline(e){if(this.baselineWaterLevel=e,!this.roadNetwork||!this.buildingClassifier)return;this.roadNetwork.evaluateScenario(e),this.baselineRoadStates.clear();for(const[n,r]of this.roadNetwork.edges.entries())this.baselineRoadStates.set(n,{status:r.status,maxWaterDepth:r.maxWaterDepth});const t=[];this.baselineShelterStates.clear();for(const n of this.facilityFeatures){if(n.type!=="shelter")continue;const r=this.terrainManager?.getElevationAt(n.center.x,n.center.z)??n.elevationM,a=r===null||Number.isNaN(r)||r<=0||r===-9999,o=this.staticFacilityAccess.get(n.id);let l="operational";if(a)l="unknown";else if(r<=e+.05)l="inundated";else if(!o||!o.roadNodeId)l="disconnected";else{const c=this.roadNetwork.nodes.get(o.roadNodeId);if(!c||!c.edgeIds||c.edgeIds.size===0)l="disconnected";else{let d=!0;for(const h of c.edgeIds){const u=this.roadNetwork.edges.get(h);if(u&&u.status!==Le.IMPASSABLE&&u.status!==Le.UNKNOWN){d=!1;break}}d&&(l="baseline_isolated")}}this.baselineShelterStates.set(n.id,l),l==="operational"&&t.push(n)}const{reachableNodes:i}=this._computeReachabilityFromShelters(t);this.baselineNodeReachability=i,this.baselineBuildingEvaluations.clear();for(const n of this.buildingFeatures){const r=this.buildingClassifier.classifyBuilding(n,e),a=this.staticBuildingAccess.get(n.id),o=a&&a.roadNodeId?i.get(a.roadNodeId):null,l=!!(o&&o.canReach);this.baselineBuildingEvaluations.set(n.id,{category:r.category,waterDepth:r.waterDepth,hasRoute:l})}console.log(`[ScenarioComparisonService] Baseline scenario established at ${e.toFixed(2)}m MSL (${t.length} operational shelters).`)}_computeReachabilityFromShelters(e){const t=new Map,i=new Map,n=[];for(const r of e){const a=this.staticFacilityAccess.get(r.id);if(!a||!a.roadNodeId)continue;const o=a.roadNodeId;t.has(o)||(t.set(o,{canReach:!0,isDry:!0,nearestShelter:r}),n.push({nodeId:o,isDry:!0,nearestShelter:r}))}for(;n.length>0;){const{nodeId:r,isDry:a,nearestShelter:o}=n.shift(),l=this.roadNetwork.nodes.get(r);if(l)for(const c of l.edgeIds){const d=this.roadNetwork.edges.get(c);if(!d)continue;const h=d.fromNodeId===r?d.toNodeId:d.fromNodeId;if(d.status===Le.IMPASSABLE||d.status===Le.UNKNOWN){i.has(d.fromNodeId)||i.set(d.fromNodeId,[]),i.get(d.fromNodeId).includes(d.id)||i.get(d.fromNodeId).push(d.id),i.has(d.toNodeId)||i.set(d.toNodeId,[]),i.get(d.toNodeId).includes(d.id)||i.get(d.toNodeId).push(d.id);continue}const u=a&&d.status===Le.UNAFFECTED,p=t.get(h);p?!p.isDry&&u&&(p.isDry=!0,n.push({nodeId:h,isDry:!0,nearestShelter:o})):(t.set(h,{canReach:!0,isDry:u,nearestShelter:o}),n.push({nodeId:h,isDry:u,nearestShelter:o}))}}return{reachableNodes:t,blockingEdges:i}}evaluateScenario(e){const t=typeof e=="function"?e:()=>typeof e=="number"?e:124,i=typeof e=="number"?e:typeof e?.waterLevel=="number"?e.waterLevel:typeof e?.currentWaterLevel=="number"?e.currentWaterLevel:t(0,0);this.currentWaterLevel=i,this.roadNetwork.evaluateScenario(t);const n=[],r=[];for(const B of this.facilityFeatures){if(B.type!=="shelter")continue;const H=this.terrainManager?.getElevationAt(B.center.x,B.center.z)??B.elevationM,z=t(B.center.x,B.center.z),X=H===null||Number.isNaN(H)||H<=0||H===-9999,G=z===null||Number.isNaN(z),J=this.staticFacilityAccess.get(B.id);let ee="operational",de=null,ye=!1;if(X||G)ee="unknown";else if(de=Math.max(0,z-H),ye=de>.05,ye)ee="inundated";else if(!J||!J.roadNodeId)ee="disconnected";else{const q=this.roadNetwork.nodes.get(J.roadNodeId);if(!q||!q.edgeIds||q.edgeIds.size===0)ee="disconnected";else{let ne=!0,ge=!1;for(const re of q.edgeIds){const Ae=this.roadNetwork.edges.get(re);Ae&&(Ae.status!==Le.IMPASSABLE&&Ae.status!==Le.UNKNOWN&&(ne=!1),Ae.status===Le.EXPOSED&&(ge=!0))}if(ne){const re=this.baselineShelterStates.get(B.id);re==="disconnected"||re==="baseline_isolated"?ee="disconnected":ee="isolated"}else ge?ee="exposed":ee="operational"}}const Oe={id:B.id,name:B.name,type:"shelter",provenance:B.provenance||"simulated",groundElevation:H!==null?Math.round(H*10)/10:null,waterElevation:Math.round(z*10)/10,siteWaterDepth:de!==null?Math.round(de*100)/100:null,isSiteInundated:ye,roadNodeId:J?.roadNodeId||null,componentId:J?.componentId||null,accessStatus:ee,isVerified:!1,statusLabel:ye?"Site Inundated":ee==="isolated"?"Isolated by Flooded Roads (Site Dry)":ee==="exposed"?"Access Exposed to Shallow Water":ee==="disconnected"?"Disconnected in Source Data":"Operational (Dry Access)",disclaimer:"Simulated shelter from local emergency dataset. Not an officially verified municipal facility."};n.push(Oe),!ye&&J&&J.roadNodeId&&r.push(B)}const{reachableNodes:a,blockingEdges:o}=this._computeReachabilityFromShelters(r),l=[];this.accessLostBuildingIds.clear();let c=0,d=0,h=0,u=0,p=0,g=0,v=0,m=0;for(const B of this.buildingFeatures){const H=this.buildingClassifier.classifyBuilding(B,t),z=this.staticBuildingAccess.get(B.id),X=this.baselineBuildingEvaluations.get(B.id);let G=Bt.CONNECTED,J="",ee=[],de=!1,ye="none",Oe=null;if(H.category===Be.UNKNOWN)m++,G=Bt.UNKNOWN,J="Missing or incomplete DGM1 elevation data. Access state uncertain.";else if(v++,X&&(X.category===Be.UNAFFECTED&&H.category!==Be.UNAFFECTED?p++:(X.category===Be.LOW&&(H.category===Be.MODERATE||H.category===Be.HIGH||H.category===Be.CRITICAL)||X.category===Be.MODERATE&&(H.category===Be.HIGH||H.category===Be.CRITICAL)||X.category===Be.HIGH&&H.category===Be.CRITICAL)&&g++),!z||!z.hasRoadAccess)G=Bt.DISCONNECTED_IN_SOURCE,J=z?.reason||"No road network access point within 150m threshold.",u++;else{const ne=X?X.hasRoute:!1,ge=a.get(z.roadNodeId);ne?ge&&ge.canReach?(de=!0,Oe=ge.nearestShelter,ge.isDry?(G=Bt.CONNECTED,J=`Direct, 100% dry road route to ${Oe?.name||"shelter"}.`,ye="clear",c++):(G=Bt.ACCESS_DEGRADED,J=`Evacuation route to ${Oe?.name||"shelter"} traverses shallow-flooded road segments.`,ye="exposed",d++)):(G=Bt.ROUTE_LOST,ee=o.get(z.roadNodeId)||[],J=`Evacuation route lost due to newly impassable road segments (${ee.length} blocking segments).`,ye="blocked",h++,this.accessLostBuildingIds.add(B.id)):(G=Bt.DISCONNECTED_IN_SOURCE,J=`Connecting Road Component #${z.componentId} had no route to shelters in baseline network.`,u++)}const q=this.buildingClassifier.calculateBuildingRisk(H,{accessStatus:G,canReachShelter:de,shelterRouteStatus:ye,nearestShelter:Oe,impassableEdges:ee});l.push({id:B.id,center:B.center,baseElevationM:B.baseElevationM,areaSqM:B.areaSqM,exposure:H,access:{status:G,reason:J,hasRoadAccess:z?.hasRoadAccess||!1,roadDistanceM:z?.distanceMeters||1/0,roadNodeId:z?.roadNodeId||null,componentId:z?.componentId||null,canReachShelter:de,shelterRouteStatus:ye,nearestShelter:Oe,impassableEdgeIds:ee},risk:q})}this.rankedBuildings=this.buildingClassifier.rankBuildings(l);let f=0,y=0,_=0,x=0,L=0,R=0;const A=this.roadNetwork.edges.size;for(const[B,H]of this.roadNetwork.edges.entries()){const z=this.baselineRoadStates.get(B);z&&(z.status===Le.IMPASSABLE?f++:z.status===Le.UNKNOWN&&y++),H.status===Le.IMPASSABLE?(_++,z&&(z.status===Le.UNAFFECTED||z.status===Le.EXPOSED)&&L++):H.status===Le.UNKNOWN?x++:H.status===Le.EXPOSED&&z&&z.status===Le.UNAFFECTED&&R++}const w=n.filter(B=>B.isSiteInundated).length,M=n.filter(B=>B.accessStatus==="isolated"&&this.baselineShelterStates.get(B.id)==="operational").length,S=n.filter(B=>B.accessStatus==="disconnected").length,C=n.filter(B=>B.accessStatus==="unknown").length,N=n.filter(B=>B.accessStatus==="operational").length,U={baselineWaterLevel:this.baselineWaterLevel,currentWaterLevel:this.currentWaterLevel,buildings:{totalEvaluated:l.length,validDenominator:v,unknownCount:m,newlyAffectedCount:p,newlyAffectedPercent:v>0?Math.round(p/v*1e3)/10:0,escalatedCount:g,escalatedPercent:v>0?Math.round(g/v*1e3)/10:0,routeLostCount:h,routeLostPercent:v>0?Math.round(h/v*1e3)/10:0,accessDegradedCount:d,connectedCount:c,disconnectedInSourceCount:u},roads:{totalRoadEdges:A,baselineImpassable:f,baselineUnknown:y,currentImpassable:_,currentUnknown:x,newlyImpassable:L,newlyImpassablePercent:A>0?Math.round(L/A*1e3)/10:0,newlyExposed:R},shelters:{total:n.length,operational:N,isolatedByRoads:M,inundated:w,disconnectedInSource:S,unknown:C},shelterAssessments:n};return this.currentComparison=U,{comparison:U,rankedBuildings:this.rankedBuildings}}getDataQualityReport(e={}){let t=this.buildingFeatures.length,i=0,n=0,r=0,a=0;for(const m of this.buildingFeatures){const f=this.terrainManager?.getElevationAt(m.center.x,m.center.z)??m.baseElevationM;f===null||Number.isNaN(f)||f<=0||f===-9999?i++:n++;const y=this.staticBuildingAccess.get(m.id);!y||!y.hasRoadAccess?a++:y.distanceMeters>0&&r++}let o=this.roadNetwork.edges.size,l=0,c=0;for(const m of this.roadNetwork.edges.values())m.status===Le.UNKNOWN?l++:c++;const d=this.roadNetwork.components?this.roadNetwork.components.length:67;let h=this.facilityFeatures.length,u=0,p=0;for(const m of this.facilityFeatures)m.isVerified===!0?u++:p++;const v=(e.proposedSites||[]).length||4;return{demCoverage:{totalBuildings:t,valid:n,unknown:i,unknownPercent:t>0?Math.round(i/t*1e3)/10:0,status:i===0?"Verified":"Partial Unknown",label:i>0?"Unknown DEM Regions":"Verified DGM1 Coverage",description:"Physical heights derived from official Rhineland-Palatinate DGM1 bare-earth LiDAR. Missing/NoData coordinates strictly penalized as Unknown."},roadClassification:{totalEdges:o,evaluated:c,unknown:l,unknownPercent:o>0?Math.round(l/o*1e3)/10:0,status:l===0?"Verified":"Partial Unknown",label:l>0?"Unknown Road Edges":"Fully Evaluated Roads",description:"Road flood classification derived from LiDAR ground elevation along segment geometries. Unknown edges treated as impassable under conservative policy."},roadTopology:{totalComponents:d,status:d>1?"Disconnected":"Connected",label:`${d} Disconnected Components`,description:"Topological analysis of SpaceNet 8 road dataset reveals disconnected graph components. Baseline disconnections are preserved to prevent false flood failure attribution."},facilityProvenance:{total:h,verified:u,simulated:p,hasVerifiedHospital:!1,status:u>0?"Verified":"Unverified",label:"Simulated / Unverified Facilities",description:"All emergency facilities and shelters are simulated decision-support markers from local datasets. No certified municipal emergency hospital exists in source data (absence does not prove real-world lack of facilities)."},proposedSites:{total:v,status:"Proposed",label:`${v} Proposed Candidate Sites`,description:"Candidate locations for safe assembly and field medical staging are explicitly unverified proposals vetted only for topography clearance and road proximity."},spatialSnapping:{totalBuildings:t,approximateCount:r,disconnectedCount:a,status:"Approximate",label:"Approximate Centroid Snapping",description:"Building-to-road network access uses 2D Euclidean distance from building footprint centroid to nearest road segment node."},modelAssumptions:{status:"Approximate",label:"Static Inundation Modeling",description:"HighWater 3D evaluates static terrain-water intersection. It does not model hydrodynamic velocity, wave momentum, stormwater pipe backflow, or structural collapse."}}}getBuildingEvaluation(e){return this.rankedBuildings.find(t=>t.id===e)||null}getShelterEvaluation(e){return!this.currentComparison||!this.currentComparison.shelterAssessments?null:this.currentComparison.shelterAssessments.find(t=>t.id===e)||null}}class Yg{constructor(e,t){this.scene=e,this.terrainManager=t,this.buildingLayer=new Tg(this.scene,this.terrainManager),this.roadLayer=new Lg(this.scene,this.terrainManager),this.facilityLayer=new Dg(this.scene,this.terrainManager),this.floodExtentLayer=new Pg(this.scene,this.terrainManager),this.routeLayer=new Fg(this.scene,this.terrainManager),this.clusterLayer=new Og(this.scene,this.terrainManager),this.proposedSiteLayer=new Bg(this.scene,this.terrainManager),this.buildingClassifier=new Hg(this.terrainManager),this.clusterService=null,this.proposedSiteService=null,this.routingService=null,this.activeRouteRequest=null,this.activeRouteResult=null,this.activeAlternativeResult=null,this.onRouteRecalculated=null,this.onClustersUpdated=null,this.onProposedSitesUpdated=null,this.onScenarioComparisonUpdated=null,this.onBuildingRiskUpdated=null,this.scenarioComparisonService=null,this.showAccessLostHighlights=!0,this.visibility={buildings:!0,roads:!0,facilities:!0,historicalFlood:!0,route:!0,clusters:!0,proposedSites:!0},this.stats={buildings:null,roads:null,facilities:null,floodExtent:null},this.raycaster=new dc}async loadAll(){console.log("📦 Loading Dernau geographic overlays...");const[e,t,i,n]=await Promise.all([this.buildingLayer.load("./data/dernau/buildings_exposed.geojson"),this.roadLayer.load("./data/dernau/roads_status.geojson"),this.facilityLayer.load("./data/dernau/facilities.geojson"),this.floodExtentLayer.load("./data/dernau/flood_extent.geojson")]);this.stats.buildings=e,this.stats.roads=t,this.stats.facilities=i,this.stats.floodExtent=n;const r=this.roadLayer.getRoadNetwork();return r&&(this.routingService=new Ug(r),this.clusterService=new Vg(r),this.proposedSiteService=new $g(this.terrainManager,r),this.scenarioComparisonService=new qg(this.terrainManager,r,this.routingService,this.buildingClassifier),this.scenarioComparisonService.initStaticAccess(this.buildingLayer.features,this.facilityLayer.features)),console.log("✅ Geographic Overlays Loaded:",{buildings:`${e.total} total (${e.flooded} flooded, ${e.normal} unaffected)`,roads:`${t.total} segments (${t.flooded} cutoff, ${t.open} open)`,facilities:`${i.total} tactical points`,historicalFlood:`${n.polygonCount} reference polygons`,routingService:this.routingService?"Ready":"Unavailable"}),this.stats}getRawDatasets(){return{buildings:this.buildingLayer.rawGeojson,roads:this.roadLayer.rawGeojson,facilities:this.facilityLayer.rawGeojson}}toggleBuildings(e){return this.visibility.buildings=typeof e=="boolean"?e:!this.visibility.buildings,this.buildingLayer.setVisible(this.visibility.buildings),this.visibility.buildings}toggleRoads(e){return this.visibility.roads=typeof e=="boolean"?e:!this.visibility.roads,this.roadLayer.setVisible(this.visibility.roads),this.visibility.roads}toggleFacilities(e){return this.visibility.facilities=typeof e=="boolean"?e:!this.visibility.facilities,this.facilityLayer.setVisible(this.visibility.facilities),this.visibility.facilities}toggleHistoricalFlood(e){return this.visibility.historicalFlood=typeof e=="boolean"?e:!this.visibility.historicalFlood,this.floodExtentLayer.setVisible(this.visibility.historicalFlood),this.visibility.historicalFlood}setBuildingDepthMode(e){return this.buildingLayer.setDepthColorMode(e)}toggleBuildingDepthMode(){const e=this.buildingLayer.colorMode==="dynamic-depth"?"historical":"dynamic-depth";return this.setBuildingDepthMode(e),e==="dynamic-depth"}setRoadPassabilityMode(e){return this.roadLayer.setPassabilityMode(e)}toggleRoadPassabilityMode(){const e=this.roadLayer.passabilityMode==="dynamic-passability"?"historical":"dynamic-passability";return this.setRoadPassabilityMode(e),e==="dynamic-passability"}setFacilityAccessibilityMode(e){return this.facilityLayer.setAccessibilityMode(e)}toggleClusters(e){return this.visibility.clusters=typeof e=="boolean"?e:!this.visibility.clusters,this.clusterLayer.setVisible(this.visibility.clusters),this.visibility.clusters}toggleProposedSites(e){return this.visibility.proposedSites=typeof e=="boolean"?e:!this.visibility.proposedSites,this.proposedSiteLayer.setVisible(this.visibility.proposedSites),this.visibility.proposedSites}updateImpacts(e,t){const i=this.buildingLayer.updateBuildingDepths(e),n=this.roadLayer.updatePassability(e),r=this.facilityLayer.updateAccessibility(t);let a=[];if(this.buildingClassifier&&this.clusterService&&this.buildingLayer.features.length>0){const o=this.buildingClassifier.evaluateAll(this.buildingLayer.features,e);a=this.clusterService.createClusters(o.affectedBuildings),this.clusterLayer.updateClusters(a),typeof this.onClustersUpdated=="function"&&this.onClustersUpdated(a,o.summary)}if(this.proposedSiteService){const o=this.proposedSiteService.evaluateSites(e,a);this.proposedSiteLayer.updateSites(o),typeof this.onProposedSitesUpdated=="function"&&this.onProposedSitesUpdated(o)}if(this.scenarioComparisonService){const o=this.scenarioComparisonService.evaluateScenario(e);this.showAccessLostHighlights&&this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds),typeof this.onScenarioComparisonUpdated=="function"&&this.onScenarioComparisonUpdated(o.comparison),typeof this.onBuildingRiskUpdated=="function"&&this.onBuildingRiskUpdated(o.rankedBuildings)}return this.activeRouteRequest&&this.routingService&&this.recalculateActiveRoute(),{buildings:i,roads:n,facilities:r,clusters:a.length}}getRoadNetwork(){return this.roadLayer?this.roadLayer.getRoadNetwork():null}getRoutingService(){return this.routingService}getRouteLayer(){return this.routeLayer}routeToDestination(e,t,i={}){if(!this.routingService)throw new Error("OverlayManager: RoutingService is not ready.");this.activeRouteRequest={origin:e,destination:t,options:i};const n=this.routingService.findAlternativeRoutes(e,t,i);return this.activeRouteResult=n.primaryRoute,this.activeAlternativeResult=n.alternativeRoute,this.routeLayer.displayRoute(this.activeRouteResult,this.activeAlternativeResult),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),n}routeToNearestDestination(e,t,i={}){if(!this.routingService)throw new Error("OverlayManager: RoutingService is not ready.");const n=this.routingService.findNearestReachableDestination(e,t,i);return n.bestDestination&&n.route?(this.activeRouteRequest={origin:e,destination:n.bestDestination,options:i,candidates:t},this.activeRouteResult=n.route,this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null)):(this.activeRouteRequest={origin:e,destination:t[0],options:i,candidates:t},this.activeRouteResult=n.route||{isValid:!1,isReachable:!1,explanation:n.reason,status:"blocked",routeType:i.routeType||"shelter",origin:e,destination:t[0],totalDistanceMeters:1/0},this.activeAlternativeResult=null,this.routeLayer.clearRoute()),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),n}recalculateActiveRoute(){if(!this.activeRouteRequest||!this.routingService)return null;const e=this.activeRouteRequest;if(e.candidates&&e.candidates.length>0){const t=this.routingService.findNearestReachableDestination(e.origin,e.candidates,e.options);t.bestDestination&&t.route?(this.activeRouteResult=t.route,this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null)):(this.activeRouteResult=t.route||{isValid:!1,isReachable:!1,explanation:t.reason,status:"blocked",routeType:e.options?.routeType||"shelter",origin:e.origin,destination:e.destination,totalDistanceMeters:1/0},this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null))}else{const t=this.routingService.findAlternativeRoutes(e.origin,e.destination,e.options);this.activeRouteResult=t.primaryRoute,this.activeAlternativeResult=t.alternativeRoute,this.routeLayer.displayRoute(this.activeRouteResult,this.activeAlternativeResult)}return typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),this.activeRouteResult}clearRoute(){this.activeRouteRequest=null,this.activeRouteResult=null,this.activeAlternativeResult=null,this.routeLayer.clearRoute(),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(null,null)}inspectFeature(e,t){if(!t)return null;this.raycaster.setFromCamera(e,t);const i=this.raycaster.ray;if(this.visibility.facilities){const n=this.facilityLayer.intersectFacility(i);if(n){if(this.scenarioComparisonService){const r=this.scenarioComparisonService.getShelterEvaluation(n.id);r&&(n.shelterEvaluation=r)}return n}}if(this.visibility.proposedSites&&this.proposedSiteLayer){const n=this.proposedSiteLayer.intersectProposedSite(i);if(n)return{...n,kind:"proposed-site"}}if(this.visibility.clusters&&this.clusterLayer){const n=this.clusterLayer.intersectCluster(i);if(n)return{...n,kind:"cluster"}}if(this.visibility.buildings){const n=this.buildingLayer.intersectBuilding(i);if(n){if(this.scenarioComparisonService){const r=this.scenarioComparisonService.getBuildingEvaluation(n.id);r&&(n.riskEvaluation=r)}return n}}if(this.visibility.roads){const n=this.roadLayer.intersectRoad(i);if(n)return n}if(this.visibility.floodExtent&&this.floodExtentLayer?.fillMesh){const n=this.raycaster.intersectObject(this.floodExtentLayer.fillMesh);if(n.length>0)return{id:"flood-extent-july2021",name:"Historical Flood Footprint (July 2021)",kind:"flood-extent",source:"Copernicus EMS (EMSR517) / SpaceNet 8",event:"Ahr Valley Flash Flood (14–15 July 2021)",studyArea:"Dernau, Rhineland-Palatinate, Germany",affectedSummary:"485 buildings inundated · 42 road cut-offs",waterElevationEstimate:"~130.0m – 135.0m MSL peak flood crest",center:{x:n[0].point.x,y:n[0].point.y,z:n[0].point.z},description:"Verified disaster inundation footprint delineated from satellite radar (SAR) and high-resolution aerial imagery."}}if(this.floodWaterManager?.visible&&this.floodWaterManager?.waterMesh){const n=this.raycaster.intersectObject(this.floodWaterManager.waterMesh);if(n.length>0){const r=this.floodWaterManager.currentWaterLevel??124,a=this.floodWaterManager.profileMode||"planar",o=this.floodWaterManager.hydraulicallyConnected!==!1;return{id:"simulated-flood-water",name:`Simulated Flood Surface (${r.toFixed(2)}m MSL)`,kind:"flood-water",waterLevel:r,profileMode:a==="slope"?"Slope-Aware (Ahr Thalweg Monotonic Gradient)":"Horizontal Planar",hydraulicallyConnected:o?"Hydraulically Connected to Riverbed":"Topographic Mask (Unconnected Ponding)",center:{x:n[0].point.x,y:n[0].point.y,z:n[0].point.z},description:"Elevation-aware flood water surface derived from verified Rhineland-Palatinate DGM1 bare-earth LiDAR DEM."}}}return null}setFloodWaterManager(e){this.floodWaterManager=e}setBaselineWaterLevel(e){this.scenarioComparisonService&&this.scenarioComparisonService.setBaselineScenario(e)}highlightBuilding(e){return this.buildingLayer.highlightBuilding(e)}clearBuildingHighlight(){this.buildingLayer.clearHighlight()}toggleAccessLostHighlights(e){return this.showAccessLostHighlights=typeof e=="boolean"?e:!this.showAccessLostHighlights,this.showAccessLostHighlights&&this.scenarioComparisonService?this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds):this.buildingLayer.clearAccessLostHighlights(),this.showAccessLostHighlights}dispose(){this.clearRoute(),this.clearBuildingHighlight(),this.routeLayer.dispose(),this.clusterLayer.dispose(),this.proposedSiteLayer.dispose(),this.buildingLayer.dispose(),this.roadLayer.dispose(),this.facilityLayer.dispose(),this.floodExtentLayer.dispose()}}class jg{constructor(e,t,i=null){if(!e||!t)throw new Error("FloodWaterManager: THREE.Scene and TerrainManager are required.");this.scene=e,this.terrainManager=t,this.overlayManager=i,this.minWaterLevel=120,this.maxWaterLevel=155,this.defaultWaterLevel=124,this.waterLevel=this.defaultWaterLevel,this.visible=!0,this.connectedOnly=!0,this.isPlaying=!1,this.riseRateMetersPerSec=1.5,this.profileMode="planar",this.group=new Dt,this.group.name="Flood_Water_Layer",this.scene.add(this.group),this.waterMesh=null,this.waterGeometry=null,this.waterMaterial=null,this.demPayload=null,this.elevations=null,this.rows=0,this.cols=0,this.width=2400,this.length=2400,this.bedGrid=null,this.preIndexedAssets={buildings:[],roads:[],facilities:[]},this.riverThalwegSeeds=[[205,10,139.74],[174,41,137.74],[151,67,134.71],[120,79,134.58],[132,99,131.83],[163,102,130.4],[193,124,129.84],[205,155,128.63],[217,186,127.45],[187,213,126.2],[156,213,125.63],[125,223,124.29],[94,216,123.33],[63,224,122.16],[32,228,120.97],[1,233,120.15]],this.currentImpact={waterLevel:this.waterLevel,profileMode:this.profileMode,inundatedCells:0,inundatedAreaSqKm:0,inundatedPercentage:0,affectedBuildings:0,totalBuildings:759,buildingDepthBreakdown:{dry:759,shallow:0,moderate:0,deep:0},affectedRoads:0,totalRoads:117,roadPassabilityBreakdown:{passable:117,waterlogged:0,submerged:0},affectedFacilities:0,totalFacilities:6,facilityAccessibility:[],shelterSummary:{operational:6,isolated:0,inundated:0}},this.onImpactUpdate=null}attachDEM(e){if(!e||!e.elevations){console.warn("FloodWaterManager: Invalid DEM payload.");return}this.demPayload=e,this.elevations=e.elevations,this.rows=this.elevations.length,this.cols=this.elevations[0].length,this.width=e.metadata.utmExtents?.widthMeters||2400,this.length=e.metadata.utmExtents?.lengthMeters||2400,this.precomputeSlopeBedGrid(),this.initWaterMesh(),this.updateInundation(this.waterLevel)}precomputeSlopeBedGrid(){if(!this.elevations||this.rows===0||this.cols===0)return;const e=this.riverThalwegSeeds.map(([t,i,n])=>({x:i/(this.cols-1)*this.width-this.width/2,z:t/(this.rows-1)*this.length-this.length/2,e:n}));this.bedGrid=new Float32Array(this.rows*this.cols);for(let t=0;t<this.rows;t++){const i=t/(this.rows-1)*this.length-this.length/2;for(let n=0;n<this.cols;n++){const r=n/(this.cols-1)*this.width-this.width/2;let a=1/0,o=e[0].e;for(let l=0;l<e.length-1;l++){const c=e[l],d=e[l+1],h=d.x-c.x,u=d.z-c.z,p=h*h+u*u;let g=0;p>0&&(g=Math.max(0,Math.min(1,((r-c.x)*h+(i-c.z)*u)/p)));const v=c.x+g*h,m=c.z+g*u,f=(r-v)*(r-v)+(i-m)*(i-m);f<a&&(a=f,o=c.e+g*(d.e-c.e))}this.bedGrid[t*this.cols+n]=o}}console.log("[FloodWaterManager] Slope-aware thalweg bed grid precomputed for 65,536 cells.")}indexAssets(e){e.buildings&&e.buildings.features&&(this.preIndexedAssets.buildings=e.buildings.features.map((t,i)=>{let n=0,r=0,a=0;const o=t.geometry,l=o.type==="Polygon"?o.coordinates[0]:o.coordinates[0][0];if(l){for(const d of l){const h=ti(d[0],d[1]);n+=h.x,r+=h.z,a++}n/=a,r/=a}const c=this.localToGrid(n,r);return{id:t.properties?.id||`bld-${i}`,grid:c,cx:n,cz:r}}),this.currentImpact.totalBuildings=this.preIndexedAssets.buildings.length),e.roads&&e.roads.features&&(this.preIndexedAssets.roads=e.roads.features.map((t,i)=>{const n=[],r=t.geometry,a=r.type==="LineString"?[r.coordinates]:r.coordinates;if(a)for(const o of a)for(const l of o){const c=ti(l[0],l[1]);n.push({grid:this.localToGrid(c.x,c.z),x:c.x,z:c.z})}return{id:t.properties?.id||`road-${i}`,pts:n}}),this.currentImpact.totalRoads=this.preIndexedAssets.roads.length),e.facilities&&e.facilities.features&&(this.preIndexedAssets.facilities=e.facilities.features.map((t,i)=>{const n=ti(t.geometry.coordinates[0],t.geometry.coordinates[1]),r=this.localToGrid(n.x,n.z),a=this.terrainManager.getElevationAt(n.x,n.z)||135;return{id:t.properties?.facility_id||t.properties?.id||`fac-${i}`,name:t.properties?.name||"Emergency Facility",type:t.properties?.type||"facility",grid:r,loc:n,baseElevation:a}}),this.currentImpact.totalFacilities=this.preIndexedAssets.facilities.length),console.log(`[FloodWaterManager] Indexed assets for dynamic impact: ${this.currentImpact.totalBuildings} blds, ${this.currentImpact.totalRoads} roads, ${this.currentImpact.totalFacilities} facs.`),this.assessImpact(this.waterLevel)}localToGrid(e,t){const i=(e+this.width/2)/this.width,n=(t+this.length/2)/this.length,r=Math.max(0,Math.min(this.cols-1,Math.round(i*(this.cols-1))));return{r:Math.max(0,Math.min(this.rows-1,Math.round(n*(this.rows-1)))),c:r}}get currentWaterLevel(){return this.waterLevel}getWaterElevationAt(e,t){if(this.profileMode==="planar"||!this.bedGrid)return this.waterLevel;const{r:i,c:n}=this.localToGrid(e,t),r=this.waterLevel-this.defaultWaterLevel;return this.bedGrid[i*this.cols+n]+1+r}getWaterSurfaceAtWorld(e,t){return this.getWaterElevationAt(e,t)}initWaterMesh(){this.dispose(),this.waterGeometry=new en(this.width,this.length,this.cols-1,this.rows-1),this.waterGeometry.rotateX(-Math.PI/2);const e=this.waterGeometry.attributes.position;for(let t=0;t<e.count;t++){const i=e.getX(t),n=e.getZ(t),r=this.terrainManager.getElevationAt(i,n)||this.defaultWaterLevel;e.setY(t,r)}e.needsUpdate=!0,this.waterGeometry.setIndex([]),this.waterMaterial=new Zt({color:440020,roughness:.14,metalness:.12,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:yt}),this.waterMesh=new Je(this.waterGeometry,this.waterMaterial),this.waterMesh.name="Flood_Water_Surface",this.waterMesh.receiveShadow=!1,this.waterMesh.castShadow=!1,this.waterMesh.visible=this.visible,this.group.add(this.waterMesh)}setWaterLevel(e){const t=Math.max(this.minWaterLevel,Math.min(this.maxWaterLevel,Number(e)));Math.abs(this.waterLevel-t)<.001||(this.waterLevel=t,this.updateInundation(this.waterLevel))}setVisible(e){return this.visible=typeof e=="boolean"?e:!this.visible,this.waterMesh&&(this.waterMesh.visible=this.visible),this.visible}setConnectivity(e){return this.connectedOnly=typeof e=="boolean"?e:!this.connectedOnly,this.updateInundation(this.waterLevel),this.connectedOnly}setProfileMode(e){return this.profileMode=e==="slope"?"slope":"planar",this.updateInundation(this.waterLevel),this.profileMode}reset(){this.isPlaying=!1,this.waterLevel=this.defaultWaterLevel,this.updateInundation(this.waterLevel)}togglePlayPause(){return this.isPlaying=!this.isPlaying,this.isPlaying}computeInundationMask(e){const t=new Uint8Array(this.rows*this.cols);if(!this.elevations)return t;const i=this.profileMode==="slope"&&this.bedGrid,n=e-this.defaultWaterLevel,r=(c,d)=>{const h=this.elevations[c][d];if(i){const u=this.bedGrid[c*this.cols+d]+1+n;return h<=u}return h<=e};if(!this.connectedOnly){for(let c=0;c<this.rows;c++)for(let d=0;d<this.cols;d++)r(c,d)&&(t[c*this.cols+d]=1);return t}const a=[],o=new Uint8Array(this.rows*this.cols);for(const[c,d]of this.riverThalwegSeeds)if(r(c,d)){const h=c*this.cols+d;o[h]||(o[h]=1,t[h]=1,a.push(h))}let l=0;for(;l<a.length;){const c=a[l++],d=Math.floor(c/this.cols),h=c%this.cols,u=[[d-1,h],[d+1,h],[d,h-1],[d,h+1]];for(const[p,g]of u)if(p>=0&&p<this.rows&&g>=0&&g<this.cols){const v=p*this.cols+g;o[v]||(o[v]=1,r(p,g)&&(t[v]=1,a.push(v)))}}return t}updateInundation(e){if(!this.waterGeometry||!this.elevations)return;const t=this.computeInundationMask(e),i=this.waterGeometry.attributes.position,n=.2,r=this.profileMode==="slope"&&this.bedGrid,a=e-this.defaultWaterLevel;for(let l=0;l<this.rows;l++)for(let c=0;c<this.cols;c++){const d=l*this.cols+c;if(t[d]){const h=this.elevations[l][c],u=r?this.bedGrid[d]+1+a:e,p=Math.max(h+n,u);i.setY(d,p)}else i.setY(d,this.elevations[l][c]-.5)}i.needsUpdate=!0;const o=[];for(let l=0;l<this.rows-1;l++)for(let c=0;c<this.cols-1;c++){const d=l*this.cols+c,h=l*this.cols+(c+1),u=(l+1)*this.cols+c,p=(l+1)*this.cols+(c+1);t[d]+t[h]+t[u]+t[p]>=2&&(o.push(d,u,h),o.push(h,u,p))}this.waterGeometry.setIndex(o),this.waterGeometry.index&&(this.waterGeometry.index.needsUpdate=!0),this.waterGeometry.computeVertexNormals(),this.assessImpact(e,t)}assessImpact(e,t=null){t||(t=this.computeInundationMask(e));let i=0;for(let _=0;_<t.length;_++)t[_]&&i++;const n=this.rows*this.cols,r=this.width/(this.cols-1)*(this.length/(this.rows-1)),a=i*r/1e6,o=n>0?i/n*100:0,l=(_,x)=>this.getWaterElevationAt(_,x);let c=0;for(const _ of this.preIndexedAssets.buildings){const x=_.grid.r*this.cols+_.grid.c;t[x]&&c++}let d=0;const h=new Map;for(const _ of this.preIndexedAssets.roads){let x=!1;for(const L of _.pts)if(t[L.grid.r*this.cols+L.grid.c]){x=!0;break}x&&d++,h.set(_.id,x)}let u=0,p=0,g=0,v=0;const m={};for(const _ of this.preIndexedAssets.facilities){const x=_.grid.r*this.cols+_.grid.c,L=t[x]===1,R=this.getWaterElevationAt(_.loc.x,_.loc.z),A=Math.max(0,R-_.baseElevation);let w=0,M=0;for(const N of this.preIndexedAssets.roads){let U=!1;for(const B of N.pts){const H=B.x-_.loc.x,z=B.z-_.loc.z;if(H*H+z*z<250*250){U=!0;break}}U&&(w++,h.get(N.id)&&M++)}let S="operational",C="passable";L||A>0?(S="inundated",v++,u++):w>0&&M===w?(S="isolated",C="all_submerged",g++,u++):(S="operational",C=M>0?"partially_clear":"clear",p++),m[_.id]={id:_.id,name:_.name,type:_.type,status:S,siteWaterDepth:Math.round(A*100)/100,nearbyRoadStatus:C,nearbyRoadCount:w,nearbySubmergedCount:M}}let f={dry:759-c,shallow:0,moderate:0,deep:0},y={passable:117-d,waterlogged:0,submerged:d};if(this.overlayManager&&typeof this.overlayManager.updateImpacts=="function"){const _=this.overlayManager.updateImpacts(l,m);_.buildings&&(f=_.buildings),_.roads&&(y=_.roads)}return this.currentImpact={waterLevel:Math.round(e*100)/100,profileMode:this.profileMode,inundatedCells:i,inundatedAreaSqKm:Math.round(a*1e3)/1e3,inundatedPercentage:Math.round(o*10)/10,affectedBuildings:c,totalBuildings:this.preIndexedAssets.buildings.length||759,buildingDepthBreakdown:f,affectedRoads:d,totalRoads:this.preIndexedAssets.roads.length||117,roadPassabilityBreakdown:y,affectedFacilities:u,totalFacilities:this.preIndexedAssets.facilities.length||6,facilityAccessibility:Object.values(m),shelterSummary:{operational:p,isolated:g,inundated:v},shelterAccessibilityBreakdown:{operational:p,isolated:g,inundated:v}},this.shelterAccessibility=m,typeof this.onImpactUpdate=="function"&&this.onImpactUpdate(this.currentImpact),this.currentImpact}update(e){if(!this.isPlaying)return;let t=this.waterLevel+this.riseRateMetersPerSec*e;t>=this.maxWaterLevel&&(t=this.maxWaterLevel,this.isPlaying=!1),this.setWaterLevel(t)}dispose(){this.waterGeometry&&(this.waterGeometry.dispose(),this.waterGeometry=null),this.waterMaterial&&(this.waterMaterial.dispose(),this.waterMaterial=null),this.waterMesh&&(this.waterMesh.parent&&this.waterMesh.parent.remove(this.waterMesh),this.waterMesh=null)}}class Kg{constructor(e){this.dom=e,this.mouseNdc=new ie(-999,-999),this.lastDomUpdate=0,this.updateInterval=80}update(e,t,i){const n=performance.now();if(!(n-this.lastDomUpdate<this.updateInterval)&&(this.lastDomUpdate=n,e&&(this.dom.camPos&&(this.dom.camPos.textContent=`${e.camX.toFixed(0)}m, ${e.camY.toFixed(0)}m, ${e.camZ.toFixed(0)}m`),this.dom.targetPos&&(this.dom.targetPos.textContent=`${e.targetX.toFixed(0)}m, ${e.targetY.toFixed(0)}m, ${e.targetZ.toFixed(0)}m`),this.dom.camAlt&&(this.dom.camAlt.textContent=`${e.altitude.toFixed(1)} m`),this.dom.camAngles&&(this.dom.camAngles.textContent=`${e.pitchDeg.toFixed(1)}° / ${e.azimuthDeg.toFixed(1)}°`),this.dom.compassNeedle&&(this.dom.compassNeedle.style.transform=`rotate(${-e.azimuthDeg}deg)`)),t&&(this.dom.fpsCounter&&(this.dom.fpsCounter.textContent=`${t.fps} FPS`),this.dom.drawCalls&&(this.dom.drawCalls.textContent=t.drawCalls),this.dom.triangles&&(this.dom.triangles.textContent=t.triangles.toLocaleString()),this.dom.frameTime&&(this.dom.frameTime.textContent=`${t.frameDurationMs.toFixed(1)} ms`)),this.dom.cursorPos))if(i){const r=i.x.toFixed(1),a=i.y.toFixed(1),o=i.z.toFixed(1);this.dom.cursorPos.textContent=`X: ${r}m  Y: ${a}m  Z: ${o}m`}else this.dom.cursorPos.textContent="Off terrain bounds"}setMouseCoords(e,t,i){this.mouseNdc.x=(e-i.left)/i.width*2-1,this.mouseNdc.y=-((t-i.top)/i.height*2-1)}getMouseNdc(){return this.mouseNdc}}const Zg="highwater3d_scenarios_v1",bl=Object.freeze([{id:"scen-baseline-124",name:"Normal Baseline Stage (124.0m MSL)",waterLevel:124,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"Typical non-flood baseflow along the Ahr river channel in Dernau.",createdAt:"2026-10-15T12:00:00.000Z"},{id:"scen-spacenet8-1285",name:"SpaceNet 8 / July 2021 Reference (128.5m MSL)",waterLevel:128.5,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"Indicative valley inundation matching SpaceNet 8 July 2021 historical flood extent.",createdAt:"2026-10-15T12:00:00.000Z"},{id:"scen-extreme-1330",name:"Extreme HQ100+ Model Scenario (133.0m MSL)",waterLevel:133,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"High-consequence flood scenario modeling extensive residential core immersion.",createdAt:"2026-10-15T12:00:00.000Z"}]);function Ze(s){if(s==null)return"";const e=String(s);return e.includes(",")||e.includes('"')||e.includes(`
`)||e.includes("\r")?`"${e.replace(/"/g,'""')}"`:e}function wt(s){return s==null?"":String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class Jg{constructor(e={}){this.storageKey=e.storageKey||Zg,this.inMemoryStore=new Map,this.isStorageAvailable=!0,this.storageErrorMessage=null,this._initStorage()}_initStorage(){try{const e="__highwater_test__";window.localStorage.setItem(e,e),window.localStorage.removeItem(e),this.isStorageAvailable=!0,this.storageErrorMessage=null,window.localStorage.getItem(this.storageKey)||window.localStorage.setItem(this.storageKey,JSON.stringify(bl))}catch(e){this.isStorageAvailable=!1,this.storageErrorMessage=`Local storage unavailable (${e.message||"Restricted"}). Scenarios will be kept in-memory for this session only.`,console.warn(`[ScenarioManager] ${this.storageErrorMessage}`),bl.forEach(t=>{this.inMemoryStore.set(t.id,{...t})})}}getScenarios(){let e=[];if(this.isStorageAvailable)try{const i=window.localStorage.getItem(this.storageKey);if(i){const n=JSON.parse(i);Array.isArray(n)&&(e=n)}}catch(i){console.error("[ScenarioManager] Failed to read scenarios from localStorage:",i),this.storageErrorMessage="Failed to parse saved scenarios. Using in-memory fallback.",e=Array.from(this.inMemoryStore.values())}else e=Array.from(this.inMemoryStore.values());return e.filter(i=>i&&typeof i=="object"&&typeof i.id=="string"&&typeof i.waterLevel=="number").map(i=>({id:i.id,name:String(i.name||`Scenario ${i.waterLevel.toFixed(1)}m`),waterLevel:Math.round(i.waterLevel*100)/100,profileMode:i.profileMode==="slope"?"slope":"planar",connectedOnly:i.connectedOnly!==!1,baselineWaterLevel:typeof i.baselineWaterLevel=="number"?Math.round(i.baselineWaterLevel*100)/100:124,isBuiltIn:!!i.isBuiltIn,notes:String(i.notes||""),createdAt:i.createdAt||new Date().toISOString(),summarySnapshot:i.summarySnapshot||null}))}getScenario(e){return e&&this.getScenarios().find(t=>t.id===e)||null}saveScenario(e){if(!e)throw new Error("Scenario must include a valid numeric waterLevel.");const t=e.waterLevel;let i=null;if(typeof t=="number"&&!Number.isNaN(t))i=t;else if(typeof t=="string"&&t.trim()!==""){const c=Number(t.trim());Number.isNaN(c)||(i=c)}if(i===null)throw new Error("Scenario must include a valid numeric waterLevel.");const n=e.name&&String(e.name).trim()||`Scenario ${i.toFixed(1)}m MSL`,r=`scen-${Date.now()}-${Math.floor(Math.random()*1e3)}`;let a=124;if(typeof e.baselineWaterLevel=="number"&&!Number.isNaN(e.baselineWaterLevel))a=Math.round(e.baselineWaterLevel*100)/100;else if(typeof e.baselineWaterLevel=="string"&&e.baselineWaterLevel.trim()!==""){const c=Number(e.baselineWaterLevel.trim());Number.isNaN(c)||(a=Math.round(c*100)/100)}const o={id:r,name:n,waterLevel:Math.round(i*100)/100,profileMode:e.profileMode==="slope"?"slope":"planar",connectedOnly:e.connectedOnly!==!1,baselineWaterLevel:a,isBuiltIn:!1,notes:String(e.notes||""),createdAt:new Date().toISOString(),summarySnapshot:e.summarySnapshot||null},l=this.getScenarios();return l.push(o),this._persist(l),o}updateScenario(e,t={}){const i=this.getScenarios(),n=i.findIndex(o=>o.id===e);if(n===-1)return null;const r=i[n],a={...r,...t,id:r.id,isBuiltIn:r.isBuiltIn,updatedAt:new Date().toISOString()};return i[n]=a,this._persist(i),a}deleteScenario(e){const t=this.getScenarios(),i=t.findIndex(n=>n.id===e);return i===-1?!1:(t.splice(i,1),this._persist(t),!0)}_persist(e){if(this.isStorageAvailable)try{window.localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(t){console.warn("[ScenarioManager] LocalStorage write failed, falling back to in-memory:",t),this.isStorageAvailable=!1,this.storageErrorMessage=`Storage write failed (${t.message}). Data kept in-memory for session.`}this.inMemoryStore.clear(),e.forEach(t=>this.inMemoryStore.set(t.id,t))}compareScenarios(e,t,i){if(!e||!t||!i)throw new Error("compareScenarios requires baselineScenario, targetScenario, and comparisonService.");return i.setBaselineScenario(e.waterLevel),i.evaluateScenario(t.waterLevel)}generateCSVReport({scenario:e,comparison:t,rankedBuildings:i=[],shelterAssessments:n=[],dataQuality:r}={}){const a=e||{},o=a.name||"Active Simulation",l=typeof a.waterLevel=="number"&&!Number.isNaN(a.waterLevel)?a.waterLevel:124,c=t||{},d=typeof c.baselineWaterLevel=="number"&&!Number.isNaN(c.baselineWaterLevel)?c.baselineWaterLevel:124,h=c.buildings||{},u=c.roads||{},p=c.shelters||{},g=Array.isArray(i)?i:[],v=Array.isArray(n)?n:[],m=new Date().toISOString(),f=[];f.push("=== HIGHWATER 3D — SCENARIO ANALYSIS REPORT ==="),f.push(`Report Generated,${Ze(m)}`),f.push(`Scenario Name,${Ze(o)}`),f.push(`Modeled Water Surface (MSL),${l.toFixed(2)} m`),f.push(`Baseline Water Surface (MSL),${d.toFixed(2)} m`),f.push(`Profile Mode,${Ze(a.profileMode||"planar")}`),f.push(""),f.push("=== SCENARIO COMPARISON METRICS (BASELINE VS CURRENT) ==="),f.push("Metric,Value,Denominator,Unit,Description"),f.push(`Total Buildings Evaluated,${h.totalEvaluated??0},${h.totalEvaluated??0},count,Total structures in dataset`),f.push(`Valid Evaluated Buildings,${h.validDenominator??0},${h.totalEvaluated??0},count,Structures with valid DGM1 bare-earth elevation`),f.push(`Unknown/NoData DEM Buildings,${h.unknownCount??0},${h.totalEvaluated??0},count,Structures excluded from percentage denominators`),f.push(`Newly Affected Buildings,+${h.newlyAffectedCount??0},${h.validDenominator??0},${h.newlyAffectedPercent??0}%,Buildings transitioning from dry to positive water depth`),f.push(`Exposure Category Escalations,+${h.escalatedCount??0},${h.validDenominator??0},${h.escalatedPercent??0}%,Buildings moving into a higher flood exposure category`),f.push(`Evacuation Route Lost (Flood-Isolated),${h.routeLostCount??0},${h.validDenominator??0},${h.routeLostPercent??0}%,Buildings with baseline route now blocked by impassable roads`),f.push(`Disconnected in Baseline Source Data,${h.disconnectedInSourceCount??0},${h.validDenominator??0},count,Buildings on isolated road components without baseline shelter path`),f.push(`Connected Buildings,${h.connectedCount??0},${h.validDenominator??0},count,Buildings with dry passable corridor to active shelter`),f.push(`Total Road Segments,${u.totalRoadEdges??0},${u.totalRoadEdges??0},count,Total road edges in topological graph`),f.push(`Baseline Impassable Road Segments,${u.baselineImpassable??0},${u.totalRoadEdges??0},count,Road edges impassable at baseline water level`),f.push(`Newly Impassable Road Segments,+${u.newlyImpassable??0},${u.totalRoadEdges??0},${u.newlyImpassablePercent??0}%,Road edges crossing >=0.15m conservative impassability depth`),f.push(`Unknown Road Segments,${u.currentUnknown??0},${u.totalRoadEdges??0},count,Road edges missing elevation data (treated as impassable under conservative policy)`),f.push(`Shelters Operational,${p.operational??0},${p.total??0},count,Simulated emergency shelters with dry road access`),f.push(`Shelters Isolated by Flooded Roads,${p.isolatedByRoads??0},${p.total??0},count,Dry shelter sites cut off by submerged access roads`),f.push(`Shelters Inundated,${p.inundated??0},${p.total??0},count,Shelter ground sites submerged below water surface`),f.push(`Shelters Disconnected in Baseline Source Data,${p.disconnectedInSource??0},${p.total??0},count,Shelters on disconnected road components (not flood-caused)`),f.push(`Shelters Unknown Status,${p.unknown??0},${p.total??0},count,Shelters with missing ground or water elevation`),f.push(""),f.push("=== SHELTER & EMERGENCY FACILITY EVALUATION ==="),f.push("Shelter ID,Name,Provenance,Site Elevation (MSL),Modeled Water (MSL),Site Depth (m),Site Inundation Status,Road Corridor Status,Connecting Node,Verification Notice");for(const _ of v)_&&f.push([Ze(_.id),Ze(_.name),Ze(_.provenance||"simulated"),typeof _.groundElevation=="number"&&!Number.isNaN(_.groundElevation)?_.groundElevation.toFixed(2):"Unknown",typeof _.waterElevation=="number"&&!Number.isNaN(_.waterElevation)?_.waterElevation.toFixed(2):"N/A",typeof _.siteWaterDepth=="number"&&!Number.isNaN(_.siteWaterDepth)?_.siteWaterDepth.toFixed(2):"Unknown",_.isSiteInundated?"SUBMERGED":"DRY",Ze(_.accessStatus||"operational"),Ze(_.roadNodeId||"None"),"Simulated unverified facility record. Not an official municipal emergency shelter."].join(","));f.push(""),f.push("=== BUILDING FLOOD RISK RANKINGS & ACCESSIBILITY ==="),f.push("Rank,Building ID,Priority Tier,Total Risk Score (0-100),Flood Score (0-50),Road Score (0-25),Service Score (0-25),Exposure Category,Ground Depth (m),Footprint %,Base Elevation (MSL),Road Access Status,Reachable Shelter,Data Quality Warning"),g.forEach((_,x)=>{if(!_)return;const L=_.risk||{},R=L.subScores||{},A=_.exposure||{},w=_.access||{},M=L.isUnknown||A.category==="unknown";f.push([x+1,Ze(_.id),Ze(L.priorityTier||"low"),L.totalScore??0,R.floodExposure??0,R.roadAccess??0,R.emergencyService??0,Ze(A.category||"unaffected"),typeof A.waterDepth=="number"&&!Number.isNaN(A.waterDepth)?A.waterDepth.toFixed(2):"Unknown",M?"Indeterminate":`${Math.round((A.affectedRatio||(A.waterDepth>0?1:0))*100)}%`,typeof _.baseElevationM=="number"&&!Number.isNaN(_.baseElevationM)?_.baseElevationM.toFixed(2):"NoData",Ze(w.status||"connected"),Ze(w.nearestShelter?.name||(w.canReachShelter?"Shelter":"None")),M?"Missing or NoData DGM1 elevation. Data uncertainty penalty applied.":"None"].join(","))}),f.push(""),f.push("=== DATA INTEGRITY, UNCERTAINTY & PROVENANCE AUDIT ==="),f.push("Category,Status,Indicator,Details");const y=r||{};return f.push(`DEM Coverage,${Ze(y.demCoverage?.status||"Verified")},${Ze(y.demCoverage?.label||"DGM1 Coverage")},${Ze(y.demCoverage?.description||"Official Rhineland-Palatinate DGM1 bare-earth LiDAR")}`),f.push(`Road Flood Classification,${Ze(y.roadClassification?.status||"Evaluated")},${Ze(y.roadClassification?.label||"Evaluated")},${Ze(y.roadClassification?.description||"Roads crossing water depth >=0.15m marked impassable")}`),f.push(`Road Graph Topology,${Ze(y.roadTopology?.status||"Disconnected")},${Ze(y.roadTopology?.label||"Disconnected Components")},${Ze(y.roadTopology?.description||"Pre-existing source data disconnections preserved")}`),f.push(`Emergency Facility Provenance,${Ze(y.facilityProvenance?.status||"Unverified")},${Ze(y.facilityProvenance?.label||"Simulated Facilities")},${Ze(y.facilityProvenance?.description||"Simulated facilities only; no verified municipal hospital")}`),f.push(`Proposed Candidate Sites,${Ze(y.proposedSites?.status||"Proposed")},${Ze(y.proposedSites?.label||"Proposed Sites")},${Ze(y.proposedSites?.description||"Candidate staging sites vetted for elevation only; non-operational")}`),f.push(`Spatial Snapping,${Ze(y.spatialSnapping?.status||"Approximate")},${Ze(y.spatialSnapping?.label||"Centroid Snapping")},${Ze(y.spatialSnapping?.description||"Centroid 2D Euclidean distance used for network snapping")}`),f.push(""),f.push("=== MODEL ASSUMPTIONS & LEGAL DISCLAIMER ==="),f.push("1. Conceptual decision-support indicator only. Not a calibrated hydraulic forecast or certified structural engineering assessment."),f.push("2. Ground-contact depth reflects bare-earth DGM1 LiDAR terrain intersection; it does not prove interior building flooding or occupant hazard."),f.push("3. All emergency facilities are simulated/proposed; no verified municipal emergency hospital exists in source data (absence does not prove real-world lack of facilities)."),f.push("4. Topological road network contains 67 disconnected source components; buildings without baseline connectivity are designated disconnected_in_source."),f.push("5. Conservative routing policy penalizes waterlogged segments and excludes roads with depth >=0.15m or unknown elevation."),f.join(`\r
`)}generateHTMLReport({scenario:e,comparison:t,rankedBuildings:i=[],shelterAssessments:n=[],dataQuality:r}={}){const a=e||{},o=a.name||"Active Simulation",l=wt(o),c=typeof a.waterLevel=="number"&&!Number.isNaN(a.waterLevel)?a.waterLevel:124,d=t||{},h=typeof d.baselineWaterLevel=="number"&&!Number.isNaN(d.baselineWaterLevel)?d.baselineWaterLevel:124,u=d.buildings||{},p=d.roads||{},g=d.shelters||{},v=r||{},m=Array.isArray(i)?i:[],f=Array.isArray(n)?n:[],y=new Date().toLocaleString("en-US",{dateStyle:"long",timeStyle:"short"}),_=m.filter(M=>M?.risk?.priorityTier==="critical").length,x=m.filter(M=>M?.risk?.priorityTier==="high").length,L=m.filter(M=>M?.risk?.priorityTier==="moderate").length,R=m.filter(M=>M?.risk?.priorityTier==="low").length,A=u.unknownCount||0,w=m.slice(0,50);return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HighWater 3D — Scenario Report: ${l}</title>
  <style>
    :root {
      --bg: #090d16;
      --card-bg: #111827;
      --border: #1f2937;
      --text: #f3f4f6;
      --muted: #9ca3af;
      --rose: #f43f5e;
      --amber: #f59e0b;
      --cyan: #06b6d4;
      --emerald: #10b981;
      --purple: #c084fc;
    }
    @media print {
      :root {
        --bg: #ffffff;
        --card-bg: #ffffff;
        --border: #e5e7eb;
        --text: #111827;
        --muted: #4b5563;
        --rose: #e11d48;
        --amber: #d97706;
        --cyan: #0891b2;
        --emerald: #059669;
        --purple: #9333ea;
      }
      body { background: #fff !important; color: #111 !important; font-size: 11pt; padding: 0 !important; }
      .no-print { display: none !important; }
      .page-break { page-break-before: always; }
      .report-card { border: 1px solid #ccc !important; box-shadow: none !important; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 30px;
      line-height: 1.5;
    }
    .header-banner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid var(--border);
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .title-h1 { margin: 0 0 6px 0; font-size: 24px; font-weight: 700; color: var(--text); }
    .subtitle { margin: 0; font-size: 13px; color: var(--muted); }
    .meta-tag { font-family: monospace; font-size: 12px; background: rgba(6,182,212,0.15); color: var(--cyan); padding: 4px 10px; border-radius: 6px; }
    .grid-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .metric-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px;
    }
    .metric-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); margin-bottom: 4px; }
    .metric-val { font-size: 20px; font-weight: 700; font-family: monospace; color: var(--text); }
    .metric-sub { font-size: 11px; color: var(--muted); margin-top: 4px; }
    .section-title { font-size: 16px; font-weight: 700; border-left: 4px solid var(--cyan); padding-left: 10px; margin: 28px 0 14px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
    th { background: rgba(255,255,255,0.05); text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); color: var(--muted); font-size: 11px; text-transform: uppercase; }
    td { padding: 8px 10px; border-bottom: 1px solid var(--border); font-family: monospace; }
    .badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; }
    .badge-crit { background: rgba(244,63,94,0.2); color: var(--rose); }
    .badge-high { background: rgba(245,158,11,0.2); color: var(--amber); }
    .badge-mod { background: rgba(6,182,212,0.2); color: var(--cyan); }
    .badge-low { background: rgba(16,185,129,0.2); color: var(--emerald); }
    .badge-unk { background: rgba(156,163,175,0.2); color: var(--muted); }
    .badge-prop { background: rgba(192,132,252,0.2); color: var(--purple); }
    .disclaimer-box {
      background: rgba(245,158,11,0.08);
      border: 1px solid rgba(245,158,11,0.3);
      border-radius: 8px;
      padding: 14px;
      margin-top: 30px;
      font-size: 11px;
      color: var(--muted);
      line-height: 1.5;
    }
    .print-btn-bar {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
    }
    .btn-action {
      background: var(--cyan);
      color: #000;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="print-btn-bar no-print">
    <button class="btn-action" onclick="window.print()">🖨️ Print / Save as PDF</button>
    <button class="btn-action" style="background:#374151;color:#fff;" onclick="window.close()">✕ Close Report</button>
  </div>

  <div class="header-banner">
    <div>
      <h1 class="title-h1">HighWater 3D — Scenario & Emergency Accessibility Report</h1>
      <p class="subtitle">Dernau, Rhineland-Palatinate, Germany · Bare-Earth DGM1 LiDAR DEM (1m)</p>
      <p class="subtitle" style="margin-top:4px;">Report Generated: <strong>${wt(y)}</strong></p>
    </div>
    <div style="text-align:right;">
      <span class="meta-tag">${l}</span>
      <div style="margin-top:8px;font-size:12px;color:var(--muted);font-family:monospace;">
        Water Surface: <strong>${c.toFixed(2)}m MSL</strong><br>
        Baseline: <strong>${h.toFixed(2)}m MSL</strong>
      </div>
    </div>
  </div>

  <div class="section-title">Executive Summary & Scenario Deltas</div>
  <div class="grid-metrics">
    <div class="metric-card">
      <div class="metric-label">Newly Affected Buildings</div>
      <div class="metric-val text-amber">+${u.newlyAffectedCount??0}</div>
      <div class="metric-sub">${u.newlyAffectedPercent??0}% of ${u.validDenominator??0} valid structures</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Route Lost (Flood-Isolated)</div>
      <div class="metric-val text-rose">${u.routeLostCount??0}</div>
      <div class="metric-sub">${u.routeLostPercent??0}% of valid structures</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Newly Impassable Roads</div>
      <div class="metric-val text-rose">+${p.newlyImpassable??0}</div>
      <div class="metric-sub">${p.newlyImpassablePercent??0}% of ${p.totalRoadEdges??121} road edges</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Shelter Operational Status</div>
      <div class="metric-val text-cyan">${g.operational??0} / ${g.total??0}</div>
      <div class="metric-sub">${g.isolatedByRoads??0} road-isolated, ${g.inundated??0} submerged</div>
    </div>
  </div>

  <div class="section-title">Data Quality, Uncertainty & Provenance Audit</div>
  <div class="grid-metrics">
    <div class="metric-card">
      <div class="metric-label">DEM Elevation Coverage</div>
      <div class="metric-val" style="color:var(--emerald);">${wt(v.demCoverage?.status||"VERIFIED")}</div>
      <div class="metric-sub">${v.demCoverage?.valid??u.validDenominator??0} valid / ${v.demCoverage?.unknown??u.unknownCount??0} NoData unknown</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Road Classification</div>
      <div class="metric-val" style="color:var(--cyan);">${wt(v.roadClassification?.status||"EVALUATED")}</div>
      <div class="metric-sub">${v.roadClassification?.evaluated??p.totalRoadEdges??0} evaluated / ${v.roadClassification?.unknown??p.currentUnknown??0} unknown</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Road Network Topology</div>
      <div class="metric-val" style="color:var(--amber);">${wt(v.roadTopology?.status||"DISCONNECTED")}</div>
      <div class="metric-sub">${v.roadTopology?.totalComponents??67} components (baseline disconnections preserved)</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Emergency Facilities</div>
      <div class="metric-val" style="color:var(--rose);">${wt(v.facilityProvenance?.status||"UNVERIFIED")}</div>
      <div class="metric-sub">Simulated proxies; no verified hospital in research data</div>
    </div>
  </div>

  <div class="section-title">Building Priority & Exposure Distribution</div>
  <div class="grid-metrics">
    <div class="metric-card"><div class="metric-label">Critical Priority</div><div class="metric-val" style="color:var(--rose);">${_}</div><div class="metric-sub">Severe immersion / isolated</div></div>
    <div class="metric-card"><div class="metric-label">High Priority</div><div class="metric-val" style="color:var(--amber);">${x}</div><div class="metric-sub">Ingress risk or route lost</div></div>
    <div class="metric-card"><div class="metric-label">Moderate Priority</div><div class="metric-val" style="color:var(--cyan);">${L}</div><div class="metric-sub">Threshold depth / degraded</div></div>
    <div class="metric-card"><div class="metric-label">Low / Unaffected</div><div class="metric-val" style="color:var(--emerald);">${R}</div><div class="metric-sub">Dry perimeter contact</div></div>
    <div class="metric-card"><div class="metric-label">Unknown DEM Data</div><div class="metric-val" style="color:var(--muted);">${A}</div><div class="metric-sub">Data uncertainty penalty</div></div>
  </div>

  <div class="section-title">Emergency Shelter & Facility Accessibility</div>
  <table>
    <thead>
      <tr>
        <th>Facility ID</th>
        <th>Name</th>
        <th>Provenance</th>
        <th>Site Depth</th>
        <th>Site Status</th>
        <th>Corridor Status</th>
        <th>Road Access Node</th>
      </tr>
    </thead>
    <tbody>
      ${f.map(M=>{if(!M)return"";const S=typeof M.siteWaterDepth=="number"&&!Number.isNaN(M.siteWaterDepth)?`${M.siteWaterDepth.toFixed(2)}m`:"Dry";return`
        <tr>
          <td>${wt(M.id||"N/A")}</td>
          <td style="font-family:sans-serif;font-weight:600;">${wt(M.name||"Unnamed Facility")}</td>
          <td><span class="badge badge-unk">${wt(M.provenance||"simulated")}</span></td>
          <td>${S}</td>
          <td><span class="badge ${M.isSiteInundated?"badge-crit":"badge-low"}">${M.isSiteInundated?"SUBMERGED":"DRY SITE"}</span></td>
          <td><span class="badge ${M.accessStatus==="isolated"?"badge-crit":M.accessStatus==="exposed"?"badge-high":"badge-low"}">${wt((M.accessStatus||"operational").toUpperCase())}</span></td>
          <td>${wt(M.roadNodeId||"None")}</td>
        </tr>
      `}).join("")}
    </tbody>
  </table>

  <div class="section-title">Top High-Risk Structures (Sample)</div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Priority Tier</th>
        <th>Score</th>
        <th>Flood / Road / Service</th>
        <th>Exposure</th>
        <th>Depth</th>
        <th>Road Access Status</th>
      </tr>
    </thead>
    <tbody>
      ${w.map(M=>{if(!M)return"";const S=M.risk||{},C=S.subScores||{},N=S.priorityTier||"low",U=N==="critical"?"badge-crit":N==="high"?"badge-high":N==="moderate"?"badge-mod":"badge-low",B=typeof M.exposure?.waterDepth=="number"&&!Number.isNaN(M.exposure.waterDepth)?`${M.exposure.waterDepth.toFixed(2)}m`:"N/A";return`
          <tr>
            <td>Bld ${wt(M.id||"N/A")}</td>
            <td><span class="badge ${U}">${wt(N)}</span></td>
            <td><strong>${S.totalScore??0}</strong>/100</td>
            <td>${C.floodExposure??0} | ${C.roadAccess??0} | ${C.emergencyService??0}</td>
            <td>${wt((M.exposure?.category||"unaffected").toUpperCase())}</td>
            <td>${B}</td>
            <td>${wt((M.access?.status||"connected").toUpperCase())}</td>
          </tr>
        `}).join("")}
    </tbody>
  </table>

  <div class="disclaimer-box">
    <strong>⚠️ CONCEPTUAL DECISION-SUPPORT NOTICE & MODEL LIMITATIONS:</strong><br>
    1. <strong>Not a Calibrated Hydraulic Prediction:</strong> HighWater 3D is a conceptual spatial decision-support tool. It models bare-earth terrain immersion based on high-resolution DGM1 LiDAR data and does not simulate hydrodynamic water velocity, river momentum, or structural debris blockage.<br>
    2. <strong>Ground-Contact Depth Only:</strong> Building depth figures indicate water height at the ground-contact footprint centroid. They do not prove interior ingress, structural integrity damage, or occupant safety.<br>
    3. <strong>Unverified Facilities:</strong> All emergency shelters and medical points in the source dataset are simulated/proposed and are not certified municipal disaster response infrastructure (absence in research dataset does not prove that a real-world municipal emergency hospital does not exist).<br>
    4. <strong>Road Network Disconnections:</strong> The source road network contains 67 isolated components. Structures without baseline connectivity are designated <em>disconnected_in_source</em> to prevent false flood disaster isolation alerts.
  </div>
</body>
</html>`}downloadCSV(e,t="highwater3d_scenario_report.csv"){const i=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}openPrintReport(e){const t=window.open("","_blank");t?(t.document.write(e),t.document.close()):console.warn("[ScenarioManager] Popup blocked. Unable to open report window.")}}class Qg{constructor({viewer:e,controls:t,terrainManager:i,overlayManager:n,floodWaterManager:r=null}){this.viewer=e,this.controls=t,this.terrainManager=i,this.overlayManager=n||null,this.floodWaterManager=r||null,this.scenarioManager=new Jg,this.scenarioToDeleteId=null,this.activeScenarioId="scen-baseline-124",this.cacheDOMElements(),this.telemetry=new Kg(this.dom),this.hoveredFeature=null,this.selectedFeature=null,this.lastInspectUpdate=0,this.activeRoute=null,this.activeAlternative=null,this.showAlternative=!1,this.buildingRiskData=null,this.scenarioDiffData=null,this.riskSortMode="risk",this.accessLostActive=!1,this.overlayManager&&(this.overlayManager.onRouteRecalculated=(a,o)=>{this.onRouteUpdated(a,o)},this.overlayManager.onScenarioComparisonUpdated=a=>{this.renderScenarioComparison(a)},this.overlayManager.onBuildingRiskUpdated=a=>{this.renderRiskRanking(a)}),this.eventListeners=[],this.bindEvents()}cacheDOMElements(){this.dom={viewportContainer:document.getElementById("viewport-container"),loadingOverlay:document.getElementById("loading-overlay"),loadingStatusText:document.getElementById("loading-status-text"),loadingProgressFill:document.getElementById("loading-progress-fill"),errorOverlay:document.getElementById("error-overlay"),errorMsgText:document.getElementById("error-msg-text"),btnErrorRetry:document.getElementById("btn-error-retry"),provenanceBadge:document.getElementById("provenance-badge"),dataNotice:document.getElementById("data-notice"),btnCloseNotice:document.getElementById("btn-close-notice"),fpsCounter:document.getElementById("fps-counter"),camPos:document.getElementById("cam-pos"),targetPos:document.getElementById("target-pos"),camAlt:document.getElementById("cam-alt"),camAngles:document.getElementById("cam-angles"),cursorPos:document.getElementById("cursor-pos"),compassNeedle:document.getElementById("compass-needle"),drawCalls:document.getElementById("diag-draw-calls"),triangles:document.getElementById("diag-triangles"),frameTime:document.getElementById("diag-frame-time"),hudFeatureDetails:document.getElementById("hud-feature-details"),detailPanelTitle:document.getElementById("detail-panel-title"),detailPanelBadge:document.getElementById("detail-panel-badge"),btnCloseDetails:document.getElementById("btn-close-details"),detailPanelBody:document.getElementById("detail-panel-body"),hudLegendPanel:document.getElementById("hud-legend-panel"),btnToggleLegend:document.getElementById("btn-toggle-legend"),btnViewIso:document.getElementById("btn-view-iso"),btnViewTop:document.getElementById("btn-view-top"),btnResetCam:document.getElementById("btn-reset-cam"),btnToggleWireframe:document.getElementById("btn-toggle-wireframe"),btnToggleGrid:document.getElementById("btn-toggle-grid"),btnToggleBlds:document.getElementById("btn-toggle-blds"),btnToggleRoads:document.getElementById("btn-toggle-roads"),btnToggleFacs:document.getElementById("btn-toggle-facs"),btnToggleFlood:document.getElementById("btn-toggle-flood"),btnToggleWater:document.getElementById("btn-toggle-water"),waterLevelSlider:document.getElementById("water-level-slider"),waterLevelVal:document.getElementById("water-level-val"),btnWaterPlay:document.getElementById("btn-water-play"),btnWaterReset:document.getElementById("btn-water-reset"),btnToggleConnectivity:document.getElementById("btn-toggle-connectivity"),impactBadge:document.getElementById("impact-badge"),impactStatsText:document.getElementById("impact-stats-text"),btnToggleProfile:document.getElementById("btn-toggle-profile"),btnToggleDepth:document.getElementById("btn-toggle-depth"),btnTogglePassability:document.getElementById("btn-toggle-passability"),hudLegend:document.getElementById("hud-legend"),btnRouteShelter:document.getElementById("btn-route-shelter"),btnRouteHospital:document.getElementById("btn-route-hospital"),btnRouteAlt:document.getElementById("btn-route-alt"),btnRouteClear:document.getElementById("btn-route-clear"),btnToggleClusters:document.getElementById("btn-toggle-clusters"),btnToggleProposed:document.getElementById("btn-toggle-proposed"),hudScenarioDiff:document.getElementById("hud-scenario-diff"),scenarioBaselineTag:document.getElementById("scenario-baseline-tag"),btnSetBaseline:document.getElementById("btn-set-baseline"),btnToggleAccessLost:document.getElementById("btn-toggle-access-lost"),btnToggleRiskPanel:document.getElementById("btn-toggle-risk-panel"),btnDockRisk:document.getElementById("btn-dock-risk"),diffNewBlds:document.getElementById("diff-new-blds"),diffRouteLost:document.getElementById("diff-route-lost"),diffNewRoads:document.getElementById("diff-new-roads"),diffIsolatedShelters:document.getElementById("diff-isolated-shelters"),hudRiskPanel:document.getElementById("hud-risk-panel"),btnCloseRisk:document.getElementById("btn-close-risk"),riskSummaryCounts:document.getElementById("risk-summary-counts"),riskListContainer:document.getElementById("risk-list-container"),sortRisk:document.getElementById("sort-risk"),sortDepth:document.getElementById("sort-depth"),sortLost:document.getElementById("sort-lost"),btnOpenScenarios:document.getElementById("btn-open-scenarios"),btnExportReport:document.getElementById("btn-export-report"),btnDockScenarios:document.getElementById("btn-dock-scenarios"),btnDockExport:document.getElementById("btn-dock-export"),hudScenarioPanel:document.getElementById("hud-scenario-panel"),scenarioPanelCount:document.getElementById("scenario-panel-count"),btnCloseScenarios:document.getElementById("btn-close-scenarios"),scenarioStorageNotice:document.getElementById("scenario-storage-notice"),inputScenarioName:document.getElementById("input-scenario-name"),btnSaveScenario:document.getElementById("btn-save-scenario"),selectCompareBaseline:document.getElementById("select-compare-baseline"),selectCompareTarget:document.getElementById("select-compare-target"),btnExecuteCompare:document.getElementById("btn-execute-compare"),btnScenarioExportCsv:document.getElementById("btn-scenario-export-csv"),btnScenarioExportReport:document.getElementById("btn-scenario-export-report"),scenarioListContainer:document.getElementById("scenario-list-container"),reportExportOverlay:document.getElementById("report-export-overlay"),btnCloseExportModal:document.getElementById("btn-close-export-modal"),btnDownloadCsv:document.getElementById("btn-download-csv"),btnOpenPrintReport:document.getElementById("btn-open-print-report"),exportPreviewContainer:document.getElementById("export-preview-container"),deleteConfirmModal:document.getElementById("delete-confirm-modal"),btnConfirmDelete:document.getElementById("btn-confirm-delete"),btnCancelDelete:document.getElementById("btn-cancel-delete"),btnToggleDataQuality:document.getElementById("btn-toggle-data-quality"),btnPillIntegrity:document.getElementById("btn-pill-integrity"),btnDockIntegrity:document.getElementById("btn-dock-integrity"),hudDataQuality:document.getElementById("hud-data-quality"),btnCloseDataQuality:document.getElementById("btn-close-data-quality"),dqContent:document.getElementById("dq-content"),dqHeaderTag:document.getElementById("dq-header-tag")}}bindEvents(){this.addEvent(this.dom.btnViewIso,"click",()=>{this.setActivePresetBtn(this.dom.btnViewIso),this.controls.setPerspectiveIso()}),this.addEvent(this.dom.btnViewTop,"click",()=>{this.setActivePresetBtn(this.dom.btnViewTop),this.controls.setTopDown()}),this.addEvent(this.dom.btnResetCam,"click",()=>{this.setActivePresetBtn(this.dom.btnViewIso),this.controls.reset()}),this.addEvent(this.dom.btnToggleWireframe,"click",()=>{const r=this.terrainManager.toggleWireframe();this.dom.btnToggleWireframe.classList.toggle("active",r)});let e=!0;this.addEvent(this.dom.btnToggleGrid,"click",()=>{e=!e,this.viewer.setGridVisible(e),this.dom.btnToggleGrid.classList.toggle("active",e)}),this.dom.btnToggleBlds&&this.addEvent(this.dom.btnToggleBlds,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleBuildings();this.dom.btnToggleBlds.classList.toggle("active",r)}),this.dom.btnToggleRoads&&this.addEvent(this.dom.btnToggleRoads,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleRoads();this.dom.btnToggleRoads.classList.toggle("active",r)}),this.dom.btnToggleFacs&&this.addEvent(this.dom.btnToggleFacs,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleFacilities();this.dom.btnToggleFacs.classList.toggle("active",r)}),this.dom.btnToggleFlood&&this.addEvent(this.dom.btnToggleFlood,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleHistoricalFlood();this.dom.btnToggleFlood.classList.toggle("active",r)}),this.dom.btnToggleWater&&this.addEvent(this.dom.btnToggleWater,"click",()=>{if(!this.floodWaterManager)return;const r=this.floodWaterManager.setVisible();this.dom.btnToggleWater.classList.toggle("active",r)}),this.dom.waterLevelSlider&&this.addEvent(this.dom.waterLevelSlider,"input",r=>{if(!this.floodWaterManager)return;const a=parseFloat(r.target.value);this.floodWaterManager.setWaterLevel(a),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${a.toFixed(2)} m`)}),this.dom.btnWaterPlay&&this.addEvent(this.dom.btnWaterPlay,"click",()=>{if(!this.floodWaterManager)return;const r=this.floodWaterManager.togglePlayPause();this.dom.btnWaterPlay.textContent=r?"⏸ Pause":"▶ Rise",this.dom.btnWaterPlay.classList.toggle("active",r)}),this.dom.btnWaterReset&&this.addEvent(this.dom.btnWaterReset,"click",()=>{this.floodWaterManager&&(this.floodWaterManager.reset(),this.dom.waterLevelSlider&&(this.dom.waterLevelSlider.value=this.floodWaterManager.defaultWaterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${this.floodWaterManager.defaultWaterLevel.toFixed(2)} m`),this.dom.btnWaterPlay&&(this.dom.btnWaterPlay.textContent="▶ Rise",this.dom.btnWaterPlay.classList.remove("active")))}),this.dom.btnToggleConnectivity&&this.addEvent(this.dom.btnToggleConnectivity,"click",()=>{if(!this.floodWaterManager)return;const r=this.floodWaterManager.setConnectivity();this.dom.btnToggleConnectivity.textContent=r?"🌊 Connected: ON":"🌊 Connected: OFF",this.dom.btnToggleConnectivity.classList.toggle("active",r)}),this.dom.btnToggleProfile&&this.addEvent(this.dom.btnToggleProfile,"click",()=>{if(!this.floodWaterManager)return;const a=this.floodWaterManager.profileMode==="planar"?"slope":"planar";this.floodWaterManager.setProfileMode(a),this.dom.btnToggleProfile.textContent=a==="slope"?"📐 Profile: Slope-Aware":"📐 Profile: Planar",this.dom.btnToggleProfile.classList.toggle("active",a==="slope")}),this.dom.btnToggleDepth&&this.addEvent(this.dom.btnToggleDepth,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleBuildingDepthMode();this.dom.btnToggleDepth.textContent=r?"🎨 Depth: ON":"🎨 Depth: OFF",this.dom.btnToggleDepth.classList.toggle("active",r)}),this.dom.btnTogglePassability&&this.addEvent(this.dom.btnTogglePassability,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleRoadPassabilityMode();this.dom.btnTogglePassability.textContent=r?"🛣️ Passability: ON":"🛣️ Passability: OFF",this.dom.btnTogglePassability.classList.toggle("active",r)}),this.addEvent(this.dom.btnCloseNotice,"click",()=>{this.dom.dataNotice&&this.dom.dataNotice.classList.add("hidden")}),this.addEvent(this.dom.viewportContainer,"mousemove",r=>{const a=this.dom.viewportContainer.getBoundingClientRect();this.telemetry.setMouseCoords(r.clientX,r.clientY,a)});let t=0,i=0;this.addEvent(this.dom.viewportContainer,"pointerdown",r=>{t=r.clientX,i=r.clientY}),this.addEvent(this.dom.viewportContainer,"click",r=>{if(!this.overlayManager||!this.viewer||Math.hypot(r.clientX-t,r.clientY-i)>6)return;const o=this.dom.viewportContainer.getBoundingClientRect(),l={x:(r.clientX-o.left)/o.width*2-1,y:-((r.clientY-o.top)/o.height)*2+1},c=this.overlayManager.inspectFeature(l,this.viewer.camera);c?this.selectFeature(c):this.deselectFeature()}),this.dom.btnCloseDetails&&this.addEvent(this.dom.btnCloseDetails,"click",r=>{r.stopPropagation(),this.deselectFeature()}),this.dom.btnToggleLegend&&this.addEvent(this.dom.btnToggleLegend,"click",()=>{if(this.dom.hudLegendPanel){const r=this.dom.hudLegendPanel.classList.toggle("collapsed");this.dom.btnToggleLegend.textContent=r?"▸":"▾"}}),this.addEvent(this.dom.btnErrorRetry,"click",()=>{window.location.reload()}),this.dom.btnRouteShelter&&this.addEvent(this.dom.btnRouteShelter,"click",()=>{this.executeRoute("shelter")}),this.dom.btnRouteHospital&&this.addEvent(this.dom.btnRouteHospital,"click",()=>{this.executeRoute("hospital")}),this.dom.btnRouteAlt&&this.addEvent(this.dom.btnRouteAlt,"click",()=>{this.toggleAlternativeRoute()}),this.dom.btnRouteClear&&this.addEvent(this.dom.btnRouteClear,"click",()=>{this.overlayManager&&this.overlayManager.clearRoute()}),this.dom.btnToggleClusters&&this.addEvent(this.dom.btnToggleClusters,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleClusters();this.dom.btnToggleClusters.classList.toggle("active",r)}),this.dom.btnToggleProposed&&this.addEvent(this.dom.btnToggleProposed,"click",()=>{if(!this.overlayManager)return;const r=this.overlayManager.toggleProposedSites();this.dom.btnToggleProposed.classList.toggle("active",r)}),this.dom.btnSetBaseline&&this.addEvent(this.dom.btnSetBaseline,"click",()=>{this.setBaselineFromCurrent()}),this.dom.btnToggleAccessLost&&this.addEvent(this.dom.btnToggleAccessLost,"click",()=>{this.toggleAccessLostHighlights()}),this.dom.btnToggleRiskPanel&&this.addEvent(this.dom.btnToggleRiskPanel,"click",()=>{this.toggleRiskPanel()}),this.dom.btnDockRisk&&this.addEvent(this.dom.btnDockRisk,"click",()=>{this.toggleRiskPanel()}),this.dom.btnCloseRisk&&this.addEvent(this.dom.btnCloseRisk,"click",()=>{this.dom.hudRiskPanel&&this.dom.hudRiskPanel.classList.remove("active")}),this.dom.sortRisk&&this.addEvent(this.dom.sortRisk,"click",()=>{this.setRiskSortMode("risk")}),this.dom.sortDepth&&this.addEvent(this.dom.sortDepth,"click",()=>{this.setRiskSortMode("depth")}),this.dom.sortLost&&this.addEvent(this.dom.sortLost,"click",()=>{this.setRiskSortMode("lost")}),this.dom.btnOpenScenarios&&this.addEvent(this.dom.btnOpenScenarios,"click",()=>{this.toggleScenarioPanel()}),this.dom.btnDockScenarios&&this.addEvent(this.dom.btnDockScenarios,"click",()=>{this.toggleScenarioPanel()}),this.dom.btnCloseScenarios&&this.addEvent(this.dom.btnCloseScenarios,"click",()=>{this.closeScenarioPanel()}),this.dom.btnSaveScenario&&this.addEvent(this.dom.btnSaveScenario,"click",()=>{this.saveCurrentScenario()}),this.dom.inputScenarioName&&this.addEvent(this.dom.inputScenarioName,"keydown",r=>{r.key==="Enter"&&this.saveCurrentScenario()}),this.dom.btnExecuteCompare&&this.addEvent(this.dom.btnExecuteCompare,"click",()=>{this.compareSelectedScenarios()}),this.dom.btnExportReport&&this.addEvent(this.dom.btnExportReport,"click",()=>{this.openExportModal()}),this.dom.btnDockExport&&this.addEvent(this.dom.btnDockExport,"click",()=>{this.openExportModal()}),this.dom.btnScenarioExportCsv&&this.addEvent(this.dom.btnScenarioExportCsv,"click",()=>{this.downloadScenarioCSV()}),this.dom.btnScenarioExportReport&&this.addEvent(this.dom.btnScenarioExportReport,"click",()=>{this.openExportModal()}),this.dom.btnCloseExportModal&&this.addEvent(this.dom.btnCloseExportModal,"click",()=>{this.closeExportModal()}),this.dom.btnDownloadCsv&&this.addEvent(this.dom.btnDownloadCsv,"click",()=>{this.downloadScenarioCSV()}),this.dom.btnOpenPrintReport&&this.addEvent(this.dom.btnOpenPrintReport,"click",()=>{this.openScenarioPrintReport()}),this.dom.btnConfirmDelete&&this.addEvent(this.dom.btnConfirmDelete,"click",()=>{this.executeDeleteScenario()}),this.dom.btnCancelDelete&&this.addEvent(this.dom.btnCancelDelete,"click",()=>{this.cancelDeleteScenario()});const n=()=>this.toggleDataQualityPanel();this.dom.btnToggleDataQuality&&this.addEvent(this.dom.btnToggleDataQuality,"click",n),this.dom.btnPillIntegrity&&this.addEvent(this.dom.btnPillIntegrity,"click",n),this.dom.btnDockIntegrity&&this.addEvent(this.dom.btnDockIntegrity,"click",n),this.dom.btnCloseDataQuality&&this.addEvent(this.dom.btnCloseDataQuality,"click",()=>{this.dom.hudDataQuality&&this.dom.hudDataQuality.classList.add("hidden")})}setActivePresetBtn(e){[this.dom.btnViewIso,this.dom.btnViewTop].forEach(t=>{t&&t.classList.remove("active")}),e&&e.classList.add("active")}setFloodWaterManager(e){this.floodWaterManager=e,this.floodWaterManager&&(this.floodWaterManager.onImpactUpdate=t=>{if(this.dom.waterLevelSlider&&Math.abs(parseFloat(this.dom.waterLevelSlider.value)-t.waterLevel)>.05&&(this.dom.waterLevelSlider.value=t.waterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${t.waterLevel.toFixed(2)} m`),this.dom.impactStatsText){const i=t.buildingDepthBreakdown||{shallow:0,moderate:0,deep:0},n=t.roadPassabilityBreakdown||{waterlogged:0,submerged:0},r=t.shelterAccessibilityBreakdown||{isolated:0,inundated:0},a=(i.shallow||0)+(i.moderate||0)+(i.deep||0),o=(n.waterlogged||0)+(n.submerged||0),l=(r.isolated||0)+(r.inundated||0);this.dom.impactStatsText.textContent=`Bld: ${a}/${t.totalBuildings} (S:${i.shallow} M:${i.moderate} D:${i.deep}) | Rds: ${o}/${t.totalRoads} (${n.submerged} cut) | Shelters: ${l}/${t.totalFacilities} (${r.isolated} iso)`}this.dom.btnWaterPlay&&!this.floodWaterManager.isPlaying&&this.dom.btnWaterPlay.classList.contains("active")&&(this.dom.btnWaterPlay.textContent="▶ Rise",this.dom.btnWaterPlay.classList.remove("active"))})}addEvent(e,t,i){e&&(e.addEventListener(t,i),this.eventListeners.push({target:e,event:t,handler:i}))}setLoadingProgress(e,t){this.dom.loadingStatusText&&(this.dom.loadingStatusText.textContent=e),this.dom.loadingProgressFill&&(this.dom.loadingProgressFill.style.width=`${Math.min(Math.max(t,0),100)}%`)}hideLoading(){this.dom.loadingOverlay&&(this.dom.loadingOverlay.classList.add("fade-out"),setTimeout(()=>{this.dom.loadingOverlay&&(this.dom.loadingOverlay.style.display="none")},350))}showError(e){this.dom.errorMsgText&&(this.dom.errorMsgText.textContent=e),this.dom.errorOverlay&&this.dom.errorOverlay.classList.remove("hidden"),this.dom.loadingOverlay&&(this.dom.loadingOverlay.style.display="none")}setTerrainProvenanceReal(e){if(this.dom.provenanceBadge&&(this.dom.provenanceBadge.className="provenance-badge real-dem-badge",this.dom.provenanceBadge.title=`${e.label}
Vertical: ${e.verticalDatum}
Resolution: ${e.resolution}
Attribution: ${e.attribution}`,this.dom.provenanceBadge.innerHTML=`
        <span class="indicator-dot success"></span>
        <span class="badge-text">TERRAIN: LVermGeo RLP DGM1 (REAL DEM)</span>
      `),this.dom.dataNotice){this.dom.dataNotice.className="data-notice-banner provenance-banner",this.dom.dataNotice.innerHTML=`
        <span class="notice-icon">✓</span>
        <span class="notice-text">
          <strong>VERIFIED REAL DEM:</strong> Active 3D terrain derived from official Rhineland-Palatinate DGM1 bare-earth LiDAR data (${e.resolution}, ${e.verticalDatum}). ${e.attribution}
        </span>
        <button class="notice-close" id="btn-close-notice" title="Dismiss notice">✕</button>
      `;const t=document.getElementById("btn-close-notice");t&&t.addEventListener("click",()=>{this.dom.dataNotice.classList.add("hidden")})}}selectFeature(e){if(!e){this.deselectFeature();return}this.selectedFeature=e,e.kind==="building"&&e.id?this.overlayManager?.highlightBuilding(e.id):this.overlayManager?.clearBuildingHighlight(),this.showFeatureDetails(e)}deselectFeature(){this.selectedFeature=null,this.overlayManager?.clearBuildingHighlight(),this.hideFeatureDetails()}hideFeatureDetails(){this.dom.hudFeatureDetails&&this.dom.hudFeatureDetails.classList.add("hidden")}showFeatureDetails(e){if(!(!this.dom.hudFeatureDetails||!this.dom.detailPanelBody))if(this.dom.hudFeatureDetails.classList.remove("hidden"),e.kind==="building"){const t=e.riskEvaluation,i=e.flooded,n=typeof e.modeledWaterElev=="number"?e.modeledWaterElev:this.floodWaterManager?Math.round(this.floodWaterManager.getWaterElevationAt(e.center.x,e.center.z)*100)/100:null;if(t){const r=t.exposure||{},a=t.access||{},o=t.risk||{},l=o.subScores||{floodExposure:0,roadAccess:0,emergencyService:0},c=o.priorityTier||"LOW",d=o.totalScore??0,h=typeof r.waterDepth=="number"?r.waterDepth:typeof e.currentWaterDepth=="number"?e.currentWaterDepth:0,u=o.isUnknown||r.category==="UNKNOWN";let p="success";c==="CRITICAL"||c==="HIGH"?p="danger":c==="MODERATE"?p="warning":c==="UNKNOWN"&&(p="info"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=`STRUCTURE ${e.id}`),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${p}`,this.dom.detailPanelBadge.textContent=`${c} (${d}/100)`);const g=Math.round((r.affectedRatio||(h>.05?1:0))*100),v=a.status==="route_lost"?'<span class="chip-access-lost font-mono font-bold">ROUTE LOST (Flood Cut-Off)</span>':a.status==="disconnected_in_source"?'<span class="chip-access-source font-mono">DISCONNECTED IN SOURCE</span>':a.status==="access_degraded"?'<span class="chip-access-degraded font-mono">ACCESS DEGRADED</span>':a.status==="unknown"?'<span class="chip-road-unknown font-mono">UNKNOWN ACCESS</span>':'<span class="chip-access-connected font-mono">CONNECTED</span>',m=a.canReachShelter?`<span class="chip-prop-viable font-mono">${a.nearestShelter?.name||"Shelter"} (${(a.shelterRouteStatus||"DRY").toUpperCase()})</span>`:'<span class="chip-prop-flooded font-mono font-bold">NO REACHABLE SHELTER</span>',f=u?`
          <div class="detail-alert-box warning">
            ⚠️ <strong>DATA QUALITY WARNING:</strong> Missing or NoData DGM1 bare-earth DEM elevation at structure centroid. Data uncertainty penalty applied. Not treated as safe.
          </div>
        `:"";this.dom.detailPanelBody.innerHTML=`
          <div class="detail-card">
            ${f}

            <!-- Section 1: Overview -->
            <div class="detail-section">
              <div class="detail-section-title">OVERVIEW</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Structure ID:</span>
                  <span class="detail-val font-mono font-bold">${e.id}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Area:</span>
                  <span class="detail-val font-mono">${e.areaSqM} m²</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ground Base Elev:</span>
                  <span class="detail-val font-mono">${u?"NoData":`${e.baseElevationM} m MSL`}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Building Height:</span>
                  <span class="detail-val">${e.heightM||7} m (~2 storeys)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                  <span class="detail-val">${i?'<span class="text-rose font-bold">Flooded Inundation</span>':"Dry / Non-Flooded"}</span>
                </div>
              </div>
            </div>

            <!-- Section 2: Flood Exposure -->
            <div class="detail-section">
              <div class="detail-section-title">FLOOD EXPOSURE</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Ground Water Depth:</span>
                  <span class="detail-val font-mono ${h>.05?"text-amber font-bold":""}">${u?"Unknown DEM":h>.05?`${h.toFixed(2)} m`:"0.00 m (Dry)"}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Exposure Category:</span>
                  <span class="detail-val font-mono">${r.category||(h>=1.5?"DEEP":h>=.5?"MODERATE":h>.05?"SHALLOW":"UNAFFECTED")}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Flooded:</span>
                  <span class="detail-val font-mono">${u?"Indeterminate":`${g}%`}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Water Surface Elev:</span>
                  <span class="detail-val font-mono">${n!==null?`${n.toFixed(2)} m MSL`:"Baseflow"}</span>
                </div>
              </div>
            </div>

            <!-- Section 3: Risk Ranking & Subscores -->
            <div class="detail-section">
              <div class="detail-section-title">RISK EVALUATION (${d}/100)</div>
              <div class="risk-subscores-grid">
                <div class="subscore-cell">
                  <div class="subscore-lbl">Flood Exp</div>
                  <div class="subscore-val ${l.floodExposure>=35?"text-rose":l.floodExposure>=20?"text-amber":"text-emerald"}">${l.floodExposure}/50</div>
                  <div class="subscore-sub">${r.category||"DRY"}</div>
                </div>
                <div class="subscore-cell border-x">
                  <div class="subscore-lbl">Road Access</div>
                  <div class="subscore-val ${l.roadAccess>=20?"text-rose":l.roadAccess>=12?"text-amber":"text-emerald"}">${l.roadAccess}/25</div>
                  <div class="subscore-sub">${a.status?a.status.replace(/_/g," "):"connected"}</div>
                </div>
                <div class="subscore-cell">
                  <div class="subscore-lbl">Services</div>
                  <div class="subscore-val ${l.emergencyService>=20?"text-rose":l.emergencyService>=12?"text-amber":"text-emerald"}">${l.emergencyService}/25</div>
                  <div class="subscore-sub">${a.canReachShelter?"Reachable":"Isolated"}</div>
                </div>
              </div>
              <div class="detail-meta-grid" style="margin-top:6px;">
                <div class="detail-row">
                  <span class="detail-label">Risk Justification:</span>
                  <span class="detail-val text-muted font-mono" style="font-size:10px;line-height:1.3;">${o.explanation||"Evaluated scenario conditions"}</span>
                </div>
              </div>
            </div>

            <!-- Section 4: Accessibility & Services -->
            <div class="detail-section">
              <div class="detail-section-title">ACCESSIBILITY & SERVICES</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Road Network Access:</span>
                  <span class="detail-val">${v}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Nearest Shelter:</span>
                  <span class="detail-val">${m}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Hospital Route:</span>
                  <span class="detail-val text-muted">⚠️ No verified hospital in source data</span>
                </div>
              </div>
            </div>

            <!-- Section 5: Data Quality & Disclaimers -->
            <div class="detail-section data-quality-notice">
              <div class="detail-disclaimer">
                ⚠️ Conceptual decision-support indicator only. Ground-contact depth does not establish interior flooding, structural collapse, or calibrated life-safety probability. All facilities are simulated and unverified.
              </div>
            </div>

            <!-- Section 6: Action Buttons -->
            <div class="detail-actions">
              <button class="detail-action-btn btn-shelter" id="btn-card-shelter" ${a.canReachShelter?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Evac to Shelter</button>
              <button class="detail-action-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>
          </div>`;const y=document.getElementById("btn-card-shelter");y&&a.canReachShelter&&y.addEventListener("click",()=>this.executeRoute("shelter"));const _=document.getElementById("btn-card-hospital");_&&_.addEventListener("click",()=>this.executeRoute("hospital"))}else{const r=typeof e.currentWaterDepth=="number"?e.currentWaterDepth:n!==null?Math.max(0,Math.round((n-e.baseElevationM)*100)/100):0,a=r>.05;let o="DRY",l="success";r>=1.5?(o=`DEEP (${r.toFixed(2)}m)`,l="danger"):r>=.5?(o=`MODERATE (${r.toFixed(2)}m)`,l="danger"):r>.05&&(o=`SHALLOW (${r.toFixed(2)}m)`,l="info"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=`STRUCTURE ${e.id}`),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${l}`,this.dom.detailPanelBadge.textContent=o),this.dom.detailPanelBody.innerHTML=`
          <div class="detail-card">
            <div class="detail-section">
              <div class="detail-section-title">OVERVIEW</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Structure ID:</span>
                  <span class="detail-val font-mono font-bold">${e.id}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Area:</span>
                  <span class="detail-val font-mono">${e.areaSqM} m²</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ground Base Elev:</span>
                  <span class="detail-val font-mono">${e.baseElevationM} m MSL</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Building Height:</span>
                  <span class="detail-val">${e.heightM} m (2 storeys)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                  <span class="detail-val">${i?'<span class="text-rose font-bold">Flooded</span>':"Normal"}</span>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <div class="detail-section-title">FLOOD EXPOSURE</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Modeled Water Depth:</span>
                  <span class="detail-val ${a?"text-amber font-bold":""}">${r>.05?`${r.toFixed(2)} m`:"0.00 m (Dry)"}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Water Surface Elev:</span>
                  <span class="detail-val font-mono">${n!==null?`${n.toFixed(2)} m MSL`:"Baseflow"}</span>
                </div>
              </div>
            </div>

            <div class="detail-section data-quality-notice">
              <div class="detail-disclaimer">
                ⚠️ Ground-contact depth only. Does not establish interior flooding, structural damage, or occupant risk.
              </div>
            </div>

            <div class="detail-actions">
              <button class="detail-action-btn btn-shelter" id="btn-card-shelter">🏃 Evac to Shelter</button>
              <button class="detail-action-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>
          </div>`;const c=document.getElementById("btn-card-shelter");c&&c.addEventListener("click",()=>this.executeRoute("shelter"));const d=document.getElementById("btn-card-hospital");d&&d.addEventListener("click",()=>this.executeRoute("hospital"))}}else if(e.kind==="road"){const t=e.flooded,i=typeof e.maxWaterDepth=="number"?e.maxWaterDepth:0,n=(e.status||(i>.15?"impassable":i>0?"exposed":"unaffected")).toLowerCase();let r="success",a="UNAFFECTED";n==="impassable"||e.passabilityStatus==="submerged"?(r="danger",a=`IMPASSABLE (${i.toFixed(2)}m)`):n==="exposed"||e.passabilityStatus==="waterlogged"?(r="warning",a=`EXPOSED (${i.toFixed(2)}m)`):n==="unknown"&&(r="info",a="UNKNOWN ELEV"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=`ROAD ${e.id}`),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${r}`,this.dom.detailPanelBadge.textContent=a);const o=e.minElevation!==null&&e.minElevation!==void 0?`${e.minElevation.toFixed(1)}m – ${e.maxElevation.toFixed(1)}m MSL`:e.points&&e.points.length?`${Math.round(e.points[0].y)}m – ${Math.round(e.points[e.points.length-1].y)}m MSL`:"N/A",l=typeof e.exposedLengthMeters=="number"&&e.exposedLengthMeters>0?`${e.exposedLengthMeters.toFixed(1)} m (${Math.round((e.exposedRatio||0)*100)}%)`:"0.0 m (0% - Dry)",c=e.componentId?`Component #${e.componentId} (${e.componentSize||1} connected roads)`:"Segment isolated in source",d=e.statusReason||(n==="impassable"?`Estimated water depth (${i.toFixed(2)}m) exceeds 0.15m conservative threshold`:n==="exposed"?`Estimated water depth (${i.toFixed(2)}m) detected, below 0.15m threshold`:"No positive water depth detected along road geometry (dry)");this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Road ID:</span>
                <span class="detail-val font-mono font-bold">${e.id}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Segment Length:</span>
                <span class="detail-val font-mono">${e.lengthMeters} m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Elevation Range:</span>
                <span class="detail-val font-mono">${o}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                <span class="detail-val">${t?'<span class="text-rose font-bold">Flooded Cutoff</span>':"Passable Route"}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">FLOOD STATUS & PASSABILITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Classification:</span>
                <span class="detail-val ${n==="impassable"?"text-rose font-bold":n==="exposed"?"text-amber font-bold":"text-emerald"}">${n.toUpperCase()}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Max Est. Depth:</span>
                <span class="detail-val ${i>0?"text-amber font-bold":""}">${i>0?`${i.toFixed(2)} m`:"0.00 m (Dry)"}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Exposed Length:</span>
                <span class="detail-val">${l}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Assessment Reason:</span>
                <span class="detail-val text-muted" style="font-size:10px;line-height:1.3;">${d}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">TOPOLOGY & CONNECTIVITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Network Component:</span>
                <span class="detail-val font-mono">${c}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ Model-estimated terrain exposure based on DGM1 bare-earth LiDAR DEM. Does not predict water velocity, debris obstruction, or bridge structural integrity.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-rd">🏃 Evac from Road</button>
            <button class="detail-action-btn btn-hospital" id="btn-card-hospital-rd">🏥 Route to Hospital</button>
          </div>
        </div>`;const h=document.getElementById("btn-card-shelter-rd");h&&h.addEventListener("click",()=>this.executeRoute("shelter"));const u=document.getElementById("btn-card-hospital-rd");u&&u.addEventListener("click",()=>this.executeRoute("hospital"))}else if(e.kind==="facility"){const t=e.shelterEvaluation;let i="success",n="OPERATIONAL";const r=t?t.accessStatus:e.accessibilityStatus||"operational",a=t?t.isSiteInundated:typeof e.siteWaterDepth=="number"&&e.siteWaterDepth>.05,o=t?t.siteWaterDepth||0:typeof e.siteWaterDepth=="number"?e.siteWaterDepth:0,l=t?t.groundElevation:e.elevationM,c=t?t.waterElevation:this.floodWaterManager?Math.round(this.floodWaterManager.currentWaterLevel*10)/10:124;a?(i="danger",n="SITE INUNDATED"):r==="isolated"?(i="info",n="ISOLATED BY ROADS"):r==="exposed"?(i="warning",n="CORRIDOR EXPOSED"):r==="disconnected"?(i="info",n="DISCONNECTED"):r==="unknown"&&(i="info",n="UNKNOWN ELEV"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=e.name||"EMERGENCY FACILITY"),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${i}`,this.dom.detailPanelBadge.textContent=n);const d='<span class="chip-prop-flooded font-mono" style="background:rgba(239,68,68,0.15);color:#fca5a5;padding:2px 6px;border-radius:4px;font-size:10px;">SIMULATED (UNVERIFIED)</span>',h=a?`<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${o.toFixed(2)}m depth)</span>`:`<span class="chip-prop-viable font-mono font-bold">DRY (+${l!==null?(l-c).toFixed(1):0}m clearance)</span>`,u=r==="isolated"?'<span class="chip-access-lost font-mono font-bold">ISOLATED (Connecting roads submerged)</span>':r==="exposed"?'<span class="chip-access-degraded font-mono">EXPOSED (Shallow water &lt;0.15m)</span>':r==="disconnected"?'<span class="chip-access-source font-mono">DISCONNECTED FROM ROADS</span>':'<span class="chip-access-connected font-mono">DRY PASSABLE CORRIDOR</span>';this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Facility ID:</span>
                <span class="detail-val font-mono">${e.id}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Facility Type:</span>
                <span class="detail-val font-mono">${(e.type||"shelter").toUpperCase()}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Dataset Provenance:</span>
                <span class="detail-val">${d}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">FLOOD EXPOSURE</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Site Inundation:</span>
                <span class="detail-val">${h}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ground / Water MSL:</span>
                <span class="detail-val font-mono">${l!==null?`${l.toFixed(1)}m`:"NoData"} / ${c.toFixed(1)}m</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">ACCESSIBILITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Road Corridor:</span>
                <span class="detail-val">${u}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Nearby Road Node:</span>
                <span class="detail-val font-mono text-muted">${t?.roadNodeId?`Node ${t.roadNodeId}`:e.nearbyRoadStatus||"Evaluated"}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ SIMULATED EMERGENCY FACILITY: Unverified facility record from research scenario dataset. Not an officially verified municipal shelter or hospital. Never treated as verified safety infrastructure.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-fac" ${a?'disabled style="opacity:0.5;cursor:not-allowed;"':""}>🏃 Route to this Facility</button>
          </div>
        </div>`;const p=document.getElementById("btn-card-shelter-fac");p&&!a&&p.addEventListener("click",()=>{this.overlayManager?.routeToNearestDestination(this.resolveOrigin(),[{x:e.center.x,z:e.center.z,id:e.id,name:e.name,type:e.type||"shelter",provenance:"simulated"}],{routeType:"shelter"})})}else if(e.kind==="flood-extent")this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent="HISTORICAL FLOOD EXTENT"),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className="status-pill danger",this.dom.detailPanelBadge.textContent="JULY 2021 DISASTER"),this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">EVENT OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Event:</span>
                <span class="detail-val font-bold text-rose">Ahr Valley Catastrophic Flash Flood</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date of Disaster:</span>
                <span class="detail-val font-mono">14–15 July 2021</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Study Location:</span>
                <span class="detail-val">Dernau, Rhineland-Palatinate (DE)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Primary Source:</span>
                <span class="detail-val font-mono text-cyan">Copernicus EMS (EMSR517) / SpaceNet 8</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">OBSERVED MUNICIPAL IMPACT</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Inundated Buildings:</span>
                <span class="detail-val font-mono font-bold text-amber">485 of 759 structures (~64%)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Flooded Cut-Off Roads:</span>
                <span class="detail-val font-mono font-bold text-rose">42 of 117 road segments (~36%)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Observed Crest Elev:</span>
                <span class="detail-val font-mono">~130.0m – 135.0m MSL</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ℹ️ Verified disaster extent delineated from multi-temporal Sentinel-1 SAR and Sentinel-2 optical satellite imagery, aerial ortho-imagery, and official Copernicus Emergency Management Service crisis maps.
            </div>
          </div>
        </div>`;else if(e.kind==="flood-water"){const t=e.waterLevel??(this.floodWaterManager?this.floodWaterManager.currentWaterLevel:124),i=t>=132;this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent="SIMULATED FLOOD SURFACE"),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${i?"danger":"info"}`,this.dom.detailPanelBadge.textContent=`${t.toFixed(2)} m MSL`),this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">SIMULATION SCENARIO</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Water Stage:</span>
                <span class="detail-val font-mono font-bold text-cyan">${t.toFixed(2)} m MSL</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Longitudinal Profile:</span>
                <span class="detail-val">${e.profileMode||"Slope-Aware (Ahr Thalweg Monotonic Gradient)"}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Hydraulic Connectivity:</span>
                <span class="detail-val">${e.hydraulicallyConnected||"Connected to Riverbed"}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Study Valley Bounds:</span>
                <span class="detail-val font-mono">120.00m (Downstream) – 155.00m (Crest)</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ CONCEPTUAL TERRAIN MASK: Dynamic elevation-aware surface calibrated against Rhineland-Palatinate DGM1 bare-earth LiDAR DEM. Not a 2D hydrodynamic Saint-Venant simulation. Does not model time-dependent wave propagation, breach dynamics, or flow velocity.
            </div>
          </div>
        </div>`}else if(e.kind==="cluster"){const t=e.cluster||{},i=t.exposureCounts||{},n=t.dominantExposure||"LOW",r=t.isConnectedToRoads!==!1;let a="warning";n==="CRITICAL"||n==="HIGH"?a="danger":n==="MODERATE"?a="warning":n==="LOW"&&(a="info"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=`CLUSTER ${e.name||t.id}`),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${a}`,this.dom.detailPanelBadge.textContent=`CLUSTER (${n})`);const o=r?`<span class="chip-prop-viable font-bold font-mono">CONNECTED (${t.nearestRoadNode?t.nearestRoadNode.id:"Active"})</span>`:'<span class="chip-prop-flooded font-bold font-mono">UNCONNECTED (&gt;160m)</span>',l=`
        <div class="exposure-breakdown-chips">
          ${i.CRITICAL?`<span class="chip-cluster-crit font-mono">Crit: ${i.CRITICAL}</span>`:""}
          ${i.HIGH?`<span class="chip-cluster-high font-mono">High: ${i.HIGH}</span>`:""}
          ${i.MODERATE?`<span class="chip-cluster-mod font-mono">Mod: ${i.MODERATE}</span>`:""}
          ${i.LOW?`<span class="chip-cluster-low font-mono" style="background:rgba(59,130,246,0.2);color:#93c5fd;padding:2px 6px;border-radius:4px;font-size:10px;">Low: ${i.LOW}</span>`:""}
          ${i.UNKNOWN?`<span class="chip-road-unknown font-mono" style="background:rgba(156,163,175,0.2);color:#d1d5db;padding:2px 6px;border-radius:4px;font-size:10px;">Unk: ${i.UNKNOWN}</span>`:""}
        </div>
      `;this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">CLUSTER OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Structures Count:</span>
                <span class="detail-val font-mono font-bold">${t.buildingCount||0} buildings</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Estimated Occupancy:</span>
                <span class="detail-val font-mono font-bold text-amber">${t.estimatedPopulation||0} persons</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Cluster Radius:</span>
                <span class="detail-val font-mono">${Math.round(t.radiusM||0)} m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Road Network Access:</span>
                <span class="detail-val">${o}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Access Assessment:</span>
                <span class="detail-val text-muted">${t.originStatusText||"Evaluated"}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">EXPOSURE BREAKDOWN</div>
            <div style="margin-top:4px;">${l}</div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ${r?"ℹ️ Evacuation route calculated from verified road access node near cluster boundary.":"⚠️ Approximate / unconnected origin. Distance to verified road network exceeds 160m threshold. No road connection fabricated."}
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-cl" ${r?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Evac Cluster to Shelter</button>
            <button class="detail-action-btn btn-hospital" id="btn-card-hospital-cl" ${r?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏥 Route Cluster to Hospital</button>
          </div>
        </div>`;const c=document.getElementById("btn-card-shelter-cl");c&&r&&c.addEventListener("click",()=>this.executeRoute("shelter"));const d=document.getElementById("btn-card-hospital-cl");d&&r&&d.addEventListener("click",()=>this.executeRoute("hospital"))}else if(e.kind==="proposed-site"){const t=e.evaluation||{},i=typeof t.score=="number"?t.score:0,n=t.viable,r=t.isInundated;let a="success",o=`VIABLE (${i}/100)`;r?(a="danger",o="INUNDATED (0/100)"):n||(a="warning",o=`UNVIABLE (${i}/100)`),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=t.name||e.name||"PROPOSED SITE"),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${a}`,this.dom.detailPanelBadge.textContent=o);const l=t.scoreBreakdown||{clearanceScore:0,roadScore:0,slopeScore:0,proximityScore:0},c=`Clearance: ${l.clearanceScore}/40 · Road: ${l.roadScore}/30 · Slope: ${l.slopeScore}/15 · Proximity: ${l.proximityScore}/15`,d=r?`<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${Math.abs(t.clearanceAboveWater||0).toFixed(1)}m below water)</span>`:`<span class="chip-prop-viable font-mono font-bold">+${(t.clearanceAboveWater||0).toFixed(1)}m above water</span>`,h=t.connectedToRoad?`<span class="chip-prop-viable font-mono">CONNECTED (${Math.round(t.roadDistanceM||0)}m)</span>`:'<span class="chip-prop-flooded font-mono">DISCONNECTED</span>';this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">SITE SUITABILITY (${i}/100)</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Designated Role:</span>
                <span class="detail-val font-mono">${t.type==="shelter"?"Proposed Shelter Candidate":"Proposed Medical Response Point"}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Est. Evacuee Capacity:</span>
                <span class="detail-val font-mono font-bold">${t.capacityEst||0} persons</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Water Clearance:</span>
                <span class="detail-val">${d}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ground / Water MSL:</span>
                <span class="detail-val font-mono">${(t.groundElevation||0).toFixed(1)}m / ${(t.waterElevation||0).toFixed(1)}m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Terrain Slope:</span>
                <span class="detail-val font-mono">${(t.slopeDeg||0).toFixed(1)}° (${t.slopeDeg<5?"Gentle":t.slopeDeg<12?"Moderate":"Steep"})</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Road Network Access:</span>
                <span class="detail-val">${h}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Score Breakdown:</span>
                <span class="detail-val text-muted font-mono" style="font-size:10px;">${c}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ PROPOSED CANDIDATE ONLY: Unverified conceptual site for scenario modeling. Not an officially approved municipal emergency facility.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-route-prop" ${n?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Route to Candidate Site</button>
          </div>
        </div>`;const u=document.getElementById("btn-card-route-prop");u&&n&&u.addEventListener("click",()=>{this.routeToCandidateSite(t)})}else{const t=e.name||e.id||"MAP FEATURE";this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=t),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className="status-pill info",this.dom.detailPanelBadge.textContent=(e.kind||"FEATURE").toUpperCase());const i=Object.entries(e).filter(([n,r])=>!["boxes","points","vertexStart","vertexCount","center","bounds","kind"].includes(n)&&typeof r!="function"&&typeof r!="object").map(([n,r])=>`
          <div class="detail-row">
            <span class="detail-label">${n}:</span>
            <span class="detail-val font-mono">${r}</span>
          </div>
        `).join("");this.dom.detailPanelBody.innerHTML=`
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">ATTRIBUTES</div>
            <div class="detail-meta-grid">
              ${i||'<div class="detail-row"><span class="detail-label">Status:</span><span class="detail-val">Selected</span></div>'}
            </div>
          </div>
        </div>`}}routeToCandidateSite(e){if(!this.overlayManager||!e)return;const t=this.resolveOrigin(),i=[{x:e.position.x,z:e.position.z,id:e.id,name:`Candidate: ${e.name}`,type:"shelter",provenance:"proposed"}];this.overlayManager.routeToNearestDestination(t,i,{routeType:"shelter"})}resolveOrigin(){if(this.selectedFeature){const e=this.selectedFeature;if(e.center)return{x:e.center.x,z:e.center.z,id:e.id,name:e.name||`Structure ${e.id}`};if(e.points&&e.points.length>0)return{x:e.points[0].x,z:e.points[0].z,id:e.id,name:`Road ${e.id}`}}return{x:-150,z:50,id:"origin-default",name:"Dernau Residential Core"}}executeRoute(e){if(!this.overlayManager)return;const t=this.resolveOrigin(),i=this.overlayManager.facilityLayer?.features||[];if(e==="shelter"){const n=i.filter(r=>r.type==="shelter").map(r=>({x:r.center.x,z:r.center.z,id:r.id,name:r.name||"Shelter",type:"shelter",provenance:r.provenance||"dataset"}));if(n.length===0){console.warn("No shelter facilities available in dataset.");return}this.overlayManager.routeToNearestDestination(t,n,{routeType:"shelter"})}else if(e==="hospital"){const n=i.filter(r=>r.type==="hospital").map(r=>({x:r.center.x,z:r.center.z,id:r.id,name:r.name||"Hospital",type:"hospital",provenance:r.provenance||"simulated"}));if(n.length===0){console.warn("No hospital or medical facility records available in dataset.");return}this.overlayManager.routeToNearestDestination(t,n,{routeType:"hospital"})}}toggleAlternativeRoute(){if(!this.overlayManager||!this.activeAlternative)return;this.showAlternative=!this.showAlternative;const e=this.showAlternative?this.activeAlternative:this.activeRoute,t=this.showAlternative?this.activeRoute:this.activeAlternative;this.overlayManager.routeLayer.displayRoute(e,t),this.dom.btnRouteAlt&&this.dom.btnRouteAlt.classList.toggle("active",this.showAlternative),this.renderRouteSummary(e,t)}onRouteUpdated(e,t){this.activeRoute=e,this.activeAlternative=t,this.showAlternative=!1,this.dom.btnRouteAlt&&(t&&t.isReachable?(this.dom.btnRouteAlt.classList.remove("hidden"),this.dom.btnRouteAlt.classList.remove("active"),this.dom.btnRouteAlt.title=`Toggle alternative route (${t.totalDistanceMeters}m, ${t.status})`):this.dom.btnRouteAlt.classList.add("hidden")),this.dom.btnRouteShelter&&this.dom.btnRouteShelter.classList.toggle("active",e?.routeType==="shelter"),this.dom.btnRouteHospital&&this.dom.btnRouteHospital.classList.toggle("active",e?.routeType==="hospital"),e&&this.renderRouteSummary(e,t)}renderRouteSummary(e,t=null){if(!this.dom.hudFeatureDetails||!this.dom.detailPanelBody)return;this.dom.hudFeatureDetails.classList.remove("hidden");const i=e.routeType==="hospital",n=!e.isReachable||e.status==="blocked",r=e.status==="exposed";let a="success",o=i?"HOSPITAL ROUTE":"SHELTER EVAC";n?(a="danger",o="ROUTE BLOCKED"):r&&(a="warning",o="EXPOSED ROUTE"),this.dom.detailPanelTitle&&(this.dom.detailPanelTitle.textContent=i?"MEDICAL ROUTE":"SHELTER EVACUATION"),this.dom.detailPanelBadge&&(this.dom.detailPanelBadge.className=`status-pill ${a}`,this.dom.detailPanelBadge.textContent=o);const l=e.destination?.name||(i?"Hospital":"Shelter"),c=e.destination?.provenance==="simulated",d=i?c?`${l} (Proposed medical-response site — unverified)`:`${l} (Hospital)`:`${l} (Shelter)`,h=n?"Unreachable":`${e.totalDistanceMeters.toFixed(1)} m`,u=n?"N/A":`${e.edgeCount} segments`,p=n?"Blocked by floodwaters":e.exposedLengthMeters>0?`${e.exposedLengthMeters.toFixed(1)} m (${Math.round(e.exposedRatio*100)}%)`:"0.0 m (100% Dry)",g=n?e.blockedEdges?.length?`${(e.blockedEdges[0].maxDepth||.15).toFixed(2)}m (Impassable)`:">=0.15 m":e.maxWaterDepth>0?`${e.maxWaterDepth.toFixed(2)} m`:"0.00 m (Dry)";let v="";if(t&&t.isReachable){const _=Math.round(t.totalDistanceMeters-e.totalDistanceMeters),x=_>=0?`+${_}m`:`${_}m`;v=`
        <div class="detail-row">
          <span class="detail-label">Alternative Path:</span>
          <span class="detail-val">${t.totalDistanceMeters.toFixed(0)}m (${x}) [${t.status.toUpperCase()}]</span>
        </div>`}this.dom.detailPanelBody.innerHTML=`
      <div class="detail-card">
        <div class="detail-section">
          <div class="detail-section-title">ROUTE OVERVIEW</div>
          <div class="detail-meta-grid">
            <div class="detail-row">
              <span class="detail-label">Destination:</span>
              <span class="detail-val font-bold ${i?"text-cyan":"text-purple"}">${d}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Origin:</span>
              <span class="detail-val">${e.origin?.name||"Selected Origin"}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Route Status:</span>
              <span class="detail-val font-bold ${n?"text-rose":r?"text-amber":"text-emerald"}">${e.status.toUpperCase()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Path Length:</span>
              <span class="detail-val">${h} (${u})</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-title">FLOOD CONDITIONS</div>
          <div class="detail-meta-grid">
            <div class="detail-row">
              <span class="detail-label">Water Exposure:</span>
              <span class="detail-val ${r?"text-amber":""}">${p}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Max Road Depth:</span>
              <span class="detail-val">${g}</span>
            </div>
            ${v}
            <div class="detail-row">
              <span class="detail-label">Assessment:</span>
              <span class="detail-val text-muted" style="font-size:10px;line-height:1.3;">${e.explanation}</span>
            </div>
          </div>
        </div>

        <div class="detail-section data-quality-notice">
          <div class="detail-disclaimer">
            ⚠️ Conceptual elevation-based path reachability model. Does not guarantee hydrodynamic safety, flow velocity limits, or physical road structural integrity.
          </div>
        </div>

        <div class="detail-actions">
          <button class="detail-action-btn btn-shelter" id="btn-inspect-evac">🏃 Evac Shelter</button>
          <button class="detail-action-btn btn-hospital" id="btn-inspect-med">🏥 Hospital</button>
          <button class="detail-action-btn btn-clear" id="btn-inspect-clear">✕ Clear</button>
        </div>
      </div>`;const m=document.getElementById("btn-inspect-evac");m&&m.addEventListener("click",()=>this.executeRoute("shelter"));const f=document.getElementById("btn-inspect-med");f&&f.addEventListener("click",()=>this.executeRoute("hospital"));const y=document.getElementById("btn-inspect-clear");y&&y.addEventListener("click",()=>{this.overlayManager&&this.overlayManager.clearRoute(),this.deselectFeature()})}updateFrame(e){const t=this.controls.getTelemetry(),i=this.telemetry.getMouseNdc(),n=this.terrainManager.raycastSurface(i,this.viewer.camera);this.telemetry.update(t,e,n);const r=performance.now();if(this.overlayManager&&r-this.lastInspectUpdate>65){this.lastInspectUpdate=r;const a=this.overlayManager.inspectFeature(i,this.viewer.camera);this.dom.viewportContainer&&(this.dom.viewportContainer.style.cursor=a?"pointer":"")}}getCurrentWaterLevel(){if(this.floodWaterManager){if(typeof this.floodWaterManager.waterLevel=="number"&&!Number.isNaN(this.floodWaterManager.waterLevel))return this.floodWaterManager.waterLevel;if(typeof this.floodWaterManager.currentWaterLevel=="number"&&!Number.isNaN(this.floodWaterManager.currentWaterLevel))return this.floodWaterManager.currentWaterLevel}if(this.dom.waterLevelSlider&&this.dom.waterLevelSlider.value!==void 0&&this.dom.waterLevelSlider.value!==null&&this.dom.waterLevelSlider.value!==""){const e=parseFloat(this.dom.waterLevelSlider.value);if(!Number.isNaN(e))return e}return null}setBaselineFromCurrent(){if(!this.overlayManager)return;const e=this.getCurrentWaterLevel();typeof e!="number"||Number.isNaN(e)||(this.overlayManager.setBaselineWaterLevel(e),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${e.toFixed(1)}m`),this.overlayManager.updateImpacts())}toggleAccessLostHighlights(){this.overlayManager&&(this.accessLostActive=!this.accessLostActive,this.overlayManager.toggleAccessLostHighlights(this.accessLostActive),this.dom.btnToggleAccessLost&&(this.dom.btnToggleAccessLost.classList.toggle("active",this.accessLostActive),this.dom.btnToggleAccessLost.textContent=this.accessLostActive?"⚠️ Access-Lost: ON":"⚠️ Access-Lost Rings"))}toggleRiskPanel(){if(!this.dom.hudRiskPanel)return;const e=this.dom.hudRiskPanel.classList.toggle("active");this.dom.btnToggleRiskPanel&&this.dom.btnToggleRiskPanel.classList.toggle("active",e),this.dom.btnDockRisk&&this.dom.btnDockRisk.classList.toggle("active",e),e&&this.buildingRiskData&&this.updateRiskRankingList()}setRiskSortMode(e){this.riskSortMode=e,[this.dom.sortRisk,this.dom.sortDepth,this.dom.sortLost].forEach(t=>{t&&t.classList.remove("active")}),e==="risk"&&this.dom.sortRisk&&this.dom.sortRisk.classList.add("active"),e==="depth"&&this.dom.sortDepth&&this.dom.sortDepth.classList.add("active"),e==="lost"&&this.dom.sortLost&&this.dom.sortLost.classList.add("active"),this.updateRiskRankingList()}renderScenarioComparison(e){if(e){if(this.scenarioDiffData=e,this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${e.baselineWaterLevel.toFixed(1)}m`),this.dom.diffNewBlds&&e.buildings){const t=e.buildings;this.dom.diffNewBlds.textContent=`+${t.newlyAffectedCount} (${t.newlyAffectedPercent}%)`}if(this.dom.diffRouteLost&&e.buildings){const t=e.buildings;this.dom.diffRouteLost.textContent=`${t.routeLostCount} (${t.routeLostPercent}%)`}if(this.dom.diffNewRoads&&e.roads){const t=e.roads;this.dom.diffNewRoads.textContent=`+${t.newlyImpassable} (${t.newlyImpassablePercent}%)`}if(this.dom.diffIsolatedShelters&&e.shelters){const t=e.shelters;this.dom.diffIsolatedShelters.textContent=`${t.isolatedByRoads} isol / ${t.inundated} flood`}}}renderRiskRanking(e){this.buildingRiskData=e,this.dom.hudRiskPanel&&this.dom.hudRiskPanel.classList.contains("active")&&this.updateRiskRankingList()}updateRiskRankingList(){if(!this.dom.riskListContainer||!this.buildingRiskData)return;const e=[...this.buildingRiskData];if(this.riskSortMode==="depth"?e.sort((n,r)=>{const a=n.exposure?.waterDepth??0;return(r.exposure?.waterDepth??0)-a}):this.riskSortMode==="lost"?e.sort((n,r)=>{const a=n.access?.status==="route_lost"?1:0,o=r.access?.status==="route_lost"?1:0;return o!==a?o-a:(r.risk?.totalScore??0)-(n.risk?.totalScore??0)}):e.sort((n,r)=>(r.risk?.totalScore??0)-(n.risk?.totalScore??0)),this.dom.riskSummaryCounts){const n=e.filter(l=>l.risk?.priorityTier==="CRITICAL").length,r=e.filter(l=>l.risk?.priorityTier==="HIGH").length,a=e.filter(l=>l.risk?.priorityTier==="MODERATE").length,o=e.filter(l=>l.access?.status==="route_lost").length;this.dom.riskSummaryCounts.innerHTML=`
        <span class="chip-risk-crit">Crit: ${n}</span>
        <span class="chip-risk-high">High: ${r}</span>
        <span class="chip-risk-mod">Mod: ${a}</span>
        <span class="chip-access-lost">Lost: ${o}</span>
      `}const i=e.slice(0,150).map(n=>{const r=n.risk||{},a=r.totalScore??0,o=r.priorityTier||"LOW",l=n.access||{},c=n.exposure||{},d=typeof c.waterDepth=="number"?`${c.waterDepth.toFixed(2)}m`:"0.00m";let h="chip-risk-low";o==="CRITICAL"?h="chip-risk-crit":o==="HIGH"?h="chip-risk-high":o==="MODERATE"?h="chip-risk-mod":o==="UNKNOWN"&&(h="chip-risk-unk");let u="chip-access-conn",p="Connected";return l.status==="route_lost"?(u="chip-access-lost",p="Route Lost"):l.status==="disconnected_in_source"?(u="chip-access-disc",p="Source Disc."):l.status==="access_degraded"?(u="chip-access-deg",p="Degraded"):l.status==="unknown"&&(u="chip-access-unk",p="Unknown"),`
        <div class="risk-row" data-bld-id="${n.id}" id="risk-row-${n.id}">
          <div class="risk-row-left">
            <span class="${h} font-mono">${o}</span>
            <span class="risk-row-id font-mono">Bld ${n.id}</span>
          </div>
          <div class="risk-row-right">
            <span class="${u} font-mono">${p}</span>
            <span class="risk-row-depth font-mono text-muted">${d}</span>
            <span class="risk-badge ${a>=70?"score-high":a>=40?"score-mid":"score-low"} font-mono">${a}</span>
          </div>
        </div>
      `}).join("");this.dom.riskListContainer.innerHTML=i,this.dom.riskListContainer.querySelectorAll(".risk-row").forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-bld-id");this.selectBuildingById(r)})})}selectBuildingById(e){if(!this.overlayManager)return;const i=this.overlayManager.buildingLayer?.features?.find(a=>a.id===e);if(!i)return;const n=this.overlayManager.scenarioComparisonService?.getBuildingEvaluation(e),r={...i,kind:"building",riskEvaluation:n};if(this.selectFeature(r),this.dom.riskListContainer){this.dom.riskListContainer.querySelectorAll(".risk-row").forEach(o=>o.classList.remove("active"));const a=document.getElementById(`risk-row-${e}`);a&&(a.classList.add("active"),a.scrollIntoView({block:"nearest",behavior:"smooth"}))}}toggleScenarioPanel(){if(!this.dom.hudScenarioPanel)return;const t=!this.dom.hudScenarioPanel.classList.toggle("hidden");this.dom.btnOpenScenarios&&this.dom.btnOpenScenarios.classList.toggle("active",t),this.dom.btnDockScenarios&&this.dom.btnDockScenarios.classList.toggle("active",t),t&&(this.scenarioManager.storageErrorMessage&&this.dom.scenarioStorageNotice?(this.dom.scenarioStorageNotice.textContent=`⚠️ ${this.scenarioManager.storageErrorMessage}`,this.dom.scenarioStorageNotice.classList.remove("hidden")):this.dom.scenarioStorageNotice&&this.dom.scenarioStorageNotice.classList.add("hidden"),this.renderScenarioList(),this.populateScenarioDropdowns())}closeScenarioPanel(){this.dom.hudScenarioPanel&&(this.dom.hudScenarioPanel.classList.add("hidden"),this.dom.btnOpenScenarios&&this.dom.btnOpenScenarios.classList.remove("active"),this.dom.btnDockScenarios&&this.dom.btnDockScenarios.classList.remove("active"))}renderScenarioList(){if(!this.dom.scenarioListContainer)return;const e=this.scenarioManager.getScenarios();this.dom.scenarioPanelCount&&(this.dom.scenarioPanelCount.textContent=`${e.length} Saved`);const t=this.getCurrentWaterLevel()??124,i=e.map(n=>{const r=Math.abs(n.waterLevel-t)<.05,a=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=n.isBuiltIn?'<span class="text-cyan font-bold" title="Built-in reference scenario">[REF]</span>':"",l=n.isBuiltIn?"":`<button class="btn-scen-sm btn-del" data-action="delete" data-id="${n.id}" title="Delete scenario">🗑️</button>`;return`
        <div class="scenario-row ${r?"active":""}" data-id="${n.id}" id="scen-row-${n.id}">
          <div class="scenario-row-top">
            <span class="scenario-name font-mono" title="${n.name}">${o} ${n.name}</span>
            <span class="scenario-level-tag font-mono">${n.waterLevel.toFixed(1)}m</span>
          </div>
          <div class="scenario-row-details font-mono">
            <span>Base: ${(n.baselineWaterLevel??124).toFixed(1)}m | ${n.profileMode||"planar"}</span>
            <span>${a}</span>
          </div>
          <div class="scenario-row-actions">
            <button class="btn-scen-sm btn-load" data-action="load" data-id="${n.id}" title="Apply this water level and settings">Apply</button>
            <button class="btn-scen-sm" data-action="compare" data-id="${n.id}" title="Set as comparison target">Diff Target</button>
            ${l}
          </div>
        </div>
      `}).join("");this.dom.scenarioListContainer.innerHTML=i,this.dom.scenarioListContainer.querySelectorAll("button[data-action]").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation();const a=n.getAttribute("data-action"),o=n.getAttribute("data-id");a==="load"?this.loadScenarioById(o):a==="compare"?this.dom.selectCompareTarget&&(this.dom.selectCompareTarget.value=o,this.compareSelectedScenarios()):a==="delete"&&this.promptDeleteScenario(o)})})}populateScenarioDropdowns(){if(!this.dom.selectCompareBaseline||!this.dom.selectCompareTarget)return;const e=this.scenarioManager.getScenarios(),t=this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124,i=this.getCurrentWaterLevel()??124,n=e.map(a=>`
      <option value="${a.id}" ${Math.abs(a.waterLevel-t)<.05?"selected":""}>
        ${a.name} (${a.waterLevel.toFixed(1)}m)
      </option>
    `).join(""),r=e.map(a=>`
      <option value="${a.id}" ${Math.abs(a.waterLevel-i)<.05?"selected":""}>
        ${a.name} (${a.waterLevel.toFixed(1)}m)
      </option>
    `).join("");this.dom.selectCompareBaseline.innerHTML=n,this.dom.selectCompareTarget.innerHTML=r}saveCurrentScenario(){if(!this.dom.inputScenarioName)return;const e=this.dom.inputScenarioName.value.trim(),t=this.getCurrentWaterLevel();if(typeof t!="number"||Number.isNaN(t)){alert("Could not save scenario: Current water elevation is unavailable.");return}const i=this.floodWaterManager?this.floodWaterManager.profileMode:"planar",n=this.floodWaterManager?this.floodWaterManager.connectedOnly:!0,r=this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124;try{this.scenarioManager.saveScenario({name:e||void 0,waterLevel:t,profileMode:i,connectedOnly:n,baselineWaterLevel:r}),this.dom.inputScenarioName.value="",this.renderScenarioList(),this.populateScenarioDropdowns(),this.scenarioManager.storageErrorMessage&&this.dom.scenarioStorageNotice&&(this.dom.scenarioStorageNotice.textContent=`⚠️ ${this.scenarioManager.storageErrorMessage}`,this.dom.scenarioStorageNotice.classList.remove("hidden"))}catch(a){alert(`Could not save scenario: ${a.message}`)}}loadScenarioById(e){const t=this.scenarioManager.getScenario(e);t&&(this.activeScenarioId=e,this.floodWaterManager&&(this.floodWaterManager.setWaterLevel(t.waterLevel),this.dom.waterLevelSlider&&(this.dom.waterLevelSlider.value=t.waterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${t.waterLevel.toFixed(2)} m`),t.profileMode&&t.profileMode!==this.floodWaterManager.profileMode&&(this.floodWaterManager.setProfileMode(t.profileMode),this.dom.btnToggleProfile&&(this.dom.btnToggleProfile.textContent=t.profileMode==="slope"?"📐 Profile: Slope-Aware":"📐 Profile: Planar",this.dom.btnToggleProfile.classList.toggle("active",t.profileMode==="slope"))),typeof t.connectedOnly=="boolean"&&t.connectedOnly!==this.floodWaterManager.connectedOnly&&(this.floodWaterManager.connectedOnly=t.connectedOnly,this.dom.btnToggleConnectivity&&(this.dom.btnToggleConnectivity.textContent=t.connectedOnly?"🌊 Connected: ON":"🌊 Connected: OFF",this.dom.btnToggleConnectivity.classList.toggle("active",t.connectedOnly)))),this.overlayManager&&(typeof t.baselineWaterLevel=="number"&&(this.overlayManager.setBaselineWaterLevel(t.baselineWaterLevel),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${t.baselineWaterLevel.toFixed(1)}m`)),this.overlayManager.updateImpacts()),this.renderScenarioList())}compareSelectedScenarios(){if(!this.dom.selectCompareBaseline||!this.dom.selectCompareTarget)return;const e=this.dom.selectCompareBaseline.value,t=this.dom.selectCompareTarget.value,i=this.scenarioManager.getScenario(e),n=this.scenarioManager.getScenario(t);!i||!n||this.overlayManager&&this.overlayManager.scenarioComparisonService&&(this.overlayManager.scenarioComparisonService.setBaselineScenario(i.waterLevel),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${i.waterLevel.toFixed(1)}m`),this.loadScenarioById(n.id))}promptDeleteScenario(e){const t=this.scenarioManager.getScenario(e);if(t){if(t.isBuiltIn){alert("Reference scenarios are built-in and cannot be deleted.");return}this.scenarioToDeleteId=e,this.dom.deleteConfirmText&&(this.dom.deleteConfirmText.textContent=`Are you sure you want to delete scenario "${t.name}" (${t.waterLevel.toFixed(1)}m MSL)? This action cannot be undone.`),this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.remove("hidden")}}executeDeleteScenario(){this.scenarioToDeleteId&&(this.scenarioManager.deleteScenario(this.scenarioToDeleteId),this.scenarioToDeleteId=null,this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.add("hidden"),this.renderScenarioList(),this.populateScenarioDropdowns())}cancelDeleteScenario(){this.scenarioToDeleteId=null,this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.add("hidden")}openExportModal(){this.dom.reportExportOverlay&&(this.dom.reportExportOverlay.classList.remove("hidden"),this.renderExportPreview())}closeExportModal(){this.dom.reportExportOverlay&&this.dom.reportExportOverlay.classList.add("hidden")}_getExportData(){const e=this.getCurrentWaterLevel()??124,t=this.scenarioManager.getScenario(this.activeScenarioId)||{name:`Simulation Stage ${e.toFixed(1)}m MSL`,waterLevel:e,profileMode:this.floodWaterManager?.profileMode||"planar",connectedOnly:this.floodWaterManager?.connectedOnly!==!1,baselineWaterLevel:this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124},i=this.scenarioDiffData||this.overlayManager?.scenarioComparisonService?.currentComparison||{},n=this.buildingRiskData||this.overlayManager?.scenarioComparisonService?.rankedBuildings||[],r=i.shelterAssessments||this.overlayManager?.scenarioComparisonService?.currentComparison?.shelterAssessments||[],a=this.overlayManager?.scenarioComparisonService?.getDataQualityReport({proposedSites:this.overlayManager?.proposedSiteService?.evaluatedSites})||null;return{scenario:{...t},comparison:i,rankedBuildings:n,shelterAssessments:r,dataQuality:a}}renderExportPreview(){if(!this.dom.exportPreviewContainer)return;const{scenario:e,comparison:t,rankedBuildings:i,shelterAssessments:n,dataQuality:r}=this._getExportData(),a=t.buildings||{},o=t.roads||{},l=t.shelters||{},c=r||{},d=i.filter(u=>u.risk?.priorityTier==="CRITICAL"||u.risk?.priorityTier==="critical").length,h=i.filter(u=>u.risk?.priorityTier==="HIGH"||u.risk?.priorityTier==="high").length;this.dom.exportPreviewContainer.innerHTML=`
      <div class="export-preview-grid">
        <div class="export-preview-card">
          <div class="metric-label">Modeled Scenario</div>
          <div class="metric-val text-cyan">${e.name}</div>
          <div class="metric-sub">Water Surface: ${e.waterLevel.toFixed(2)}m MSL | Baseline: ${(t.baselineWaterLevel??124).toFixed(2)}m</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Newly Affected Buildings</div>
          <div class="metric-val text-amber">+${a.newlyAffectedCount??0} (${a.newlyAffectedPercent??0}%)</div>
          <div class="metric-sub">Denominator: ${a.validDenominator??0} valid structures (${a.unknownCount??0} NoData excluded)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Route Lost (Flood-Isolated)</div>
          <div class="metric-val text-rose">${a.routeLostCount??0} structures (${a.routeLostPercent??0}%)</div>
          <div class="metric-sub">Top Priority: ${d} Critical | ${h} High</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Road & Shelter Status</div>
          <div class="metric-val text-emerald">+${o.newlyImpassable??0} Impassable Rds</div>
          <div class="metric-sub">Shelters: ${l.operational??0} operational, ${l.isolatedByRoads??0} isolated, ${l.inundated??0} submerged (Simulated)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Data Quality &amp; Uncertainty Audit</div>
          <div class="metric-val text-cyan">${c?.demCoverage?.status||"VERIFIED"} / ${c?.facilityProvenance?.status||"UNVERIFIED"}</div>
          <div class="metric-sub">${c?.roadTopology?.totalComponents||67} road components · Facilities simulated · No verified hospital</div>
        </div>
      </div>
    `}toggleDataQualityPanel(e){if(!this.dom.hudDataQuality)return;(typeof e=="boolean"?e:this.dom.hudDataQuality.classList.contains("hidden"))?(this.dom.hudDataQuality.classList.remove("hidden"),this.renderDataQualityReport()):this.dom.hudDataQuality.classList.add("hidden")}renderDataQualityReport(){if(!this.dom.dqContent)return;const e=this.overlayManager?.scenarioComparisonService?.getDataQualityReport({proposedSites:this.overlayManager?.proposedSiteService?.evaluatedSites});if(!e){this.dom.dqContent.innerHTML='<div class="font-mono text-muted" style="padding:10px;">Initializing data quality audit...</div>';return}const t=[{title:"DEM Topography Coverage",tag:e.demCoverage.status.toLowerCase().includes("verified")?"verified":"unknown",tagLabel:e.demCoverage.status,metrics:`${e.demCoverage.valid} Valid (${(100-e.demCoverage.unknownPercent).toFixed(1)}%) · ${e.demCoverage.unknown} Unknown NoData`,desc:e.demCoverage.description},{title:"Road Flood Classification",tag:e.roadClassification.status.toLowerCase().includes("verified")?"verified":"unknown",tagLabel:e.roadClassification.status,metrics:`${e.roadClassification.evaluated} Evaluated · ${e.roadClassification.unknown} Missing/Unknown Edges`,desc:e.roadClassification.description},{title:"Road Network Graph Topology",tag:e.roadTopology.status.toLowerCase(),tagLabel:e.roadTopology.status,metrics:`${e.roadTopology.totalComponents} Disconnected Graph Components`,desc:e.roadTopology.description},{title:"Emergency Facility Provenance",tag:"unknown",tagLabel:e.facilityProvenance.status,metrics:`${e.facilityProvenance.simulated} Simulated Shelters · 0 Verified Hospitals`,desc:e.facilityProvenance.description},{title:"Proposed Emergency Assembly Sites",tag:"proposed",tagLabel:e.proposedSites.status,metrics:`${e.proposedSites.total} Candidate Staging Locations (Unverified Proposals)`,desc:e.proposedSites.description},{title:"Spatial Snapping & Proximity",tag:"approximate",tagLabel:e.spatialSnapping.status,metrics:`${e.spatialSnapping.approximateCount} Snapped via Centroid Distance · ${e.spatialSnapping.disconnectedCount} Disconnected`,desc:e.spatialSnapping.description},{title:"Hydraulic Model Boundaries",tag:"approximate",tagLabel:e.modelAssumptions.status,metrics:"Static DEM Bare-Earth Immersion (No hydrodynamic velocity/momentum)",desc:e.modelAssumptions.description}];this.dom.dqContent.innerHTML=t.map(i=>`
      <div class="dq-card">
        <div class="dq-card-header">
          <span class="dq-card-title">${i.title}</span>
          <span class="dq-tag ${i.tag}">${i.tagLabel}</span>
        </div>
        <div class="dq-card-metrics font-mono">${i.metrics}</div>
        <div class="dq-card-desc">${i.desc}</div>
      </div>
    `).join("")}downloadScenarioCSV(){const e=this._getExportData(),t=this.scenarioManager.generateCSVReport(e),n=`highwater3d_${(e.scenario.name||"scenario").toLowerCase().replace(/[^a-z0-9]/g,"_")}_${e.scenario.waterLevel.toFixed(1)}m.csv`;this.scenarioManager.downloadCSV(t,n)}openScenarioPrintReport(){const e=this._getExportData(),t=this.scenarioManager.generateHTMLReport(e);this.scenarioManager.openPrintReport(t)}dispose(){this.eventListeners.forEach(({target:e,event:t,handler:i})=>{e.removeEventListener(t,i)}),this.eventListeners=[]}}class ev{constructor(){this.viewer=null,this.controls=null,this.terrainManager=null,this.overlayManager=null,this.floodWaterManager=null,this.ui=null,this.isInitialized=!1}async init(){try{console.log("🌊 Initializing HighWater 3D (Milestone 7: Reliability, Usability and Presentation Readiness)...");const e=document.getElementById("viewport-container");if(!e)throw new Error("Root viewport container #viewport-container not found.");this.viewer=new rg(e),this.controls=new yg(this.viewer.camera,this.viewer.renderer.domElement),this.terrainManager=new bg(this.viewer.scene),this.overlayManager=new Yg(this.viewer.scene,this.terrainManager),this.floodWaterManager=new jg(this.viewer.scene,this.terrainManager,this.overlayManager),this.overlayManager.setFloodWaterManager(this.floodWaterManager),this.ui=new Qg({viewer:this.viewer,controls:this.controls,terrainManager:this.terrainManager,overlayManager:this.overlayManager,floodWaterManager:this.floodWaterManager}),this.ui.setFloodWaterManager(this.floodWaterManager),this.ui.setLoadingProgress("Ingesting verified Rhineland-Palatinate DGM1 terrain...",25);const t=await this.terrainManager.loadRealTerrain("./data/dernau/dem_height_grid.json");console.log("📍 Active Terrain Loaded:",t.label,t),t&&!t.isSynthetic&&this.ui.setTerrainProvenanceReal(t);const i=this.terrainManager.getDemPayload();i&&this.floodWaterManager.attachDEM(i),this.ui.setLoadingProgress("Ingesting Dernau vector overlays...",55);try{const n=await this.overlayManager.loadAll();console.log("🗺️ Overlays initialized:",n);const r=this.overlayManager.getRawDatasets();this.floodWaterManager.indexAssets(r)}catch(n){console.warn("⚠️ Warning during overlay loading:",n)}this.ui.setLoadingProgress("Configuring camera viewports & telemetry...",85),this.viewer.onRenderFrame=n=>{this.ui.updateFrame(n)},this.viewer.startRenderLoop(n=>{this.controls.update(n),this.floodWaterManager&&this.floodWaterManager.update(n)}),this.ui.setLoadingProgress("System ready.",100),setTimeout(()=>{this.ui.hideLoading()},400),this.isInitialized=!0,console.log("✅ HighWater 3D Milestone 7 initialized successfully.")}catch(e){if(console.error("❌ HighWater 3D Initialization failed:",e),this.ui)this.ui.showError(e.message||"Fatal error during 3D engine startup.");else{const t=document.getElementById("error-overlay"),i=document.getElementById("error-msg-text");i&&(i.textContent=e.message),t&&t.classList.remove("hidden")}}}dispose(){this.ui&&this.ui.dispose(),this.floodWaterManager&&this.floodWaterManager.dispose(),this.overlayManager&&this.overlayManager.dispose(),this.terrainManager&&this.terrainManager.dispose(),this.controls&&this.controls.dispose(),this.viewer&&this.viewer.dispose(),this.isInitialized=!1}}const Ca=new ev;window.highWaterApp=Ca;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Ca.init()):Ca.init();
//# sourceMappingURL=index-DxdmiujG.js.map
