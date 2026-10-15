(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="170",yi={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mc=0,sa=1,gc=2,El=1,vc=2,un=3,Dn=0,Pt=1,yt=2,Rn=0,Mi=1,Fr=2,ra=3,oa=4,_c=5,Wn=100,xc=101,yc=102,Mc=103,Sc=104,bc=200,Ec=201,wc=202,Tc=203,Or=204,Br=205,Ac=206,Rc=207,Cc=208,Lc=209,Dc=210,Pc=211,Ic=212,Nc=213,Uc=214,zr=0,kr=1,Hr=2,Ei=3,Gr=4,Vr=5,Wr=6,$r=7,wl=0,Fc=1,Oc=2,Cn=0,Bc=1,zc=2,kc=3,Tl=4,Hc=5,Gc=6,Vc=7,Al=300,wi=301,Ti=302,Xr=303,qr=304,Vs=306,Yr=1e3,qn=1001,Kr=1002,jt=1003,Wc=1004,ns=1005,en=1006,Js=1007,Yn=1008,gn=1009,Rl=1010,Cl=1011,Yi=1012,Po=1013,Kn=1014,fn=1015,Ji=1016,Io=1017,No=1018,Ai=1020,Ll=35902,Dl=1021,Pl=1022,Kt=1023,Il=1024,Nl=1025,Si=1026,Ri=1027,Ul=1028,Uo=1029,Fl=1030,Fo=1031,Oo=1033,Ps=33776,Is=33777,Ns=33778,Us=33779,jr=35840,Zr=35841,Jr=35842,Qr=35843,eo=36196,to=37492,no=37496,io=37808,so=37809,ro=37810,oo=37811,ao=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,vo=37821,Fs=36492,_o=36494,xo=36495,Ol=36283,yo=36284,Mo=36285,So=36286,$c=3200,Xc=3201,Bl=0,qc=1,An="",Ot="srgb",Li="srgb-linear",Ws="linear",nt="srgb",ii=7680,aa=519,Yc=512,Kc=513,jc=514,zl=515,Zc=516,Jc=517,Qc=518,ed=519,la=35044,ca="300 es",pn=2e3,Bs=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$i=Math.PI/180,bo=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[s&255]+bt[s>>8&255]+bt[s>>16&255]+bt[s>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function td(s,e){return(s%e+e)%e}function Qs(s,e,t){return(1-t)*s+t*e}function Fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const nd={DEG2RAD:$i};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],y=i[1],_=i[4],x=i[7],L=i[2],R=i[5],A=i[8];return r[0]=o*v+a*y+l*L,r[3]=o*m+a*_+l*R,r[6]=o*f+a*x+l*A,r[1]=c*v+d*y+h*L,r[4]=c*m+d*_+h*R,r[7]=c*f+d*x+h*A,r[2]=u*v+p*y+g*L,r[5]=u*m+p*_+g*R,r[8]=u*f+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-d*n)*v,e[2]=(a*n-i*o)*v,e[3]=u*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(er.makeScale(e,t)),this}rotate(e){return this.premultiply(er.makeRotation(-e)),this}translate(e,t){return this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new He;function kl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function id(){const s=zs("canvas");return s.style.display="block",s}const da={};function Vi(s){s in da||(da[s]=!0,console.warn(s))}function sd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function rd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function od(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ke={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?Ws:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ha=[.64,.33,.3,.6,.15,.06],ua=[.2126,.7152,.0722],fa=[.3127,.329],pa=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ma=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Li]:{primaries:ha,whitePoint:fa,transfer:Ws,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:ua,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:ha,whitePoint:fa,transfer:nt,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:ua,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});let si;class ad{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=zs("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ld=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tr(i[o].image)):r.push(tr(i[o]))}else r=tr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ad.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cd=0;class It extends Qn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=qn,i=qn,r=en,o=Yn,a=Kt,l=gn,c=It.DEFAULT_ANISOTROPY,d=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Di(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Al;It.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,L=(f+1)/2,R=(d+u)/4,A=(h+v)/4,w=(g+m)/4;return _>x&&_>L?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=R/n,r=A/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=w/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=A/r,i=w/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==u||c!==p||d!==g){let m=1-a;const f=l*u+c*p+d*g+h*v,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const L=Math.sqrt(_),R=Math.atan2(L,f*y);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*y;if(l=l*m+u*x,c=c*m+p*x,d=d*m+g*x,h=h*m+v*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-a*p,e[t+2]=c*g+d*p+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new P,ga=new Zn;class vn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),ss.subVectors(this.max,Oi),ri.subVectors(e.a,Oi),oi.subVectors(e.b,Oi),ai.subVectors(e.c,Oi),yn.subVectors(oi,ri),Mn.subVectors(ai,oi),On.subVectors(ri,ai);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-On.z,On.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,On.z,0,-On.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-On.y,On.x,0];return!ir(t,ri,oi,ai,ss)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,ri,oi,ai,ss))?!1:(rs.crossVectors(yn,Mn),t=[rs.x,rs.y,rs.z],ir(t,ri,oi,ai,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new P,new P,new P,new P,new P,new P,new P,new P],Xt=new P,is=new vn,ri=new P,oi=new P,ai=new P,yn=new P,Mn=new P,On=new P,Oi=new P,ss=new P,rs=new P,Bn=new P;function ir(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ud=new vn,Bi=new P,sr=new P;class $s{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ud.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(sr)),this.expandByPoint(Bi.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new P,rr=new P,os=new P,Sn=new P,or=new P,as=new P,ar=new P;class Xs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rr.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(os),a=Sn.dot(this.direction),l=-Sn.dot(os),c=Sn.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const v=1/d;h*=v,u*=v,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(rr).addScaledVector(os,u),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,r){or.subVectors(t,e),as.subVectors(n,e),ar.crossVectors(or,as);let o=this.direction.dot(ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const l=a*this.direction.dot(as.crossVectors(Sn,as));if(l<0)return null;const c=a*this.direction.dot(or.cross(Sn));if(c<0||l+c>o)return null;const d=-a*Sn.dot(ar);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,o,a,l,c,d,h,u,p,g,v,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,v,m)}set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,p=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,v=c*h;t[0]=u-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,g=a*d,v=a*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*h,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-u*h,t[8]=g*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-v*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+v,t[5]=o*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fd,e,pd)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),bn.crossVectors(n,Ut),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),bn.crossVectors(n,Ut)),bn.normalize(),ls.crossVectors(Ut,bn),i[0]=bn.x,i[4]=ls.x,i[8]=Ut.x,i[1]=bn.y,i[5]=ls.y,i[9]=Ut.y,i[2]=bn.z,i[6]=ls.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],y=n[3],_=n[7],x=n[11],L=n[15],R=i[0],A=i[4],w=i[8],M=i[12],S=i[1],C=i[5],N=i[9],U=i[13],B=i[2],H=i[6],z=i[10],X=i[14],G=i[3],J=i[7],ee=i[11],de=i[15];return r[0]=o*R+a*S+l*B+c*G,r[4]=o*A+a*C+l*H+c*J,r[8]=o*w+a*N+l*z+c*ee,r[12]=o*M+a*U+l*X+c*de,r[1]=d*R+h*S+u*B+p*G,r[5]=d*A+h*C+u*H+p*J,r[9]=d*w+h*N+u*z+p*ee,r[13]=d*M+h*U+u*X+p*de,r[2]=g*R+v*S+m*B+f*G,r[6]=g*A+v*C+m*H+f*J,r[10]=g*w+v*N+m*z+f*ee,r[14]=g*M+v*U+m*X+f*de,r[3]=y*R+_*S+x*B+L*G,r[7]=y*A+_*C+x*H+L*J,r[11]=y*w+_*N+x*z+L*ee,r[15]=y*M+_*U+x*X+L*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*p-n*l*p)+v*(+t*l*p-t*c*u+r*o*u-i*o*p+i*c*d-r*l*d)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*d-n*c*d)+f*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=h*m*c-v*u*c+v*l*p-a*m*p-h*l*f+a*u*f,_=g*u*c-d*m*c-g*l*p+o*m*p+d*l*f-o*u*f,x=d*v*c-g*h*c+g*a*p-o*v*p-d*a*f+o*h*f,L=g*h*l-d*v*l-g*a*u+o*v*u+d*a*m-o*h*m,R=t*y+n*_+i*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=y*A,e[1]=(v*u*r-h*m*r-v*i*p+n*m*p+h*i*f-n*u*f)*A,e[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*f+n*l*f)*A,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*p-n*l*p)*A,e[4]=_*A,e[5]=(d*m*r-g*u*r+g*i*p-t*m*p-d*i*f+t*u*f)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*A,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*p+t*l*p)*A,e[8]=x*A,e[9]=(g*h*r-d*v*r-g*n*p+t*v*p+d*n*f-t*h*f)*A,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*A,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=L*A,e[13]=(d*v*i-g*h*i+g*n*u-t*v*u-d*n*m+t*h*m)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,g=r*h,v=o*d,m=o*h,f=a*h,y=l*c,_=l*d,x=l*h,L=n.x,R=n.y,A=n.z;return i[0]=(1-(v+f))*L,i[1]=(p+x)*L,i[2]=(g-_)*L,i[3]=0,i[4]=(p-x)*R,i[5]=(1-(u+f))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(g+_)*A,i[9]=(m-y)*A,i[10]=(1-(u+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const c=1/r,d=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=d,qt.elements[5]*=d,qt.elements[6]*=d,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=pn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(a===pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=pn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,p=(n+i)*d;let g,v;if(a===pn)g=(o+r)*h,v=-2*h;else if(a===Bs)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new P,qt=new lt,fd=new P(0,0,0),pd=new P(1,1,1),bn=new P,ls=new P,Ut=new P,va=new lt,_a=new Zn;class nn{constructor(e=0,t=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let md=0;const xa=new P,ci=new Zn,cn=new lt,cs=new P,zi=new P,gd=new P,vd=new Zn,ya=new P(1,0,0),Ma=new P(0,1,0),Sa=new P(0,0,1),ba={type:"added"},_d={type:"removed"},di={type:"childadded",child:null},lr={type:"childremoved",child:null};class Mt extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new P,t=new nn,n=new Zn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Ma,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return xa.copy(e).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Ma,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(zi,cs,this.up):cn.lookAt(cs,zi,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(cn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ba),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),lr.child=e,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ba),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new P(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new P,dn=new P,cr=new P,hn=new P,hi=new P,ui=new P,Ea=new P,dr=new P,hr=new P,ur=new P,fr=new ut,pr=new ut,mr=new ut;class Gt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),dn.subVectors(n,t),cr.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(dn),l=Yt.dot(cr),c=dn.dot(dn),d=dn.dot(cr),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(o,hn.y),l.addScaledVector(a,hn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(e,t),pr.fromBufferAttribute(e,n),mr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fr,r.x),o.addScaledVector(pr,r.y),o.addScaledVector(mr,r.z),o}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),dn.subVectors(e,t),Yt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Yt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(r,n),dr.subVectors(e,n);const l=hi.dot(dr),c=ui.dot(dr);if(l<=0&&c<=0)return t.copy(n);hr.subVectors(e,i);const d=hi.dot(hr),h=ui.dot(hr);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(hi,o);ur.subVectors(e,r);const p=hi.dot(ur),g=ui.dot(ur);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ui,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Ea.subVectors(r,i),a=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(Ea,a);const f=1/(m+v+u);return o=v*f,a=u*f,t.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ds={h:0,s:0,l:0};function gr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=td(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gr(o,r,e+1/3),this.g=gr(o,r,e),this.b=gr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(xt(Et.r*255,0,255))*65536+Math.round(xt(Et.g*255,0,255))*256+Math.round(xt(Et.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,r=Et.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ot){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(ds);const n=Qs(En.h,ds.h,t),i=Qs(En.s,ds.s,t),r=Qs(En.l,ds.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new We;We.NAMES=Vl;let xd=0;class ei extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Di(),this.name="",this.blending=Mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends ei{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,hs=new ne;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class Wl extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $l extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qe extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yd=0;const kt=new lt,vr=new Mt,fi=new P,Ft=new vn,ki=new vn,_t=new P;class dt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?$l:Wl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ft.min,ki.min),Ft.expandByPoint(_t),_t.addVectors(Ft.max,ki.max),Ft.expandByPoint(_t)):(Ft.expandByPoint(ki.min),Ft.expandByPoint(ki.max))}Ft.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)_t.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),_t.add(fi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new P,l[w]=new P;const c=new P,d=new P,h=new P,u=new ne,p=new ne,g=new ne,v=new P,m=new P;function f(w,M,S){c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),a[w].add(v),a[M].add(v),a[S].add(v),l[w].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,M=y.length;w<M;++w){const S=y[w],C=S.start,N=S.count;for(let U=C,B=C+N;U<B;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const _=new P,x=new P,L=new P,R=new P;function A(w){L.fromBufferAttribute(i,w),R.copy(L);const M=a[w];_.copy(M),_.sub(L.multiplyScalar(L.dot(M))).normalize(),x.crossVectors(R,M);const C=x.dot(l[w])<0?-1:1;o.setXYZW(w,_.x,_.y,_.z,C)}for(let w=0,M=y.length;w<M;++w){const S=y[w],C=S.start,N=S.count;for(let U=C,B=C+N;U<B;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new mt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new lt,zn=new Xs,us=new $s,Ta=new P,fs=new P,ps=new P,ms=new P,_r=new P,gs=new P,Aa=new P,vs=new P;class Je extends Mt{constructor(e=new dt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(_r.fromBufferAttribute(h,e),o?gs.addScaledVector(_r,d):gs.addScaledVector(_r.sub(t),d))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(us.containsPoint(zn.origin)===!1&&(zn.intersectSphere(us,Ta)===null||zn.origin.distanceToSquared(Ta)>(e.far-e.near)**2))&&(wa.copy(r).invert(),zn.copy(e.ray).applyMatrix4(wa),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=_;x<L;x+=3){const R=a.getX(x),A=a.getX(x+1),w=a.getX(x+2);i=_s(this,f,e,n,c,d,h,R,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);i=_s(this,o,e,n,c,d,h,y,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,L=_;x<L;x+=3){const R=x,A=x+1,w=x+2;i=_s(this,f,e,n,c,d,h,R,A,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,_=m+1,x=m+2;i=_s(this,o,e,n,c,d,h,y,_,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Md(s,e,t,n,i,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Dn,a),l===null)return null;vs.copy(a),vs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:s}}function _s(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,fs),s.getVertexPosition(l,ps),s.getVertexPosition(c,ms);const d=Md(s,e,t,n,fs,ps,ms,Aa);if(d){const h=new P;Gt.getBarycoord(Aa,fs,ps,ms,h),i&&(d.uv=Gt.getInterpolatedAttribute(i,a,l,c,h,new ne)),r&&(d.uv1=Gt.getInterpolatedAttribute(r,a,l,c,h,new ne)),o&&(d.normal=Gt.getInterpolatedAttribute(o,a,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};Gt.getNormal(fs,ps,ms,u.normal),d.face=u,d.barycoord=h}return d}class Pn extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(h,2));function g(v,m,f,y,_,x,L,R,A,w,M){const S=x/A,C=L/w,N=x/2,U=L/2,B=R/2,H=A+1,z=w+1;let X=0,G=0;const J=new P;for(let ee=0;ee<z;ee++){const de=ee*C-U;for(let ye=0;ye<H;ye++){const Oe=ye*S-N;J[v]=Oe*y,J[m]=de*_,J[f]=B,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[f]=R>0?1:-1,d.push(J.x,J.y,J.z),h.push(ye/A),h.push(1-ee/w),X+=1}}for(let ee=0;ee<w;ee++)for(let de=0;de<A;de++){const ye=u+de+H*ee,Oe=u+de+H*(ee+1),q=u+(de+1)+H*(ee+1),ie=u+(de+1)+H*ee;l.push(ye,Oe,ie),l.push(Oe,q,ie),G+=6}a.addGroup(p,G,M),p+=G,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(s){const e={};for(let t=0;t<s.length;t++){const n=Ci(s[t]);for(const i in n)e[i]=n[i]}return e}function Sd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const bd={clone:Ci,merge:Tt};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ei{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ql extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new P,Ra=new ne,Ca=new ne;class Ht extends ql{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,Ra,Ca),t.subVectors(Ca,Ra)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Td extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(pi,mi,e,t);i.layers=this.layers,this.add(i);const r=new Ht(pi,mi,e,t);r.layers=this.layers,this.add(r);const o=new Ht(pi,mi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(pi,mi,e,t);a.layers=this.layers,this.add(a);const l=new Ht(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Ht(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yl extends It{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ad extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Rn});r.uniforms.tEquirect.value=t;const o=new Je(i,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=en),new Td(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const xr=new P,Rd=new P,Cd=new He;class Tn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xr.subVectors(n,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cd.getNormalMatrix(e),i=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new $s,xs=new P;class zo{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+o,u+d,m+g,x+y).normalize(),n[3].setComponents(l-o,u-d,m-g,x-y).normalize(),n[4].setComponents(l-a,u-h,m-v,x-_).normalize(),t===pn)n[5].setComponents(l+a,u+h,m+v,x+_).normalize();else if(t===Bs)n[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xs.x=i.normal.x>0?e.max.x:e.min.x,xs.y=i.normal.y>0?e.max.y:e.min.y,xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ld(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,h[u]=v)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class ti extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<d;f++){const y=f*u-o;for(let _=0;_<c;_++){const x=_*h-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const _=y+c*f,x=y+c*(f+1),L=y+1+c*(f+1),R=y+1+c*f;p.push(_,x,R),p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",lh=`vec4 LinearTransferOETF( in vec4 value ) {
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
vec3 nonPerturbedNormal = normal;`,Kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jh=`#ifndef FLAT_SHADED
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
#endif`,nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iu=`#ifdef USE_IRIDESCENCEMAP
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
}`,ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
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
}`,Ku=`#define MATCAP
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
}`,ju=`#define NORMAL
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
}`,of=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,Ve={alphahash_fragment:Dd,alphahash_pars_fragment:Pd,alphamap_fragment:Id,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Gd,bsdfs:Vd,iridescence_fragment:Wd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:Qd,common:eh,cube_uv_reflection_fragment:th,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:sh,emissivemap_fragment:rh,emissivemap_pars_fragment:oh,colorspace_fragment:ah,colorspace_pars_fragment:lh,envmap_fragment:ch,envmap_common_pars_fragment:dh,envmap_pars_fragment:hh,envmap_pars_vertex:uh,envmap_physical_pars_fragment:bh,envmap_vertex:fh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:vh,gradientmap_pars_fragment:_h,lightmap_pars_fragment:xh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Sh,lights_toon_fragment:Eh,lights_toon_pars_fragment:wh,lights_phong_fragment:Th,lights_phong_pars_fragment:Ah,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ch,lights_fragment_begin:Lh,lights_fragment_maps:Dh,lights_fragment_end:Ph,logdepthbuf_fragment:Ih,logdepthbuf_pars_fragment:Nh,logdepthbuf_pars_vertex:Uh,logdepthbuf_vertex:Fh,map_fragment:Oh,map_pars_fragment:Bh,map_particle_fragment:zh,map_particle_pars_fragment:kh,metalnessmap_fragment:Hh,metalnessmap_pars_fragment:Gh,morphinstance_vertex:Vh,morphcolor_vertex:Wh,morphnormal_vertex:$h,morphtarget_pars_vertex:Xh,morphtarget_vertex:qh,normal_fragment_begin:Yh,normal_fragment_maps:Kh,normal_pars_fragment:jh,normal_pars_vertex:Zh,normal_vertex:Jh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:eu,clearcoat_normal_fragment_maps:tu,clearcoat_pars_fragment:nu,iridescence_pars_fragment:iu,opaque_fragment:su,packing:ru,premultiplied_alpha_fragment:ou,project_vertex:au,dithering_fragment:lu,dithering_pars_fragment:cu,roughnessmap_fragment:du,roughnessmap_pars_fragment:hu,shadowmap_pars_fragment:uu,shadowmap_pars_vertex:fu,shadowmap_vertex:pu,shadowmask_pars_fragment:mu,skinbase_vertex:gu,skinning_pars_vertex:vu,skinning_vertex:_u,skinnormal_vertex:xu,specularmap_fragment:yu,specularmap_pars_fragment:Mu,tonemapping_fragment:Su,tonemapping_pars_fragment:bu,transmission_fragment:Eu,transmission_pars_fragment:wu,uv_pars_fragment:Tu,uv_pars_vertex:Au,uv_vertex:Ru,worldpos_vertex:Cu,background_vert:Lu,background_frag:Du,backgroundCube_vert:Pu,backgroundCube_frag:Iu,cube_vert:Nu,cube_frag:Uu,depth_vert:Fu,depth_frag:Ou,distanceRGBA_vert:Bu,distanceRGBA_frag:zu,equirect_vert:ku,equirect_frag:Hu,linedashed_vert:Gu,linedashed_frag:Vu,meshbasic_vert:Wu,meshbasic_frag:$u,meshlambert_vert:Xu,meshlambert_frag:qu,meshmatcap_vert:Yu,meshmatcap_frag:Ku,meshnormal_vert:ju,meshnormal_frag:Zu,meshphong_vert:Ju,meshphong_frag:Qu,meshphysical_vert:ef,meshphysical_frag:tf,meshtoon_vert:nf,meshtoon_frag:sf,points_vert:rf,points_frag:of,shadow_vert:af,shadow_frag:lf,sprite_vert:cf,sprite_frag:df},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Qt={basic:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Tt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Tt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Tt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Tt([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Tt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Tt([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Tt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Tt([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Tt([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Tt([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Qt.physical={uniforms:Tt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ys={r:0,b:0,g:0},Hn=new nn,hf=new lt;function uf(s,e,t,n,i,r,o){const a=new We(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?f(a,l):x&&x.isColor&&(f(x,1),_=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Vs)?(d===void 0&&(d=new Je(new Pn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ci(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Hn.copy(_.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(Hn)),d.material.toneMapped=Ke.getTransfer(x.colorSpace)!==nt,(h!==x||u!==x.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=x,u=x.version,p=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Je(new ti(2,2),new In({name:"BackgroundMaterial",uniforms:Ci(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(ys,Xl(s)),n.buffers.color.setClear(ys.r,ys.g,ys.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:v,addToRenderList:m}}function ff(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(S,C,N,U,B){let H=!1;const z=h(U,N,C);r!==z&&(r=z,c(r.object)),H=p(S,U,N,B),H&&g(S,U,N,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,C,N,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function d(S){return s.deleteVertexArray(S)}function h(S,C,N){const U=N.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let H=B[C.id];H===void 0&&(H={},B[C.id]=H);let z=H[U];return z===void 0&&(z=u(l()),H[U]=z),z}function u(S){const C=[],N=[],U=[];for(let B=0;B<t;B++)C[B]=0,N[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,C,N,U){const B=r.attributes,H=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){const ee=B[G];let de=H[G];if(de===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(S,C,N,U){const B={},H=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){let ee=H[G];ee===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),B[G]=de,z++}r.attributes=B,r.attributesNum=z,r.index=U}function v(){const S=r.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){const N=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;N[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),B[S]!==C&&(s.vertexAttribDivisor(S,C),B[S]=C)}function y(){const S=r.newAttributes,C=r.enabledAttributes;for(let N=0,U=C.length;N<U;N++)C[N]!==S[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function _(S,C,N,U,B,H,z){z===!0?s.vertexAttribIPointer(S,C,N,B,H):s.vertexAttribPointer(S,C,N,U,B,H)}function x(S,C,N,U){v();const B=U.attributes,H=N.getAttributes(),z=C.defaultAttributeValues;for(const X in H){const G=H[X];if(G.location>=0){let J=B[X];if(J===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const ee=J.normalized,de=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Oe=ye.buffer,q=ye.type,ie=ye.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||J.gpuType===Po;if(J.isInterleavedBufferAttribute){const re=J.data,Ae=re.stride,Ue=J.offset;if(re.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)f(G.location+Ie,re.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)m(G.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let Ie=0;Ie<G.locationSize;Ie++)_(G.location+Ie,de/G.locationSize,q,ee,Ae*ie,(Ue+de/G.locationSize*Ie)*ie,ge)}else{if(J.isInstancedBufferAttribute){for(let re=0;re<G.locationSize;re++)f(G.location+re,J.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let re=0;re<G.locationSize;re++)m(G.location+re);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let re=0;re<G.locationSize;re++)_(G.location+re,de/G.locationSize,q,ee,de*ie,de/G.locationSize*re*ie,ge)}}else if(z!==void 0){const ee=z[X];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(G.location,ee);break;case 3:s.vertexAttrib3fv(G.location,ee);break;case 4:s.vertexAttrib4fv(G.location,ee);break;default:s.vertexAttrib1fv(G.location,ee)}}}}y()}function L(){w();for(const S in n){const C=n[S];for(const N in C){const U=C[N];for(const B in U)d(U[B].object),delete U[B];delete C[N]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const N in C){const U=C[N];for(const B in U)d(U[B].object),delete U[B];delete C[N]}delete n[S.id]}function A(S){for(const C in n){const N=n[C];if(N[S.id]===void 0)continue;const U=N[S.id];for(const B in U)d(U[B].object),delete U[B];delete N[S.id]}}function w(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function pf(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Kt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==gn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!w)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function gf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Tn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:n,_=y*4;let x=f.clippingState||null;l.value=x,x=d(g,u,_,p);for(let L=0;L!==_;++L)x[L]=t[L];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function vf(s){let e=new WeakMap;function t(o,a){return a===Xr?o.mapping=wi:a===qr&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ad(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jl extends ql{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,La=[.125,.215,.35,.446,.526,.582],$n=20,yr=new jl,Da=new We;let Mr=null,Sr=0,br=0,Er=!1;const Vn=(1+Math.sqrt(5))/2,gi=1/Vn,Pa=[new P(-Vn,gi,0),new P(Vn,gi,0),new P(-gi,0,Vn),new P(gi,0,Vn),new P(0,Vn,-gi),new P(0,Vn,gi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ia{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr,Sr,br),this._renderer.xr.enabled=Er,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ji,format:Kt,colorSpace:Li,depthBuffer:!1},i=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=xf(r,e,t)}return i}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,i){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Da),d.toneMapping=Cn,d.autoClear=!1;const p=new Vt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Je(new Pn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Da),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;Ms(i,y*_,f>2?_:0,_,_),d.setRenderTarget(i),v&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pa[(i-r-1)%Pa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Je(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let y=0;for(let A=0;A<$n;++A){const w=A/v,M=Math.exp(-w*w/2);f.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const x=this._sizeLods[i],L=3*x*(i>_-_i?i-_+_i:0),R=4*(this._cubeSize-x);Ms(t,L,R,3*x,2*x),l.setRenderTarget(t),l.render(h,yr)}}function _f(s){const e=[],t=[],n=[];let i=s;const r=s-_i+1+La.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-_i?l=La[o-s+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,w=R>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];y.set(M,v*g*R),_.set(u,m*g*R);const S=[R,R,R,R,R,R];x.set(S,f*g*R)}const L=new dt;L.setAttribute("position",new mt(y,v)),L.setAttribute("uv",new mt(_,m)),L.setAttribute("faceIndex",new mt(x,f)),e.push(L),i>_i&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Na(s,e,t){const n=new jn(s,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function xf(s,e,t){const n=new Float32Array($n),i=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ua(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Fa(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function yf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xr||l===qr,d=l===wi||l===Ti;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ia(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new Ia(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sf(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const L=y[_+0],R=y[_+1],A=y[_+2];u.push(L,R,R,A,A,L)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const L=_+0,R=_+1,A=_+2;u.push(L,R,R,A,A,L)}}else return;const m=new(kl(u)?$l:Wl)(u,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function bf(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*v[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ef(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wf(s,e,t){const n=new WeakMap,i=new ut;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*R*4*h),w=new Gl(A,L,R,h);w.type=fn,w.needsUpdate=!0;const M=x*4;for(let C=0;C<h;C++){const N=f[C],U=y[C],B=_[C],H=L*R*4*C;for(let z=0;z<N.count;z++){const X=z*M;g===!0&&(i.fromBufferAttribute(N,z),A[H+X+0]=i.x,A[H+X+1]=i.y,A[H+X+2]=i.z,A[H+X+3]=0),v===!0&&(i.fromBufferAttribute(U,z),A[H+X+4]=i.x,A[H+X+5]=i.y,A[H+X+6]=i.z,A[H+X+7]=0),m===!0&&(i.fromBufferAttribute(B,z),A[H+X+8]=i.x,A[H+X+9]=i.y,A[H+X+10]=i.z,A[H+X+11]=B.itemSize===4?i.w:1)}}u={count:h,texture:w,size:new ne(L,R)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Tf(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Zl extends It{constructor(e,t,n,i,r,o,a,l,c,d=Si){if(d!==Si&&d!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Si&&(n=Kn),n===void 0&&d===Ri&&(n=Ai),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Jl=new It,Oa=new Zl(1,1),Ql=new Gl,ec=new hd,tc=new Yl,Ba=[],za=[],ka=new Float32Array(16),Ha=new Float32Array(9),Ga=new Float32Array(4);function Pi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ba[i];if(r===void 0&&(r=new Float32Array(i),Ba[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qs(s,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Af(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function Cf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function Lf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function Df(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ga.set(n),s.uniformMatrix2fv(this.addr,!1,Ga),vt(t,n)}}function Pf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;Ha.set(n),s.uniformMatrix3fv(this.addr,!1,Ha),vt(t,n)}}function If(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;ka.set(n),s.uniformMatrix4fv(this.addr,!1,ka),vt(t,n)}}function Nf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Uf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function Ff(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function Of(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function Bf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function Gf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Oa.compareFunction=zl,r=Oa):r=Jl,t.setTexture2D(e||r,i)}function Vf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ec,i)}function Wf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tc,i)}function $f(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ql,i)}function Xf(s){switch(s){case 5126:return Af;case 35664:return Rf;case 35665:return Cf;case 35666:return Lf;case 35674:return Df;case 35675:return Pf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Uf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return kf;case 36296:return Hf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return $f}}function qf(s,e){s.uniform1fv(this.addr,e)}function Yf(s,e){const t=Pi(e,this.size,2);s.uniform2fv(this.addr,t)}function Kf(s,e){const t=Pi(e,this.size,3);s.uniform3fv(this.addr,t)}function jf(s,e){const t=Pi(e,this.size,4);s.uniform4fv(this.addr,t)}function Zf(s,e){const t=Pi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jf(s,e){const t=Pi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qf(s,e){const t=Pi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ep(s,e){s.uniform1iv(this.addr,e)}function tp(s,e){s.uniform2iv(this.addr,e)}function np(s,e){s.uniform3iv(this.addr,e)}function ip(s,e){s.uniform4iv(this.addr,e)}function sp(s,e){s.uniform1uiv(this.addr,e)}function rp(s,e){s.uniform2uiv(this.addr,e)}function op(s,e){s.uniform3uiv(this.addr,e)}function ap(s,e){s.uniform4uiv(this.addr,e)}function lp(s,e,t){const n=this.cache,i=e.length,r=qs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Jl,r[o])}function cp(s,e,t){const n=this.cache,i=e.length,r=qs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ec,r[o])}function dp(s,e,t){const n=this.cache,i=e.length,r=qs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tc,r[o])}function hp(s,e,t){const n=this.cache,i=e.length,r=qs(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ql,r[o])}function up(s){switch(s){case 5126:return qf;case 35664:return Yf;case 35665:return Kf;case 35666:return jf;case 35674:return Zf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return hp}}class fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xf(t.type)}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=up(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Va(s,e){s.seq.push(e),s.map[e.id]=e}function gp(s,e,t){const n=s.name,i=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),o=wr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Va(t,c===void 0?new fp(a,s,e):new pp(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new mp(a),Va(t,h)),t=h}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);gp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Wa(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const vp=37297;let _p=0;function xp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $a=new He;function yp(s){Ke._getMatrix($a,Ke.workingColorSpace,s);const e=`mat3( ${$a.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Ws:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xa(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xp(s.getShaderSource(e),o)}else return i}function Mp(s,e){const t=yp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sp(s,e){let t;switch(e){case Bc:t="Linear";break;case zc:t="Reinhard";break;case kc:t="Cineon";break;case Tl:t="ACESFilmic";break;case Gc:t="AgX";break;case Vc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ss=new P;function bp(){Ke.getLuminanceCoefficients(Ss);const s=Ss.x.toFixed(4),e=Ss.y.toFixed(4),t=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function wp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wi(s){return s!==""}function qa(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ya(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(s){return s.replace(Ap,Cp)}const Rp=new Map;function Cp(s,e){let t=Ve[e];if(t===void 0){const n=Rp.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(s){return s.replace(Lp,Dp)}function Dp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ja(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Pp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Np(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function Up(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Op(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Pp(t),c=Ip(t),d=Np(t),h=Up(t),u=Fp(t),p=Ep(t),g=wp(r),v=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wi).join(`
`),f.length>0&&(f+=`
`)):(m=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),f=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Mp("linearToOutputTexel",t.outputColorSpace),bp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Eo(o),o=qa(o,t),o=Ya(o,t),a=Eo(a),a=qa(a,t),a=Ya(a,t),o=Ka(o),a=Ka(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+o,x=y+f+a,L=Wa(i,i.VERTEX_SHADER,_),R=Wa(i,i.FRAGMENT_SHADER,x);i.attachShader(v,L),i.attachShader(v,R),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(R).trim();let H=!0,z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,R);else{const X=Xa(i,L,"vertex"),G=Xa(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+X+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||B==="")&&(z=!1);z&&(C.diagnostics={runnable:H,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:f}})}i.deleteShader(L),i.deleteShader(R),w=new Os(i,v),M=Tp(i,v)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,vp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_p++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}}class kp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Hp(s,e,t,n,i,r,o){const a=new Bo,l=new zp,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,C,N,U){const B=N.fog,H=U.geometry,z=M.isMeshStandardMaterial?N.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),G=X&&X.mapping===Vs?X.image.height:null,J=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=ee!==void 0?ee.length:0;let ye=0;H.morphAttributes.position!==void 0&&(ye=1),H.morphAttributes.normal!==void 0&&(ye=2),H.morphAttributes.color!==void 0&&(ye=3);let Oe,q,ie,ge;if(J){const tt=Qt[J];Oe=tt.vertexShader,q=tt.fragmentShader}else Oe=M.vertexShader,q=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const re=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,Ie=U.isBatchedMesh===!0,Ye=!!M.map,Z=!!M.matcap,oe=!!X,D=!!M.aoMap,Re=!!M.lightMap,te=!!M.bumpMap,xe=!!M.normalMap,le=!!M.displacementMap,De=!!M.emissiveMap,ve=!!M.metalnessMap,T=!!M.roughnessMap,b=M.anisotropy>0,k=M.clearcoat>0,Y=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,be=M.transmission>0,he=b&&!!M.anisotropyMap,_e=k&&!!M.clearcoatMap,$e=k&&!!M.clearcoatNormalMap,se=k&&!!M.clearcoatRoughnessMap,Me=Q&&!!M.iridescenceMap,Pe=Q&&!!M.iridescenceThicknessMap,Ne=K&&!!M.sheenColorMap,Se=K&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Ge=!!M.specularColorMap,st=!!M.specularIntensityMap,I=be&&!!M.transmissionMap,ue=be&&!!M.thicknessMap,$=!!M.gradientMap,j=!!M.alphaMap,me=M.alphaTest>0,fe=!!M.alphaHash,ze=!!M.extensions;let ht=Cn;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=s.toneMapping);const St={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:q,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Li,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Z,envMap:oe,envMapMode:oe&&X.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Re,bumpMap:te,normalMap:xe,displacementMap:u&&le,emissiveMap:De,normalMapObjectSpace:xe&&M.normalMapType===qc,normalMapTangentSpace:xe&&M.normalMapType===Bl,metalnessMap:ve,roughnessMap:T,anisotropy:b,anisotropyMap:he,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:Y,iridescence:Q,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:st,transmission:be,transmissionMap:I,thicknessMap:ue,gradientMap:$,opaque:M.transparent===!1&&M.blending===Mi&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:me,alphaHash:fe,combine:M.combine,mapUv:Ye&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:Re&&v(M.lightMap.channel),bumpMapUv:te&&v(M.bumpMap.channel),normalMapUv:xe&&v(M.normalMap.channel),displacementMapUv:le&&v(M.displacementMap.channel),emissiveMapUv:De&&v(M.emissiveMap.channel),metalnessMapUv:ve&&v(M.metalnessMap.channel),roughnessMapUv:T&&v(M.roughnessMap.channel),anisotropyMapUv:he&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(M.sheenRoughnessMap.channel),specularMapUv:Xe&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:st&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ue&&v(M.thicknessMap.channel),alphaMapUv:j&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xe||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ye||j),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:De&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yt,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)S.push(C),S.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(S,M),_(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=g[M.type];let C;if(S){const N=Qt[S];C=bd.clone(N.uniforms)}else C=M.uniforms;return C}function L(M,S){let C;for(let N=0,U=d.length;N<U;N++){const B=d[N];if(B.cacheKey===S){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Op(s,S,M,r),d.push(C)),C}function R(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function A(M){l.remove(M)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:w}}function Gp(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Vp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Za(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ja(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,u,p,g,v,m){const f=o(h,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,v,m){const f=o(h,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||Vp),n.length>1&&n.sort(u||Za),i.length>1&&i.sort(u||Za)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function Wp(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ja,s.set(n,[o])):i>=r.length?(o=new Ja,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function $p(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new We};break;case"SpotLight":t={position:new P,direction:new P,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Xp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let qp=0;function Yp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Kp(s){const e=new $p,t=Xp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new lt,o=new lt;function a(c){let d=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,_=0,x=0,L=0,R=0,A=0;c.sort(Yp);for(let M=0,S=c.length;M<S;M++){const C=c[M],N=C.color,U=C.intensity,B=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=N.r*U,h+=N.g*U,u+=N.b*U;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],U);A++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=C.shadow.matrix,y++}n.directional[p]=z,p++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const X=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,X.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=X.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=H,x++}v++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(N).multiplyScalar(U),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(U),z.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[f]=z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==y||w.numPointShadows!==_||w.numSpotShadows!==x||w.numSpotMaps!==L||w.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,w.directionalLength=p,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=y,w.numPointShadows=_,w.numSpotShadows=x,w.numSpotMaps=L,w.numLightProbes=A,n.version=qp++)}function l(c,d){let h=0,u=0,p=0,g=0,v=0;const m=d.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const _=c[f];if(_.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(_.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Qa(s){const e=new Kp(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jp(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Qa(s),e.set(i,[a])):r>=o.length?(a=new Qa(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Zp extends ei{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends ei{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp=`void main() {
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
}`;function tm(s,e,t){let n=new zo;const i=new ne,r=new ne,o=new ut,a=new Zp({depthPacking:Xc}),l=new Jp,c={},d=t.maxTextureSize,h={[Dn]:Pt,[Pt]:Dn,[yt]:yt},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Qp,fragmentShader:em}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Je(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let f=this.type;this.render=function(R,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Rn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=f!==un&&this.type===un,B=f===un&&this.type!==un;for(let H=0,z=R.length;H<z;H++){const X=R[H],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const J=G.getFrameExtents();if(i.multiply(J),r.copy(G.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/J.x),i.x=r.x*J.x,G.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/J.y),i.y=r.y*J.y,G.mapSize.y=r.y)),G.map===null||U===!0||B===!0){const de=this.type!==un?{minFilter:jt,magFilter:jt}:{};G.map!==null&&G.map.dispose(),G.map=new jn(i.x,i.y,de),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ee=G.getViewportCount();for(let de=0;de<ee;de++){const ye=G.getViewport(de);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),N.viewport(o),G.updateMatrices(X,de),n=G.getFrustum(),x(A,w,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===un&&y(G,w),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,C)};function y(R,A){const w=e.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new jn(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,w,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,w,p,v,null)}function _(R,A,w,M){let S=null;const C=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=S.uuid,U=A.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let H=B[U];H===void 0&&(H=S.clone(),B[U]=H,A.addEventListener("dispose",L)),S=H}if(S.visible=A.visible,S.wireframe=A.wireframe,M===un?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=w}return S}function x(R,A,w,M,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const U=e.update(R),B=R.material;if(Array.isArray(B)){const H=U.groups;for(let z=0,X=H.length;z<X;z++){const G=H[z],J=B[G.materialIndex];if(J&&J.visible){const ee=_(R,J,M,S);R.onBeforeShadow(s,R,A,w,U,ee,G),s.renderBufferDirect(w,null,U,ee,R,G),R.onAfterShadow(s,R,A,w,U,ee,G)}}}else if(B.visible){const H=_(R,B,M,S);R.onBeforeShadow(s,R,A,w,U,H,null),s.renderBufferDirect(w,null,U,H,R,null),R.onAfterShadow(s,R,A,w,U,H,null)}}const N=R.children;for(let U=0,B=N.length;U<B;U++)x(N[U],A,w,M,S)}function L(R){R.target.removeEventListener("dispose",L);for(const w in c){const M=c[w],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const nm={[zr]:kr,[Hr]:Wr,[Gr]:$r,[Ei]:Vr,[kr]:zr,[Wr]:Hr,[$r]:Gr,[Vr]:Ei};function im(s,e){function t(){let I=!1;const ue=new ut;let $=null;const j=new ut(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(s.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,fe,ze,ht,St){St===!0&&(me*=ht,fe*=ht,ze*=ht),ue.set(me,fe,ze,ht),j.equals(ue)===!1&&(s.clearColor(me,fe,ze,ht),j.copy(ue))},reset:function(){I=!1,$=null,j.set(-1,0,0,0)}}}function n(){let I=!1,ue=!1,$=null,j=null,me=null;return{setReversed:function(fe){if(ue!==fe){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const ht=me;me=null,this.setClear(ht)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?re(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(fe){$!==fe&&!I&&(s.depthMask(fe),$=fe)},setFunc:function(fe){if(ue&&(fe=nm[fe]),j!==fe){switch(fe){case zr:s.depthFunc(s.NEVER);break;case kr:s.depthFunc(s.ALWAYS);break;case Hr:s.depthFunc(s.LESS);break;case Ei:s.depthFunc(s.LEQUAL);break;case Gr:s.depthFunc(s.EQUAL);break;case Vr:s.depthFunc(s.GEQUAL);break;case Wr:s.depthFunc(s.GREATER);break;case $r:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=fe}},setLocked:function(fe){I=fe},setClear:function(fe){me!==fe&&(ue&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){I=!1,$=null,j=null,me=null,ue=!1}}}function i(){let I=!1,ue=null,$=null,j=null,me=null,fe=null,ze=null,ht=null,St=null;return{setTest:function(tt){I||(tt?re(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(tt){ue!==tt&&!I&&(s.stencilMask(tt),ue=tt)},setFunc:function(tt,Wt,rn){($!==tt||j!==Wt||me!==rn)&&(s.stencilFunc(tt,Wt,rn),$=tt,j=Wt,me=rn)},setOp:function(tt,Wt,rn){(fe!==tt||ze!==Wt||ht!==rn)&&(s.stencilOp(tt,Wt,rn),fe=tt,ze=Wt,ht=rn)},setLocked:function(tt){I=tt},setClear:function(tt){St!==tt&&(s.clearStencil(tt),St=tt)},reset:function(){I=!1,ue=null,$=null,j=null,me=null,fe=null,ze=null,ht=null,St=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,x=null,L=null,R=null,A=new We(0,0,0),w=0,M=!1,S=null,C=null,N=null,U=null,B=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=X>=2);let J=null,ee={};const de=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Oe=new ut().fromArray(de),q=new ut().fromArray(ye);function ie(I,ue,$,j){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(I,fe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<$;ze++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ue+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const ge={};ge[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(Ei),te(!1),xe(sa),re(s.CULL_FACE),D(Rn);function re(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ae(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ue(I,ue){return h[I]!==ue?(s.bindFramebuffer(I,ue),h[I]=ue,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ie(I,ue){let $=p,j=!1;if(I){$=u.get(ue),$===void 0&&($=[],u.set(ue,$));const me=I.textures;if($.length!==me.length||$[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ze=me.length;fe<ze;fe++)$[fe]=s.COLOR_ATTACHMENT0+fe;$.length=me.length,j=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,j=!0);j&&s.drawBuffers($)}function Ye(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Z={[Wn]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[yc]:s.FUNC_REVERSE_SUBTRACT};Z[Mc]=s.MIN,Z[Sc]=s.MAX;const oe={[bc]:s.ZERO,[Ec]:s.ONE,[wc]:s.SRC_COLOR,[Or]:s.SRC_ALPHA,[Dc]:s.SRC_ALPHA_SATURATE,[Cc]:s.DST_COLOR,[Ac]:s.DST_ALPHA,[Tc]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[Lc]:s.ONE_MINUS_DST_COLOR,[Rc]:s.ONE_MINUS_DST_ALPHA,[Pc]:s.CONSTANT_COLOR,[Ic]:s.ONE_MINUS_CONSTANT_COLOR,[Nc]:s.CONSTANT_ALPHA,[Uc]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,ue,$,j,me,fe,ze,ht,St,tt){if(I===Rn){v===!0&&(Ae(s.BLEND),v=!1);return}if(v===!1&&(re(s.BLEND),v=!0),I!==_c){if(I!==m||tt!==M){if((f!==Wn||x!==Wn)&&(s.blendEquation(s.FUNC_ADD),f=Wn,x=Wn),tt)switch(I){case Mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fr:s.blendFunc(s.ONE,s.ONE);break;case ra:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ra:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,_=null,L=null,R=null,A.set(0,0,0),w=0,m=I,M=tt}return}me=me||ue,fe=fe||$,ze=ze||j,(ue!==f||me!==x)&&(s.blendEquationSeparate(Z[ue],Z[me]),f=ue,x=me),($!==y||j!==_||fe!==L||ze!==R)&&(s.blendFuncSeparate(oe[$],oe[j],oe[fe],oe[ze]),y=$,_=j,L=fe,R=ze),(ht.equals(A)===!1||St!==w)&&(s.blendColor(ht.r,ht.g,ht.b,St),A.copy(ht),w=St),m=I,M=!1}function Re(I,ue){I.side===yt?Ae(s.CULL_FACE):re(s.CULL_FACE);let $=I.side===Pt;ue&&($=!$),te($),I.blending===Mi&&I.transparent===!1?D(Rn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function xe(I){I!==mc?(re(s.CULL_FACE),I!==C&&(I===sa?s.cullFace(s.BACK):I===gc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),C=I}function le(I){I!==N&&(z&&s.lineWidth(I),N=I)}function De(I,ue,$){I?(re(s.POLYGON_OFFSET_FILL),(U!==ue||B!==$)&&(s.polygonOffset(ue,$),U=ue,B=$)):Ae(s.POLYGON_OFFSET_FILL)}function ve(I){I?re(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function T(I){I===void 0&&(I=s.TEXTURE0+H-1),J!==I&&(s.activeTexture(I),J=I)}function b(I,ue,$){$===void 0&&(J===null?$=s.TEXTURE0+H-1:$=J);let j=ee[$];j===void 0&&(j={type:void 0,texture:void 0},ee[$]=j),(j.type!==I||j.texture!==ue)&&(J!==$&&(s.activeTexture($),J=$),s.bindTexture(I,ue||ge[I]),j.type=I,j.texture=ue)}function k(){const I=ee[J];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Oe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function Se(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Xe(I,ue){let $=c.get(ue);$===void 0&&($=new WeakMap,c.set(ue,$));let j=$.get(I);j===void 0&&(j=s.getUniformBlockIndex(ue,I.name),$.set(I,j))}function Ge(I,ue){const j=c.get(ue).get(I);l.get(ue)!==j&&(s.uniformBlockBinding(ue,j,I.__bindingPointIndex),l.set(ue,j))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,ee={},h={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,y=null,_=null,x=null,L=null,R=null,A=new We(0,0,0),w=0,M=!1,S=null,C=null,N=null,U=null,B=null,Oe.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Ae,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:Ye,setBlending:D,setMaterial:Re,setFlipSided:te,setCullFace:xe,setLineWidth:le,setPolygonOffset:De,setScissorTest:ve,activeTexture:T,bindTexture:b,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Me,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:$e,texStorage3D:se,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ne,viewport:Se,reset:st}}function el(s,e,t,n){const i=sm(n);switch(t){case Dl:return s*e;case Il:return s*e;case Nl:return s*e*2;case Ul:return s*e/i.components*i.byteLength;case Uo:return s*e/i.components*i.byteLength;case Fl:return s*e*2/i.components*i.byteLength;case Fo:return s*e*2/i.components*i.byteLength;case Pl:return s*e*3/i.components*i.byteLength;case Kt:return s*e*4/i.components*i.byteLength;case Oo:return s*e*4/i.components*i.byteLength;case Ps:case Is:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Us:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zr:case Qr:return Math.max(s,16)*Math.max(e,8)/4;case jr:case Jr:return Math.max(s,8)*Math.max(e,8)/2;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fs:case _o:case xo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ol:case yo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mo:case So:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(s){switch(s){case gn:case Rl:return{byteLength:1,components:1};case Yi:case Cl:case Ji:return{byteLength:2,components:1};case Io:case No:return{byteLength:2,components:4};case Kn:case Po:case fn:return{byteLength:4,components:1};case Ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function rm(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return p?new OffscreenCanvas(T,b):zs("canvas")}function v(T,b,k){let Y=1;const Q=ve(T);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*Q.width),be=Math.floor(Y*Q.height);h===void 0&&(h=g(K,be));const he=b?g(K,be):h;return he.width=K,he.height=be,he.getContext("2d").drawImage(T,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+be+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,b,k,Y,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=b;if(b===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),b===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGB8UI),k===s.UNSIGNED_SHORT&&(K=s.RGB16UI),k===s.UNSIGNED_INT&&(K=s.RGB32UI),k===s.BYTE&&(K=s.RGB8I),k===s.SHORT&&(K=s.RGB16I),k===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),k===s.UNSIGNED_INT&&(K=s.RGBA32UI),k===s.BYTE&&(K=s.RGBA8I),k===s.SHORT&&(K=s.RGBA16I),k===s.INT&&(K=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),b===s.RGBA){const be=Q?Ws:Ke.getTransfer(Y);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=be===nt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(T,b){let k;return T?b===null||b===Kn||b===Ai?k=s.DEPTH24_STENCIL8:b===fn?k=s.DEPTH32F_STENCIL8:b===Yi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===Ai?k=s.DEPTH_COMPONENT24:b===fn?k=s.DEPTH_COMPONENT32F:b===Yi&&(k=s.DEPTH_COMPONENT16),k}function L(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){const b=T.target;b.removeEventListener("dispose",R),w(b),b.isVideoTexture&&d.delete(b)}function A(T){const b=T.target;b.removeEventListener("dispose",A),S(b)}function w(T){const b=n.get(T);if(b.__webglInit===void 0)return;const k=T.source,Y=u.get(k);if(Y){const Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(T),Object.keys(Y).length===0&&u.delete(k)}n.remove(T)}function M(T){const b=n.get(T);s.deleteTexture(b.__webglTexture);const k=T.source,Y=u.get(k);delete Y[b.__cacheKey],o.memory.textures--}function S(T){const b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[Y]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=T.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const K=n.get(k[Y]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(T)}let C=0;function N(){C=0}function U(){const T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function B(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function H(T,b){const k=n.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,T,b);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function z(T,b){const k=n.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function X(T,b){const k=n.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,b);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function G(T,b){const k=n.get(T);if(T.version>0&&k.__version!==T.version){ie(k,T,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const J={[Yr]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Kr]:s.MIRRORED_REPEAT},ee={[jt]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[ns]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},de={[Yc]:s.NEVER,[ed]:s.ALWAYS,[Kc]:s.LESS,[zl]:s.LEQUAL,[jc]:s.EQUAL,[Qc]:s.GEQUAL,[Zc]:s.GREATER,[Jc]:s.NOTEQUAL};function ye(T,b){if(b.type===fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Js||b.magFilter===ns||b.magFilter===Yn||b.minFilter===en||b.minFilter===Js||b.minFilter===ns||b.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[b.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==ns&&b.minFilter!==Yn||b.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(T,b){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));const Y=b.source;let Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));const K=B(b);if(K!==T.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const be=Q[T.__cacheKey];be!==void 0&&(Q[T.__cacheKey].usedTimes--,be.usedTimes===0&&M(b)),T.__cacheKey=K,T.__webglTexture=Q[K].texture}return k}function q(T,b,k){let Y=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=Oe(T,b),K=b.source;t.bindTexture(Y,T.__webglTexture,s.TEXTURE0+k);const be=n.get(K);if(K.version!==be.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const he=Ke.getPrimaries(Ke.workingColorSpace),_e=b.colorSpace===An?null:Ke.getPrimaries(b.colorSpace),$e=b.colorSpace===An||he===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=v(b.image,!1,i.maxTextureSize);se=De(b,se);const Me=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let Ne=_(b.internalFormat,Me,Pe,b.colorSpace,b.isVideoTexture);ye(Y,b);let Se;const Xe=b.mipmaps,Ge=b.isVideoTexture!==!0,st=be.__version===void 0||Q===!0,I=K.dataReady,ue=L(b,se);if(b.isDepthTexture)Ne=x(b.format===Ri,b.type),st&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Pe,null));else if(b.isDataTexture)if(Xe.length>0){Ge&&st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Xe[0].width,Xe[0].height);for(let $=0,j=Xe.length;$<j;$++)Se=Xe[$],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Me,Pe,Se.data);b.generateMipmaps=!1}else Ge?(st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,se.width,se.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Me,Pe,se.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,se.width,se.height,0,Me,Pe,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,Xe[0].width,Xe[0].height,se.depth);for(let $=0,j=Xe.length;$<j;$++)if(Se=Xe[$],b.format!==Kt)if(Me!==null)if(Ge){if(I)if(b.layerUpdates.size>0){const me=el(Se.width,Se.height,b.format,b.type);for(const fe of b.layerUpdates){const ze=Se.data.subarray(fe*me/Se.data.BYTES_PER_ELEMENT,(fe+1)*me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,fe,Se.width,Se.height,1,Me,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Ne,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,se.depth,Me,Pe,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,Ne,Se.width,Se.height,se.depth,0,Me,Pe,Se.data)}else{Ge&&st&&t.texStorage2D(s.TEXTURE_2D,ue,Ne,Xe[0].width,Xe[0].height);for(let $=0,j=Xe.length;$<j;$++)Se=Xe[$],b.format!==Kt?Me!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(s.TEXTURE_2D,$,Ne,Se.width,Se.height,0,Me,Pe,Se.data)}else if(b.isDataArrayTexture)if(Ge){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ne,se.width,se.height,se.depth),I)if(b.layerUpdates.size>0){const $=el(se.width,se.height,b.format,b.type);for(const j of b.layerUpdates){const me=se.data.subarray(j*$/se.data.BYTES_PER_ELEMENT,(j+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,Me,Pe,me)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Pe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Me,Pe,se.data);else if(b.isData3DTexture)Ge?(st&&t.texStorage3D(s.TEXTURE_3D,ue,Ne,se.width,se.height,se.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Pe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Me,Pe,se.data);else if(b.isFramebufferTexture){if(st)if(Ge)t.texStorage2D(s.TEXTURE_2D,ue,Ne,se.width,se.height);else{let $=se.width,j=se.height;for(let me=0;me<ue;me++)t.texImage2D(s.TEXTURE_2D,me,Ne,$,j,0,Me,Pe,null),$>>=1,j>>=1}}else if(Xe.length>0){if(Ge&&st){const $=ve(Xe[0]);t.texStorage2D(s.TEXTURE_2D,ue,Ne,$.width,$.height)}for(let $=0,j=Xe.length;$<j;$++)Se=Xe[$],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Me,Pe,Se):t.texImage2D(s.TEXTURE_2D,$,Ne,Me,Pe,Se);b.generateMipmaps=!1}else if(Ge){if(st){const $=ve(se);t.texStorage2D(s.TEXTURE_2D,ue,Ne,$.width,$.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Pe,se)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Me,Pe,se);m(b)&&f(Y),be.__version=K.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ie(T,b,k){if(b.image.length!==6)return;const Y=Oe(T,b),Q=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const K=n.get(Q);if(Q.version!==K.__version||Y===!0){t.activeTexture(s.TEXTURE0+k);const be=Ke.getPrimaries(Ke.workingColorSpace),he=b.colorSpace===An?null:Ke.getPrimaries(b.colorSpace),_e=b.colorSpace===An||be===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let j=0;j<6;j++)!$e&&!se?Me[j]=v(b.image[j],!0,i.maxCubemapSize):Me[j]=se?b.image[j].image:b.image[j],Me[j]=De(b,Me[j]);const Pe=Me[0],Ne=r.convert(b.format,b.colorSpace),Se=r.convert(b.type),Xe=_(b.internalFormat,Ne,Se,b.colorSpace),Ge=b.isVideoTexture!==!0,st=K.__version===void 0||Y===!0,I=Q.dataReady;let ue=L(b,Pe);ye(s.TEXTURE_CUBE_MAP,b);let $;if($e){Ge&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Xe,Pe.width,Pe.height);for(let j=0;j<6;j++){$=Me[j].mipmaps;for(let me=0;me<$.length;me++){const fe=$[me];b.format!==Kt?Ne!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,fe.width,fe.height,Ne,fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,fe.width,fe.height,Ne,Se,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Xe,fe.width,fe.height,0,Ne,Se,fe.data)}}}else{if($=b.mipmaps,Ge&&st){$.length>0&&ue++;const j=ve(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Xe,j.width,j.height)}for(let j=0;j<6;j++)if(se){Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me[j].width,Me[j].height,Ne,Se,Me[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,Me[j].width,Me[j].height,0,Ne,Se,Me[j].data);for(let me=0;me<$.length;me++){const ze=$[me].image[j].image;Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,ze.width,ze.height,Ne,Se,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Xe,ze.width,ze.height,0,Ne,Se,ze.data)}}else{Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ne,Se,Me[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,Ne,Se,Me[j]);for(let me=0;me<$.length;me++){const fe=$[me];Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,Ne,Se,fe.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Xe,Ne,Se,fe.image[j])}}}m(b)&&f(s.TEXTURE_CUBE_MAP),K.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ge(T,b,k,Y,Q,K){const be=r.convert(k.format,k.colorSpace),he=r.convert(k.type),_e=_(k.internalFormat,be,he,k.colorSpace),$e=n.get(b),se=n.get(k);if(se.__renderTarget=b,!$e.__hasExternalTextures){const Me=Math.max(1,b.width>>K),Pe=Math.max(1,b.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,_e,Me,Pe,b.depth,0,be,he,null):t.texImage2D(Q,K,_e,Me,Pe,0,be,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),xe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,se.__webglTexture,0,te(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,se.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),b.depthBuffer){const Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,K=x(b.stencilBuffer,Q),be=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=te(b);xe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,K,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,K,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,K,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,T)}else{const Y=b.textures;for(let Q=0;Q<Y.length;Q++){const K=Y[Q],be=r.convert(K.format,K.colorSpace),he=r.convert(K.type),_e=_(K.internalFormat,be,he,K.colorSpace),$e=te(b);k&&xe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,_e,b.width,b.height):xe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,_e,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_e,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const Q=Y.__webglTexture,K=te(b);if(b.depthTexture.format===Si)xe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Ri)xe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const b=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ae(b.__webglFramebuffer,T)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=s.createRenderbuffer(),re(b.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),re(b.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(T,b,k){const Y=n.get(T);b!==void 0&&ge(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(T)}function Ye(T){const b=T.texture,k=n.get(T),Y=n.get(b);T.addEventListener("dispose",A);const Q=T.textures,K=T.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let _e=0;_e<b.mipmaps.length;_e++)k.__webglFramebuffer[he][_e]=s.createFramebuffer()}else k.__webglFramebuffer[he]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)k.__webglFramebuffer[he]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(be)for(let he=0,_e=Q.length;he<_e;he++){const $e=n.get(Q[he]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&xe(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const _e=Q[he];k.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const $e=r.convert(_e.format,_e.colorSpace),se=r.convert(_e.type),Me=_(_e.internalFormat,$e,se,_e.colorSpace,T.isXRRenderTarget===!0),Pe=te(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Me,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,k.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),re(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(s.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(k.__webglFramebuffer[he][_e],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else ge(k.__webglFramebuffer[he],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(b)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,_e=Q.length;he<_e;he++){const $e=Q[he],se=n.get($e);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),ye(s.TEXTURE_2D,$e),ge(k.__webglFramebuffer,T,$e,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m($e)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),ye(he,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)ge(k.__webglFramebuffer[_e],T,b,s.COLOR_ATTACHMENT0,he,_e);else ge(k.__webglFramebuffer,T,b,s.COLOR_ATTACHMENT0,he,0);m(b)&&f(he),t.unbindTexture()}T.depthBuffer&&Ue(T)}function Z(T){const b=T.textures;for(let k=0,Y=b.length;k<Y;k++){const Q=b[k];if(m(Q)){const K=y(T),be=n.get(Q).__webglTexture;t.bindTexture(K,be),f(K),t.unbindTexture()}}}const oe=[],D=[];function Re(T){if(T.samples>0){if(xe(T)===!1){const b=T.textures,k=T.width,Y=T.height;let Q=s.COLOR_BUFFER_BIT;const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(T),he=b.length>1;if(he)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const $e=n.get(b[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,s.NEAREST),l===!0&&(oe.length=0,D.length=0,oe.push(s.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(oe.push(K),D.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const $e=n.get(b[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function te(T){return Math.min(i.maxSamples,T.samples)}function xe(T){const b=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(T){const b=o.render.frame;d.get(T)!==b&&(d.set(T,b),T.update())}function De(T,b){const k=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Li&&k!==An&&(Ke.getTransfer(k)===nt?(Y!==Kt||Q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function om(s,e){function t(n,i=An){let r;const o=Ke.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===Io)return s.UNSIGNED_SHORT_4_4_4_4;if(n===No)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return s.BYTE;if(n===Cl)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===Po)return s.INT;if(n===Kn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===Dl)return s.ALPHA;if(n===Pl)return s.RGB;if(n===Kt)return s.RGBA;if(n===Il)return s.LUMINANCE;if(n===Nl)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===Ul)return s.RED;if(n===Uo)return s.RED_INTEGER;if(n===Fl)return s.RG;if(n===Fo)return s.RG_INTEGER;if(n===Oo)return s.RGBA_INTEGER;if(n===Ps||n===Is||n===Ns||n===Us)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Zr||n===Jr||n===Qr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eo||n===to)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fs||n===_o||n===xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fs)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===yo||n===Mo||n===So)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class am extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class Tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cm=`
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

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new In({vertexShader:cm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class um extends Qn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const v=new hm,m=t.getContextAttributes();let f=null,y=null;const _=[],x=[],L=new ne;let R=null;const A=new Ht;A.viewport=new ut;const w=new Ht;w.viewport=new ut;const M=[A,w],S=new am;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=_[q];return ie===void 0&&(ie=new Tr,_[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=_[q];return ie===void 0&&(ie=new Tr,_[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=_[q];return ie===void 0&&(ie=new Tr,_[q]=ie),ie.getHandSpace()};function U(q){const ie=x.indexOf(q.inputSource);if(ie===-1)return;const ge=_[ie];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let q=0;q<_.length;q++){const ie=x[q];ie!==null&&(x[q]=null,_[q].disconnect(ie))}C=null,N=null,v.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,y=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new jn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ge=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Ri:Si,ge=m.stencil?Ai:Kn);const Ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Ae),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new jn(u.textureWidth,u.textureHeight,{format:Kt,type:gn,depthTexture:new Zl(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(q){for(let ie=0;ie<q.removed.length;ie++){const ge=q.removed[ie],re=x.indexOf(ge);re>=0&&(x[re]=null,_[re].disconnect(ge))}for(let ie=0;ie<q.added.length;ie++){const ge=q.added[ie];let re=x.indexOf(ge);if(re===-1){for(let Ue=0;Ue<_.length;Ue++)if(Ue>=x.length){x.push(ge),re=Ue;break}else if(x[Ue]===null){x[Ue]=ge,re=Ue;break}if(re===-1)break}const Ae=_[re];Ae&&Ae.connect(ge)}}const z=new P,X=new P;function G(q,ie,ge){z.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const re=z.distanceTo(X),Ae=ie.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,Ie=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),Z=(Ae[9]+1)/Ae[5],oe=(Ae[9]-1)/Ae[5],D=(Ae[8]-1)/Ae[0],Re=(Ue[8]+1)/Ue[0],te=Ie*D,xe=Ie*Re,le=re/(-D+Re),De=le*-D;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(le),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ve=Ie+le,T=Ye+le,b=te-De,k=xe+(re-De),Y=Z*Ye/T*ve,Q=oe*Ye/T*ve;q.projectionMatrix.makePerspective(b,k,Y,Q,ve,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,ge=q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),S.near=w.near=A.near=ie,S.far=w.far=A.far=ge,(C!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,N=S.far),A.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|w.layers.mask;const re=q.parent,Ae=S.cameras;J(S,re);for(let Ue=0;Ue<Ae.length;Ue++)J(Ae[Ue],re);Ae.length===2?G(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),ee(q,S,re)};function ee(q,ie,ge){ge===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let de=null;function ye(q,ie){if(d=ie.getViewerPose(c||o),g=ie,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let re=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Ue=0;Ue<ge.length;Ue++){const Ie=ge[Ue];let Ye=null;if(p!==null)Ye=p.getViewport(Ie);else{const oe=h.getViewSubImage(u,Ie);Ye=oe.viewport,Ue===0&&(e.setRenderTargetTextures(y,oe.colorTexture,u.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(y))}let Z=M[Ue];Z===void 0&&(Z=new Ht,Z.layers.enable(Ue),Z.viewport=new ut,M[Ue]=Z),Z.matrix.fromArray(Ie.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ie.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ue===0&&(S.matrix.copy(Z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Z)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ue=h.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,i.renderState)}}for(let ge=0;ge<_.length;ge++){const re=x[ge],Ae=_[ge];re!==null&&Ae!==void 0&&Ae.update(re,ie,c||o)}de&&de(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Oe=new Kl;Oe.setAnimationLoop(ye),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const Gn=new nn,fm=new lt;function pm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Xl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Gn.copy(x),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mm(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=d(y),i[y.id]=x,y.addEventListener("dispose",m));const L=_.program;n.updateUBOMapping(y,L);const R=e.render.frame;r[y.id]!==R&&(u(y),r[y.id]=R)}function d(y){const _=h();y.__bindingPointIndex=_;const x=s.createBuffer(),L=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=i[y.id],x=y.uniforms,L=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let R=0,A=x.length;R<A;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,S=w.length;M<S;M++){const C=w[M];if(p(C,R,M,L)===!0){const N=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let H=0;H<U.length;H++){const z=U[H],X=v(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,_,x,L){const R=y.value,A=_+"_"+x;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const w=L[A];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return L[A]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function g(y){const _=y.uniforms;let x=0;const L=16;for(let A=0,w=_.length;A<w;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,C=M.length;S<C;S++){const N=M[S],U=Array.isArray(N.value)?N.value:[N.value];for(let B=0,H=U.length;B<H;B++){const z=U[B],X=v(z),G=x%L,J=G%X.boundary,ee=G+J;x+=J,ee!==0&&L-ee<X.storage&&(x+=L-ee),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const R=x%L;return R>0&&(x+=L-R),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class gm{constructor(e={}){const{canvas:t=id(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Cn,this.toneMappingExposure=1;const x=this;let L=!1,R=0,A=0,w=null,M=-1,S=null;const C=new ut,N=new ut;let U=null;const B=new We(0);let H=0,z=t.width,X=t.height,G=1,J=null,ee=null;const de=new ut(0,0,z,X),ye=new ut(0,0,z,X);let Oe=!1;const q=new zo;let ie=!1,ge=!1;const re=new lt,Ae=new lt,Ue=new P,Ie=new ut,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function oe(){return w===null?G:1}let D=n;function Re(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const F="webgl2";if(D=Re(F,E),D===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,xe,le,De,ve,T,b,k,Y,Q,K,be,he,_e,$e,se,Me,Pe,Ne,Se,Xe,Ge,st,I;function ue(){te=new Mf(D),te.init(),Ge=new om(D,te),xe=new mf(D,te,e,Ge),le=new im(D,te),xe.reverseDepthBuffer&&u&&le.buffers.depth.setReversed(!0),De=new Ef(D),ve=new Gp,T=new rm(D,te,le,ve,xe,Ge,De),b=new vf(x),k=new yf(x),Y=new Ld(D),st=new ff(D,Y),Q=new Sf(D,Y,De,st),K=new Tf(D,Q,Y,De),Ne=new wf(D,xe,T),se=new gf(ve),be=new Hp(x,b,k,te,xe,st,se),he=new pm(x,ve),_e=new Wp,$e=new jp(te),Pe=new uf(x,b,k,le,K,p,l),Me=new tm(x,K,xe),I=new mm(D,De,xe,le),Se=new pf(D,te,De),Xe=new bf(D,te,De),De.programs=be.programs,x.capabilities=xe,x.extensions=te,x.properties=ve,x.renderLists=_e,x.shadowMap=Me,x.state=le,x.info=De}ue();const $=new um(x,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(z,X,!1))},this.getSize=function(E){return E.set(z,X)},this.setSize=function(E,F,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,X=F,t.width=Math.floor(E*G),t.height=Math.floor(F*G),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(E,F,V){z=E,X=F,G=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,F,V,W){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,F,V,W),le.viewport(C.copy(de).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(ye)},this.setScissor=function(E,F,V,W){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,F,V,W),le.scissor(N.copy(ye).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){le.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let O=!1;if(w!==null){const ae=w.texture.format;O=ae===Oo||ae===Fo||ae===Uo}if(O){const ae=w.texture.type,pe=ae===gn||ae===Kn||ae===Yi||ae===Ai||ae===Io||ae===No,Ee=Pe.getClearColor(),we=Pe.getClearAlpha(),Fe=Ee.r,ke=Ee.g,Te=Ee.b;pe?(g[0]=Fe,g[1]=ke,g[2]=Te,g[3]=we,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Fe,v[1]=ke,v[2]=Te,v[3]=we,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),_e.dispose(),$e.dispose(),ve.dispose(),b.dispose(),k.dispose(),K.dispose(),st.dispose(),I.dispose(),be.dispose(),$.dispose(),$.removeEventListener("sessionstart",jo),$.removeEventListener("sessionend",Zo),Fn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=De.autoReset,F=Me.enabled,V=Me.autoUpdate,W=Me.needsUpdate,O=Me.type;ue(),De.autoReset=E,Me.enabled=F,Me.autoUpdate=V,Me.needsUpdate=W,Me.type=O}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const F=E.target;F.removeEventListener("dispose",ze),ht(F)}function ht(E){St(E),ve.remove(E)}function St(E){const F=ve.get(E).programs;F!==void 0&&(F.forEach(function(V){be.releaseProgram(V)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,O,ae){F===null&&(F=Ye);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Ee=uc(E,F,V,W,O);le.setMaterial(W,pe);let we=V.index,Fe=1;if(W.wireframe===!0){if(we=Q.getWireframeAttribute(V),we===void 0)return;Fe=2}const ke=V.drawRange,Te=V.attributes.position;let je=ke.start*Fe,rt=(ke.start+ke.count)*Fe;ae!==null&&(je=Math.max(je,ae.start*Fe),rt=Math.min(rt,(ae.start+ae.count)*Fe)),we!==null?(je=Math.max(je,0),rt=Math.min(rt,we.count)):Te!=null&&(je=Math.max(je,0),rt=Math.min(rt,Te.count));const ot=rt-je;if(ot<0||ot===1/0)return;st.setup(O,W,Ee,V,we);let Rt,Qe=Se;if(we!==null&&(Rt=Y.get(we),Qe=Xe,Qe.setIndex(Rt)),O.isMesh)W.wireframe===!0?(le.setLineWidth(W.wireframeLinewidth*oe()),Qe.setMode(D.LINES)):Qe.setMode(D.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),le.setLineWidth(Ce*oe()),O.isLineSegments?Qe.setMode(D.LINES):O.isLineLoop?Qe.setMode(D.LINE_LOOP):Qe.setMode(D.LINE_STRIP)}else O.isPoints?Qe.setMode(D.POINTS):O.isSprite&&Qe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,on=O._multiDrawCounts,et=O._multiDrawCount,$t=we?Y.get(we).bytesPerElement:1,ni=ve.get(W).currentProgram.getUniforms();for(let Nt=0;Nt<et;Nt++)ni.setValue(D,"_gl_DrawID",Nt),Qe.render(Ce[Nt]/$t,on[Nt])}else if(O.isInstancedMesh)Qe.renderInstances(je,ot,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,on=Math.min(V.instanceCount,Ce);Qe.renderInstances(je,ot,on)}else Qe.render(je,ot)};function tt(E,F,V){E.transparent===!0&&E.side===yt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,ts(E,F,V),E.side=Dn,E.needsUpdate=!0,ts(E,F,V),E.side=yt):ts(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),f=$e.get(V),f.init(F),_.push(f),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Ee=ae[pe];tt(Ee,V,O),W.add(Ee)}else tt(ae,V,O),W.add(ae)}),_.pop(),f=null,W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(O=>{function ae(){if(W.forEach(function(pe){ve.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){O(E);return}setTimeout(ae,10)}te.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Wt=null;function rn(E){Wt&&Wt(E)}function jo(){Fn.stop()}function Zo(){Fn.start()}const Fn=new Kl;Fn.setAnimationLoop(rn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(E){Wt=E,$.setAnimationLoop(E),E===null?Fn.stop():Fn.start()},$.addEventListener("sessionstart",jo),$.addEventListener("sessionend",Zo),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,w),f=$e.get(E,_.length),f.init(F),_.push(f),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Ae),ge=this.localClippingEnabled,ie=se.init(this.clippingPlanes,ge),m=_e.get(E,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&Zs(ae,F,-1/0,x.sortObjects)}Zs(E,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(J,ee),Z=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Z&&Pe.addToRenderList(m,E),this.info.render.frame++,ie===!0&&se.beginShadows();const V=f.state.shadowsArray;Me.render(V,E,F),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const ae=F.cameras;if(O.length>0)for(let pe=0,Ee=ae.length;pe<Ee;pe++){const we=ae[pe];Qo(W,O,E,we)}Z&&Pe.render(E);for(let pe=0,Ee=ae.length;pe<Ee;pe++){const we=ae[pe];Jo(m,E,we,we.viewport)}}else O.length>0&&Qo(W,O,E,F),Z&&Pe.render(E),Jo(m,E,F);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,F),st.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],ie===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Zs(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){W&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const pe=K.update(E),Ee=E.material;Ee.visible&&m.push(E,pe,Ee,V,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const pe=K.update(E),Ee=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const we=pe.groups;for(let Fe=0,ke=we.length;Fe<ke;Fe++){const Te=we[Fe],je=Ee[Te.materialIndex];je&&je.visible&&m.push(E,pe,je,V,Ie.z,Te)}}else Ee.visible&&m.push(E,pe,Ee,V,Ie.z,null)}}const ae=E.children;for(let pe=0,Ee=ae.length;pe<Ee;pe++)Zs(ae[pe],F,V,W)}function Jo(E,F,V,W){const O=E.opaque,ae=E.transmissive,pe=E.transparent;f.setupLightsView(V),ie===!0&&se.setGlobalState(x.clippingPlanes,V),W&&le.viewport(C.copy(W)),O.length>0&&es(O,F,V),ae.length>0&&es(ae,F,V),pe.length>0&&es(pe,F,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Qo(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new jn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ji:gn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=f.state.transmissionRenderTarget[W.id],pe=W.viewport||C;ae.setSize(pe.z,pe.w);const Ee=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(B),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Pe.render(V);const we=x.toneMapping;x.toneMapping=Cn;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ie===!0&&se.setGlobalState(x.clippingPlanes,W),es(E,V,W),T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae),te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Te=0,je=F.length;Te<je;Te++){const rt=F[Te],ot=rt.object,Rt=rt.geometry,Qe=rt.material,Ce=rt.group;if(Qe.side===yt&&ot.layers.test(W.layers)){const on=Qe.side;Qe.side=Pt,Qe.needsUpdate=!0,ea(ot,V,W,Rt,Qe,Ce),Qe.side=on,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ee),x.setClearColor(B,H),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=we}function es(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ae=E.length;O<ae;O++){const pe=E[O],Ee=pe.object,we=pe.geometry,Fe=W===null?pe.material:W,ke=pe.group;Ee.layers.test(V.layers)&&ea(Ee,F,V,we,Fe,ke)}}function ea(E,F,V,W,O,ae){E.onBeforeRender(x,F,V,W,O,ae),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,F,V,W,E,ae),O.transparent===!0&&O.side===yt&&O.forceSinglePass===!1?(O.side=Pt,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,E,ae),O.side=Dn,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,E,ae),O.side=yt):x.renderBufferDirect(V,F,W,O,E,ae),E.onAfterRender(x,F,V,W,O,ae)}function ts(E,F,V){F.isScene!==!0&&(F=Ye);const W=ve.get(E),O=f.state.lights,ae=f.state.shadowsArray,pe=O.state.version,Ee=be.getParameters(E,O.state,ae,F,V),we=be.getProgramCacheKey(Ee);let Fe=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?k:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Fe===void 0&&(E.addEventListener("dispose",ze),Fe=new Map,W.programs=Fe);let ke=Fe.get(we);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===pe)return na(E,Ee),ke}else Ee.uniforms=be.getUniforms(E),E.onBeforeCompile(Ee,x),ke=be.acquireProgram(Ee,we),Fe.set(we,ke),W.uniforms=Ee.uniforms;const Te=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=se.uniform),na(E,Ee),W.needsLights=pc(E),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function ta(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function na(E,F){const V=ve.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function uc(E,F,V,W,O){F.isScene!==!0&&(F=Ye),T.resetTextureUnits();const ae=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,Ee=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Li,we=(W.isMeshStandardMaterial?k:b).get(W.envMap||pe),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,rt=!!V.morphAttributes.color;let ot=Cn;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ot=x.toneMapping);const Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Rt!==void 0?Rt.length:0,Ce=ve.get(W),on=f.state.lights;if(ie===!0&&(ge===!0||E!==S)){const zt=E===S&&W.id===M;se.setState(W,E,zt)}let et=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==on.state.version||Ce.outputColorSpace!==Ee||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==we||W.fog===!0&&Ce.fog!==ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ke||Ce.morphTargets!==Te||Ce.morphNormals!==je||Ce.morphColors!==rt||Ce.toneMapping!==ot||Ce.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ce.__version=W.version);let $t=Ce.currentProgram;et===!0&&($t=ts(W,F,O));let ni=!1,Nt=!1,Ni=!1;const at=$t.getUniforms(),Jt=Ce.uniforms;if(le.useProgram($t.program)&&(ni=!0,Nt=!0,Ni=!0),W.id!==M&&(M=W.id,Nt=!0),ni||S!==E){le.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),rd(re),od(re),at.setValue(D,"projectionMatrix",re)):at.setValue(D,"projectionMatrix",E.projectionMatrix),at.setValue(D,"viewMatrix",E.matrixWorldInverse);const _n=at.map.cameraPosition;_n!==void 0&&_n.setValue(D,Ue.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&at.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Nt=!0,Ni=!0)}if(O.isSkinnedMesh){at.setOptional(D,O,"bindMatrix"),at.setOptional(D,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),at.setValue(D,"boneTexture",zt.boneTexture,T))}O.isBatchedMesh&&(at.setOptional(D,O,"batchingTexture"),at.setValue(D,"batchingTexture",O._matricesTexture,T),at.setOptional(D,O,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",O._indirectTexture,T),at.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",O._colorsTexture,T));const Ui=V.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Ne.update(O,V,$t),(Nt||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,at.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Jt.envMap.value=we,Jt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Jt.envMapIntensity.value=F.environmentIntensity),Nt&&(at.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&fc(Jt,Ni),ae&&W.fog===!0&&he.refreshFogUniforms(Jt,ae),he.refreshMaterialUniforms(Jt,W,G,X,f.state.transmissionRenderTarget[E.id]),Os.upload(D,ta(Ce),Jt,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Os.upload(D,ta(Ce),Jt,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&at.setValue(D,"center",O.center),at.setValue(D,"modelViewMatrix",O.modelViewMatrix),at.setValue(D,"normalMatrix",O.normalMatrix),at.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zt=W.uniformsGroups;for(let _n=0,xn=zt.length;_n<xn;_n++){const ia=zt[_n];I.update(ia,$t),I.bind(ia,$t)}}return $t}function fc(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function pc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,V){ve.get(E.texture).__webglTexture=F,ve.get(E.depthTexture).__webglTexture=V;const W=ve.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const V=ve.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,V=0){w=E,R=F,A=V;let W=!0,O=null,ae=!1,pe=!1;if(E){const we=ve.get(E);if(we.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(we.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(we.__hasExternalTextures)T.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Te=E.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&ve.has(Te)&&(E.width!==Te.image.width||E.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const ke=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][V]:O=ke[F],ae=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?O=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[V]:O=ke,C.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else C.copy(de).multiplyScalar(G).floor(),N.copy(ye).multiplyScalar(G).floor(),U=Oe;if(le.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&le.drawBuffers(E,O),le.viewport(C),le.scissor(N),le.setScissorTest(U),ae){const we=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,V)}else if(pe){const we=ve.get(E.texture),Fe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,V||0,Fe)}M=-1},this.readRenderTargetPixels=function(E,F,V,W,O,ae,pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){le.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=E.texture,Fe=we.format,ke=we.type;if(!xe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O&&D.readPixels(F,V,W,O,Ge.convert(Fe),Ge.convert(ke),ae)}finally{const we=w!==null?ve.get(w).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,O,ae,pe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){const we=E.texture,Fe=we.format,ke=we.type;if(!xe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-O){le.bindFramebuffer(D.FRAMEBUFFER,Ee);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,V,W,O,Ge.convert(Fe),Ge.convert(ke),0);const je=w!==null?ve.get(w).__webglFramebuffer:null;le.bindFramebuffer(D.FRAMEBUFFER,je);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sd(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Te),D.deleteSync(rt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,V=0){E.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),ae=Math.floor(E.image.height*W),pe=F!==null?F.x:0,Ee=F!==null?F.y:0;T.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,pe,Ee,O,ae),le.unbindTexture()},this.copyTextureToTexture=function(E,F,V=null,W=null,O=0){E.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ae,pe,Ee,we,Fe,ke,Te,je,rt;const ot=E.isCompressedTexture?E.mipmaps[O]:E.image;V!==null?(ae=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,Fe=V.min.y,ke=V.isBox3?V.min.z:0):(ae=ot.width,pe=ot.height,Ee=ot.depth||1,we=0,Fe=0,ke=0),W!==null?(Te=W.x,je=W.y,rt=W.z):(Te=0,je=0,rt=0);const Rt=Ge.convert(F.format),Qe=Ge.convert(F.type);let Ce;F.isData3DTexture?(T.setTexture3D(F,0),Ce=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Ce=D.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Ce=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const on=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$t=D.getParameter(D.UNPACK_SKIP_PIXELS),ni=D.getParameter(D.UNPACK_SKIP_ROWS),Nt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke);const Ni=E.isDataArrayTexture||E.isData3DTexture,at=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Jt=ve.get(E),Ui=ve.get(F),zt=ve.get(Jt.__renderTarget),_n=ve.get(Ui.__renderTarget);le.bindFramebuffer(D.READ_FRAMEBUFFER,zt.__webglFramebuffer),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<Ee;xn++)Ni&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,O,ke+xn),E.isDepthTexture?(at&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(F).__webglTexture,O,rt+xn),D.blitFramebuffer(we,Fe,ae,pe,Te,je,ae,pe,D.DEPTH_BUFFER_BIT,D.NEAREST)):at?D.copyTexSubImage3D(Ce,O,Te,je,rt+xn,we,Fe,ae,pe):D.copyTexSubImage2D(Ce,O,Te,je,rt+xn,we,Fe,ae,pe);le.bindFramebuffer(D.READ_FRAMEBUFFER,null),le.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,O,Te,je,rt,ae,pe,Ee,Rt,Qe,ot.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,O,Te,je,rt,ae,pe,Ee,Rt,ot.data):D.texSubImage3D(Ce,O,Te,je,rt,ae,pe,Ee,Rt,Qe,ot):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Te,je,ae,pe,Rt,Qe,ot.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Te,je,ot.width,ot.height,Rt,ot.data):D.texSubImage2D(D.TEXTURE_2D,O,Te,je,ae,pe,Rt,Qe,ot);D.pixelStorei(D.UNPACK_ROW_LENGTH,on),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$t),D.pixelStorei(D.UNPACK_SKIP_ROWS,ni),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Nt),O===0&&F.generateMipmaps&&D.generateMipmap(Ce),le.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,O=0){return E.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,O)},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,le.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Ho{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Ho(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nn extends ei{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ks=new P,Hs=new P,tl=new lt,Hi=new Xs,bs=new $s,Ar=new P,nl=new P;class wo extends Mt{constructor(e=new dt,t=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ks.fromBufferAttribute(t,i-1),Hs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ks.distanceTo(Hs);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;tl.copy(i).invert(),Hi.copy(e.ray).applyMatrix4(tl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=d.getX(v),y=d.getX(v+1),_=Es(this,e,Hi,l,f,y);_&&t.push(_)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(p),f=Es(this,e,Hi,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Es(this,e,Hi,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Es(this,e,Hi,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Es(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ks.fromBufferAttribute(o,i),Hs.fromBufferAttribute(o,r),t.distanceSqToSegment(ks,Hs,Ar,nl)>n)return;Ar.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ar);if(!(l<e.near||l>e.far))return{distance:l,point:nl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const il=new P,sl=new P;class Qi extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)il.fromBufferAttribute(t,i),sl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+il.distanceTo(sl);e.setAttribute("lineDistance",new qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],u=n[i+1]-d,p=(o-d)/u;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ne:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],r=[],o=[],a=new P,l=new lt;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(xt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(xt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Go extends sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*h+this.aX,c=u*h+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _m extends Go{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vo(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let u=(o-r)/c-(a-r)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+h)+(l-a)/h;u*=d,p*=d,i(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ws=new P,Rr=new Vo,Cr=new Vo,Lr=new Vo;class xm extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=i[(a-1)%r]:(ws.subVectors(i[0],i[1]).add(i[0]),c=ws);const h=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?d=i[(a+2)%r]:(ws.subVectors(i[r-1],i[r-2]).add(i[r-1]),d=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Rr.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,g,v,m),Cr.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,g,v,m),Lr.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Rr.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),Cr.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),Lr.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return n.set(Rr.calc(l),Cr.calc(l),Lr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function ym(s,e){const t=1-s;return t*t*e}function Mm(s,e){return 2*(1-s)*s*e}function Sm(s,e){return s*s*e}function Xi(s,e,t,n){return ym(s,e)+Mm(s,t)+Sm(s,n)}function bm(s,e){const t=1-s;return t*t*t*e}function Em(s,e){const t=1-s;return 3*t*t*s*e}function wm(s,e){return 3*(1-s)*s*s*e}function Tm(s,e){return s*s*s*e}function qi(s,e,t,n,i){return bm(s,e)+Em(s,t)+wm(s,n)+Tm(s,i)}class nc extends sn{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qi(e,i.x,r.x,o.x,a.x),qi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Am extends sn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qi(e,i.x,r.x,o.x,a.x),qi(e,i.y,r.y,o.y,a.y),qi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ic extends sn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends sn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sc extends sn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xi(e,i.x,r.x,o.x),Xi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends sn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xi(e,i.x,r.x,o.x),Xi(e,i.y,r.y,o.y),Xi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rc extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],d=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(rl(a,l.x,c.x,d.x,h.x),rl(a,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var To=Object.freeze({__proto__:null,ArcCurve:_m,CatmullRomCurve3:xm,CubicBezierCurve:nc,CubicBezierCurve3:Am,EllipseCurve:Go,LineCurve:ic,LineCurve3:Rm,QuadraticBezierCurve:sc,QuadraticBezierCurve3:Cm,SplineCurve:rc});class Lm extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new To[i.type]().fromJSON(i))}return this}}class ol extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ic(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new sc(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new nc(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new Go(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ii extends dt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(p,2));function y(){const x=new P,L=new P;let R=0;const A=(t-e)/n;for(let w=0;w<=r;w++){const M=[],S=w/r,C=S*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,B=U*l+a,H=Math.sin(B),z=Math.cos(B);L.x=C*H,L.y=-S*n+m,L.z=C*z,h.push(L.x,L.y,L.z),x.set(H,A,z).normalize(),u.push(x.x,x.y,x.z),p.push(U,1-S),M.push(g++)}v.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){const S=v[M][w],C=v[M+1][w],N=v[M+1][w+1],U=v[M][w+1];(e>0||M!==0)&&(d.push(S,C,U),R+=3),(t>0||M!==r-1)&&(d.push(C,N,U),R+=3)}c.addGroup(f,R,0),f+=R}function _(x){const L=g,R=new ne,A=new P;let w=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const C=g;for(let N=0;N<=i;N++){const B=N/i*l+a,H=Math.cos(B),z=Math.sin(B);A.x=M*z,A.y=m*S,A.z=M*H,h.push(A.x,A.y,A.z),u.push(0,S,0),R.x=H*.5+.5,R.y=z*.5*S+.5,p.push(R.x,R.y),g++}for(let N=0;N<i;N++){const U=L+N,B=C+N;x===!0?d.push(B,B+1,U):d.push(B+1,B,U),w+=3}c.addGroup(f,w,x===!0?1:2),f+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends Ii{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Wo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),d(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new P,x=new P,L=new P;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],x),p(t[R+2],L),l(_,x,L,y)}function l(y,_,x,L){const R=L+1,A=[];for(let w=0;w<=R;w++){A[w]=[];const M=y.clone().lerp(x,w/R),S=_.clone().lerp(x,w/R),C=R-w;for(let N=0;N<=C;N++)N===0&&w===R?A[w][N]=M:A[w][N]=M.clone().lerp(S,N/C)}for(let w=0;w<R;w++)for(let M=0;M<2*(R-w)-1;M++){const S=Math.floor(M/2);M%2===0?(u(A[w][S+1]),u(A[w+1][S]),u(A[w][S])):(u(A[w][S+1]),u(A[w+1][S+1]),u(A[w+1][S]))}}function c(y){const _=new P;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function d(){const y=new P;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=m(y)/2/Math.PI+.5,L=f(y)/Math.PI+.5;o.push(x,1-L)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const _=o[y+0],x=o[y+2],L=o[y+4],R=Math.max(_,x,L),A=Math.min(_,x,L);R>.9&&A<.1&&(_<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const y=new P,_=new P,x=new P,L=new P,R=new ne,A=new ne,w=new ne;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),R.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),L.copy(y).add(_).add(x).divideScalar(3);const C=m(L);v(R,S+0,y,C),v(A,S+2,_,C),v(w,S+4,x,C)}}function v(y,_,x,L){L<0&&y.x===1&&(o[_]=y.x-1),x.x===0&&x.z===0&&(o[_]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.vertices,e.indices,e.radius,e.details)}}const Ts=new P,As=new P,Dr=new P,Rs=new Gt;class Dm extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos($i*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),u={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:f}=Rs;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Rs.getNormal(Dr),h[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=h[y],L=h[_],R=Rs[d[y]],A=Rs[d[_]],w=`${x}_${L}`,M=`${L}_${x}`;M in u&&u[M]?(Dr.dot(u[M].normal)<=r&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),u[M]=null):w in u||(u[w]={index0:c[y],index1:c[_],normal:Dr.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];Ts.fromBufferAttribute(a,v),As.fromBufferAttribute(a,m),p.push(Ts.x,Ts.y,Ts.z),p.push(As.x,As.y,As.z)}this.setAttribute("position",new qe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ys extends ol{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ol().fromJSON(i))}return this}}const Pm={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=oc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,d,h,u,p;if(n&&(r=Om(s,e,r,t)),s.length>80*t){a=c=s[0],l=d=s[1];for(let g=t;g<i;g+=t)h=s[g],u=s[g+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>d&&(d=u);p=Math.max(c-a,d-l),p=p!==0?32767/p:0}return Ki(r,o,t,a,l,p,0),o}};function oc(s,e,t,n,i){let r,o;if(i===Ym(s,e,t,n)>0)for(r=e;r<t;r+=n)o=al(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=al(r,s[r],s[r+1],o);return o&&Ks(o,o.next)&&(Zi(o),o=o.next),o}function Jn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||ct(t.prev,t,t.next)===0)){if(Zi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ki(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Gm(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Nm(s,n,i,r):Im(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Um(Jn(s),e,t),Ki(s,e,t,n,i,r,2)):o===2&&Fm(s,e,t,n,i,r):Ki(Jn(s),e,t,n,i,r,1);break}}}function Im(s){const e=s.prev,t=s,n=s.next;if(ct(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=u&&g.y>=h&&g.y<=p&&xi(i,a,r,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nm(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ct(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,d=i.y,h=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=d<h?d<u?d:u:h<u?h:u,v=a>l?a>c?a:c:l>c?l:c,m=d>h?d>u?d:u:h>u?h:u,f=Ao(p,g,e,t,n),y=Ao(v,m,e,t,n);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=f&&x&&x.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&xi(a,d,l,h,c,u,_.x,_.y)&&ct(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&xi(a,d,l,h,c,u,x.x,x.y)&&ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&xi(a,d,l,h,c,u,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&xi(a,d,l,h,c,u,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Um(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ks(i,r)&&ac(i,n,n.next,r)&&ji(i,r)&&ji(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Zi(n),Zi(n.next),n=s=r),n=n.next}while(n!==s);return Jn(n)}function Fm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$m(o,a)){let l=lc(o,a);o=Jn(o,o.next),l=Jn(l,l.next),Ki(o,e,t,n,i,r,0),Ki(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Om(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=oc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Wm(c));for(i.sort(Bm),r=0;r<i.length;r++)t=zm(i[r],t);return t}function Bm(s,e){return s.x-e.x}function zm(s,e){const t=km(s,e);if(!t)return e;const n=lc(t,s);return Jn(n,n.next),Jn(t,t.next)}function km(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let d=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&xi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),ji(t,s)&&(h<d||h===d&&(t.x>i.x||t.x===i.x&&Hm(i,t)))&&(i=t,d=h)),t=t.next;while(t!==a);return i}function Hm(s,e){return ct(s.prev,s,e.prev)<0&&ct(e.next,s,s.next)<0}function Gm(s,e,t,n){let i=s;do i.z===0&&(i.z=Ao(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vm(i)}function Vm(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Ao(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Wm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function $m(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Xm(s,e)&&(ji(s,e)&&ji(e,s)&&qm(s,e)&&(ct(s.prev,s,e.prev)||ct(s,e.prev,e))||Ks(s,e)&&ct(s.prev,s,s.next)>0&&ct(e.prev,e,e.next)>0)}function ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ks(s,e){return s.x===e.x&&s.y===e.y}function ac(s,e,t,n){const i=Ls(ct(s,e,t)),r=Ls(ct(s,e,n)),o=Ls(ct(t,n,s)),a=Ls(ct(t,n,e));return!!(i!==r&&o!==a||i===0&&Cs(s,t,e)||r===0&&Cs(s,n,e)||o===0&&Cs(t,s,n)||a===0&&Cs(t,e,n))}function Cs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ls(s){return s>0?1:s<0?-1:0}function Xm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ac(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ji(s,e){return ct(s.prev,s,s.next)<0?ct(s,e,s.next)>=0&&ct(s,s.prev,e)>=0:ct(s,e,s.prev)<0||ct(s,s.next,e)<0}function qm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function lc(s,e){const t=new Ro(s.i,s.x,s.y),n=new Ro(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function al(s,e,t,n){const i=new Ro(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ro(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ym(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ln{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ln.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];ll(e),cl(n,e);let o=e.length;t.forEach(ll);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,cl(n,t[l]);const a=Pm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ll(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Xo extends dt{constructor(e=new Ys([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Km;let _,x=!1,L,R,A,w;f&&(_=f.getSpacedPoints(d),x=!0,u=!1,L=f.computeFrenetFrames(d,!1),R=new P,A=new P,w=new P),u||(m=0,p=0,g=0,v=0);const M=a.extractPoints(c);let S=M.shape;const C=M.holes;if(!Ln.isClockWise(S)){S=S.reverse();for(let Z=0,oe=C.length;Z<oe;Z++){const D=C[Z];Ln.isClockWise(D)&&(C[Z]=D.reverse())}}const U=Ln.triangulateShape(S,C),B=S;for(let Z=0,oe=C.length;Z<oe;Z++){const D=C[Z];S=S.concat(D)}function H(Z,oe,D){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(oe,D)}const z=S.length,X=U.length;function G(Z,oe,D){let Re,te,xe;const le=Z.x-oe.x,De=Z.y-oe.y,ve=D.x-Z.x,T=D.y-Z.y,b=le*le+De*De,k=le*T-De*ve;if(Math.abs(k)>Number.EPSILON){const Y=Math.sqrt(b),Q=Math.sqrt(ve*ve+T*T),K=oe.x-De/Y,be=oe.y+le/Y,he=D.x-T/Q,_e=D.y+ve/Q,$e=((he-K)*T-(_e-be)*ve)/(le*T-De*ve);Re=K+le*$e-Z.x,te=be+De*$e-Z.y;const se=Re*Re+te*te;if(se<=2)return new ne(Re,te);xe=Math.sqrt(se/2)}else{let Y=!1;le>Number.EPSILON?ve>Number.EPSILON&&(Y=!0):le<-Number.EPSILON?ve<-Number.EPSILON&&(Y=!0):Math.sign(De)===Math.sign(T)&&(Y=!0),Y?(Re=-De,te=le,xe=Math.sqrt(b)):(Re=le,te=De,xe=Math.sqrt(b/2))}return new ne(Re/xe,te/xe)}const J=[];for(let Z=0,oe=B.length,D=oe-1,Re=Z+1;Z<oe;Z++,D++,Re++)D===oe&&(D=0),Re===oe&&(Re=0),J[Z]=G(B[Z],B[D],B[Re]);const ee=[];let de,ye=J.concat();for(let Z=0,oe=C.length;Z<oe;Z++){const D=C[Z];de=[];for(let Re=0,te=D.length,xe=te-1,le=Re+1;Re<te;Re++,xe++,le++)xe===te&&(xe=0),le===te&&(le=0),de[Re]=G(D[Re],D[xe],D[le]);ee.push(de),ye=ye.concat(de)}for(let Z=0;Z<m;Z++){const oe=Z/m,D=p*Math.cos(oe*Math.PI/2),Re=g*Math.sin(oe*Math.PI/2)+v;for(let te=0,xe=B.length;te<xe;te++){const le=H(B[te],J[te],Re);re(le.x,le.y,-D)}for(let te=0,xe=C.length;te<xe;te++){const le=C[te];de=ee[te];for(let De=0,ve=le.length;De<ve;De++){const T=H(le[De],de[De],Re);re(T.x,T.y,-D)}}}const Oe=g+v;for(let Z=0;Z<z;Z++){const oe=u?H(S[Z],ye[Z],Oe):S[Z];x?(A.copy(L.normals[0]).multiplyScalar(oe.x),R.copy(L.binormals[0]).multiplyScalar(oe.y),w.copy(_[0]).add(A).add(R),re(w.x,w.y,w.z)):re(oe.x,oe.y,0)}for(let Z=1;Z<=d;Z++)for(let oe=0;oe<z;oe++){const D=u?H(S[oe],ye[oe],Oe):S[oe];x?(A.copy(L.normals[Z]).multiplyScalar(D.x),R.copy(L.binormals[Z]).multiplyScalar(D.y),w.copy(_[Z]).add(A).add(R),re(w.x,w.y,w.z)):re(D.x,D.y,h/d*Z)}for(let Z=m-1;Z>=0;Z--){const oe=Z/m,D=p*Math.cos(oe*Math.PI/2),Re=g*Math.sin(oe*Math.PI/2)+v;for(let te=0,xe=B.length;te<xe;te++){const le=H(B[te],J[te],Re);re(le.x,le.y,h+D)}for(let te=0,xe=C.length;te<xe;te++){const le=C[te];de=ee[te];for(let De=0,ve=le.length;De<ve;De++){const T=H(le[De],de[De],Re);x?re(T.x,T.y+_[d-1].y,_[d-1].x+D):re(T.x,T.y,h+D)}}}q(),ie();function q(){const Z=i.length/3;if(u){let oe=0,D=z*oe;for(let Re=0;Re<X;Re++){const te=U[Re];Ae(te[2]+D,te[1]+D,te[0]+D)}oe=d+m*2,D=z*oe;for(let Re=0;Re<X;Re++){const te=U[Re];Ae(te[0]+D,te[1]+D,te[2]+D)}}else{for(let oe=0;oe<X;oe++){const D=U[oe];Ae(D[2],D[1],D[0])}for(let oe=0;oe<X;oe++){const D=U[oe];Ae(D[0]+z*d,D[1]+z*d,D[2]+z*d)}}n.addGroup(Z,i.length/3-Z,0)}function ie(){const Z=i.length/3;let oe=0;ge(B,oe),oe+=B.length;for(let D=0,Re=C.length;D<Re;D++){const te=C[D];ge(te,oe),oe+=te.length}n.addGroup(Z,i.length/3-Z,1)}function ge(Z,oe){let D=Z.length;for(;--D>=0;){const Re=D;let te=D-1;te<0&&(te=Z.length-1);for(let xe=0,le=d+m*2;xe<le;xe++){const De=z*xe,ve=z*(xe+1),T=oe+Re+De,b=oe+te+De,k=oe+te+ve,Y=oe+Re+ve;Ue(T,b,k,Y)}}}function re(Z,oe,D){l.push(Z),l.push(oe),l.push(D)}function Ae(Z,oe,D){Ie(Z),Ie(oe),Ie(D);const Re=i.length/3,te=y.generateTopUV(n,i,Re-3,Re-2,Re-1);Ye(te[0]),Ye(te[1]),Ye(te[2])}function Ue(Z,oe,D,Re){Ie(Z),Ie(oe),Ie(Re),Ie(oe),Ie(D),Ie(Re);const te=i.length/3,xe=y.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);Ye(xe[0]),Ye(xe[1]),Ye(xe[3]),Ye(xe[1]),Ye(xe[2]),Ye(xe[3])}function Ie(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function Ye(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new To[i.type]().fromJSON(i)),new Xo(n,e.options)}}const Km={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],d=e[i*3+1];return[new ne(r,o),new ne(a,l),new ne(c,d)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],h=e[n*3+2],u=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-h),new ne(u,1-g),new ne(v,1-f)]:[new ne(a,1-l),new ne(d,1-h),new ne(p,1-g),new ne(m,1-f)]}};function jm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class qo extends $o{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qo(e.radius,e.detail)}}class Un extends dt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],d=[];let h=e;const u=(t-e)/i,p=new P,g=new ne;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,d.push(g.x,g.y)}h+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const y=f+m,_=y,x=y+n+1,L=y+n+2,R=y+1;a.push(_,x,R),a.push(x,L,R)}}this.setIndex(a),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yo extends dt{constructor(e=new Ys([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(r,3)),this.setAttribute("uv",new qe(o,2));function c(d){const h=i.length/3,u=d.extractPoints(t);let p=u.shape;const g=u.holes;Ln.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const y=g[m];Ln.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Ln.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){const y=p[m];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){const y=v[m],_=y[0]+h,x=y[1]+h,L=y[2]+h;n.push(_,x,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Zm(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Yo(n,e.curveSegments)}}function Zm(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class js extends dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new P,u=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const y=[],_=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const R=L/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),m.push(R+x,1-_),y.push(c++)}d.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const _=d[f][y+1],x=d[f][y],L=d[f+1][y],R=d[f+1][y+1];(f!==0||o>0)&&p.push(_,x,R),(f!==n-1||l<Math.PI)&&p.push(x,L,R)}this.setIndex(p),this.setAttribute("position",new qe(g,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zt extends ei{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Pr=new lt,dl=new P,hl=new P;class Jm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(dl),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qm extends Jm{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ul extends cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eg extends cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fl(){return performance.now()}const pl=new lt;class dc{constructor(e,t,n=0,i=1/0){this.ray=new Xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(e,t=!0,n=[]){return Co(e,this,n,t),n.sort(ml),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Co(e[i],this,n,t);return n.sort(ml),n}}function ml(s,e){return s.distance-e.distance}function Co(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Co(r[o],e,t,!0)}}class gl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ng extends Qi{constructor(e=10,t=10,n=4473924,i=8947848){n=new We(n),i=new We(i);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,p=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=u===r?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const d=new dt;d.setAttribute("position",new qe(l,3)),d.setAttribute("color",new qe(c,3));const h=new Nn({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ig extends Qi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new dt;i.setAttribute("position",new qe(t,3)),i.setAttribute("color",new qe(n,3));const r=new Nn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new We,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sg extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);class rg{constructor(e){if(!e)throw new Error("Viewer: Canvas container DOM element is required.");this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.gridHelper=null,this.axesHelper=null,this.sunLight=null,this.fillLight=null,this.ambientLight=null,this.animationFrameId=null,this.clock=new tg,this.fps=60,this.frameCount=0,this.lastFpsTime=performance.now(),this.lastFrameDuration=16.6,this.onRenderFrame=null,this._onResizeBound=this.handleResize.bind(this),this._resizeObserver=null,this.init()}init(){const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.scene=new vm,this.scene.background=new We(395539),this.scene.fog=new Ho(395539,32e-5),this.camera=new Ht(48,e/t,2,15e3),this.camera.position.set(0,850,1350),this.renderer=new gm({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=Tl,this.renderer.toneMappingExposure=1.1,this.container.innerHTML="",this.container.appendChild(this.renderer.domElement),this.setupLighting(),this.setupReferenceGrid(),window.addEventListener("resize",this._onResizeBound),window.ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>this.handleResize()),this._resizeObserver.observe(this.container))}setupLighting(){this.ambientLight=new eg(9413567,.65),this.scene.add(this.ambientLight),this.sunLight=new ul(16774630,1.35),this.sunLight.position.set(-1800,2200,1200),this.scene.add(this.sunLight),this.fillLight=new ul(3718648,.35),this.fillLight.position.set(1600,1200,-1400),this.scene.add(this.fillLight)}setupReferenceGrid(){this.gridHelper=new ng(3e3,30,3718648,1976635),this.gridHelper.position.y=118,this.gridHelper.material.opacity=.45,this.gridHelper.material.transparent=!0,this.scene.add(this.gridHelper),this.axesHelper=new ig(300),this.axesHelper.position.set(0,120,0),this.scene.add(this.axesHelper)}setGridVisible(e){this.gridHelper&&(this.gridHelper.visible=e),this.axesHelper&&(this.axesHelper.visible=e)}handleResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth,t=this.container.clientHeight;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1))}startRenderLoop(e){const t=n=>{this.animationFrameId=requestAnimationFrame(t);const i=performance.now(),r=this.clock.getDelta();typeof e=="function"&&e(r),this.renderer.render(this.scene,this.camera),this.frameCount++;const o=performance.now();o-this.lastFpsTime>=500&&(this.fps=Math.round(this.frameCount*1e3/(o-this.lastFpsTime)),this.frameCount=0,this.lastFpsTime=o),this.lastFrameDuration=performance.now()-i,typeof this.onRenderFrame=="function"&&this.onRenderFrame({fps:this.fps,frameDurationMs:this.lastFrameDuration,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures})};this.animationFrameId=requestAnimationFrame(t)}stopRenderLoop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}dispose(){this.stopRenderLoop(),window.removeEventListener("resize",this._onResizeBound),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this.scene&&(this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>this.disposeMaterial(t)):this.disposeMaterial(e.material))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement))}disposeMaterial(e){e&&(Object.keys(e).forEach(t=>{const n=e[t];n&&typeof n.dispose=="function"&&!(n instanceof ei)&&n.dispose()}),e.dispose())}}const vl={type:"change"},Ko={type:"start"},hc={type:"end"},Ds=new Xs,_l=new Tn,og=Math.cos(70*nd.DEG2RAD),pt=new P,Lt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class ag extends sg{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Zn,this._lastTargetPosition=new P,this._quat=new Zn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gl,this._sphericalDelta=new gl,this._scale=1,this._panOffset=new P,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new P,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cg.bind(this),this._onPointerDown=lg.bind(this),this._onPointerUp=dg.bind(this),this._onContextMenu=vg.bind(this),this._onMouseWheel=fg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=gg.bind(this),this._onMouseDown=hg.bind(this),this._onMouseMove=ug.bind(this),this._interceptControlDown=_g.bind(this),this._interceptControlUp=xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vl),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Lt:n>Math.PI&&(n-=Lt),i<-Math.PI?i+=Lt:i>Math.PI&&(i-=Lt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ds.origin.copy(this.object.position),Ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ds.direction))<og?this.object.lookAt(this.target):(_l.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ds.intersectPlane(_l,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Lt/60*this.autoRotateSpeed*e:Lt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;pt.copy(i).sub(this.target);let r=pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Lt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Lt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Lt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function cg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hc),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=it.DOLLY;break;case yi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}break;case yi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ko)}function ug(s){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fg(s){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(s.preventDefault(),this.dispatchEvent(Ko),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(hc))}function pg(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function mg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=it.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=it.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Ko)}function gg(s){switch(this._trackPointer(s),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=it.NONE}}function vg(s){this.enabled!==!1&&s.preventDefault()}function _g(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class yg{constructor(e,t){if(!e||!t)throw new Error("NavigationControls: Camera and domElement are required.");this.camera=e,this.domElement=t,this.defaultTarget=new P(0,140,0),this.defaultPosition=new P(0,850,1350),this.isTransitioning=!1,this.transitionStart=0,this.transitionDuration=800,this.startPos=new P,this.targetPos=new P,this.startLookAt=new P,this.targetLookAt=new P,this.controls=new ag(this.camera,this.domElement),this.setupControls()}setupControls(){this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.screenSpacePanning=!1,this.controls.minDistance=30,this.controls.maxDistance=5500,this.controls.maxPolarAngle=Math.PI/2-.03,this.controls.minPolarAngle=.02,this.camera.position.copy(this.defaultPosition),this.controls.target.copy(this.defaultTarget),this.controls.update()}update(e){if(this.isTransitioning){const t=performance.now(),n=Math.min((t-this.transitionStart)/this.transitionDuration,1),i=1-Math.pow(1-n,3);this.camera.position.lerpVectors(this.startPos,this.targetPos,i),this.controls.target.lerpVectors(this.startLookAt,this.targetLookAt,i),n>=1&&(this.isTransitioning=!1)}this.controls.update()}animateTo(e,t,n=700){this.isTransitioning=!0,this.transitionStart=performance.now(),this.transitionDuration=n,this.startPos.copy(this.camera.position),this.targetPos.copy(e),this.startLookAt.copy(this.controls.target),this.targetLookAt.copy(t)}setPerspectiveIso(){this.animateTo(new P(0,850,1350),new P(0,140,0))}setTopDown(){this.animateTo(new P(0,2400,.001),new P(0,140,0))}setValleyLow(){this.animateTo(new P(-1100,230,200),new P(200,140,-50))}reset(){this.animateTo(this.defaultPosition,this.defaultTarget)}getTelemetry(){const e=this.camera.position,t=this.controls.target,i=new P().subVectors(e,t).length(),r=(Math.PI/2-this.controls.getPolarAngle())*180/Math.PI;let o=this.controls.getAzimuthalAngle()*180/Math.PI;return o<0&&(o+=360),{camX:e.x,camY:e.y,camZ:e.z,targetX:t.x,targetY:t.y,targetZ:t.z,altitude:e.y,distance:i,pitchDeg:r,azimuthDeg:o}}dispose(){this.controls&&(this.controls.dispose(),this.controls=null)}}class Mg{constructor(e={}){this.width=e.width||2400,this.length=e.length||2400,this.segmentsX=e.segmentsX||128,this.segmentsZ=e.segmentsZ||128,this.mesh=null,this.wireframeMesh=null,this.geometry=null,this.material=null,this.wireframeMaterial=null,this.hypsometricEnabled=!0,this.metadata={isSynthetic:!0,label:"Synthetic Procedural Terrain Placeholder (Ahr Valley Corridor Mock)",demSource:"Procedural Valley Model (Uncalibrated)",studyArea:"Dernau, Ahr Valley (Germany)",coverageBbox:[7.015036,50.511616,7.044231,50.531079],dimensionsMeters:{width:this.width,length:this.length},elevationRangeMeters:[122,318.5],resolution:`${this.segmentsX} × ${this.segmentsZ} vertices`,triangleCount:this.segmentsX*this.segmentsZ*2}}sampleElevation(e,t){const n=-40+130*Math.sin(e/460)+40*Math.sin(e/180)+12*Math.cos(e/75),i=Math.abs(t-n);let r;if(i<55)r=124+1.8*Math.sin(e/140);else if(i<260){const a=(i-55)/205;r=126+22*Math.pow(a,1.35)}else{const a=(i-260)/(this.length/2-260),l=Math.min(Math.max(a,0),1);r=148+165*Math.pow(l,.85)}const o=7*Math.sin(e/140)*Math.cos(t/160)+4*Math.cos(e/75+t/90)+2*Math.sin(e/35)*Math.cos(t/40);return Math.max(122,r+o)}createMesh(){this.geometry=new ti(this.width,this.length,this.segmentsX,this.segmentsZ),this.geometry.rotateX(-Math.PI/2);const e=this.geometry.attributes.position,t=e.count,n=new Float32Array(t*3);let i=1/0,r=-1/0;for(let o=0;o<t;o++){const a=e.getX(o),l=e.getZ(o),c=this.sampleElevation(a,l);e.setY(o,c),c<i&&(i=c),c>r&&(r=c);const d=this.getHypsometricColor(c);n[o*3+0]=d.r,n[o*3+1]=d.g,n[o*3+2]=d.b}return this.geometry.setAttribute("color",new mt(n,3)),this.geometry.computeVertexNormals(),this.metadata.elevationRangeMeters=[Math.round(i*10)/10,Math.round(r*10)/10],this.material=new Zt({vertexColors:!0,roughness:.82,metalness:.08,flatShading:!1}),this.mesh=new Je(this.geometry,this.material),this.mesh.name="Terrain_Surface_Placeholder",this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.wireframeMaterial=new Vt({color:3718648,wireframe:!0,transparent:!0,opacity:.18}),this.wireframeMesh=new Je(this.geometry,this.wireframeMaterial),this.wireframeMesh.name="Terrain_Wireframe_Overlay",this.wireframeMesh.visible=!1,this.mesh.add(this.wireframeMesh),this.mesh}getHypsometricColor(e){if(!this.hypsometricEnabled)return{r:.35,g:.38,b:.44};const t=Math.min(Math.max((e-122)/193,0),1);return t<.1?this.lerpColor({r:.11,g:.18,b:.26},{r:.18,g:.29,b:.24},t/.1):t<.35?this.lerpColor({r:.18,g:.29,b:.24},{r:.36,g:.4,b:.26},(t-.1)/.25):t<.7?this.lerpColor({r:.36,g:.4,b:.26},{r:.49,g:.43,b:.32},(t-.35)/.35):this.lerpColor({r:.49,g:.43,b:.32},{r:.34,g:.37,b:.42},(t-.7)/.3)}lerpColor(e,t,n){const i=Math.min(Math.max(n,0),1);return{r:e.r+(t.r-e.r)*i,g:e.g+(t.g-e.g)*i,b:e.b+(t.b-e.b)*i}}setWireframe(e){this.wireframeMesh&&(this.wireframeMesh.visible=e)}setHypsometric(e){if(this.hypsometricEnabled=e,!this.geometry)return;const t=this.geometry.attributes.position,n=this.geometry.attributes.color,i=n.array;for(let r=0;r<t.count;r++){const o=t.getY(r),a=this.getHypsometricColor(o);i[r*3+0]=a.r,i[r*3+1]=a.g,i[r*3+2]=a.b}n.needsUpdate=!0}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.wireframeMaterial&&(this.wireframeMaterial.dispose(),this.wireframeMaterial=null),this.mesh&&(this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null)}}class Sg{constructor(e,t={}){if(!e||!e.elevations||!e.metadata)throw new Error("DemTerrain: Invalid DEM payload format.");this.rawMetadata=e.metadata,this.elevations=e.elevations,this.rows=this.elevations.length,this.cols=this.elevations[0].length,this.width=t.width||this.rawMetadata.utmExtents.widthMeters||2400,this.length=t.length||this.rawMetadata.utmExtents.lengthMeters||2400,this.segmentsX=t.segmentsX||this.cols-1,this.segmentsZ=t.segmentsZ||this.rows-1,this.minElev=this.rawMetadata.elevationStats.minMeters,this.maxElev=this.rawMetadata.elevationStats.maxMeters,this.meanElev=this.rawMetadata.elevationStats.meanMeters,this.mesh=null,this.wireframeMesh=null,this.geometry=null,this.material=null,this.wireframeMaterial=null,this.hypsometricEnabled=!0,this.metadata={isSynthetic:!1,isRealDEM:!0,label:"Official Rhineland-Palatinate DGM1 Bare-Earth LiDAR Model",demSource:"LVermGeo RLP DGM1 (Airborne LiDAR)",product:this.rawMetadata.product,surveyYears:this.rawMetadata.surveyYears,license:this.rawMetadata.license,attribution:this.rawMetadata.attribution,studyArea:this.rawMetadata.studyArea,verticalDatum:this.rawMetadata.verticalDatum,horizontalCRS:this.rawMetadata.sourceCRS,dimensionsMeters:{width:this.width,length:this.length},elevationRangeMeters:[this.minElev,this.maxElev],meanElevationMeters:this.meanElev,reliefMeters:Math.round((this.maxElev-this.minElev)*10)/10,resolution:`${this.cols} × ${this.rows} vertices (${Math.round(this.width/(this.cols-1)*10)/10}m grid step)`,triangleCount:this.segmentsX*this.segmentsZ*2}}sampleElevation(e,t){const n=(e+this.width/2)/this.width,i=(t+this.length/2)/this.length,r=Math.max(0,Math.min(1,n)),o=Math.max(0,Math.min(1,i)),a=r*(this.cols-1),l=o*(this.rows-1),c=Math.floor(a),d=Math.min(c+1,this.cols-1),h=Math.floor(l),u=Math.min(h+1,this.rows-1),p=a-c,g=l-h,v=this.elevations[h][c],m=this.elevations[h][d],f=this.elevations[u][c],y=this.elevations[u][d],_=v*(1-p)+m*p,x=f*(1-p)+y*p;return _*(1-g)+x*g}createMesh(){this.geometry=new ti(this.width,this.length,this.segmentsX,this.segmentsZ),this.geometry.rotateX(-Math.PI/2);const e=this.geometry.attributes.position,t=e.count,n=new Float32Array(t*3);for(let i=0;i<t;i++){const r=e.getX(i),o=e.getZ(i),a=this.sampleElevation(r,o);e.setY(i,a);const l=this.getHypsometricColor(a);n[i*3+0]=l.r,n[i*3+1]=l.g,n[i*3+2]=l.b}return this.geometry.setAttribute("color",new mt(n,3)),this.geometry.computeVertexNormals(),this.material=new Zt({vertexColors:!0,roughness:.84,metalness:.06,flatShading:!1}),this.mesh=new Je(this.geometry,this.material),this.mesh.name="Terrain_Surface_DGM1_RealDEM",this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.wireframeMaterial=new Vt({color:3718648,wireframe:!0,transparent:!0,opacity:.16}),this.wireframeMesh=new Je(this.geometry,this.wireframeMaterial),this.wireframeMesh.name="Terrain_Wireframe_Overlay",this.wireframeMesh.visible=!1,this.mesh.add(this.wireframeMesh),this.mesh}getHypsometricColor(e){if(!this.hypsometricEnabled)return{r:.36,g:.39,b:.44};const t=Math.min(Math.max((e-this.minElev)/(this.maxElev-this.minElev),0),1);return t<.12?this.lerpColor({r:.11,g:.22,b:.25},{r:.18,g:.32,b:.24},t/.12):t<.38?this.lerpColor({r:.18,g:.32,b:.24},{r:.38,g:.42,b:.25},(t-.12)/.26):t<.72?this.lerpColor({r:.38,g:.42,b:.25},{r:.52,g:.45,b:.32},(t-.38)/.34):this.lerpColor({r:.52,g:.45,b:.32},{r:.42,g:.45,b:.5},(t-.72)/.28)}lerpColor(e,t,n){const i=Math.min(Math.max(n,0),1);return{r:e.r+(t.r-e.r)*i,g:e.g+(t.g-e.g)*i,b:e.b+(t.b-e.b)*i}}setWireframe(e){this.wireframeMesh&&(this.wireframeMesh.visible=e)}setHypsometric(e){if(this.hypsometricEnabled=e,!this.geometry)return;const t=this.geometry.attributes.position,n=this.geometry.attributes.color,i=n.array;for(let r=0;r<t.count;r++){const o=t.getY(r),a=this.getHypsometricColor(o);i[r*3+0]=a.r,i[r*3+1]=a.g,i[r*3+2]=a.b}n.needsUpdate=!0}dispose(){this.geometry&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null),this.wireframeMaterial&&(this.wireframeMaterial.dispose(),this.wireframeMaterial=null),this.mesh&&(this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh=null)}}class bg{constructor(e){if(!e)throw new Error("TerrainManager: THREE.Scene is required.");this.scene=e,this.activeTerrain=null,this.terrainMesh=null,this.wireframeActive=!1,this.hypsometricActive=!0,this.raycaster=new dc}async loadRealTerrain(e="/data/dernau/dem_height_grid.json"){this.disposeCurrentTerrain();try{console.log(`[TerrainManager] Ingesting real DEM height grid from: ${e}`);const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error ${t.status} fetching DEM at ${e}`);const n=await t.json();return this.demPayload=n,this.activeTerrain=new Sg(n),this.terrainMesh=this.activeTerrain.createMesh(),this.scene.add(this.terrainMesh),this.activeTerrain.setWireframe(this.wireframeActive),this.activeTerrain.setHypsometric(this.hypsometricActive),console.log("[TerrainManager] Real DGM1 terrain loaded successfully:",this.activeTerrain.metadata),this.activeTerrain.metadata}catch(t){return this.demPayload=null,console.warn(`[TerrainManager] Failed to load real DEM (${t.message}). Falling back to synthetic placeholder.`),this.loadPlaceholderTerrain()}}loadPlaceholderTerrain(){return this.disposeCurrentTerrain(),this.activeTerrain=new Mg({width:2400,length:2400,segmentsX:128,segmentsZ:128}),this.terrainMesh=this.activeTerrain.createMesh(),this.scene.add(this.terrainMesh),this.activeTerrain.setWireframe(this.wireframeActive),this.activeTerrain.setHypsometric(this.hypsometricActive),this.activeTerrain.metadata}async loadDefaultTerrain(){return await this.loadRealTerrain()}toggleWireframe(e){return this.wireframeActive=typeof e=="boolean"?e:!this.wireframeActive,this.activeTerrain&&this.activeTerrain.setWireframe(this.wireframeActive),this.wireframeActive}toggleHypsometric(e){return this.hypsometricActive=typeof e=="boolean"?e:!this.hypsometricActive,this.activeTerrain&&this.activeTerrain.setHypsometric(this.hypsometricActive),this.hypsometricActive}getElevationAt(e,t){return this.activeTerrain?this.activeTerrain.sampleElevation(e,t):null}raycastSurface(e,t){if(!this.terrainMesh||!t)return null;this.raycaster.setFromCamera(e,t);const n=this.raycaster.intersectObject(this.terrainMesh,!1);return n&&n.length>0?n[0].point:null}getMetadata(){return this.activeTerrain?this.activeTerrain.metadata:null}getDemPayload(){return this.demPayload||null}disposeCurrentTerrain(){this.activeTerrain&&(this.activeTerrain.dispose(),this.activeTerrain=null,this.terrainMesh=null)}dispose(){this.disposeCurrentTerrain(),this.scene=null}}const xl=6378137,Nr=1/298.257223563,At=2*Nr-Nr*Nr,Ur=At/(1-At),yl=.9996,Eg=9*Math.PI/180,Ml={x:360327.76,y:559845317e-2};function wg(s,e){const t=e*Math.PI/180,i=s*Math.PI/180-Eg,r=Math.sin(t),o=Math.cos(t),a=Math.tan(t),l=xl/Math.sqrt(1-At*r*r),c=a*a,d=Ur*o*o,h=o*i,u=xl*((1-At/4-3*At*At/64-5*Math.pow(At,3)/256)*t-(3*At/8+3*At*At/32+45*Math.pow(At,3)/1024)*Math.sin(2*t)+(15*At*At/256+45*Math.pow(At,3)/1024)*Math.sin(4*t)-35*Math.pow(At,3)/3072*Math.sin(6*t)),p=5e5+yl*l*(h+(1-c+d)*Math.pow(h,3)/6+(5-18*c+c*c+72*d-58*Ur)*Math.pow(h,5)/120),g=yl*(u+l*a*(h*h/2+(5-c+9*d+4*d*d)*Math.pow(h,4)/24+(61-58*c+c*c+600*d-330*Ur)*Math.pow(h,6)/720));return{x:p,y:g}}function tn(s,e){const t=wg(s,e);return{x:t.x-Ml.x,z:-(t.y-Ml.y)}}class Tg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Buildings_Layer",this.scene.add(this.group),this.buildingsMesh=null,this.buildingsMaterial=null,this.rawGeojson=null,this.floodedMesh=null,this.normalMesh=null,this.features=[],this.depthColorMode="dynamic-depth",this.stats={total:0,flooded:0,normal:0},this.depthStats={dry:0,shallow:0,moderate:0,deep:0},this.highlightBox=null,this.highlightMarker=null,this.accessLostGroup=new Dt,this.accessLostGroup.name="Access_Lost_Highlights",this.group.add(this.accessLostGroup)}async load(e="/data/dernau/buildings_exposed.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`BuildingLayer: Failed to fetch GeoJSON from ${e} (${t.status})`);const n=await t.json();return this.rawGeojson=n,this.buildGeometry(n),this.stats}buildGeometry(e){this.dispose();const t=e.features||[];this.features=[];const n=6,i=[];if(t.forEach((r,o)=>{if(!r.geometry)return;const a=r.properties||{},l=a.flooded===!0,c=r.geometry.type,d=r.geometry.coordinates;let h=[];c==="Polygon"?h.push(d):c==="MultiPolygon"&&(h=d),h.forEach(u=>{if(!u||u.length===0)return;const p=u[0];if(p.length<3)return;const g=[];let v=0,m=0;for(let w=0;w<p.length-1;w++){const M=tn(p[w][0],p[w][1]);g.push(M),v+=M.x,m+=M.z}const f=g.length;if(f<3)return;v/=f,m/=f;const y=this.terrainManager.getElevationAt(v,m)||135,_=new Ys;_.moveTo(g[0].x,-g[0].z);for(let w=1;w<f;w++)_.lineTo(g[w].x,-g[w].z);_.closePath();let x=0;for(let w=0;w<f;w++){const M=(w+1)%f;x+=g[w].x*g[M].z-g[M].x*g[w].z}x=Math.abs(x)*.5;const L={depth:n,bevelEnabled:!1},R=new Xo(_,L);R.rotateX(-Math.PI/2);const A=R.attributes.position;for(let w=0;w<A.count;w++){const M=A.getX(w),S=A.getZ(w),C=A.getY(w),N=(this.terrainManager&&typeof this.terrainManager.getElevationAt=="function"?this.terrainManager.getElevationAt(M,S):null)??y;Math.abs(C)<1e-4?A.setY(w,N):A.setY(w,N+n)}R.computeVertexNormals(),R.computeBoundingBox(),i.push(R),this.features.push({id:a.id||`bld-${o}`,kind:"building",flooded:l,areaSqM:Math.round(x*10)/10,baseElevationM:Math.round(y*10)/10,heightM:n,center:{x:v,y:y+n/2,z:m},bounds:R.boundingBox.clone(),currentWaterDepth:0,modeledWaterElev:124,depthCategory:"dry",vertexStart:0,vertexCount:0})})}),i.length>0){const r=this.mergeGeometriesWithColor(i,this.features);this.buildingsMaterial=new Zt({vertexColors:!0,roughness:.65,metalness:.15}),this.buildingsMesh=new Je(r,this.buildingsMaterial),this.buildingsMesh.name="Buildings_Layer_Mesh",this.buildingsMesh.castShadow=!0,this.buildingsMesh.receiveShadow=!0,this.group.add(this.buildingsMesh),this.floodedMesh=this.buildingsMesh,this.normalMesh=this.buildingsMesh}i.forEach(r=>r.dispose()),this.stats={total:this.features.length,flooded:this.features.filter(r=>r.flooded).length,normal:this.features.filter(r=>!r.flooded).length}}mergeGeometriesWithColor(e,t){let n=0,i=0,r=0;for(const v of e)n+=v.attributes.position.array.length,i+=v.attributes.normal.array.length,v.index&&(r+=v.index.array.length);const o=new Float32Array(n),a=new Float32Array(i),l=new Float32Array(n),c=r>0?new Uint32Array(r):null;let d=0,h=0,u=0,p=0;for(let v=0;v<e.length;v++){const m=e[v],f=t[v],y=m.attributes.position.array,_=m.attributes.normal.array,x=m.attributes.position.count;f.vertexStart=p,f.vertexCount=x,o.set(y,d),a.set(_,h);const L=f.flooded?.96:.39,R=f.flooded?.62:.45,A=f.flooded?.04:.55;for(let w=0;w<x;w++)l[(p+w)*3+0]=L,l[(p+w)*3+1]=R,l[(p+w)*3+2]=A;if(m.index&&c){const w=m.index.array;for(let M=0;M<w.length;M++)c[u+M]=w[M]+p;u+=w.length}d+=y.length,h+=_.length,p+=x}const g=new dt;return g.setAttribute("position",new mt(o,3)),g.setAttribute("normal",new mt(a,3)),g.setAttribute("color",new mt(l,3)),c&&g.setIndex(new mt(c,1)),g}setDepthColorMode(e){return this.depthColorMode=e==="historical"?"historical":"dynamic-depth",this.depthColorMode}updateBuildingDepths(e){if(!this.buildingsMesh||!this.buildingsMesh.geometry.attributes.color)return this.depthStats;const t=this.buildingsMesh.geometry.attributes.color.array,n={dry:0,shallow:0,moderate:0,deep:0};for(const i of this.features){const r=typeof e=="function"?e(i.center.x,i.center.z):124,o=Math.max(0,r-i.baseElevationM);i.currentWaterDepth=Math.round(o*100)/100,i.modeledWaterElev=Math.round(r*100)/100;let a,l,c;this.depthColorMode==="historical"?(i.flooded?(a=.96,l=.62,c=.04):(a=.39,l=.45,c=.55),o<=0?n.dry++:o<.5?n.shallow++:o<1.5?n.moderate++:n.deep++):o<=0?(a=.39,l=.45,c=.55,i.depthCategory="dry",n.dry++):o<.5?(a=.92,l=.7,c=.03,i.depthCategory="shallow",n.shallow++):o<1.5?(a=.98,l=.45,c=.09,i.depthCategory="moderate",n.moderate++):(a=.94,l=.27,c=.27,i.depthCategory="deep",n.deep++);const d=i.vertexStart,h=i.vertexCount;for(let u=0;u<h;u++)t[(d+u)*3+0]=a,t[(d+u)*3+1]=l,t[(d+u)*3+2]=c}return this.buildingsMesh.geometry.attributes.color.needsUpdate=!0,this.depthStats=n,this.depthStats}intersectBuilding(e){if(!e)return null;let t=null,n=1/0;for(const i of this.features)if(i.bounds){const r=e.intersectBox(i.bounds,new P);if(r){const o=e.origin.distanceTo(r);o<n&&(n=o,t=i)}}return t}highlightBuilding(e){this.clearHighlight();const t=this.features.find(d=>d.id===e);if(!t||!t.bounds)return null;const n=new P,i=new P;t.bounds.getSize(n),t.bounds.getCenter(i);const r=new Pn(n.x+2,n.y+2,n.z+2),o=new Dm(r),a=new Nn({color:3718648,linewidth:3});this.highlightBox=new Qi(o,a),this.highlightBox.position.copy(i),this.group.add(this.highlightBox);const l=new Wo(2.5,6,4);l.rotateX(Math.PI);const c=new Vt({color:3718648});return this.highlightMarker=new Je(l,c),this.highlightMarker.position.set(i.x,t.bounds.max.y+8,i.z),this.group.add(this.highlightMarker),t}clearHighlight(){this.highlightBox&&(this.group.remove(this.highlightBox),this.highlightBox.geometry.dispose(),this.highlightBox.material.dispose(),this.highlightBox=null),this.highlightMarker&&(this.group.remove(this.highlightMarker),this.highlightMarker.geometry.dispose(),this.highlightMarker.material.dispose(),this.highlightMarker=null)}updateAccessLostHighlights(e){if(this.clearAccessLostHighlights(),!(!e||e.size===0)){for(const t of this.features)if(e.has(t.id)){const n=new Un(8,11,16);n.rotateX(-Math.PI/2);const i=new Vt({color:15680580,transparent:!0,opacity:.6,side:yt}),r=new Je(n,i);r.position.set(t.center.x,t.baseElevationM+.3,t.center.z),this.accessLostGroup.add(r)}}}clearAccessLostHighlights(){for(;this.accessLostGroup.children.length>0;){const e=this.accessLostGroup.children[0];this.accessLostGroup.remove(e),e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}}setVisible(e){this.group.visible=e}dispose(){this.clearHighlight(),this.clearAccessLostHighlights(),this.buildingsMesh&&(this.buildingsMesh.geometry&&this.buildingsMesh.geometry.dispose(),this.group.remove(this.buildingsMesh),this.buildingsMesh=null,this.floodedMesh=null,this.normalMesh=null),this.buildingsMaterial&&(this.buildingsMaterial.dispose(),this.buildingsMaterial=null),this.features=[]}}const Le=Object.freeze({UNAFFECTED:"unaffected",EXPOSED:"exposed",IMPASSABLE:"impassable",UNKNOWN:"unknown"}),Sl=Object.freeze({[Le.UNAFFECTED]:{r:.06,g:.73,b:.51,hex:"#10b981",label:"Unaffected (Dry)"},[Le.EXPOSED]:{r:.96,g:.62,b:.04,hex:"#f59e0b",label:"Exposed (< Threshold)"},[Le.IMPASSABLE]:{r:.94,g:.27,b:.27,hex:"#ef4444",label:"Impassable (>= Threshold)"},[Le.UNKNOWN]:{r:.39,g:.45,b:.55,hex:"#64748b",label:"Unknown (No Data)"}}),Ag=Object.freeze({sampleSpacingMeters:5,snappingToleranceMeters:1,impassableDepthThreshold:.15,exposedDepthThreshold:.001,minValidSampleRatio:.5,elevationOffsetVisual:.55});class Rg{constructor(e=10){this.cellSize=e,this.grid=new Map}_key(e,t){const n=Math.floor(e/this.cellSize),i=Math.floor(t/this.cellSize);return`${n}:${i}`}insert(e){const t=this._key(e.x,e.z);this.grid.has(t)||this.grid.set(t,[]),this.grid.get(t).push(e)}findNearest(e,t,n){const i=Math.floor(e/this.cellSize),r=Math.floor(t/this.cellSize);let o=n,a=null;for(let l=-1;l<=1;l++)for(let c=-1;c<=1;c++){const d=`${i+l}:${r+c}`,h=this.grid.get(d);if(h)for(const u of h){const p=Math.hypot(u.x-e,u.z-t);p<=o&&(o=p,a=u)}}return a}}class Cg{constructor(e,t={}){this.terrainManager=e,this.config={...Ag,...t},this.nodes=new Map,this.edges=new Map,this.features=new Map,this.components=[],this.invalidFeatures=[],this.unresolvedCrossings=[],this.summary={totalFeatures:0,validFeatures:0,invalidFeatures:0,totalEdges:0,totalNodes:0,totalLengthKm:0,connectedComponents:0,unresolvedCrossings:0,unaffected:0,exposed:0,impassable:0,unknown:0,passable:0,waterlogged:0,submerged:0,exposedLengthKm:0,impassableLengthKm:0}}validateFeature(e,t){if(!e||typeof e!="object")return{isValid:!1,error:"Feature is not a valid object",lineStrings:[]};const n=e.properties?.id||`road-${t}`,i=e.geometry;if(!i||!i.type||!i.coordinates)return{isValid:!1,error:`Road ${n} missing geometry or coordinates`,lineStrings:[]};let r=[];if(i.type==="LineString")r.push(i.coordinates);else if(i.type==="MultiLineString")r=i.coordinates;else return{isValid:!1,error:`Road ${n} unsupported geometry type: ${i.type}`,lineStrings:[]};const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(!Array.isArray(l)||l.length<2)continue;let c=!0;for(const d of l){if(!Array.isArray(d)||d.length<2){c=!1;break}const[h,u]=d;if(typeof h!="number"||typeof u!="number"||Number.isNaN(h)||Number.isNaN(u)){c=!1;break}if(h<5||h>15||u<45||u>55){c=!1;break}}c&&o.push(l)}return o.length===0?{isValid:!1,error:`Road ${n} has no valid line coordinates`,lineStrings:[]}:{isValid:!0,lineStrings:o}}buildFromGeoJSON(e){this.nodes.clear(),this.edges.clear(),this.features.clear(),this.components=[],this.invalidFeatures=[],this.unresolvedCrossings=[];const t=e?.features||[],n=new Rg(20),i=this.config.snappingToleranceMeters;let r=0;const o=(l,c,d)=>{const h=n.findNearest(l,c,i);if(h)return h.node;const u=this.terrainManager?.getElevationAt(l,c)??null,p={id:`node_${r++}`,x:l,z:c,lon:d[0],lat:d[1],elevation:u,edgeIds:new Set};return this.nodes.set(p.id,p),n.insert({x:l,z:c,node:p}),p};let a=0;return t.forEach((l,c)=>{const d=this.validateFeature(l,c),h=l.properties?.id||`road-${c}`,u=l.properties?.flooded===!0;if(!d.isValid){this.invalidFeatures.push({id:h,error:d.error,feature:l});return}const p=[];let g=0;d.lineStrings.forEach((m,f)=>{const y=d.lineStrings.length>1?`${h}#${f}`:h,_=m.map(([C,N])=>tn(C,N)),x=o(_[0].x,_[0].z,m[0]),L=o(_[_.length-1].x,_[_.length-1].z,m[m.length-1]);x.edgeIds.add(y),L.edgeIds.add(y);const R=[];let A=0,w=1/0,M=-1/0;for(let C=0;C<_.length-1;C++){const N=_[C],U=_[C+1],B=U.x-N.x,H=U.z-N.z,z=Math.hypot(B,H),X=Math.max(1,Math.ceil(z/this.config.sampleSpacingMeters));for(let G=C===0?0:1;G<=X;G++){const J=G/X,ee=N.x+J*B,de=N.z+J*H,ye=this.terrainManager?.getElevationAt(ee,de)??null,Oe=ye===null||Number.isNaN(ye)||ye<=0||ye===-9999;Oe||(ye<w&&(w=ye),ye>M&&(M=ye)),R.push({x:ee,z:de,groundElevation:Oe?null:ye,isNoData:Oe,cumDistMeters:A+J*z})}A+=z}g+=A;const S={id:y,featureId:h,lineIndex:f,fromNodeId:x.id,toNodeId:L.id,lengthMeters:Math.round(A*10)/10,samples:R,minGroundElev:w===1/0?null:Math.round(w*100)/100,maxGroundElev:M===-1/0?null:Math.round(M*100)/100,vertices:_,geoCoordinates:m,componentId:null,status:Le.UNAFFECTED,statusReason:"Unassessed",maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,sampleCount:R.length,unknownCount:0};this.edges.set(y,S),p.push(S)}),a+=g;const v={id:h,kind:"road",flooded:u,lengthMeters:Math.round(g*10)/10,edges:p,edgeIds:p.map(m=>m.id),minGroundElev:p.reduce((m,f)=>f.minGroundElev!==null&&f.minGroundElev<m?f.minGroundElev:m,1/0),maxGroundElev:p.reduce((m,f)=>f.maxGroundElev!==null&&f.maxGroundElev>m?f.maxGroundElev:m,-1/0),componentId:null,componentSize:0,status:Le.UNAFFECTED,statusReason:"Unassessed",maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,passabilityStatus:"passable"};v.minGroundElev===1/0&&(v.minGroundElev=null),v.maxGroundElev===-1/0&&(v.maxGroundElev=null),this.features.set(h,v)}),this._connectTJunctions(i),this._detectUnresolvedCrossings(i),this._computeConnectedComponents(),this.summary.totalFeatures=t.length,this.summary.validFeatures=this.features.size,this.summary.invalidFeatures=this.invalidFeatures.length,this.summary.totalEdges=this.edges.size,this.summary.totalNodes=this.nodes.size,this.summary.totalLengthKm=Math.round(a/1e3*100)/100,this.summary.connectedComponents=this.components.length,this.summary.unresolvedCrossings=this.unresolvedCrossings.length,console.log(`[RoadNetwork] Graph topology built: ${this.features.size} features, ${this.edges.size} edges, ${this.nodes.size} nodes, ${this.components.length} disconnected components.`),this.unresolvedCrossings.length>0&&console.log(`[RoadNetwork] Preserved ${this.unresolvedCrossings.length} unresolved 2D line crossings without fabricating unverified junctions.`),this.summary}_connectTJunctions(e){const t=[];for(const n of this.edges.values())for(let i=1;i<n.vertices.length-1;i++)t.push({edgeId:n.id,ptIndex:i,vertex:n.vertices[i],geo:n.geoCoordinates[i]});for(const n of this.nodes.values())for(const i of t){if(n.edgeIds.has(i.edgeId))continue;Math.hypot(n.x-i.vertex.x,n.z-i.vertex.z)<=e&&n.edgeIds.add(i.edgeId)}}_detectUnresolvedCrossings(e){const t=[];for(const r of this.edges.values())for(let o=0;o<r.vertices.length-1;o++)t.push({edgeId:r.id,featureId:r.featureId,p1:r.vertices[o],p2:r.vertices[o+1]});const n=(r,o,a)=>(a.z-r.z)*(o.x-r.x)>(o.z-r.z)*(a.x-r.x),i=(r,o,a,l)=>n(r,a,l)!==n(o,a,l)&&n(r,o,a)!==n(r,o,l);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++){const a=t[r],l=t[o];if(a.edgeId===l.edgeId||a.featureId===l.featureId||Math.max(a.p1.x,a.p2.x)<Math.min(l.p1.x,l.p2.x)||Math.min(a.p1.x,a.p2.x)>Math.max(l.p1.x,l.p2.x)||Math.max(a.p1.z,a.p2.z)<Math.min(l.p1.z,l.p2.z)||Math.min(a.p1.z,a.p2.z)>Math.max(l.p1.z,l.p2.z))continue;const c=Math.hypot(a.p1.x-l.p1.x,a.p1.z-l.p1.z),d=Math.hypot(a.p1.x-l.p2.x,a.p1.z-l.p2.z),h=Math.hypot(a.p2.x-l.p1.x,a.p2.z-l.p1.z),u=Math.hypot(a.p2.x-l.p2.x,a.p2.z-l.p2.z);c<=e||d<=e||h<=e||u<=e||i(a.p1,a.p2,l.p1,l.p2)&&this.unresolvedCrossings.push({edgeA:a.edgeId,edgeB:l.edgeId,featureA:a.featureId,featureB:l.featureId,reason:"Lines cross in 2D without common junction node (potential grade separation or digitizing artifact)"})}}_computeConnectedComponents(){const e=new Map;for(const n of this.nodes.values())e.set(n.id,new Set);for(const n of this.edges.values())e.has(n.fromNodeId)&&e.has(n.toNodeId)&&(e.get(n.fromNodeId).add(n.toNodeId),e.get(n.toNodeId).add(n.fromNodeId));const t=new Set;this.components=[];for(const n of this.nodes.values()){if(t.has(n.id))continue;const i=this.components.length+1,r=new Set,o=new Set,a=new Set;let l=0;const c=[n.id];for(t.add(n.id);c.length>0;){const d=c.shift();r.add(d);const h=this.nodes.get(d);h.componentId=i;for(const p of h.edgeIds)if(!o.has(p)){o.add(p);const g=this.edges.get(p);g&&(g.componentId=i,a.add(g.featureId),l+=g.lengthMeters)}const u=e.get(d)||[];for(const p of u)t.has(p)||(t.add(p),c.push(p))}for(const d of a){const h=this.features.get(d);h&&(h.componentId=i,h.componentSize=a.size)}this.components.push({id:i,nodeIds:r,edgeIds:o,featureIds:a,size:a.size,lengthMeters:Math.round(l*10)/10})}this.components.sort((n,i)=>i.size-n.size)}evaluateScenario(e,t={}){const n={...this.config,...t},i=typeof e=="function"?e:()=>typeof e=="number"?e:124;let r=0,o=0,a=0,l=0,c=0,d=0;for(const h of this.features.values()){let u=0,p=0,g=0,v=0;for(const m of h.edges){let f=0,y=0,_=0,x=0;for(const L of m.samples){if(L.isNoData||L.groundElevation===null||typeof L.groundElevation!="number"||Number.isNaN(L.groundElevation)){_++;continue}const R=i(L.x,L.z);if(R===null||typeof R!="number"||Number.isNaN(R)){_++;continue}const A=Math.max(0,R-L.groundElevation);A>f&&(f=A),A>=n.exposedDepthThreshold&&x++,y++}m.maxWaterDepth=Math.round(f*100)/100,m.sampleCount=y,m.unknownCount=_,m.exposedRatio=y>0?x/y:0,m.exposedLengthMeters=Math.round(m.exposedRatio*m.lengthMeters*10)/10,y===0||y/(y+_)<n.minValidSampleRatio?(m.status=Le.UNKNOWN,m.statusReason="Insufficient or unavailable terrain/water elevation data across road geometry"):f>n.impassableDepthThreshold?(m.status=Le.IMPASSABLE,m.statusReason=`Maximum water depth (${f.toFixed(2)}m) exceeds impassability threshold (${n.impassableDepthThreshold.toFixed(2)}m)`):f>=n.exposedDepthThreshold?(m.status=Le.EXPOSED,m.statusReason=`Water depth (${f.toFixed(2)}m) detected, below impassability threshold (${n.impassableDepthThreshold.toFixed(2)}m)`):(m.status=Le.UNAFFECTED,m.statusReason="No positive water depth detected along road geometry (dry)"),f>u&&(u=f),p+=y,g+=_,v+=x}h.maxWaterDepth=Math.round(u*100)/100,h.sampleCount=p,h.unknownSampleCount=g,h.exposedRatio=p>0?v/p:0,h.exposedLengthMeters=Math.round(h.exposedRatio*h.lengthMeters*10)/10,p===0||p/(p+g)<n.minValidSampleRatio?(h.status=Le.UNKNOWN,h.statusReason="Insufficient or unavailable terrain elevation data across road geometry",l++):u>n.impassableDepthThreshold?(h.status=Le.IMPASSABLE,h.statusReason=`Maximum water depth (${u.toFixed(2)}m) exceeds impassability threshold (${n.impassableDepthThreshold.toFixed(2)}m)`,a++,d+=h.lengthMeters):u>=n.exposedDepthThreshold?(h.status=Le.EXPOSED,h.statusReason=`Water depth (${u.toFixed(2)}m) detected, below impassability threshold (${n.impassableDepthThreshold.toFixed(2)}m)`,o++,c+=h.exposedLengthMeters):(h.status=Le.UNAFFECTED,h.statusReason="No positive water depth detected along road geometry (dry)",r++),h.passabilityStatus=h.status===Le.IMPASSABLE?"submerged":h.status===Le.EXPOSED?"waterlogged":"passable"}return this.summary.unaffected=r,this.summary.exposed=o,this.summary.impassable=a,this.summary.unknown=l,this.summary.exposedLengthKm=Math.round(c/1e3*100)/100,this.summary.impassableLengthKm=Math.round(d/1e3*100)/100,this.summary.passable=r,this.summary.waterlogged=o,this.summary.submerged=a,this.getSummary()}getSummary(){return{...this.summary}}getFeature(e){return this.features.get(e)||null}getEdge(e){return this.edges.get(e)||null}getFeatures(){return Array.from(this.features.values())}getEdges(){return Array.from(this.edges.values())}getNodes(){return Array.from(this.nodes.values())}getComponents(){return this.components}getInvalidFeatures(){return this.invalidFeatures}getUnresolvedCrossings(){return this.unresolvedCrossings}}class Lg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Roads_Layer",this.scene.add(this.group),this.roadNetwork=new Cg(this.terrainManager),this.roadsMesh=null,this.roadsMaterial=null,this.rawGeojson=null,this.floodedMesh=null,this.openMesh=null,this.features=[],this.passabilityMode="dynamic-passability",this.stats={total:0,flooded:0,open:0,totalLengthKm:0},this.passabilityStats={unaffected:0,exposed:0,impassable:0,unknown:0,passable:0,waterlogged:0,submerged:0}}getRoadNetwork(){return this.roadNetwork}async load(e="/data/dernau/roads_status.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`RoadLayer: Failed to fetch roads GeoJSON from ${e} (${t.status})`);const n=await t.json();return this.rawGeojson=n,this.buildGeometry(n),this.stats}buildGeometry(e){this.dispose(),this.roadNetwork.buildFromGeoJSON(e),this.features=[];let t=0;const n=.55,i=[],r=[];let o=0;if(this.roadNetwork.getFeatures().forEach((l,c)=>{const d=l.flooded===!0;let h=0;const u=[],p=[],g=o;l.edges.forEach(v=>{const m=v.geoCoordinates;if(!(!m||m.length<2))for(let f=0;f<m.length-1;f++){const y=tn(m[f][0],m[f][1]),_=tn(m[f+1][0],m[f+1][1]),x=(this.terrainManager?.getElevationAt(y.x,y.z)||135)+n,L=(this.terrainManager?.getElevationAt(_.x,_.z)||135)+n,R=_.x-y.x,A=L-x,w=_.z-y.z,M=Math.sqrt(R*R+A*A+w*w);h+=M,i.push(y.x,x,y.z),i.push(_.x,L,_.z);const S=d?.96:.22,C=d?.25:.74,N=d?.37:.97;r.push(S,C,N,S,C,N),o+=2,p.push({x:y.x,y:x,z:y.z}),p.push({x:_.x,y:L,z:_.z});const U=new vn;U.expandByPoint(new P(y.x,x,y.z)),U.expandByPoint(new P(_.x,L,_.z)),U.expandByScalar(3),u.push(U)}}),t+=h,this.features.push({id:l.id,kind:"road",flooded:d,lengthMeters:Math.round(h*10)/10,boxes:u,points:p,vertexStart:g,vertexCount:o-g,status:l.status||Le.UNAFFECTED,statusReason:l.statusReason||"Unassessed",maxWaterDepth:l.maxWaterDepth||0,exposedLengthMeters:l.exposedLengthMeters||0,exposedRatio:l.exposedRatio||0,minElevation:l.minGroundElev,maxElevation:l.maxGroundElev,componentId:l.componentId,componentSize:l.componentSize,passabilityStatus:d?"submerged":"passable"})}),i.length>0){const l=new dt;l.setAttribute("position",new qe(i,3)),l.setAttribute("color",new qe(r,3)),this.roadsMaterial=new Nn({vertexColors:!0,linewidth:3,transparent:!0,opacity:.95}),this.roadsMesh=new Qi(l,this.roadsMaterial),this.roadsMesh.name="Roads_Layer_Mesh",this.group.add(this.roadsMesh),this.floodedMesh=this.roadsMesh,this.openMesh=this.roadsMesh}this.stats={total:this.features.length,flooded:this.features.filter(l=>l.flooded).length,open:this.features.filter(l=>!l.flooded).length,totalLengthKm:Math.round(t/1e3*100)/100}}setPassabilityMode(e){return this.passabilityMode=e==="historical"?"historical":"dynamic-passability",this.passabilityMode}updatePassability(e){if(!this.roadsMesh||!this.roadsMesh.geometry.attributes.color)return this.passabilityStats;const t=this.roadsMesh.geometry.attributes.color.array,n=this.roadNetwork.evaluateScenario(e),i={passable:0,waterlogged:0,submerged:0};for(const r of this.features){const o=this.roadNetwork.getFeature(r.id);o&&(r.status=o.status,r.statusReason=o.statusReason,r.maxWaterDepth=o.maxWaterDepth,r.exposedLengthMeters=o.exposedLengthMeters,r.exposedRatio=o.exposedRatio);let a=0;for(const p of r.points){const g=typeof e=="function"?e(p.x,p.z):124,v=Math.max(0,g-p.y);v>a&&(a=v)}let l,c,d;if(this.passabilityMode==="historical")r.flooded?(l=.96,c=.25,d=.37):(l=.22,c=.74,d=.97),a>.15?i.submerged++:a>0?i.waterlogged++:i.passable++;else{a>.15?(r.passabilityStatus="submerged",i.submerged++):a>0?(r.passabilityStatus="waterlogged",i.waterlogged++):(r.passabilityStatus="passable",i.passable++);const p=Sl[r.status]||Sl[Le.UNAFFECTED];l=p.r,c=p.g,d=p.b}const h=r.vertexStart,u=r.vertexCount;for(let p=0;p<u;p++)t[(h+p)*3+0]=l,t[(h+p)*3+1]=c,t[(h+p)*3+2]=d}return this.roadsMesh.geometry.attributes.color.needsUpdate=!0,this.passabilityStats={unaffected:n.unaffected,exposed:n.exposed,impassable:n.impassable,unknown:n.unknown,passable:i.passable,waterlogged:i.waterlogged,submerged:i.submerged,total:this.features.length,exposedLengthKm:n.exposedLengthKm,impassableLengthKm:n.impassableLengthKm},this.passabilityStats}intersectRoad(e){if(!e)return null;let t=null,n=1/0;for(const i of this.features)for(const r of i.boxes){const o=e.intersectBox(r,new P);if(o){const a=e.origin.distanceTo(o);a<n&&(n=a,t=i)}}return t}setVisible(e){this.group.visible=e}dispose(){this.roadsMesh&&(this.roadsMesh.geometry&&this.roadsMesh.geometry.dispose(),this.group.remove(this.roadsMesh),this.roadsMesh=null,this.floodedMesh=null,this.openMesh=null),this.roadsMaterial&&(this.roadsMaterial.dispose(),this.roadsMaterial=null),this.features=[]}}class Dg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Facilities_Layer",this.scene.add(this.group),this.disposables=[],this.features=[],this.facilityMeshes=[],this.accessibilityMode="dynamic",this.rawGeojson=null,this.stats={total:0,operational:0,isolated:0,inundated:0}}async load(e="/data/dernau/facilities.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`FacilityLayer: Failed to fetch facilities GeoJSON from ${e} (${t.status})`);const n=await t.json();return this.rawGeojson=n,this.buildGeometry(n),this.stats}buildGeometry(e){this.dispose();const t=e.features||[];this.features=[],this.facilityMeshes=[];const n=28,i=1.2;t.forEach((r,o)=>{if(!r.geometry||r.geometry.type!=="Point")return;const a=r.properties||{},l=r.geometry.coordinates,c=tn(l[0],l[1]),d=this.terrainManager.getElevationAt(c.x,c.z)||135;let h=3718648,u=165063;a.type==="hospital"?(h=15680580,u=10033947):a.type==="shelter"?(h=16096779,u=11817737):a.type==="depot"&&(h=3900150,u=1920728);const p=new Ii(i*.7,i,n,12),g=new Zt({color:h,emissive:u,emissiveIntensity:.6,roughness:.3,metalness:.7}),v=new Je(p,g);v.position.set(c.x,d+n/2,c.z),this.group.add(v);const m=new js(i*2.4,16,16),f=new Zt({color:h,emissive:h,emissiveIntensity:.9,roughness:.2}),y=new Je(m,f);y.position.set(c.x,d+n+i*2,c.z),this.group.add(y);const _=new Un(i*2,i*7,24);_.rotateX(-Math.PI/2);const x=new Vt({color:h,transparent:!0,opacity:.45,side:yt}),L=new Je(_,x);if(L.position.set(c.x,d+.35,c.z),this.group.add(L),this.disposables.push(p,g,m,f,_,x),a.type==="hospital"){const w=new Dt,M=new Zt({color:15680580,emissive:16711680,emissiveIntensity:.85,roughness:.2}),S=new Pn(4.2,1.2,.9),C=new Pn(1.2,4.2,.9),N=new Je(S,M),U=new Je(C,M);w.add(N),w.add(U),w.position.set(c.x,d+n+i*2+3.8,c.z),this.group.add(w),this.disposables.push(S,C,M)}this.facilityMeshes.push({cylinderMat:g,headMat:f,ringMat:x,defaultColor:h,defaultEmissive:u});const R=new vn;R.setFromCenterAndSize(new P(c.x,d+n/2,c.z),new P(i*8,n+10,i*8));const A=a.type==="shelter"?"Shelter":"Emergency Facility";this.features.push({id:a.facility_id||`fac-${o}`,name:a.name||A,type:a.type||"unknown",provenance:a.provenance||"dataset",kind:"facility",coordsGeo:[l[0],l[1]],elevationM:Math.round(d*10)/10,center:{x:c.x,y:d+n,z:c.z},bounds:R,accessibilityStatus:"operational",siteWaterDepth:0,nearbyRoadStatus:"passable"})}),this.stats={total:this.features.length,operational:this.features.length,isolated:0,inundated:0}}setAccessibilityMode(e){return this.accessibilityMode=e==="historical"?"historical":"dynamic",this.accessibilityMode}updateAccessibility(e){let t=0,n=0,i=0;return this.features.forEach((r,o)=>{const a=this.facilityMeshes[o];if(!a)return;const l=e?e[r.id]:null;if(l&&(r.accessibilityStatus=l.status,r.siteWaterDepth=l.siteWaterDepth,r.nearbyRoadStatus=l.nearbyRoadStatus),this.accessibilityMode==="historical")a.cylinderMat.color.setHex(a.defaultColor),a.cylinderMat.emissive.setHex(a.defaultEmissive),a.headMat.color.setHex(a.defaultColor),a.headMat.emissive.setHex(a.defaultColor),a.ringMat.color.setHex(a.defaultColor);else{let c=1096065,d=292951;r.accessibilityStatus==="inundated"?(c=15680580,d=10033947,i++):r.accessibilityStatus==="isolated"?(c=16096779,d=11817737,n++):(c=1096065,d=292951,t++),a.cylinderMat.color.setHex(c),a.cylinderMat.emissive.setHex(d),a.headMat.color.setHex(c),a.headMat.emissive.setHex(c),a.ringMat.color.setHex(c)}}),this.stats={total:this.features.length,operational:t,isolated:n,inundated:i},this.stats}intersectFacility(e){if(!e)return null;let t=null,n=1/0;for(const i of this.features)if(i.bounds){const r=e.intersectBox(i.bounds,new P);if(r){const o=e.origin.distanceTo(r);o<n&&(n=o,t=i)}}return t}setVisible(e){this.group.visible=e}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.facilityMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0]);this.features=[]}}class Pg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Historical_Flood_Extent_Layer",this.scene.add(this.group),this.fillMesh=null,this.outlineMesh=null,this.fillMaterial=null,this.outlineMaterial=null,this.stats={polygonCount:0,source:"SpaceNet 8 (July 2021 Germany Flood Event)",labelClass:"derived_flood_extent (Reference Context)"}}async load(e="/data/dernau/flood_extent.geojson"){const t=await fetch(e);if(!t.ok)throw new Error(`FloodExtentLayer: Failed to fetch GeoJSON from ${e} (${t.status})`);const n=await t.json();return this.buildGeometry(n),this.stats}buildGeometry(e){this.dispose();const t=e.features||[],n=[],i=[],r=.28;if(t.forEach(o=>{if(!o.geometry)return;const a=o.geometry.type,l=o.geometry.coordinates;let c=[];a==="Polygon"?c.push(l):a==="MultiPolygon"&&(c=l),c.forEach(d=>{if(!d||d.length===0)return;const h=d[0];if(h.length<3)return;const u=[];for(let p=0;p<h.length-1;p++){const g=tn(h[p][0],h[p][1]),v=(this.terrainManager.getElevationAt(g.x,g.z)||125)+r;u.push({x:g.x,y:v,z:g.z});const m=(p+1)%(h.length-1),f=tn(h[m][0],h[m][1]),y=(this.terrainManager.getElevationAt(f.x,f.z)||125)+r;n.push(g.x,v+.1,g.z),n.push(f.x,y+.1,f.z)}if(u.length>=3){const p=new Ys;p.moveTo(u[0].x,-u[0].z);for(let m=1;m<u.length;m++)p.lineTo(u[m].x,-u[m].z);p.closePath();const g=new Yo(p);g.rotateX(Math.PI/2);const v=g.attributes.position;for(let m=0;m<v.count;m++){const f=v.getX(m),y=v.getZ(m),_=(this.terrainManager.getElevationAt(f,y)||125)+r;v.setY(m,_)}g.computeVertexNormals(),i.push(g)}})}),this.fillMaterial=new Vt({color:1920728,transparent:!0,opacity:.38,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:yt}),this.outlineMaterial=new Nn({color:6333946,transparent:!0,opacity:.75,linewidth:2}),i.length>0){const o=this.mergeGeometries(i);this.fillMesh=new Je(o,this.fillMaterial),this.fillMesh.name="Historical_Flood_Extent_Fill",this.group.add(this.fillMesh),i.forEach(a=>a.dispose())}if(n.length>0){const o=new dt;o.setAttribute("position",new qe(n,3)),this.outlineMesh=new Qi(o,this.outlineMaterial),this.outlineMesh.name="Historical_Flood_Extent_Outlines",this.group.add(this.outlineMesh)}this.stats.polygonCount=t.length}mergeGeometries(e){let t=0,n=0,i=0;for(const p of e)t+=p.attributes.position.array.length,p.attributes.normal&&(n+=p.attributes.normal.array.length),p.index&&(i+=p.index.array.length);const r=new Float32Array(t),o=n>0?new Float32Array(n):null,a=i>0?new Uint32Array(i):null;let l=0,c=0,d=0,h=0;for(const p of e){const g=p.attributes.position.array;if(r.set(g,l),p.attributes.normal&&o&&(o.set(p.attributes.normal.array,c),c+=p.attributes.normal.array.length),p.index&&a){const v=p.index.array;for(let m=0;m<v.length;m++)a[d+m]=v[m]+h;d+=v.length}l+=g.length,h+=p.attributes.position.count}const u=new dt;return u.setAttribute("position",new mt(r,3)),o&&u.setAttribute("normal",new mt(o,3)),a&&u.setIndex(new mt(a,1)),u}setVisible(e){this.group.visible=e}dispose(){this.fillMesh&&(this.fillMesh.geometry&&this.fillMesh.geometry.dispose(),this.group.remove(this.fillMesh),this.fillMesh=null),this.outlineMesh&&(this.outlineMesh.geometry&&this.outlineMesh.geometry.dispose(),this.group.remove(this.outlineMesh),this.outlineMesh=null),this.fillMaterial&&(this.fillMaterial.dispose(),this.fillMaterial=null),this.outlineMaterial&&(this.outlineMaterial.dispose(),this.outlineMaterial=null)}}const Xn=Object.freeze({CLEAR:"clear",EXPOSED:"exposed",BLOCKED:"blocked",UNREACHABLE:"unreachable"}),Gs=Object.freeze({SHELTER:"shelter",HOSPITAL:"hospital",CUSTOM:"custom"}),Ig=Object.freeze({allowExposed:!0,exposedCostMultiplier:5,exposedDepthWeight:4,allowUnknown:!1,unknownCostMultiplier:20,maxSnapDistanceMeters:350,alternativePenaltyMultiplier:3.5,maxAlternativeOverlapRatio:.85,minAlternativeLengthDeltaMeters:5});class Ng{constructor(){this.heap=[]}push(e,t){this.heap.push({item:e,priority:t}),this._bubbleUp(this.heap.length-1)}pop(){if(this.heap.length===0)return null;const e=this.heap[0],t=this.heap.pop();return this.heap.length>0&&(this.heap[0]=t,this._sinkDown(0)),e.item}isEmpty(){return this.heap.length===0}_bubbleUp(e){const t=this.heap[e];for(;e>0;){const n=e-1>>1,i=this.heap[n];if(t.priority>=i.priority)break;this.heap[e]=i,e=n}this.heap[e]=t}_sinkDown(e){const t=this.heap.length,n=this.heap[e];for(;;){const i=(e<<1)+1,r=i+1;let o=null;if(i<t&&this.heap[i].priority<n.priority&&(o=i),r<t){const a=this.heap[r],l=o===null?n.priority:this.heap[i].priority;a.priority<l&&(o=r)}if(o===null)break;this.heap[e]=this.heap[o],e=o}this.heap[e]=n}}class Ug{constructor(e,t={}){if(!e)throw new Error("RoutingService: RoadNetwork instance is required.");this.roadNetwork=e,this.config={...Ig,...t},this.adjacency=new Map,this._buildAdjacency()}_buildAdjacency(){this.adjacency.clear();for(const e of this.roadNetwork.nodes.values())this.adjacency.set(e.id,[]);for(const e of this.roadNetwork.edges.values()){const t=e.fromNodeId,n=e.toNodeId;this.adjacency.has(t)&&this.adjacency.get(t).push({edgeId:e.id,targetNodeId:n,lengthMeters:e.lengthMeters}),this.adjacency.has(n)&&this.adjacency.get(n).push({edgeId:e.id,targetNodeId:t,lengthMeters:e.lengthMeters})}}syncAdjacency(){this._buildAdjacency()}getEdgeCost(e,t=null){if(!e)return{traversable:!1,cost:1/0,reason:"Invalid or missing edge",status:"unknown"};const n=e.lengthMeters||1,i=t&&t[e.id]?t[e.id]:1;if(e.status===Le.IMPASSABLE)return{traversable:!1,cost:1/0,reason:`Impassable water depth (${(e.maxWaterDepth||0).toFixed(2)}m >= 0.15m)`,status:Le.IMPASSABLE};if(e.status===Le.UNKNOWN)return this.config.allowUnknown?{traversable:!0,cost:n*this.config.unknownCostMultiplier*i,reason:"Unverified road permitted with severe penalty",status:Le.UNKNOWN}:{traversable:!1,cost:1/0,reason:"Unknown/unverified terrain elevation (conservative safety policy excludes unconfirmed roads)",status:Le.UNKNOWN};if(e.status===Le.EXPOSED){if(!this.config.allowExposed)return{traversable:!1,cost:1/0,reason:"Water-exposed road excluded under strict dry-only policy",status:Le.EXPOSED};const r=this.roadNetwork.config.impassableDepthThreshold||.15,o=e.maxWaterDepth>0?Math.min(1,e.maxWaterDepth/r):.5,a=this.config.exposedCostMultiplier+o*this.config.exposedDepthWeight;return{traversable:!0,cost:n*a*i,reason:`Exposed to ${(e.maxWaterDepth||0).toFixed(2)}m water (penalized ${a.toFixed(1)}x)`,status:Le.EXPOSED}}return{traversable:!0,cost:n*i,reason:"Dry, unaffected road segment",status:Le.UNAFFECTED}}snapPoint(e,t,n=this.config.maxSnapDistanceMeters){let i=n,r=null,o=null,a=null;for(const l of this.roadNetwork.nodes.values()){const c=Math.hypot(l.x-e,l.z-t);c<i&&(i=c,r=l,a={x:l.x,z:l.z})}for(const l of this.roadNetwork.edges.values()){const c=l.vertices;if(!(!c||c.length<2))for(let d=0;d<c.length-1;d++){const h=c[d],u=c[d+1],p=u.x-h.x,g=u.z-h.z,v=p*p+g*g;if(v===0)continue;const m=Math.max(0,Math.min(1,((e-h.x)*p+(t-h.z)*g)/v)),f=h.x+m*p,y=h.z+m*g,_=Math.hypot(f-e,y-t);if(_<i){i=_,o=l,a={x:f,z:y};const x=this.roadNetwork.nodes.get(l.fromNodeId),L=this.roadNetwork.nodes.get(l.toNodeId);if(x&&L){const R=Math.hypot(x.x-f,x.z-y),A=Math.hypot(L.x-f,L.z-y);r=R<=A?x:L}}}}return r?{snapped:!0,node:r,edge:o,distance:Math.round(i*10)/10,point:a}:{snapped:!1,node:null,edge:null,distance:1/0,point:{x:e,z:t},reason:`Location is too far from any mapped road network segment (exceeds ${n}m limit)`}}findRoute(e,t,n={}){const i=n.routeType||Gs.SHELTER,r=n.edgePenalties||null,o=n.bannedEdgeIds?new Set(n.bannedEdgeIds):null,a=this.snapPoint(e.x,e.z);if(!a.snapped)return this._buildFailureResult(e,t,i,"INSUFFICIENT_GRAPH_COVERAGE",a.reason);const l=this.snapPoint(t.x,t.z);if(!l.snapped)return this._buildFailureResult(e,t,i,"INSUFFICIENT_GRAPH_COVERAGE",l.reason);const c=a.node,d=l.node;if(c.id===d.id)return this._buildDirectArrivalResult(e,t,c,i);if(c.componentId!==d.componentId)return this._buildFailureResult(e,t,i,"DISCONNECTED_NETWORK",`Start (Component #${c.componentId}) and Destination (Component #${d.componentId}) belong to disconnected road network components. No physical road connection exists in dataset.`);const h=new Map,u=new Map,p=new Ng;h.set(c.id,0),p.push(c.id,0);let g=!1;const v=new Map;for(;!p.isEmpty();){const N=p.pop();if(N===d.id){g=!0;break}const U=h.get(N),B=this.adjacency.get(N)||[];for(const H of B){const z=H.edgeId,X=H.targetNodeId;if(o&&o.has(z))continue;const G=this.roadNetwork.edges.get(z),J=this.getEdgeCost(G,r);if(!J.traversable){v.has(z)||v.set(z,{edgeId:z,featureId:G?.featureId,status:J.status,reason:J.reason});continue}const ee=U+J.cost;(!h.has(X)||ee<h.get(X))&&(h.set(X,ee),u.set(X,{prevNodeId:N,edgeId:z,edgeCost:J.cost,edgeLength:G.lengthMeters,edgeStatus:J.status,maxDepth:G.maxWaterDepth||0}),p.push(X,ee))}}if(!g){const N=Array.from(v.values()),U=N.some(X=>X.status===Le.IMPASSABLE),B=N.some(X=>X.status===Le.UNKNOWN);let H="BLOCKED_ROADS",z="All connecting paths in the network are blocked by impassable flood waters (>0.15m depth).";return B&&!U?(H="UNKNOWN_ROAD_CONDITIONS",z="Connecting paths are blocked by unverified road segments under conservative policy."):N.length===0&&(H="NO_CONNECTING_EDGES",z="No traversable path exists within graph topology."),this._buildFailureResult(e,t,i,H,z,N)}const m=[],f=[];let y=d.id,_=0,x=h.get(d.id)||0,L=0,R=0,A=!1;for(;y!==c.id;){f.push(y);const N=u.get(y);if(!N)break;const U=this.roadNetwork.edges.get(N.edgeId);U&&(m.push(U),_+=U.lengthMeters,U.status===Le.EXPOSED&&(A=!0,R+=U.exposedLengthMeters||U.lengthMeters),(U.maxWaterDepth||0)>L&&(L=U.maxWaterDepth)),y=N.prevNodeId}f.push(c.id),f.reverse(),m.reverse();const w=this._buildPathPolyline(a,l,m,c,d),M=A?Xn.EXPOSED:Xn.CLEAR,S=_>0?Math.min(1,R/_):0,C=M===Xn.CLEAR?`Clear, 100% dry route (${Math.round(_)}m across ${m.length} road segments).`:`Route exposed to shallow water (max ${L.toFixed(2)}m, ${Math.round(R)}m exposed / ${Math.round(S*100)}%). Navigable with caution under emergency policy.`;return{isValid:!0,isReachable:!0,status:M,routeType:i,origin:{...e,snappedDistance:a.distance},destination:{...t,snappedDistance:l.distance},startNodeId:c.id,destNodeId:d.id,edgeCount:m.length,edgeIds:m.map(N=>N.id),edges:m,nodeIds:f,totalDistanceMeters:Math.round(_*10)/10,totalCost:Math.round(x*10)/10,maxWaterDepth:Math.round(L*100)/100,exposedLengthMeters:Math.round(R*10)/10,exposedRatio:Math.round(S*100)/100,pathCoordinates:w,blockedEdges:[],explanation:C,provenance:t.provenance||"dataset"}}findNearestReachableDestination(e,t,n={}){if(!t||t.length===0)return{bestDestination:null,route:null,evaluatedCandidates:[],reason:"No candidate destinations provided."};const i=n.routeType||Gs.SHELTER,r=[];for(const l of t){const c=Math.hypot(l.x-e.x,l.z-e.z),d=this.findRoute(e,l,{...n,routeType:i});r.push({candidate:l,euclideanDistanceMeters:Math.round(c*10)/10,isReachable:d.isReachable,routeCost:d.isReachable?d.totalCost:1/0,routeDistanceMeters:d.isReachable?d.totalDistanceMeters:1/0,routeStatus:d.status,failureReason:d.isReachable?null:d.explanation,route:d})}const o=r.filter(l=>l.isReachable);if(o.length===0){r.sort((c,d)=>c.euclideanDistanceMeters-d.euclideanDistanceMeters);const l=r[0];return{bestDestination:null,route:null,evaluatedCandidates:r,reason:`No destinations are reachable within connected network. Nearest straight-line destination (${l.candidate.name||l.candidate.id}, ${l.euclideanDistanceMeters}m) is unreachable: ${l.failureReason}`}}o.sort((l,c)=>l.routeCost-c.routeCost);const a=o[0];return{bestDestination:a.candidate,route:a.route,evaluatedCandidates:r,reason:`Nearest reachable destination found: ${a.candidate.name||a.candidate.id} (Route distance: ${a.routeDistanceMeters}m, Route cost: ${a.routeCost}).`}}findAlternativeRoutes(e,t,n={}){const i=this.findRoute(e,t,n);if(!i.isReachable||i.edges.length<=1)return{primaryRoute:i,alternativeRoute:null,hasAlternative:!1,explanation:i.isReachable?"Route is too short or simple for distinct alternatives.":i.explanation};const r=new Set(i.edgeIds),o={};for(const v of r)o[v]=this.config.alternativePenaltyMultiplier;const a=this.findRoute(e,t,{...n,edgePenalties:o});if(!a.isReachable)return{primaryRoute:i,alternativeRoute:null,hasAlternative:!1,explanation:"No viable alternative route exists in the connected graph."};const l=new Set(a.edgeIds);let c=0;for(const v of l)r.has(v)&&c++;const d=c/Math.max(1,Math.min(r.size,l.size)),h=Math.abs(a.totalDistanceMeters-i.totalDistanceMeters);if(d>this.config.maxAlternativeOverlapRatio&&h<this.config.minAlternativeLengthDeltaMeters)return{primaryRoute:i,alternativeRoute:null,hasAlternative:!1,explanation:"Single corridor network; no distinct alternative route exists."};const u=Math.round((a.totalDistanceMeters-i.totalDistanceMeters)*10)/10,p=u>=0?`+${u}m`:`${u}m`,g=`Alternative route (${a.totalDistanceMeters}m, ${p}): ${a.status.toUpperCase()} (${Math.round((1-d)*100)}% path divergence).`;return{primaryRoute:i,alternativeRoute:a,hasAlternative:!0,explanation:g}}recalculateRoute(e){return!e||!e.origin||!e.destination?null:this.findRoute(e.origin,e.destination,{routeType:e.routeType})}_buildPathPolyline(e,t,n,i,r){const o=[];o.push({x:e.point.x,z:e.point.z});let a={x:i.x,z:i.z};o.push({x:a.x,z:a.z});for(let c=0;c<n.length;c++){const h=n[c].vertices;if(!h||h.length===0)continue;const u=Math.hypot(h[0].x-a.x,h[0].z-a.z),p=Math.hypot(h[h.length-1].x-a.x,h[h.length-1].z-a.z),v=u<=p?h:[...h].reverse();for(const m of v)o.push({x:m.x,z:m.z});a=v[v.length-1]}o.push({x:t.point.x,z:t.point.z});const l=[];for(let c=0;c<o.length;c++)if(c===0)l.push(o[c]);else{const d=l[l.length-1];Math.hypot(o[c].x-d.x,o[c].z-d.z)>.1&&l.push(o[c])}return l}_buildDirectArrivalResult(e,t,n,i){const r=Math.hypot(t.x-e.x,t.z-e.z);return{isValid:!0,isReachable:!0,status:Xn.CLEAR,routeType:i,origin:e,destination:t,startNodeId:n.id,destNodeId:n.id,edgeCount:0,edgeIds:[],edges:[],nodeIds:[n.id],totalDistanceMeters:Math.round(r*10)/10,totalCost:0,maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,pathCoordinates:[{x:e.x,z:e.z},{x:t.x,z:t.z}],blockedEdges:[],explanation:`Origin is directly adjacent to destination (${Math.round(r)}m).`,provenance:t.provenance||"dataset"}}_buildFailureResult(e,t,n,i,r,o=[]){return{isValid:!1,isReachable:!1,status:Xn.BLOCKED,errorCode:i,routeType:n,origin:e,destination:t,startNodeId:null,destNodeId:null,edgeCount:0,edgeIds:[],edges:[],nodeIds:[],totalDistanceMeters:1/0,totalCost:1/0,maxWaterDepth:0,exposedLengthMeters:0,exposedRatio:0,pathCoordinates:[],blockedEdges:o,explanation:r,provenance:t.provenance||"dataset"}}getHospitalDatasetStatus(e=[]){return e.filter(n=>n.type==="hospital"&&n.provenance==="verified").length===0?{hasVerifiedHospital:!1,warning:"No verified hospital in source dataset. Proposed medical-response site — unverified."}:{hasVerifiedHospital:!0,warning:""}}}class Fg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Route_Visualization_Layer",this.scene.add(this.group),this.disposables=[],this.activeRoute=null,this.activeAlternative=null,this.visible=!0,this.visualOffsetMeters=.85}displayRoute(e,t=null){this.clearRoute(),e&&(this.activeRoute=e,this.activeAlternative=t,t&&t.isReachable&&t.pathCoordinates?.length>1&&this._renderPath(t,!0),e.pathCoordinates&&e.pathCoordinates.length>1&&this._renderPath(e,!1),this._renderEndpoints(e))}_renderPath(e,t=!1){const n=e.pathCoordinates;if(!n||n.length<2)return;let i=11032055,r=12616956;e.routeType===Gs.HOSPITAL&&(i=3900150,r=6333946),(!e.isReachable||e.status===Xn.BLOCKED)&&(i=15680580,r=16281969);const o=[];for(const g of n){const m=(this.terrainManager?.getElevationAt(g.x,g.z)??130)+this.visualOffsetMeters+(t?-.15:0);o.push(new P(g.x,m,g.z))}const a=new dt().setFromPoints(o),l=new Nn({color:i,linewidth:t?2:4,transparent:t,opacity:t?.6:1,depthTest:!0}),c=new wo(a,l);c.renderOrder=t?20:30,this.group.add(c);const d=o.map(g=>new P(g.x,g.y+.1,g.z)),h=new dt().setFromPoints(d),u=new Nn({color:r,linewidth:t?4:8,transparent:!0,opacity:t?.25:.55,blending:Fr,depthTest:!0}),p=new wo(h,u);p.renderOrder=t?19:29,this.group.add(p),this.disposables.push(a,l,h,u)}_renderEndpoints(e){if(!e.origin||!e.destination)return;const t=this.terrainManager?.getElevationAt(e.origin.x,e.origin.z)??130,n=new Un(1.5,4,24);n.rotateX(-Math.PI/2);const i=new Vt({color:1096065,transparent:!0,opacity:.85,side:yt}),r=new Je(n,i);r.position.set(e.origin.x,t+.45,e.origin.z),this.group.add(r);let o=e.routeType===Gs.HOSPITAL?3900150:11032055;e.isReachable||(o=15680580);const a=this.terrainManager?.getElevationAt(e.destination.x,e.destination.z)??130,l=new Un(2,5.5,24);l.rotateX(-Math.PI/2);const c=new Vt({color:o,transparent:!0,opacity:.85,side:yt}),d=new Je(l,c);d.position.set(e.destination.x,a+.45,e.destination.z),this.group.add(d),this.disposables.push(n,i,l,c)}clearRoute(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[];this.group.children.length>0;)this.group.remove(this.group.children[0]);this.activeRoute=null,this.activeAlternative=null}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){this.clearRoute(),this.group.parent&&this.group.parent.remove(this.group)}}class Og{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Affected_Clusters_Layer",this.scene.add(this.group),this.disposables=[],this.clusters=[],this.clusterMeshes=[],this.visible=!0,this.selectedClusterId=null}updateClusters(e){this.dispose(),this.clusters=e||[],this.clusterMeshes=[];const t=18,n=.9;this.clusters.forEach(i=>{const r=i.centroid.x,o=i.centroid.z,a=this.terrainManager?.getElevationAt(r,o)??130;let l=16096779,c=11817737;i.maxWaterDepth>=2?(l=15680580,c=10033947):i.maxWaterDepth>=1?(l=16347926,c=12730636):i.maxWaterDepth<.3&&(l=15381256,c=8736014);const d=Math.max(20,i.radiusMeters),h=new Un(d*.85,d,32);h.rotateX(-Math.PI/2);const u=new Vt({color:l,transparent:!0,opacity:.35,side:yt}),p=new Je(h,u);p.position.set(r,a+.5,o),this.group.add(p);const g=new Ii(n*.6,n,t,10),v=new Zt({color:l,emissive:c,emissiveIntensity:.7,roughness:.3,metalness:.6}),m=new Je(g,v);m.position.set(r,a+t/2,o),this.group.add(m);const f=new js(n*2.2,12,12),y=new Zt({color:l,emissive:l,emissiveIntensity:.9}),_=new Je(f,y);_.position.set(r,a+t+n*2,o),this.group.add(_),this.disposables.push(h,u,g,v,f,y);const x=new vn;x.setFromCenterAndSize(new P(r,a+t/2,o),new P(d*2,t+10,d*2)),this.clusterMeshes.push({id:i.id,cluster:i,bounds:x,ringMesh:p,ringMat:u,cylinderMat:v,headMat:y,baseColor:l,baseEmissive:c})}),this.group.visible=this.visible}selectCluster(e){this.selectedClusterId=e;for(const t of this.clusterMeshes){const n=t.id===e;t.ringMat.opacity=n?.75:.35,t.cylinderMat.emissiveIntensity=n?1:.7}}intersectCluster(e){if(!e||!this.visible)return null;let t=null,n=1/0;for(const i of this.clusterMeshes)if(i.bounds){const r=e.intersectBox(i.bounds,new P);if(r){const o=e.origin.distanceTo(r);o<n&&(n=o,t=i.cluster)}}return t}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.clusterMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0])}}class Bg{constructor(e,t){this.scene=e,this.terrainManager=t,this.group=new Dt,this.group.name="Proposed_Sites_Layer",this.scene.add(this.group),this.disposables=[],this.sites=[],this.siteMeshes=[],this.visible=!0,this.selectedSiteId=null}updateSites(e){this.dispose(),this.sites=e||[],this.siteMeshes=[];const t=22,n=1;this.sites.forEach(i=>{const r=i.groundElevation??(this.terrainManager?.getElevationAt(i.x,i.z)||140);let o=16096779,a=11817737;i.isFlooded?(o=15680580,a=10033947):i.score>=75?(o=16436245,a=10576391):i.score<55&&(o=16347926,a=12730636);const l=new Ii(n*.4,n*.9,t,8),c=new Zt({color:o,emissive:a,emissiveIntensity:.8,roughness:.25,metalness:.8}),d=new Je(l,c);d.position.set(i.x,r+t/2,i.z),this.group.add(d);const h=new qo(n*2.2,0),u=new Zt({color:o,emissive:o,emissiveIntensity:.95,roughness:.2}),p=new Je(h,u);p.position.set(i.x,r+t+n*2,i.z),this.group.add(p);const g=new Un(n*2.5,n*8,24);g.rotateX(-Math.PI/2);const v=new Vt({color:o,transparent:!0,opacity:.45,side:yt}),m=new Je(g,v);m.position.set(i.x,r+.4,i.z),this.group.add(m),this.disposables.push(l,c,h,u,g,v);const f=new vn;f.setFromCenterAndSize(new P(i.x,r+t/2,i.z),new P(n*10,t+10,n*10)),this.siteMeshes.push({id:i.id,site:i,bounds:f,columnMat:c,headMat:u,ringMat:v})}),this.group.visible=this.visible}selectSite(e){this.selectedSiteId=e;for(const t of this.siteMeshes){const n=t.id===e;t.ringMat.opacity=n?.85:.45,t.columnMat.emissiveIntensity=n?1:.8}}intersectProposedSite(e){if(!e||!this.visible)return null;let t=null,n=1/0;for(const i of this.siteMeshes)if(i.bounds){const r=e.intersectBox(i.bounds,new P);if(r){const o=e.origin.distanceTo(r);o<n&&(n=o,t=i.site)}}return t}setVisible(e){return this.visible=!!e,this.group.visible=this.visible,this.visible}dispose(){for(this.disposables.forEach(e=>{e&&typeof e.dispose=="function"&&e.dispose()}),this.disposables=[],this.siteMeshes=[];this.group.children.length>0;)this.group.remove(this.group.children[0])}}const Be=Object.freeze({UNAFFECTED:"unaffected",LOW:"low",MODERATE:"moderate",HIGH:"high",CRITICAL:"critical",UNKNOWN:"unknown"}),zg=Object.freeze({lowThreshold:.3,moderateThreshold:1,highThreshold:2,minDepthPositive:.001}),Gi=Object.freeze({CRITICAL:"critical",HIGH:"high",MODERATE:"moderate",LOW:"low",UNKNOWN:"unknown"}),Bt=Object.freeze({CONNECTED:"connected",ACCESS_DEGRADED:"access_degraded",ROUTE_LOST:"route_lost",DISCONNECTED_IN_SOURCE:"disconnected_in_source",UNKNOWN:"unknown"}),kg=Object.freeze({maxFloodExposureScore:50,maxRoadAccessScore:25,maxEmergencyServiceScore:25,criticalScoreThreshold:75,highScoreThreshold:50,moderateScoreThreshold:25});class Hg{constructor(e,t={}){this.terrainManager=e,this.config={...zg,...t}}classifyBuilding(e,t){if(!e||!e.center)return{id:e?.id||"unknown",category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:null,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Missing building geometry or coordinates",isValid:!1};const{x:n,z:i}=e.center,r=(typeof e.baseElevationM=="number"?e.baseElevationM:null)??(this.terrainManager&&typeof this.terrainManager.getElevationAt=="function"?this.terrainManager.getElevationAt(n,i):null);if(r===null||Number.isNaN(r)||r<=0||r===-9999)return{id:e.id,category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:null,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Missing or unreliable DGM1 bare-earth elevation at building centroid (NoData)",isValid:!1};const a=(typeof t=="function"?t:t&&typeof t.getWaterElevationAt=="function"?(g,v)=>t.getWaterElevationAt(g,v):()=>typeof t=="number"?t:124)(n,i);if(a===null||Number.isNaN(a))return{id:e.id,category:Be.UNKNOWN,exposureCategory:Be.UNKNOWN,groundElevation:Math.round(r*100)/100,waterElevation:null,waterDepth:null,estimatedDepthM:null,affectedRatio:0,uncertaintyMeters:null,reason:"Water surface elevation could not be evaluated at building coordinates",isValid:!1};const l=Math.max(0,a-r),c=Math.round(l*100)/100;let d=0,h=.05;c>0&&(d=1);let u=Be.UNAFFECTED,p="Structure foundation is above local water surface (dry).";return c>=this.config.highThreshold?(u=Be.CRITICAL,p=`Severe inundation (${c.toFixed(2)}m >= ${this.config.highThreshold.toFixed(2)}m). Ground floor submerged.`):c>=this.config.moderateThreshold?(u=Be.HIGH,p=`Substantial immersion (${c.toFixed(2)}m >= ${this.config.moderateThreshold.toFixed(2)}m). Serious ingress risk.`):c>=this.config.lowThreshold?(u=Be.MODERATE,p=`Moderate flood contact (${c.toFixed(2)}m >= ${this.config.lowThreshold.toFixed(2)}m). Ground-level threshold crossed.`):c>=this.config.minDepthPositive&&(u=Be.LOW,p=`Shallow exposure (${c.toFixed(2)}m < ${this.config.lowThreshold.toFixed(2)}m). Basement/perimeter contact only.`),{id:e.id,category:u,exposureCategory:u,groundElevation:Math.round(r*100)/100,waterElevation:Math.round(a*100)/100,waterDepth:c,estimatedDepthM:c,affectedRatio:d,uncertaintyMeters:h,reason:p,isValid:!0,center:{x:n,z:i},areaSqM:e.areaSqM||100,floodedHistorical:e.flooded===!0}}classifyBuildings(e,t){return e?e.map(n=>this.classifyBuilding(n,t)):[]}evaluateAll(e,t){const n=new Map,i=[],r={total:0,unaffected:0,low:0,moderate:0,high:0,critical:0,unknown:0,totalAffected:0,maxWaterDepth:0};for(const o of e){const a=this.classifyBuilding(o,t);n.set(o.id,a),r.total++,a.category===Be.UNAFFECTED?r.unaffected++:a.category===Be.LOW?(r.low++,r.totalAffected++,i.push(a)):a.category===Be.MODERATE?(r.moderate++,r.totalAffected++,i.push(a)):a.category===Be.HIGH?(r.high++,r.totalAffected++,i.push(a)):a.category===Be.CRITICAL?(r.critical++,r.totalAffected++,i.push(a)):a.category===Be.UNKNOWN&&r.unknown++,a.waterDepth&&a.waterDepth>r.maxWaterDepth&&(r.maxWaterDepth=a.waterDepth)}return{classifiedBuildings:n,summary:r,affectedBuildings:i}}calculateBuildingRisk(e,t={},n={}){const i={...kg,...n},r=e?.category||Be.UNKNOWN,o=typeof e?.waterDepth=="number"?e.waterDepth:0,a=r===Be.UNKNOWN||e?.groundElevation===null;let l=0,c="Dry ground contact (no flood depth detected).";if(a)l=30,c="Missing or unreliable ground elevation data (NoData). Cannot confirm flood clearance.";else if(r===Be.CRITICAL)l=50,c=`Critical inundation (${o.toFixed(2)}m >= 2.00m). Ground floor submerged.`;else if(r===Be.HIGH){const x=Math.min(10,Math.max(0,(o-1)*10));l=Math.round(38+x),c=`High structural immersion (${o.toFixed(2)}m). Serious ingress risk.`}else if(r===Be.MODERATE){const x=Math.min(10,Math.max(0,(o-.3)/.7*10));l=Math.round(25+x),c=`Moderate flood contact (${o.toFixed(2)}m). Ground-level threshold crossed.`}else if(r===Be.LOW){const x=Math.min(10,Math.max(0,(o-.05)/.25*10));l=Math.round(12+x),c=`Shallow exposure (${o.toFixed(2)}m < 0.30m). Basement/perimeter contact only.`}const d=t?.accessStatus||Bt.CONNECTED;let h=0,u="Direct, dry access to road network.";d===Bt.ROUTE_LOST?(h=25,u="Evacuation route to shelter lost due to newly flooded impassable road segments."):d===Bt.DISCONNECTED_IN_SOURCE?(h=20,u="Isolated or disconnected in source road network data (no baseline evacuation corridor)."):d===Bt.ACCESS_DEGRADED?(h=12,u="Access corridor degraded: connecting roads traverse shallow flood water."):d===Bt.UNKNOWN?(h=15,u="Road network connection or passability status cannot be determined."):d===Bt.CONNECTED&&(h=0,u="Connected to passable, dry road corridor.");const p=t?.canReachShelter===!0,g=t?.shelterRouteStatus||(p?"clear":"none");let v=0,m="Reachable shelter available via dry route.";p?g==="exposed"?(v=12,m="Nearest shelter reachable, but evacuation route traverses exposed road segments."):(v=0,m=`Nearest shelter (${t.nearestShelter?.name||"Shelter"}) reachable via dry route.`):(v=25,m="No reachable shelter available in road network under current scenario.");const f=Math.min(100,Math.max(0,Math.round(l+h+v)));let y=Gi.LOW;a?y=Gi.UNKNOWN:r===Be.CRITICAL||f>=i.criticalScoreThreshold?y=Gi.CRITICAL:r===Be.HIGH||f>=i.highScoreThreshold?y=Gi.HIGH:(r===Be.MODERATE||f>=i.moderateScoreThreshold)&&(y=Gi.MODERATE);const _=`${y.toUpperCase()} Priority (${f}/100) — Flood: ${l}/50 (${r.toUpperCase()}), Road: ${h}/25 (${d.replace(/_/g," ").toUpperCase()}), Services: ${v}/25 (${p?"Reachable":"Isolated"}).`;return{buildingId:e?.id||"unknown",totalScore:f,priorityTier:y,isUnknown:a,subScores:{floodExposure:l,roadAccess:h,emergencyService:v},reasons:{flood:c,road:u,service:m},explanation:_,hospitalStatus:{hasVerifiedHospital:!1,warning:"No verified municipal hospital in source dataset. Proposed medical-response site fac-001 is unverified. Note: Absence in research dataset does not prove that a real-world hospital or emergency medical service does not exist."},disclaimer:"Conceptual decision-support indicator only. Not a validated structural or life-safety assessment."}}rankBuildings(e){return!e||!Array.isArray(e)?[]:[...e].sort((t,n)=>{const i=t.risk?.totalScore??t.totalScore??0,r=n.risk?.totalScore??n.totalScore??0;if(r!==i)return r-i;const o=t.exposure?.waterDepth??t.waterDepth??0;return(n.exposure?.waterDepth??n.waterDepth??0)-o})}}const Gg=Object.freeze({clusterNeighborhoodMeters:70,minClusterSize:1,maxRoadSnapDistanceMeters:160,conceptualOccupantsPerBuilding:2.5});class Vg{constructor(e,t={}){this.roadNetwork=e,this.config={...Gg,...t},this.clusters=[]}createClusters(e){if(this.clusters=[],!e||e.length===0)return this.clusters;const t=e.length,n=this.config.clusterNeighborhoodMeters*this.config.clusterNeighborhoodMeters,i=Array.from({length:t},()=>[]);for(let a=0;a<t;a++){const l=e[a];for(let c=a+1;c<t;c++){const d=e[c],h=l.center.x-d.center.x,u=l.center.z-d.center.z;h*h+u*u<=n&&(i[a].push(c),i[c].push(a))}}const r=new Uint8Array(t),o=[];for(let a=0;a<t;a++){if(r[a])continue;const l=[],c=[a];for(r[a]=1;c.length>0;){const d=c.shift();l.push(d);for(const h of i[d])r[h]||(r[h]=1,c.push(h))}o.push(l.map(d=>e[d]))}return o.sort((a,l)=>{if(l.length!==a.length)return l.length-a.length;const c=a.reduce((h,u)=>h+u.center.x,0)/a.length,d=l.reduce((h,u)=>h+u.center.x,0)/l.length;return c-d}),this.clusters=o.map((a,l)=>{const c=`cluster-${l+1}`;let d=0,h=0,u=0,p=0;const g={low:0,moderate:0,high:0,critical:0,unknown:0};for(const L of a)d+=L.center.x,h+=L.center.z,p+=L.areaSqM||100,L.waterDepth&&L.waterDepth>u&&(u=L.waterDepth),L.category===Be.LOW?g.low++:L.category===Be.MODERATE?g.moderate++:L.category===Be.HIGH?g.high++:L.category===Be.CRITICAL?g.critical++:g.unknown++;const v=d/a.length,m=h/a.length;let f=0;for(const L of a){const R=Math.hypot(L.center.x-v,L.center.z-m);R>f&&(f=R)}const y=Math.max(25,Math.round(f+15)),_=this._resolveClusterOrigin(v,m,a),x=Math.round(a.length*this.config.conceptualOccupantsPerBuilding);return{id:c,index:l+1,buildingCount:a.length,buildingIds:a.map(L=>L.id),buildings:a,centroid:{x:Math.round(v*10)/10,z:Math.round(m*10)/10},radiusMeters:y,totalAreaSqM:Math.round(p),maxWaterDepth:Math.round(u*100)/100,distribution:g,estimatedPopulation:{count:x,isVerified:!1,disclaimer:"Conceptual estimate (~2.5 persons/building). Census population unavailable in source dataset."},representativeOrigin:_}}),console.log(`[ClusterService] Formed ${this.clusters.length} affected-area evacuation clusters from ${e.length} flooded structures.`),this.clusters}_resolveClusterOrigin(e,t,n){if(!this.roadNetwork||!this.roadNetwork.nodes||this.roadNetwork.nodes.size===0)return{x:e,z:t,isConnectedToRoads:!1,roadNodeId:null,distanceMeters:1/0,reason:"No road network loaded in environment"};let i=null,r=this.config.maxRoadSnapDistanceMeters,o={x:e,z:t};for(const a of this.roadNetwork.nodes.values()){const l=Math.hypot(a.x-e,a.z-t);l<r&&(r=l,i=a,o={x:a.x,z:a.z});for(const c of n){const d=Math.hypot(a.x-c.center.x,a.z-c.center.z);d<r&&(r=d,i=a,o={x:a.x,z:a.z})}}return i?{x:o.x,z:o.z,isConnectedToRoads:!0,roadNodeId:i.id,componentId:i.componentId,distanceMeters:Math.round(r*10)/10,reason:`Connected to Road Node ${i.id} in Component #${i.componentId} (${Math.round(r)}m from cluster).`}:{x:e,z:t,isConnectedToRoads:!1,roadNodeId:null,distanceMeters:1/0,reason:`No road network segment found within ${this.config.maxRoadSnapDistanceMeters}m of cluster perimeter. Origin marked unconnected.`}}routeCluster(e,t,n,i={}){if(!e)throw new Error("ClusterService.routeCluster: Cluster object is required.");if(!n)throw new Error("ClusterService.routeCluster: RoutingService instance is required.");if(!e.representativeOrigin||!e.representativeOrigin.isConnectedToRoads)return{isValid:!1,isReachable:!1,status:Xn.BLOCKED,clusterId:e.id,origin:e.representativeOrigin,destination:t[0]||null,totalDistanceMeters:1/0,totalCost:1/0,explanation:`Cluster ${e.id} has no valid connection to the road graph (${e.representativeOrigin?.reason||"unconnected"}). Evacuation routing cannot traverse without road connectivity.`};const r={x:e.representativeOrigin.x,z:e.representativeOrigin.z,id:`${e.id}-origin`,name:`${e.id} Evacuation Origin (${e.buildingCount} structures)`};return n.findNearestReachableDestination(r,t,i)}getCluster(e){return this.clusters.find(t=>t.id===e)||null}}const Wg=Object.freeze([{id:"prop-01",name:"North Terrace Emergency Staging Area",type:"shelter",x:-220,z:-420,intendedRole:"High-capacity emergency shelter & supply distribution post",description:"Elevated northern terrace bench overlooking Dernau core with direct access to northern road corridor."},{id:"prop-02",name:"Southwest Vineyard Assembly Post",type:"shelter",x:-580,z:280,intendedRole:"Secondary residential evacuation shelter",description:"Elevated southwest slope terrace above flood zone with contiguous road access."},{id:"prop-03",name:"North-East Plateau Medical Field Station",type:"hospital",x:350,z:-350,intendedRole:"Proposed medical-response & triage staging site",description:"Elevated plateau margin with road connectivity to regional eastern highway."},{id:"prop-04",name:"Lower Valley Terrace Margin",type:"shelter",x:50,z:120,intendedRole:"Contingency valley assembly point (Low margin)",description:"Lower terrace near river floodplain margin (designed to test scenario submergence & disqualification)."}]);class $g{constructor(e,t,n=Wg){this.terrainManager=e,this.roadNetwork=t,this.candidates=n.map(i=>({...i})),this.evaluatedSites=[]}evaluateSites(e,t=[]){const n=typeof e=="function"?e:()=>typeof e=="number"?e:124;return this.evaluatedSites=this.candidates.map(i=>{const r=this.terrainManager?.getElevationAt(i.x,i.z)??null;if(r===null||Number.isNaN(r)||r<=0||r===-9999)return{...i,isProposed:!0,isVerifiedFacility:!1,isViable:!1,isFlooded:!1,score:0,rank:"DISQUALIFIED",groundElevation:null,waterElevation:null,clearanceMeters:null,scoreBreakdown:{elevation:0,road:0,slope:0,cluster:0},reason:"Missing or unreliable DGM1 bare-earth DEM elevation at candidate coordinates (NoData).",statusLabel:i.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."};const o=n(i.x,i.z),a=r-o;if(a<=0){const w=Math.abs(a);return{...i,isProposed:!0,isVerifiedFacility:!1,isViable:!1,isFlooded:!0,score:0,rank:"DISQUALIFIED (FLOODED)",groundElevation:Math.round(r*10)/10,waterElevation:Math.round(o*10)/10,clearanceMeters:Math.round(a*100)/100,waterDepth:Math.round(w*100)/100,scoreBreakdown:{elevation:0,road:0,slope:0,cluster:0},reason:`Site is submerged by ${w.toFixed(2)}m of flood water at water level ${o.toFixed(1)}m MSL. Disqualified.`,statusLabel:i.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."}}let l=null,c=1/0;if(this.roadNetwork&&this.roadNetwork.nodes)for(const w of this.roadNetwork.nodes.values()){const M=Math.hypot(w.x-i.x,w.z-i.z);M<c&&(c=M,l=w)}const d=Math.min(35,Math.max(0,Math.round(a*5)));let h=0,u="unknown",p=null;if(l&&c<=120){p=l.id,c<=30?h+=20:c<=65?h+=14:h+=8;let w=!1,M=!1;for(const S of l.edgeIds){const C=this.roadNetwork.edges.get(S);C&&(C.status===Le.UNAFFECTED?w=!0:C.status===Le.EXPOSED&&(M=!0))}w?(h+=15,u="dry_connected"):M?(h+=6,u="exposed_connected"):(h+=0,u="impassable_connected")}else u="unconnected_far";const g=15,v=this.terrainManager?.getElevationAt(i.x,i.z-g)??r,m=this.terrainManager?.getElevationAt(i.x,i.z+g)??r,f=this.terrainManager?.getElevationAt(i.x+g,i.z)??r,y=this.terrainManager?.getElevationAt(i.x-g,i.z)??r,_=Math.max(Math.abs(v-r),Math.abs(m-r),Math.abs(f-r),Math.abs(y-r))/g;let x=5;_<.08?x=15:_<.18&&(x=10);let L=10;if(t.length>0){let w=1/0;for(const M of t){const S=Math.hypot(M.centroid.x-i.x,M.centroid.z-i.z);S<w&&(w=S)}w<600?L=15:w<1200?L=10:L=5}const R=Math.min(100,Math.max(0,d+h+x+L));let A="UNFAVORABLE";return R>=75?A="EXCELLENT":R>=55?A="VIABLE":R>=35&&(A="MARGINAL"),{...i,isProposed:!0,isVerifiedFacility:!1,isViable:R>=35,isFlooded:!1,score:R,rank:A,groundElevation:Math.round(r*10)/10,waterElevation:Math.round(o*10)/10,clearanceMeters:Math.round(a*10)/10,roadNodeId:p,roadDistanceMeters:Math.round(c*10)/10,roadStatus:u,scoreBreakdown:{elevationClearance:d,roadAccess:h,terrainSlope:x,clusterProximity:L},reason:`${A} suitability score (${R}/100): ${a.toFixed(1)}m elevation clearance above modeled water level, road distance ${c.toFixed(0)}m (${u}).`,statusLabel:i.type==="hospital"?"Proposed medical-response site — unverified":"Proposed shelter — unverified",disclaimer:"Proposed candidate site only. NOT an officially designated or operational emergency facility."}}),this.evaluatedSites.sort((i,r)=>r.score-i.score),this.evaluatedSites}getSite(e){return this.evaluatedSites.find(t=>t.id===e)||null}}const Xg=Object.freeze({baselineWaterLevel:124,maxRoadSnapDistanceMeters:150,maxFacilitySnapDistanceMeters:300});class qg{constructor(e,t,n,i,r={}){this.terrainManager=e,this.roadNetwork=t,this.routingService=n,this.buildingClassifier=i,this.config={...Xg,...r},this.baselineWaterLevel=this.config.baselineWaterLevel,this.currentWaterLevel=this.config.baselineWaterLevel,this.buildingFeatures=[],this.facilityFeatures=[],this.staticBuildingAccess=new Map,this.staticFacilityAccess=new Map,this.baselineRoadStates=new Map,this.baselineBuildingEvaluations=new Map,this.baselineNodeReachability=new Map,this.baselineShelterStates=new Map,this.currentComparison=null,this.rankedBuildings=[],this.accessLostBuildingIds=new Set}initStaticAccess(e,t){if(this.buildingFeatures=e||[],this.facilityFeatures=t||[],!this.roadNetwork||!this.roadNetwork.nodes||this.roadNetwork.nodes.size===0){console.warn("[ScenarioComparisonService] RoadNetwork is empty or uninitialized.");return}for(const n of this.buildingFeatures){const i=n.center||(n.coords?{x:n.coords[0],z:n.coords[1]}:null);if(!i)continue;let r=null,o=this.config.maxRoadSnapDistanceMeters;for(const a of this.roadNetwork.nodes.values()){const l=Math.hypot(a.x-i.x,a.z-i.z);l<o&&(o=l,r=a)}r?this.staticBuildingAccess.set(n.id,{hasRoadAccess:!0,roadNodeId:r.id,componentId:r.componentId,distanceMeters:Math.round(o*10)/10,reason:`Connected to Road Node ${r.id} in Component #${r.componentId} (${Math.round(o)}m distance).`}):this.staticBuildingAccess.set(n.id,{hasRoadAccess:!1,roadNodeId:null,componentId:null,distanceMeters:1/0,reason:`No road network segment found within ${this.config.maxRoadSnapDistanceMeters}m threshold.`})}for(const n of this.facilityFeatures){const i=n.center||(n.coordsGeo?{x:n.coordsGeo[0],z:n.coordsGeo[1]}:null);if(!i)continue;let r=null,o=this.config.maxFacilitySnapDistanceMeters;for(const a of this.roadNetwork.nodes.values()){const l=Math.hypot(a.x-i.x,a.z-i.z);l<o&&(o=l,r=a)}this.staticFacilityAccess.set(n.id,{roadNodeId:r?r.id:null,componentId:r?r.componentId:null,distanceMeters:r?Math.round(o*10)/10:1/0})}this.computeBaseline(this.baselineWaterLevel)}setBaselineScenario(e){this.baselineWaterLevel=typeof e=="number"?e:124,this.computeBaseline(this.baselineWaterLevel)}computeBaseline(e){if(this.baselineWaterLevel=e,!this.roadNetwork||!this.buildingClassifier)return;this.roadNetwork.evaluateScenario(e),this.baselineRoadStates.clear();for(const[i,r]of this.roadNetwork.edges.entries())this.baselineRoadStates.set(i,{status:r.status,maxWaterDepth:r.maxWaterDepth});const t=[];this.baselineShelterStates.clear();for(const i of this.facilityFeatures){if(i.type!=="shelter")continue;const r=this.terrainManager?.getElevationAt(i.center.x,i.center.z)??i.elevationM,o=r===null||Number.isNaN(r)||r<=0||r===-9999,a=this.staticFacilityAccess.get(i.id);let l="operational";if(o)l="unknown";else if(r<=e+.05)l="inundated";else if(!a||!a.roadNodeId)l="disconnected";else{const c=this.roadNetwork.nodes.get(a.roadNodeId);if(!c||!c.edgeIds||c.edgeIds.size===0)l="disconnected";else{let d=!0;for(const h of c.edgeIds){const u=this.roadNetwork.edges.get(h);if(u&&u.status!==Le.IMPASSABLE&&u.status!==Le.UNKNOWN){d=!1;break}}d&&(l="baseline_isolated")}}this.baselineShelterStates.set(i.id,l),l==="operational"&&t.push(i)}const{reachableNodes:n}=this._computeReachabilityFromShelters(t);this.baselineNodeReachability=n,this.baselineBuildingEvaluations.clear();for(const i of this.buildingFeatures){const r=this.buildingClassifier.classifyBuilding(i,e),o=this.staticBuildingAccess.get(i.id),a=o&&o.roadNodeId?n.get(o.roadNodeId):null,l=!!(a&&a.canReach);this.baselineBuildingEvaluations.set(i.id,{category:r.category,waterDepth:r.waterDepth,hasRoute:l})}console.log(`[ScenarioComparisonService] Baseline scenario established at ${e.toFixed(2)}m MSL (${t.length} operational shelters).`)}_computeReachabilityFromShelters(e){const t=new Map,n=new Map,i=[];for(const r of e){const o=this.staticFacilityAccess.get(r.id);if(!o||!o.roadNodeId)continue;const a=o.roadNodeId;t.has(a)||(t.set(a,{canReach:!0,isDry:!0,nearestShelter:r}),i.push({nodeId:a,isDry:!0,nearestShelter:r}))}for(;i.length>0;){const{nodeId:r,isDry:o,nearestShelter:a}=i.shift(),l=this.roadNetwork.nodes.get(r);if(l)for(const c of l.edgeIds){const d=this.roadNetwork.edges.get(c);if(!d)continue;const h=d.fromNodeId===r?d.toNodeId:d.fromNodeId;if(d.status===Le.IMPASSABLE||d.status===Le.UNKNOWN){n.has(d.fromNodeId)||n.set(d.fromNodeId,[]),n.get(d.fromNodeId).includes(d.id)||n.get(d.fromNodeId).push(d.id),n.has(d.toNodeId)||n.set(d.toNodeId,[]),n.get(d.toNodeId).includes(d.id)||n.get(d.toNodeId).push(d.id);continue}const u=o&&d.status===Le.UNAFFECTED,p=t.get(h);p?!p.isDry&&u&&(p.isDry=!0,i.push({nodeId:h,isDry:!0,nearestShelter:a})):(t.set(h,{canReach:!0,isDry:u,nearestShelter:a}),i.push({nodeId:h,isDry:u,nearestShelter:a}))}}return{reachableNodes:t,blockingEdges:n}}evaluateScenario(e){const t=typeof e=="function"?e:()=>typeof e=="number"?e:124,n=typeof e=="number"?e:typeof e?.waterLevel=="number"?e.waterLevel:typeof e?.currentWaterLevel=="number"?e.currentWaterLevel:t(0,0);this.currentWaterLevel=n,this.roadNetwork.evaluateScenario(t);const i=[],r=[];for(const B of this.facilityFeatures){if(B.type!=="shelter")continue;const H=this.terrainManager?.getElevationAt(B.center.x,B.center.z)??B.elevationM,z=t(B.center.x,B.center.z),X=H===null||Number.isNaN(H)||H<=0||H===-9999,G=z===null||Number.isNaN(z),J=this.staticFacilityAccess.get(B.id);let ee="operational",de=null,ye=!1;if(X||G)ee="unknown";else if(de=Math.max(0,z-H),ye=de>.05,ye)ee="inundated";else if(!J||!J.roadNodeId)ee="disconnected";else{const q=this.roadNetwork.nodes.get(J.roadNodeId);if(!q||!q.edgeIds||q.edgeIds.size===0)ee="disconnected";else{let ie=!0,ge=!1;for(const re of q.edgeIds){const Ae=this.roadNetwork.edges.get(re);Ae&&(Ae.status!==Le.IMPASSABLE&&Ae.status!==Le.UNKNOWN&&(ie=!1),Ae.status===Le.EXPOSED&&(ge=!0))}if(ie){const re=this.baselineShelterStates.get(B.id);re==="disconnected"||re==="baseline_isolated"?ee="disconnected":ee="isolated"}else ge?ee="exposed":ee="operational"}}const Oe={id:B.id,name:B.name,type:"shelter",provenance:B.provenance||"simulated",groundElevation:H!==null?Math.round(H*10)/10:null,waterElevation:Math.round(z*10)/10,siteWaterDepth:de!==null?Math.round(de*100)/100:null,isSiteInundated:ye,roadNodeId:J?.roadNodeId||null,componentId:J?.componentId||null,accessStatus:ee,isVerified:!1,statusLabel:ye?"Site Inundated":ee==="isolated"?"Isolated by Flooded Roads (Site Dry)":ee==="exposed"?"Access Exposed to Shallow Water":ee==="disconnected"?"Disconnected in Source Data":"Operational (Dry Access)",disclaimer:"Simulated shelter from local emergency dataset. Not an officially verified municipal facility."};i.push(Oe),!ye&&J&&J.roadNodeId&&r.push(B)}const{reachableNodes:o,blockingEdges:a}=this._computeReachabilityFromShelters(r),l=[];this.accessLostBuildingIds.clear();let c=0,d=0,h=0,u=0,p=0,g=0,v=0,m=0;for(const B of this.buildingFeatures){const H=this.buildingClassifier.classifyBuilding(B,t),z=this.staticBuildingAccess.get(B.id),X=this.baselineBuildingEvaluations.get(B.id);let G=Bt.CONNECTED,J="",ee=[],de=!1,ye="none",Oe=null;if(H.category===Be.UNKNOWN)m++,G=Bt.UNKNOWN,J="Missing or incomplete DGM1 elevation data. Access state uncertain.";else if(v++,X&&(X.category===Be.UNAFFECTED&&H.category!==Be.UNAFFECTED?p++:(X.category===Be.LOW&&(H.category===Be.MODERATE||H.category===Be.HIGH||H.category===Be.CRITICAL)||X.category===Be.MODERATE&&(H.category===Be.HIGH||H.category===Be.CRITICAL)||X.category===Be.HIGH&&H.category===Be.CRITICAL)&&g++),!z||!z.hasRoadAccess)G=Bt.DISCONNECTED_IN_SOURCE,J=z?.reason||"No road network access point within 150m threshold.",u++;else{const ie=X?X.hasRoute:!1,ge=o.get(z.roadNodeId);ie?ge&&ge.canReach?(de=!0,Oe=ge.nearestShelter,ge.isDry?(G=Bt.CONNECTED,J=`Direct, 100% dry road route to ${Oe?.name||"shelter"}.`,ye="clear",c++):(G=Bt.ACCESS_DEGRADED,J=`Evacuation route to ${Oe?.name||"shelter"} traverses shallow-flooded road segments.`,ye="exposed",d++)):(G=Bt.ROUTE_LOST,ee=a.get(z.roadNodeId)||[],J=`Evacuation route lost due to newly impassable road segments (${ee.length} blocking segments).`,ye="blocked",h++,this.accessLostBuildingIds.add(B.id)):(G=Bt.DISCONNECTED_IN_SOURCE,J=`Connecting Road Component #${z.componentId} had no route to shelters in baseline network.`,u++)}const q=this.buildingClassifier.calculateBuildingRisk(H,{accessStatus:G,canReachShelter:de,shelterRouteStatus:ye,nearestShelter:Oe,impassableEdges:ee});l.push({id:B.id,center:B.center,baseElevationM:B.baseElevationM,areaSqM:B.areaSqM,exposure:H,access:{status:G,reason:J,hasRoadAccess:z?.hasRoadAccess||!1,roadDistanceM:z?.distanceMeters||1/0,roadNodeId:z?.roadNodeId||null,componentId:z?.componentId||null,canReachShelter:de,shelterRouteStatus:ye,nearestShelter:Oe,impassableEdgeIds:ee},risk:q})}this.rankedBuildings=this.buildingClassifier.rankBuildings(l);let f=0,y=0,_=0,x=0,L=0,R=0;const A=this.roadNetwork.edges.size;for(const[B,H]of this.roadNetwork.edges.entries()){const z=this.baselineRoadStates.get(B);z&&(z.status===Le.IMPASSABLE?f++:z.status===Le.UNKNOWN&&y++),H.status===Le.IMPASSABLE?(_++,z&&(z.status===Le.UNAFFECTED||z.status===Le.EXPOSED)&&L++):H.status===Le.UNKNOWN?x++:H.status===Le.EXPOSED&&z&&z.status===Le.UNAFFECTED&&R++}const w=i.filter(B=>B.isSiteInundated).length,M=i.filter(B=>B.accessStatus==="isolated"&&this.baselineShelterStates.get(B.id)==="operational").length,S=i.filter(B=>B.accessStatus==="disconnected").length,C=i.filter(B=>B.accessStatus==="unknown").length,N=i.filter(B=>B.accessStatus==="operational").length,U={baselineWaterLevel:this.baselineWaterLevel,currentWaterLevel:this.currentWaterLevel,buildings:{totalEvaluated:l.length,validDenominator:v,unknownCount:m,newlyAffectedCount:p,newlyAffectedPercent:v>0?Math.round(p/v*1e3)/10:0,escalatedCount:g,escalatedPercent:v>0?Math.round(g/v*1e3)/10:0,routeLostCount:h,routeLostPercent:v>0?Math.round(h/v*1e3)/10:0,accessDegradedCount:d,connectedCount:c,disconnectedInSourceCount:u},roads:{totalRoadEdges:A,baselineImpassable:f,baselineUnknown:y,currentImpassable:_,currentUnknown:x,newlyImpassable:L,newlyImpassablePercent:A>0?Math.round(L/A*1e3)/10:0,newlyExposed:R},shelters:{total:i.length,operational:N,isolatedByRoads:M,inundated:w,disconnectedInSource:S,unknown:C},shelterAssessments:i};return this.currentComparison=U,{comparison:U,rankedBuildings:this.rankedBuildings}}getDataQualityReport(e={}){let t=this.buildingFeatures.length,n=0,i=0,r=0,o=0;for(const m of this.buildingFeatures){const f=this.terrainManager?.getElevationAt(m.center.x,m.center.z)??m.baseElevationM;f===null||Number.isNaN(f)||f<=0||f===-9999?n++:i++;const y=this.staticBuildingAccess.get(m.id);!y||!y.hasRoadAccess?o++:y.distanceMeters>0&&r++}let a=this.roadNetwork.edges.size,l=0,c=0;for(const m of this.roadNetwork.edges.values())m.status===Le.UNKNOWN?l++:c++;const d=this.roadNetwork.components?this.roadNetwork.components.length:67;let h=this.facilityFeatures.length,u=0,p=0;for(const m of this.facilityFeatures)m.isVerified===!0?u++:p++;const v=(e.proposedSites||[]).length||4;return{demCoverage:{totalBuildings:t,valid:i,unknown:n,unknownPercent:t>0?Math.round(n/t*1e3)/10:0,status:n===0?"Verified":"Partial Unknown",label:n>0?"Unknown DEM Regions":"Verified DGM1 Coverage",description:"Physical heights derived from official Rhineland-Palatinate DGM1 bare-earth LiDAR. Missing/NoData coordinates strictly penalized as Unknown."},roadClassification:{totalEdges:a,evaluated:c,unknown:l,unknownPercent:a>0?Math.round(l/a*1e3)/10:0,status:l===0?"Verified":"Partial Unknown",label:l>0?"Unknown Road Edges":"Fully Evaluated Roads",description:"Road flood classification derived from LiDAR ground elevation along segment geometries. Unknown edges treated as impassable under conservative policy."},roadTopology:{totalComponents:d,status:d>1?"Disconnected":"Connected",label:`${d} Disconnected Components`,description:"Topological analysis of SpaceNet 8 road dataset reveals disconnected graph components. Baseline disconnections are preserved to prevent false flood failure attribution."},facilityProvenance:{total:h,verified:u,simulated:p,hasVerifiedHospital:!1,status:u>0?"Verified":"Unverified",label:"Simulated / Unverified Facilities",description:"All emergency facilities and shelters are simulated decision-support markers from local datasets. No certified municipal emergency hospital exists in source data (absence does not prove real-world lack of facilities)."},proposedSites:{total:v,status:"Proposed",label:`${v} Proposed Candidate Sites`,description:"Candidate locations for safe assembly and field medical staging are explicitly unverified proposals vetted only for topography clearance and road proximity."},spatialSnapping:{totalBuildings:t,approximateCount:r,disconnectedCount:o,status:"Approximate",label:"Approximate Centroid Snapping",description:"Building-to-road network access uses 2D Euclidean distance from building footprint centroid to nearest road segment node."},modelAssumptions:{status:"Approximate",label:"Static Inundation Modeling",description:"HighWater 3D evaluates static terrain-water intersection. It does not model hydrodynamic velocity, wave momentum, stormwater pipe backflow, or structural collapse."}}}getBuildingEvaluation(e){return this.rankedBuildings.find(t=>t.id===e)||null}getShelterEvaluation(e){return!this.currentComparison||!this.currentComparison.shelterAssessments?null:this.currentComparison.shelterAssessments.find(t=>t.id===e)||null}}class Yg{constructor(e,t){this.scene=e,this.terrainManager=t,this.buildingLayer=new Tg(this.scene,this.terrainManager),this.roadLayer=new Lg(this.scene,this.terrainManager),this.facilityLayer=new Dg(this.scene,this.terrainManager),this.floodExtentLayer=new Pg(this.scene,this.terrainManager),this.routeLayer=new Fg(this.scene,this.terrainManager),this.clusterLayer=new Og(this.scene,this.terrainManager),this.proposedSiteLayer=new Bg(this.scene,this.terrainManager),this.buildingClassifier=new Hg(this.terrainManager),this.clusterService=null,this.proposedSiteService=null,this.routingService=null,this.activeRouteRequest=null,this.activeRouteResult=null,this.activeAlternativeResult=null,this.onRouteRecalculated=null,this.onClustersUpdated=null,this.onProposedSitesUpdated=null,this.onScenarioComparisonUpdated=null,this.onBuildingRiskUpdated=null,this.scenarioComparisonService=null,this.showAccessLostHighlights=!0,this.visibility={buildings:!0,roads:!0,facilities:!0,historicalFlood:!0,route:!0,clusters:!0,proposedSites:!0},this.stats={buildings:null,roads:null,facilities:null,floodExtent:null},this.raycaster=new dc}async loadAll(){console.log("📦 Loading Dernau geographic overlays...");const[e,t,n,i]=await Promise.all([this.buildingLayer.load("/data/dernau/buildings_exposed.geojson"),this.roadLayer.load("/data/dernau/roads_status.geojson"),this.facilityLayer.load("/data/dernau/facilities.geojson"),this.floodExtentLayer.load("/data/dernau/flood_extent.geojson")]);this.stats.buildings=e,this.stats.roads=t,this.stats.facilities=n,this.stats.floodExtent=i;const r=this.roadLayer.getRoadNetwork();return r&&(this.routingService=new Ug(r),this.clusterService=new Vg(r),this.proposedSiteService=new $g(this.terrainManager,r),this.scenarioComparisonService=new qg(this.terrainManager,r,this.routingService,this.buildingClassifier),this.scenarioComparisonService.initStaticAccess(this.buildingLayer.features,this.facilityLayer.features)),console.log("✅ Geographic Overlays Loaded:",{buildings:`${e.total} total (${e.flooded} flooded, ${e.normal} unaffected)`,roads:`${t.total} segments (${t.flooded} cutoff, ${t.open} open)`,facilities:`${n.total} tactical points`,historicalFlood:`${i.polygonCount} reference polygons`,routingService:this.routingService?"Ready":"Unavailable"}),this.stats}getRawDatasets(){return{buildings:this.buildingLayer.rawGeojson,roads:this.roadLayer.rawGeojson,facilities:this.facilityLayer.rawGeojson}}toggleBuildings(e){return this.visibility.buildings=typeof e=="boolean"?e:!this.visibility.buildings,this.buildingLayer.setVisible(this.visibility.buildings),this.visibility.buildings}toggleRoads(e){return this.visibility.roads=typeof e=="boolean"?e:!this.visibility.roads,this.roadLayer.setVisible(this.visibility.roads),this.visibility.roads}toggleFacilities(e){return this.visibility.facilities=typeof e=="boolean"?e:!this.visibility.facilities,this.facilityLayer.setVisible(this.visibility.facilities),this.visibility.facilities}toggleHistoricalFlood(e){return this.visibility.historicalFlood=typeof e=="boolean"?e:!this.visibility.historicalFlood,this.floodExtentLayer.setVisible(this.visibility.historicalFlood),this.visibility.historicalFlood}setBuildingDepthMode(e){return this.buildingLayer.setDepthColorMode(e)}toggleBuildingDepthMode(){const e=this.buildingLayer.colorMode==="dynamic-depth"?"historical":"dynamic-depth";return this.setBuildingDepthMode(e),e==="dynamic-depth"}setRoadPassabilityMode(e){return this.roadLayer.setPassabilityMode(e)}toggleRoadPassabilityMode(){const e=this.roadLayer.passabilityMode==="dynamic-passability"?"historical":"dynamic-passability";return this.setRoadPassabilityMode(e),e==="dynamic-passability"}setFacilityAccessibilityMode(e){return this.facilityLayer.setAccessibilityMode(e)}toggleClusters(e){return this.visibility.clusters=typeof e=="boolean"?e:!this.visibility.clusters,this.clusterLayer.setVisible(this.visibility.clusters),this.visibility.clusters}toggleProposedSites(e){return this.visibility.proposedSites=typeof e=="boolean"?e:!this.visibility.proposedSites,this.proposedSiteLayer.setVisible(this.visibility.proposedSites),this.visibility.proposedSites}updateImpacts(e,t){const n=this.buildingLayer.updateBuildingDepths(e),i=this.roadLayer.updatePassability(e),r=this.facilityLayer.updateAccessibility(t);let o=[];if(this.buildingClassifier&&this.clusterService&&this.buildingLayer.features.length>0){const a=this.buildingClassifier.evaluateAll(this.buildingLayer.features,e);o=this.clusterService.createClusters(a.affectedBuildings),this.clusterLayer.updateClusters(o),typeof this.onClustersUpdated=="function"&&this.onClustersUpdated(o,a.summary)}if(this.proposedSiteService){const a=this.proposedSiteService.evaluateSites(e,o);this.proposedSiteLayer.updateSites(a),typeof this.onProposedSitesUpdated=="function"&&this.onProposedSitesUpdated(a)}if(this.scenarioComparisonService){const a=this.scenarioComparisonService.evaluateScenario(e);this.showAccessLostHighlights&&this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds),typeof this.onScenarioComparisonUpdated=="function"&&this.onScenarioComparisonUpdated(a.comparison),typeof this.onBuildingRiskUpdated=="function"&&this.onBuildingRiskUpdated(a.rankedBuildings)}return this.activeRouteRequest&&this.routingService&&this.recalculateActiveRoute(),{buildings:n,roads:i,facilities:r,clusters:o.length}}getRoadNetwork(){return this.roadLayer?this.roadLayer.getRoadNetwork():null}getRoutingService(){return this.routingService}getRouteLayer(){return this.routeLayer}routeToDestination(e,t,n={}){if(!this.routingService)throw new Error("OverlayManager: RoutingService is not ready.");this.activeRouteRequest={origin:e,destination:t,options:n};const i=this.routingService.findAlternativeRoutes(e,t,n);return this.activeRouteResult=i.primaryRoute,this.activeAlternativeResult=i.alternativeRoute,this.routeLayer.displayRoute(this.activeRouteResult,this.activeAlternativeResult),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),i}routeToNearestDestination(e,t,n={}){if(!this.routingService)throw new Error("OverlayManager: RoutingService is not ready.");const i=this.routingService.findNearestReachableDestination(e,t,n);return i.bestDestination&&i.route?(this.activeRouteRequest={origin:e,destination:i.bestDestination,options:n,candidates:t},this.activeRouteResult=i.route,this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null)):(this.activeRouteRequest={origin:e,destination:t[0],options:n,candidates:t},this.activeRouteResult=i.route||{isValid:!1,isReachable:!1,explanation:i.reason,status:"blocked",routeType:n.routeType||"shelter",origin:e,destination:t[0],totalDistanceMeters:1/0},this.activeAlternativeResult=null,this.routeLayer.clearRoute()),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),i}recalculateActiveRoute(){if(!this.activeRouteRequest||!this.routingService)return null;const e=this.activeRouteRequest;if(e.candidates&&e.candidates.length>0){const t=this.routingService.findNearestReachableDestination(e.origin,e.candidates,e.options);t.bestDestination&&t.route?(this.activeRouteResult=t.route,this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null)):(this.activeRouteResult=t.route||{isValid:!1,isReachable:!1,explanation:t.reason,status:"blocked",routeType:e.options?.routeType||"shelter",origin:e.origin,destination:e.destination,totalDistanceMeters:1/0},this.activeAlternativeResult=null,this.routeLayer.displayRoute(this.activeRouteResult,null))}else{const t=this.routingService.findAlternativeRoutes(e.origin,e.destination,e.options);this.activeRouteResult=t.primaryRoute,this.activeAlternativeResult=t.alternativeRoute,this.routeLayer.displayRoute(this.activeRouteResult,this.activeAlternativeResult)}return typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(this.activeRouteResult,this.activeAlternativeResult),this.activeRouteResult}clearRoute(){this.activeRouteRequest=null,this.activeRouteResult=null,this.activeAlternativeResult=null,this.routeLayer.clearRoute(),typeof this.onRouteRecalculated=="function"&&this.onRouteRecalculated(null,null)}inspectFeature(e,t){if(!t)return null;this.raycaster.setFromCamera(e,t);const n=this.raycaster.ray;if(this.visibility.facilities){const i=this.facilityLayer.intersectFacility(n);if(i){if(this.scenarioComparisonService){const r=this.scenarioComparisonService.getShelterEvaluation(i.id);r&&(i.shelterEvaluation=r)}return i}}if(this.visibility.proposedSites&&this.proposedSiteLayer){const i=this.proposedSiteLayer.intersectProposedSite(n);if(i)return{...i,kind:"proposed-site"}}if(this.visibility.clusters&&this.clusterLayer){const i=this.clusterLayer.intersectCluster(n);if(i)return{...i,kind:"cluster"}}if(this.visibility.buildings){const i=this.buildingLayer.intersectBuilding(n);if(i){if(this.scenarioComparisonService){const r=this.scenarioComparisonService.getBuildingEvaluation(i.id);r&&(i.riskEvaluation=r)}return i}}if(this.visibility.roads){const i=this.roadLayer.intersectRoad(n);if(i)return i}return null}setBaselineWaterLevel(e){this.scenarioComparisonService&&this.scenarioComparisonService.setBaselineScenario(e)}highlightBuilding(e){return this.buildingLayer.highlightBuilding(e)}clearBuildingHighlight(){this.buildingLayer.clearHighlight()}toggleAccessLostHighlights(e){return this.showAccessLostHighlights=typeof e=="boolean"?e:!this.showAccessLostHighlights,this.showAccessLostHighlights&&this.scenarioComparisonService?this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds):this.buildingLayer.clearAccessLostHighlights(),this.showAccessLostHighlights}dispose(){this.clearRoute(),this.clearBuildingHighlight(),this.routeLayer.dispose(),this.clusterLayer.dispose(),this.proposedSiteLayer.dispose(),this.buildingLayer.dispose(),this.roadLayer.dispose(),this.facilityLayer.dispose(),this.floodExtentLayer.dispose()}}class Kg{constructor(e,t,n=null){if(!e||!t)throw new Error("FloodWaterManager: THREE.Scene and TerrainManager are required.");this.scene=e,this.terrainManager=t,this.overlayManager=n,this.minWaterLevel=120,this.maxWaterLevel=155,this.defaultWaterLevel=124,this.waterLevel=this.defaultWaterLevel,this.visible=!0,this.connectedOnly=!0,this.isPlaying=!1,this.riseRateMetersPerSec=1.5,this.profileMode="planar",this.group=new Dt,this.group.name="Flood_Water_Layer",this.scene.add(this.group),this.waterMesh=null,this.waterGeometry=null,this.waterMaterial=null,this.demPayload=null,this.elevations=null,this.rows=0,this.cols=0,this.width=2400,this.length=2400,this.bedGrid=null,this.preIndexedAssets={buildings:[],roads:[],facilities:[]},this.riverThalwegSeeds=[[205,10,139.74],[174,41,137.74],[151,67,134.71],[120,79,134.58],[132,99,131.83],[163,102,130.4],[193,124,129.84],[205,155,128.63],[217,186,127.45],[187,213,126.2],[156,213,125.63],[125,223,124.29],[94,216,123.33],[63,224,122.16],[32,228,120.97],[1,233,120.15]],this.currentImpact={waterLevel:this.waterLevel,profileMode:this.profileMode,inundatedCells:0,inundatedAreaSqKm:0,inundatedPercentage:0,affectedBuildings:0,totalBuildings:759,buildingDepthBreakdown:{dry:759,shallow:0,moderate:0,deep:0},affectedRoads:0,totalRoads:117,roadPassabilityBreakdown:{passable:117,waterlogged:0,submerged:0},affectedFacilities:0,totalFacilities:6,facilityAccessibility:[],shelterSummary:{operational:6,isolated:0,inundated:0}},this.onImpactUpdate=null}attachDEM(e){if(!e||!e.elevations){console.warn("FloodWaterManager: Invalid DEM payload.");return}this.demPayload=e,this.elevations=e.elevations,this.rows=this.elevations.length,this.cols=this.elevations[0].length,this.width=e.metadata.utmExtents?.widthMeters||2400,this.length=e.metadata.utmExtents?.lengthMeters||2400,this.precomputeSlopeBedGrid(),this.initWaterMesh(),this.updateInundation(this.waterLevel)}precomputeSlopeBedGrid(){if(!this.elevations||this.rows===0||this.cols===0)return;const e=this.riverThalwegSeeds.map(([t,n,i])=>({x:n/(this.cols-1)*this.width-this.width/2,z:t/(this.rows-1)*this.length-this.length/2,e:i}));this.bedGrid=new Float32Array(this.rows*this.cols);for(let t=0;t<this.rows;t++){const n=t/(this.rows-1)*this.length-this.length/2;for(let i=0;i<this.cols;i++){const r=i/(this.cols-1)*this.width-this.width/2;let o=1/0,a=e[0].e;for(let l=0;l<e.length-1;l++){const c=e[l],d=e[l+1],h=d.x-c.x,u=d.z-c.z,p=h*h+u*u;let g=0;p>0&&(g=Math.max(0,Math.min(1,((r-c.x)*h+(n-c.z)*u)/p)));const v=c.x+g*h,m=c.z+g*u,f=(r-v)*(r-v)+(n-m)*(n-m);f<o&&(o=f,a=c.e+g*(d.e-c.e))}this.bedGrid[t*this.cols+i]=a}}console.log("[FloodWaterManager] Slope-aware thalweg bed grid precomputed for 65,536 cells.")}indexAssets(e){e.buildings&&e.buildings.features&&(this.preIndexedAssets.buildings=e.buildings.features.map((t,n)=>{let i=0,r=0,o=0;const a=t.geometry,l=a.type==="Polygon"?a.coordinates[0]:a.coordinates[0][0];if(l){for(const d of l){const h=tn(d[0],d[1]);i+=h.x,r+=h.z,o++}i/=o,r/=o}const c=this.localToGrid(i,r);return{id:t.properties?.id||`bld-${n}`,grid:c,cx:i,cz:r}}),this.currentImpact.totalBuildings=this.preIndexedAssets.buildings.length),e.roads&&e.roads.features&&(this.preIndexedAssets.roads=e.roads.features.map((t,n)=>{const i=[],r=t.geometry,o=r.type==="LineString"?[r.coordinates]:r.coordinates;if(o)for(const a of o)for(const l of a){const c=tn(l[0],l[1]);i.push({grid:this.localToGrid(c.x,c.z),x:c.x,z:c.z})}return{id:t.properties?.id||`road-${n}`,pts:i}}),this.currentImpact.totalRoads=this.preIndexedAssets.roads.length),e.facilities&&e.facilities.features&&(this.preIndexedAssets.facilities=e.facilities.features.map((t,n)=>{const i=tn(t.geometry.coordinates[0],t.geometry.coordinates[1]),r=this.localToGrid(i.x,i.z),o=this.terrainManager.getElevationAt(i.x,i.z)||135;return{id:t.properties?.facility_id||t.properties?.id||`fac-${n}`,name:t.properties?.name||"Emergency Facility",type:t.properties?.type||"facility",grid:r,loc:i,baseElevation:o}}),this.currentImpact.totalFacilities=this.preIndexedAssets.facilities.length),console.log(`[FloodWaterManager] Indexed assets for dynamic impact: ${this.currentImpact.totalBuildings} blds, ${this.currentImpact.totalRoads} roads, ${this.currentImpact.totalFacilities} facs.`),this.assessImpact(this.waterLevel)}localToGrid(e,t){const n=(e+this.width/2)/this.width,i=(t+this.length/2)/this.length,r=Math.max(0,Math.min(this.cols-1,Math.round(n*(this.cols-1))));return{r:Math.max(0,Math.min(this.rows-1,Math.round(i*(this.rows-1)))),c:r}}get currentWaterLevel(){return this.waterLevel}getWaterElevationAt(e,t){if(this.profileMode==="planar"||!this.bedGrid)return this.waterLevel;const{r:n,c:i}=this.localToGrid(e,t),r=this.waterLevel-this.defaultWaterLevel;return this.bedGrid[n*this.cols+i]+1+r}getWaterSurfaceAtWorld(e,t){return this.getWaterElevationAt(e,t)}initWaterMesh(){this.dispose(),this.waterGeometry=new ti(this.width,this.length,this.cols-1,this.rows-1),this.waterGeometry.rotateX(-Math.PI/2);const e=this.waterGeometry.attributes.position;for(let t=0;t<e.count;t++){const n=e.getX(t),i=e.getZ(t),r=this.terrainManager.getElevationAt(n,i)||this.defaultWaterLevel;e.setY(t,r)}e.needsUpdate=!0,this.waterGeometry.setIndex([]),this.waterMaterial=new Zt({color:440020,roughness:.14,metalness:.12,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:yt}),this.waterMesh=new Je(this.waterGeometry,this.waterMaterial),this.waterMesh.name="Flood_Water_Surface",this.waterMesh.receiveShadow=!1,this.waterMesh.castShadow=!1,this.waterMesh.visible=this.visible,this.group.add(this.waterMesh)}setWaterLevel(e){const t=Math.max(this.minWaterLevel,Math.min(this.maxWaterLevel,Number(e)));Math.abs(this.waterLevel-t)<.001||(this.waterLevel=t,this.updateInundation(this.waterLevel))}setVisible(e){return this.visible=typeof e=="boolean"?e:!this.visible,this.waterMesh&&(this.waterMesh.visible=this.visible),this.visible}setConnectivity(e){return this.connectedOnly=typeof e=="boolean"?e:!this.connectedOnly,this.updateInundation(this.waterLevel),this.connectedOnly}setProfileMode(e){return this.profileMode=e==="slope"?"slope":"planar",this.updateInundation(this.waterLevel),this.profileMode}reset(){this.isPlaying=!1,this.waterLevel=this.defaultWaterLevel,this.updateInundation(this.waterLevel)}togglePlayPause(){return this.isPlaying=!this.isPlaying,this.isPlaying}computeInundationMask(e){const t=new Uint8Array(this.rows*this.cols);if(!this.elevations)return t;const n=this.profileMode==="slope"&&this.bedGrid,i=e-this.defaultWaterLevel,r=(c,d)=>{const h=this.elevations[c][d];if(n){const u=this.bedGrid[c*this.cols+d]+1+i;return h<=u}return h<=e};if(!this.connectedOnly){for(let c=0;c<this.rows;c++)for(let d=0;d<this.cols;d++)r(c,d)&&(t[c*this.cols+d]=1);return t}const o=[],a=new Uint8Array(this.rows*this.cols);for(const[c,d]of this.riverThalwegSeeds)if(r(c,d)){const h=c*this.cols+d;a[h]||(a[h]=1,t[h]=1,o.push(h))}let l=0;for(;l<o.length;){const c=o[l++],d=Math.floor(c/this.cols),h=c%this.cols,u=[[d-1,h],[d+1,h],[d,h-1],[d,h+1]];for(const[p,g]of u)if(p>=0&&p<this.rows&&g>=0&&g<this.cols){const v=p*this.cols+g;a[v]||(a[v]=1,r(p,g)&&(t[v]=1,o.push(v)))}}return t}updateInundation(e){if(!this.waterGeometry||!this.elevations)return;const t=this.computeInundationMask(e),n=this.waterGeometry.attributes.position,i=.2,r=this.profileMode==="slope"&&this.bedGrid,o=e-this.defaultWaterLevel;for(let l=0;l<this.rows;l++)for(let c=0;c<this.cols;c++){const d=l*this.cols+c;if(t[d]){const h=this.elevations[l][c],u=r?this.bedGrid[d]+1+o:e,p=Math.max(h+i,u);n.setY(d,p)}else n.setY(d,this.elevations[l][c]-.5)}n.needsUpdate=!0;const a=[];for(let l=0;l<this.rows-1;l++)for(let c=0;c<this.cols-1;c++){const d=l*this.cols+c,h=l*this.cols+(c+1),u=(l+1)*this.cols+c,p=(l+1)*this.cols+(c+1);t[d]+t[h]+t[u]+t[p]>=2&&(a.push(d,u,h),a.push(h,u,p))}this.waterGeometry.setIndex(a),this.waterGeometry.index&&(this.waterGeometry.index.needsUpdate=!0),this.waterGeometry.computeVertexNormals(),this.assessImpact(e,t)}assessImpact(e,t=null){t||(t=this.computeInundationMask(e));let n=0;for(let _=0;_<t.length;_++)t[_]&&n++;const i=this.rows*this.cols,r=this.width/(this.cols-1)*(this.length/(this.rows-1)),o=n*r/1e6,a=i>0?n/i*100:0,l=(_,x)=>this.getWaterElevationAt(_,x);let c=0;for(const _ of this.preIndexedAssets.buildings){const x=_.grid.r*this.cols+_.grid.c;t[x]&&c++}let d=0;const h=new Map;for(const _ of this.preIndexedAssets.roads){let x=!1;for(const L of _.pts)if(t[L.grid.r*this.cols+L.grid.c]){x=!0;break}x&&d++,h.set(_.id,x)}let u=0,p=0,g=0,v=0;const m={};for(const _ of this.preIndexedAssets.facilities){const x=_.grid.r*this.cols+_.grid.c,L=t[x]===1,R=this.getWaterElevationAt(_.loc.x,_.loc.z),A=Math.max(0,R-_.baseElevation);let w=0,M=0;for(const N of this.preIndexedAssets.roads){let U=!1;for(const B of N.pts){const H=B.x-_.loc.x,z=B.z-_.loc.z;if(H*H+z*z<250*250){U=!0;break}}U&&(w++,h.get(N.id)&&M++)}let S="operational",C="passable";L||A>0?(S="inundated",v++,u++):w>0&&M===w?(S="isolated",C="all_submerged",g++,u++):(S="operational",C=M>0?"partially_clear":"clear",p++),m[_.id]={id:_.id,name:_.name,type:_.type,status:S,siteWaterDepth:Math.round(A*100)/100,nearbyRoadStatus:C,nearbyRoadCount:w,nearbySubmergedCount:M}}let f={dry:759-c,shallow:0,moderate:0,deep:0},y={passable:117-d,waterlogged:0,submerged:d};if(this.overlayManager&&typeof this.overlayManager.updateImpacts=="function"){const _=this.overlayManager.updateImpacts(l,m);_.buildings&&(f=_.buildings),_.roads&&(y=_.roads)}return this.currentImpact={waterLevel:Math.round(e*100)/100,profileMode:this.profileMode,inundatedCells:n,inundatedAreaSqKm:Math.round(o*1e3)/1e3,inundatedPercentage:Math.round(a*10)/10,affectedBuildings:c,totalBuildings:this.preIndexedAssets.buildings.length||759,buildingDepthBreakdown:f,affectedRoads:d,totalRoads:this.preIndexedAssets.roads.length||117,roadPassabilityBreakdown:y,affectedFacilities:u,totalFacilities:this.preIndexedAssets.facilities.length||6,facilityAccessibility:Object.values(m),shelterSummary:{operational:p,isolated:g,inundated:v},shelterAccessibilityBreakdown:{operational:p,isolated:g,inundated:v}},this.shelterAccessibility=m,typeof this.onImpactUpdate=="function"&&this.onImpactUpdate(this.currentImpact),this.currentImpact}update(e){if(!this.isPlaying)return;let t=this.waterLevel+this.riseRateMetersPerSec*e;t>=this.maxWaterLevel&&(t=this.maxWaterLevel,this.isPlaying=!1),this.setWaterLevel(t)}dispose(){this.waterGeometry&&(this.waterGeometry.dispose(),this.waterGeometry=null),this.waterMaterial&&(this.waterMaterial.dispose(),this.waterMaterial=null),this.waterMesh&&(this.waterMesh.parent&&this.waterMesh.parent.remove(this.waterMesh),this.waterMesh=null)}}class jg{constructor(e){this.dom=e,this.mouseNdc=new ne(-999,-999),this.lastDomUpdate=0,this.updateInterval=80}update(e,t,n){const i=performance.now();if(!(i-this.lastDomUpdate<this.updateInterval)&&(this.lastDomUpdate=i,e&&(this.dom.camPos&&(this.dom.camPos.textContent=`${e.camX.toFixed(0)}m, ${e.camY.toFixed(0)}m, ${e.camZ.toFixed(0)}m`),this.dom.targetPos&&(this.dom.targetPos.textContent=`${e.targetX.toFixed(0)}m, ${e.targetY.toFixed(0)}m, ${e.targetZ.toFixed(0)}m`),this.dom.camAlt&&(this.dom.camAlt.textContent=`${e.altitude.toFixed(1)} m`),this.dom.camAngles&&(this.dom.camAngles.textContent=`${e.pitchDeg.toFixed(1)}° / ${e.azimuthDeg.toFixed(1)}°`),this.dom.compassNeedle&&(this.dom.compassNeedle.style.transform=`rotate(${-e.azimuthDeg}deg)`)),t&&(this.dom.fpsCounter&&(this.dom.fpsCounter.textContent=`${t.fps} FPS`),this.dom.drawCalls&&(this.dom.drawCalls.textContent=t.drawCalls),this.dom.triangles&&(this.dom.triangles.textContent=t.triangles.toLocaleString()),this.dom.frameTime&&(this.dom.frameTime.textContent=`${t.frameDurationMs.toFixed(1)} ms`)),this.dom.cursorPos))if(n){const r=n.x.toFixed(1),o=n.y.toFixed(1),a=n.z.toFixed(1);this.dom.cursorPos.textContent=`X: ${r}m  Y: ${o}m  Z: ${a}m`}else this.dom.cursorPos.textContent="Off terrain bounds"}setMouseCoords(e,t,n){this.mouseNdc.x=(e-n.left)/n.width*2-1,this.mouseNdc.y=-((t-n.top)/n.height*2-1)}getMouseNdc(){return this.mouseNdc}}const Zg="highwater3d_scenarios_v1",bl=Object.freeze([{id:"scen-baseline-124",name:"Normal Baseline Stage (124.0m MSL)",waterLevel:124,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"Typical non-flood baseflow along the Ahr river channel in Dernau.",createdAt:"2026-10-15T12:00:00.000Z"},{id:"scen-spacenet8-1285",name:"SpaceNet 8 / July 2021 Reference (128.5m MSL)",waterLevel:128.5,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"Indicative valley inundation matching SpaceNet 8 July 2021 historical flood extent.",createdAt:"2026-10-15T12:00:00.000Z"},{id:"scen-extreme-1330",name:"Extreme HQ100+ Model Scenario (133.0m MSL)",waterLevel:133,profileMode:"planar",connectedOnly:!0,baselineWaterLevel:124,isBuiltIn:!0,notes:"High-consequence flood scenario modeling extensive residential core immersion.",createdAt:"2026-10-15T12:00:00.000Z"}]);function Ze(s){if(s==null)return"";const e=String(s);return e.includes(",")||e.includes('"')||e.includes(`
`)||e.includes("\r")?`"${e.replace(/"/g,'""')}"`:e}function wt(s){return s==null?"":String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class Jg{constructor(e={}){this.storageKey=e.storageKey||Zg,this.inMemoryStore=new Map,this.isStorageAvailable=!0,this.storageErrorMessage=null,this._initStorage()}_initStorage(){try{const e="__highwater_test__";window.localStorage.setItem(e,e),window.localStorage.removeItem(e),this.isStorageAvailable=!0,this.storageErrorMessage=null,window.localStorage.getItem(this.storageKey)||window.localStorage.setItem(this.storageKey,JSON.stringify(bl))}catch(e){this.isStorageAvailable=!1,this.storageErrorMessage=`Local storage unavailable (${e.message||"Restricted"}). Scenarios will be kept in-memory for this session only.`,console.warn(`[ScenarioManager] ${this.storageErrorMessage}`),bl.forEach(t=>{this.inMemoryStore.set(t.id,{...t})})}}getScenarios(){let e=[];if(this.isStorageAvailable)try{const n=window.localStorage.getItem(this.storageKey);if(n){const i=JSON.parse(n);Array.isArray(i)&&(e=i)}}catch(n){console.error("[ScenarioManager] Failed to read scenarios from localStorage:",n),this.storageErrorMessage="Failed to parse saved scenarios. Using in-memory fallback.",e=Array.from(this.inMemoryStore.values())}else e=Array.from(this.inMemoryStore.values());return e.filter(n=>n&&typeof n=="object"&&typeof n.id=="string"&&typeof n.waterLevel=="number").map(n=>({id:n.id,name:String(n.name||`Scenario ${n.waterLevel.toFixed(1)}m`),waterLevel:Math.round(n.waterLevel*100)/100,profileMode:n.profileMode==="slope"?"slope":"planar",connectedOnly:n.connectedOnly!==!1,baselineWaterLevel:typeof n.baselineWaterLevel=="number"?Math.round(n.baselineWaterLevel*100)/100:124,isBuiltIn:!!n.isBuiltIn,notes:String(n.notes||""),createdAt:n.createdAt||new Date().toISOString(),summarySnapshot:n.summarySnapshot||null}))}getScenario(e){return e&&this.getScenarios().find(t=>t.id===e)||null}saveScenario(e){if(!e)throw new Error("Scenario must include a valid numeric waterLevel.");const t=e.waterLevel;let n=null;if(typeof t=="number"&&!Number.isNaN(t))n=t;else if(typeof t=="string"&&t.trim()!==""){const c=Number(t.trim());Number.isNaN(c)||(n=c)}if(n===null)throw new Error("Scenario must include a valid numeric waterLevel.");const i=e.name&&String(e.name).trim()||`Scenario ${n.toFixed(1)}m MSL`,r=`scen-${Date.now()}-${Math.floor(Math.random()*1e3)}`;let o=124;if(typeof e.baselineWaterLevel=="number"&&!Number.isNaN(e.baselineWaterLevel))o=Math.round(e.baselineWaterLevel*100)/100;else if(typeof e.baselineWaterLevel=="string"&&e.baselineWaterLevel.trim()!==""){const c=Number(e.baselineWaterLevel.trim());Number.isNaN(c)||(o=Math.round(c*100)/100)}const a={id:r,name:i,waterLevel:Math.round(n*100)/100,profileMode:e.profileMode==="slope"?"slope":"planar",connectedOnly:e.connectedOnly!==!1,baselineWaterLevel:o,isBuiltIn:!1,notes:String(e.notes||""),createdAt:new Date().toISOString(),summarySnapshot:e.summarySnapshot||null},l=this.getScenarios();return l.push(a),this._persist(l),a}updateScenario(e,t={}){const n=this.getScenarios(),i=n.findIndex(a=>a.id===e);if(i===-1)return null;const r=n[i],o={...r,...t,id:r.id,isBuiltIn:r.isBuiltIn,updatedAt:new Date().toISOString()};return n[i]=o,this._persist(n),o}deleteScenario(e){const t=this.getScenarios(),n=t.findIndex(i=>i.id===e);return n===-1?!1:(t.splice(n,1),this._persist(t),!0)}_persist(e){if(this.isStorageAvailable)try{window.localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(t){console.warn("[ScenarioManager] LocalStorage write failed, falling back to in-memory:",t),this.isStorageAvailable=!1,this.storageErrorMessage=`Storage write failed (${t.message}). Data kept in-memory for session.`}this.inMemoryStore.clear(),e.forEach(t=>this.inMemoryStore.set(t.id,t))}compareScenarios(e,t,n){if(!e||!t||!n)throw new Error("compareScenarios requires baselineScenario, targetScenario, and comparisonService.");return n.setBaselineScenario(e.waterLevel),n.evaluateScenario(t.waterLevel)}generateCSVReport({scenario:e,comparison:t,rankedBuildings:n=[],shelterAssessments:i=[],dataQuality:r}={}){const o=e||{},a=o.name||"Active Simulation",l=typeof o.waterLevel=="number"&&!Number.isNaN(o.waterLevel)?o.waterLevel:124,c=t||{},d=typeof c.baselineWaterLevel=="number"&&!Number.isNaN(c.baselineWaterLevel)?c.baselineWaterLevel:124,h=c.buildings||{},u=c.roads||{},p=c.shelters||{},g=Array.isArray(n)?n:[],v=Array.isArray(i)?i:[],m=new Date().toISOString(),f=[];f.push("=== HIGHWATER 3D — SCENARIO ANALYSIS REPORT ==="),f.push(`Report Generated,${Ze(m)}`),f.push(`Scenario Name,${Ze(a)}`),f.push(`Modeled Water Surface (MSL),${l.toFixed(2)} m`),f.push(`Baseline Water Surface (MSL),${d.toFixed(2)} m`),f.push(`Profile Mode,${Ze(o.profileMode||"planar")}`),f.push(""),f.push("=== SCENARIO COMPARISON METRICS (BASELINE VS CURRENT) ==="),f.push("Metric,Value,Denominator,Unit,Description"),f.push(`Total Buildings Evaluated,${h.totalEvaluated??0},${h.totalEvaluated??0},count,Total structures in dataset`),f.push(`Valid Evaluated Buildings,${h.validDenominator??0},${h.totalEvaluated??0},count,Structures with valid DGM1 bare-earth elevation`),f.push(`Unknown/NoData DEM Buildings,${h.unknownCount??0},${h.totalEvaluated??0},count,Structures excluded from percentage denominators`),f.push(`Newly Affected Buildings,+${h.newlyAffectedCount??0},${h.validDenominator??0},${h.newlyAffectedPercent??0}%,Buildings transitioning from dry to positive water depth`),f.push(`Exposure Category Escalations,+${h.escalatedCount??0},${h.validDenominator??0},${h.escalatedPercent??0}%,Buildings moving into a higher flood exposure category`),f.push(`Evacuation Route Lost (Flood-Isolated),${h.routeLostCount??0},${h.validDenominator??0},${h.routeLostPercent??0}%,Buildings with baseline route now blocked by impassable roads`),f.push(`Disconnected in Baseline Source Data,${h.disconnectedInSourceCount??0},${h.validDenominator??0},count,Buildings on isolated road components without baseline shelter path`),f.push(`Connected Buildings,${h.connectedCount??0},${h.validDenominator??0},count,Buildings with dry passable corridor to active shelter`),f.push(`Total Road Segments,${u.totalRoadEdges??0},${u.totalRoadEdges??0},count,Total road edges in topological graph`),f.push(`Baseline Impassable Road Segments,${u.baselineImpassable??0},${u.totalRoadEdges??0},count,Road edges impassable at baseline water level`),f.push(`Newly Impassable Road Segments,+${u.newlyImpassable??0},${u.totalRoadEdges??0},${u.newlyImpassablePercent??0}%,Road edges crossing >=0.15m conservative impassability depth`),f.push(`Unknown Road Segments,${u.currentUnknown??0},${u.totalRoadEdges??0},count,Road edges missing elevation data (treated as impassable under conservative policy)`),f.push(`Shelters Operational,${p.operational??0},${p.total??0},count,Simulated emergency shelters with dry road access`),f.push(`Shelters Isolated by Flooded Roads,${p.isolatedByRoads??0},${p.total??0},count,Dry shelter sites cut off by submerged access roads`),f.push(`Shelters Inundated,${p.inundated??0},${p.total??0},count,Shelter ground sites submerged below water surface`),f.push(`Shelters Disconnected in Baseline Source Data,${p.disconnectedInSource??0},${p.total??0},count,Shelters on disconnected road components (not flood-caused)`),f.push(`Shelters Unknown Status,${p.unknown??0},${p.total??0},count,Shelters with missing ground or water elevation`),f.push(""),f.push("=== SHELTER & EMERGENCY FACILITY EVALUATION ==="),f.push("Shelter ID,Name,Provenance,Site Elevation (MSL),Modeled Water (MSL),Site Depth (m),Site Inundation Status,Road Corridor Status,Connecting Node,Verification Notice");for(const _ of v)_&&f.push([Ze(_.id),Ze(_.name),Ze(_.provenance||"simulated"),typeof _.groundElevation=="number"&&!Number.isNaN(_.groundElevation)?_.groundElevation.toFixed(2):"Unknown",typeof _.waterElevation=="number"&&!Number.isNaN(_.waterElevation)?_.waterElevation.toFixed(2):"N/A",typeof _.siteWaterDepth=="number"&&!Number.isNaN(_.siteWaterDepth)?_.siteWaterDepth.toFixed(2):"Unknown",_.isSiteInundated?"SUBMERGED":"DRY",Ze(_.accessStatus||"operational"),Ze(_.roadNodeId||"None"),"Simulated unverified facility record. Not an official municipal emergency shelter."].join(","));f.push(""),f.push("=== BUILDING FLOOD RISK RANKINGS & ACCESSIBILITY ==="),f.push("Rank,Building ID,Priority Tier,Total Risk Score (0-100),Flood Score (0-50),Road Score (0-25),Service Score (0-25),Exposure Category,Ground Depth (m),Footprint %,Base Elevation (MSL),Road Access Status,Reachable Shelter,Data Quality Warning"),g.forEach((_,x)=>{if(!_)return;const L=_.risk||{},R=L.subScores||{},A=_.exposure||{},w=_.access||{},M=L.isUnknown||A.category==="unknown";f.push([x+1,Ze(_.id),Ze(L.priorityTier||"low"),L.totalScore??0,R.floodExposure??0,R.roadAccess??0,R.emergencyService??0,Ze(A.category||"unaffected"),typeof A.waterDepth=="number"&&!Number.isNaN(A.waterDepth)?A.waterDepth.toFixed(2):"Unknown",M?"Indeterminate":`${Math.round((A.affectedRatio||(A.waterDepth>0?1:0))*100)}%`,typeof _.baseElevationM=="number"&&!Number.isNaN(_.baseElevationM)?_.baseElevationM.toFixed(2):"NoData",Ze(w.status||"connected"),Ze(w.nearestShelter?.name||(w.canReachShelter?"Shelter":"None")),M?"Missing or NoData DGM1 elevation. Data uncertainty penalty applied.":"None"].join(","))}),f.push(""),f.push("=== DATA INTEGRITY, UNCERTAINTY & PROVENANCE AUDIT ==="),f.push("Category,Status,Indicator,Details");const y=r||{};return f.push(`DEM Coverage,${Ze(y.demCoverage?.status||"Verified")},${Ze(y.demCoverage?.label||"DGM1 Coverage")},${Ze(y.demCoverage?.description||"Official Rhineland-Palatinate DGM1 bare-earth LiDAR")}`),f.push(`Road Flood Classification,${Ze(y.roadClassification?.status||"Evaluated")},${Ze(y.roadClassification?.label||"Evaluated")},${Ze(y.roadClassification?.description||"Roads crossing water depth >=0.15m marked impassable")}`),f.push(`Road Graph Topology,${Ze(y.roadTopology?.status||"Disconnected")},${Ze(y.roadTopology?.label||"Disconnected Components")},${Ze(y.roadTopology?.description||"Pre-existing source data disconnections preserved")}`),f.push(`Emergency Facility Provenance,${Ze(y.facilityProvenance?.status||"Unverified")},${Ze(y.facilityProvenance?.label||"Simulated Facilities")},${Ze(y.facilityProvenance?.description||"Simulated facilities only; no verified municipal hospital")}`),f.push(`Proposed Candidate Sites,${Ze(y.proposedSites?.status||"Proposed")},${Ze(y.proposedSites?.label||"Proposed Sites")},${Ze(y.proposedSites?.description||"Candidate staging sites vetted for elevation only; non-operational")}`),f.push(`Spatial Snapping,${Ze(y.spatialSnapping?.status||"Approximate")},${Ze(y.spatialSnapping?.label||"Centroid Snapping")},${Ze(y.spatialSnapping?.description||"Centroid 2D Euclidean distance used for network snapping")}`),f.push(""),f.push("=== MODEL ASSUMPTIONS & LEGAL DISCLAIMER ==="),f.push("1. Conceptual decision-support indicator only. Not a calibrated hydraulic forecast or certified structural engineering assessment."),f.push("2. Ground-contact depth reflects bare-earth DGM1 LiDAR terrain intersection; it does not prove interior building flooding or occupant hazard."),f.push("3. All emergency facilities are simulated/proposed; no verified municipal emergency hospital exists in source data (absence does not prove real-world lack of facilities)."),f.push("4. Topological road network contains 67 disconnected source components; buildings without baseline connectivity are designated disconnected_in_source."),f.push("5. Conservative routing policy penalizes waterlogged segments and excludes roads with depth >=0.15m or unknown elevation."),f.join(`\r
`)}generateHTMLReport({scenario:e,comparison:t,rankedBuildings:n=[],shelterAssessments:i=[],dataQuality:r}={}){const o=e||{},a=o.name||"Active Simulation",l=wt(a),c=typeof o.waterLevel=="number"&&!Number.isNaN(o.waterLevel)?o.waterLevel:124,d=t||{},h=typeof d.baselineWaterLevel=="number"&&!Number.isNaN(d.baselineWaterLevel)?d.baselineWaterLevel:124,u=d.buildings||{},p=d.roads||{},g=d.shelters||{},v=r||{},m=Array.isArray(n)?n:[],f=Array.isArray(i)?i:[],y=new Date().toLocaleString("en-US",{dateStyle:"long",timeStyle:"short"}),_=m.filter(M=>M?.risk?.priorityTier==="critical").length,x=m.filter(M=>M?.risk?.priorityTier==="high").length,L=m.filter(M=>M?.risk?.priorityTier==="moderate").length,R=m.filter(M=>M?.risk?.priorityTier==="low").length,A=u.unknownCount||0,w=m.slice(0,50);return`<!DOCTYPE html>
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
</html>`}downloadCSV(e,t="highwater3d_scenario_report.csv"){const n=new Blob([e],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(n),r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}openPrintReport(e){const t=window.open("","_blank");t?(t.document.write(e),t.document.close()):console.warn("[ScenarioManager] Popup blocked. Unable to open report window.")}}class Qg{constructor({viewer:e,controls:t,terrainManager:n,overlayManager:i,floodWaterManager:r=null}){this.viewer=e,this.controls=t,this.terrainManager=n,this.overlayManager=i||null,this.floodWaterManager=r||null,this.scenarioManager=new Jg,this.scenarioToDeleteId=null,this.activeScenarioId="scen-baseline-124",this.cacheDOMElements(),this.telemetry=new jg(this.dom),this.hoveredFeature=null,this.selectedFeature=null,this.lastInspectUpdate=0,this.activeRoute=null,this.activeAlternative=null,this.showAlternative=!1,this.buildingRiskData=null,this.scenarioDiffData=null,this.riskSortMode="risk",this.accessLostActive=!1,this.overlayManager&&(this.overlayManager.onRouteRecalculated=(o,a)=>{this.onRouteUpdated(o,a)},this.overlayManager.onScenarioComparisonUpdated=o=>{this.renderScenarioComparison(o)},this.overlayManager.onBuildingRiskUpdated=o=>{this.renderRiskRanking(o)}),this.eventListeners=[],this.bindEvents()}cacheDOMElements(){this.dom={viewportContainer:document.getElementById("viewport-container"),loadingOverlay:document.getElementById("loading-overlay"),loadingStatusText:document.getElementById("loading-status-text"),loadingProgressFill:document.getElementById("loading-progress-fill"),errorOverlay:document.getElementById("error-overlay"),errorMsgText:document.getElementById("error-msg-text"),btnErrorRetry:document.getElementById("btn-error-retry"),provenanceBadge:document.getElementById("provenance-badge"),dataNotice:document.getElementById("data-notice"),btnCloseNotice:document.getElementById("btn-close-notice"),fpsCounter:document.getElementById("fps-counter"),camPos:document.getElementById("cam-pos"),targetPos:document.getElementById("target-pos"),camAlt:document.getElementById("cam-alt"),camAngles:document.getElementById("cam-angles"),cursorPos:document.getElementById("cursor-pos"),compassNeedle:document.getElementById("compass-needle"),drawCalls:document.getElementById("diag-draw-calls"),triangles:document.getElementById("diag-triangles"),frameTime:document.getElementById("diag-frame-time"),hudInspector:document.getElementById("hud-inspector"),inspectTag:document.getElementById("inspect-tag"),inspectContent:document.getElementById("inspect-content"),btnViewIso:document.getElementById("btn-view-iso"),btnViewTop:document.getElementById("btn-view-top"),btnResetCam:document.getElementById("btn-reset-cam"),btnToggleWireframe:document.getElementById("btn-toggle-wireframe"),btnToggleGrid:document.getElementById("btn-toggle-grid"),btnToggleBlds:document.getElementById("btn-toggle-blds"),btnToggleRoads:document.getElementById("btn-toggle-roads"),btnToggleFacs:document.getElementById("btn-toggle-facs"),btnToggleFlood:document.getElementById("btn-toggle-flood"),btnToggleWater:document.getElementById("btn-toggle-water"),waterLevelSlider:document.getElementById("water-level-slider"),waterLevelVal:document.getElementById("water-level-val"),btnWaterPlay:document.getElementById("btn-water-play"),btnWaterReset:document.getElementById("btn-water-reset"),btnToggleConnectivity:document.getElementById("btn-toggle-connectivity"),impactBadge:document.getElementById("impact-badge"),impactStatsText:document.getElementById("impact-stats-text"),btnToggleProfile:document.getElementById("btn-toggle-profile"),btnToggleDepth:document.getElementById("btn-toggle-depth"),btnTogglePassability:document.getElementById("btn-toggle-passability"),hudLegend:document.getElementById("hud-legend"),btnRouteShelter:document.getElementById("btn-route-shelter"),btnRouteHospital:document.getElementById("btn-route-hospital"),btnRouteAlt:document.getElementById("btn-route-alt"),btnRouteClear:document.getElementById("btn-route-clear"),btnToggleClusters:document.getElementById("btn-toggle-clusters"),btnToggleProposed:document.getElementById("btn-toggle-proposed"),hudScenarioDiff:document.getElementById("hud-scenario-diff"),scenarioBaselineTag:document.getElementById("scenario-baseline-tag"),btnSetBaseline:document.getElementById("btn-set-baseline"),btnToggleAccessLost:document.getElementById("btn-toggle-access-lost"),btnToggleRiskPanel:document.getElementById("btn-toggle-risk-panel"),btnDockRisk:document.getElementById("btn-dock-risk"),diffNewBlds:document.getElementById("diff-new-blds"),diffRouteLost:document.getElementById("diff-route-lost"),diffNewRoads:document.getElementById("diff-new-roads"),diffIsolatedShelters:document.getElementById("diff-isolated-shelters"),hudRiskPanel:document.getElementById("hud-risk-panel"),btnCloseRisk:document.getElementById("btn-close-risk"),riskSummaryCounts:document.getElementById("risk-summary-counts"),riskListContainer:document.getElementById("risk-list-container"),sortRisk:document.getElementById("sort-risk"),sortDepth:document.getElementById("sort-depth"),sortLost:document.getElementById("sort-lost"),btnOpenScenarios:document.getElementById("btn-open-scenarios"),btnExportReport:document.getElementById("btn-export-report"),btnDockScenarios:document.getElementById("btn-dock-scenarios"),btnDockExport:document.getElementById("btn-dock-export"),hudScenarioPanel:document.getElementById("hud-scenario-panel"),scenarioPanelCount:document.getElementById("scenario-panel-count"),btnCloseScenarios:document.getElementById("btn-close-scenarios"),scenarioStorageNotice:document.getElementById("scenario-storage-notice"),inputScenarioName:document.getElementById("input-scenario-name"),btnSaveScenario:document.getElementById("btn-save-scenario"),selectCompareBaseline:document.getElementById("select-compare-baseline"),selectCompareTarget:document.getElementById("select-compare-target"),btnExecuteCompare:document.getElementById("btn-execute-compare"),btnScenarioExportCsv:document.getElementById("btn-scenario-export-csv"),btnScenarioExportReport:document.getElementById("btn-scenario-export-report"),scenarioListContainer:document.getElementById("scenario-list-container"),reportExportOverlay:document.getElementById("report-export-overlay"),btnCloseExportModal:document.getElementById("btn-close-export-modal"),btnDownloadCsv:document.getElementById("btn-download-csv"),btnOpenPrintReport:document.getElementById("btn-open-print-report"),exportPreviewContainer:document.getElementById("export-preview-container"),deleteConfirmModal:document.getElementById("delete-confirm-modal"),btnConfirmDelete:document.getElementById("btn-confirm-delete"),btnCancelDelete:document.getElementById("btn-cancel-delete"),btnToggleDataQuality:document.getElementById("btn-toggle-data-quality"),btnPillIntegrity:document.getElementById("btn-pill-integrity"),btnDockIntegrity:document.getElementById("btn-dock-integrity"),hudDataQuality:document.getElementById("hud-data-quality"),btnCloseDataQuality:document.getElementById("btn-close-data-quality"),dqContent:document.getElementById("dq-content"),dqHeaderTag:document.getElementById("dq-header-tag")}}bindEvents(){this.addEvent(this.dom.btnViewIso,"click",()=>{this.setActivePresetBtn(this.dom.btnViewIso),this.controls.setPerspectiveIso()}),this.addEvent(this.dom.btnViewTop,"click",()=>{this.setActivePresetBtn(this.dom.btnViewTop),this.controls.setTopDown()}),this.addEvent(this.dom.btnResetCam,"click",()=>{this.setActivePresetBtn(this.dom.btnViewIso),this.controls.reset()}),this.addEvent(this.dom.btnToggleWireframe,"click",()=>{const n=this.terrainManager.toggleWireframe();this.dom.btnToggleWireframe.classList.toggle("active",n)});let e=!0;this.addEvent(this.dom.btnToggleGrid,"click",()=>{e=!e,this.viewer.setGridVisible(e),this.dom.btnToggleGrid.classList.toggle("active",e)}),this.dom.btnToggleBlds&&this.addEvent(this.dom.btnToggleBlds,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleBuildings();this.dom.btnToggleBlds.classList.toggle("active",n)}),this.dom.btnToggleRoads&&this.addEvent(this.dom.btnToggleRoads,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleRoads();this.dom.btnToggleRoads.classList.toggle("active",n)}),this.dom.btnToggleFacs&&this.addEvent(this.dom.btnToggleFacs,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleFacilities();this.dom.btnToggleFacs.classList.toggle("active",n)}),this.dom.btnToggleFlood&&this.addEvent(this.dom.btnToggleFlood,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleHistoricalFlood();this.dom.btnToggleFlood.classList.toggle("active",n)}),this.dom.btnToggleWater&&this.addEvent(this.dom.btnToggleWater,"click",()=>{if(!this.floodWaterManager)return;const n=this.floodWaterManager.setVisible();this.dom.btnToggleWater.classList.toggle("active",n)}),this.dom.waterLevelSlider&&this.addEvent(this.dom.waterLevelSlider,"input",n=>{if(!this.floodWaterManager)return;const i=parseFloat(n.target.value);this.floodWaterManager.setWaterLevel(i),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${i.toFixed(2)} m`)}),this.dom.btnWaterPlay&&this.addEvent(this.dom.btnWaterPlay,"click",()=>{if(!this.floodWaterManager)return;const n=this.floodWaterManager.togglePlayPause();this.dom.btnWaterPlay.textContent=n?"⏸ Pause":"▶ Rise",this.dom.btnWaterPlay.classList.toggle("active",n)}),this.dom.btnWaterReset&&this.addEvent(this.dom.btnWaterReset,"click",()=>{this.floodWaterManager&&(this.floodWaterManager.reset(),this.dom.waterLevelSlider&&(this.dom.waterLevelSlider.value=this.floodWaterManager.defaultWaterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${this.floodWaterManager.defaultWaterLevel.toFixed(2)} m`),this.dom.btnWaterPlay&&(this.dom.btnWaterPlay.textContent="▶ Rise",this.dom.btnWaterPlay.classList.remove("active")))}),this.dom.btnToggleConnectivity&&this.addEvent(this.dom.btnToggleConnectivity,"click",()=>{if(!this.floodWaterManager)return;const n=this.floodWaterManager.setConnectivity();this.dom.btnToggleConnectivity.textContent=n?"🌊 Connected: ON":"🌊 Connected: OFF",this.dom.btnToggleConnectivity.classList.toggle("active",n)}),this.dom.btnToggleProfile&&this.addEvent(this.dom.btnToggleProfile,"click",()=>{if(!this.floodWaterManager)return;const i=this.floodWaterManager.profileMode==="planar"?"slope":"planar";this.floodWaterManager.setProfileMode(i),this.dom.btnToggleProfile.textContent=i==="slope"?"📐 Profile: Slope-Aware":"📐 Profile: Planar",this.dom.btnToggleProfile.classList.toggle("active",i==="slope")}),this.dom.btnToggleDepth&&this.addEvent(this.dom.btnToggleDepth,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleBuildingDepthMode();this.dom.btnToggleDepth.textContent=n?"🎨 Depth: ON":"🎨 Depth: OFF",this.dom.btnToggleDepth.classList.toggle("active",n)}),this.dom.btnTogglePassability&&this.addEvent(this.dom.btnTogglePassability,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleRoadPassabilityMode();this.dom.btnTogglePassability.textContent=n?"🛣️ Passability: ON":"🛣️ Passability: OFF",this.dom.btnTogglePassability.classList.toggle("active",n)}),this.addEvent(this.dom.btnCloseNotice,"click",()=>{this.dom.dataNotice&&this.dom.dataNotice.classList.add("hidden")}),this.addEvent(this.dom.viewportContainer,"mousemove",n=>{const i=this.dom.viewportContainer.getBoundingClientRect();this.telemetry.setMouseCoords(n.clientX,n.clientY,i)}),this.addEvent(this.dom.viewportContainer,"click",n=>{if(!this.overlayManager||!this.viewer)return;const i=this.dom.viewportContainer.getBoundingClientRect(),r={x:(n.clientX-i.left)/i.width*2-1,y:-((n.clientY-i.top)/i.height)*2+1},o=this.overlayManager.inspectFeature(r,this.viewer.camera);this.selectedFeature=o,this.renderFeatureInspection(o)}),this.addEvent(this.dom.btnErrorRetry,"click",()=>{window.location.reload()}),this.dom.btnRouteShelter&&this.addEvent(this.dom.btnRouteShelter,"click",()=>{this.executeRoute("shelter")}),this.dom.btnRouteHospital&&this.addEvent(this.dom.btnRouteHospital,"click",()=>{this.executeRoute("hospital")}),this.dom.btnRouteAlt&&this.addEvent(this.dom.btnRouteAlt,"click",()=>{this.toggleAlternativeRoute()}),this.dom.btnRouteClear&&this.addEvent(this.dom.btnRouteClear,"click",()=>{this.overlayManager&&this.overlayManager.clearRoute()}),this.dom.btnToggleClusters&&this.addEvent(this.dom.btnToggleClusters,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleClusters();this.dom.btnToggleClusters.classList.toggle("active",n)}),this.dom.btnToggleProposed&&this.addEvent(this.dom.btnToggleProposed,"click",()=>{if(!this.overlayManager)return;const n=this.overlayManager.toggleProposedSites();this.dom.btnToggleProposed.classList.toggle("active",n)}),this.dom.btnSetBaseline&&this.addEvent(this.dom.btnSetBaseline,"click",()=>{this.setBaselineFromCurrent()}),this.dom.btnToggleAccessLost&&this.addEvent(this.dom.btnToggleAccessLost,"click",()=>{this.toggleAccessLostHighlights()}),this.dom.btnToggleRiskPanel&&this.addEvent(this.dom.btnToggleRiskPanel,"click",()=>{this.toggleRiskPanel()}),this.dom.btnDockRisk&&this.addEvent(this.dom.btnDockRisk,"click",()=>{this.toggleRiskPanel()}),this.dom.btnCloseRisk&&this.addEvent(this.dom.btnCloseRisk,"click",()=>{this.dom.hudRiskPanel&&this.dom.hudRiskPanel.classList.remove("active")}),this.dom.sortRisk&&this.addEvent(this.dom.sortRisk,"click",()=>{this.setRiskSortMode("risk")}),this.dom.sortDepth&&this.addEvent(this.dom.sortDepth,"click",()=>{this.setRiskSortMode("depth")}),this.dom.sortLost&&this.addEvent(this.dom.sortLost,"click",()=>{this.setRiskSortMode("lost")}),this.dom.btnOpenScenarios&&this.addEvent(this.dom.btnOpenScenarios,"click",()=>{this.toggleScenarioPanel()}),this.dom.btnDockScenarios&&this.addEvent(this.dom.btnDockScenarios,"click",()=>{this.toggleScenarioPanel()}),this.dom.btnCloseScenarios&&this.addEvent(this.dom.btnCloseScenarios,"click",()=>{this.closeScenarioPanel()}),this.dom.btnSaveScenario&&this.addEvent(this.dom.btnSaveScenario,"click",()=>{this.saveCurrentScenario()}),this.dom.inputScenarioName&&this.addEvent(this.dom.inputScenarioName,"keydown",n=>{n.key==="Enter"&&this.saveCurrentScenario()}),this.dom.btnExecuteCompare&&this.addEvent(this.dom.btnExecuteCompare,"click",()=>{this.compareSelectedScenarios()}),this.dom.btnExportReport&&this.addEvent(this.dom.btnExportReport,"click",()=>{this.openExportModal()}),this.dom.btnDockExport&&this.addEvent(this.dom.btnDockExport,"click",()=>{this.openExportModal()}),this.dom.btnScenarioExportCsv&&this.addEvent(this.dom.btnScenarioExportCsv,"click",()=>{this.downloadScenarioCSV()}),this.dom.btnScenarioExportReport&&this.addEvent(this.dom.btnScenarioExportReport,"click",()=>{this.openExportModal()}),this.dom.btnCloseExportModal&&this.addEvent(this.dom.btnCloseExportModal,"click",()=>{this.closeExportModal()}),this.dom.btnDownloadCsv&&this.addEvent(this.dom.btnDownloadCsv,"click",()=>{this.downloadScenarioCSV()}),this.dom.btnOpenPrintReport&&this.addEvent(this.dom.btnOpenPrintReport,"click",()=>{this.openScenarioPrintReport()}),this.dom.btnConfirmDelete&&this.addEvent(this.dom.btnConfirmDelete,"click",()=>{this.executeDeleteScenario()}),this.dom.btnCancelDelete&&this.addEvent(this.dom.btnCancelDelete,"click",()=>{this.cancelDeleteScenario()});const t=()=>this.toggleDataQualityPanel();this.dom.btnToggleDataQuality&&this.addEvent(this.dom.btnToggleDataQuality,"click",t),this.dom.btnPillIntegrity&&this.addEvent(this.dom.btnPillIntegrity,"click",t),this.dom.btnDockIntegrity&&this.addEvent(this.dom.btnDockIntegrity,"click",t),this.dom.btnCloseDataQuality&&this.addEvent(this.dom.btnCloseDataQuality,"click",()=>{this.dom.hudDataQuality&&this.dom.hudDataQuality.classList.add("hidden")})}setActivePresetBtn(e){[this.dom.btnViewIso,this.dom.btnViewTop].forEach(t=>{t&&t.classList.remove("active")}),e&&e.classList.add("active")}setFloodWaterManager(e){this.floodWaterManager=e,this.floodWaterManager&&(this.floodWaterManager.onImpactUpdate=t=>{if(this.dom.waterLevelSlider&&Math.abs(parseFloat(this.dom.waterLevelSlider.value)-t.waterLevel)>.05&&(this.dom.waterLevelSlider.value=t.waterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${t.waterLevel.toFixed(2)} m`),this.dom.impactStatsText){const n=t.buildingDepthBreakdown||{shallow:0,moderate:0,deep:0},i=t.roadPassabilityBreakdown||{waterlogged:0,submerged:0},r=t.shelterAccessibilityBreakdown||{isolated:0,inundated:0},o=(n.shallow||0)+(n.moderate||0)+(n.deep||0),a=(i.waterlogged||0)+(i.submerged||0),l=(r.isolated||0)+(r.inundated||0);this.dom.impactStatsText.textContent=`Bld: ${o}/${t.totalBuildings} (S:${n.shallow} M:${n.moderate} D:${n.deep}) | Rds: ${a}/${t.totalRoads} (${i.submerged} cut) | Shelters: ${l}/${t.totalFacilities} (${r.isolated} iso)`}this.dom.btnWaterPlay&&!this.floodWaterManager.isPlaying&&this.dom.btnWaterPlay.classList.contains("active")&&(this.dom.btnWaterPlay.textContent="▶ Rise",this.dom.btnWaterPlay.classList.remove("active"))})}addEvent(e,t,n){e&&(e.addEventListener(t,n),this.eventListeners.push({target:e,event:t,handler:n}))}setLoadingProgress(e,t){this.dom.loadingStatusText&&(this.dom.loadingStatusText.textContent=e),this.dom.loadingProgressFill&&(this.dom.loadingProgressFill.style.width=`${Math.min(Math.max(t,0),100)}%`)}hideLoading(){this.dom.loadingOverlay&&(this.dom.loadingOverlay.classList.add("fade-out"),setTimeout(()=>{this.dom.loadingOverlay&&(this.dom.loadingOverlay.style.display="none")},350))}showError(e){this.dom.errorMsgText&&(this.dom.errorMsgText.textContent=e),this.dom.errorOverlay&&this.dom.errorOverlay.classList.remove("hidden"),this.dom.loadingOverlay&&(this.dom.loadingOverlay.style.display="none")}setTerrainProvenanceReal(e){if(this.dom.provenanceBadge&&(this.dom.provenanceBadge.className="provenance-badge real-dem-badge",this.dom.provenanceBadge.title=`${e.label}
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
      `;const t=document.getElementById("btn-close-notice");t&&t.addEventListener("click",()=>{this.dom.dataNotice.classList.add("hidden")})}}selectFeature(e){this.selectedFeature=e,this.renderFeatureInspection(e)}renderFeatureInspection(e){if(!(!this.dom.inspectContent||!this.dom.inspectTag)){if(!e){if(this.activeRoute){this.renderRouteSummary(this.activeRoute,this.activeAlternative);return}this.hoveredFeature!==null&&(this.hoveredFeature=null,this.dom.inspectTag.className="status-pill info",this.dom.inspectTag.textContent="HOVER OVER OBJECT",this.dom.inspectContent.innerHTML=`
          <p class="inspect-placeholder font-mono text-muted">
            Hover over a 3D building, road segment, or emergency facility pin to inspect verified attributes. Click to select as route origin.
          </p>`,this.dom.hudInspector&&this.dom.hudInspector.classList.remove("active"));return}if(!(this.hoveredFeature&&this.hoveredFeature.id===e.id)){if(this.hoveredFeature=e,this.dom.hudInspector&&this.dom.hudInspector.classList.add("active"),e.kind==="building"){const t=e.riskEvaluation;if(t){const n=t.exposure||{},i=t.access||{},r=t.risk||{},o=r.subScores||{floodExposure:0,roadAccess:0,emergencyService:0},a=r.priorityTier||"LOW",l=r.totalScore??0,c=typeof n.waterDepth=="number"?n.waterDepth:typeof e.currentWaterDepth=="number"?e.currentWaterDepth:0,d=r.isUnknown||n.category==="UNKNOWN";let h="success";a==="CRITICAL"||a==="HIGH"?h="danger":a==="MODERATE"?h="warning":a==="UNKNOWN"&&(h="info"),this.dom.inspectTag.className=`status-pill ${h}`,this.dom.inspectTag.textContent=`${a} (${l}/100)`;const u=Math.round((n.affectedRatio||(c>.05?1:0))*100),p=i.status==="route_lost"?'<span class="chip-access-lost font-mono font-bold">ROUTE LOST (Flood Cut-Off)</span>':i.status==="disconnected_in_source"?'<span class="chip-access-disc font-mono">DISCONNECTED IN SOURCE</span>':i.status==="access_degraded"?'<span class="chip-access-deg font-mono">ACCESS DEGRADED</span>':i.status==="unknown"?'<span class="chip-access-unk font-mono">UNKNOWN ACCESS</span>':'<span class="chip-access-conn font-mono">CONNECTED</span>',g=i.canReachShelter?`<span class="chip-prop-viable font-mono">${i.nearestShelter?.name||"Shelter"} (${(i.shelterRouteStatus||"DRY").toUpperCase()})</span>`:'<span class="chip-prop-flooded font-mono font-bold">NO REACHABLE SHELTER</span>',v=d?`
          <div class="inspect-alert-box" style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);padding:6px 8px;border-radius:4px;margin-bottom:8px;font-size:11px;color:#fca5a5;">
            ⚠️ <strong>DATA QUALITY WARNING:</strong> Missing or NoData DGM1 bare-earth DEM elevation at structure centroid. Data uncertainty penalty (+30 pts) applied. Not treated as safe.
          </div>
        `:"";this.dom.inspectContent.innerHTML=`
          <div class="inspect-card">
            <div class="inspect-title-row">
              <span class="inspect-title font-mono">Structure ${e.id}</span>
              <span class="score-badge ${l>=70?"score-high":l>=40?"score-mid":"score-low"}">${l}/100</span>
            </div>

            ${v}

            <div class="risk-subscores-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin:6px 0 10px;padding:6px;background:rgba(255,255,255,0.03);border-radius:4px;border:1px solid rgba(255,255,255,0.06);font-size:11px;">
              <div style="text-align:center;">
                <div class="text-muted" style="font-size:10px;">Flood Exp</div>
                <div class="font-mono font-bold ${o.floodExposure>=35?"text-rose":o.floodExposure>=20?"text-amber":"text-emerald"}">${o.floodExposure}/50</div>
                <div class="text-muted" style="font-size:9px;">${n.category||"UNAFFECTED"}</div>
              </div>
              <div style="text-align:center;border-left:1px solid rgba(255,255,255,0.08);border-right:1px solid rgba(255,255,255,0.08);">
                <div class="text-muted" style="font-size:10px;">Road Access</div>
                <div class="font-mono font-bold ${o.roadAccess>=20?"text-rose":o.roadAccess>=12?"text-amber":"text-emerald"}">${o.roadAccess}/25</div>
                <div class="text-muted" style="font-size:9px;">${i.status?i.status.replace(/_/g," "):"connected"}</div>
              </div>
              <div style="text-align:center;">
                <div class="text-muted" style="font-size:10px;">Services</div>
                <div class="font-mono font-bold ${o.emergencyService>=20?"text-rose":o.emergencyService>=12?"text-amber":"text-emerald"}">${o.emergencyService}/25</div>
                <div class="text-muted" style="font-size:9px;">${i.canReachShelter?"Reachable":"Isolated"}</div>
              </div>
            </div>

            <div class="inspect-meta-grid">
              <div class="inspect-row">
                <span class="inspect-label">Modeled Depth:</span>
                <span class="inspect-val font-mono ${c>.05?"text-amber font-bold":""}">${d?"Unknown DEM":c>.05?`${c.toFixed(2)} m`:"0.00 m (Dry)"}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Affected Footprint:</span>
                <span class="inspect-val font-mono">${d?"Indeterminate":`${u}% (center)`}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Ground Base Elev:</span>
                <span class="inspect-val font-mono">${d?"NoData":`${e.baseElevationM} m MSL`}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Road Network Access:</span>
                <span class="inspect-val">${p}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Reachable Shelter:</span>
                <span class="inspect-val">${g}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Hospital Access:</span>
                <span class="inspect-val text-muted" style="font-size:11px;">⚠️ No verified hospital in source data</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Risk Justification:</span>
                <span class="inspect-val text-muted font-mono" style="font-size:10px;line-height:1.3;">${r.explanation||"Evaluated"}</span>
              </div>
            </div>

            <div class="inspect-route-actions">
              <button class="inspect-route-btn btn-shelter" id="btn-card-shelter" ${i.canReachShelter?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Evac to Shelter</button>
              <button class="inspect-route-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>

            <div class="inspect-disclaimer">
              ⚠️ Conceptual decision-support indicator only. Not a validated life-safety probability or structural assessment. Ground-contact depth does not establish interior flooding.
            </div>
          </div>`;const m=document.getElementById("btn-card-shelter");m&&i.canReachShelter&&m.addEventListener("click",()=>this.executeRoute("shelter"));const f=document.getElementById("btn-card-hospital");f&&f.addEventListener("click",()=>this.executeRoute("hospital"))}else{const n=e.flooded,i=typeof e.modeledWaterElev=="number"?e.modeledWaterElev:this.floodWaterManager?Math.round(this.floodWaterManager.getWaterElevationAt(e.center.x,e.center.z)*100)/100:null,r=typeof e.currentWaterDepth=="number"?e.currentWaterDepth:i!==null?Math.max(0,Math.round((i-e.baseElevationM)*100)/100):0,o=r>.05;let a="DRY",l="success";r>=1.5?(a=`DEEP (${r.toFixed(2)}m)`,l="danger"):r>=.5?(a=`MODERATE (${r.toFixed(2)}m)`,l="danger"):r>.05&&(a=`SHALLOW (${r.toFixed(2)}m)`,l="info"),this.dom.inspectTag.className=`status-pill ${l}`,this.dom.inspectTag.textContent=a,this.dom.inspectContent.innerHTML=`
          <div class="inspect-card">
            <div class="inspect-title-row">
              <span class="inspect-title font-mono">Structure ${e.id}</span>
              <span class="inspect-val font-mono">${e.areaSqM} m²</span>
            </div>
            <div class="inspect-meta-grid">
              <div class="inspect-row">
                <span class="inspect-label">Modeled Depth:</span>
                <span class="inspect-val ${o?"text-amber":""}">${r>.05?`${r.toFixed(2)} m`:"0.00 m (Dry)"}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Base Elevation:</span>
                <span class="inspect-val">${e.baseElevationM} m MSL</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Water Surface:</span>
                <span class="inspect-val">${i!==null?`${i.toFixed(2)} m MSL`:"Off"}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">SpaceNet 8 (Jul 2021):</span>
                <span class="inspect-val">${n?"Flooded":"Normal"}</span>
              </div>
              <div class="inspect-row">
                <span class="inspect-label">Structure Height:</span>
                <span class="inspect-val">${e.heightM} m (2 storeys)</span>
              </div>
            </div>
            <div class="inspect-route-actions">
              <button class="inspect-route-btn btn-shelter" id="btn-card-shelter">🏃 Evac to Shelter</button>
              <button class="inspect-route-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>
            <div class="inspect-disclaimer">
              ⚠️ Ground-contact depth only. Does not establish interior flooding, structural damage, or occupant risk.
            </div>
          </div>`;const c=document.getElementById("btn-card-shelter");c&&c.addEventListener("click",()=>this.executeRoute("shelter"));const d=document.getElementById("btn-card-hospital");d&&d.addEventListener("click",()=>this.executeRoute("hospital"))}}else if(e.kind==="road"){const t=e.flooded,n=typeof e.maxWaterDepth=="number"?e.maxWaterDepth:0,i=(e.status||(n>.15?"impassable":n>0?"exposed":"unaffected")).toLowerCase();let r="success",o="UNAFFECTED (DRY)";i==="impassable"||e.passabilityStatus==="submerged"?(r="danger",o=`IMPASSABLE (${n.toFixed(2)}m)`):i==="exposed"||e.passabilityStatus==="waterlogged"?(r="warning",o=`EXPOSED (${n.toFixed(2)}m)`):i==="unknown"&&(r="info",o="UNKNOWN ELEV"),this.dom.inspectTag.className=`status-pill ${r}`,this.dom.inspectTag.textContent=o;const a=e.minElevation!==null&&e.minElevation!==void 0?`${e.minElevation.toFixed(1)}m – ${e.maxElevation.toFixed(1)}m MSL`:e.points&&e.points.length?`${Math.round(e.points[0].y)}m – ${Math.round(e.points[e.points.length-1].y)}m MSL`:"N/A",l=typeof e.exposedLengthMeters=="number"&&e.exposedLengthMeters>0?`${e.exposedLengthMeters.toFixed(1)} m (${Math.round((e.exposedRatio||0)*100)}%)`:"0.0 m (0%)",c=e.componentId?`Component #${e.componentId} (${e.componentSize||1} connected roads)`:"Segment isolated",d=e.statusReason||(i==="impassable"?`Estimated water depth (${n.toFixed(2)}m) exceeds 0.15m impassability threshold`:i==="exposed"?`Estimated water depth (${n.toFixed(2)}m) detected, below 0.15m threshold`:"No positive water depth detected along road geometry (dry)");this.dom.inspectContent.innerHTML=`
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">Road Segment ${e.id}</span>
            <span class="inspect-val font-mono">${e.lengthMeters} m</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Classification:</span>
              <span class="inspect-val ${i==="impassable"?"text-rose font-bold":i==="exposed"?"text-amber font-bold":""}">${i.toUpperCase()}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Max Est. Depth:</span>
              <span class="inspect-val ${n>0?"text-amber":""}">${n>0?`${n.toFixed(2)} m`:"0.00 m (Dry)"}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Exposed Length:</span>
              <span class="inspect-val">${l}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Elevation Range:</span>
              <span class="inspect-val">${a}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Topology Group:</span>
              <span class="inspect-val">${c}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Reason / Assessment:</span>
              <span class="inspect-val text-muted">${d}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">SpaceNet 8 (Jul 2021):</span>
              <span class="inspect-val">${t?"Flooded Cutoff":"Passable Route"}</span>
            </div>
          </div>
          <div class="inspect-route-actions">
            <button class="inspect-route-btn btn-shelter" id="btn-card-shelter-rd">🏃 Evac from Road</button>
            <button class="inspect-route-btn btn-hospital" id="btn-card-hospital-rd">🏥 Route to Hospital</button>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ Model-estimated terrain exposure based on DGM1 bare-earth LiDAR DEM. Does not predict water velocity or real-world road safety.
          </div>
        </div>`;const h=document.getElementById("btn-card-shelter-rd");h&&h.addEventListener("click",()=>this.executeRoute("shelter"));const u=document.getElementById("btn-card-hospital-rd");u&&u.addEventListener("click",()=>this.executeRoute("hospital"))}else if(e.kind==="facility"){const t=e.shelterEvaluation;let n="success",i="OPERATIONAL";const r=t?t.accessStatus:e.accessibilityStatus||"operational",o=t?t.isSiteInundated:typeof e.siteWaterDepth=="number"&&e.siteWaterDepth>.05,a=t?t.siteWaterDepth||0:typeof e.siteWaterDepth=="number"?e.siteWaterDepth:0,l=t?t.groundElevation:e.elevationM,c=t?t.waterElevation:this.floodWaterManager?Math.round(this.floodWaterManager.currentWaterLevel*10)/10:124;o?(n="danger",i="SITE INUNDATED"):r==="isolated"?(n="info",i="ISOLATED BY ROADS (DRY)"):r==="exposed"?(n="warning",i="CORRIDOR EXPOSED"):r==="disconnected"?(n="info",i="DISCONNECTED"):r==="unknown"&&(n="info",i="UNKNOWN ELEV"),this.dom.inspectTag.className=`status-pill ${n}`,this.dom.inspectTag.textContent=i;const d='<span class="chip-prop-flooded font-mono" style="background:rgba(239,68,68,0.15);color:#fca5a5;padding:2px 6px;border-radius:4px;font-size:11px;">SIMULATED (UNVERIFIED)</span>',h=o?`<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${a.toFixed(2)}m depth)</span>`:`<span class="chip-prop-viable font-mono font-bold">DRY (+${l!==null?(l-c).toFixed(1):0}m clearance)</span>`,u=r==="isolated"?'<span class="chip-access-lost font-mono font-bold">ISOLATED (Connecting roads submerged)</span>':r==="exposed"?'<span class="chip-access-deg font-mono">EXPOSED (Shallow flood water <0.15m)</span>':r==="disconnected"?'<span class="chip-access-disc font-mono">DISCONNECTED FROM ROADS</span>':'<span class="chip-access-conn font-mono">DRY PASSABLE CORRIDOR</span>';this.dom.inspectContent.innerHTML=`
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">${e.name}</span>
            <span class="inspect-val font-mono">${e.id}</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Provenance:</span>
              <span class="inspect-val">${d}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Site Inundation:</span>
              <span class="inspect-val">${h}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Road Corridor:</span>
              <span class="inspect-val">${u}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Ground / Water:</span>
              <span class="inspect-val font-mono">${l!==null?`${l.toFixed(1)}m`:"NoData"} / ${c.toFixed(1)}m MSL</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Road Connection:</span>
              <span class="inspect-val font-mono text-muted">${t?.roadNodeId?`Node ${t.roadNodeId}`:e.nearbyRoadStatus||"Evaluated"}</span>
            </div>
          </div>
          <div class="inspect-route-actions">
            <button class="inspect-route-btn btn-shelter" id="btn-card-shelter-fac" ${o?'disabled style="opacity:0.5;cursor:not-allowed;"':""}>🏃 Route to this Facility</button>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ SIMULATED EMERGENCY FACILITY: Unverified facility record from scenario dataset. Not an officially verified municipal shelter or hospital. Never treated as verified safety infrastructure.
          </div>
        </div>`;const p=document.getElementById("btn-card-shelter-fac");p&&!o&&p.addEventListener("click",()=>{this.overlayManager?.routeToNearestDestination(this.resolveOrigin(),[{x:e.center.x,z:e.center.z,id:e.id,name:e.name,type:e.type||"shelter",provenance:"simulated"}],{routeType:"shelter"})})}else if(e.kind==="cluster"){const t=e.cluster||{},n=t.exposureCounts||{},i=t.dominantExposure||"LOW",r=t.isConnectedToRoads!==!1;let o="warning";i==="CRITICAL"||i==="HIGH"?o="danger":i==="MODERATE"?o="warning":i==="LOW"&&(o="info"),this.dom.inspectTag.className=`status-pill ${o}`,this.dom.inspectTag.textContent=`CLUSTER (${i})`;const a=r?`<span class="chip-prop-viable font-bold font-mono">CONNECTED (${t.nearestRoadNode?t.nearestRoadNode.id:"Active"})</span>`:'<span class="chip-prop-flooded font-bold font-mono">UNCONNECTED (>160m)</span>',l=`
        <div class="exposure-breakdown-chips">
          ${n.CRITICAL?`<span class="chip-cluster-crit font-mono">Crit: ${n.CRITICAL}</span>`:""}
          ${n.HIGH?`<span class="chip-cluster-high font-mono">High: ${n.HIGH}</span>`:""}
          ${n.MODERATE?`<span class="chip-cluster-mod font-mono">Mod: ${n.MODERATE}</span>`:""}
          ${n.LOW?`<span class="chip-cluster-low font-mono" style="background:rgba(59,130,246,0.2);color:#93c5fd;padding:2px 6px;border-radius:4px;font-size:11px;">Low: ${n.LOW}</span>`:""}
          ${n.UNKNOWN?`<span class="chip-cluster-unknown font-mono" style="background:rgba(156,163,175,0.2);color:#d1d5db;padding:2px 6px;border-radius:4px;font-size:11px;">Unk: ${n.UNKNOWN}</span>`:""}
        </div>
      `;this.dom.inspectContent.innerHTML=`
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">${e.name||t.id}</span>
            <span class="inspect-val font-mono">${t.buildingCount||0} structures</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Exposure Breakdown:</span>
              <span class="inspect-val">${l}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Estimated Occupancy:</span>
              <span class="inspect-val font-mono font-bold">${t.estimatedPopulation||0} persons</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Cluster Radius:</span>
              <span class="inspect-val">${Math.round(t.radiusM||0)} m</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Road Network Access:</span>
              <span class="inspect-val">${a}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Access Status:</span>
              <span class="inspect-val text-muted">${t.originStatusText||"Evaluated"}</span>
            </div>
          </div>
          <div class="inspect-route-actions">
            <button class="inspect-route-btn btn-shelter" id="btn-card-shelter-cl" ${r?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Evac Cluster to Shelter</button>
            <button class="inspect-route-btn btn-hospital" id="btn-card-hospital-cl" ${r?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏥 Route Cluster to Hospital</button>
          </div>
          <div class="inspect-disclaimer">
            ${r?"ℹ️ Evacuation route calculated from verified road access node near cluster boundary.":"⚠️ Approximate / unconnected origin. Distance to verified road network exceeds 160m threshold. No road connection fabricated."}
          </div>
        </div>`;const c=document.getElementById("btn-card-shelter-cl");c&&r&&c.addEventListener("click",()=>this.executeRoute("shelter"));const d=document.getElementById("btn-card-hospital-cl");d&&r&&d.addEventListener("click",()=>this.executeRoute("hospital"))}else if(e.kind==="proposed-site"){const t=e.evaluation||{},n=typeof t.score=="number"?t.score:0,i=t.viable,r=t.isInundated;let o="success",a=`VIABLE (${n}/100)`;r?(o="danger",a="INUNDATED (0/100)"):i||(o="warning",a=`UNVIABLE (${n}/100)`),this.dom.inspectTag.className=`status-pill ${o}`,this.dom.inspectTag.textContent=a;const l=t.scoreBreakdown||{clearanceScore:0,roadScore:0,slopeScore:0,proximityScore:0},c=`Clearance: ${l.clearanceScore}/40 | Road: ${l.roadScore}/30 | Slope: ${l.slopeScore}/15 | Proximity: ${l.proximityScore}/15`,d=r?`<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${Math.abs(t.clearanceAboveWater||0).toFixed(1)}m below water)</span>`:`<span class="chip-prop-viable font-mono font-bold">+${(t.clearanceAboveWater||0).toFixed(1)}m above water</span>`,h=t.connectedToRoad?`<span class="chip-prop-viable font-mono">CONNECTED (${Math.round(t.roadDistanceM||0)}m)</span>`:'<span class="chip-prop-flooded font-mono">DISCONNECTED</span>';this.dom.inspectContent.innerHTML=`
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">${t.name||e.name}</span>
            <span class="score-badge ${n>=70?"score-high":n>=40?"score-mid":"score-low"}">${n}/100</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Facility Category:</span>
              <span class="inspect-val font-mono">${t.type==="shelter"?"Proposed Shelter Candidate":"Proposed Medical Response Point"}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Estimated Capacity:</span>
              <span class="inspect-val font-mono">${t.capacityEst||0} evacuees</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Water Clearance:</span>
              <span class="inspect-val">${d}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Ground / Water MSL:</span>
              <span class="inspect-val font-mono">${(t.groundElevation||0).toFixed(1)}m / ${(t.waterElevation||0).toFixed(1)}m</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Terrain Slope:</span>
              <span class="inspect-val font-mono">${(t.slopeDeg||0).toFixed(1)}° (${t.slopeDeg<5?"Gentle":t.slopeDeg<12?"Moderate":"Steep"})</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Road Network Access:</span>
              <span class="inspect-val">${h}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Score Breakdown:</span>
              <span class="inspect-val text-muted font-mono" style="font-size:11px;">${c}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Assessment:</span>
              <span class="inspect-val text-muted">${t.statusReason||"Evaluated"}</span>
            </div>
          </div>
          <div class="inspect-route-actions">
            <button class="inspect-route-btn btn-shelter" id="btn-card-route-prop" ${i?"":'disabled style="opacity:0.5;cursor:not-allowed;"'}>🏃 Route to Candidate Site</button>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ PROPOSED CANDIDATE ONLY: Unverified conceptual site for scenario modeling. Not an officially approved municipal emergency facility.
          </div>
        </div>`;const u=document.getElementById("btn-card-route-prop");u&&i&&u.addEventListener("click",()=>{this.routeToCandidateSite(t)})}}}}routeToCandidateSite(e){if(!this.overlayManager||!e)return;const t=this.resolveOrigin(),n=[{x:e.position.x,z:e.position.z,id:e.id,name:`Candidate: ${e.name}`,type:"shelter",provenance:"proposed"}];this.overlayManager.routeToNearestDestination(t,n,{routeType:"shelter"})}resolveOrigin(){if(this.selectedFeature){const e=this.selectedFeature;if(e.center)return{x:e.center.x,z:e.center.z,id:e.id,name:e.name||`Structure ${e.id}`};if(e.points&&e.points.length>0)return{x:e.points[0].x,z:e.points[0].z,id:e.id,name:`Road ${e.id}`}}return{x:-150,z:50,id:"origin-default",name:"Dernau Residential Core"}}executeRoute(e){if(!this.overlayManager)return;const t=this.resolveOrigin(),n=this.overlayManager.facilityLayer?.features||[];if(e==="shelter"){const i=n.filter(r=>r.type==="shelter").map(r=>({x:r.center.x,z:r.center.z,id:r.id,name:r.name||"Shelter",type:"shelter",provenance:r.provenance||"dataset"}));if(i.length===0){console.warn("No shelter facilities available in dataset.");return}this.overlayManager.routeToNearestDestination(t,i,{routeType:"shelter"})}else if(e==="hospital"){const i=n.filter(r=>r.type==="hospital").map(r=>({x:r.center.x,z:r.center.z,id:r.id,name:r.name||"Hospital",type:"hospital",provenance:r.provenance||"simulated"}));if(i.length===0){console.warn("No hospital or medical facility records available in dataset.");return}this.overlayManager.routeToNearestDestination(t,i,{routeType:"hospital"})}}toggleAlternativeRoute(){if(!this.overlayManager||!this.activeAlternative)return;this.showAlternative=!this.showAlternative;const e=this.showAlternative?this.activeAlternative:this.activeRoute,t=this.showAlternative?this.activeRoute:this.activeAlternative;this.overlayManager.routeLayer.displayRoute(e,t),this.dom.btnRouteAlt&&this.dom.btnRouteAlt.classList.toggle("active",this.showAlternative),this.renderRouteSummary(e,t)}onRouteUpdated(e,t){this.activeRoute=e,this.activeAlternative=t,this.showAlternative=!1,this.dom.btnRouteAlt&&(t&&t.isReachable?(this.dom.btnRouteAlt.classList.remove("hidden"),this.dom.btnRouteAlt.classList.remove("active"),this.dom.btnRouteAlt.title=`Toggle alternative route (${t.totalDistanceMeters}m, ${t.status})`):this.dom.btnRouteAlt.classList.add("hidden")),this.dom.btnRouteShelter&&this.dom.btnRouteShelter.classList.toggle("active",e?.routeType==="shelter"),this.dom.btnRouteHospital&&this.dom.btnRouteHospital.classList.toggle("active",e?.routeType==="hospital"),e&&this.renderRouteSummary(e,t)}renderRouteSummary(e,t=null){if(!this.dom.inspectContent||!this.dom.inspectTag)return;this.dom.hudInspector&&this.dom.hudInspector.classList.add("active");const n=e.routeType==="hospital",i=!e.isReachable||e.status==="blocked",r=e.status==="exposed";let o="success",a=n?"HOSPITAL ROUTE":"SHELTER EVAC ROUTE";i?(o="danger",a="ROUTE BLOCKED"):r&&(o="warning",a="EXPOSED ROUTE"),this.dom.inspectTag.className=`status-pill ${o}`,this.dom.inspectTag.textContent=a;const l=e.destination?.name||(n?"Hospital":"Shelter"),c=e.destination?.provenance==="simulated",d=n?c?`${l} (Proposed medical-response site — unverified)`:`${l} (Hospital)`:`${l} (Shelter)`,h=i?"Unreachable":`${e.totalDistanceMeters.toFixed(1)} m`,u=i?"N/A":`${e.edgeCount} segments`,p=i?"Blocked by floodwaters":e.exposedLengthMeters>0?`${e.exposedLengthMeters.toFixed(1)} m (${Math.round(e.exposedRatio*100)}%)`:"0.0 m (100% Dry)",g=i?e.blockedEdges?.length?`${(e.blockedEdges[0].maxDepth||.15).toFixed(2)}m (Impassable)`:">=0.15 m":e.maxWaterDepth>0?`${e.maxWaterDepth.toFixed(2)} m`:"0.00 m (Dry)";let v="";if(t&&t.isReachable){const _=Math.round(t.totalDistanceMeters-e.totalDistanceMeters),x=_>=0?`+${_}m`:`${_}m`;v=`
        <div class="inspect-row">
          <span class="inspect-label">Alternative Path:</span>
          <span class="inspect-val">${t.totalDistanceMeters.toFixed(0)}m (${x}) [${t.status.toUpperCase()}]</span>
        </div>`}this.dom.inspectContent.innerHTML=`
      <div class="inspect-card">
        <div class="inspect-title-row">
          <span class="inspect-title font-mono">${n?"🏥 Medical Route":"🏃 Shelter Evac Route"}</span>
          <span class="inspect-val font-mono">${h}</span>
        </div>
        <div class="inspect-meta-grid">
          <div class="inspect-row">
            <span class="inspect-label">Destination:</span>
            <span class="inspect-val font-bold ${n?"text-cyan":"text-purple"}">${d}</span>
          </div>
          <div class="inspect-row">
            <span class="inspect-label">Origin:</span>
            <span class="inspect-val">${e.origin?.name||"Selected Origin"}</span>
          </div>
          <div class="inspect-row">
            <span class="inspect-label">Route Status:</span>
            <span class="inspect-val font-bold ${i?"text-rose":r?"text-amber":"text-emerald"}">${e.status.toUpperCase()}</span>
          </div>
          <div class="inspect-row">
            <span class="inspect-label">Path Length:</span>
            <span class="inspect-val">${h} (${u})</span>
          </div>
          <div class="inspect-row">
            <span class="inspect-label">Water Exposure:</span>
            <span class="inspect-val ${r?"text-amber":""}">${p}</span>
          </div>
          <div class="inspect-row">
            <span class="inspect-label">Max Road Depth:</span>
            <span class="inspect-val">${g}</span>
          </div>
          ${v}
          <div class="inspect-row">
            <span class="inspect-label">Assessment:</span>
            <span class="inspect-val text-muted">${e.explanation}</span>
          </div>
        </div>
        <div class="inspect-route-actions">
          <button class="inspect-route-btn btn-shelter" id="btn-inspect-evac">🏃 Evac Shelter</button>
          <button class="inspect-route-btn btn-hospital" id="btn-inspect-med">🏥 Hospital</button>
          <button class="inspect-route-btn btn-clear" id="btn-inspect-clear">✕ Clear</button>
        </div>
        <div class="inspect-disclaimer">
          ⚠️ Conceptual elevation-based path reachability model. Does not guarantee hydrodynamic safety, flow velocity limits, or physical road structural integrity.
        </div>
      </div>`;const m=document.getElementById("btn-inspect-evac");m&&m.addEventListener("click",()=>this.executeRoute("shelter"));const f=document.getElementById("btn-inspect-med");f&&f.addEventListener("click",()=>this.executeRoute("hospital"));const y=document.getElementById("btn-inspect-clear");y&&y.addEventListener("click",()=>{this.overlayManager&&this.overlayManager.clearRoute()})}updateFrame(e){const t=this.controls.getTelemetry(),n=this.telemetry.getMouseNdc(),i=this.terrainManager.raycastSurface(n,this.viewer.camera);this.telemetry.update(t,e,i);const r=performance.now();if(this.overlayManager&&r-this.lastInspectUpdate>65&&(this.lastInspectUpdate=r,!this.selectedFeature)){const o=this.overlayManager.inspectFeature(n,this.viewer.camera);this.renderFeatureInspection(o)}}getCurrentWaterLevel(){if(this.floodWaterManager){if(typeof this.floodWaterManager.waterLevel=="number"&&!Number.isNaN(this.floodWaterManager.waterLevel))return this.floodWaterManager.waterLevel;if(typeof this.floodWaterManager.currentWaterLevel=="number"&&!Number.isNaN(this.floodWaterManager.currentWaterLevel))return this.floodWaterManager.currentWaterLevel}if(this.dom.waterLevelSlider&&this.dom.waterLevelSlider.value!==void 0&&this.dom.waterLevelSlider.value!==null&&this.dom.waterLevelSlider.value!==""){const e=parseFloat(this.dom.waterLevelSlider.value);if(!Number.isNaN(e))return e}return null}setBaselineFromCurrent(){if(!this.overlayManager)return;const e=this.getCurrentWaterLevel();typeof e!="number"||Number.isNaN(e)||(this.overlayManager.setBaselineWaterLevel(e),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${e.toFixed(1)}m`),this.overlayManager.updateImpacts())}toggleAccessLostHighlights(){this.overlayManager&&(this.accessLostActive=!this.accessLostActive,this.overlayManager.toggleAccessLostHighlights(this.accessLostActive),this.dom.btnToggleAccessLost&&(this.dom.btnToggleAccessLost.classList.toggle("active",this.accessLostActive),this.dom.btnToggleAccessLost.textContent=this.accessLostActive?"⚠️ Access-Lost: ON":"⚠️ Access-Lost Rings"))}toggleRiskPanel(){if(!this.dom.hudRiskPanel)return;const e=this.dom.hudRiskPanel.classList.toggle("active");this.dom.btnToggleRiskPanel&&this.dom.btnToggleRiskPanel.classList.toggle("active",e),this.dom.btnDockRisk&&this.dom.btnDockRisk.classList.toggle("active",e),e&&this.buildingRiskData&&this.updateRiskRankingList()}setRiskSortMode(e){this.riskSortMode=e,[this.dom.sortRisk,this.dom.sortDepth,this.dom.sortLost].forEach(t=>{t&&t.classList.remove("active")}),e==="risk"&&this.dom.sortRisk&&this.dom.sortRisk.classList.add("active"),e==="depth"&&this.dom.sortDepth&&this.dom.sortDepth.classList.add("active"),e==="lost"&&this.dom.sortLost&&this.dom.sortLost.classList.add("active"),this.updateRiskRankingList()}renderScenarioComparison(e){if(e){if(this.scenarioDiffData=e,this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${e.baselineWaterLevel.toFixed(1)}m`),this.dom.diffNewBlds&&e.buildings){const t=e.buildings;this.dom.diffNewBlds.textContent=`+${t.newlyAffectedCount} (${t.newlyAffectedPercent}%)`}if(this.dom.diffRouteLost&&e.buildings){const t=e.buildings;this.dom.diffRouteLost.textContent=`${t.routeLostCount} (${t.routeLostPercent}%)`}if(this.dom.diffNewRoads&&e.roads){const t=e.roads;this.dom.diffNewRoads.textContent=`+${t.newlyImpassable} (${t.newlyImpassablePercent}%)`}if(this.dom.diffIsolatedShelters&&e.shelters){const t=e.shelters;this.dom.diffIsolatedShelters.textContent=`${t.isolatedByRoads} isol / ${t.inundated} flood`}}}renderRiskRanking(e){this.buildingRiskData=e,this.dom.hudRiskPanel&&this.dom.hudRiskPanel.classList.contains("active")&&this.updateRiskRankingList()}updateRiskRankingList(){if(!this.dom.riskListContainer||!this.buildingRiskData)return;const e=[...this.buildingRiskData];if(this.riskSortMode==="depth"?e.sort((i,r)=>{const o=i.exposure?.waterDepth??0;return(r.exposure?.waterDepth??0)-o}):this.riskSortMode==="lost"?e.sort((i,r)=>{const o=i.access?.status==="route_lost"?1:0,a=r.access?.status==="route_lost"?1:0;return a!==o?a-o:(r.risk?.totalScore??0)-(i.risk?.totalScore??0)}):e.sort((i,r)=>(r.risk?.totalScore??0)-(i.risk?.totalScore??0)),this.dom.riskSummaryCounts){const i=e.filter(l=>l.risk?.priorityTier==="CRITICAL").length,r=e.filter(l=>l.risk?.priorityTier==="HIGH").length,o=e.filter(l=>l.risk?.priorityTier==="MODERATE").length,a=e.filter(l=>l.access?.status==="route_lost").length;this.dom.riskSummaryCounts.innerHTML=`
        <span class="chip-risk-crit">Crit: ${i}</span>
        <span class="chip-risk-high">High: ${r}</span>
        <span class="chip-risk-mod">Mod: ${o}</span>
        <span class="chip-access-lost">Lost: ${a}</span>
      `}const n=e.slice(0,150).map(i=>{const r=i.risk||{},o=r.totalScore??0,a=r.priorityTier||"LOW",l=i.access||{},c=i.exposure||{},d=typeof c.waterDepth=="number"?`${c.waterDepth.toFixed(2)}m`:"0.00m";let h="chip-risk-low";a==="CRITICAL"?h="chip-risk-crit":a==="HIGH"?h="chip-risk-high":a==="MODERATE"?h="chip-risk-mod":a==="UNKNOWN"&&(h="chip-risk-unk");let u="chip-access-conn",p="Connected";return l.status==="route_lost"?(u="chip-access-lost",p="Route Lost"):l.status==="disconnected_in_source"?(u="chip-access-disc",p="Source Disc."):l.status==="access_degraded"?(u="chip-access-deg",p="Degraded"):l.status==="unknown"&&(u="chip-access-unk",p="Unknown"),`
        <div class="risk-row" data-bld-id="${i.id}" id="risk-row-${i.id}">
          <div class="risk-row-left">
            <span class="${h} font-mono">${a}</span>
            <span class="risk-row-id font-mono">Bld ${i.id}</span>
          </div>
          <div class="risk-row-right">
            <span class="${u} font-mono">${p}</span>
            <span class="risk-row-depth font-mono text-muted">${d}</span>
            <span class="risk-badge ${o>=70?"score-high":o>=40?"score-mid":"score-low"} font-mono">${o}</span>
          </div>
        </div>
      `}).join("");this.dom.riskListContainer.innerHTML=n,this.dom.riskListContainer.querySelectorAll(".risk-row").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-bld-id");this.selectBuildingById(r)})})}selectBuildingById(e){if(!this.overlayManager)return;const n=this.overlayManager.buildingLayer?.features?.find(o=>o.id===e);if(!n)return;const i=this.overlayManager.scenarioComparisonService?.getBuildingEvaluation(e),r={...n,kind:"building",riskEvaluation:i};if(this.selectedFeature=r,this.overlayManager.highlightBuilding(e),this.renderFeatureInspection(r),this.dom.riskListContainer){this.dom.riskListContainer.querySelectorAll(".risk-row").forEach(a=>a.classList.remove("active"));const o=document.getElementById(`risk-row-${e}`);o&&(o.classList.add("active"),o.scrollIntoView({block:"nearest",behavior:"smooth"}))}}toggleScenarioPanel(){if(!this.dom.hudScenarioPanel)return;const t=!this.dom.hudScenarioPanel.classList.toggle("hidden");this.dom.btnOpenScenarios&&this.dom.btnOpenScenarios.classList.toggle("active",t),this.dom.btnDockScenarios&&this.dom.btnDockScenarios.classList.toggle("active",t),t&&(this.scenarioManager.storageErrorMessage&&this.dom.scenarioStorageNotice?(this.dom.scenarioStorageNotice.textContent=`⚠️ ${this.scenarioManager.storageErrorMessage}`,this.dom.scenarioStorageNotice.classList.remove("hidden")):this.dom.scenarioStorageNotice&&this.dom.scenarioStorageNotice.classList.add("hidden"),this.renderScenarioList(),this.populateScenarioDropdowns())}closeScenarioPanel(){this.dom.hudScenarioPanel&&(this.dom.hudScenarioPanel.classList.add("hidden"),this.dom.btnOpenScenarios&&this.dom.btnOpenScenarios.classList.remove("active"),this.dom.btnDockScenarios&&this.dom.btnDockScenarios.classList.remove("active"))}renderScenarioList(){if(!this.dom.scenarioListContainer)return;const e=this.scenarioManager.getScenarios();this.dom.scenarioPanelCount&&(this.dom.scenarioPanelCount.textContent=`${e.length} Saved`);const t=this.getCurrentWaterLevel()??124,n=e.map(i=>{const r=Math.abs(i.waterLevel-t)<.05,o=i.createdAt?new Date(i.createdAt).toLocaleDateString():"",a=i.isBuiltIn?'<span class="text-cyan font-bold" title="Built-in reference scenario">[REF]</span>':"",l=i.isBuiltIn?"":`<button class="btn-scen-sm btn-del" data-action="delete" data-id="${i.id}" title="Delete scenario">🗑️</button>`;return`
        <div class="scenario-row ${r?"active":""}" data-id="${i.id}" id="scen-row-${i.id}">
          <div class="scenario-row-top">
            <span class="scenario-name font-mono" title="${i.name}">${a} ${i.name}</span>
            <span class="scenario-level-tag font-mono">${i.waterLevel.toFixed(1)}m</span>
          </div>
          <div class="scenario-row-details font-mono">
            <span>Base: ${(i.baselineWaterLevel??124).toFixed(1)}m | ${i.profileMode||"planar"}</span>
            <span>${o}</span>
          </div>
          <div class="scenario-row-actions">
            <button class="btn-scen-sm btn-load" data-action="load" data-id="${i.id}" title="Apply this water level and settings">Apply</button>
            <button class="btn-scen-sm" data-action="compare" data-id="${i.id}" title="Set as comparison target">Diff Target</button>
            ${l}
          </div>
        </div>
      `}).join("");this.dom.scenarioListContainer.innerHTML=n,this.dom.scenarioListContainer.querySelectorAll("button[data-action]").forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const o=i.getAttribute("data-action"),a=i.getAttribute("data-id");o==="load"?this.loadScenarioById(a):o==="compare"?this.dom.selectCompareTarget&&(this.dom.selectCompareTarget.value=a,this.compareSelectedScenarios()):o==="delete"&&this.promptDeleteScenario(a)})})}populateScenarioDropdowns(){if(!this.dom.selectCompareBaseline||!this.dom.selectCompareTarget)return;const e=this.scenarioManager.getScenarios(),t=this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124,n=this.getCurrentWaterLevel()??124,i=e.map(o=>`
      <option value="${o.id}" ${Math.abs(o.waterLevel-t)<.05?"selected":""}>
        ${o.name} (${o.waterLevel.toFixed(1)}m)
      </option>
    `).join(""),r=e.map(o=>`
      <option value="${o.id}" ${Math.abs(o.waterLevel-n)<.05?"selected":""}>
        ${o.name} (${o.waterLevel.toFixed(1)}m)
      </option>
    `).join("");this.dom.selectCompareBaseline.innerHTML=i,this.dom.selectCompareTarget.innerHTML=r}saveCurrentScenario(){if(!this.dom.inputScenarioName)return;const e=this.dom.inputScenarioName.value.trim(),t=this.getCurrentWaterLevel();if(typeof t!="number"||Number.isNaN(t)){alert("Could not save scenario: Current water elevation is unavailable.");return}const n=this.floodWaterManager?this.floodWaterManager.profileMode:"planar",i=this.floodWaterManager?this.floodWaterManager.connectedOnly:!0,r=this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124;try{this.scenarioManager.saveScenario({name:e||void 0,waterLevel:t,profileMode:n,connectedOnly:i,baselineWaterLevel:r}),this.dom.inputScenarioName.value="",this.renderScenarioList(),this.populateScenarioDropdowns(),this.scenarioManager.storageErrorMessage&&this.dom.scenarioStorageNotice&&(this.dom.scenarioStorageNotice.textContent=`⚠️ ${this.scenarioManager.storageErrorMessage}`,this.dom.scenarioStorageNotice.classList.remove("hidden"))}catch(o){alert(`Could not save scenario: ${o.message}`)}}loadScenarioById(e){const t=this.scenarioManager.getScenario(e);t&&(this.activeScenarioId=e,this.floodWaterManager&&(this.floodWaterManager.setWaterLevel(t.waterLevel),this.dom.waterLevelSlider&&(this.dom.waterLevelSlider.value=t.waterLevel.toFixed(2)),this.dom.waterLevelVal&&(this.dom.waterLevelVal.textContent=`${t.waterLevel.toFixed(2)} m`),t.profileMode&&t.profileMode!==this.floodWaterManager.profileMode&&(this.floodWaterManager.setProfileMode(t.profileMode),this.dom.btnToggleProfile&&(this.dom.btnToggleProfile.textContent=t.profileMode==="slope"?"📐 Profile: Slope-Aware":"📐 Profile: Planar",this.dom.btnToggleProfile.classList.toggle("active",t.profileMode==="slope"))),typeof t.connectedOnly=="boolean"&&t.connectedOnly!==this.floodWaterManager.connectedOnly&&(this.floodWaterManager.connectedOnly=t.connectedOnly,this.dom.btnToggleConnectivity&&(this.dom.btnToggleConnectivity.textContent=t.connectedOnly?"🌊 Connected: ON":"🌊 Connected: OFF",this.dom.btnToggleConnectivity.classList.toggle("active",t.connectedOnly)))),this.overlayManager&&(typeof t.baselineWaterLevel=="number"&&(this.overlayManager.setBaselineWaterLevel(t.baselineWaterLevel),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${t.baselineWaterLevel.toFixed(1)}m`)),this.overlayManager.updateImpacts()),this.renderScenarioList())}compareSelectedScenarios(){if(!this.dom.selectCompareBaseline||!this.dom.selectCompareTarget)return;const e=this.dom.selectCompareBaseline.value,t=this.dom.selectCompareTarget.value,n=this.scenarioManager.getScenario(e),i=this.scenarioManager.getScenario(t);!n||!i||this.overlayManager&&this.overlayManager.scenarioComparisonService&&(this.overlayManager.scenarioComparisonService.setBaselineScenario(n.waterLevel),this.dom.scenarioBaselineTag&&(this.dom.scenarioBaselineTag.textContent=`Baseline: ${n.waterLevel.toFixed(1)}m`),this.loadScenarioById(i.id))}promptDeleteScenario(e){const t=this.scenarioManager.getScenario(e);if(t){if(t.isBuiltIn){alert("Reference scenarios are built-in and cannot be deleted.");return}this.scenarioToDeleteId=e,this.dom.deleteConfirmText&&(this.dom.deleteConfirmText.textContent=`Are you sure you want to delete scenario "${t.name}" (${t.waterLevel.toFixed(1)}m MSL)? This action cannot be undone.`),this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.remove("hidden")}}executeDeleteScenario(){this.scenarioToDeleteId&&(this.scenarioManager.deleteScenario(this.scenarioToDeleteId),this.scenarioToDeleteId=null,this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.add("hidden"),this.renderScenarioList(),this.populateScenarioDropdowns())}cancelDeleteScenario(){this.scenarioToDeleteId=null,this.dom.deleteConfirmModal&&this.dom.deleteConfirmModal.classList.add("hidden")}openExportModal(){this.dom.reportExportOverlay&&(this.dom.reportExportOverlay.classList.remove("hidden"),this.renderExportPreview())}closeExportModal(){this.dom.reportExportOverlay&&this.dom.reportExportOverlay.classList.add("hidden")}_getExportData(){const e=this.getCurrentWaterLevel()??124,t=this.scenarioManager.getScenario(this.activeScenarioId)||{name:`Simulation Stage ${e.toFixed(1)}m MSL`,waterLevel:e,profileMode:this.floodWaterManager?.profileMode||"planar",connectedOnly:this.floodWaterManager?.connectedOnly!==!1,baselineWaterLevel:this.overlayManager?.scenarioComparisonService?.baselineWaterLevel??124},n=this.scenarioDiffData||this.overlayManager?.scenarioComparisonService?.currentComparison||{},i=this.buildingRiskData||this.overlayManager?.scenarioComparisonService?.rankedBuildings||[],r=n.shelterAssessments||this.overlayManager?.scenarioComparisonService?.currentComparison?.shelterAssessments||[],o=this.overlayManager?.scenarioComparisonService?.getDataQualityReport({proposedSites:this.overlayManager?.proposedSiteService?.evaluatedSites})||null;return{scenario:{...t},comparison:n,rankedBuildings:i,shelterAssessments:r,dataQuality:o}}renderExportPreview(){if(!this.dom.exportPreviewContainer)return;const{scenario:e,comparison:t,rankedBuildings:n,shelterAssessments:i,dataQuality:r}=this._getExportData(),o=t.buildings||{},a=t.roads||{},l=t.shelters||{},c=r||{},d=n.filter(u=>u.risk?.priorityTier==="CRITICAL"||u.risk?.priorityTier==="critical").length,h=n.filter(u=>u.risk?.priorityTier==="HIGH"||u.risk?.priorityTier==="high").length;this.dom.exportPreviewContainer.innerHTML=`
      <div class="export-preview-grid">
        <div class="export-preview-card">
          <div class="metric-label">Modeled Scenario</div>
          <div class="metric-val text-cyan">${e.name}</div>
          <div class="metric-sub">Water Surface: ${e.waterLevel.toFixed(2)}m MSL | Baseline: ${(t.baselineWaterLevel??124).toFixed(2)}m</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Newly Affected Buildings</div>
          <div class="metric-val text-amber">+${o.newlyAffectedCount??0} (${o.newlyAffectedPercent??0}%)</div>
          <div class="metric-sub">Denominator: ${o.validDenominator??0} valid structures (${o.unknownCount??0} NoData excluded)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Route Lost (Flood-Isolated)</div>
          <div class="metric-val text-rose">${o.routeLostCount??0} structures (${o.routeLostPercent??0}%)</div>
          <div class="metric-sub">Top Priority: ${d} Critical | ${h} High</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Road & Shelter Status</div>
          <div class="metric-val text-emerald">+${a.newlyImpassable??0} Impassable Rds</div>
          <div class="metric-sub">Shelters: ${l.operational??0} operational, ${l.isolatedByRoads??0} isolated, ${l.inundated??0} submerged (Simulated)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Data Quality &amp; Uncertainty Audit</div>
          <div class="metric-val text-cyan">${c?.demCoverage?.status||"VERIFIED"} / ${c?.facilityProvenance?.status||"UNVERIFIED"}</div>
          <div class="metric-sub">${c?.roadTopology?.totalComponents||67} road components · Facilities simulated · No verified hospital</div>
        </div>
      </div>
    `}toggleDataQualityPanel(e){if(!this.dom.hudDataQuality)return;(typeof e=="boolean"?e:this.dom.hudDataQuality.classList.contains("hidden"))?(this.dom.hudDataQuality.classList.remove("hidden"),this.renderDataQualityReport()):this.dom.hudDataQuality.classList.add("hidden")}renderDataQualityReport(){if(!this.dom.dqContent)return;const e=this.overlayManager?.scenarioComparisonService?.getDataQualityReport({proposedSites:this.overlayManager?.proposedSiteService?.evaluatedSites});if(!e){this.dom.dqContent.innerHTML='<div class="font-mono text-muted" style="padding:10px;">Initializing data quality audit...</div>';return}const t=[{title:"DEM Topography Coverage",tag:e.demCoverage.status.toLowerCase().includes("verified")?"verified":"unknown",tagLabel:e.demCoverage.status,metrics:`${e.demCoverage.valid} Valid (${(100-e.demCoverage.unknownPercent).toFixed(1)}%) · ${e.demCoverage.unknown} Unknown NoData`,desc:e.demCoverage.description},{title:"Road Flood Classification",tag:e.roadClassification.status.toLowerCase().includes("verified")?"verified":"unknown",tagLabel:e.roadClassification.status,metrics:`${e.roadClassification.evaluated} Evaluated · ${e.roadClassification.unknown} Missing/Unknown Edges`,desc:e.roadClassification.description},{title:"Road Network Graph Topology",tag:e.roadTopology.status.toLowerCase(),tagLabel:e.roadTopology.status,metrics:`${e.roadTopology.totalComponents} Disconnected Graph Components`,desc:e.roadTopology.description},{title:"Emergency Facility Provenance",tag:"unknown",tagLabel:e.facilityProvenance.status,metrics:`${e.facilityProvenance.simulated} Simulated Shelters · 0 Verified Hospitals`,desc:e.facilityProvenance.description},{title:"Proposed Emergency Assembly Sites",tag:"proposed",tagLabel:e.proposedSites.status,metrics:`${e.proposedSites.total} Candidate Staging Locations (Unverified Proposals)`,desc:e.proposedSites.description},{title:"Spatial Snapping & Proximity",tag:"approximate",tagLabel:e.spatialSnapping.status,metrics:`${e.spatialSnapping.approximateCount} Snapped via Centroid Distance · ${e.spatialSnapping.disconnectedCount} Disconnected`,desc:e.spatialSnapping.description},{title:"Hydraulic Model Boundaries",tag:"approximate",tagLabel:e.modelAssumptions.status,metrics:"Static DEM Bare-Earth Immersion (No hydrodynamic velocity/momentum)",desc:e.modelAssumptions.description}];this.dom.dqContent.innerHTML=t.map(n=>`
      <div class="dq-card">
        <div class="dq-card-header">
          <span class="dq-card-title">${n.title}</span>
          <span class="dq-tag ${n.tag}">${n.tagLabel}</span>
        </div>
        <div class="dq-card-metrics font-mono">${n.metrics}</div>
        <div class="dq-card-desc">${n.desc}</div>
      </div>
    `).join("")}downloadScenarioCSV(){const e=this._getExportData(),t=this.scenarioManager.generateCSVReport(e),i=`highwater3d_${(e.scenario.name||"scenario").toLowerCase().replace(/[^a-z0-9]/g,"_")}_${e.scenario.waterLevel.toFixed(1)}m.csv`;this.scenarioManager.downloadCSV(t,i)}openScenarioPrintReport(){const e=this._getExportData(),t=this.scenarioManager.generateHTMLReport(e);this.scenarioManager.openPrintReport(t)}dispose(){this.eventListeners.forEach(({target:e,event:t,handler:n})=>{e.removeEventListener(t,n)}),this.eventListeners=[]}}class ev{constructor(){this.viewer=null,this.controls=null,this.terrainManager=null,this.overlayManager=null,this.floodWaterManager=null,this.ui=null,this.isInitialized=!1}async init(){try{console.log("🌊 Initializing HighWater 3D (Milestone 7: Reliability, Usability and Presentation Readiness)...");const e=document.getElementById("viewport-container");if(!e)throw new Error("Root viewport container #viewport-container not found.");this.viewer=new rg(e),this.controls=new yg(this.viewer.camera,this.viewer.renderer.domElement),this.terrainManager=new bg(this.viewer.scene),this.overlayManager=new Yg(this.viewer.scene,this.terrainManager),this.floodWaterManager=new Kg(this.viewer.scene,this.terrainManager,this.overlayManager),this.ui=new Qg({viewer:this.viewer,controls:this.controls,terrainManager:this.terrainManager,overlayManager:this.overlayManager,floodWaterManager:this.floodWaterManager}),this.ui.setFloodWaterManager(this.floodWaterManager),this.ui.setLoadingProgress("Ingesting verified Rhineland-Palatinate DGM1 terrain...",25);const t=await this.terrainManager.loadRealTerrain("/data/dernau/dem_height_grid.json");console.log("📍 Active Terrain Loaded:",t.label,t),t&&!t.isSynthetic&&this.ui.setTerrainProvenanceReal(t);const n=this.terrainManager.getDemPayload();n&&this.floodWaterManager.attachDEM(n),this.ui.setLoadingProgress("Ingesting Dernau vector overlays...",55);try{const i=await this.overlayManager.loadAll();console.log("🗺️ Overlays initialized:",i);const r=this.overlayManager.getRawDatasets();this.floodWaterManager.indexAssets(r)}catch(i){console.warn("⚠️ Warning during overlay loading:",i)}this.ui.setLoadingProgress("Configuring camera viewports & telemetry...",85),this.viewer.onRenderFrame=i=>{this.ui.updateFrame(i)},this.viewer.startRenderLoop(i=>{this.controls.update(i),this.floodWaterManager&&this.floodWaterManager.update(i)}),this.ui.setLoadingProgress("System ready.",100),setTimeout(()=>{this.ui.hideLoading()},400),this.isInitialized=!0,console.log("✅ HighWater 3D Milestone 7 initialized successfully.")}catch(e){if(console.error("❌ HighWater 3D Initialization failed:",e),this.ui)this.ui.showError(e.message||"Fatal error during 3D engine startup.");else{const t=document.getElementById("error-overlay"),n=document.getElementById("error-msg-text");n&&(n.textContent=e.message),t&&t.classList.remove("hidden")}}}dispose(){this.ui&&this.ui.dispose(),this.floodWaterManager&&this.floodWaterManager.dispose(),this.overlayManager&&this.overlayManager.dispose(),this.terrainManager&&this.terrainManager.dispose(),this.controls&&this.controls.dispose(),this.viewer&&this.viewer.dispose(),this.isInitialized=!1}}const Lo=new ev;window.highWaterApp=Lo;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Lo.init()):Lo.init();
//# sourceMappingURL=index-VsiI3pr2.js.map
