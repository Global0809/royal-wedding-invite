(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="169",cs={ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ud=0,cl=1,Nd=2,xc=1,qh=2,Xn=3,Cn=0,Ge=1,de=2,Zn=0,ls=1,Xs=2,ll=3,hl=4,Fd=5,Ci=100,Od=101,Bd=102,zd=103,kd=104,Gd=200,Hd=201,Vd=202,Wd=203,Aa=204,Ra=205,Xd=206,Yd=207,qd=208,Kd=209,Zd=210,jd=211,Jd=212,$d=213,Qd=214,Ca=0,Pa=1,La=2,fs=3,Ia=4,Da=5,Ua=6,Na=7,Kh=0,tf=1,ef=2,_i=0,Zh=1,jh=2,Jh=3,Mc=4,nf=5,$h=6,Qh=7,tu=300,ps=301,ms=302,er=303,Fa=304,pr=306,Ii=1e3,qn=1001,Oa=1002,tn=1003,sf=1004,po=1005,hn=1006,Dr=1007,Li=1008,ti=1009,eu=1010,nu=1011,Ys=1012,yc=1013,Di=1014,Dn=1015,jn=1016,Sc=1017,wc=1018,gs=1020,iu=35902,su=1021,ou=1022,An=1023,ru=1024,au=1025,hs=1026,_s=1027,Ec=1028,bc=1029,cu=1030,Tc=1031,Ac=1033,Xo=33776,Yo=33777,qo=33778,Ko=33779,Ba=35840,za=35841,ka=35842,Ga=35843,Ha=36196,Va=37492,Wa=37496,Xa=37808,Ya=37809,qa=37810,Ka=37811,Za=37812,ja=37813,Ja=37814,$a=37815,Qa=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,Zo=36492,oc=36494,rc=36495,lu=36283,ac=36284,cc=36285,lc=36286,of=3200,rf=3201,hu=0,af=1,mi="",En="srgb",xi="srgb-linear",Rc="display-p3",mr="display-p3-linear",nr="linear",Me="srgb",ir="rec709",sr="p3",Gi=7680,ul=519,cf=512,lf=513,hf=514,uu=515,uf=516,df=517,ff=518,pf=519,dl=35044,Cc=35048,fl="300 es",Kn=2e3,or=2001;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pl=1234567;const zs=Math.PI/180,qs=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Pc(i,t){return(i%t+t)%t}function mf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gf(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function vf(i,t=1){return t-Math.abs(Pc(i,t*2)-t)}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sf(i,t){return i+Math.random()*(t-i)}function wf(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(pl=i);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(i){return i*zs}function Tf(i){return i*qs}function Af(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),p=r((t-n)/2),f=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:zs,RAD2DEG:qs,generateUUID:Oi,clamp:Ue,euclideanModulo:Pc,mapLinear:mf,inverseLerp:gf,lerp:ks,damp:_f,pingpong:vf,smoothstep:xf,smootherstep:Mf,randInt:yf,randFloat:Sf,randFloatSpread:wf,seededRandom:Ef,degToRad:bf,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Pf,normalize:qe,denormalize:is};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,o,r,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],u=s[6],M=s[1],v=s[4],y=s[7],C=s[2],E=s[5],b=s[8];return o[0]=r*_+a*M+c*C,o[3]=r*m+a*v+c*E,o[6]=r*u+a*y+c*b,o[1]=l*_+h*M+d*C,o[4]=l*m+h*v+d*E,o[7]=l*u+h*y+d*b,o[2]=p*_+f*M+g*C,o[5]=p*m+f*v+g*E,o[8]=p*u+f*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,p=a*c-h*o,f=l*o-r*c,g=e*d+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Qt;function du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){const i=rr("canvas");return i.style.display="block",i}const ml={};function jo(i){i in ml||(ml[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Df(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const gl=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_l=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),As={[xi]:{transfer:nr,primaries:ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:Me,primaries:ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:nr,primaries:sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(_l),fromReference:i=>i.applyMatrix3(gl)},[Rc]:{transfer:Me,primaries:sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(_l),fromReference:i=>i.applyMatrix3(gl).convertLinearToSRGB()}},Nf=new Set([xi,mr]),ue={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=As[t].toReference,s=As[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return As[i].primaries},getTransfer:function(i){return i===mi?nr:As[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(As[t].luminanceCoefficients)}};function us(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class Ff{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=rr("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=us(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Of=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Fr(s[r].image)):o.push(Fr(s[r]))}else o=Fr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ff.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bf=0;class Ye extends Fi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=qn,s=qn,o=hn,r=Li,a=An,c=ti,l=Ye.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Oi(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ii:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ii:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=tu;Ye.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,C=(u+1)/2,E=(h+p)/4,b=(d+_)/4,P=(g+m)/4;return v>y&&v>C?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=E/n,o=b/n):y>C?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=P/s):C<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),n=b/o,s=P/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends Fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==p||l!==f||h!==g){let m=1-a;const u=c*p+l*f+h*g+d*_,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,u*M);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const y=a*M;if(c=c*m+p*y,l=l*m+f*y,h=h*m+g*y,d=d*m+_*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=o[r],p=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+c*f-l*p,t[e+1]=c*g+h*p+l*d-a*f,t[e+2]=l*g+h*f+a*p-c*d,t[e+3]=h*g-a*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(o/2),p=c(n/2),f=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"YXZ":this._x=p*h*d+l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"ZXY":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d-p*f*g;break;case"ZYX":this._x=p*h*d-l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d+p*f*g;break;case"YZX":this._x=p*h*d+l*f*g,this._y=l*f*d+p*h*g,this._z=l*h*g-p*f*d,this._w=l*h*d-p*f*g;break;case"XZY":this._x=p*h*d-l*f*g,this._y=l*f*d-p*h*g,this._z=l*h*g+p*f*d,this._w=l*h*d+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+c*l+r*d-a*h,this.y=n+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new L,vl=new Un;class Bi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Mn):Mn.fromBufferAttribute(o,r),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),go.subVectors(this.max,Rs),Vi.subVectors(t.a,Rs),Wi.subVectors(t.b,Rs),Xi.subVectors(t.c,Rs),ri.subVectors(Wi,Vi),ai.subVectors(Xi,Wi),Si.subVectors(Vi,Xi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Si.z,Si.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!Br(e,Vi,Wi,Xi,go)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,Vi,Wi,Xi,go))?!1:(_o.crossVectors(ri,ai),e=[_o.x,_o.y,_o.z],Br(e,Vi,Wi,Xi,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,mo=new Bi,Vi=new L,Wi=new L,Xi=new L,ri=new L,ai=new L,Si=new L,Rs=new L,go=new L,_o=new L,wi=new L;function Br(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){wi.fromArray(i,o);const a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),l=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gf=new Bi,Cs=new L,zr=new L;class so{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(zr)),this.expandByPoint(Cs.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new L,kr=new L,vo=new L,ci=new L,Gr=new L,xo=new L,Hr=new L;class mu{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(kr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(vo),a=ci.dot(this.direction),c=-ci.dot(vo),l=ci.lengthSq(),h=Math.abs(1-r*r);let d,p,f,g;if(h>0)if(d=r*c-a,p=r*a-c,g=o*h,d>=0)if(p>=-g)if(p<=g){const _=1/h;d*=_,p*=_,f=d*(d+r*p+2*a)+p*(r*d+p+2*c)+l}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-g?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l):p<=g?(d=0,p=Math.min(Math.max(-o,-c),o),f=p*(p+2*c)+l):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(kr).addScaledVector(vo,p),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,o){Gr.subVectors(e,t),xo.subVectors(n,t),Hr.crossVectors(Gr,xo);let r=this.direction.dot(Hr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(xo.crossVectors(ci,xo));if(c<0)return null;const l=a*this.direction.dot(Gr.cross(ci));if(l<0||c+l>r)return null;const h=-a*ci.dot(Hr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m)}set(t,e,n,s,o,r,a,c,l,h,d,p,f,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),o=1/Yi.setFromMatrixColumn(t,1).length(),r=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=r*h,f=r*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,g=l*h,_=l*d;e[0]=p+_*a,e[4]=g*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=r*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,g=l*h,_=l*d;e[0]=p-_*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=_-p*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const p=r*h,f=r*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*d,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=p-_*d}else if(t.order==="XZY"){const p=r*c,f=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+_,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Vf)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(n,rn),li.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(n,rn)),li.normalize(),Mo.crossVectors(rn,li),s[0]=li.x,s[4]=Mo.x,s[8]=rn.x,s[1]=li.y,s[5]=Mo.y,s[9]=rn.y,s[2]=li.z,s[6]=Mo.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],u=n[14],M=n[3],v=n[7],y=n[11],C=n[15],E=s[0],b=s[4],P=s[8],U=s[12],x=s[1],w=s[5],D=s[9],k=s[13],V=s[2],et=s[6],W=s[10],lt=s[14],F=s[3],dt=s[7],st=s[11],gt=s[15];return o[0]=r*E+a*x+c*V+l*F,o[4]=r*b+a*w+c*et+l*dt,o[8]=r*P+a*D+c*W+l*st,o[12]=r*U+a*k+c*lt+l*gt,o[1]=h*E+d*x+p*V+f*F,o[5]=h*b+d*w+p*et+f*dt,o[9]=h*P+d*D+p*W+f*st,o[13]=h*U+d*k+p*lt+f*gt,o[2]=g*E+_*x+m*V+u*F,o[6]=g*b+_*w+m*et+u*dt,o[10]=g*P+_*D+m*W+u*st,o[14]=g*U+_*k+m*lt+u*gt,o[3]=M*E+v*x+y*V+C*F,o[7]=M*b+v*w+y*et+C*dt,o[11]=M*P+v*D+y*W+C*st,o[15]=M*U+v*k+y*lt+C*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+o*c*d-s*l*d-o*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+o*r*p-s*r*f+s*l*h-o*c*h)+m*(+e*l*d-e*a*f-o*r*d+n*r*f+o*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*p+s*r*d-n*r*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],u=t[15],M=d*m*l-_*p*l+_*c*f-a*m*f-d*c*u+a*p*u,v=g*p*l-h*m*l-g*c*f+r*m*f+h*c*u-r*p*u,y=h*_*l-g*d*l+g*a*f-r*_*f-h*a*u+r*d*u,C=g*d*c-h*_*c-g*a*p+r*_*p+h*a*m-r*d*m,E=e*M+n*v+s*y+o*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=M*b,t[1]=(_*p*o-d*m*o-_*s*f+n*m*f+d*s*u-n*p*u)*b,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*u+n*c*u)*b,t[3]=(d*c*o-a*p*o-d*s*l+n*p*l+a*s*f-n*c*f)*b,t[4]=v*b,t[5]=(h*m*o-g*p*o+g*s*f-e*m*f-h*s*u+e*p*u)*b,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*u-e*c*u)*b,t[7]=(r*p*o-h*c*o+h*s*l-e*p*l-r*s*f+e*c*f)*b,t[8]=y*b,t[9]=(g*d*o-h*_*o-g*n*f+e*_*f+h*n*u-e*d*u)*b,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*u+e*a*u)*b,t[11]=(h*a*o-r*d*o-h*n*l+e*d*l+r*n*f-e*a*f)*b,t[12]=C*b,t[13]=(h*_*s-g*d*s+g*n*p-e*_*p-h*n*m+e*d*m)*b,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*b,t[15]=(r*d*s-h*a*s+h*n*c-e*d*c-r*n*p+e*a*p)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,d=a+a,p=o*l,f=o*h,g=o*d,_=r*h,m=r*d,u=a*d,M=c*l,v=c*h,y=c*d,C=n.x,E=n.y,b=n.z;return s[0]=(1-(_+u))*C,s[1]=(f+y)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(p+u))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+v)*b,s[9]=(m-M)*b,s[10]=(1-(p+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Yi.set(s[0],s[1],s[2]).length();const r=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/o,h=1/r,d=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Kn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(a===Kn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===or)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Kn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(r-o),p=(e+t)*l,f=(n+s)*h;let g,_;if(a===Kn)g=(r+o)*d,_=-2*d;else if(a===or)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new L,yn=new xe,Hf=new L(0,0,0),Vf=new L(1,1,1),li=new L,Mo=new L,rn=new L,xl=new xe,Ml=new Un;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wf=0;const yl=new L,qi=new Un,kn=new xe,yo=new L,Ps=new L,Xf=new L,Yf=new Un,Sl=new L(1,0,0),wl=new L(0,1,0),El=new L(0,0,1),bl={type:"added"},qf={type:"removed"},Ki={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Re extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new L,e=new Nn,n=new Un,s=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Qt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(El,t)}translateOnAxis(t,e){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(El,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ps,yo,this.up):kn.lookAt(yo,Ps,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(kn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new L(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new L,Gn=new L,Wr=new L,Hn=new L,Zi=new L,ji=new L,Tl=new L,Xr=new L,Yr=new L,qr=new L,Kr=new ve,Zr=new ve,jr=new ve;class bn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Sn.subVectors(s,e),Gn.subVectors(n,e),Wr.subVectors(t,e);const r=Sn.dot(Sn),a=Sn.dot(Gn),c=Sn.dot(Wr),l=Gn.dot(Gn),h=Gn.dot(Wr),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(l*c-a*h)*p,g=(r*h-a*c)*p;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Hn.x),c.addScaledVector(r,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Kr.setScalar(0),Zr.setScalar(0),jr.setScalar(0),Kr.fromBufferAttribute(t,e),Zr.fromBufferAttribute(t,n),jr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Kr,o.x),r.addScaledVector(Zr,o.y),r.addScaledVector(jr,o.z),r}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Gn.subVectors(t,e),Sn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Zi.subVectors(s,n),ji.subVectors(o,n),Xr.subVectors(t,n);const c=Zi.dot(Xr),l=ji.dot(Xr);if(c<=0&&l<=0)return e.copy(n);Yr.subVectors(t,s);const h=Zi.dot(Yr),d=ji.dot(Yr);if(h>=0&&d<=h)return e.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Zi,r);qr.subVectors(t,o);const f=Zi.dot(qr),g=ji.dot(qr);if(g>=0&&f<=g)return e.copy(o);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ji,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Tl.subVectors(o,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Tl,a);const u=1/(m+_+p);return r=_*u,a=p*u,e.copy(n).addScaledVector(Zi,r).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Pc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Jr(r,o,t+1/3),this.g=Jr(r,o,t),this.b=Jr(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ue.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ue(Ve.r*255,0,255))*65536+Math.round(Ue(Ve.g*255,0,255))*256+Math.round(Ue(Ve.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,o=Ve.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case n:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-n)/d+2;break;case o:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=En){ue.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(So);const n=ks(hi.h,So.h,e),s=ks(hi.s,So.s,e),o=ks(hi.l,So.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Xt;Xt.NAMES=_u;let Kf=0;class oo extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=ls,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends oo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new L,wo=new at;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),o=qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}}class vu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xu extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zf=0;const pn=new xe,$r=new Re,Ji=new L,an=new Bi,Ls=new Bi,Oe=new L;class Be extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?xu:vu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];an.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(an.min,Ls.min),an.expandByPoint(Oe),Oe.addVectors(an.max,Ls.max),an.expandByPoint(Oe)):(an.expandByPoint(Ls.min),an.expandByPoint(Ls.max))}an.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Oe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(t,l),Oe.add(Ji)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,h=new L,d=new L,p=new at,f=new at,g=new at,_=new L,m=new L;function u(P,U,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,x),p.fromBufferAttribute(o,P),f.fromBufferAttribute(o,U),g.fromBufferAttribute(o,x),h.sub(l),d.sub(l),f.sub(p),g.sub(p);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(_),a[U].add(_),a[x].add(_),c[P].add(m),c[U].add(m),c[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,U=M.length;P<U;++P){const x=M[P],w=x.start,D=x.count;for(let k=w,V=w+D;k<V;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const v=new L,y=new L,C=new L,E=new L;function b(P){C.fromBufferAttribute(s,P),E.copy(C);const U=a[P];v.copy(U),v.sub(C.multiplyScalar(C.dot(U))).normalize(),y.crossVectors(E,U);const w=y.dot(c[P])<0?-1:1;r.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,U=M.length;P<U;++P){const x=M[P],w=x.start,D=x.count;for(let k=w,V=w+D;k<V;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new L,o=new L,r=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new en(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new xe,Ei=new mu,Eo=new so,Rl=new L,bo=new L,To=new L,Ao=new L,Qr=new L,Ro=new L,Cl=new L,Co=new L;class K extends Re{constructor(t=new Be,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ro.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(Qr.fromBufferAttribute(d,t),r?Ro.addScaledVector(Qr,h):Ro.addScaledVector(Qr.sub(e),h))}e.add(Ro)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(o),Ei.copy(t.ray).recast(t.near),!(Eo.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Eo,Rl)===null||Ei.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(o).invert(),Ei.copy(t.ray).applyMatrix4(Al),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=v;y<C;y+=3){const E=a.getX(y),b=a.getX(y+1),P=a.getX(y+2);s=Po(this,u,t,n,l,h,d,E,b,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const M=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Po(this,r,t,n,l,h,d,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=p.length;g<_;g++){const m=p[g],u=r[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=v;y<C;y+=3){const E=y,b=y+1,P=y+2;s=Po(this,u,t,n,l,h,d,E,b,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,u=_;m<u;m+=3){const M=m,v=m+1,y=m+2;s=Po(this,r,t,n,l,h,d,M,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jf(i,t,e,n,s,o,r,a){let c;if(t.side===Ge?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===Cn,a),c===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Co);return l<e.near||l>e.far?null:{distance:l,point:Co.clone(),object:i}}function Po(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,bo),i.getVertexPosition(c,To),i.getVertexPosition(l,Ao);const h=jf(i,t,e,n,bo,To,Ao,Cl);if(h){const d=new L;bn.getBarycoord(Cl,bo,To,Ao,d),s&&(h.uv=bn.getInterpolatedAttribute(s,a,c,l,d,new at)),o&&(h.uv1=bn.getInterpolatedAttribute(o,a,c,l,d,new at)),r&&(h.normal=bn.getInterpolatedAttribute(r,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new L,materialIndex:0};bn.getNormal(bo,To,Ao,p.normal),h.face=p,h.barycoord=d}return h}class Tt extends Be{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function g(_,m,u,M,v,y,C,E,b,P,U){const x=y/b,w=C/P,D=y/2,k=C/2,V=E/2,et=b+1,W=P+1;let lt=0,F=0;const dt=new L;for(let st=0;st<W;st++){const gt=st*w-k;for(let Dt=0;Dt<et;Dt++){const Gt=Dt*x-D;dt[_]=Gt*M,dt[m]=gt*v,dt[u]=V,l.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[u]=E>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Dt/b),d.push(1-st/P),lt+=1}}for(let st=0;st<P;st++)for(let gt=0;gt<b;gt++){const Dt=p+gt+et*st,Gt=p+gt+et*(st+1),z=p+(gt+1)+et*(st+1),q=p+(gt+1)+et*st;c.push(Dt,Gt,q),c.push(Gt,z,q),F+=6}a.addGroup(f,F,U),f+=F,p+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=vs(i[e]);for(const s in n)t[s]=n[s]}return t}function Jf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Ks={clone:vs,merge:Ze};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends oo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Jf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yu extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new L,Pl=new at,Ll=new at;class ln extends yu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Ll),e.subVectors(Ll,Pl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,Qi=1;class tp extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln($i,Qi,t,e);s.layers=this.layers,this.add(s);const o=new ln($i,Qi,t,e);o.layers=this.layers,this.add(o);const r=new ln($i,Qi,t,e);r.layers=this.layers,this.add(r);const a=new ln($i,Qi,t,e);a.layers=this.layers,this.add(a);const c=new ln($i,Qi,t,e);c.layers=this.layers,this.add(c);const l=new ln($i,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Su extends Ye{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ep extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Su(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),o=new je({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Zn});o.uniforms.tEquirect.value=e;const r=new K(s,o),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=hn),new tp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const ta=new L,np=new L,ip=new Qt;class pi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ta.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ip.getNormalMatrix(t),s=this.coplanarPoint(ta).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new so,Lo=new L;class Lc{constructor(t=new pi,e=new pi,n=new pi,s=new pi,o=new pi,r=new pi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],g=s[9],_=s[10],m=s[11],u=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-o,p-l,m-f,y-u).normalize(),n[1].setComponents(c+o,p+l,m+f,y+u).normalize(),n[2].setComponents(c+r,p+h,m+g,y+M).normalize(),n[3].setComponents(c-r,p-h,m-g,y-M).normalize(),n[4].setComponents(c-a,p-d,m-_,y-v).normalize(),e===Kn)n[5].setComponents(c+a,p+d,m+_,y+v).normalize();else if(e===or)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function sp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<d.length;f++){const g=d[p],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,d[p]=_)}d.length=p+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Te extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,p=e/c,f=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const M=u*p-r;for(let v=0;v<l;v++){const y=v*d-o;g.push(y,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<a;M++){const v=M+l*u,y=M+l*(u+1),C=M+1+l*(u+1),E=M+1+l*u;f.push(v,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.widthSegments,t.heightSegments)}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:op,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:cp,alphatest_fragment:lp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:wp,color_fragment:Ep,color_pars_fragment:bp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Jp,envmap_vertex:Gp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Zp,lights_pars_begin:jp,lights_toon_fragment:$p,lights_toon_pars_fragment:Qp,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:o0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:_0,morphcolor_vertex:v0,morphnormal_vertex:x0,morphtarget_pars_vertex:M0,morphtarget_vertex:y0,normal_fragment_begin:S0,normal_fragment_maps:w0,normal_pars_fragment:E0,normal_pars_vertex:b0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:L0,opaque_fragment:I0,packing:D0,premultiplied_alpha_fragment:U0,project_vertex:N0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:G0,shadowmap_vertex:H0,shadowmask_pars_fragment:V0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:Y0,skinnormal_vertex:q0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:j0,tonemapping_pars_fragment:J0,transmission_fragment:$0,transmission_pars_fragment:Q0,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:om,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:cm,cube_frag:lm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:Sm,meshmatcap_frag:wm,meshnormal_vert:Em,meshnormal_frag:bm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Im,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},Et={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ln={basic:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ze([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ze([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ze([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ze([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ze([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ze([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ze([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ze([Et.lights,Et.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ln.physical={uniforms:Ze([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Io={r:0,b:0,g:0},Ti=new Nn,Bm=new xe;function zm(i,t,e,n,s,o,r){const a=new Xt(0);let c=o===!0?0:1,l,h,d=null,p=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const y=g(M);y===null?u(a,c):y&&y.isColor&&(u(y,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===pr)?(h===void 0&&(h=new K(new Tt(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:vs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(v.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Ti)),h.material.toneMapped=ue.getTransfer(y.colorSpace)!==Me,(d!==y||p!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new K(new Te(2,2),new je({name:"BackgroundMaterial",uniforms:vs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,v){M.getRGB(Io,Mu(i)),n.buffers.color.setClear(Io.r,Io.g,Io.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:_,addToRenderList:m}}function km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,r=!1;function a(x,w,D,k,V){let et=!1;const W=d(k,D,w);o!==W&&(o=W,l(o.object)),et=f(x,k,D,V),et&&g(x,k,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(et||r)&&(r=!1,y(x,w,D,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,w,D){const k=D.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let et=V[w.id];et===void 0&&(et={},V[w.id]=et);let W=et[k];return W===void 0&&(W=p(c()),et[k]=W),W}function p(x){const w=[],D=[],k=[];for(let V=0;V<e;V++)w[V]=0,D[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:D,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,w,D,k){const V=o.attributes,et=w.attributes;let W=0;const lt=D.getAttributes();for(const F in lt)if(lt[F].location>=0){const st=V[F];let gt=et[F];if(gt===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;W++}return o.attributesNum!==W||o.index!==k}function g(x,w,D,k){const V={},et=w.attributes;let W=0;const lt=D.getAttributes();for(const F in lt)if(lt[F].location>=0){let st=et[F];st===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),V[F]=gt,W++}o.attributes=V,o.attributesNum=W,o.index=k}function _(){const x=o.newAttributes;for(let w=0,D=x.length;w<D;w++)x[w]=0}function m(x){u(x,0)}function u(x,w){const D=o.newAttributes,k=o.enabledAttributes,V=o.attributeDivisors;D[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),V[x]!==w&&(i.vertexAttribDivisor(x,w),V[x]=w)}function M(){const x=o.newAttributes,w=o.enabledAttributes;for(let D=0,k=w.length;D<k;D++)w[D]!==x[D]&&(i.disableVertexAttribArray(D),w[D]=0)}function v(x,w,D,k,V,et,W){W===!0?i.vertexAttribIPointer(x,w,D,V,et):i.vertexAttribPointer(x,w,D,k,V,et)}function y(x,w,D,k){_();const V=k.attributes,et=D.getAttributes(),W=w.defaultAttributeValues;for(const lt in et){const F=et[lt];if(F.location>=0){let dt=V[lt];if(dt===void 0&&(lt==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),lt==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),dt!==void 0){const st=dt.normalized,gt=dt.itemSize,Dt=t.get(dt);if(Dt===void 0)continue;const Gt=Dt.buffer,z=Dt.type,q=Dt.bytesPerElement,mt=z===i.INT||z===i.UNSIGNED_INT||dt.gpuType===yc;if(dt.isInterleavedBufferAttribute){const X=dt.data,pt=X.stride,ut=dt.offset;if(X.isInstancedInterleavedBuffer){for(let St=0;St<F.locationSize;St++)u(F.location+St,X.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let St=0;St<F.locationSize;St++)m(F.location+St);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let St=0;St<F.locationSize;St++)v(F.location+St,gt/F.locationSize,z,st,pt*q,(ut+gt/F.locationSize*St)*q,mt)}else{if(dt.isInstancedBufferAttribute){for(let X=0;X<F.locationSize;X++)u(F.location+X,dt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let X=0;X<F.locationSize;X++)m(F.location+X);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let X=0;X<F.locationSize;X++)v(F.location+X,gt/F.locationSize,z,st,gt*q,gt/F.locationSize*X*q,mt)}}else if(W!==void 0){const st=W[lt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(F.location,st);break;case 3:i.vertexAttrib3fv(F.location,st);break;case 4:i.vertexAttrib4fv(F.location,st);break;default:i.vertexAttrib1fv(F.location,st)}}}}M()}function C(){P();for(const x in n){const w=n[x];for(const D in w){const k=w[D];for(const V in k)h(k[V].object),delete k[V];delete w[D]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const w=n[x.id];for(const D in w){const k=w[D];for(const V in k)h(k[V].object),delete k[V];delete w[D]}delete n[x.id]}function b(x){for(const w in n){const D=n[w];if(D[x.id]===void 0)continue;const k=D[x.id];for(const V in k)h(k[V].object),delete k[V];delete D[x.id]}}function P(){U(),r=!0,o!==s&&(o=s,l(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Gm(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<p.length;_++)e.update(g,n,p[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==An&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ti&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Dn&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:E}}function Vm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new pi,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const M=o?0:n,v=M*4;let y=u.clippingState||null;c.value=y,y=h(g,p,v,f);for(let C=0;C!==v;++C)y[C]=e[C];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=f+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=f;v!==_;++v,y+=4)r.copy(d[v]).applyMatrix4(M,a),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Wm(i){let t=new WeakMap;function e(r,a){return a===er?r.mapping=ps:a===Fa&&(r.mapping=ms),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===er||a===Fa)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new ep(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ic extends yu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rs=4,Il=[.125,.215,.35,.446,.526,.582],Pi=20,ea=new Ic,Dl=new Xt;let na=null,ia=0,sa=0,oa=!1;const Ri=(1+Math.sqrt(5))/2,ts=1/Ri,Ul=[new L(-Ri,ts,0),new L(Ri,ts,0),new L(-ts,0,Ri),new L(ts,0,Ri),new L(0,Ri,-ts),new L(0,Ri,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=oa,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:jn,format:An,colorSpace:xi,depthBuffer:!1},s=Fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(o)),this._blurMaterial=Ym(o,t,e)}return s}_compileMaterial(t){const e=new K(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s){const a=new ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Dl),h.toneMapping=_i,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new K(new Tt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Dl),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):M===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const v=this._cubeSize;Do(s,M*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new K(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Do(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Ul[(s-o-1)%Ul.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new K(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):Pi;m>Pi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const u=[];let M=0;for(let b=0;b<Pi;++b){const P=b/_,U=Math.exp(-P*P/2);u.push(U),b===0?M+=U:b<m&&(M+=2*U)}for(let b=0;b<u.length;b++)u[b]=u[b]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const y=this._sizeLods[s],C=3*y*(s>v-rs?s-v+rs:0),E=4*(this._cubeSize-y);Do(e,C,E,3*y,2*y),c.setRenderTarget(e),c.render(d,ea)}}function Xm(i){const t=[],e=[],n=[];let s=i;const o=i-rs+1+Il.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-rs?c=Il[r-i+rs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,u=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(u*g*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,P=E>2?0:-1,U=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(U,_*g*E),v.set(p,m*g*E);const x=[E,E,E,E,E,E];y.set(x,u*g*E)}const C=new Be;C.setAttribute("position",new en(M,_)),C.setAttribute("uv",new en(v,m)),C.setAttribute("faceIndex",new en(y,u)),t.push(C),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fl(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ym(i,t,e){const n=new Float32Array(Pi),s=new L(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ol(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Bl(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===er||c===Fa,h=c===ps||c===ms;if(l||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Nl(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Nl(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&jo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){const s={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}p.removeEventListener("dispose",r),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){const C=M[v+0],E=M[v+1],b=M[v+2];p.push(C,E,E,b,b,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const C=v+0,E=v+1,b=v+2;p.push(C,E,E,b,b,C)}}else return;const m=new(du(p)?xu:vu)(p,1);m.version=_;const u=o.get(d);u&&t.remove(u),o.set(d,m)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function jm(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function c(p,f){i.drawElements(n,f,o,p*r),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,p*r,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];e.update(m,n,1)}function d(p,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/r,f[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=f[M];for(let M=0;M<_.length;M++)e.update(u,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){const n=new WeakMap,s=new ve;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let U=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*C*4*d),b=new pu(E,y,C,d);b.type=Dn,b.needsUpdate=!0;const P=v*4;for(let x=0;x<d;x++){const w=m[x],D=u[x],k=M[x],V=y*C*4*x;for(let et=0;et<w.count;et++){const W=et*P;f===!0&&(s.fromBufferAttribute(w,et),E[V+W+0]=s.x,E[V+W+1]=s.y,E[V+W+2]=s.z,E[V+W+3]=0),g===!0&&(s.fromBufferAttribute(D,et),E[V+W+4]=s.x,E[V+W+5]=s.y,E[V+W+6]=s.z,E[V+W+7]=0),_===!0&&(s.fromBufferAttribute(k,et),E[V+W+8]=s.x,E[V+W+9]=s.y,E[V+W+10]=s.z,E[V+W+11]=k.itemSize===4?s.w:1)}}p={count:d,texture:b,size:new at(y,C)},n.set(a,p),a.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function Qm(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Eu extends Ye{constructor(t,e,n,s,o,r,a,c,l,h=hs){if(h!==hs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Di),n===void 0&&h===_s&&(n=gs),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bu=new Ye,zl=new Eu(1,1),Tu=new pu,Au=new kf,Ru=new Su,kl=[],Gl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=kl[s];if(o===void 0&&(o=new Float32Array(s),kl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=Gl[t];e===void 0&&(e=new Int32Array(t),Gl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),Fe(e,n)}}function og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),Fe(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Fe(e,n)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=uu,o=zl):o=bu,e.setTexture2D(t||o,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function _g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tu,s)}function xg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return og;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function wg(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tg(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Rg(i,t){i.uniform2iv(this.addr,t)}function Cg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){const n=this.cache,s=t.length,o=gr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||bu,o[r])}function Fg(i,t,e){const n=this.cache,s=t.length,o=gr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Au,o[r])}function Og(i,t,e){const n=this.cache,s=t.length,o=gr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ru,o[r])}function Bg(i,t,e){const n=this.cache,s=t.length,o=gr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Tu,o[r])}function zg(i){switch(i){case 5126:return Mg;case 35664:return yg;case 35665:return Sg;case 35666:return wg;case 35674:return Eg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function Vg(i,t,e){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const o=ra.exec(n),r=ra.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Xl(e,l===void 0?new kg(a,i,t):new Gg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Hg(a),Xl(e,d)),e=d}}}class Jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Vg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Yl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function qg(i){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i);let n;switch(t===e?n="":t===sr&&e===ir?n="LinearDisplayP3ToLinearSRGB":t===ir&&e===sr&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case mr:return[n,"LinearTransferOETF"];case En:case Rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Yg(i.getShaderSource(t),r)}else return s}function Kg(i,t){const e=qg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zg(i,t){let e;switch(t){case Zh:e="Linear";break;case jh:e="Reinhard";break;case Jh:e="Cineon";break;case Mc:e="ACESFilmic";break;case $h:e="AgX";break;case Qh:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Uo=new L;function jg(){ue.getLuminanceCoefficients(Uo);const i=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Os(i){return i!==""}function Kl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(t_,n_)}const e_=new Map;function n_(i,t){let e=$t[t];if(e===void 0){const n=e_.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(i_,s_)}function s_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Jl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function r_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case tf:t="ENVMAP_BLENDING_MIX";break;case ef:t="ENVMAP_BLENDING_ADD";break}return t}function l_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function h_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=o_(e),l=r_(e),h=a_(e),d=c_(e),p=l_(e),f=Jg(e),g=$g(o),_=s.createProgram();let m,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(m=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?$t.tonemapping_pars_fragment:"",e.toneMapping!==_i?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),r=hc(r),r=Kl(r,e),r=Zl(r,e),a=hc(a),a=Kl(a,e),a=Zl(a,e),r=jl(r),a=jl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=M+m+r,y=M+u+a,C=Yl(s,s.VERTEX_SHADER,v),E=Yl(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(w){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(E).trim();let et=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,E);else{const lt=ql(s,C,"vertex"),F=ql(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+lt+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||V==="")&&(W=!1);W&&(w.diagnostics={runnable:et,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:u}})}s.deleteShader(C),s.deleteShader(E),P=new Jo(s,_),U=Qg(s,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Wg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let u_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f_(t),e.set(t,n)),n}}class f_{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}}function p_(i,t,e,n,s,o,r){const a=new gu,c=new d_,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function u(x,w,D,k,V){const et=k.fog,W=V.geometry,lt=x.isMeshStandardMaterial?k.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||lt),dt=F&&F.mapping===pr?F.image.height:null,st=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Dt=gt!==void 0?gt.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let z,q,mt,X;if(st){const $e=Ln[st];z=$e.vertexShader,q=$e.fragmentShader}else z=x.vertexShader,q=x.fragmentShader,c.update(x),mt=c.getVertexShaderID(x),X=c.getFragmentShaderID(x);const pt=i.getRenderTarget(),ut=V.isInstancedMesh===!0,St=V.isBatchedMesh===!0,Ht=!!x.map,It=!!x.matcap,R=!!F,Ot=!!x.aoMap,I=!!x.lightMap,Z=!!x.bumpMap,j=!!x.normalMap,ht=!!x.displacementMap,ot=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,B=x.anisotropy>0,Y=x.clearcoat>0,nt=x.dispersion>0,Q=x.iridescence>0,At=x.sheen>0,_t=x.transmission>0,wt=B&&!!x.anisotropyMap,te=Y&&!!x.clearcoatMap,ft=Y&&!!x.clearcoatNormalMap,Lt=Y&&!!x.clearcoatRoughnessMap,Yt=Q&&!!x.iridescenceMap,qt=Q&&!!x.iridescenceThicknessMap,Pt=At&&!!x.sheenColorMap,oe=At&&!!x.sheenRoughnessMap,xt=!!x.specularMap,Jt=!!x.specularColorMap,N=!!x.specularIntensityMap,Mt=_t&&!!x.transmissionMap,tt=_t&&!!x.thicknessMap,ct=!!x.gradientMap,bt=!!x.alphaMap,Rt=x.alphaTest>0,ee=!!x.alphaHash,Le=!!x.extensions;let Je=_i;x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Je=i.toneMapping);const he={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:q,defines:x.defines,customVertexShaderID:mt,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:St,batchingColor:St&&V._colorsTexture!==null,instancing:ut,instancingColor:ut&&V.instanceColor!==null,instancingMorph:ut&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:xi,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:It,envMap:R,envMapMode:R&&F.mapping,envMapCubeUVHeight:dt,aoMap:Ot,lightMap:I,bumpMap:Z,normalMap:j,displacementMap:f&&ht,emissiveMap:ot,normalMapObjectSpace:j&&x.normalMapType===af,normalMapTangentSpace:j&&x.normalMapType===hu,metalnessMap:A,roughnessMap:S,anisotropy:B,anisotropyMap:wt,clearcoat:Y,clearcoatMap:te,clearcoatNormalMap:ft,clearcoatRoughnessMap:Lt,dispersion:nt,iridescence:Q,iridescenceMap:Yt,iridescenceThicknessMap:qt,sheen:At,sheenColorMap:Pt,sheenRoughnessMap:oe,specularMap:xt,specularColorMap:Jt,specularIntensityMap:N,transmission:_t,transmissionMap:Mt,thicknessMap:tt,gradientMap:ct,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:bt,alphaTest:Rt,alphaHash:ee,combine:x.combine,mapUv:Ht&&m(x.map.channel),aoMapUv:Ot&&m(x.aoMap.channel),lightMapUv:I&&m(x.lightMap.channel),bumpMapUv:Z&&m(x.bumpMap.channel),normalMapUv:j&&m(x.normalMap.channel),displacementMapUv:ht&&m(x.displacementMap.channel),emissiveMapUv:ot&&m(x.emissiveMap.channel),metalnessMapUv:A&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:wt&&m(x.anisotropyMap.channel),clearcoatMapUv:te&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(x.sheenRoughnessMap.channel),specularMapUv:xt&&m(x.specularMap.channel),specularColorMapUv:Jt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:Mt&&m(x.transmissionMap.channel),thicknessMapUv:tt&&m(x.thicknessMap.channel),alphaMapUv:bt&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(j||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Ht||bt),fog:!!et,useFog:x.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===Me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===de,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function M(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)w.push(D),w.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(v(w,x),y(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const w=_[x.type];let D;if(w){const k=Ln[w];D=Ks.clone(k.uniforms)}else D=x.uniforms;return D}function E(x,w){let D;for(let k=0,V=h.length;k<V;k++){const et=h[k];if(et.cacheKey===w){D=et,++D.usedTimes;break}}return D===void 0&&(D=new h_(i,w,x,o),h.push(D)),D}function b(x){if(--x.usedTimes===0){const w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function P(x){c.remove(x)}function U(){c.dispose()}return{getParameters:u,getProgramCacheKey:M,getUniforms:C,acquireProgram:E,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:U}}function m_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function g_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ql(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,p,f,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,p,f,g,_,m){const u=r(d,p,f,g,_,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function c(d,p,f,g,_,m){const u=r(d,p,f,g,_,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||g_),n.length>1&&n.sort(p||$l),s.length>1&&s.sort(p||$l)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function __(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ql,i.set(n,[r])):s>=o.length?(r=new Ql,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let M_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S_(i){const t=new v_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,o=new xe,r=new xe;function a(l){let h=0,d=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,m=0,u=0,M=0,v=0,y=0,C=0,E=0,b=0;l.sort(y_);for(let U=0,x=l.length;U<x;U++){const w=l[U],D=w.color,k=w.intensity,V=w.distance,et=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=D.r*k,d+=D.g*k,p+=D.b*k;else if(w.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(w.sh.coefficients[W],k);b++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const lt=w.shadow,F=e.get(w);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=et,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=W,f++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(D).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,n.spot[_]=W;const lt=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,lt.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[_]=lt.matrix,w.castShadow){const F=e.get(w);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=et,y++}_++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(D).multiplyScalar(k),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=W,m++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const lt=w.shadow,F=e.get(w);F.shadowIntensity=lt.intensity,F.shadowBias=lt.bias,F.shadowNormalBias=lt.normalBias,F.shadowRadius=lt.radius,F.shadowMapSize=lt.mapSize,F.shadowCameraNear=lt.camera.near,F.shadowCameraFar=lt.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=W,g++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(k),W.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[u]=W,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==C||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=C,P.numLightProbes=b,n.version=M_++)}function c(l,h){let d=0,p=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const v=l[u];if(v.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function th(i){const t=new S_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function w_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new th(i),t.set(s,[a])):o>=r.length?(a=new th(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class E_ extends oo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b_ extends oo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(i,t,e){let n=new Lc;const s=new at,o=new at,r=new ve,a=new E_({depthPacking:rf}),c=new b_,l={},h=e.maxTextureSize,d={[Cn]:Ge,[Ge]:Cn,[de]:de},p=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new K(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let u=this.type;this.render=function(E,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const U=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Zn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=u!==Xn&&this.type===Xn,V=u===Xn&&this.type!==Xn;for(let et=0,W=E.length;et<W;et++){const lt=E[et],F=lt.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const dt=F.getFrameExtents();if(s.multiply(dt),o.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/dt.x),s.x=o.x*dt.x,F.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/dt.y),s.y=o.y*dt.y,F.mapSize.y=o.y)),F.map===null||k===!0||V===!0){const gt=this.type!==Xn?{minFilter:tn,magFilter:tn}:{};F.map!==null&&F.map.dispose(),F.map=new Rn(s.x,s.y,gt),F.map.texture.name=lt.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const st=F.getViewportCount();for(let gt=0;gt<st;gt++){const Dt=F.getViewport(gt);r.set(o.x*Dt.x,o.y*Dt.y,o.x*Dt.z,o.y*Dt.w),D.viewport(r),F.updateMatrices(lt,gt),n=F.getFrustum(),y(b,P,F.camera,lt,this.type)}F.isPointLightShadow!==!0&&this.type===Xn&&M(F,P),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,x,w)};function M(E,b){const P=t.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,P,p,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,P,f,_,null)}function v(E,b,P,U){let x=null;const w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)x=w;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=x.uuid,k=b.uuid;let V=l[D];V===void 0&&(V={},l[D]=V);let et=V[k];et===void 0&&(et=x.clone(),V[k]=et,b.addEventListener("dispose",C)),x=et}if(x.visible=b.visible,x.wireframe=b.wireframe,U===Xn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=P}return x}function y(E,b,P,U,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const k=t.update(E),V=E.material;if(Array.isArray(V)){const et=k.groups;for(let W=0,lt=et.length;W<lt;W++){const F=et[W],dt=V[F.materialIndex];if(dt&&dt.visible){const st=v(E,dt,U,x);E.onBeforeShadow(i,E,b,P,k,st,F),i.renderBufferDirect(P,null,k,st,E,F),E.onAfterShadow(i,E,b,P,k,st,F)}}}else if(V.visible){const et=v(E,V,U,x);E.onBeforeShadow(i,E,b,P,k,et,null),i.renderBufferDirect(P,null,k,et,E,null),E.onAfterShadow(i,E,b,P,k,et,null)}}const D=E.children;for(let k=0,V=D.length;k<V;k++)y(D[k],b,P,U,x)}function C(E){E.target.removeEventListener("dispose",C);for(const P in l){const U=l[P],x=E.target.uuid;x in U&&(U[x].dispose(),delete U[x])}}}const C_={[Ca]:Pa,[La]:Ua,[Ia]:Na,[fs]:Da,[Pa]:Ca,[Ua]:La,[Na]:Ia,[Da]:fs};function P_(i){function t(){let N=!1;const Mt=new ve;let tt=null;const ct=new ve(0,0,0,0);return{setMask:function(bt){tt!==bt&&!N&&(i.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){N=bt},setClear:function(bt,Rt,ee,Le,Je){Je===!0&&(bt*=Le,Rt*=Le,ee*=Le),Mt.set(bt,Rt,ee,Le),ct.equals(Mt)===!1&&(i.clearColor(bt,Rt,ee,Le),ct.copy(Mt))},reset:function(){N=!1,tt=null,ct.set(-1,0,0,0)}}}function e(){let N=!1,Mt=!1,tt=null,ct=null,bt=null;return{setReversed:function(Rt){Mt=Rt},setTest:function(Rt){Rt?mt(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Rt){tt!==Rt&&!N&&(i.depthMask(Rt),tt=Rt)},setFunc:function(Rt){if(Mt&&(Rt=C_[Rt]),ct!==Rt){switch(Rt){case Ca:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Rt}},setLocked:function(Rt){N=Rt},setClear:function(Rt){bt!==Rt&&(i.clearDepth(Rt),bt=Rt)},reset:function(){N=!1,tt=null,ct=null,bt=null}}}function n(){let N=!1,Mt=null,tt=null,ct=null,bt=null,Rt=null,ee=null,Le=null,Je=null;return{setTest:function(he){N||(he?mt(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(he){Mt!==he&&!N&&(i.stencilMask(he),Mt=he)},setFunc:function(he,$e,On){(tt!==he||ct!==$e||bt!==On)&&(i.stencilFunc(he,$e,On),tt=he,ct=$e,bt=On)},setOp:function(he,$e,On){(Rt!==he||ee!==$e||Le!==On)&&(i.stencilOp(he,$e,On),Rt=he,ee=$e,Le=On)},setLocked:function(he){N=he},setClear:function(he){Je!==he&&(i.clearStencil(he),Je=he)},reset:function(){N=!1,Mt=null,tt=null,ct=null,bt=null,Rt=null,ee=null,Le=null,Je=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],f=null,g=!1,_=null,m=null,u=null,M=null,v=null,y=null,C=null,E=new Xt(0,0,0),b=0,P=!1,U=null,x=null,w=null,D=null,k=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,W=0;const lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(lt)[1]),et=W>=1):lt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),et=W>=2);let F=null,dt={};const st=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Dt=new ve().fromArray(st),Gt=new ve().fromArray(gt);function z(N,Mt,tt,ct){const bt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(N,Rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<tt;ee++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Mt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Rt}const q={};q[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),mt(i.DEPTH_TEST),o.setFunc(fs),I(!1),Z(cl),mt(i.CULL_FACE),R(Zn);function mt(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function X(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function pt(N,Mt){return h[N]!==Mt?(i.bindFramebuffer(N,Mt),h[N]=Mt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ut(N,Mt){let tt=p,ct=!1;if(N){tt=d.get(Mt),tt===void 0&&(tt=[],d.set(Mt,tt));const bt=N.textures;if(tt.length!==bt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,ee=bt.length;Rt<ee;Rt++)tt[Rt]=i.COLOR_ATTACHMENT0+Rt;tt.length=bt.length,ct=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(tt)}function St(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const Ht={[Ci]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[Bd]:i.FUNC_REVERSE_SUBTRACT};Ht[zd]=i.MIN,Ht[kd]=i.MAX;const It={[Gd]:i.ZERO,[Hd]:i.ONE,[Vd]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[qd]:i.DST_COLOR,[Xd]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Kd]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[$d]:i.CONSTANT_ALPHA,[Qd]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,Mt,tt,ct,bt,Rt,ee,Le,Je,he){if(N===Zn){g===!0&&(X(i.BLEND),g=!1);return}if(g===!1&&(mt(i.BLEND),g=!0),N!==Fd){if(N!==_||he!==P){if((m!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),m=Ci,v=Ci),he)switch(N){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,M=null,y=null,C=null,E.set(0,0,0),b=0,_=N,P=he}return}bt=bt||Mt,Rt=Rt||tt,ee=ee||ct,(Mt!==m||bt!==v)&&(i.blendEquationSeparate(Ht[Mt],Ht[bt]),m=Mt,v=bt),(tt!==u||ct!==M||Rt!==y||ee!==C)&&(i.blendFuncSeparate(It[tt],It[ct],It[Rt],It[ee]),u=tt,M=ct,y=Rt,C=ee),(Le.equals(E)===!1||Je!==b)&&(i.blendColor(Le.r,Le.g,Le.b,Je),E.copy(Le),b=Je),_=N,P=!1}function Ot(N,Mt){N.side===de?X(i.CULL_FACE):mt(i.CULL_FACE);let tt=N.side===Ge;Mt&&(tt=!tt),I(tt),N.blending===ls&&N.transparent===!1?R(Zn):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ct=N.stencilWrite;r.setTest(ct),ct&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function I(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function Z(N){N!==Ud?(mt(i.CULL_FACE),N!==x&&(N===cl?i.cullFace(i.BACK):N===Nd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),x=N}function j(N){N!==w&&(et&&i.lineWidth(N),w=N)}function ht(N,Mt,tt){N?(mt(i.POLYGON_OFFSET_FILL),(D!==Mt||k!==tt)&&(i.polygonOffset(Mt,tt),D=Mt,k=tt)):X(i.POLYGON_OFFSET_FILL)}function ot(N){N?mt(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+V-1),F!==N&&(i.activeTexture(N),F=N)}function S(N,Mt,tt){tt===void 0&&(F===null?tt=i.TEXTURE0+V-1:tt=F);let ct=dt[tt];ct===void 0&&(ct={type:void 0,texture:void 0},dt[tt]=ct),(ct.type!==N||ct.texture!==Mt)&&(F!==tt&&(i.activeTexture(tt),F=tt),i.bindTexture(N,Mt||q[N]),ct.type=N,ct.texture=Mt)}function B(){const N=dt[F];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(N){Dt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Dt.copy(N))}function Pt(N){Gt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Gt.copy(N))}function oe(N,Mt){let tt=c.get(Mt);tt===void 0&&(tt=new WeakMap,c.set(Mt,tt));let ct=tt.get(N);ct===void 0&&(ct=i.getUniformBlockIndex(Mt,N.name),tt.set(N,ct))}function xt(N,Mt){const ct=c.get(Mt).get(N);a.get(Mt)!==ct&&(i.uniformBlockBinding(Mt,ct,N.__bindingPointIndex),a.set(Mt,ct))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},F=null,dt={},h={},d=new WeakMap,p=[],f=null,g=!1,_=null,m=null,u=null,M=null,v=null,y=null,C=null,E=new Xt(0,0,0),b=0,P=!1,U=null,x=null,w=null,D=null,k=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:mt,disable:X,bindFramebuffer:pt,drawBuffers:ut,useProgram:St,setBlending:R,setMaterial:Ot,setFlipSided:I,setCullFace:Z,setLineWidth:j,setPolygonOffset:ht,setScissorTest:ot,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:nt,texImage2D:Lt,texImage3D:Yt,updateUBOMapping:oe,uniformBlockBinding:xt,texStorage2D:te,texStorage3D:ft,texSubImage2D:Q,texSubImage3D:At,compressedTexSubImage2D:_t,compressedTexSubImage3D:wt,scissor:qt,viewport:Pt,reset:Jt}}function eh(i,t,e,n){const s=L_(n);switch(e){case su:return i*t;case ru:return i*t;case au:return i*t*2;case Ec:return i*t/s.components*s.byteLength;case bc:return i*t/s.components*s.byteLength;case cu:return i*t*2/s.components*s.byteLength;case Tc:return i*t*2/s.components*s.byteLength;case ou:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case Ac:return i*t*4/s.components*s.byteLength;case Xo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zo:case oc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lu:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L_(i){switch(i){case ti:case eu:return{byteLength:1,components:1};case Ys:case nu:case jn:return{byteLength:2,components:1};case Sc:case wc:return{byteLength:2,components:4};case Di:case yc:case Dn:return{byteLength:4,components:1};case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return f?new OffscreenCanvas(A,S):rr("canvas")}function _(A,S,B){let Y=1;const nt=ot(A);if((nt.width>B||nt.height>B)&&(Y=B/Math.max(nt.width,nt.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(Y*nt.width),At=Math.floor(Y*nt.height);d===void 0&&(d=g(Q,At));const _t=S?g(Q,At):d;return _t.width=Q,_t.height=At,_t.getContext("2d").drawImage(A,0,0,Q,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+At+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==tn&&A.minFilter!==hn}function u(A){i.generateMipmap(A)}function M(A,S,B,Y,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){const At=nt?nr:ue.getTransfer(Y);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=At===Me?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,S){let B;return A?S===null||S===Di||S===gs?B=i.DEPTH24_STENCIL8:S===Dn?B=i.DEPTH32F_STENCIL8:S===Ys&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===gs?B=i.DEPTH_COMPONENT24:S===Dn?B=i.DEPTH_COMPONENT32F:S===Ys&&(B=i.DEPTH_COMPONENT16),B}function y(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&h.delete(S)}function E(A){const S=A.target;S.removeEventListener("dispose",E),U(S)}function b(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,Y=p.get(B);if(Y){const nt=Y[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(A),Object.keys(Y).length===0&&p.delete(B)}n.remove(A)}function P(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const B=A.source,Y=p.get(B);delete Y[S.__cacheKey],r.memory.textures--}function U(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let nt=0;nt<S.__webglFramebuffer[Y].length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[Y][nt]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let Y=0,nt=B.length;Y<nt;Y++){const Q=n.get(B[Y]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(B[Y])}n.remove(A)}let x=0;function w(){x=0}function D(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function k(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function V(A,S){const B=n.get(A);if(A.isVideoTexture&&j(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function et(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Gt(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function W(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Gt(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function lt(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){z(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const F={[Ii]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},dt={[tn]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},st={[cf]:i.NEVER,[pf]:i.ALWAYS,[lf]:i.LESS,[uu]:i.LEQUAL,[hf]:i.EQUAL,[ff]:i.GEQUAL,[uf]:i.GREATER,[df]:i.NOTEQUAL};function gt(A,S){if(S.type===Dn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===Dr||S.magFilter===po||S.magFilter===Li||S.minFilter===hn||S.minFilter===Dr||S.minFilter===po||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,F[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,F[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,F[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,st[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==po&&S.minFilter!==Li||S.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Dt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Y=S.source;let nt=p.get(Y);nt===void 0&&(nt={},p.set(Y,nt));const Q=k(S);if(Q!==A.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),nt[Q].usedTimes++;const At=nt[A.__cacheKey];At!==void 0&&(nt[A.__cacheKey].usedTimes--,At.usedTimes===0&&P(S)),A.__cacheKey=Q,A.__webglTexture=nt[Q].texture}return B}function Gt(A,S,B){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const nt=Dt(A,S),Q=S.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+B);const At=n.get(Q);if(Q.version!==At.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);const _t=ue.getPrimaries(ue.workingColorSpace),wt=S.colorSpace===mi?null:ue.getPrimaries(S.colorSpace),te=S.colorSpace===mi||_t===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ft=_(S.image,!1,s.maxTextureSize);ft=ht(S,ft);const Lt=o.convert(S.format,S.colorSpace),Yt=o.convert(S.type);let qt=M(S.internalFormat,Lt,Yt,S.colorSpace,S.isVideoTexture);gt(Y,S);let Pt;const oe=S.mipmaps,xt=S.isVideoTexture!==!0,Jt=At.__version===void 0||nt===!0,N=Q.dataReady,Mt=y(S,ft);if(S.isDepthTexture)qt=v(S.format===_s,S.type),Jt&&(xt?e.texStorage2D(i.TEXTURE_2D,1,qt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,Lt,Yt,null));else if(S.isDataTexture)if(oe.length>0){xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,oe[0].width,oe[0].height);for(let tt=0,ct=oe.length;tt<ct;tt++)Pt=oe[tt],xt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Yt,Pt.data):e.texImage2D(i.TEXTURE_2D,tt,qt,Pt.width,Pt.height,0,Lt,Yt,Pt.data);S.generateMipmaps=!1}else xt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,ft.width,ft.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Lt,Yt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,Lt,Yt,ft.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,qt,oe[0].width,oe[0].height,ft.depth);for(let tt=0,ct=oe.length;tt<ct;tt++)if(Pt=oe[tt],S.format!==An)if(Lt!==null)if(xt){if(N)if(S.layerUpdates.size>0){const bt=eh(Pt.width,Pt.height,S.format,S.type);for(const Rt of S.layerUpdates){const ee=Pt.data.subarray(Rt*bt/Pt.data.BYTES_PER_ELEMENT,(Rt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Rt,Pt.width,Pt.height,1,Lt,ee,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,ft.depth,Lt,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,qt,Pt.width,Pt.height,ft.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,ft.depth,Lt,Yt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,qt,Pt.width,Pt.height,ft.depth,0,Lt,Yt,Pt.data)}else{xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Mt,qt,oe[0].width,oe[0].height);for(let tt=0,ct=oe.length;tt<ct;tt++)Pt=oe[tt],S.format!==An?Lt!==null?xt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Yt,Pt.data):e.texImage2D(i.TEXTURE_2D,tt,qt,Pt.width,Pt.height,0,Lt,Yt,Pt.data)}else if(S.isDataArrayTexture)if(xt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,qt,ft.width,ft.height,ft.depth),N)if(S.layerUpdates.size>0){const tt=eh(ft.width,ft.height,S.format,S.type);for(const ct of S.layerUpdates){const bt=ft.data.subarray(ct*tt/ft.data.BYTES_PER_ELEMENT,(ct+1)*tt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,Lt,Yt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Lt,Yt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,ft.width,ft.height,ft.depth,0,Lt,Yt,ft.data);else if(S.isData3DTexture)xt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Mt,qt,ft.width,ft.height,ft.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Lt,Yt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,qt,ft.width,ft.height,ft.depth,0,Lt,Yt,ft.data);else if(S.isFramebufferTexture){if(Jt)if(xt)e.texStorage2D(i.TEXTURE_2D,Mt,qt,ft.width,ft.height);else{let tt=ft.width,ct=ft.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(i.TEXTURE_2D,bt,qt,tt,ct,0,Lt,Yt,null),tt>>=1,ct>>=1}}else if(oe.length>0){if(xt&&Jt){const tt=ot(oe[0]);e.texStorage2D(i.TEXTURE_2D,Mt,qt,tt.width,tt.height)}for(let tt=0,ct=oe.length;tt<ct;tt++)Pt=oe[tt],xt?N&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Lt,Yt,Pt):e.texImage2D(i.TEXTURE_2D,tt,qt,Lt,Yt,Pt);S.generateMipmaps=!1}else if(xt){if(Jt){const tt=ot(ft);e.texStorage2D(i.TEXTURE_2D,Mt,qt,tt.width,tt.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Yt,ft)}else e.texImage2D(i.TEXTURE_2D,0,qt,Lt,Yt,ft);m(S)&&u(Y),At.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function z(A,S,B){if(S.image.length!==6)return;const Y=Dt(A,S),nt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const Q=n.get(nt);if(nt.version!==Q.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const At=ue.getPrimaries(ue.workingColorSpace),_t=S.colorSpace===mi?null:ue.getPrimaries(S.colorSpace),wt=S.colorSpace===mi||At===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const te=S.isCompressedTexture||S.image[0].isCompressedTexture,ft=S.image[0]&&S.image[0].isDataTexture,Lt=[];for(let ct=0;ct<6;ct++)!te&&!ft?Lt[ct]=_(S.image[ct],!0,s.maxCubemapSize):Lt[ct]=ft?S.image[ct].image:S.image[ct],Lt[ct]=ht(S,Lt[ct]);const Yt=Lt[0],qt=o.convert(S.format,S.colorSpace),Pt=o.convert(S.type),oe=M(S.internalFormat,qt,Pt,S.colorSpace),xt=S.isVideoTexture!==!0,Jt=Q.__version===void 0||Y===!0,N=nt.dataReady;let Mt=y(S,Yt);gt(i.TEXTURE_CUBE_MAP,S);let tt;if(te){xt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,oe,Yt.width,Yt.height);for(let ct=0;ct<6;ct++){tt=Lt[ct].mipmaps;for(let bt=0;bt<tt.length;bt++){const Rt=tt[bt];S.format!==An?qt!==null?xt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,0,0,Rt.width,Rt.height,qt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,oe,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,0,0,Rt.width,Rt.height,qt,Pt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt,oe,Rt.width,Rt.height,0,qt,Pt,Rt.data)}}}else{if(tt=S.mipmaps,xt&&Jt){tt.length>0&&Mt++;const ct=ot(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,oe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt[ct].width,Lt[ct].height,qt,Pt,Lt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,Lt[ct].width,Lt[ct].height,0,qt,Pt,Lt[ct].data);for(let bt=0;bt<tt.length;bt++){const ee=tt[bt].image[ct].image;xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,0,0,ee.width,ee.height,qt,Pt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,oe,ee.width,ee.height,0,qt,Pt,ee.data)}}else{xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,qt,Pt,Lt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,qt,Pt,Lt[ct]);for(let bt=0;bt<tt.length;bt++){const Rt=tt[bt];xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,0,0,qt,Pt,Rt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,bt+1,oe,qt,Pt,Rt.image[ct])}}}m(S)&&u(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function q(A,S,B,Y,nt,Q){const At=o.convert(B.format,B.colorSpace),_t=o.convert(B.type),wt=M(B.internalFormat,At,_t,B.colorSpace);if(!n.get(S).__hasExternalTextures){const ft=Math.max(1,S.width>>Q),Lt=Math.max(1,S.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,wt,ft,Lt,S.depth,0,At,_t,null):e.texImage2D(nt,Q,wt,ft,Lt,0,At,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,nt,n.get(B).__webglTexture,0,I(S)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,nt,n.get(B).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const Y=S.depthTexture,nt=Y&&Y.isDepthTexture?Y.type:null,Q=v(S.stencilBuffer,nt),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=I(S);Z(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Q,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{const Y=S.textures;for(let nt=0;nt<Y.length;nt++){const Q=Y[nt],At=o.convert(Q.format,Q.colorSpace),_t=o.convert(Q.type),wt=M(Q.internalFormat,At,_t,Q.colorSpace),te=I(S);B&&Z(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,wt,S.width,S.height):Z(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,wt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,wt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Y=n.get(S.depthTexture).__webglTexture,nt=I(S);if(S.depthTexture.format===hs)Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(S.depthTexture.format===_s)Z(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function pt(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",nt)};Y.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");X(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),mt(S.__webglDepthbuffer[Y],A,!1);else{const nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),mt(S.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,S,B){const Y=n.get(A);S!==void 0&&q(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&pt(A)}function St(A){const S=A.texture,B=n.get(A),Y=n.get(S);A.addEventListener("dispose",E);const nt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,r.memory.textures++),Q){B.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[_t]=[];for(let wt=0;wt<S.mipmaps.length;wt++)B.__webglFramebuffer[_t][wt]=i.createFramebuffer()}else B.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)B.__webglFramebuffer[_t]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(At)for(let _t=0,wt=nt.length;_t<wt;_t++){const te=n.get(nt[_t]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&Z(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<nt.length;_t++){const wt=nt[_t];B.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const te=o.convert(wt.format,wt.colorSpace),ft=o.convert(wt.type),Lt=M(wt.internalFormat,te,ft,wt.colorSpace,A.isXRRenderTarget===!0),Yt=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Lt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),gt(i.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)q(B.__webglFramebuffer[_t][wt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt);else q(B.__webglFramebuffer[_t],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let _t=0,wt=nt.length;_t<wt;_t++){const te=nt[_t],ft=n.get(te);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),gt(i.TEXTURE_2D,te),q(B.__webglFramebuffer,A,te,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(te)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Y.__webglTexture),gt(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)q(B.__webglFramebuffer[wt],A,S,i.COLOR_ATTACHMENT0,_t,wt);else q(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,_t,0);m(S)&&u(_t),e.unbindTexture()}A.depthBuffer&&pt(A)}function Ht(A){const S=A.textures;for(let B=0,Y=S.length;B<Y;B++){const nt=S[B];if(m(nt)){const Q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(nt).__webglTexture;e.bindTexture(Q,At),u(Q),e.unbindTexture()}}}const It=[],R=[];function Ot(A){if(A.samples>0){if(Z(A)===!1){const S=A.textures,B=A.width,Y=A.height;let nt=i.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),_t=S.length>1;if(_t)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const te=n.get(S[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,nt,i.NEAREST),c===!0&&(It.length=0,R.length=0,It.push(i.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(It.push(Q),R.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);const te=n.get(S[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function I(A){return Math.min(s.maxSamples,A.samples)}function Z(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function j(A){const S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ht(A,S){const B=A.colorSpace,Y=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==xi&&B!==mi&&(ue.getTransfer(B)===Me?(Y!==An||nt!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=et,this.setTexture3D=W,this.setTextureCube=lt,this.rebindTextures=ut,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Z}function D_(i,t){function e(n,s=mi){let o;const r=ue.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===su)return i.ALPHA;if(n===ou)return i.RGB;if(n===An)return i.RGBA;if(n===ru)return i.LUMINANCE;if(n===au)return i.LUMINANCE_ALPHA;if(n===hs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===Tc)return i.RG_INTEGER;if(n===Ac)return i.RGBA_INTEGER;if(n===Xo||n===Yo||n===qo||n===Ko)if(r===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Xo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Xo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Ga)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Wa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ha||n===Va)return r===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Wa)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===Ya||n===qa||n===Ka||n===Za||n===ja||n===Ja||n===$a||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Xa)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zo||n===oc||n===rc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Zo)return r===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===ac||n===cc||n===lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Zo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class U_ extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Fi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,g=null;const _=new B_,m=e.getContextAttributes();let u=null,M=null;const v=[],y=[],C=new at;let E=null;const b=new ln;b.layers.enable(1),b.viewport=new ve;const P=new ln;P.layers.enable(2),P.viewport=new ve;const U=[b,P],x=new U_;x.layers.enable(1),x.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=v[z];return q===void 0&&(q=new aa,v[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=v[z];return q===void 0&&(q=new aa,v[z]=q),q.getGripSpace()},this.getHand=function(z){let q=v[z];return q===void 0&&(q=new aa,v[z]=q),q.getHandSpace()};function k(z){const q=y.indexOf(z.inputSource);if(q===-1)return;const mt=v[q];mt!==void 0&&(mt.update(z.inputSource,z.frame,l||r),mt.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",et);for(let z=0;z<v.length;z++){const q=y[z];q!==null&&(y[z]=null,v[z].disconnect(q))}w=null,D=null,_.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,M=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Rn(f.framebufferWidth,f.framebufferHeight,{format:An,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,mt=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?_s:hs,mt=m.stencil?gs:Di);const pt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:o};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Rn(p.textureWidth,p.textureHeight,{format:An,type:ti,depthTexture:new Eu(p.textureWidth,p.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et(z){for(let q=0;q<z.removed.length;q++){const mt=z.removed[q],X=y.indexOf(mt);X>=0&&(y[X]=null,v[X].disconnect(mt))}for(let q=0;q<z.added.length;q++){const mt=z.added[q];let X=y.indexOf(mt);if(X===-1){for(let ut=0;ut<v.length;ut++)if(ut>=y.length){y.push(mt),X=ut;break}else if(y[ut]===null){y[ut]=mt,X=ut;break}if(X===-1)break}const pt=v[X];pt&&pt.connect(mt)}}const W=new L,lt=new L;function F(z,q,mt){W.setFromMatrixPosition(q.matrixWorld),lt.setFromMatrixPosition(mt.matrixWorld);const X=W.distanceTo(lt),pt=q.projectionMatrix.elements,ut=mt.projectionMatrix.elements,St=pt[14]/(pt[10]-1),Ht=pt[14]/(pt[10]+1),It=(pt[9]+1)/pt[5],R=(pt[9]-1)/pt[5],Ot=(pt[8]-1)/pt[0],I=(ut[8]+1)/ut[0],Z=St*Ot,j=St*I,ht=X/(-Ot+I),ot=ht*-Ot;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(ht),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),pt[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const A=St+ht,S=Ht+ht,B=Z-ot,Y=j+(X-ot),nt=It*Ht/S*A,Q=R*Ht/S*A;z.projectionMatrix.makePerspective(B,Y,nt,Q,A,S),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function dt(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let q=z.near,mt=z.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),x.near=P.near=b.near=q,x.far=P.far=b.far=mt,(w!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,D=x.far);const X=z.parent,pt=x.cameras;dt(x,X);for(let ut=0;ut<pt.length;ut++)dt(pt[ut],X);pt.length===2?F(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),st(z,x,X)};function st(z,q,mt){mt===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(mt.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=qs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let gt=null;function Dt(z,q){if(h=q.getViewerPose(l||r),g=q,h!==null){const mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let X=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let ut=0;ut<mt.length;ut++){const St=mt[ut];let Ht=null;if(f!==null)Ht=f.getViewport(St);else{const R=d.getViewSubImage(p,St);Ht=R.viewport,ut===0&&(t.setRenderTargetTextures(M,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(M))}let It=U[ut];It===void 0&&(It=new ln,It.layers.enable(ut),It.viewport=new ve,U[ut]=It),It.matrix.fromArray(St.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(St.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),ut===0&&(x.matrix.copy(It.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(It)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const ut=d.getDepthInformation(mt[0]);ut&&ut.isValid&&ut.texture&&_.init(t,ut,s.renderState)}}for(let mt=0;mt<v.length;mt++){const X=y[mt],pt=v[mt];X!==null&&pt!==void 0&&pt.update(X,q,l||r)}gt&&gt(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const Gt=new wu;Gt.setAnimationLoop(Dt),this.setAnimationLoop=function(z){gt=z},this.dispose=function(){}}}const Ai=new Nn,k_=new xe;function G_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Mu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),d(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(o(m,u),g(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),_(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,M,v):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ge&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ge&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const M=t.get(u),v=M.envMap,y=M.envMapRotation;v&&(m.envMap.value=v,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,M,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=v*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const M=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function l(M,v){let y=s[M.id];y===void 0&&(g(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(M,C);const E=t.render.frame;o[M.id]!==E&&(p(M),o[M.id]=E)}function h(M){const v=d();M.__bindingPointIndex=v;const y=i.createBuffer(),C=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const v=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=y.length;E<b;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let U=0,x=P.length;U<x;U++){const w=P[U];if(f(w,E,U,C)===!0){const D=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let et=0;et<k.length;et++){const W=k[et],lt=_(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+V,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,V),V+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,y,C){const E=M.value,b=v+"_"+y;if(C[b]===void 0)return typeof E=="number"||typeof E=="boolean"?C[b]=E:C[b]=E.clone(),!0;{const P=C[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(M){const v=M.uniforms;let y=0;const C=16;for(let b=0,P=v.length;b<P;b++){const U=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,w=U.length;x<w;x++){const D=U[x],k=Array.isArray(D.value)?D.value:[D.value];for(let V=0,et=k.length;V<et;V++){const W=k[V],lt=_(W),F=y%C,dt=F%lt.boundary,st=F+dt;y+=dt,st!==0&&C-st<lt.storage&&(y+=C-st),D.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=lt.storage}}}const E=y%C;return E>0&&(y+=C-E),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:u}}class V_{constructor(t={}){const{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const u=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=_i,this.toneMappingExposure=1;const v=this;let y=!1,C=0,E=0,b=null,P=-1,U=null;const x=new ve,w=new ve;let D=null;const k=new Xt(0);let V=0,et=e.width,W=e.height,lt=1,F=null,dt=null;const st=new ve(0,0,et,W),gt=new ve(0,0,et,W);let Dt=!1;const Gt=new Lc;let z=!1,q=!1;const mt=new xe,X=new xe,pt=new L,ut=new ve,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function It(){return b===null?lt:1}let R=n;function Ot(T,G){return e.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),R===null){const G="webgl2";if(R=Ot(G,T),R===null)throw Ot(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let I,Z,j,ht,ot,A,S,B,Y,nt,Q,At,_t,wt,te,ft,Lt,Yt,qt,Pt,oe,xt,Jt,N;function Mt(){I=new Km(R),I.init(),xt=new D_(R,I),Z=new Hm(R,I,t,xt),j=new P_(R),Z.reverseDepthBuffer&&j.buffers.depth.setReversed(!0),ht=new Jm(R),ot=new m_,A=new I_(R,I,j,ot,Z,xt,ht),S=new Wm(v),B=new qm(v),Y=new sp(R),Jt=new km(R,Y),nt=new Zm(R,Y,ht,Jt),Q=new Qm(R,nt,Y,ht),qt=new $m(R,Z,A),ft=new Vm(ot),At=new p_(v,S,B,I,Z,Jt,ft),_t=new G_(v,ot),wt=new __,te=new w_(I),Yt=new zm(v,S,B,j,Q,p,c),Lt=new R_(v,Q,Z),N=new H_(R,ht,Z,j),Pt=new Gm(R,I,ht),oe=new jm(R,I,ht),ht.programs=At.programs,v.capabilities=Z,v.extensions=I,v.properties=ot,v.renderLists=wt,v.shadowMap=Lt,v.state=j,v.info=ht}Mt();const tt=new z_(v,R);this.xr=tt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=I.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=I.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(T){T!==void 0&&(lt=T,this.setSize(et,W,!1))},this.getSize=function(T){return T.set(et,W)},this.setSize=function(T,G,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,W=G,e.width=Math.floor(T*lt),e.height=Math.floor(G*lt),J===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(et*lt,W*lt).floor()},this.setDrawingBufferSize=function(T,G,J){et=T,W=G,lt=J,e.width=Math.floor(T*J),e.height=Math.floor(G*J),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,G,J,$){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,G,J,$),j.viewport(x.copy(st).multiplyScalar(lt).round())},this.getScissor=function(T){return T.copy(gt)},this.setScissor=function(T,G,J,$){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,G,J,$),j.scissor(w.copy(gt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){j.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){dt=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(T=!0,G=!0,J=!0){let $=0;if(T){let H=!1;if(b!==null){const vt=b.texture.format;H=vt===Ac||vt===Tc||vt===bc}if(H){const vt=b.texture.type,Ct=vt===ti||vt===Di||vt===Ys||vt===gs||vt===Sc||vt===wc,Ut=Yt.getClearColor(),Ft=Yt.getClearAlpha(),Kt=Ut.r,Zt=Ut.g,Bt=Ut.b;Ct?(f[0]=Kt,f[1]=Zt,f[2]=Bt,f[3]=Ft,R.clearBufferuiv(R.COLOR,0,f)):(g[0]=Kt,g[1]=Zt,g[2]=Bt,g[3]=Ft,R.clearBufferiv(R.COLOR,0,g))}else $|=R.COLOR_BUFFER_BIT}G&&($|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),wt.dispose(),te.dispose(),ot.dispose(),S.dispose(),B.dispose(),Q.dispose(),Jt.dispose(),N.dispose(),At.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",tl),tt.removeEventListener("sessionend",el),yi.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ht.autoReset,G=Lt.enabled,J=Lt.autoUpdate,$=Lt.needsUpdate,H=Lt.type;Mt(),ht.autoReset=T,Lt.enabled=G,Lt.autoUpdate=J,Lt.needsUpdate=$,Lt.type=H}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ee(T){const G=T.target;G.removeEventListener("dispose",ee),Le(G)}function Le(T){Je(T),ot.remove(T)}function Je(T){const G=ot.get(T).programs;G!==void 0&&(G.forEach(function(J){At.releaseProgram(J)}),T.isShaderMaterial&&At.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,J,$,H,vt){G===null&&(G=St);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,Ut=Pd(T,G,J,$,H);j.setMaterial($,Ct);let Ft=J.index,Kt=1;if($.wireframe===!0){if(Ft=nt.getWireframeAttribute(J),Ft===void 0)return;Kt=2}const Zt=J.drawRange,Bt=J.attributes.position;let me=Zt.start*Kt,ye=(Zt.start+Zt.count)*Kt;vt!==null&&(me=Math.max(me,vt.start*Kt),ye=Math.min(ye,(vt.start+vt.count)*Kt)),Ft!==null?(me=Math.max(me,0),ye=Math.min(ye,Ft.count)):Bt!=null&&(me=Math.max(me,0),ye=Math.min(ye,Bt.count));const Ae=ye-me;if(Ae<0||Ae===1/0)return;Jt.setup(H,$,Ut,J,Ft);let sn,fe=Pt;if(Ft!==null&&(sn=Y.get(Ft),fe=oe,fe.setIndex(sn)),H.isMesh)$.wireframe===!0?(j.setLineWidth($.wireframeLinewidth*It()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(H.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),j.setLineWidth(kt*It()),H.isLineSegments?fe.setMode(R.LINES):H.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else H.isPoints?fe.setMode(R.POINTS):H.isSprite&&fe.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)fe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,ze=H._multiDrawCounts,pe=H._multiDrawCount,xn=Ft?Y.get(Ft).bytesPerElement:1,ki=ot.get($).currentProgram.getUniforms();for(let on=0;on<pe;on++)ki.setValue(R,"_gl_DrawID",on),fe.render(kt[on]/xn,ze[on])}else if(H.isInstancedMesh)fe.renderInstances(me,Ae,H.count);else if(J.isInstancedBufferGeometry){const kt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ze=Math.min(J.instanceCount,kt);fe.renderInstances(me,Ae,ze)}else fe.render(me,Ae)};function he(T,G,J){T.transparent===!0&&T.side===de&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,fo(T,G,J),T.side=Cn,T.needsUpdate=!0,fo(T,G,J),T.side=de):fo(T,G,J)}this.compile=function(T,G,J=null){J===null&&(J=T),m=te.get(J),m.init(G),M.push(m),J.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==J&&T.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const vt=H.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){const Ut=vt[Ct];he(Ut,J,H),$.add(Ut)}else he(vt,J,H),$.add(vt)}),M.pop(),m=null,$},this.compileAsync=function(T,G,J=null){const $=this.compile(T,G,J);return new Promise(H=>{function vt(){if($.forEach(function(Ct){ot.get(Ct).currentProgram.isReady()&&$.delete(Ct)}),$.size===0){H(T);return}setTimeout(vt,10)}I.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let $e=null;function On(T){$e&&$e(T)}function tl(){yi.stop()}function el(){yi.start()}const yi=new wu;yi.setAnimationLoop(On),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(T){$e=T,tt.setAnimationLoop(T),T===null?yi.stop():yi.start()},tt.addEventListener("sessionstart",tl),tt.addEventListener("sessionend",el),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(G),G=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,G,b),m=te.get(T,M.length),m.init(G),M.push(m),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Gt.setFromProjectionMatrix(X),q=this.localClippingEnabled,z=ft.init(this.clippingPlanes,q),_=wt.get(T,u.length),_.init(),u.push(_),tt.enabled===!0&&tt.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&Cr(vt,G,-1/0,v.sortObjects)}Cr(T,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(F,dt),Ht=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ht&&Yt.addToRenderList(_,T),this.info.render.frame++,z===!0&&ft.beginShadows();const J=m.state.shadowsArray;Lt.render(J,T,G),z===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,H=_.transmissive;if(m.setupLights(),G.isArrayCamera){const vt=G.cameras;if(H.length>0)for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){const Ft=vt[Ct];il($,H,T,Ft)}Ht&&Yt.render(T);for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){const Ft=vt[Ct];nl(_,T,Ft,Ft.viewport)}}else H.length>0&&il($,H,T,G),Ht&&Yt.render(T),nl(_,T,G);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,G),Jt.resetDefaultState(),P=-1,U=null,M.pop(),M.length>0?(m=M[M.length-1],z===!0&&ft.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Cr(T,G,J,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Gt.intersectsSprite(T)){$&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Ct=Q.update(T),Ut=T.material;Ut.visible&&_.push(T,Ct,Ut,J,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Gt.intersectsObject(T))){const Ct=Q.update(T),Ut=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ut.copy(Ct.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(Ut)){const Ft=Ct.groups;for(let Kt=0,Zt=Ft.length;Kt<Zt;Kt++){const Bt=Ft[Kt],me=Ut[Bt.materialIndex];me&&me.visible&&_.push(T,Ct,me,J,ut.z,Bt)}}else Ut.visible&&_.push(T,Ct,Ut,J,ut.z,null)}}const vt=T.children;for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++)Cr(vt[Ct],G,J,$)}function nl(T,G,J,$){const H=T.opaque,vt=T.transmissive,Ct=T.transparent;m.setupLightsView(J),z===!0&&ft.setGlobalState(v.clippingPlanes,J),$&&j.viewport(x.copy($)),H.length>0&&uo(H,G,J),vt.length>0&&uo(vt,G,J),Ct.length>0&&uo(Ct,G,J),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function il(T,G,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Rn(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?jn:ti,minFilter:Li,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const vt=m.state.transmissionRenderTarget[$.id],Ct=$.viewport||x;vt.setSize(Ct.z,Ct.w);const Ut=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(k),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&Yt.render(J);const Ft=v.toneMapping;v.toneMapping=_i;const Kt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),z===!0&&ft.setGlobalState(v.clippingPlanes,$),uo(T,J,$),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt),I.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Bt=0,me=G.length;Bt<me;Bt++){const ye=G[Bt],Ae=ye.object,sn=ye.geometry,fe=ye.material,kt=ye.group;if(fe.side===de&&Ae.layers.test($.layers)){const ze=fe.side;fe.side=Ge,fe.needsUpdate=!0,sl(Ae,J,$,sn,fe,kt),fe.side=ze,fe.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt))}v.setRenderTarget(Ut),v.setClearColor(k,V),Kt!==void 0&&($.viewport=Kt),v.toneMapping=Ft}function uo(T,G,J){const $=G.isScene===!0?G.overrideMaterial:null;for(let H=0,vt=T.length;H<vt;H++){const Ct=T[H],Ut=Ct.object,Ft=Ct.geometry,Kt=$===null?Ct.material:$,Zt=Ct.group;Ut.layers.test(J.layers)&&sl(Ut,G,J,Ft,Kt,Zt)}}function sl(T,G,J,$,H,vt){T.onBeforeRender(v,G,J,$,H,vt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,G,J,$,T,vt),H.transparent===!0&&H.side===de&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,v.renderBufferDirect(J,G,$,H,T,vt),H.side=Cn,H.needsUpdate=!0,v.renderBufferDirect(J,G,$,H,T,vt),H.side=de):v.renderBufferDirect(J,G,$,H,T,vt),T.onAfterRender(v,G,J,$,H,vt)}function fo(T,G,J){G.isScene!==!0&&(G=St);const $=ot.get(T),H=m.state.lights,vt=m.state.shadowsArray,Ct=H.state.version,Ut=At.getParameters(T,H.state,vt,G,J),Ft=At.getProgramCacheKey(Ut);let Kt=$.programs;$.environment=T.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Kt===void 0&&(T.addEventListener("dispose",ee),Kt=new Map,$.programs=Kt);let Zt=Kt.get(Ft);if(Zt!==void 0){if($.currentProgram===Zt&&$.lightsStateVersion===Ct)return rl(T,Ut),Zt}else Ut.uniforms=At.getUniforms(T),T.onBeforeCompile(Ut,v),Zt=At.acquireProgram(Ut,Ft),Kt.set(Ft,Zt),$.uniforms=Ut.uniforms;const Bt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=ft.uniform),rl(T,Ut),$.needsLights=Id(T),$.lightsStateVersion=Ct,$.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Zt,$.uniformsList=null,Zt}function ol(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Jo.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function rl(T,G){const J=ot.get(T);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Pd(T,G,J,$,H){G.isScene!==!0&&(G=St),A.resetTextureUnits();const vt=G.fog,Ct=$.isMeshStandardMaterial?G.environment:null,Ut=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:xi,Ft=($.isMeshStandardMaterial?B:S).get($.envMap||Ct),Kt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Bt=!!J.morphAttributes.position,me=!!J.morphAttributes.normal,ye=!!J.morphAttributes.color;let Ae=_i;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const sn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fe=sn!==void 0?sn.length:0,kt=ot.get($),ze=m.state.lights;if(z===!0&&(q===!0||T!==U)){const fn=T===U&&$.id===P;ft.setState($,T,fn)}let pe=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ze.state.version||kt.outputColorSpace!==Ut||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Ft||$.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ft.numPlanes||kt.numIntersection!==ft.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==Zt||kt.morphTargets!==Bt||kt.morphNormals!==me||kt.morphColors!==ye||kt.toneMapping!==Ae||kt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,kt.__version=$.version);let xn=kt.currentProgram;pe===!0&&(xn=fo($,G,H));let ki=!1,on=!1,Pr=!1;const Pe=xn.getUniforms(),oi=kt.uniforms;if(j.useProgram(xn.program)&&(ki=!0,on=!0,Pr=!0),$.id!==P&&(P=$.id,on=!0),ki||U!==T){Z.reverseDepthBuffer?(mt.copy(T.projectionMatrix),Df(mt),Uf(mt),Pe.setValue(R,"projectionMatrix",mt)):Pe.setValue(R,"projectionMatrix",T.projectionMatrix),Pe.setValue(R,"viewMatrix",T.matrixWorldInverse);const fn=Pe.map.cameraPosition;fn!==void 0&&fn.setValue(R,pt.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Pe.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pe.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,on=!0,Pr=!0)}if(H.isSkinnedMesh){Pe.setOptional(R,H,"bindMatrix"),Pe.setOptional(R,H,"bindMatrixInverse");const fn=H.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Pe.setValue(R,"boneTexture",fn.boneTexture,A))}H.isBatchedMesh&&(Pe.setOptional(R,H,"batchingTexture"),Pe.setValue(R,"batchingTexture",H._matricesTexture,A),Pe.setOptional(R,H,"batchingIdTexture"),Pe.setValue(R,"batchingIdTexture",H._indirectTexture,A),Pe.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&Pe.setValue(R,"batchingColorTexture",H._colorsTexture,A));const Lr=J.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&qt.update(H,J,xn),(on||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,Pe.setValue(R,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(oi.envMap.value=Ft,oi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&G.environment!==null&&(oi.envMapIntensity.value=G.environmentIntensity),on&&(Pe.setValue(R,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ld(oi,Pr),vt&&$.fog===!0&&_t.refreshFogUniforms(oi,vt),_t.refreshMaterialUniforms(oi,$,lt,W,m.state.transmissionRenderTarget[T.id]),Jo.upload(R,ol(kt),oi,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Jo.upload(R,ol(kt),oi,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pe.setValue(R,"center",H.center),Pe.setValue(R,"modelViewMatrix",H.modelViewMatrix),Pe.setValue(R,"normalMatrix",H.normalMatrix),Pe.setValue(R,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const fn=$.uniformsGroups;for(let Ir=0,Dd=fn.length;Ir<Dd;Ir++){const al=fn[Ir];N.update(al,xn),N.bind(al,xn)}}return xn}function Ld(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Id(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,G,J){ot.get(T.texture).__webglTexture=G,ot.get(T.depthTexture).__webglTexture=J;const $=ot.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){const J=ot.get(T);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,J=0){b=T,C=G,E=J;let $=!0,H=null,vt=!1,Ct=!1;if(T){const Ft=ot.get(T);if(Ft.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(Ft.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ft.__hasExternalTextures)A.rebindTextures(T,ot.get(T.texture).__webglTexture,ot.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Bt=T.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&ot.has(Bt)&&(T.width!==Bt.image.width||T.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Kt=T.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);const Zt=ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[G])?H=Zt[G][J]:H=Zt[G],vt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?H=ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?H=Zt[J]:H=Zt,x.copy(T.viewport),w.copy(T.scissor),D=T.scissorTest}else x.copy(st).multiplyScalar(lt).floor(),w.copy(gt).multiplyScalar(lt).floor(),D=Dt;if(j.bindFramebuffer(R.FRAMEBUFFER,H)&&$&&j.drawBuffers(T,H),j.viewport(x),j.scissor(w),j.setScissorTest(D),vt){const Ft=ot.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ft.__webglTexture,J)}else if(Ct){const Ft=ot.get(T.texture),Kt=G||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,J||0,Kt)}P=-1},this.readRenderTargetPixels=function(T,G,J,$,H,vt,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){j.bindFramebuffer(R.FRAMEBUFFER,Ut);try{const Ft=T.texture,Kt=Ft.format,Zt=Ft.type;if(!Z.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&J>=0&&J<=T.height-H&&R.readPixels(G,J,$,H,xt.convert(Kt),xt.convert(Zt),vt)}finally{const Ft=b!==null?ot.get(b).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,G,J,$,H,vt,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const Ft=T.texture,Kt=Ft.format,Zt=Ft.type;if(!Z.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-$&&J>=0&&J<=T.height-H){j.bindFramebuffer(R.FRAMEBUFFER,Ut);const Bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.bufferData(R.PIXEL_PACK_BUFFER,vt.byteLength,R.STREAM_READ),R.readPixels(G,J,$,H,xt.convert(Kt),xt.convert(Zt),0);const me=b!==null?ot.get(b).__webglFramebuffer:null;j.bindFramebuffer(R.FRAMEBUFFER,me);const ye=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await If(R,ye,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,vt),R.deleteBuffer(Bt),R.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,J=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-J),H=Math.floor(T.image.width*$),vt=Math.floor(T.image.height*$),Ct=G!==null?G.x:0,Ut=G!==null?G.y:0;A.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,J,0,0,Ct,Ut,H,vt),j.unbindTexture()},this.copyTextureToTexture=function(T,G,J=null,$=null,H=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],G=arguments[2],H=arguments[3]||0,J=null);let vt,Ct,Ut,Ft,Kt,Zt;J!==null?(vt=J.max.x-J.min.x,Ct=J.max.y-J.min.y,Ut=J.min.x,Ft=J.min.y):(vt=T.image.width,Ct=T.image.height,Ut=0,Ft=0),$!==null?(Kt=$.x,Zt=$.y):(Kt=0,Zt=0);const Bt=xt.convert(G.format),me=xt.convert(G.type);A.setTexture2D(G,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const ye=R.getParameter(R.UNPACK_ROW_LENGTH),Ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),sn=R.getParameter(R.UNPACK_SKIP_PIXELS),fe=R.getParameter(R.UNPACK_SKIP_ROWS),kt=R.getParameter(R.UNPACK_SKIP_IMAGES),ze=T.isCompressedTexture?T.mipmaps[H]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ft),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,H,Kt,Zt,vt,Ct,Bt,me,ze.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,H,Kt,Zt,ze.width,ze.height,Bt,ze.data):R.texSubImage2D(R.TEXTURE_2D,H,Kt,Zt,vt,Ct,Bt,me,ze),R.pixelStorei(R.UNPACK_ROW_LENGTH,ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,sn),R.pixelStorei(R.UNPACK_SKIP_ROWS,fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,kt),H===0&&G.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(T,G,J=null,$=null,H=0){T.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,T=arguments[2],G=arguments[3],H=arguments[4]||0);let vt,Ct,Ut,Ft,Kt,Zt,Bt,me,ye;const Ae=T.isCompressedTexture?T.mipmaps[H]:T.image;J!==null?(vt=J.max.x-J.min.x,Ct=J.max.y-J.min.y,Ut=J.max.z-J.min.z,Ft=J.min.x,Kt=J.min.y,Zt=J.min.z):(vt=Ae.width,Ct=Ae.height,Ut=Ae.depth,Ft=0,Kt=0,Zt=0),$!==null?(Bt=$.x,me=$.y,ye=$.z):(Bt=0,me=0,ye=0);const sn=xt.convert(G.format),fe=xt.convert(G.type);let kt;if(G.isData3DTexture)A.setTexture3D(G,0),kt=R.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),kt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const ze=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),ki=R.getParameter(R.UNPACK_SKIP_ROWS),on=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,Kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(kt,H,Bt,me,ye,vt,Ct,Ut,sn,fe,Ae.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(kt,H,Bt,me,ye,vt,Ct,Ut,sn,Ae.data):R.texSubImage3D(kt,H,Bt,me,ye,vt,Ct,Ut,sn,fe,Ae),R.pixelStorei(R.UNPACK_ROW_LENGTH,ze),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ki),R.pixelStorei(R.UNPACK_SKIP_IMAGES,on),H===0&&G.generateMipmaps&&R.generateMipmap(kt),j.unbindTexture()},this.initRenderTarget=function(T){ot.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){C=0,E=0,b=null,j.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rc?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===mr?"display-p3":"srgb"}}class Uc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class W_ extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class X_ extends Ye{constructor(t=null,e=1,n=1,s,o,r,a,c,l=tn,h=tn,d,p){super(null,r,a,c,l,h,s,o,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nh extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new xe,ih=new xe,No=[],sh=new Bi,Y_=new xe,Is=new K,Ds=new so;class ro extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Y_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),sh.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new so),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Ds.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,es),ih.multiplyMatrices(n,es),Is.matrixWorld=ih,Is.raycast(t,No);for(let r=0,a=No.length;r<a;r++){const c=No[r];c.instanceId=o,c.object=this,e.push(c)}No.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new X_(new Float32Array(s*this.count),s,this.count,Ec,Dn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ui extends Ye{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(r-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new at:new L);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],o=[],r=[],a=new L,c=new xe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}o[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ue(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends Fn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class q_ extends Nc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let p=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;p*=h,f*=h,s(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Fo=new L,ca=new Fc,la=new Fc,ha=new Fc;class K_ extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);const d=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Fo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ca.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,g,_,m),la.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,g,_,m),ha.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),la.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),ha.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(ca.calc(c),la.calc(c),ha.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Z_(i,t){const e=1-i;return e*e*t}function j_(i,t){return 2*(1-i)*i*t}function J_(i,t){return i*i*t}function Gs(i,t,e,n){return Z_(i,t)+j_(i,e)+J_(i,n)}function $_(i,t){const e=1-i;return e*e*e*t}function Q_(i,t){const e=1-i;return 3*e*e*i*t}function tv(i,t){return 3*(1-i)*i*i*t}function ev(i,t){return i*i*i*t}function Hs(i,t,e,n,s){return $_(i,t)+Q_(i,e)+tv(i,n)+ev(i,s)}class Cu extends Fn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hs(t,s.x,o.x,r.x,a.x),Hs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nv extends Fn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hs(t,s.x,o.x,r.x,a.x),Hs(t,s.y,o.y,r.y,a.y),Hs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pu extends Fn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iv extends Fn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends Fn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Gs(t,s.x,o.x,r.x),Gs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sv extends Fn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Gs(t,s.x,o.x,r.x),Gs(t,s.y,o.y,r.y),Gs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(oh(a,c.x,l.x,h.x,d.x),oh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:q_,CatmullRomCurve3:K_,CubicBezierCurve:Cu,CubicBezierCurve3:nv,EllipseCurve:Nc,LineCurve:Pu,LineCurve3:iv,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:sv,SplineCurve:Iu});class ov extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}}class ah extends ov{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pu(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Lu(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Cu(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Iu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Nc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zs extends Be{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,d=new L,p=new at,f=new L,g=new L,_=new L;let m=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-m,f.z=u*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const v=n+M*h*s,y=Math.sin(v),C=Math.cos(v);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*C,r.push(d.x,d.y,d.z),p.x=M/e,p.y=E/(t.length-1),a.push(p.x,p.y);const b=c[3*E+0]*y,P=c[3*E+1],U=c[3*E+0]*C;l.push(b,P,U)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,C=y,E=y+t.length,b=y+t.length+1,P=y+1;o.push(C,E,P),o.push(b,P,E)}this.setIndex(o),this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.points,t.segments,t.phiStart,t.phiLength)}}class ei extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new L,h=new at;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rt extends Be{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],p=[],f=[];let g=0;const _=[],m=n/2;let u=0;M(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(p,3)),this.setAttribute("uv",new ie(f,2));function M(){const y=new L,C=new L;let E=0;const b=(e-t)/n;for(let P=0;P<=o;P++){const U=[],x=P/o,w=x*(e-t)+t;for(let D=0;D<=s;D++){const k=D/s,V=k*c+a,et=Math.sin(V),W=Math.cos(V);C.x=w*et,C.y=-x*n+m,C.z=w*W,d.push(C.x,C.y,C.z),y.set(et,b,W).normalize(),p.push(y.x,y.y,y.z),f.push(k,1-x),U.push(g++)}_.push(U)}for(let P=0;P<s;P++)for(let U=0;U<o;U++){const x=_[U][P],w=_[U+1][P],D=_[U+1][P+1],k=_[U][P+1];t>0&&(h.push(x,w,k),E+=3),e>0&&(h.push(w,D,k),E+=3)}l.addGroup(u,E,0),u+=E}function v(y){const C=g,E=new at,b=new L;let P=0;const U=y===!0?t:e,x=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*x,0),p.push(0,x,0),f.push(.5,.5),g++;const w=g;for(let D=0;D<=s;D++){const V=D/s*c+a,et=Math.cos(V),W=Math.sin(V);b.x=U*W,b.y=m*x,b.z=U*et,d.push(b.x,b.y,b.z),p.push(0,x,0),E.x=et*.5+.5,E.y=W*.5*x+.5,f.push(E.x,E.y),g++}for(let D=0;D<s;D++){const k=C+D,V=w+D;y===!0?h.push(V,V+1,k):h.push(V+1,V,k),P+=3}l.addGroup(u,P,y===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jt extends rt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new jt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(o.slice(),3)),this.setAttribute("uv",new ie(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new L,y=new L,C=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],C),c(v,y,C,M)}function c(M,v,y,C){const E=C+1,b=[];for(let P=0;P<=E;P++){b[P]=[];const U=M.clone().lerp(y,P/E),x=v.clone().lerp(y,P/E),w=E-P;for(let D=0;D<=w;D++)D===0&&P===E?b[P][D]=U:b[P][D]=U.clone().lerp(x,D/w)}for(let P=0;P<E;P++)for(let U=0;U<2*(E-P)-1;U++){const x=Math.floor(U/2);U%2===0?(p(b[P][x+1]),p(b[P+1][x]),p(b[P][x])):(p(b[P][x+1]),p(b[P+1][x+1]),p(b[P+1][x]))}}function l(M){const v=new L;for(let y=0;y<o.length;y+=3)v.x=o[y+0],v.y=o[y+1],v.z=o[y+2],v.normalize().multiplyScalar(M),o[y+0]=v.x,o[y+1]=v.y,o[y+2]=v.z}function h(){const M=new L;for(let v=0;v<o.length;v+=3){M.x=o[v+0],M.y=o[v+1],M.z=o[v+2];const y=m(M)/2/Math.PI+.5,C=u(M)/Math.PI+.5;r.push(y,1-C)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const v=r[M+0],y=r[M+2],C=r[M+4],E=Math.max(v,y,C),b=Math.min(v,y,C);E>.9&&b<.1&&(v<.2&&(r[M+0]+=1),y<.2&&(r[M+2]+=1),C<.2&&(r[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function f(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const M=new L,v=new L,y=new L,C=new L,E=new at,b=new at,P=new at;for(let U=0,x=0;U<o.length;U+=9,x+=6){M.set(o[U+0],o[U+1],o[U+2]),v.set(o[U+3],o[U+4],o[U+5]),y.set(o[U+6],o[U+7],o[U+8]),E.set(r[x+0],r[x+1]),b.set(r[x+2],r[x+3]),P.set(r[x+4],r[x+5]),C.copy(M).add(v).add(y).divideScalar(3);const w=m(C);_(E,x+0,M,w),_(b,x+2,v,w),_(P,x+4,y,w)}}function _(M,v,y,C){C<0&&M.x===1&&(r[v]=M.x-1),y.x===0&&y.z===0&&(r[v]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.vertices,t.indices,t.radius,t.details)}}class Oc extends _r{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oc(t.radius,t.detail)}}class Du extends ah{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ah().fromJSON(s))}return this}}const rv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Uu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,p,f;if(n&&(o=uv(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return js(o,r,e,a,c,f,0),r}};function Uu(i,t,e,n,s){let o,r;if(s===Sv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=ch(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=ch(o,i[o],i[o+1],r);return r&&vr(r,r.next)&&($s(r),r=r.next),r}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vr(e,e.next)||be(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(i,t,e,n,s,o,r){if(!i)return;!r&&o&&gv(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?cv(i,n,s,o):av(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$s(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=lv(Ni(i),t,e),js(i,t,e,n,s,o,2)):r===2&&hv(i,t,e,n,s,o):js(Ni(i),t,e,n,s,o,1);break}}}function av(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,p=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=f&&as(s,a,o,c,r,l,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(be(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,p=r.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<p?h:p:d<p?d:p,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=uc(f,g,t,e,n),M=uc(_,m,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=u&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&as(a,h,c,d,l,p,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&as(a,h,c,d,l,p,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=u;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&as(a,h,c,d,l,p,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&as(a,h,c,d,l,p,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lv(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!vr(s,o)&&Nu(s,n,n.next,o)&&Js(s,o)&&Js(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),$s(n),$s(n.next),n=i=o),n=n.next}while(n!==i);return Ni(n)}function hv(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&xv(r,a)){let c=Fu(r,a);r=Ni(r,r.next),c=Ni(c,c.next),js(r,t,e,n,s,o,0),js(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function uv(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=Uu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(vv(l));for(s.sort(dv),o=0;o<s.length;o++)e=fv(s[o],e);return e}function dv(i,t){return i.x-t.x}function fv(i,t){const e=pv(i,t);if(!e)return t;const n=Fu(e,i);return Ni(n,n.next),Ni(e,e.next)}function pv(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&as(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),Js(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&mv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function mv(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function gv(i,t,e,n){let s=i;do s.z===0&&(s.z=uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_v(s)}function _v(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function xv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Mv(i,t)&&(Js(i,t)&&Js(t,i)&&yv(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||vr(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vr(i,t){return i.x===t.x&&i.y===t.y}function Nu(i,t,e,n){const s=Bo(be(i,t,e)),o=Bo(be(i,t,n)),r=Bo(be(e,n,i)),a=Bo(be(e,n,t));return!!(s!==o&&r!==a||s===0&&Oo(i,e,t)||o===0&&Oo(i,n,t)||r===0&&Oo(e,i,n)||a===0&&Oo(e,t,n))}function Oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bo(i){return i>0?1:i<0?-1:0}function Mv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Js(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function yv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fu(i,t){const e=new dc(i.i,i.x,i.y),n=new dc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ch(i,t,e,n){const s=new dc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Vs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Vs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];lh(t),hh(n,t);let r=t.length;e.forEach(lh);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,hh(n,e[c]);const a=rv.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function lh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ae extends _r{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ae(t.radius,t.detail)}}class Qs extends Be{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const p=(e-t)/s,f=new L,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const u=o+m/n*r;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let u=0;u<n;u++){const M=u+m,v=M,y=M+n+1,C=M+n+2,E=M+1;a.push(v,y,E),a.push(y,C,E)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Bc extends Be{constructor(t=new Du([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(r,2));function l(h){const d=s.length/3,p=h.extractPoints(e);let f=p.shape;const g=p.holes;Vs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){const M=g[m];Vs.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Vs.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){const M=g[m];f=f.concat(M)}for(let m=0,u=f.length;m<u;m++){const M=f[m];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,u=_.length;m<u;m++){const M=_[m],v=M[0]+d,y=M[1]+d,C=M[2]+d;n.push(v,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Bc(n,t.curveSegments)}}function wv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Nt extends Be{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new L,p=new L,f=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const M=[],v=u/n;let y=0;u===0&&r===0?y=.5/e:u===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const E=C/e;d.x=-t*Math.cos(s+E*o)*Math.sin(r+v*a),d.y=t*Math.cos(r+v*a),d.z=t*Math.sin(s+E*o)*Math.sin(r+v*a),g.push(d.x,d.y,d.z),p.copy(d).normalize(),_.push(p.x,p.y,p.z),m.push(E+y,1-v),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const v=h[u][M+1],y=h[u][M],C=h[u+1][M],E=h[u+1][M+1];(u!==0||r>0)&&f.push(v,y,E),(u!==n-1||c<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class le extends Be{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new L,d=new L,p=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,u=(s+1)*(f-1)+g,M=(s+1)*f+g;r.push(_,m,M),r.push(m,u,M)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ev extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class it extends oo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xr extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class bv extends xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new xe,uh=new L,dh=new L;class Ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fh=new xe,Us=new L,da=new L;class Tv extends Ou{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),da.copy(n.position),da.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(da),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class Bu extends xr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Av extends Ou{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zc extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rv extends xr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return performance.now()}class mh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cv extends Fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);const gh={type:"change"},kc={type:"start"},ku={type:"end"},zo=new mu,_h=new pi,Pv=Math.cos(70*Se.DEG2RAD),De=new L,Qe=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fa=1e-6;class Lv extends Cv{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Un,this._lastTargetPosition=new L,this._quat=new Un().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new L,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new L,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dv.bind(this),this._onPointerDown=Iv.bind(this),this._onPointerUp=Uv.bind(this),this._onContextMenu=Gv.bind(this),this._onMouseWheel=Ov.bind(this),this._onKeyDown=Bv.bind(this),this._onTouchStart=zv.bind(this),this._onTouchMove=kv.bind(this),this._onMouseDown=Nv.bind(this),this._onMouseMove=Fv.bind(this),this._interceptControlDown=Hv.bind(this),this._interceptControlUp=Vv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gh),this.update(),this.state=_e.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=De.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<Pv?this.object.lookAt(this.target):(_h.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(_h,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fa||this._lastTargetPosition.distanceToSquared(this.target)>fa?(this.dispatchEvent(gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let o=De.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Iv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Dv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Uv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ku),this.state=_e.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(kc)}function Fv(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ov(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ku))}function Bv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function zv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(kc)}function kv(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function Gv(i){this.enabled!==!1&&i.preventDefault()}function Hv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wv=new Ic(-1,1,1,-1,0,1);class Xv extends Be{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const Yv=new Xv;class Gc{constructor(t){this._mesh=new K(Yv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hu extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ks.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Gc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vh extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class qv extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Kv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hu(Gu),this.copyPass.material.blending=Zn,this.clock=new zu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vh!==void 0&&(r instanceof vh?n=!0:r instanceof qv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zv extends ws{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const jv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(o,r,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Rn(o,r,{type:jn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new Rn(o,r,{type:jn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=jv;this.highPassUniforms=Ks.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new at(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Gu;this.copyUniforms=Ks.clone(h.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xt,this.oldClearAlpha=1,this.basic=new si,this.fsQuad=new Gc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new at(1,0);xs.BlurDirectionY=new at(0,1);const Jv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $v extends ws{constructor(){super();const t=Jv;this.uniforms=Ks.clone(t.uniforms),this.material=new Ev({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Gc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Qv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new at(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},O={white:16446432,ivory:16775404,cream:15984072,gold:13938487,goldBright:16766044,brass:12618285,bronze:9067038,burgundy:6165024,burgundyDeep:3803666,crimson:9182251,maroon:4853272,marigold:16747546,marigoldDeep:15231496,jasmine:16774888,saffron:16741656,rose:14241642,leaf:3107370,skin:13208158,skinDark:10906174,flame:16757575,emberGlow:16743214};function tx(){const i=new yt,t=new it({color:O.white,roughness:.62,metalness:.05}),e=new it({color:O.ivory,roughness:.55,metalness:.06}),n=new it({color:O.gold,metalness:.9,roughness:.32,emissive:O.brass,emissiveIntensity:.22}),s=new it({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.9}),o=new it({color:O.burgundy,roughness:.82,metalness:.04}),r=new it({color:O.cream,roughness:.8,metalness:.02}),a=new it({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.28}),c=new it({color:O.jasmine,roughness:.7,metalness:0,emissive:O.jasmine,emissiveIntensity:.15}),l=new it({color:O.leaf,roughness:.8,metalness:0}),h=new it({color:O.bronze,roughness:.85,metalness:.1}),d=new it({color:O.emberGlow,emissive:O.emberGlow,emissiveIntensity:2,roughness:.5}),p=new it({color:O.saffron,emissive:O.marigold,emissiveIntensity:2.4,roughness:.4}),f=new it({color:O.goldBright,emissive:O.goldBright,emissiveIntensity:3,roughness:.35}),g=new it({color:O.burgundyDeep,roughness:.9,metalness:.05}),_=(R,Ot,I,Z,j,ht=i)=>{const ot=new K(R,Ot);return ot.position.set(I,Z,j),ht.add(ot),ot},m=.52;_(new Tt(7.2,.18,7.2),t,0,.09,0),_(new Tt(6.5,.18,6.5),e,0,.27,0),_(new Tt(5.9,.16,5.9),t,0,.44,0),_(new Tt(5.94,.03,5.94),n,0,m+.005,0),_(new Tt(5.4,.035,5.4),t,0,m+.01,0),_(new Tt(3.4,.16,.7),e,0,.08,4.05);const u=3.15,M=[0,60,120,180,240,300].map(R=>R*Math.PI/180),v=new Tt(.72,.34,.72),y=new rt(.36,.4,.12,8),C=new rt(.24,.28,2.6,10),E=new rt(.29,.29,.08,8),b=new rt(.27,.24,.12,8),P=new rt(.46,.26,.36,8),U=new rt(.58,.46,.16,8),x=new Tt(.6,.18,.6),w=[];for(const R of M){const Ot=Math.cos(R)*u,I=Math.sin(R)*u,Z=new yt;Z.position.set(Ot,m,I),Z.rotation.y=-R,_(v,t,0,.17,0,Z),_(y,n,0,.4,0,Z),_(C,t,0,1.76,0,Z),_(E,n,0,1.15,0,Z),_(E,n,0,2.25,0,Z),_(b,n,0,3.12,0,Z),_(P,e,0,3.36,0,Z),_(U,n,0,3.62,0,Z),_(x,t,0,3.79,0,Z),i.add(Z),w.push(new L(Ot,m+3.88,I))}_(new rt(3.95,3.95,.5,6),t,0,4.5,0),_(new rt(4.02,4.02,.14,6),n,0,4.28,0),_(new rt(3.3,3.7,.45,12),e,0,4.98,0),_(new rt(3.35,3.35,.06,12),n,0,5.22,0),_(new rt(2.5,3.2,.42,12),t,0,5.41,0);const D=new jt(.24,.5,6),k=12,V=2.45;for(let R=0;R<k;R++){const Ot=R/k*Math.PI*2;_(D,n,Math.cos(Ot)*V,5.72,Math.sin(Ot)*V)}_(new Nt(1.95,16,8,0,Math.PI*2,0,Math.PI*.5),e,0,5.62,0);const et=new Tt(.06,1.95,.14),W=8;for(let R=0;R<W;R++){const Ot=R/W*Math.PI*2,I=_(et,n,0,0,0);I.position.set(Math.cos(Ot)*1.02,6.55,Math.sin(Ot)*1.02),I.rotation.y=-Ot,I.rotation.z=.62}_(new rt(.55,1.7,.35,12),t,0,7.42,0),_(new rt(.34,.5,.16,12),n,0,7.62,0),_(new Nt(.3,10,8),n,0,7.94,0),_(new rt(.1,.16,.18,8),n,0,8.2,0),_(new rt(.2,.2,.05,8),s,0,8.32,0),_(new jt(.12,.34,8),n,0,8.55,0),_(new Nt(.08,6,4),s,0,8.78,0),_(new rt(3.62,3.9,.55,20,1,!0),o,0,4.42,0),_(new rt(3.92,3.92,.12,20,1,!0),n,0,4.66,0),_(new rt(3.58,3.62,.14,20,1,!0),r,0,4.18,0);const lt=new jt(.2,.34,6),F=new Nt(.055,5,3),dt=16,st=3.75;for(let R=0;R<dt;R++){const Ot=R/dt*Math.PI*2,I=Math.cos(Ot)*st,Z=Math.sin(Ot)*st,j=_(lt,R%2?r:o,I,4.1,Z);j.rotation.x=Math.PI,_(F,n,I,3.9,Z)}const gt=new Nt(.135,5,3),Dt=(R,Ot,I,Z)=>{for(let j=0;j<=I;j++){const ht=j/I,ot=R.x+(Ot.x-R.x)*ht,A=R.z+(Ot.z-R.z)*ht,S=R.y+(Ot.y-R.y)*ht-Math.sin(Math.PI*ht)*Z;_(gt,j%2?c:a,ot,S,A)}};for(let R=0;R<M.length;R++){if(R===1)continue;const Ot=w[R],I=w[(R+1)%M.length],Z=new L(Ot.x,Ot.y-.15,Ot.z),j=new L(I.x,I.y-.15,I.z);Dt(Z,j,7,.72)}const Gt=w[1],z=w[2],q=new L(Gt.x,Gt.y+.05,Gt.z),mt=new L(z.x,z.y+.05,z.z);Dt(q,mt,8,.55);const X=new jt(.11,.42,6),pt=new Nt(.1,5,4),ut=7;for(let R=1;R<ut;R++){const Ot=R/ut,I=q.x+(mt.x-q.x)*Ot,Z=q.z+(mt.z-q.z)*Ot,j=q.y+(mt.y-q.y)*Ot-Math.sin(Math.PI*Ot)*.55,ht=_(X,R%2?l:a,I,j-.32,Z);ht.rotation.x=Math.PI,_(pt,R%2?a:c,I,j-.56,Z)}const St=new yt;St.position.set(0,m,0),_(new Tt(1.5,.14,1.5),e,0,.07,0,St),_(new Tt(1.12,.42,1.12),t,0,.35,0,St),_(new Tt(1.34,.1,1.34),n,0,.61,0,St),_(new Tt(1.3,.06,1.3),g,0,.69,0,St),_(new rt(.44,.4,.14,12),g,0,.73,0,St);const Ht=new rt(.05,.05,.72,6),It=.78;for(let R=0;R<4;R++){const Ot=_(Ht,h,0,It,0,St);Ot.rotation.z=Math.PI/2,Ot.rotation.y=R/4*Math.PI}return _(new jt(.3,.62,8),d,0,1.12,0,St),_(new jt(.19,.5,8),p,0,1.22,0,St),_(new jt(.1,.36,8),f,0,1.32,0,St),_(new Nt(.22,8,6),d,0,.92,0,St),i.add(St),i}const ar=new it({color:O.white,roughness:.55,metalness:0}),ex=new it({color:O.ivory,roughness:.6,metalness:0}),cn=new it({color:O.gold,roughness:.32,metalness:.9,emissive:O.brass,emissiveIntensity:.12}),nx=new it({color:O.brass,roughness:.4,metalness:.85}),ix=new it({color:O.burgundy,roughness:.8,metalness:0}),cr=new it({color:O.marigold,roughness:.75,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.18}),Vu=new it({color:O.jasmine,roughness:.7,metalness:0}),sx=new it({color:O.rose,roughness:.75,metalness:0}),xh=new it({color:O.leaf,roughness:.8,metalness:0}),Mh=new it({color:O.goldBright,roughness:.4,metalness:0,emissive:O.emberGlow,emissiveIntensity:1.4}),ox={blob:new ae(1,0)};function lr(i,t){const e=new K(ox.blob,i);return e.scale.setScalar(t),e}function rx(){const i=new yt,t=2.7,e=2.6,n=.42,s=new Tt(n,e,n),o=new Tt(n*1.7,.5,n*1.7),r=new rt(n*.9,n*1,.28,8),a=new Tt(n*1.12,.14,n*1.12),c=new Tt(n*1.5,.32,n*1.5);for(let M=-1;M<=1;M+=2){const v=M*t,y=new K(o,cn);y.position.set(v,.25,0),i.add(y);const C=new K(r,ex);C.position.set(v,.5+.14,0),i.add(C);const E=new K(s,ar);E.position.set(v,.64+e/2,0),i.add(E);for(const x of[1.4,2.9]){const w=new K(a,cn);w.position.set(v,x,0),i.add(w)}const b=new K(c,cn);b.position.set(v,.64+e+.16,0),i.add(b);const P=lr(cn,.16);P.scale.y=.2,P.position.set(v,.64+e+.34,0),i.add(P);const U=new K(new jt(.09,.26,8),cn);U.position.set(v,.64+e+.5,0),i.add(U)}const l=.64+e+.32,h=new le(.34,.07,4,6,Math.PI),d=7,p=.7;for(let M=0;M<d;M++){const v=M/(d-1),y=(v-.5)*2*t,C=l+Math.sin(v*Math.PI)*p,E=new K(h,cn);E.position.set(y,C,0),E.rotation.z=Math.PI,i.add(E)}const f=new K(new Tt(t*2+n,.24,.24),ar);f.position.set(0,l+p+.28,0),i.add(f);const g=new K(new Tt(t*2+n,.08,.28),cn);g.position.set(0,l+p+.42,0),i.add(g);const _=9;for(let M=0;M<_;M++){const v=M/(_-1),y=(v-.5)*2*t,C=Math.sin(v*Math.PI),E=l+C*p,b=.5+(1-C)*.7,P=3;for(let U=0;U<P;U++){const x=E-(U+1)*(b/P),w=(M+U)%3,k=lr(w===0?Vu:cr,.09+(U===P-1?.02:0));k.position.set(y,x,.05),i.add(k)}}const m=new jt(.14,.4,3),u=5;for(let M=0;M<u;M++){const y=(M/(u-1)-.5)*(t*1.7),C=new K(m,ix);C.position.set(y,l+p+.04,.16),C.rotation.x=Math.PI,C.rotation.z=Math.PI/4,i.add(C)}return i}function ax(){const i=new yt,t=1.5,e=1.8,n=.09,s=new rt(n,n,e,8);for(let h=-1;h<=1;h+=2){const d=new K(s,xh);d.position.set(h*t,e/2,0),i.add(d)}const o=new le(t,n,5,16,Math.PI),r=new K(o,xh);r.position.set(0,e,0),i.add(r);const a=[cr,sx,Vu,cr];function c(h,d){for(let f=0;f<2;f++){const g=a[Math.random()*a.length|0],_=lr(g,.12+Math.random()*.07);_.position.set(h+(Math.random()-.5)*.22,d+(Math.random()-.5)*.22,(Math.random()-.5)*.22),i.add(_)}}for(let h=-1;h<=1;h+=2)for(let d=0;d<=4;d++)c(h*t,.25+(e-.1)*(d/4));const l=9;for(let h=0;h<=l;h++){const d=h/l*Math.PI,p=Math.cos(d)*t,f=e+Math.sin(d)*t;c(p,f)}return i}function cx(){const i=new yt,t=new K(new Tt(.7,.22,.7),cn);t.position.y=.11,i.add(t);const e=new K(new Tt(.54,.18,.54),ar);e.position.y=.22+.09,i.add(e);const n=1.9,s=.4+n/2,o=new K(new rt(.18,.22,n,8),ar);o.position.y=s,i.add(o);const r=new rt(.24,.24,.09,8),a=new K(r,cn);a.position.y=.46,i.add(a);const c=new K(r,cn);c.position.y=.4+n-.06,i.add(c);const l=.4+n+.02,h=new jt(.12,.34,4),d=8;for(let u=0;u<d;u++){const M=u/d*Math.PI*2,v=new K(h,cn);v.position.set(Math.cos(M)*.19,l+.1,Math.sin(M)*.19),v.rotation.z=Math.cos(M)*.6,v.rotation.x=-Math.sin(M)*.6,i.add(v)}for(let u=0;u<d;u++){const M=u/d*Math.PI*2+Math.PI/d,v=new K(h,cn);v.scale.setScalar(.8),v.position.set(Math.cos(M)*.1,l+.16,Math.sin(M)*.1),v.rotation.z=Math.cos(M)*.3,v.rotation.x=-Math.sin(M)*.3,i.add(v)}const p=l+.34,f=new K(new rt(.26,.14,.16,12),nx);f.position.y=p,i.add(f);const g=new K(new le(.25,.03,6,14),cn);g.rotation.x=Math.PI/2,g.position.y=p+.08,i.add(g);const _=new K(new jt(.1,.32,8),Mh);_.position.y=p+.24,i.add(_);const m=lr(Mh,.07);return m.position.y=p+.14,i.add(m),i}function lx(){const i=new yt,t=new it({color:O.ivory,roughness:.62,metalness:0}),e=new it({color:O.bronze,roughness:.55,metalness:.2}),n=new it({color:O.burgundy,roughness:.82,metalness:0}),s=new it({color:O.burgundyDeep,roughness:.85,metalness:0}),o=new it({color:O.gold,roughness:.34,metalness:.9,emissive:O.brass,emissiveIntensity:.28}),r=new it({color:O.goldBright,roughness:.3,metalness:.85,emissive:O.goldBright,emissiveIntensity:.75}),a=new it({color:O.saffron,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.4}),c=new it({color:O.cream,roughness:.7,metalness:.06}),l=new it({color:O.ivory,roughness:.68,metalness:.05}),h=new it({color:O.skin,roughness:.75,metalness:0}),d=new it({color:O.skinDark,roughness:.78,metalness:0}),p=new it({color:1708040,roughness:.4,metalness:0}),f=new it({color:O.jasmine,roughness:.5,metalness:0,emissive:O.jasmine,emissiveIntensity:.35}),g=new it({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.3}),_=new it({color:O.leaf,roughness:.8,metalness:0}),m=new it({color:O.maroon,roughness:.7,metalness:.1}),u=(xt,Jt,N,Mt,tt)=>{const ct=new K(xt,Jt);return ct.position.set(N||0,Mt||0,tt||0),ct},M=u(new Tt(.64,.8,1.58),t,0,1.3,0);i.add(M),i.add(u(new Tt(.58,.62,.36),t,0,1.2,.84)),i.add(u(new Nt(.4,7,5),t,0,1.36,-.74));const v=new rt(.1,.07,1.02,6),y=new Tt(.16,.12,.2),C=new rt(.115,.115,.07,6),E=[[.23,.56],[-.23,.56],[.25,-.56],[-.25,-.56]],b=[Math.PI/2,Math.PI*1.5,0,Math.PI],P=[];for(let xt=0;xt<E.length;xt++){const[Jt,N]=E[xt],Mt=new yt;Mt.position.set(Jt,1.06,N);const tt=u(v,t,0,-.51,0),ct=new yt;ct.position.y=-1,ct.add(u(y,e,0,0,0));const bt=u(C,o,0,-.74,0);Mt.add(tt,ct,bt),i.add(Mt),P.push({hip:Mt,foot:ct,offset:b[xt]})}const U=new yt;U.position.set(0,1.44,-.9);const x=u(new rt(.12,.02,1,6),t,0,-.44,-.14);x.rotation.x=-.34,U.add(x),i.add(U);const w=new yt;w.position.set(0,1.52,.72),i.add(w);const D=u(new rt(.2,.3,.74,6),t,0,.3,.2);D.rotation.x=.62,w.add(D);const k=u(new Tt(.27,.31,.44),t,0,.64,.53);k.rotation.x=.28,w.add(k);const V=u(new Tt(.2,.19,.24),t,0,.52,.8);V.rotation.x=.28,w.add(V);const et=new ae(.035,0);w.add(u(et,p,.11,.68,.62)),w.add(u(et,p,-.11,.68,.62));const W=new jt(.06,.19,4),lt=u(W,t,.09,.84,.42);lt.rotation.x=-.15;const F=u(W,t,-.09,.84,.42);F.rotation.x=-.15,w.add(lt,F);const dt=u(new Tt(.2,.24,.05),o,0,.7,.67);dt.rotation.x=.28,w.add(dt),w.add(u(new Tt(.29,.05,.05),o,0,.6,.67));const st=u(new Tt(.03,.34,.03),o,.14,.56,.66);st.rotation.x=.28;const gt=u(new Tt(.03,.34,.03),o,-.14,.56,.66);gt.rotation.x=.28,w.add(st,gt);const Dt=u(new le(.11,.02,3,6),o,0,.5,.78);Dt.rotation.x=Math.PI/2+.28,w.add(Dt),w.add(u(new rt(.05,.05,.06,8),o,0,.86,.36)),w.add(u(new jt(.1,.42,6),a,0,1.06,.34)),w.add(u(new jt(.05,.22,6),r,0,1.2,.34));const Gt=new Tt(.05,.6,1.24);i.add(u(Gt,n,.36,1.12,-.05)),i.add(u(Gt,n,-.36,1.12,-.05));const z=new Tt(.06,.09,1.28);i.add(u(z,o,.36,.83,-.05)),i.add(u(z,o,-.36,.83,-.05));const q=new rt(.08,.08,.03,6);for(const xt of[.32,-.36]){const Jt=u(q,o,.385,1.16,xt);Jt.rotation.z=Math.PI/2;const N=u(q,o,-.385,1.16,xt);N.rotation.z=Math.PI/2,i.add(Jt,N)}const mt=new jt(.035,.16,4);for(const xt of[.4,0,-.42]){const Jt=u(mt,r,.37,.72,xt);Jt.rotation.x=Math.PI;const N=u(mt,r,-.37,.72,xt);N.rotation.x=Math.PI,i.add(Jt,N)}i.add(u(new Tt(.72,.08,1.22),s,0,1.68,-.05)),i.add(u(new Tt(.76,.05,.12),o,0,1.7,.56)),i.add(u(new Tt(.76,.05,.12),o,0,1.7,-.66));const X=new yt;X.position.set(0,0,.06),i.add(X),X.add(u(new rt(.24,.28,.22,8),l,0,1.86,0)),X.add(u(new rt(.2,.27,.72,8),l,0,2.3,.02)),X.add(u(new Nt(.24,6,5),l,0,2.6,.02)),X.add(u(new Tt(.035,.72,.035),o,0,2.3,.26));const pt=u(new Tt(.05,.22,.04),n,.09,2.56,.22);pt.rotation.z=.35;const ut=u(new Tt(.05,.22,.04),n,-.09,2.56,.22);ut.rotation.z=-.35,X.add(pt,ut);const St=new ae(.028,0);for(let xt=0;xt<5;xt++)X.add(u(St,r,0,2.56-xt*.13,.27));const Ht=new rt(.1,.075,.66,6),It=u(Ht,c,.3,1.64,.08);It.rotation.x=.55,It.rotation.z=.14;const R=u(Ht,c,-.3,1.64,.08);R.rotation.x=.55,R.rotation.z=-.14,X.add(It,R);const Ot=new Tt(.11,.09,.18),I=new jt(.045,.1,4);for(const xt of[.32,-.32]){X.add(u(Ot,s,xt,1.36,.28));const Jt=u(I,o,xt,1.4,.4);Jt.rotation.x=-1.3,X.add(Jt);const N=u(new le(.09,.022,4,6),o,xt,1.31,.27);X.add(N),X.add(u(new Tt(.02,.28,.02),o,xt,1.5,.24))}const Z=new rt(.062,.055,.52,6),j=u(Z,l,.24,2.34,.16);j.rotation.x=.75,j.rotation.z=.28;const ht=u(Z,l,-.25,2.3,.04);ht.rotation.x=.35,ht.rotation.z=-.28,X.add(j,ht);const ot=new ae(.06,0),A=u(ot,h,.32,2.12,.34),S=u(ot,h,-.34,2.1,.12);X.add(A,S),X.add(u(new rt(.07,.08,.11,6),h,0,2.72,.02));const B=u(new ae(.17,1),h,0,2.88,.03);X.add(B),X.add(u(new ae(.024,0),p,.06,2.9,.18)),X.add(u(new ae(.024,0),p,-.06,2.9,.18)),X.add(u(new jt(.03,.06,4),d,0,2.85,.2)),X.add(u(new Tt(.11,.02,.03),d,0,2.81,.18)),X.add(u(new Nt(.21,8,6),n,0,3.02,0));const Y=u(new le(.19,.055,6,9),o,0,2.96,0);Y.rotation.x=Math.PI/2,X.add(Y),X.add(u(new Nt(.12,5,4),s,.06,3.14,-.04)),X.add(u(new ae(.055,0),r,0,3.04,.19)),X.add(u(new jt(.035,.2,6),r,0,3.24,.15)),X.add(u(new Tt(.34,.025,.025),o,0,2.94,.19));const nt=new Tt(.016,.28,.016),Q=new Nt(.02,4,3);for(let xt=0;xt<8;xt++){const Jt=-.14+xt*.04,N=.19-Math.abs(xt-3.5)*.006;X.add(u(nt,f,Jt,2.78,N)),X.add(u(Q,g,Jt,2.64,N))}const At=u(new le(.2,.05,5,10),g,0,2.5,.08);At.rotation.x=1.35,At.scale.set(1,1.25,1),X.add(At);const _t=new le(.09,.045,4,6,Math.PI),wt=u(_t,g,.09,2.28,.24);wt.rotation.z=.2;const te=u(_t,g,-.09,2.28,.24);te.rotation.z=-.2,X.add(wt,te),X.add(u(new Nt(.03,4,3),_,.2,2.5,.12)),X.add(u(new Nt(.03,4,3),_,-.2,2.5,.12));const ft=new yt;ft.position.set(-.26,2,.02),ft.rotation.z=.5,ft.rotation.x=-.15;const Lt=u(new rt(.03,.02,.62,6),s,0,-.28,0);ft.add(Lt),ft.add(u(new rt(.032,.032,.05,6),o,0,.02,0)),ft.add(u(new rt(.03,.03,.05,6),o,0,-.55,0)),ft.add(u(new Tt(.14,.03,.03),r,0,.08,0)),ft.add(u(new rt(.02,.022,.12,6),d,0,.16,0)),ft.add(u(new ae(.03,0),r,0,.23,0)),X.add(ft);const Yt=new rt(.012,.012,1,4),qt=u(Yt,m,.12,1.75,.66);qt.rotation.x=-.9;const Pt=u(Yt,m,-0,1.78,.62);return Pt.rotation.x=-.78,i.add(qt,Pt),{group:i,update:(xt,Jt,N={amount:0,phase:0})=>{const Mt=N.amount||0,tt=N.phase||0;for(const Rt of P){const ee=Math.sin(tt+Rt.offset)*.3*Mt;Rt.hip.rotation.x=ee,Rt.foot.rotation.x=-ee*.8}const ct=Math.pow(Math.max(0,Math.sin(xt*.73+.8)),12);w.rotation.x=Math.sin(xt*.9)*.05+Math.sin(tt*2)*.018*Mt,w.rotation.y=Math.sin(xt*.43)*.025,w.position.y=1.52+Math.sin(xt*.9)*.01,lt.rotation.x=-.15-ct*.22,F.rotation.x=-.15-Math.pow(Math.max(0,Math.sin(xt*.73+2.5)),12)*.22,U.rotation.z=Math.sin(xt*.8+.5)*.15,U.rotation.x=Math.sin(xt*.6)*.05;const bt=1+Math.sin(xt*1.4)*.016;M.scale.set(bt,1,bt),X.rotation.x=Math.sin(xt*1.4+.3)*.013+Math.sin(tt)*.008*Mt,X.position.y=Math.sin(xt*1.4)*.009+Math.abs(Math.sin(tt))*.018*Mt,X.rotation.z=Math.sin(xt*.7)*.006,j.rotation.x=.75+Math.sin(xt*1.2+.4)*.018+Math.sin(tt)*.018*Mt,ft.rotation.z=.5+Math.sin(xt*1.1)*.02},gaitScale:3.8,gaitOffset:0}}function hx(){const i=new yt,t=new yt;i.add(t);const e=new it({color:O.burgundy,roughness:.82,metalness:.04}),n=new it({color:O.maroon,roughness:.85,metalness:.04}),s=new it({color:O.crimson,roughness:.8,metalness:.04}),o=new it({color:O.gold,metalness:.92,roughness:.32,emissive:O.brass,emissiveIntensity:.35}),r=new it({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.6}),a=new it({color:O.crimson,roughness:.68,metalness:.05,emissive:O.maroon,emissiveIntensity:.12,side:de}),c=new it({color:O.skin,roughness:.64,metalness:0}),l=new it({color:1445639,roughness:.5,metalness:.06}),h=(X,pt,ut,St,Ht)=>{const It=new K(X,pt);return It.position.set(ut||0,St||0,Ht||0),t.add(It),It},d=h(new rt(.18,.6,1.03,18,1,!0),e,0,.535,0);d.rotation.y=Math.PI/20,h(new rt(.42,.635,.34,18,1,!0),n,0,.19,0);const p=h(new ei(.635,20),n,0,.02,0);p.rotation.x=-Math.PI/2,h(new rt(.64,.66,.11,18,1,!0),o,0,.075,0),h(new rt(.628,.645,.05,16,1,!0),r,0,.35,0),h(new rt(.45,.465,.05,16,1,!0),o,0,.55,0),h(new rt(.31,.32,.045,16,1,!0),r,0,.78,0);const f=h(new Tt(.05,.98,.02),o,0,.54,.44);f.rotation.x=-.12,h(new rt(.145,.19,.37,14,1,!0),s,0,1.235,0),h(new rt(.192,.196,.06,16,1,!0),o,0,1.055,0),h(new rt(.135,.155,.05,14,1,!0),r,0,1.4,0),h(new rt(.05,.055,.1,8),c,0,1.46,.005),h(new Nt(.115,11,7),c,0,1.615,.012).scale.set(.94,1.05,.98),h(new Nt(.128,11,6,0,Math.PI*2,0,Math.PI*.6),l,0,1.625,-.014).scale.set(1,1.02,1.03),h(new Nt(.045,6,3),l,-.095,1.575,-.02),h(new Nt(.045,6,3),l,.095,1.575,-.02),h(new Nt(.07,8,5),l,0,1.55,-.125).scale.set(1,.9,.85);const u=h(new rt(.032,.014,.3,8,1,!0),l,0,1.36,-.125);u.rotation.x=-.12;const M=h(new le(.055,.008,4,8),r,0,1.55,-.115);M.rotation.x=Math.PI/2.4,h(new ei(.011,8),s,0,1.645,.115),h(new Nt(.011,5,3),l,-.042,1.615,.108),h(new Nt(.011,5,3),l,.042,1.615,.108);const v=h(new Tt(.006,.11,.005),r,0,1.7,.088);v.rotation.x=-.32,h(new ae(.019,0),r,0,1.655,.108);const y=h(new le(.017,.005,4,8),r,.028,1.585,.108);y.rotation.y=.4;const C=X=>{h(new ae(.016,0),r,X,1.585,.03),h(new jt(.022,.045,8),o,X,1.545,.03).rotation.x=Math.PI};C(-.108),C(.108),h(new rt(.066,.07,.02,16,1,!0),r,0,1.44,.02).scale.set(1,1,.72);const b=h(new le(.085,.013,4,12),o,0,1.4,.028);b.rotation.x=Math.PI/2,b.scale.set(1,.72,1),h(new ae(.018,0),r,0,1.335,.14),h(new rt(.205,.205,.022,16,1,!0),r,0,1.03,0).scale.set(1,1,.9),h(new ae(.016,0),o,0,.99,.2);const U=(X,pt,ut,St,Ht,It,R,Ot,I,Z)=>{const j=new L(X,pt,ut),ht=new L(St,Ht,It),ot=new L().subVectors(ht,j),A=ot.length(),S=new rt(Ot,R,A,Z,1,!1),B=new K(S,I);return B.position.copy(j).addScaledVector(ot,.5),B.quaternion.setFromUnitVectors(new L(0,1,0),ot.normalize()),t.add(B),B};U(-.17,1.4,.02,-.215,1.23,.11,.05,.038,s,8),U(-.215,1.23,.11,-.13,1.155,.205,.036,.028,c,8),U(.17,1.4,.02,.215,1.23,.11,.05,.038,s,8),U(.215,1.23,.11,.13,1.155,.205,.036,.028,c,8);const x=new rt(.048,.048,.02,8,1,!0),w=X=>{for(let pt=0;pt<2;pt++){const ut=.16+pt*.028,St=new K(x,pt%2?o:r);St.position.set(X,1.165-pt*.006,ut),St.rotation.x=Math.PI/2-.5,St.rotation.z=X<0?.5:-.5,t.add(St)}};w(-.128),w(.128),h(new Nt(.038,6,4),c,-.13,1.15,.21),h(new Nt(.038,6,4),c,.13,1.15,.21);const D=(X,pt,ut,St,Ht)=>{const It=new Te(X,pt,ut,St),R=It.attributes.position;for(let Ot=0;Ot<R.count;Ot++){const Z=(R.getY(Ot)+pt/2)/pt;R.setZ(Ot,R.getZ(Ot)+Math.sin(Z*Math.PI)*Ht*-.5+(1-Z)*Ht)}return R.needsUpdate=!0,It.computeVertexNormals(),It};h(new Nt(.135,10,4,0,Math.PI*2,0,Math.PI*.42),a,0,1.63,-.01).scale.set(1.05,.85,1.08);const V=h(D(.48,.82,3,5,.11),a,0,1.32,-.15);V.rotation.x=.06;const et=h(new Te(.48,.05),r,0,.93,-.185);et.rotation.x=.06;const W=h(D(.22,.6,2,4,.05),a,-.185,1.2,.05);W.rotation.set(0,.28,.14),h(new Te(.22,.045),r,-.225,.91,.07).rotation.set(0,.28,.14);const F=new yt;t.add(F);const dt=[new it({color:O.marigold,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.3}),new it({color:O.jasmine,roughness:.68,emissive:O.jasmine,emissiveIntensity:.18}),new it({color:O.rose,roughness:.65}),new it({color:O.saffron,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.25})],st=new ae(.042,0),gt=9;for(let X=0;X<gt;X++){const pt=X/(gt-1),ut=new K(st,dt[X%dt.length]);ut.position.set(-.145+.29*pt,1.15-.34*Math.sin(Math.PI*pt),.225+.03*Math.sin(Math.PI*pt)),ut.scale.setScalar(.9+Math.random()*.35),ut.rotation.set(Math.random(),Math.random(),Math.random()),F.add(ut)}const Dt=new it({color:O.leaf,roughness:.75,side:de}),Gt=new Te(.05,.09);[[-.15,1.15,.2,-.5],[.15,1.15,.2,.5]].forEach(X=>{const pt=new K(Gt,Dt);pt.position.set(X[0],X[1],X[2]),pt.rotation.z=X[3],F.add(pt)});const z=Math.random()*Math.PI*2;let q=0;return{group:i,update:X=>{const pt=X+z;t.rotation.z=Math.sin(pt*.7)*.018,t.rotation.y=Math.sin(pt*.42)*.035,t.rotation.x=q*.025+Math.sin(pt*.5)*.005,t.position.y=(Math.sin(pt*1.35)*.5+.5)*.01,V.rotation.z=Math.sin(pt*.9)*.02,W.rotation.z=.14+Math.sin(pt*1.1+.6)*.03,F.rotation.z=Math.sin(pt*.8+.4)*.03,F.rotation.x=Math.sin(pt*.7)*.006,F.position.y=q*.018+Math.sin(pt*1.2)*.004,F.position.z=q*.008},setArrival(X){q=Se.clamp(X,0,1)}}}function ux(){const i=new yt,t=new it({color:8356488,roughness:.9,metalness:0}),e=new it({color:7172213,roughness:.9,metalness:0}),n=new it({color:O.ivory,roughness:.35,metalness:.05}),s=new it({color:1708040,roughness:.4,metalness:0}),o=new it({color:O.gold,metalness:.9,roughness:.3,emissive:O.brass,emissiveIntensity:.18}),r=new it({color:O.goldBright,metalness:.6,roughness:.35,emissive:O.goldBright,emissiveIntensity:1.1}),a=new it({color:O.burgundy,roughness:.85,metalness:0}),c=new it({color:O.burgundyDeep,roughness:.85,metalness:0}),l=new it({color:O.crimson,roughness:.3,metalness:.2,emissive:O.rose,emissiveIntensity:.5}),h=new yt;i.add(h);const d=new K(new Nt(1,12,8),t);d.scale.set(1.4,1.15,2),d.position.set(0,1.95,-.2),d.castShadow=!0,h.add(d);const p=new K(new Nt(1,8,6),t);p.scale.set(1.25,1.15,.9),p.position.set(0,1.9,-1.9),h.add(p);const f=new K(new rt(.85,1.05,.9,10,1,!0),t);f.rotation.x=Math.PI/2.3,f.position.set(0,2.35,1.6),h.add(f);const g=new K(new Nt(.85,10,8),t);g.scale.set(1,1.05,.95),g.position.set(0,2.5,2.4),g.castShadow=!0,h.add(g);const _=new K(new Nt(.55,8,6),t);_.scale.set(1,.9,.7),_.position.set(0,2.95,2.55),h.add(_);const m=new K(new Nt(.55,8,6),e);m.scale.set(.85,1,.8),m.position.set(0,2.25,2.95),h.add(m);for(const z of[-1,1]){const q=new K(new Nt(.11,6,5),s);q.position.set(z*.5,2.55,2.85),h.add(q)}const u=[];for(const z of[-1,1]){const q=new yt;q.position.set(z*.72,2.65,2.15);const mt=new K(new Nt(.72,8,6),t);mt.scale.set(.1,1.05,.85),mt.position.set(z*.08,-.15,-.35),q.add(mt);const X=new K(new Qs(.5,.62,10),o);X.scale.set(.85,1,1),X.rotation.y=Math.PI/2,X.position.set(z*.1,-.15,-.35),q.add(X),h.add(q),u.push({pivot:q,sx:z,base:z*.32}),q.rotation.y=z*.32}const M=new yt;M.position.set(0,2.15,3.05),M.rotation.x=-.35,h.add(M);const v=[];let y=M;const C=6,E=.36,b=[-.12,-.14,-.16,-.1,.2,.4];for(let z=0;z<C;z++){const q=new yt;q.position.y=z===0?0:-E;const mt=b[z];q.rotation.x=mt,y.add(q);const X=.3*(1-z*.12),pt=.3*(1-(z+1)*.12),ut=new K(new rt(pt,X,E,6,1,!0),t);if(ut.position.y=-E/2,q.add(ut),z===2||z===4){const St=new K(new rt(X+.03,X+.03,.06,6,1,!0),o);St.position.y=-.03,q.add(St)}v.push({seg:q,baseX:mt,i:z}),y=q}const P=new K(new Nt(.11,6,5),e);P.position.y=-E,y.add(P);for(const z of[-1,1]){const q=new K(new jt(.11,.95,6),n);q.rotation.set(1.15,0,z*.18),q.position.set(z*.34,2.05,3.1),h.add(q);const mt=new K(new rt(.1,.12,.1,6),o);mt.rotation.set(1.15,0,z*.18),mt.position.set(z*.34,2.16,2.98),h.add(mt)}const U=[[.72,.95],[-.72,.95],[.72,-1.35],[-.72,-1.35]],x=[Math.PI/2,Math.PI*1.5,0,Math.PI],w=[];for(let z=0;z<U.length;z++){const[q,mt]=U[z],X=new yt;X.position.set(q,1.755,mt);const pt=new K(new rt(.3,.38,1.75,8),t);pt.position.set(0,-.875,0),pt.castShadow=!0,X.add(pt);const ut=new yt;ut.position.y=-1.615,X.add(ut);const St=new K(new rt(.42,.44,.28,8),e);ut.add(St);for(let It=-1;It<=1;It++){const R=new K(new ae(.08,0),n);R.scale.set(1,.7,.6),R.position.set(It*.15,-.08,.38),ut.add(R)}const Ht=new K(new rt(.42,.42,.22,8,1,!0),o);if(Ht.position.y=-1.335,X.add(Ht),mt>0)for(let It=-1;It<=1;It++){const R=new K(new ae(.08,0),r);R.position.set(It*.28,-1.475,.3),X.add(R)}i.add(X),w.push({hip:X,footGroup:ut,offset:x[z]})}const D=new yt;D.position.set(0,2.4,-2.55),D.rotation.x=.5,h.add(D);const k=new K(new rt(.06,.09,1.5,5),e);k.position.y=-.75,D.add(k);const V=new K(new jt(.14,.4,5),c);V.rotation.x=Math.PI,V.position.y=-1.55,D.add(V);const et=new K(new Tt(2,.1,2.7),a);et.position.set(0,3,-.4),h.add(et);for(const z of[-1,1]){const q=new K(new Tt(.1,1.3,2.6),a);q.rotation.z=z*.12,q.position.set(z*1.4,2.25,-.4),h.add(q);const mt=new K(new Tt(.12,.18,2.6),o);mt.rotation.z=z*.12,mt.position.set(z*1.52,1.62,-.4),h.add(mt);for(let ut=0;ut<5;ut++){const St=-1.4+ut*.5,Ht=new K(new jt(.05,.28,4),o);if(Ht.rotation.x=Math.PI,Ht.position.set(z*1.58,1.42,-.4+(St+.4)*.9),h.add(Ht),ut%2===0){const It=new K(new ae(.06,0),r);It.position.set(z*1.6,1.28,-.4+(St+.4)*.9),h.add(It)}}const X=new K(new rt(.22,.22,.05,8),o);X.rotation.z=Math.PI/2,X.rotation.x=z*.12,X.position.set(z*1.47,2.3,-.2),h.add(X);const pt=new K(new ae(.09,0),l);pt.position.set(z*1.52,2.3,-.2),h.add(pt)}const W=new K(new Tt(.16,.14,2.7),o);W.position.set(0,3.07,-.4),h.add(W);const lt=new K(new Tt(1.35,.4,1.5),c);lt.position.set(0,3.28,-.5),h.add(lt);for(const z of[.35,-1.35]){const q=new K(new rt(.18,.18,1.4,8),o);q.rotation.z=Math.PI/2,q.position.set(0,3.4,z),h.add(q)}for(const z of[-.6,.6])for(const q of[.35,-1.35]){const mt=new K(new ae(.11,0),r);mt.position.set(z,3.52,q),h.add(mt)}const F=new yt;F.position.set(0,2.95,2.75),F.rotation.x=-.35,h.add(F);const dt=new K(new Tt(.95,.72,.08),a);F.add(dt);const st=new K(new Tt(1.02,.8,.05),o);st.position.z=-.02,F.add(st);for(let z=-2;z<=2;z++){const q=new K(new ae(.07,0),l);q.position.set(z*.18,.12,.06),F.add(q)}const gt=new K(new Nt(.14,8,6),r);gt.scale.set(1,1,.6),gt.position.set(0,-.08,.08),F.add(gt);const Dt=new K(new jt(.09,.24,6),r);Dt.rotation.x=Math.PI,Dt.position.set(0,-.5,.05),F.add(Dt);for(const z of[-1,1]){const q=new K(new Qs(.14,.24,8),o);q.position.set(z*.68,2.35,2.62),q.rotation.y=z*.5,h.add(q)}function Gt(z,q,mt={amount:0,phase:0}){const X=mt.amount||0,pt=mt.phase||0;for(const ut of w){const St=Math.sin(pt+ut.offset)*.16*X;ut.hip.rotation.x=St,ut.footGroup.rotation.x=-St*.78}h.position.x=Math.sin(z*.5)*.05+Math.sin(pt)*.025*X,h.position.y=Math.sin(z*1)*.02+Math.abs(Math.sin(pt))*.018*X,h.rotation.z=Math.sin(z*.5)*.012+Math.sin(pt)*.008*X;for(const ut of u)ut.pivot.rotation.y=ut.base+Math.sin(z*.9+ut.sx)*.18*ut.sx,ut.pivot.rotation.x=Math.sin(z*.9+ut.sx)*.05;for(const ut of v){const St=(ut.i+1)/C;ut.seg.rotation.z=Math.sin(z*.8+ut.i*.5)*.05*St,ut.seg.rotation.x=ut.baseX+Math.sin(z*.7+ut.i*.4)*.03*St+Math.sin(z*1.65+ut.i*.7)*.012*St}F.rotation.z=Math.sin(z*.65)*.018,D.rotation.z=Math.sin(z*.6)*.15}return{group:i,update:Gt,gaitScale:2.4,gaitOffset:0,bannerMount:h}}const Vt={skin:new it({color:O.skin,roughness:.85,metalness:0}),white:new it({color:O.ivory,roughness:.8,metalness:0}),cream:new it({color:O.cream,roughness:.8,metalness:0}),burgundy:new it({color:O.burgundy,roughness:.7,metalness:0,side:de}),crimson:new it({color:O.crimson,roughness:.7,metalness:0,side:de}),gold:new it({color:O.gold,roughness:.35,metalness:.9,emissive:O.goldBright,emissiveIntensity:.18}),brass:new it({color:O.brass,roughness:.4,metalness:.85,emissive:O.marigold,emissiveIntensity:.12}),bronze:new it({color:O.bronze,roughness:.6,metalness:.4}),marigold:new it({color:O.marigold,roughness:.7,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.15}),jasmine:new it({color:O.jasmine,roughness:.75,metalness:0}),leaf:new it({color:O.leaf,roughness:.7,metalness:0})},Wt=(i,t)=>new K(i,t);function yh(i){const t=new yt,e=Wt(new rt(.045,.04,.42,6),Vt.white);e.position.y=-.21,t.add(e);const n=Wt(new le(.045,.014,3,6),Vt.gold);n.rotation.x=Math.PI/2,n.position.y=-.41,t.add(n);const s=Wt(new Nt(.05,5,3),Vt.skin);return s.position.y=-.45,t.add(s),t.position.set(i*.17,1.24,0),t}function Sh(i){const t=new yt;t.position.set(i,.44,0);const e=Wt(new rt(.06,.05,.42,6),Vt.skin);e.position.y=-.21,t.add(e);const n=new yt;n.position.y=-.41;const s=Wt(new Tt(.09,.055,.17),Vt.bronze);return s.position.z=.03,n.add(s),t.add(n),{g:t,footPivot:n}}function dx(){const i=new yt,t=Wt(new rt(.03,.035,1.9,6),Vt.bronze);t.position.y=2.05,i.add(t);const e=Wt(new Nt(.62,10,3,0,Math.PI*2,0,Math.PI/2),Vt.burgundy);e.position.y=2.9,i.add(e);const n=Wt(new le(.6,.045,3,8),Vt.gold);n.rotation.x=Math.PI/2,n.position.y=2.9,i.add(n);const s=Wt(new le(.63,.05,3,8),Vt.jasmine);s.rotation.x=Math.PI/2,s.position.y=2.84,i.add(s);const o=Wt(new jt(.05,.22,6),Vt.gold);o.position.y=3.28,i.add(o);const r=Wt(new ae(.055,0),Vt.gold);return r.position.y=3.14,i.add(r),{group:i,mode:"overhead"}}function fx(){const i=new yt,t=Wt(new le(.3,.05,4,10),Vt.marigold);i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2,s=Wt(new ae(.06,0),e%2?Vt.jasmine:Vt.marigold);s.position.set(Math.cos(n)*.3,Math.sin(n)*.3,0),i.add(s)}return i.position.set(0,1.16,.34),i.rotation.x=.25,{group:i,mode:"hold"}}function px(){const i=new yt,t=Wt(new rt(.02,.02,.5,6),Vt.bronze);t.rotation.z=-.5,t.position.set(.12,.05,.28),i.add(t);const e=Wt(new rt(.006,.006,.16,4),Vt.brass);e.position.set(.32,-.05,.42),i.add(e);const n=Wt(new rt(.07,.07,.14,6,1,!0),Vt.brass);n.position.set(.32,-.2,.42),i.add(n);const s=Wt(new jt(.1,.09,6),Vt.brass);s.position.set(.32,-.09,.42),i.add(s);const o=Wt(new rt(.075,.06,.03,6),Vt.brass);o.position.set(.32,-.28,.42),i.add(o);const r=Vt.brass.clone();r.color.setHex(O.flame),r.emissive.setHex(O.emberGlow),r.emissiveIntensity=1.4,r.metalness=0,r.roughness=.4;const a=Wt(new ae(.05,0),r);return a.scale.y=1.5,a.position.set(.32,-.2,.42),i.add(a),i.position.set(-.18,1.62,.08),{group:i,mode:"raise-r",flame:a}}function mx(){const i=new yt,t=Wt(new rt(.025,.03,2.4,6),Vt.bronze);t.position.y=1.2,i.add(t);const e=Wt(new jt(.06,.2,6),Vt.gold);e.position.y=2.5,i.add(e);const n=new Du;n.moveTo(0,0),n.lineTo(.7,-.18),n.lineTo(0,-.5),n.lineTo(0,0);const s=Wt(new Bc(n),Vt.burgundy);s.position.set(.03,2.3,0),i.add(s);const o=Wt(new Tt(.03,.5,.02),Vt.gold);return o.position.set(.03,2.05,.005),i.add(o),i.position.set(.22,0,.05),{group:i,mode:"stave-r"}}function gx(){const i=new yt,t=Wt(new rt(.16,.16,.34,10),Vt.bronze);t.rotation.z=Math.PI/2,i.add(t);const e=Wt(new le(.16,.025,3,10),Vt.cream);e.position.x=.17,i.add(e);const n=Wt(new le(.16,.025,3,10),Vt.cream);n.position.x=-.17,i.add(n);const s=Wt(new Tt(.04,.5,.02),Vt.crimson);return s.rotation.z=.9,s.position.y=.28,i.add(s),i.position.set(0,1,.26),{group:i,mode:"drum"}}function _x(){const i=new yt,t=Wt(new rt(.018,.03,.34,6),Vt.bronze);i.add(t);const e=Wt(new jt(.07,.1,6,1,!0),Vt.brass);e.position.y=-.21,i.add(e);const n=Wt(new rt(.008,.012,.05,5),Vt.gold);return n.position.y=.19,i.add(n),i.position.set(.02,1.34,.2),i.rotation.x=.9,{group:i,mode:"play"}}function vx(){const i=new yt,t=Wt(new rt(.022,.028,1.1,6),Vt.gold);t.rotation.x=Math.PI/2,t.position.z=.55,i.add(t);const e=Wt(new jt(.11,.16,8,1,!0),Vt.gold);e.rotation.x=-Math.PI/2,e.position.z=1.16,i.add(e);const n=Wt(new le(.03,.012,3,8),Vt.brass);return n.rotation.y=Math.PI/2,n.position.z=.35,i.add(n),i.position.set(0,1.32,.14),i.rotation.x=-.12,{group:i,mode:"play"}}function xx(){const i=new yt,t=Wt(new rt(.018,.022,.34,6),Vt.gold);t.position.y=-.17,i.add(t);const e=Wt(new Nt(.035,6,4),Vt.gold);i.add(e);for(let n=0;n<5;n++){const s=(n-2)*.32,o=Wt(new jt(.035,.42,5),Vt.leaf);o.position.set(Math.sin(s)*.16,.2+Math.cos(s)*.05,0),o.rotation.z=-s,i.add(o);const r=Wt(new ae(.035,0),Vt.gold);r.position.set(Math.sin(s)*.28,.38+Math.cos(s)*.05,0),i.add(r)}return i.position.set(.18,1.62,.06),i.rotation.z=-.25,{group:i,mode:"raise-r"}}const wh={chhatri:dx,garland:fx,lamp:px,flag:mx,dhol:gx,shehnai:_x,turhi:vx,morchhal:xx};function Mx(i){switch(i){case"overhead":return{l:{x:-2.5,z:.35},r:{x:-2.5,z:-.35}};case"hold":return{l:{x:-1.35,z:.25},r:{x:-1.35,z:-.25}};case"raise-r":return{l:{x:.12,z:.1},r:{x:-2.2,z:-.2}};case"stave-r":return{l:{x:.12,z:.1},r:{x:-.55,z:-.42}};case"drum":return{l:{x:-.95,z:.55},r:{x:-.95,z:-.55}};case"play":return{l:{x:-1.7,z:.35},r:{x:-1.7,z:-.35}};default:return{l:{x:.12,z:.1},r:{x:.12,z:-.1}}}}function Wu(i={}){const t=i.phase||0,e=wh[i.item]?i.item:"garland",n=new yt,s=Sh(-.09),o=Sh(.09);n.add(s.g,o.g);const r=Wt(new rt(.2,.28,.5,8),Vt.white);r.position.y=.62,n.add(r);const a=Wt(new rt(.15,.2,.5,8),Vt.white);a.position.y=1.1,n.add(a);const c=Wt(new le(.2,.03,3,8),Vt.gold);c.rotation.x=Math.PI/2,c.position.y=.87,n.add(c);const l=Wt(new Tt(.44,.13,.04),Vt.burgundy);l.rotation.z=.6,l.position.set(0,1.06,.19),n.add(l);const h=Wt(new le(.1,.025,3,8),Vt.gold);h.rotation.x=Math.PI/2,h.position.y=1.34,n.add(h);const d=Wt(new rt(.04,.045,.08,6),Vt.skin);d.position.y=1.39,n.add(d);const p=Wt(new Nt(.12,8,5),Vt.skin);p.position.y=1.53,n.add(p);const f=Wt(new jt(.02,.05,4),Vt.skin);f.rotation.x=Math.PI/2,f.position.set(0,1.52,.12),n.add(f);const g=Wt(new Nt(.135,8,5),Vt.white);g.scale.y=.8,g.position.y=1.63,n.add(g);const _=Wt(new le(.135,.035,3,8),Vt.burgundy);_.rotation.x=Math.PI/2+.15,_.position.y=1.6,n.add(_);const m=Wt(new jt(.03,.14,5),Vt.marigold);m.position.set(0,1.76,-.05),m.rotation.x=-.3,n.add(m);const u=Wt(new ae(.03,0),Vt.gold);u.position.set(0,1.62,.13),n.add(u);const M=yh(1),v=yh(-1);n.add(M),n.add(v);const{group:y,mode:C,flame:E}=wh[e]();n.add(y);const b=Mx(C);M.rotation.set(b.l.x,0,b.l.z),v.rotation.set(b.r.x,0,b.r.z);const P={x:b.l.x,z:b.l.z},U={x:b.r.x,z:b.r.z},x=C==="play"||C==="drum";function w(D,k,V={amount:0,phase:0}){const et=Math.sin(D*2+t),W=V.amount||0,lt=Math.sin(V.phase||0)*.38*W;if(s.g.rotation.x=lt,o.g.rotation.x=-lt,s.footPivot.rotation.x=-lt*.78,o.footPivot.rotation.x=lt*.78,n.position.y=(et*.5+.5)*.018+Math.abs(Math.sin(V.phase||0))*.026*W,C==="drum"){const F=Math.abs(Math.sin(D*7+t)),dt=Math.abs(Math.sin(D*7+t+1.2));M.rotation.x=P.x-F*.35,v.rotation.x=U.x-dt*.35}else M.rotation.x=P.x+et*.05,v.rotation.x=U.x-et*.05;n.rotation.z=x?Math.sin(D*1.6+t)*.045:0,E&&(E.material.emissiveIntensity=1.2+Math.sin(D*9+t)*.35,E.scale.x=1+Math.sin(D*11+t)*.12)}return{group:n,update:w,gaitScale:6,gaitOffset:t}}const Xu=new it({color:O.skin,roughness:.85,metalness:0}),yx=new it({color:O.skinDark,roughness:.85,metalness:0}),Eh=new it({color:1708040,roughness:.8,metalness:0}),Sx=new it({color:O.bronze,roughness:.55,metalness:.3});new it({color:O.cream,roughness:.8,metalness:0});const Vn=new it({color:O.gold,roughness:.34,metalness:.9,emissive:O.goldBright,emissiveIntensity:.2}),bh=new Map;function Pn(i,t=!1){const e=i+(t?"d":"");let n=bh.get(e);return n||(n=new it({color:i,roughness:.82,metalness:0,side:t?de:Cn}),bh.set(e,n)),n}const ge=(i,t)=>new K(i,t),Wn={magenta:14037868,teal:829048,royal:3890139,emerald:627304,violet:7358696},Th={armsUpM:{female:!1,cloth:O.saffron,legs:O.cream,turban:Wn.teal,sash:O.burgundy},bhangraM:{female:!1,cloth:Wn.royal,legs:O.cream,turban:Wn.magenta,sash:O.gold},clapM:{female:!1,cloth:Wn.emerald,legs:O.cream,turban:O.saffron,sash:O.burgundy},jumpM:{female:!1,cloth:O.marigoldDeep,legs:O.cream,turban:Wn.teal,sash:O.burgundy},spinF:{female:!0,choli:Wn.teal,lehenga:Wn.magenta,dupatta:O.burgundy},thumkaF:{female:!0,choli:Wn.emerald,lehenga:Wn.violet,dupatta:O.marigold}};function Ah(i,t){const e=new yt,n=ge(new rt(.05,.044,.34,6),t);n.position.y=-.17,e.add(n);const s=new yt;s.position.y=-.34,e.add(s);const o=ge(new rt(.042,.036,.3,6),t);o.position.y=-.15,s.add(o);const r=ge(new Nt(.052,6,4),Xu);return r.position.y=-.32,s.add(r),e.position.set(i*.18,1.24,0),{g:e,elbow:s}}function Rh(i,t){const e=new yt,n=ge(new rt(.07,.06,.4,6),t);n.position.y=-.2,e.add(n);const s=new yt;s.position.y=-.42,e.add(s);const o=ge(new rt(.057,.05,.4,6),t);o.position.y=-.2,s.add(o);const r=ge(new Tt(.09,.055,.18),Sx);return r.position.set(0,-.42,.045),s.add(r),e.position.set(i,.86,0),{g:e,knee:s}}function Yu(i={}){const t=i.phase||0,e=Th[i.variant]?i.variant:"armsUpM",n=Th[e],s=new yt,o=new yt;s.add(o);const r=Math.random()<.5?Xu:yx,a=n.female?r:Pn(n.legs),c=Rh(-.09,a),l=Rh(.09,a);o.add(c.g,l.g);let h=null;if(n.female){const E=ge(new rt(.15,.17,.28,8),Pn(n.choli));E.position.y=1.12,o.add(E);const b=ge(new rt(.14,.15,.16,6),r);b.position.y=.94,o.add(b);const P=ge(new le(.15,.02,3,8),Vn);P.rotation.x=Math.PI/2,P.position.y=.99,o.add(P),h=new yt,h.position.y=.9;const U=ge(new jt(.56,.78,12,1,!0),Pn(n.lehenga,!0));U.position.y=-.39,h.add(U);const x=ge(new le(.55,.03,3,12),Vn);x.rotation.x=Math.PI/2,x.position.y=-.78,h.add(x),o.add(h)}else{const E=Pn(n.cloth),b=ge(new rt(.16,.19,.5,8),E);b.position.y=1.06,o.add(b);const P=ge(new rt(.19,.26,.34,8),E);P.position.y=.72,o.add(P);const U=ge(new le(.255,.02,3,8),Vn);U.rotation.x=Math.PI/2,U.position.y=.56,o.add(U);const x=ge(new Tt(.03,.5,.03),Vn);x.position.set(0,1.06,.185),o.add(x);const w=ge(new Tt(.42,.12,.04),Pn(n.sash));w.rotation.z=.62,w.position.set(0,1.05,.18),o.add(w)}const d=ge(new rt(.04,.045,.08,6),r);d.position.y=1.38,o.add(d);const p=ge(new Nt(.115,8,6),r);p.position.y=1.52,o.add(p);const f=ge(new jt(.02,.05,4),r);if(f.rotation.x=Math.PI/2,f.position.set(0,1.51,.11),o.add(f),n.female){const E=ge(new Nt(.12,8,5),Eh);E.scale.set(1,1,.7),E.position.set(0,1.53,-.03),o.add(E);const b=ge(new Nt(.06,6,4),Eh);b.position.set(0,1.46,-.14),o.add(b);const P=ge(new Nt(.15,8,4,0,Math.PI*2,0,Math.PI/2),Pn(n.dupatta,!0));P.scale.set(1,.85,1),P.position.set(0,1.55,-.02),o.add(P);const U=ge(new ae(.022,0),Vn);U.position.set(0,1.6,.05),o.add(U)}else{const E=ge(new Nt(.135,8,5),Pn(n.turban));E.scale.y=.82,E.position.y=1.62,o.add(E);const b=ge(new le(.135,.032,3,8),Vn);b.rotation.x=Math.PI/2+.14,b.position.y=1.59,o.add(b);const P=ge(new jt(.03,.15,5),Pn(n.sash||O.marigold));P.position.set(0,1.76,-.04),P.rotation.x=-.35,o.add(P);const U=ge(new ae(.028,0),Vn);U.position.set(0,1.61,.12),o.add(U)}const g=n.female?Pn(n.choli):Pn(n.cloth),_=Ah(1,g),m=Ah(-1,g);o.add(_.g,m.g);const u=new le(.045,.012,3,6),M=ge(u,Vn);M.rotation.x=Math.PI/2,M.position.y=-.28,_.elbow.add(M);const v=ge(u,Vn);v.rotation.x=Math.PI/2,v.position.y=-.28,m.elbow.add(v);const y=(E,b,P,U=0,x=0)=>{E.g.rotation.set(b,0,P),E.elbow.rotation.set(U,0,x)};function C(E,b,P={amount:0,phase:0}){const U=E+t;if(c.g.rotation.x=0,l.g.rotation.x=0,c.knee.rotation.x=0,l.knee.rotation.x=0,e==="bhangraM"){const D=Math.sin(U*3),k=(D+1)*.5;o.position.set(0,Math.abs(D)*.1+.02,0),o.rotation.set(0,D*.4,0);const V=-2.85,et=-1.35;y(m,et+(V-et)*k,-.3-.6*(1-k),-.2,0),y(_,V+(et-V)*k,.3+.6*k,-.2,0),l.g.rotation.x=-.7*(1-k),c.g.rotation.x=-.7*k,l.knee.rotation.x=-.4*(1-k),c.knee.rotation.x=-.4*k}else if(e==="clapM"){const D=Math.sin(U*2.4);o.position.set(D*.13,Math.abs(Math.sin(U*4.8))*.05,0),o.rotation.set(0,0,D*.07);const V=.12+(Math.sin(U*7)*.5+.5)*.42;y(_,-2.95,V,-.15,0),y(m,-2.95,-V,-.15,0),c.g.rotation.x=Math.max(0,D)*.35,l.g.rotation.x=Math.max(0,-D)*.35}else if(e==="jumpM"){const D=Math.abs(Math.sin(U*2.5)),k=Math.pow(D,.65);o.position.set(0,k*.42,0),o.rotation.set(0,0,Math.sin(U*2.5)*.05);const V=Math.sin(U*9)*.18;y(_,-2.9+V,.3,-.2*k,0),y(m,-2.9-V,-.3,-.2*k,0),c.g.rotation.x=-.25*D,l.g.rotation.x=-.25*D,c.knee.rotation.x=-1*D,l.knee.rotation.x=-1*D}else if(e==="spinF"){o.rotation.set(0,U*3.4,.05),o.position.set(0,.02+Math.abs(Math.sin(U*6))*.03,0);const D=1.28+Math.sin(U*6)*.08;h&&h.scale.set(D,1,D);const k=Math.sin(U*4)*.12;y(_,-1.5,.75+k,-.35,0),y(m,-1.5,-.75-k,-.35,0)}else if(e==="thumkaF"){const D=Math.sin(U*2.6);o.position.set(D*.07,Math.abs(Math.sin(U*5.2))*.04,0),o.rotation.set(0,0,D*.12),h&&(h.rotation.z=-D*.16),y(m,-2.65,-.22+Math.sin(U*5)*.12,0,Math.sin(U*8)*.4),y(_,-.7,.95,-1.5,0),c.knee.rotation.x=-Math.abs(D)*.12,l.knee.rotation.x=-Math.abs(D)*.12}else{const D=Math.abs(Math.sin(U*3.2)),k=Math.sin(U*6);o.position.set(0,D*.2,0),o.rotation.set(0,0,Math.sin(U*3.2)*.05),y(_,-2.8+k*.18,.32+k*.15,0,Math.sin(U*10)*.5),y(m,-2.8-k*.18,-.32-k*.15,0,-Math.sin(U*10)*.5),c.knee.rotation.x=-D*.28,l.knee.rotation.x=-D*.28}const x=P.amount||0,w=Math.sin(P.phase||0)*.24*x;c.g.rotation.x+=w,l.g.rotation.x-=w,o.position.y+=Math.abs(Math.sin(P.phase||0))*.025*x}return C(0),{group:s,update:C,gaitScale:6,gaitOffset:t}}const re={legM:new rt(.055,.062,.5,6),shoe:new Tt(.09,.05,.17),coat:new rt(.155,.24,.62,8,1,!0),coatHem:new rt(.245,.258,.06,8,1,!0),torso:new rt(.14,.18,.4,8),skirt:new rt(.13,.5,.9,10,1,!0),skirtHem:new ei(.5,10),skirtBand:new rt(.5,.52,.07,10,1,!0),waistBand:new rt(.185,.19,.05,10,1,!0),neck:new rt(.04,.045,.08,6,1,!0),head:new Nt(.108,7,5),nose:new jt(.02,.05,4),turban:new Nt(.135,8,5,0,Math.PI*2,0,Math.PI*.62),turbanBnd:new le(.135,.032,3,8),plume:new jt(.03,.13,5),jewel:new ae(.028,0),hairCap:new Nt(.118,8,5,0,Math.PI*2,0,Math.PI*.6),sideHair:new Nt(.05,5,4),braid:new rt(.032,.016,.3,6),bindi:new ei(.012,6),earring:new ae(.018,0),necklace:new le(.07,.012,3,8),upper:new rt(.05,.044,.26,6,1,!0),fore:new rt(.044,.038,.24,6,1,!0),hand:new Nt(.048,5,4),cuff:new rt(.05,.05,.025,6,1,!0),sash:new Tt(.42,.12,.03),dupatta:new Te(.34,.62),dupTrim:new Te(.34,.04),petal:new Te(.03,.045)},Ee=(i,t=.82,e=.04,n)=>new it(Object.assign({color:i,roughness:t,metalness:e},n)),ce={skin:Ee(O.skin,.78,0),hair:Ee(1708296,.6,.05),cream:Ee(O.cream,.85,0),bronze:Ee(O.bronze,.6,.35),ivory:Ee(O.ivory,.72,.03,{side:de}),gold:Ee(O.gold,.34,.9,{emissive:O.brass,emissiveIntensity:.3}),goldB:Ee(O.goldBright,.3,.85,{emissive:O.gold,emissiveIntensity:.5}),burg:Ee(O.burgundy,.82,.04),marigold:Ee(O.marigold,.6,0,{emissive:O.marigoldDeep,emissiveIntensity:.25}),petalA:Ee(O.marigold,.55,0,{emissive:O.marigoldDeep,emissiveIntensity:.35,side:de}),petalB:Ee(O.rose,.6,0,{emissive:O.crimson,emissiveIntensity:.2,side:de})},wx=[Ee(3890139,.8,.05),Ee(627304,.8,.05),Ee(O.crimson,.8,.05),Ee(829048,.8,.05),Ee(7358696,.8,.05),Ee(O.marigoldDeep,.8,.05)],Ex=[Ee(14037868,.82,.04),Ee(627304,.82,.04),Ee(3890139,.82,.04),Ee(O.crimson,.82,.04),Ee(7358696,.82,.04),Ee(O.marigold,.82,.04)],Ch=i=>i[Math.random()*i.length|0];function Ph(i,t){const e=new yt;e.position.set(i*.15,1.3,0);const n=new K(re.upper,t);n.position.y=-.13,e.add(n);const s=new yt;s.position.y=-.26,e.add(s);const o=new K(re.fore,ce.skin);o.position.y=-.12,s.add(o);const r=new K(re.cuff,ce.gold);r.position.y=-.225,s.add(r);const a=new K(re.hand,ce.skin);return a.position.y=-.25,s.add(a),{shoulder:e,fore:s}}function Hc(i={}){const t=i.phase||0,e={clapping:1,namaste:1,cheering:1,showering:1}[i.variant]?i.variant:"clapping",n=typeof i.gender=="string"?i.gender==="female":Math.random()<.5,s=new yt,o=new yt;s.add(o);const r=(u,M,v,y,C,E)=>{const b=new K(u,M);return b.position.set(v,y,C),(E||o).add(b),b},a=Ch(n?Ex:wx),c=[];if(n){const u=r(re.skirt,a,0,.47,0);u.rotation.y=Math.PI/12;const M=r(re.skirtHem,ce.burg,0,.02,0);M.rotation.x=-Math.PI/2,r(re.skirtBand,ce.gold,0,.06,0),r(re.waistBand,ce.goldB,0,.94,0)}else{for(const u of[-.085,.085]){const M=new yt;M.position.set(u,.52,0),o.add(M),r(re.legM,ce.cream,0,-.25,0,M);const v=new yt;v.position.y=-.49,M.add(v),r(re.shoe,ce.bronze,0,0,.03,v),c.push({hip:M,foot:v})}r(re.coat,a,0,.7,0),r(re.coatHem,ce.gold,0,.42,0)}r(re.torso,a,0,1.16,0);const l=r(new le(.1,.02,3,8),ce.goldB,0,1.34,0);if(l.rotation.x=Math.PI/2,n)r(re.dupatta,ce.ivory,-.14,1.12,-.02).rotation.set(.12,.32,.14),r(re.dupTrim,ce.goldB,-.14,.83,-.02).rotation.set(.12,.32,.14),r(re.necklace,ce.gold,0,1.33,.04).rotation.x=Math.PI/2;else{const u=r(re.sash,ce.burg,0,1.12,.17);u.rotation.z=.6,r(new rt(.185,.185,.05,8,1,!0),ce.gold,0,.98,0)}r(re.neck,ce.skin,0,1.4,.004),r(re.head,ce.skin,0,1.51,.008).scale.set(.96,1.05,.98);const d=r(re.nose,ce.skin,0,1.5,.1);if(d.rotation.x=Math.PI/2,n){r(re.hairCap,ce.hair,0,1.52,-.012).scale.set(1,1.04,1.02),r(re.sideHair,ce.hair,-.082,1.47,-.02),r(re.sideHair,ce.hair,.082,1.47,-.02);const M=r(re.braid,ce.hair,0,1.3,-.1);M.rotation.x=-.15,r(re.bindi,ce.goldB,0,1.535,.098),r(re.earring,ce.goldB,-.098,1.46,.03),r(re.earring,ce.goldB,.098,1.46,.03),r(re.jewel,ce.goldB,0,1.6,.06).scale.setScalar(.6)}else{const u=r(re.turban,a,0,1.6,-.005);u.scale.y=.82;const M=r(re.turbanBnd,ce.burg,0,1.58,0);M.rotation.x=Math.PI/2+.16;const v=r(re.plume,ce.marigold,0,1.77,-.04);v.rotation.x=-.35,r(re.jewel,ce.goldB,0,1.6,.12)}const p=a,f=Ph(-1,p),g=Ph(1,p);if(o.add(f.shoulder,g.shoulder),n){const u=new K(re.cuff,ce.goldB);u.position.y=-.19,f.fore.add(u);const M=new K(re.cuff,ce.goldB);M.position.y=-.19,g.fore.add(M)}let _=null;if(e==="showering"){_=[];const u=new yt;o.add(u);for(let M=0;M<8;M++){const v=new K(re.petal,M%2?ce.petalA:ce.petalB),y=(Math.random()-.5)*.34,C=.28+Math.random()*.14,E=1.55+Math.random()*.15;v.position.set(y,E,C),u.add(v),_.push({m:v,x0:y,y0:E,z0:C,sp:.25+Math.random()*.2,ph:Math.random()})}}Lh(e,f,g,0,t);function m(u,M,v={amount:0,phase:0}){if(o.position.y=(Math.sin(u*2.2+t)*.5+.5)*.02,o.position.x=0,o.position.z=0,o.rotation.set(0,0,0),Lh(e,f,g,u,t),e==="namaste")o.rotation.x=.05+(Math.sin(u*.8+t)*.5+.5)*.06,o.rotation.y=Math.sin(u*.5+t)*.03;else if(e==="cheering")o.rotation.z=Math.sin(u*2+t)*.05,o.position.x=Math.sin(u*2+t)*.03;else if(e==="clapping")o.position.y+=(Math.sin(u*4+t)*.5+.5)*.012;else if(e==="showering"){o.rotation.y=Math.sin(u*1.2+t)*.05;for(const E of _){const b=(u*E.sp+E.ph)%1;E.m.position.set(E.x0+Math.sin(b*6+E.ph*6)*.06,E.y0-b*.75,E.z0+b*.28),E.m.rotation.set(b*7,b*5+E.ph,E.ph*3)}}const y=v.amount||0,C=Math.sin(v.phase||0)*.34*y;c.length?(c[0].hip.rotation.x=C,c[1].hip.rotation.x=-C,c[0].foot.rotation.x=-C*.78,c[1].foot.rotation.x=C*.78):o.rotation.z+=Math.sin(v.phase||0)*.028*y,o.position.y+=Math.abs(Math.sin(v.phase||0))*.022*y}return{group:s,update:m,gaitScale:6,gaitOffset:t}}function Lh(i,t,e,n,s){if(i==="namaste")t.shoulder.rotation.set(-.9,0,.52),e.shoulder.rotation.set(-.9,0,-.52),t.fore.rotation.x=-1.15,e.fore.rotation.x=-1.15;else if(i==="clapping"){const r=.36+Math.sin(n*4+s)*.13;t.shoulder.rotation.set(-1.12,0,r),e.shoulder.rotation.set(-1.12,0,-r),t.fore.rotation.x=-.72,e.fore.rotation.x=-.72}else if(i==="cheering"){const o=Math.sin(n*6+s);e.shoulder.rotation.set(-2.5+o*.14,0,-.2+o*.36),e.fore.rotation.x=-.2+o*.1,t.shoulder.rotation.set(-.12,0,.16+Math.sin(n*2+s)*.05),t.fore.rotation.x=-.45}else{const o=Math.sin(n*3+s),r=Math.sin(n*3+s+1.1);t.shoulder.rotation.set(-1.7+o*.28,0,.16),e.shoulder.rotation.set(-1.7+r*.28,0,-.16),t.fore.rotation.x=-.35-o*.18,e.fore.rotation.x=-.35-r*.18}}function Vc(){return new it({color:O.brass,metalness:.9,roughness:.35})}function bx(){return new it({color:O.gold,metalness:.85,roughness:.3})}function qu(){const i=new yt,t=[new at(0,0),new at(.06,0),new at(.078,.055),new at(.062,.058),new at(.045,.022),new at(0,.02)],e=new K(new Zs(t,12),Vc());i.add(e);const n=[new at(0,0),new at(.02,.018),new at(.033,.045),new at(.026,.08),new at(.011,.115),new at(0,.15)],s=new K(new Zs(n,8),new it({color:O.flame,emissive:O.flame,emissiveIntensity:1.3,roughness:.6,metalness:0}));return s.position.y=.03,i.add(s),i}function Tx(){const i=new yt,t=bx(),e=new K(new rt(.15,.17,.34,6,1,!0),new it({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.3,transparent:!0,opacity:.5,roughness:.5,metalness:.1,side:de}));e.position.y=.21,i.add(e);const n=new it({color:O.jasmine,emissive:O.flame,emissiveIntensity:1.1,roughness:.5,metalness:0}),s=new K(new ae(.06,0),n);s.position.y=.21,i.add(s);const o=new rt(.19,.19,.03,6),r=new K(o,t);r.position.y=.045,i.add(r);const a=new K(o,t);a.position.y=.37,i.add(a);const c=new Tt(.015,.34,.015);for(let f=0;f<6;f++){const g=f/6*Math.PI*2,_=new K(c,t);_.position.set(Math.cos(g)*.165,.21,Math.sin(g)*.165),i.add(_)}const l=new K(new jt(.2,.13,6),t);l.position.y=.44,i.add(l);const h=new K(new ae(.035,0),t);h.position.y=.52,i.add(h);const d=new K(new le(.035,.012,4,10),t);return d.position.y=.56,i.add(d),{group:i,update:f=>{n.emissiveIntensity=1.1+Math.sin(f*9)*.15+Math.sin(f*23)*.06}}}function Ax(i=3,t="mixed"){const e=new yt,n=new it({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.25,roughness:.7,metalness:0}),s=new it({color:O.marigoldDeep,roughness:.75,metalness:0}),o=new it({color:O.jasmine,emissive:O.jasmine,emissiveIntensity:.12,roughness:.75,metalness:0});let r;t==="marigold"?r=[n,s]:t==="jasmine"?r=[o,o]:r=[n,o];const a=i*.12,c=Math.min(18,Math.max(6,Math.round(i/.18))),l=new ae(.05,0);for(let h=0;h<c;h++){const d=c===1?0:h/(c-1)*2-1,p=d*(i/2),f=-a*(1-d*d),g=new K(l,r[h%r.length]);g.position.set(p,f,0);const _=.85+Math.random()*.4;g.scale.setScalar(_),g.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),e.add(g)}return e}function Rx(){const i=new yt,t=[new at(0,0),new at(.07,0),new at(.11,.1),new at(.095,.2),new at(.055,.255),new at(.085,.3),new at(.062,.305),new at(.045,.27),new at(0,.26)],e=new K(new Zs(t,12),Vc());i.add(e);const n=new it({color:O.leaf,roughness:.65,metalness:0}),s=new jt(.05,.2,4),o=6;for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=new K(s,n);h.scale.set(1,1,.35),h.position.set(Math.cos(l)*.075,.33,Math.sin(l)*.075),h.rotation.y=-l,h.rotation.z=Math.cos(l)*.5,h.rotation.x=Math.sin(l)*.5,i.add(h)}const r=new K(new Nt(.075,10,7),new it({color:O.bronze,roughness:.85,metalness:0}));r.position.y=.35,i.add(r);const a=new K(new le(.072,.008,4,12),new it({color:O.crimson,roughness:.8,metalness:0}));return a.rotation.x=Math.PI/2,a.position.y=.235,i.add(a),i}function Wc(){const i=new yt,t=new K(new rt(.2,.19,.025,12),Vc());t.position.y=.0125,i.add(t);const e=[new it({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.2,roughness:.7,metalness:0,side:de}),new it({color:O.saffron,roughness:.7,metalness:0,side:de}),new it({color:O.jasmine,roughness:.75,metalness:0,side:de})],n=new ei(.03,6),s=24;for(let o=0;o<s;o++){const r=new K(n,e[o%e.length]),a=Math.sqrt(Math.random())*.17,c=Math.random()*Math.PI*2;r.position.set(Math.cos(c)*a,.026+Math.random()*.03,Math.sin(c)*a),r.rotation.x=-Math.PI/2+(Math.random()-.5)*.8,r.rotation.z=Math.random()*Math.PI*2,r.scale.setScalar(.7+Math.random()*.6),i.add(r)}return i}function mn(i){return"#"+i.toString(16).padStart(6,"0")}function Cx(i,t,e){const n=i+t*2,s=256,o=64,r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d"),c=document.createElement("canvas");c.width=s,c.height=o;const l=c.getContext("2d"),h=t/n,d=h+e/n,p=1-d,f=1-h;l.fillStyle="#000",l.fillRect(0,0,s,o);for(let v=0;v<s;v++){const y=v/s;let C,E=null;y<h||y>f?C=mn(O.cream):y<d||y>p?(C=mn(O.gold),E=mn(O.goldBright)):C=mn(O.burgundy),a.fillStyle=C,a.fillRect(v,0,1,o),E&&(l.fillStyle=E,l.fillRect(v,0,1,o))}const g=Math.floor(s*(d+.02)),_=Math.floor(s*(p-.02));for(let v=0;v<o;v++){const y=v%6<3?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.03)";a.fillStyle=y,a.fillRect(g,v,_-g,1)}a.fillStyle=mn(O.goldBright);const m=s*.5;for(let v=4;v<o;v+=16)a.beginPath(),a.moveTo(m,v),a.lineTo(m+5,v+5),a.lineTo(m,v+10),a.lineTo(m-5,v+5),a.closePath(),a.fill();const u=new Ui(r);u.wrapS=qn,u.wrapT=Ii,u.anisotropy=4;const M=new Ui(c);return M.wrapS=qn,M.wrapT=Ii,{map:u,emap:M}}function Px(i,t){const e=[];if(!i||i.length<2)return e;e.push({x:i[0][0],z:i[0][1]});let n=0;for(let o=0;o<i.length-1;o++){const r=i[o][0],a=i[o][1],c=i[o+1][0],l=i[o+1][1],h=c-r,d=l-a,p=Math.hypot(h,d);if(p<1e-5)continue;const f=h/p,g=d/p;let _=t-n;for(;_<p;)e.push({x:r+f*_,z:a+g*_}),_+=t;n=p-(_-t)}const s=i[i.length-1];return e.push({x:s[0],z:s[1]}),e}function Lx(i){const t=new yt,e=i.points||[],n=i.width,s=i.getHeight||(()=>0),o=n*.16,r=n*.05,a=n*.5+o,c=Px(e,1.5);if(c.length<2)return t;const l=c.length,h=9,d=i.lift,p=new Float32Array(l*h*3),f=new Float32Array(l*h*2),g=[],_=3;let m=0;for(let E=0;E<l;E++){const b=c[E],P=c[Math.max(0,E-1)],U=c[Math.min(l-1,E+1)];let x=U.x-P.x,w=U.z-P.z;const D=Math.hypot(x,w)||1;x/=D,w/=D;const k=-w,V=x;E>0&&(m+=Math.hypot(b.x-c[E-1].x,b.z-c[E-1].z));for(let et=0;et<h;et++){const W=et/(h-1),lt=(W-.5)*2*a,F=b.x+k*lt,dt=b.z+V*lt,st=s(F,dt)+d,gt=(E*h+et)*3;p[gt]=F,p[gt+1]=st,p[gt+2]=dt;const Dt=(E*h+et)*2;f[Dt]=W,f[Dt+1]=m/_}if(E<l-1)for(let et=0;et<h-1;et++){const W=E*h+et,lt=W+1,F=(E+1)*h+et,dt=F+1;g.push(W,F,lt,lt,F,dt)}}const u=new Be;u.setAttribute("position",new en(p,3)),u.setAttribute("uv",new en(f,2)),u.setIndex(g),u.computeVertexNormals();const{map:M,emap:v}=Cx(n,o,r),y=new it({map:M,emissiveMap:v,emissive:O.goldBright,emissiveIntensity:.45,roughness:.82,metalness:0,side:de,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),C=new K(u,y);return C.receiveShadow=!0,t.add(C),t}function Ix(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=512/2,s=mn(O.burgundy),o=mn(O.gold),r=mn(O.goldBright),a=mn(O.jasmine),c=mn(O.marigold),l=mn(O.saffron);e.fillStyle=mn(O.cream),e.beginPath(),e.arc(n,n,512*.5,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.48,0,Math.PI*2),e.fill();const h=(m,u,M)=>{e.strokeStyle=M,e.lineWidth=u,e.beginPath(),e.arc(n,n,m,0,Math.PI*2),e.stroke()};h(512*.46,6,r),h(512*.44,3,a),h(512*.3,5,o),h(512*.2,3,a);const d=(m,u,M,v,y,C)=>{for(let E=0;E<m;E++){const b=E/m*Math.PI*2,P=n+Math.cos(b)*(u+M)*.5,U=n+Math.sin(b)*(u+M)*.5;e.save(),e.translate(P,U),e.rotate(b+Math.PI/2),e.fillStyle=y,e.strokeStyle=C,e.lineWidth=2,e.beginPath(),e.ellipse(0,0,v,(M-u)*.5,0,0,Math.PI*2),e.fill(),e.stroke(),e.restore()}};d(24,512*.3,512*.44,512*.028,c,r),d(16,512*.2,512*.3,512*.03,a,o),d(12,512*.08,512*.2,512*.034,l,r),e.fillStyle=o,e.beginPath(),e.arc(n,n,512*.08,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.05,0,Math.PI*2),e.fill(),e.fillStyle=r,e.beginPath(),e.arc(n,n,512*.02,0,Math.PI*2),e.fill(),e.strokeStyle=r,e.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;e.beginPath(),e.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),e.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),e.stroke()}const p=document.createElement("canvas");p.width=512,p.height=512;const f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512),f.strokeStyle=r,f.fillStyle=r,f.lineWidth=6,f.beginPath(),f.arc(n,n,512*.46,0,Math.PI*2),f.stroke(),f.lineWidth=5,f.beginPath(),f.arc(n,n,512*.3,0,Math.PI*2),f.stroke(),f.beginPath(),f.arc(n,n,512*.02,0,Math.PI*2),f.fill(),f.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;f.beginPath(),f.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),f.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),f.stroke()}const g=new Ui(t),_=new Ui(p);return{map:g,emap:_}}function Ku(i){const t=new yt,e=i||3,n=new ei(e,48),{map:s,emap:o}=Ix(),r=new it({map:s,emissiveMap:o,emissive:O.goldBright,emissiveIntensity:.6,roughness:.7,metalness:.15,side:de,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),a=new K(n,r);return a.rotation.x=-Math.PI/2,a.position.y=.05,a.receiveShadow=!0,t.add(a),t}const pa=new Xt;function Dx(i){let t=0;for(let n=0;n<i.length;n++)t+=i[n][1];let e=Math.random()*t;for(let n=0;n<i.length;n++)if(e-=i[n][1],e<=0)return i[n][0];return i[i.length-1][0]}function Ux(i={}){const t=i.area||{cx:0,cz:0,radius:24},e=t.cx||0,n=t.cz||0,s=t.radius||24,o=i.top!=null?i.top:14,r=typeof i.getHeight=="function"?i.getHeight:()=>0,a=70,c=new Te(.16,.24,2,1);{const F=c.attributes.position,dt=.08;for(let st=0;st<F.count;st++){const gt=F.getX(st),Dt=F.getY(st),Gt=gt/dt,z=.05*(1-Gt*Gt),q=1-.35*Math.max(0,Dt/.12);F.setX(st,gt*q),F.setZ(st,z)}F.needsUpdate=!0,c.computeVertexNormals()}const l=new it({color:16777215,roughness:.62,metalness:0,side:de,emissive:new Xt(O.marigold),emissiveIntensity:.18}),h=new ro(c,l,a);h.instanceMatrix.setUsage(Cc),h.frustumCulled=!1;const d=[[O.marigold,4],[O.marigoldDeep,2.5],[O.saffron,2],[O.rose,2.5],[O.jasmine,2],[O.goldBright,1.5],[O.gold,1]],p=new Float32Array(a),f=new Float32Array(a),g=new Float32Array(a),_=new Float32Array(a),m=new Float32Array(a),u=new Float32Array(a),M=new Float32Array(a),v=new Float32Array(a),y=new Float32Array(a),C=new Float32Array(a),E=new Float32Array(a),b=new Float32Array(a),P=new Float32Array(a),U=new Float32Array(a),x=new Float32Array(a),w=new Float32Array(a),D=new Float32Array(a);function k(F){const dt=Math.random()*Math.PI*2,st=Math.sqrt(Math.random())*s;p[F]=e+Math.cos(dt)*st,f[F]=n+Math.sin(dt)*st}const V=new Re;for(let F=0;F<a;F++){k(F);const dt=r(p[F],f[F]);g[F]=dt+Math.random()*(o-dt+2),_[F]=.24+Math.random()*.4,m[F]=.5+Math.random()*.9,u[F]=Math.random()*Math.PI*2,M[F]=.25+Math.random()*.5,v[F]=.4+Math.random()*.8,y[F]=Math.random()*Math.PI*2,C[F]=.2+Math.random()*.45,E[F]=Math.random()*Math.PI*2,b[F]=Math.random()*Math.PI*2,P[F]=Math.random()*Math.PI*2,U[F]=(Math.random()-.5)*1.6,x[F]=(Math.random()-.5)*2.2,w[F]=(Math.random()-.5)*1.6,D[F]=.75+Math.random()*.8,pa.setHex(Dx(d));const st=.85+Math.random()*.3;pa.multiplyScalar(st),h.setColorAt(F,pa)}h.instanceColor&&(h.instanceColor.needsUpdate=!0);const et=new yt;et.add(h);function W(F,dt){dt==null&&(dt=.016),dt>.1&&(dt=.1);for(let st=0;st<a;st++){g[st]-=_[st]*dt;const gt=p[st]+Math.sin(F*m[st]+u[st])*M[st],Dt=f[st]+Math.cos(F*v[st]+y[st])*C[st],Gt=r(gt,Dt);if(g[st]<=Gt+.05){k(st),g[st]=o+Math.random()*3,_[st]=.24+Math.random()*.4;continue}E[st]+=U[st]*dt,b[st]+=x[st]*dt,P[st]+=w[st]*dt,V.position.set(gt,g[st],Dt),V.rotation.set(E[st],b[st],P[st]),V.scale.setScalar(D[st]),V.updateMatrix(),h.setMatrixAt(st,V.matrix)}h.instanceMatrix.needsUpdate=!0}W(0,0);function lt(F,dt,st=7){for(let gt=0;gt<a;gt++){const Dt=Math.random()*Math.PI*2,Gt=Math.sqrt(Math.random())*st;p[gt]=F+Math.cos(Dt)*Gt,f[gt]=dt+Math.sin(Dt)*Gt;const z=r(p[gt],f[gt]);g[gt]=z+5+Math.random()*7,_[gt]=.5+Math.random()*.65}}return{group:et,update:W,burst:lt}}function Nx(i={}){const t=i.origin||[-60,90,-40],e=i.color!=null?i.color:O.flame,n=Math.max(4,Math.min(10,i.count||8)),s=new yt;s.position.set(t[0],t[1],t[2]);const o=new L(-t[0],-t[1],-t[2]).normalize(),r=64,a=document.createElement("canvas");a.width=r,a.height=r;const c=a.getContext("2d"),l=c.createImageData(r,r);for(let C=0;C<r;C++){const E=C/(r-1),b=Math.pow(1-E,1.3);for(let P=0;P<r;P++){const U=P/(r-1),x=Math.sin(U*Math.PI),w=b*Math.pow(x,1.4),D=(C*r+P)*4;l.data[D]=255,l.data[D+1]=255,l.data[D+2]=255,l.data[D+3]=Math.max(0,Math.min(255,w*255))}}c.putImageData(l,0,0);const h=new Ui(a);h.colorSpace=En,h.minFilter=hn,h.magFilter=hn;const d=120,p=10,f=new Te(p,d,1,1);f.translate(0,-d*.5,0);const g=new L(0,-1,0),_=new Un().setFromUnitVectors(g,o),m=Math.abs(o.y)>.9?new L(1,0,0):new L(0,1,0),u=new L().crossVectors(o,m).normalize(),M=[];for(let C=0;C<n;C++){const E=(C/(n-1)-.5)*.5,b=new Un().setFromAxisAngle(u,E),P=new si({color:new Xt(e),map:h,transparent:!0,opacity:.05+Math.random()*.04,blending:Xs,depthWrite:!1,side:de,toneMapped:!1}),U=new yt;U.quaternion.copy(b).multiply(_);const x=new K(f,P),w=new K(f,P);w.rotation.y=Math.PI*.5,U.add(x,w);const D=.7+Math.random()*.7;U.scale.set(D,1,1),s.add(U),M.push({pivot:U,mat:P,baseOpacity:P.opacity,shimmerSpeed:.3+Math.random()*.7,shimmerPhase:Math.random()*Math.PI*2,swayAxis:u.clone(),swayAmp:.02+Math.random()*.04,swaySpeed:.15+Math.random()*.25,swayPhase:Math.random()*Math.PI*2,baseQuat:U.quaternion.clone()})}const v=new Un;function y(C){for(let E=0;E<M.length;E++){const b=M[E];b.mat.opacity=b.baseOpacity*(.65+.35*Math.sin(C*b.shimmerSpeed+b.shimmerPhase));const P=Math.sin(C*b.swaySpeed+b.swayPhase)*b.swayAmp;v.setFromAxisAngle(b.swayAxis,P),b.pivot.quaternion.copy(v).multiply(b.baseQuat)}}return{group:s,update:y}}const vi={fogColor:16756838,ambient:{color:16767392,intensity:.42},keyLight:{color:16757596,intensity:2.6},hemi:{sky:16766362,ground:6175262,intensity:.55}};function Zu(i,t={}){const e=t.w||1024,n=t.h||256,s=document.createElement("canvas");s.width=e,s.height=n;const o=s.getContext("2d");o.fillStyle=t.bg||"#5e1220",o.fillRect(0,0,e,n),o.strokeStyle=t.border||"#e9c46a",o.lineWidth=20,o.strokeRect(12,12,e-24,n-24),o.fillStyle=t.border||"#e9c46a",[[30,30],[e-30,30],[30,n-30],[e-30,n-30]].forEach(([h,d])=>{o.beginPath(),o.arc(h,d,10,0,Math.PI*2),o.fill()}),o.fillStyle=t.fg||"#ffd97a";let r=t.size||128;o.font="bold "+r+'px Georgia, "Times New Roman", serif';const a=e-96,c=o.measureText(i).width;c>a&&(r*=a/c,o.font="bold "+r+'px Georgia, "Times New Roman", serif'),o.textAlign="center",o.textBaseline="middle",o.fillText(i,e/2,n/2+6);const l=new Ui(s);return l.anisotropy=4,l}function Fx(i,t={}){const e=new yt,n=new yt;e.add(n);const s=new it({color:O.cream,roughness:.6,metalness:.2}),o=new it({color:O.crimson,roughness:.5,metalness:.1}),r=new it({color:O.gold,roughness:.3,metalness:.85,emissive:O.brass,emissiveIntensity:.25}),a=new yt;a.scale.setScalar(1.9),n.add(a);const c=new K(new rt(.45,.34,4,8),s);c.rotation.x=Math.PI/2,a.add(c);const l=new K(new jt(.34,.8,8),r);l.rotation.x=Math.PI/2,l.position.z=2.4,a.add(l);const h=new K(new Tt(4.6,.1,.8),o);h.position.z=.2,a.add(h);const d=new K(new Tt(1.7,.08,.5),o);d.position.z=-1.9,a.add(d);const p=new K(new Tt(.08,.7,.6),o);p.position.set(0,.36,-1.9),a.add(p);const f=40,g=7,_=new Te(f,g,48,1),m=Zu(i,{size:132,w:1536}),u=m.clone();u.wrapS=Ii,u.repeat.x=-1,u.offset.x=1,u.needsUpdate=!0;const M=new it({map:m,side:Cn,roughness:.85,metalness:0}),v=new it({map:u,side:Ge,roughness:.85,metalness:0}),y=new K(_,M),C=new K(_,v);y.rotation.y=C.rotation.y=Math.PI/2,y.position.z=C.position.z=-6-f/2,n.add(y,C);const E=_.attributes.position.array.slice(),b=t.radius||55,P=t.height||30,U=t.speed||.085;return{group:e,update:x=>{const w=x*U;e.position.set(Math.cos(w)*b,P+Math.sin(x*.25)*2.5,Math.sin(w)*b);const D=-Math.sin(w),k=Math.cos(w);e.rotation.y=Math.atan2(D,k),n.rotation.z=-.32+Math.sin(x*.8)*.05;const V=_.attributes.position;for(let et=0;et<V.count;et++){const W=E[et*3];V.setZ(et,Math.sin(W*.28+x*3.6)*.45)}V.needsUpdate=!0}}}function Ox(i=0){const t=new yt,e=new it({color:16579830,roughness:.6,metalness:0}),n=new it({color:O.saffron,roughness:.5}),s=new K(new Nt(.55,10,8),e);s.scale.set(1,.72,1.55),s.position.y=.28,t.add(s);const o=new K(new jt(.22,.55,6),e);o.position.set(0,.42,-.62),o.rotation.x=-1,t.add(o);const r=new K(new rt(.09,.12,.45,6),e);r.position.set(0,.55,.55),r.rotation.x=.35,t.add(r);const a=new K(new rt(.075,.09,.4,6),e);a.position.set(0,.88,.68),a.rotation.x=-.25,t.add(a);const c=new K(new Nt(.14,8,6),e);c.position.set(0,1.05,.78),t.add(c);const l=new K(new jt(.055,.2,5),n);l.rotation.x=Math.PI/2,l.position.set(0,1.02,.95),t.add(l);const h=2+i%1*1.2;return{group:t,update:d=>{const p=d*.14+i;t.position.set(Math.cos(p)*h,Math.sin(d*.8+i)*.05,Math.sin(p)*h),t.rotation.y=-p+Math.PI/2}}}function Bx(i={}){const t=i.count||36,e=i.origin||[0,2.2,0],n=i.ground!==void 0?i.ground:e[1]-2,s=new Te(.17,.09),o=new it({color:9359770,side:de,roughness:.7,metalness:0,emissive:3107370,emissiveIntensity:.12}),r=new ro(s,o,t);r.instanceMatrix.setUsage(Cc);const a=new Re,c=[],l=()=>({x:e[0],y:e[1],z:e[2],vx:(Math.random()-.5)*1.6,vy:2.4+Math.random()*2.4,vz:(Math.random()-.5)*1.6,rot:Math.random()*6.28,vr:(Math.random()-.5)*9,delay:Math.random()*1.5});for(let h=0;h<t;h++)c.push(l());return{group:r,update:(h,d)=>{d=Math.min(d||.016,.05);for(let p=0;p<t;p++){const f=c[p];if(f.delay>0){f.delay-=d,a.position.set(0,-999,0),a.updateMatrix(),r.setMatrixAt(p,a.matrix);continue}f.vy-=6.2*d,f.x+=f.vx*d,f.y+=f.vy*d,f.z+=f.vz*d,f.rot+=f.vr*d,f.y<n&&Object.assign(f,l()),a.position.set(f.x,f.y,f.z),a.rotation.set(f.rot*.5,f.rot,f.rot*.3),a.updateMatrix(),r.setMatrixAt(p,a.matrix)}r.instanceMatrix.needsUpdate=!0}}}function zx(i={}){const t=i.origin||[0,1.2,0],e=i.rise||11,n=i.cycle||4.2,s=26,o=new yt,r=new K(new rt(.05,.09,.45,6),new it({color:O.crimson,emissive:O.marigold,emissiveIntensity:.8}));o.add(r);const a=new si({color:O.goldBright,transparent:!0,opacity:1}),c=new ro(new Nt(.07,5,4),a,s);c.instanceMatrix.setUsage(Cc),o.add(c);const l=new Re,h=[];for(let p=0;p<s;p++){const f=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1),_=3+Math.random()*3.2;h.push({vx:Math.sin(g)*Math.cos(f)*_,vy:Math.cos(g)*_,vz:Math.sin(g)*Math.sin(f)*_})}const d=new Xt;return{group:o,update:p=>{const f=p%n,g=t[1]+e;if(f<1.2)r.visible=!0,c.visible=!1,r.position.set(t[0],t[1]+f/1.2*e,t[2]);else{r.visible=!1,c.visible=!0;const _=f-1.2,m=Math.max(0,1-_/1.7);a.opacity=m,d.setHSL(Math.floor(p/n)*.27%1,.9,.62),a.color.copy(d);for(let u=0;u<s;u++){const M=h[u];l.position.set(t[0]+M.vx*_,g+M.vy*_-3.1*_*_,t[2]+M.vz*_),l.scale.setScalar(.5+m*.7),l.updateMatrix(),c.setMatrixAt(u,l.matrix)}c.instanceMatrix.needsUpdate=!0}}}}function kx(i="TEAM GROOM",t={}){const e=new yt,n=t.width||3.15,s=t.height||.84,o=t.poleHeight||1.4,r=new Te(n,s,14,1),a=Zu(i,{size:126,w:768,h:224}),c=a.clone();c.wrapS=Ii,c.repeat.x=-1,c.offset.x=1,c.needsUpdate=!0;const l=new it({map:a,side:Cn,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),h=new it({map:c,side:Ge,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),d=new K(r,l);d.position.y=s/2;const p=new K(r,h);p.position.y=s/2,e.add(d,p);const f=new it({color:O.brass,metalness:.9,roughness:.3}),g=new rt(.04,.04,o,6),_=s/2-.1,m=_+o/2;[-1,1].forEach(M=>{const v=new K(g,f);v.position.set(M*n/2,_,0),e.add(v);const y=new K(new Nt(.09,6,5),f);y.position.set(M*n/2,Math.max(s+.08,m+.02),0),e.add(y)});const u=r.attributes.position.array.slice();return{group:e,update:M=>{const v=r.attributes.position;for(let y=0;y<v.count;y++){const C=u[y*3];v.setZ(y,Math.sin(C*1.5+M*3.2)*.14)}v.needsUpdate=!0}}}const Gx=""+new URL("ishq-sufiyana-piano-CHjIQRfE.mp3",import.meta.url).href,Ih=.48,Hx=96,ma=60/Hx/4,Vx=.26,ga={opening:{track:.8,drone:.52,air:.1,melody:.38,rhythm:.14},procession:{track:.7,drone:.44,air:.11,melody:.5,rhythm:.52},arrival:{track:.57,drone:.42,air:.12,melody:.52,rhythm:.58},celebration:{track:.76,drone:.46,air:.1,melody:.48,rhythm:.44}},Dh=[.13,0,0,.045,.095,0,.06,0,.13,0,0,.045,.095,0,.075,.052],Uh=[0,0,.055,0,0,.042,0,.052,0,0,.055,0,0,.042,.06,0],Nh=[.021,0,0,0,.018,0,0,0,.021,0,0,0,.018,0,0,0],_a=[261.63,293.66,329.63,349.23,392,440,493.88,523.25],ns=[0,2,1,0,2,3,4,3,2,1,0,1,2,4,3,2];function Wx({button:i=null}={}){let t=null,e=null,n=null,s=null,o=null,r=!1,a=!1,c=!1,l=0,h=!1,d="opening",p="",f=0,g=0,_=null,m=null,u=null,M=null,v=null,y=!1,C=!1,E=0;const b={drone:null,air:null,melody:null,rhythm:null};function P(I,Z){if(I)try{if(typeof I.cancelAndHoldAtTime=="function")I.cancelAndHoldAtTime(Z);else{const j=I.value;I.cancelScheduledValues(Z),I.setValueAtTime(j,Z)}}catch{I.cancelScheduledValues(Z),I.setValueAtTime(I.value,Z)}}function U(I,Z,j=.4,ht=null){if(!t||!I)return;const ot=Math.max(t.currentTime,ht??t.currentTime);P(I,ot),I.linearRampToValueAtTime(Z,ot+j)}function x(I,Z,j,ht,ot){I.cancelScheduledValues(Z),I.setValueAtTime(1e-4,Z),I.exponentialRampToValueAtTime(Math.max(2e-4,j),Z+ht),I.exponentialRampToValueAtTime(1e-4,Z+ht+ot)}function w(I,Z,j=0){if(typeof t.createStereoPanner=="function"){const ht=t.createStereoPanner();ht.pan.value=Math.max(-1,Math.min(1,j)),I.connect(ht),ht.connect(Z)}else I.connect(Z)}function D(I,Z=.55,j=null){if(!t||!r)return;p=ga[I]?I:"opening";const ht=ga[p],ot=y,A=ot?p==="arrival"?.78:p==="procession"?.7:p==="celebration"?.58:.34:1;U(v==null?void 0:v.gain,ht.track,Z,j),U(b.drone.gain,ht.drone*(ot?.11:1),Z,j),U(b.air.gain,ht.air*(ot?.82:1),Z,j),U(b.melody.gain,ht.melody*(ot?.07:1),Z,j),U(b.rhythm.gain,ht.rhythm*A,Z,j)}function k(I){const Z=!!I;y!==Z&&(y=Z,r&&D(d,Z?.7:.28))}function V(){if(!(!u||C||a||document.hidden||!u.paused))try{const I=u.play();I!=null&&I.then?I.then(()=>k(!0)).catch(()=>k(!1)):k(!0)}catch{k(!1)}}function et(){if(!(!u||u.paused)){try{u.pause()}catch{}k(!1)}}function W(I,Z=!1){d=ga[I]?I:"opening",d!=="arrival"&&(c=!1,l=0),r&&(Z||!p)&&D(d,Z?.08:.55)}function lt(I,Z,j,ht=.05,ot=null){if(!t)return;const A=t.createOscillator(),S=t.createOscillator();if(A.type="sawtooth",S.type="triangle",A.frequency.setValueAtTime(Z,I),S.frequency.setValueAtTime(Z,I),S.detune.value=5,ot){const wt=I+j*.62;A.frequency.setValueAtTime(Z,wt),S.frequency.setValueAtTime(Z,wt),A.frequency.exponentialRampToValueAtTime(ot,I+j*.94),S.frequency.exponentialRampToValueAtTime(ot,I+j*.94)}const B=t.createGain();B.gain.value=.62;const Y=t.createGain();Y.gain.value=.34;const nt=t.createBiquadFilter();nt.type="lowpass",nt.frequency.value=1650,nt.Q.value=.75;const Q=t.createGain();Q.gain.setValueAtTime(1e-4,I),Q.gain.exponentialRampToValueAtTime(ht,I+.035),Q.gain.setValueAtTime(ht*.9,I+Math.max(.05,j-.055)),Q.gain.exponentialRampToValueAtTime(1e-4,I+j);const At=t.createOscillator();At.frequency.value=5.1;const _t=t.createGain();_t.gain.value=10,At.connect(_t),_t.connect(A.detune),_t.connect(S.detune),A.connect(B),S.connect(Y),B.connect(nt),Y.connect(nt),nt.connect(Q),Q.connect(b.melody),A.start(I),S.start(I),At.start(I),A.stop(I+j+.04),S.stop(I+j+.04),At.stop(I+j+.04)}function F(I,Z,j,ht=!1,ot=null){if(!t||j<=0)return;const A=ot||b.rhythm,S=t.createOscillator();S.type="triangle",S.frequency.setValueAtTime(Z*1.75,I),S.frequency.exponentialRampToValueAtTime(Z,I+.055);const B=t.createGain();if(x(B.gain,I,j,.003,ht?.27:.15),S.connect(B),B.connect(A),S.start(I),S.stop(I+(ht?.3:.18)),ht&&o){const Y=t.createBufferSource();Y.buffer=o;const nt=t.createBiquadFilter();nt.type="bandpass",nt.frequency.value=1250,nt.Q.value=.85;const Q=t.createGain();x(Q.gain,I,j*.2,.002,.07),Y.connect(nt),nt.connect(Q),Q.connect(A),Y.start(I,0,.085),Y.stop(I+.09)}}function dt(I,Z=.035,j=!1){if(!t)return;const ht=t.createOscillator();ht.type="triangle",ht.frequency.setValueAtTime(j?205:178,I),ht.frequency.exponentialRampToValueAtTime(j?88:74,I+.08);const ot=t.createGain();x(ot.gain,I,Z,.002,.1),ht.connect(ot),ot.connect(b.rhythm),ht.start(I),ht.stop(I+.115)}function st(I,Z=.02){if(!t||!o)return;const j=t.createBufferSource();j.buffer=o;const ht=t.createBiquadFilter();ht.type="highpass",ht.frequency.value=5200;const ot=t.createGain();x(ot.gain,I,Z,.002,.17),j.connect(ht),ht.connect(ot),ot.connect(b.rhythm),j.start(I,.18,.19),j.stop(I+.2)}function gt(I,Z,j=.017){t&&[1,2.01].forEach((ht,ot)=>{const A=t.createOscillator();A.type=ot?"sine":"triangle",A.frequency.value=Z*ht;const S=t.createGain();x(S.gain,I,j/(ot+1),.003,.42+ot*.12),A.connect(S),S.connect(b.melody),A.start(I),A.stop(I+.58)})}function Dt(I,Z=622.25,j=.028,ht=null){if(!t)return;const ot=ht||b.melody;[1,2.01,2.72].forEach((A,S)=>{const B=t.createOscillator();B.type="sine",B.frequency.value=Z*A;const Y=t.createGain();x(Y.gain,I,j/Math.pow(S+1,1.25),.006,1.45+S*.28),B.connect(Y),Y.connect(ot),B.start(I),B.stop(I+2.35)})}function Gt(I,Z=2.25,j=.055){if(!t||!s)return;const ht=t.createOscillator();ht.type="triangle";const ot=t.createOscillator();ot.type="sine",ht.frequency.setValueAtTime(146.83,I),ot.frequency.setValueAtTime(293.66,I),ht.frequency.exponentialRampToValueAtTime(155.56,I+Z*.72),ot.frequency.exponentialRampToValueAtTime(311.13,I+Z*.72);const A=t.createGain();A.gain.value=.76;const S=t.createGain();S.gain.value=.28;const B=t.createBiquadFilter();B.type="bandpass",B.frequency.value=480,B.Q.value=.75;const Y=t.createGain();Y.gain.setValueAtTime(1e-4,I),Y.gain.exponentialRampToValueAtTime(j,I+.08),Y.gain.setValueAtTime(j*.92,I+Z*.68),Y.gain.exponentialRampToValueAtTime(1e-4,I+Z);const nt=t.createOscillator();nt.frequency.value=4.6;const Q=t.createGain();Q.gain.value=5,nt.connect(Q),Q.connect(ht.detune),Q.connect(ot.detune),ht.connect(A),ot.connect(S),A.connect(B),S.connect(B),B.connect(Y),Y.connect(s),ht.start(I),ot.start(I),nt.start(I),ht.stop(I+Z+.05),ot.stop(I+Z+.05),nt.stop(I+Z+.05)}function z(I,Z=.045,j=0){if(!t||!o||!s)return;const ht=t.createBufferSource();ht.buffer=o;const ot=t.createBiquadFilter();ot.type="bandpass",ot.frequency.value=1700+Math.random()*1200,ot.Q.value=.55;const A=t.createGain();x(A.gain,I,Z,.0015,.12),ht.connect(ot),ot.connect(A),w(A,s,j);const S=Math.max(0,o.duration-.16);ht.start(I,Math.random()*S,.15),ht.stop(I+.155);const B=t.createOscillator();B.type="sine",B.frequency.setValueAtTime(125,I),B.frequency.exponentialRampToValueAtTime(48,I+.15);const Y=t.createGain();x(Y.gain,I,Z*.24,.003,.18),B.connect(Y),w(Y,s,j),B.start(I),B.stop(I+.2)}function q(I,Z){const j=Z%16,ht=Math.floor(Z/16);j===0&&p!==d&&D(d,.42,I);const ot=p||d,A=ot==="opening",S=ot==="procession"||ot==="arrival",B=ot==="arrival"?1.06:ot==="celebration"?.82:1;if(y){A?j===0&&ht>0&&ht%4===0&&Dt(I,587.33,.018):((j===0||j===8&&ot!=="celebration")&&F(I,132,(ot==="arrival"?.09:.065)*B,!0),(j===4||j===12)&&st(I,ot==="arrival"?.018:.013),S&&(j===5||j===13)&&dt(I,ot==="arrival"?.034:.026,j===13),j===0&&ht>0&&ht%6===0&&Dt(I,659.25,.016));return}A?(j===0||j===8)&&F(I,132,.047,!0):(Dh[j]&&F(I,132,Dh[j]*B,!0),Uh[j]&&F(I,225,Uh[j]*B,!1),Nh[j]&&st(I,Nh[j]*(ot==="arrival"?1.08:1)),S&&(j===5||j===13)&&dt(I,ot==="arrival"?.04:.033,j===13));const Y=A?4:2;if(Z%Y===0){const nt=Math.floor(Z/Y)%ns.length,Q=ns[nt],At=ns[(nt+1)%ns.length],_t=ma*Y-.035,wt=nt%8===7?_a[At]:null;lt(I,_a[Q],_t,A?.041:.052,wt)}if(!A&&(j===3||j===11)&&ht%2===0){const nt=ns[(Math.floor(Z/2)+2)%ns.length];gt(I,_a[nt]*2,ot==="arrival"?.019:.015)}j===0&&ht>0&&ht%(A?2:4)===0&&Dt(I,A?587.33:659.25,A?.025:.021)}function mt(){if(!t||t.state!=="running"||a)return;const I=t.currentTime;f<I-ma&&(f=I+.055);let Z=0;for(;f<I+Vx&&Z++<8;)q(f,g),f+=ma,g++}function X(I,Z=2.75){n&&(P(n.gain,I),n.gain.linearRampToValueAtTime(.29,I+.07),n.gain.setValueAtTime(.29,I+Z-.38),n.gain.linearRampToValueAtTime(1,I+Z))}function pt(){if(!t||!r||t.state!=="running"||a){c=d==="arrival",l=c?performance.now():0;return}if(d!=="arrival"){c=!1,l=0;return}c=!1,l=0,h=!0;const I=t.currentTime+.065;X(I,3.15),Gt(I,2.45,.072),[0,.22,.44,.68].forEach((Z,j)=>F(I+Z,j%2?215:132,.13+j*.007,!0,s)),Dt(I+.82,523.25,.052,s),Dt(I+1.02,659.25,.038,s),z(I+1.2,.082,-.55),z(I+1.38,.068,.5),z(I+1.63,.076,-.12)}function ut(){if(!i)return;const I=r&&!a&&(t==null?void 0:t.state)==="running";i.textContent=I?"🔊":"🔇",i.setAttribute("aria-pressed",String(I));const Z=I?"Mute wedding music":"Play wedding music";i.setAttribute("aria-label",Z),i.title=Z}function St(){var Z;return t?m||(m=(t.state==="running"?Promise.resolve():Promise.resolve((Z=t.resume)==null?void 0:Z.call(t))).then(()=>{if(r=(t==null?void 0:t.state)==="running",!r)return;D(d,.1),f<t.currentTime+.025&&(f=t.currentTime+.07),U(e==null?void 0:e.gain,a?1e-4:Ih,.5),R.forEach(ht=>window.removeEventListener(ht,Ot));const j=l>0&&performance.now()-l<1400;c&&d==="arrival"&&j?pt():(c=!1,l=0,!h&&d==="opening"&&(h=!0,Dt(t.currentTime+.1,587.33,.026,s)))}).catch(()=>{r=!1}).finally(()=>{m=null,ut()}),m):Promise.resolve()}function Ht(){if(t){St(),V();return}try{const I=window.AudioContext||window.webkitAudioContext;if(!I)return;try{t=new I({latencyHint:"balanced"})}catch{t=new I}const Z=t.createDynamicsCompressor();Z.threshold.value=-15,Z.knee.value=14,Z.ratio.value=6,Z.attack.value=.008,Z.release.value=.24,e=t.createGain(),e.gain.value=1e-4,n=t.createGain(),n.gain.value=1,s=t.createGain(),s.gain.value=.92,n.connect(e),s.connect(e),e.connect(Z),Z.connect(t.destination);for(const Y of Object.keys(b))b[Y]=t.createGain(),b[Y].gain.value=.001,b[Y].connect(n);u=new Audio,u.src=Gx,u.preload="metadata",u.loop=!0,u.playsInline=!0,u.setAttribute("playsinline",""),M=t.createMediaElementSource(u),v=t.createGain(),v.gain.value=1e-4,M.connect(v),v.connect(n),u.addEventListener("playing",()=>k(!0)),u.addEventListener("pause",()=>k(!1)),u.addEventListener("error",()=>{C=!0,k(!1)}),[130.81,196,261.63].forEach((Y,nt)=>{const Q=t.createOscillator();Q.type=nt===0?"sine":"triangle",Q.frequency.value=Y;const At=t.createGain();At.gain.value=[.14,.075,.045][nt];const _t=t.createBiquadFilter();_t.type="lowpass",_t.frequency.value=700;const wt=t.createOscillator();wt.frequency.value=.075+nt*.028;const te=t.createGain();te.gain.value=2.2,wt.connect(te),te.connect(Q.detune),Q.connect(At),At.connect(_t),_t.connect(b.drone),Q.start(),wt.start()});const j=t.sampleRate;o=t.createBuffer(1,j,t.sampleRate);const ht=o.getChannelData(0);for(let Y=0;Y<j;Y++)ht[Y]=(Math.random()*2-1)*.45;const ot=Math.min(256,Math.floor(j/4));for(let Y=0;Y<ot;Y++){const nt=(Y+1)/ot,Q=j-ot+Y;ht[Q]=ht[Q]*(1-nt)+ht[Y]*nt}const A=t.createBufferSource();A.buffer=o,A.loop=!0;const S=t.createBiquadFilter();S.type="bandpass",S.frequency.value=1100,S.Q.value=.55;const B=t.createGain();B.gain.value=.022,A.connect(S),S.connect(B),B.connect(b.air),A.start(),f=t.currentTime+.075,_=window.setInterval(mt,75),St(),V()}catch{r=!1,t=null,e=null,_&&window.clearInterval(_),_=null,ut()}}function It(){a=!a;const I=++E;a?window.setTimeout(()=>{a&&I===E&&et()},320):(St(),V()),U(e==null?void 0:e.gain,a?1e-4:Ih,.28),ut()}const R=window.PointerEvent?["pointerdown","keydown"]:["touchstart","keydown"];function Ot(I){I.target instanceof Element&&I.target.closest("#soundBtn")||(Ht(),ut())}return R.forEach(I=>window.addEventListener(I,Ot,{passive:!0})),i==null||i.addEventListener("click",I=>{I.stopPropagation(),r?It():(a=!1,Ht()),ut()}),document.addEventListener("visibilitychange",()=>{var I;t&&(document.hidden?(et(),Promise.resolve((I=t.suspend)==null?void 0:I.call(t)).catch(()=>{})):a||(St(),V()))}),ut(),{setPhase:W,playArrivalCue:pt}}const Fh={bride:"Mishi",groom:"Mrigank"},ko=[-2,-29],fc=Math.atan2(8,2),hr=[6,-27];function nn(i){const t=i[0]-ko[0],e=i[1]-ko[1],n=Math.cos(fc),s=Math.sin(fc);return[ko[0]+t*n+e*s,ko[1]-t*s+e*n]}function ss(i){return{...i,pos:nn(i.pos),...i.faceToward?{faceToward:nn(i.faceToward)}:{}}}const zt={mandap:{pos:nn([-2,-34]),faceToward:hr},bride:{pos:nn([-2,-28]),faceToward:hr},horseGroom:{pos:[24,14],faceToward:[23,-8]},elephant:{pos:[24,27],faceToward:[24,8]},path:{points:[[14,44],[20,34],[24,22],[25,8],[23,-8],[16,-20],[6,-27],[-2,-29]],width:7},toranGates:[{pos:[19.5,35],faceToward:[23,20]},{pos:[24.5,6],faceToward:[24,-8]},{pos:[10,-25],faceToward:[-2,-29]}],attendants:[{item:"chhatri",pos:[20.5,14],faceToward:[23,-8]},{item:"chhatri",pos:[28,14],faceToward:[23,-8]},{item:"dhol",pos:[16.9,-13.8],faceToward:[0,-30]},{item:"shehnai",pos:[18.9,-15],faceToward:[0,-30]},{item:"turhi",pos:[21,-16.2],faceToward:[0,-30]},{item:"flag",pos:[20,27],faceToward:[24,12]},{item:"morchhal",pos:[28,27],faceToward:[24,12]},ss({item:"lamp",pos:[-6.5,-22.8],faceToward:[-2,-30]}),ss({item:"garland",pos:[2.5,-22.2],faceToward:[-2,-30]}),ss({item:"lamp",pos:[-8.5,-30.5],faceToward:[-2,-30]})],petalArea:{cx:16,cz:0,radius:32},camera:{introFrom:[-8,25,70],target:[18,3,38],introDurationSec:4.5},dancers:[{variant:"armsUpM",pos:[20.5,7]},{variant:"bhangraM",pos:[29,7]},{variant:"spinF",pos:[20,0]},{variant:"jumpM",pos:[28,0]},{variant:"clapM",pos:[19.2,-7]},{variant:"thumkaF",pos:[27.2,-7]}],brideDancers:[ss({variant:"spinF",pos:[-5.5,-27.5],faceToward:[-5.5,6]}),ss({variant:"thumkaF",pos:[1.5,-27.5],faceToward:[1.5,6]})],guests:[{variant:"cheering",pos:[18,30],faceToward:[24,26]},{variant:"namaste",pos:[30,10],faceToward:[25,8]},{variant:"clapping",pos:[16,-14],faceToward:[21,-18]}],groomMusicians:[{item:"shehnai",pos:[21,18],faceToward:[23,-8]},{item:"dhol",pos:[27,18],faceToward:[23,-8]}],moneyThrower:{pos:[31.5,15],faceToward:[24,14]},fireworkGuy:{pos:[16.5,15],faceToward:[24,14]},swans:[{pos:[-4,-2],phase:0},{pos:[3,3],phase:2.1}]};var Yh;const we=((Yh=window.matchMedia)==null?void 0:Yh.call(window,"(pointer: coarse)").matches)||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),ni=[],$o=[],We={holdEnd:5.1,travelEnd:29,arrivalEnd:45,anchorStart:.5,anchorEnd:58};let ur="opening",Ke=0,pc=!1,Mr=1/0,Xc=!0;const se=new W_;se.fog=new Uc(vi.fogColor,we?.0052:.006);const ke=new ln(52,window.innerWidth/window.innerHeight,.1,1e3);ke.position.set(...zt.camera.introFrom);const un=new V_({antialias:!we});un.setSize(window.innerWidth,window.innerHeight);un.setPixelRatio(Math.min(window.devicePixelRatio,we?1.25:2));un.shadowMap.enabled=!0;un.shadowMap.type=we?xc:qh;un.toneMapping=Mc;un.toneMappingExposure=1;const Xx=document.getElementById("root")??document.body;Xx.appendChild(un.domElement);const Es=new Kv(un);Es.addPass(new Zv(se,ke));const ju=new xs(new at(window.innerWidth,window.innerHeight),.58,.6,.72);Es.addPass(ju);let Ws=null;if(!we){Ws=new Hu(Qv);const i=un.getPixelRatio();Ws.uniforms.resolution.value.set(1/(window.innerWidth*i),1/(window.innerHeight*i)),Es.addPass(Ws)}Es.addPass(new $v);const ne=new Lv(ke,un.domElement);ne.enableDamping=!0;ne.dampingFactor=we?.08:.05;ne.rotateSpeed=we?.65:1;ne.zoomSpeed=we?.85:1;ne.panSpeed=we?.75:1;ne.touches.ONE=gi.ROTATE;ne.touches.TWO=gi.DOLLY_PAN;ne.zoomToCursor=!0;ne.maxPolarAngle=Math.PI/2.08;ne.minDistance=6;ne.maxDistance=135;ne.target.set(...zt.camera.target);ne.enabled=!0;const yr=document.createElement("canvas");yr.width=1024;yr.height=1024;const bs=yr.getContext("2d"),_n=bs.createLinearGradient(0,0,0,1024);_n.addColorStop(0,"#0a0520");_n.addColorStop(.15,"#1a0a3a");_n.addColorStop(.3,"#4a1555");_n.addColorStop(.42,"#8b2252");_n.addColorStop(.52,"#d4553a");_n.addColorStop(.6,"#e87730");_n.addColorStop(.68,"#f09838");_n.addColorStop(.76,"#f5be5a");_n.addColorStop(.85,"#fad48e");_n.addColorStop(.92,"#ffe8c0");_n.addColorStop(1,"#fff0d6");bs.fillStyle=_n;bs.fillRect(0,0,1024,1024);const ao=bs.createRadialGradient(512,620,0,512,620,250);ao.addColorStop(0,"rgba(255,240,200,0.5)");ao.addColorStop(.3,"rgba(255,180,80,0.3)");ao.addColorStop(.7,"rgba(255,100,50,0.1)");ao.addColorStop(1,"rgba(255,80,30,0)");bs.fillStyle=ao;bs.fillRect(0,0,1024,1024);const Yc=new Ui(yr);Yc.mapping=er;se.background=Yc;se.environment=Yc;const Yx=new Rv(vi.ambient.color,vi.ambient.intensity);se.add(Yx);const vn=new zc(vi.keyLight.color,vi.keyLight.intensity);vn.position.set(-50,22,-40);vn.castShadow=!0;vn.shadow.mapSize.set(we?1024:2048,we?1024:2048);vn.shadow.camera.left=-70;vn.shadow.camera.right=70;vn.shadow.camera.top=70;vn.shadow.camera.bottom=-70;vn.shadow.camera.near=.5;vn.shadow.camera.far=170;vn.shadow.bias=-.001;vn.shadow.normalBias=.02;se.add(vn);const Ju=new zc(16750933,.45);Ju.position.set(30,10,20);se.add(Ju);const $u=new zc(16733474,.5);$u.position.set(-40,6,-30);se.add($u);const qx=new bv(vi.hemi.sky,vi.hemi.ground,vi.hemi.intensity);se.add(qx);const Sr=new yt,Kx=new K(new Nt(5,32,32),new si({color:16770464}));Sr.add(Kx);for(let i=0;i<3;i++){const t=new K(new Nt(7+i*3,32,32),new si({color:new Xt().setHSL(.08,.9,.6-i*.1),transparent:!0,opacity:.15-i*.04,side:Ge}));Sr.add(t)}const Qo=new L(-55,12,-80);Sr.position.copy(Qo);se.add(Sr);function Oh(i,t){let e=0;e+=Math.sin(i*.05)*Math.cos(t*.05)*4,e+=Math.sin(i*.1+1)*Math.cos(t*.08)*2,e+=Math.sin(i*.02)*Math.sin(t*.03)*6,e+=Math.cos(i*.15)*Math.sin(t*.12)*1.5,e+=Math.sin(i*.07+2)*Math.cos(t*.06-1)*1.5;const n=i*i+t*t;return n<400&&(e*=.3*(n/400)),e}function gn(i,t){const e=Oh(i,t),n=Jx(i,t),s=1-tr(dr+7,dr+17,n.d),o=Math.hypot(i-zt.mandap.pos[0],t-(zt.bride.pos[1]-3)),r=1-tr(11,22,o),a=Math.max(s,r)*tr(15,20.5,Math.hypot(i,t));if(a<=0)return e;const l=Oh(n.cx,n.cz)+1.44;return e+(l-e)*a}function wr(i,t,e,n){return Math.atan2(e-i,n-t)}const Qu=.32,co=.06,td=.015;function Zx(i,t,e={}){const n=t.pos[0],s=t.pos[1],o=e.footprint??.7,r=e.y!==void 0?e.y:lo(n,s,o)+(e.clearance??td);return i.position.set(n,r,s),t.faceToward&&(i.rotation.y=wr(n,s,t.faceToward[0],t.faceToward[1])),se.add(i),i}function Ce(i,t,e={}){if(i.isObject3D)return Zx(i,t,e),i;const n=new yt,s=t.pos[0],o=t.pos[1],r=e.footprint??1;n.position.set(s,e.y!==void 0?e.y:lo(s,o,r)+(e.clearance??co),o),t.faceToward&&(n.rotation.y=wr(s,o,t.faceToward[0],t.faceToward[1])),n.add(i.group),se.add(n);const a={amount:0,phase:i.gaitOffset??0,gaitScale:i.gaitScale??6};return n.userData.locomotion=a,typeof i.update=="function"&&ni.push((c,l)=>i.update(c,l,a)),n}function dn(i,t){const e=dr+zt.path.width*.16+.08;return gn(i,t)+(ed(i,t)<=e?Qu:0)}function lo(i,t,e){let n=dn(i,t);const s=e>.05?[e*.5,e]:[];for(const o of s)for(let r=0;r<16;r++){const a=r/16*Math.PI*2;n=Math.max(n,dn(i+Math.cos(a)*o,t+Math.sin(a)*o))}return n}const Tn=zt.path.points,dr=zt.path.width/2;function jx(i,t,e,n){const s=e[0],o=e[1],r=n[0],a=n[1],c=r-s,l=a-o,h=c*c+l*l||1e-6;let d=((i-s)*c+(t-o)*l)/h;d=Math.max(0,Math.min(1,d));const p=s+d*c,f=o+d*l;return Math.hypot(i-p,t-f)}function ed(i,t){let e=1/0;for(let n=0;n<Tn.length-1;n++)e=Math.min(e,jx(i,t,Tn[n],Tn[n+1]));return e}function tr(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function Jx(i,t){let e=1/0,n=Tn[0][0],s=Tn[0][1];for(let o=0;o<Tn.length-1;o++){const r=Tn[o],a=Tn[o+1],c=a[0]-r[0],l=a[1]-r[1],h=c*c+l*l||1e-6;let d=((i-r[0])*c+(t-r[1])*l)/h;d=Math.max(0,Math.min(1,d));const p=r[0]+d*c,f=r[1]+d*l,g=Math.hypot(i-p,t-f);g<e&&(e=g,n=p,s=f)}return{d:e,cx:n,cz:s}}const Yn=[];let mc=0;for(let i=0;i<Tn.length-1;i++){const t=Tn[i],e=Tn[i+1],n=Math.hypot(e[0]-t[0],e[1]-t[1]);Yn.push({a:t,b:e,start:mc,len:n}),mc+=n}const Ns={x:0,z:0},va={x:0,z:0},xa={x:0,z:0};function ds(i,t={x:0,z:0}){let e=Yn[0];if(i>=mc)e=Yn[Yn.length-1];else if(i>0){for(let s=0;s<Yn.length;s++)if(i<=Yn[s].start+Yn[s].len){e=Yn[s];break}}const n=(i-e.start)/e.len;return t.x=Se.lerp(e.a[0],e.b[0],n),t.z=Se.lerp(e.a[1],e.b[1],n),t}function $x(i,t){let e=1/0,n=0;for(const s of Yn){const o=s.b[0]-s.a[0],r=s.b[1]-s.a[1],a=Se.clamp(((i-s.a[0])*o+(t-s.a[1])*r)/(s.len*s.len),0,1),c=s.a[0]+o*a,l=s.a[1]+r*a,h=Math.hypot(i-c,t-l);h<e&&(e=h,n=s.start+s.len*a)}return n}const Qx=zt.toranGates.map(i=>$x(i.pos[0],i.pos[1]));function nd(i){let t=0;for(const e of Qx)t=Math.max(t,1-tr(1.8,4.8,Math.abs(i-e)));return t}function tM(i){return 1-nd(i)*.5}function eM(i,t,e){const n=gn(i,t),s=dn(i,t);return e>=0?s:n+(s-n)*In((e+8)/8)}function id(i,t,e={}){ds(i,Ns),ds(i-.7,va),ds(i+.7,xa);let n=xa.x-va.x,s=xa.z-va.z;const o=1/(Math.hypot(n,s)||1);return n*=o,s*=o,e.x=Ns.x-s*t,e.z=Ns.z+n*t,e.y=eM(e.x,e.z,i)+co,e.yaw=Math.atan2(n,s),e.centerX=Ns.x,e.centerZ=Ns.z,e}function In(i){const t=Se.clamp(i,0,1);return t*t*t*(t*(t*6-15)+10)}function Ma(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}const sd=[[19.7,44.7],[10.7,39.3],[27.4,-11.6],[17.1,-10.4],[17.6,-25.3],[11.6,-16.7]],nM=[{x:zt.mandap.pos[0],z:zt.mandap.pos[1],r:11},{x:zt.bride.pos[0],z:zt.bride.pos[1],r:3},{x:zt.horseGroom.pos[0],z:zt.horseGroom.pos[1],r:6.5},{x:zt.elephant.pos[0],z:zt.elephant.pos[1],r:7.5},...zt.toranGates.map(i=>({x:i.pos[0],z:i.pos[1],r:4.5})),...sd.map(i=>({x:i[0],z:i[1],r:1.8})),...zt.attendants.map(i=>({x:i.pos[0],z:i.pos[1],r:2.2})),...zt.dancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...zt.brideDancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...zt.guests.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),{x:zt.moneyThrower.pos[0],z:zt.moneyThrower.pos[1],r:2},{x:zt.fireworkGuy.pos[0],z:zt.fireworkGuy.pos[1],r:2},{x:24,z:-2,r:13}];function iM(i,t){for(const e of nM){const n=i-e.x,s=t-e.z;if(n*n+s*s<e.r*e.r)return!0}return!1}function Ts(i,t,e=1.5){return ed(i,t)<dr+e||iM(i,t)}function qc(i){const t=-20+i*25+Math.sin(i*4)*8+Math.cos(i*2.5)*5,e=-70+i*75+Math.sin(i*3)*6;return new at(t,e)}function od(i){const t=30-i*28+Math.sin(i*3.5+1)*7,e=-65+i*68+Math.cos(i*2.8+2)*5;return new at(t,e)}const rd=Array.from({length:101},(i,t)=>{const e=t/100;return{a:qc(e),b:od(e),widthA:2+Math.sin(e*6)*.5,widthB:1.6+Math.sin(e*5+1)*.4}});function ho(i,t,e=3.5){for(const n of rd)if((i-n.a.x)**2+(t-n.a.y)**2<e*e||(i-n.b.x)**2+(t-n.b.y)**2<e*e)return!0;return!1}function sM(){const i=we?140:200,t=new Te(200,200,i,i),e=t.attributes.position,n=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const r=e.getX(o),a=-e.getY(o);let c=gn(r,a),l=0;for(const d of rd){const p=Math.hypot(r-d.a.x,a-d.a.y);p<d.widthA&&(l=Math.max(l,(1-p/d.widthA)*2.5));const f=Math.hypot(r-d.b.x,a-d.b.y);f<d.widthB&&(l=Math.max(l,(1-f/d.widthB)*2.2))}c-=l,e.setZ(o,c);const h=new Xt;l>.5?h.setHSL(.08,.3,.25):c<-1?h.setHSL(.28,.5,.22):c<2?h.setHSL(.3,.55,.28+Math.random()*.04):c<5?h.setHSL(.25,.45,.3+Math.random()*.03):h.setHSL(.22,.35,.32+Math.random()*.03),n[o*3]=h.r,n[o*3+1]=h.g,n[o*3+2]=h.b}t.setAttribute("color",new en(n,3)),t.computeVertexNormals(),t.rotateX(-Math.PI/2);const s=new K(t,new it({vertexColors:!0,roughness:.92,metalness:0,envMapIntensity:.3}));s.receiveShadow=!0,se.add(s)}sM();function ad(i,t,e,n){const s=[];for(let h=0;h<=1;h+=1/t)s.push(i(h));const o=[],r=[],a=[];for(let h=0;h<s.length;h++){const d=s[h],p=h/(s.length-1);let f;if(h<s.length-1){const u=s[h+1];f=new at(u.x-d.x,u.y-d.y).normalize()}else{const u=s[h-1];f=new at(d.x-u.x,d.y-u.y).normalize()}const g=new at(-f.y,f.x),_=e+Math.sin(p*6)*n,m=Math.min(gn(d.x+g.x*_,d.y+g.y*_),gn(d.x-g.x*_,d.y-g.y*_),gn(d.x,d.y))+.15;if(o.push(d.x+g.x*_,m,d.y+g.y*_,d.x-g.x*_,m,d.y-g.y*_),a.push(0,p*8,1,p*8),h<s.length-1){const u=h*2;r.push(u,u+1,u+2,u+1,u+3,u+2)}}const c=new Be;c.setAttribute("position",new ie(o,3)),c.setAttribute("uv",new ie(a,2)),c.setIndex(r),c.computeVertexNormals();const l=new K(c,new it({color:1728640,roughness:.05,metalness:.7,transparent:!0,opacity:.7,envMapIntensity:1.5,side:de,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return se.add(l),l}ad(qc,80,2,.5);ad(od,80,1.5,.4);const Er=new K(new ei(15.5,72),new it({color:1730696,roughness:.02,metalness:.8,transparent:!0,opacity:.82,envMapIntensity:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));Er.rotation.x=-Math.PI/2;Er.position.set(0,.32,0);se.add(Er);const Kc=new K(new Qs(14.5,17.5,72),new it({color:869461,roughness:.2,metalness:.4,transparent:!0,opacity:.5,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));Kc.rotation.x=-Math.PI/2;Kc.position.set(0,.26,0);se.add(Kc);const to=new K(new Te(5,22),new si({color:16764006,transparent:!0,opacity:.22,side:de,blending:Xs}));to.rotation.x=-Math.PI/2;to.position.set(-3,.26,-6);se.add(to);function oM(i,t,e=1){const n=new yt,s=new K(new rt(.15*e,.35*e,3.5*e,8),new it({color:4861458,roughness:.95}));s.position.y=1.75*e,s.castShadow=!we,n.add(s);const o=[1922082,2779950,1723680,2647600];for(let r=0;r<4;r++){const a=new jt((2.5-r*.5)*e,(2.2-r*.3)*e,7+Math.floor(Math.random()*3)),c=a.attributes.position;for(let h=0;h<c.count;h++)c.setX(h,c.getX(h)+(Math.random()-.5)*.2*e),c.setZ(h,c.getZ(h)+(Math.random()-.5)*.2*e);a.computeVertexNormals();const l=new K(a,new it({color:o[r%4],roughness:.85}));l.position.y=(3.2+r*1.1)*e,l.rotation.y=Math.random()*Math.PI,l.castShadow=!we,n.add(l)}return n.position.set(i,gn(i,t),t),n}for(let i=0;i<80;i++){const t=(Math.random()-.5)*130,e=(Math.random()-.5)*130;t*t+e*e<350||ho(t,e,4)||Ts(t,e,11)||se.add(oM(t,e,.6+Math.random()*.9))}function rM(i,t,e=1){const n=new yt,s=new K(new rt(.12*e,.25*e,4*e,6),new it({color:9139029,roughness:.9}));s.position.y=2*e,s.castShadow=!we,n.add(s);const o=new ae(2.2*e,2),r=o.attributes.position;for(let c=0;c<r.count;c++)r.setX(c,r.getX(c)+(Math.random()-.5)*.4*e),r.setY(c,r.getY(c)+(Math.random()-.5)*.3*e),r.setZ(c,r.getZ(c)+(Math.random()-.5)*.4*e);o.computeVertexNormals();const a=new K(o,new it({color:new Xt().setHSL(.25+Math.random()*.1,.5,.25+Math.random()*.1),roughness:.85}));return a.position.y=4.5*e,a.castShadow=!we,n.add(a),n.position.set(i,gn(i,t),t),n}for(let i=0;i<30;i++){const t=(Math.random()-.5)*110,e=(Math.random()-.5)*110;t*t+e*e<350||ho(t,e,4)||Ts(t,e,11)||se.add(rM(t,e,.5+Math.random()*.7))}function cd(i,t,e){const n=new Oc(e,2),s=n.attributes.position;for(let a=0;a<s.count;a++)s.setX(a,s.getX(a)+(Math.random()-.5)*e*.35),s.setY(a,s.getY(a)*(.5+Math.random()*.3)+(Math.random()-.5)*e*.2),s.setZ(a,s.getZ(a)+(Math.random()-.5)*e*.35);n.computeVertexNormals();const o=.35+Math.random()*.2,r=new K(n,new it({color:new Xt(o,o*.95,o*.9),roughness:.95,metalness:.02}));r.position.set(i,gn(i,t)+e*.2,t),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*.5),r.castShadow=!we,se.add(r)}for(let i=0;i<1;i+=.05){if(Math.random()>.6)continue;const t=qc(i),e=(Math.random()>.5?1:-1)*(2.5+Math.random()*2),n=t.x+e,s=t.y+(Math.random()-.5)*2;Ts(n,s,1)||cd(n,s,.4+Math.random()*.8)}for(let i=0;i<26;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<250||ho(t,e,3)||Ts(t,e,1)||cd(t,e,.4+Math.random()*1.2)}const aM=new Nt(.12,5,5),cM=[O.marigold,O.rose,16768324,O.saffron,O.jasmine,16729190,16755234];cM.forEach(i=>{const t=new it({color:i,roughness:.5,emissive:i,emissiveIntensity:.06}),e=44,n=new ro(aM,t,e),s=new Re;let o=0;for(let r=0;r<e;r++){const a=(Math.random()-.5)*90,c=(Math.random()-.5)*90;a*a+c*c<250||ho(a,c,3)||Ts(a,c,.5)||(s.position.set(a,gn(a,c)+.25,c),s.scale.setScalar(.5+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(o++,s.matrix))}n.count=o,se.add(n)});const ld=new Te(.15,.6);ld.translate(0,.3,0);const hd=we?500:850,Zc=new ro(ld,new it({color:3832366,roughness:.9,side:de,alphaTest:.5}),hd),Fs=new Re;let ud=0;for(let i=0;i<hd;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<300||ho(t,e,2.5)||Ts(t,e,.5)||(Fs.position.set(t,gn(t,e),e),Fs.rotation.y=Math.random()*Math.PI*2,Fs.scale.set(.8+Math.random()*.6,.6+Math.random()*1,1),Fs.updateMatrix(),Zc.setMatrixAt(ud++,Fs.matrix))}Zc.count=ud;se.add(Zc);function zi(i,t,e,n){const s=new yt,o=new jt(n,e,8),r=o.attributes.position;for(let l=0;l<r.count;l++)r.setX(l,r.getX(l)+(Math.random()-.5)*n*.18),r.setZ(l,r.getZ(l)+(Math.random()-.5)*n*.18),r.getY(l)<e*.3&&r.setY(l,r.getY(l)+(Math.random()-.5)*e*.08);o.computeVertexNormals();const a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const h=(r.getY(l)+e/2)/e,d=new Xt;h>.8?d.setHSL(0,0,.85+Math.random()*.1):h>.6?d.lerpColors(new Xt(5598062),new Xt(14544639),(h-.6)/.2):d.setHSL(.28,.3,.25+h*.15),a[l*3]=d.r,a[l*3+1]=d.g,a[l*3+2]=d.b}o.setAttribute("color",new ie(a,3));const c=new K(o,new it({vertexColors:!0,roughness:.95,flatShading:!0}));c.position.set(i,e/2-5,t),c.castShadow=!we,s.add(c);for(let l=0;l<2;l++){const h=new jt(n*(.5+Math.random()*.3),e*(.5+Math.random()*.3),6),d=new K(h,new it({color:4872798,roughness:.95,flatShading:!0}));d.position.set(i+(Math.random()-.5)*n*.8,e*(.2+Math.random()*.15)-5,t+(Math.random()-.5)*n*.3),s.add(d)}se.add(s)}zi(-55,-75,45,22);zi(-28,-85,55,28);zi(5,-90,50,25);zi(35,-80,42,20);zi(60,-75,48,23);zi(-70,-80,35,18);zi(80,-70,38,19);function lM(i,t,e){const n=new yt,s=new Xt().setHSL(.07,.4,.75+Math.random()*.2),o=new it({color:s,roughness:1,transparent:!0,opacity:.75,emissive:16737843,emissiveIntensity:.15});for(let r=0;r<5+Math.floor(Math.random()*5);r++){const a=new K(new Nt(1.5+Math.random()*3,10,8),o);a.position.set((Math.random()-.5)*8,(Math.random()-.5)*1.5,(Math.random()-.5)*4),a.scale.y=.5+Math.random()*.2,n.add(a)}return n.position.set(i,t,e),n}const dd=[];for(let i=0;i<6;i++){const t=lM((Math.random()-.5)*180,24+Math.random()*18,-40+(Math.random()-.5)*80);t.userData={baseY:t.position.y,driftSpeed:.36*(i%2===0?1:.7)},se.add(t),dd.push(t)}const fd=[];for(let i=0;i<5;i++){const t=new yt,e=new si({color:1710618,side:de}),n=new K(new Te(1.2,.15),e);n.position.x=-.6,t.add(n);const s=new K(new Te(1.2,.15),e);s.position.x=.6,t.add(s),t.position.set(-40+Math.random()*30,30+Math.random()*14,-50+Math.random()*30),t.userData={phase:Math.random()*Math.PI*2,speed:.3+Math.random()*.5,baseY:t.position.y},se.add(t),fd.push(t)}const pd=[];for(let i=0;i<6;i++){const t=new yt,e=[O.marigold,16768324,O.rose,48340,O.gold][Math.floor(Math.random()*5)],n=new it({color:e,side:de,roughness:.3,emissive:e,emissiveIntensity:.12}),s=new K(new Te(.5,.35),n);s.position.x=-.25,t.add(s);const o=new K(new Te(.5,.35),n);o.position.x=.25,t.add(o),t.position.set(6+(Math.random()-.5)*40,3+Math.random()*5,-6+(Math.random()-.5)*40),t.userData={baseX:t.position.x,baseY:t.position.y,baseZ:t.position.z,phase:Math.random()*Math.PI*2,speed:.5+Math.random()},se.add(t),pd.push(t)}const hM=Lx({points:zt.path.points,width:zt.path.width,getHeight:gn,lift:Qu});se.add(hM);const md=Ku(3.2),Go=nn([-2,-30]);md.position.set(Go[0],dn(Go[0],Go[1])+.02,Go[1]);se.add(md);const gd=Ku(2.4);gd.position.set(14,dn(14,44)+.02,44);se.add(gd);const ii=zt.mandap,br=lo(ii.pos[0],ii.pos[1],3.7),Tr=new K(new Tt(7.35,12,7.35),new it({color:O.cream,roughness:.9,metalness:.02}));Tr.position.set(ii.pos[0],br+.04-6,ii.pos[1]);Tr.rotation.y=wr(ii.pos[0],ii.pos[1],hr[0],hr[1]);Tr.receiveShadow=!0;se.add(Tr);Ce(tx(),ii,{y:br});const jc=new Bu(16743214,we?2:2.6,28,2);jc.position.set(ii.pos[0],br+2.2,ii.pos[1]);se.add(jc);const Ar=new Bu(16756810,1.3,20,2);Ar.position.set(zt.horseGroom.pos[0],dn(zt.horseGroom.pos[0],zt.horseGroom.pos[1])+3,zt.horseGroom.pos[1]);se.add(Ar);zt.toranGates.forEach(i=>Ce(rx(),i,{footprint:3.2}));sd.forEach(i=>Ce(cx(),{pos:i},{footprint:.9}));const ya=ss({pos:[-2,-25.5],faceToward:[-2,-20]});Ce(ax(),ya,{y:dn(ya.pos[0],ya.pos[1])+td});function Mi(i,t){return $o.push({wrap:i,locomotion:i.userData.locomotion,offset:t.offset||0,lane:t.lane||0,finalDistance:t.finalDistance,finalLane:t.finalLane??t.lane??0,faceCenter:!!t.faceCenter,bob:t.bob||0,pose:{},initialized:!1}),i}const uM=lo(zt.horseGroom.pos[0],zt.horseGroom.pos[1],1.6)+co,dM=lx(),Jn=Ce(dM,zt.horseGroom,{y:uM});Mi(Jn,{finalDistance:83,bob:.025});const _d=hx(),$n=Ce(_d,zt.bride,{y:dn(zt.bride.pos[0],zt.bride.pos[1])+co}),fM=$n.rotation.y;Jn.add(Ar);Ar.position.set(0,3,0);const pM=lo(zt.elephant.pos[0],zt.elephant.pos[1],3.9)+co,vd=ux(),xd=Ce(vd,zt.elephant,{y:pM});Mi(xd,{offset:-8,finalDistance:59,bob:.018});const eo=kx("TEAM GROOM",{poleHeight:1});eo.group.position.set(0,3.18,-.55);vd.bannerMount.add(eo.group);ni.push(eo.update);const mM=[{offset:-1,lane:-2.4,finalDistance:81.5,finalLane:-2.4},{offset:-1,lane:2.4,finalDistance:81.5,finalLane:2.4},{offset:4,lane:-2.8,finalDistance:68,finalLane:-2.7,faceCenter:!0},{offset:4,lane:0,finalDistance:68,finalLane:0,faceCenter:!1},{offset:4,lane:2.8,finalDistance:68,finalLane:2.7,faceCenter:!0},{offset:-15,lane:-2.8,finalDistance:59,finalLane:-3.4},{offset:-15,lane:2.8,finalDistance:59,finalLane:3.4}],gM=zt.attendants.map((i,t)=>Ce(Wu({item:i.item,phase:t*.7}),i));mM.forEach((i,t)=>Mi(gM[t],i));const Md=zt.groomMusicians.map((i,t)=>Ce(Wu({item:i.item,phase:3+t}),i));Mi(Md[0],{offset:-3,lane:-2.2,finalDistance:78.5,finalLane:-1.8,faceCenter:!0});Mi(Md[1],{offset:-3,lane:2.2,finalDistance:78.5,finalLane:1.8,faceCenter:!0});const _M=zt.dancers.map((i,t)=>Ce(Yu({variant:i.variant,phase:t*.8}),{pos:i.pos,faceToward:zt.horseGroom.pos})),vM=[{offset:7,lane:-3,finalDistance:64,finalLane:-4.4},{offset:7,lane:3,finalDistance:64,finalLane:4.4},{offset:12,lane:-3,finalDistance:72,finalLane:-4.4},{offset:12,lane:3,finalDistance:72,finalLane:4.4},{offset:15,lane:-3.7,finalDistance:80.5,finalLane:-4.4},{offset:15,lane:3.7,finalDistance:80.5,finalLane:4.4}];vM.forEach((i,t)=>Mi(_M[t],{...i,faceCenter:!0}));zt.brideDancers.forEach((i,t)=>Ce(Yu({variant:i.variant,phase:1+t}),i));zt.guests.forEach((i,t)=>Ce(Hc({variant:i.variant,phase:t*1.1}),i));const yd=Ce(Hc({variant:"cheering",phase:.5,gender:"male"}),zt.moneyThrower);Mi(yd,{offset:-5,lane:-3.1,finalDistance:85,finalLane:-4.6,faceCenter:!0});const no=Bx({origin:[-.9,1.8,.55],ground:.05,count:we?22:36});no.group.visible=!1;yd.add(no.group);ni.push((i,t)=>{no.group.visible&&no.update(Math.max(0,i-Mr),t)});const Sd=Ce(Hc({variant:"cheering",phase:2.3,gender:"male"}),zt.fireworkGuy);Mi(Sd,{offset:-5,lane:3.1,finalDistance:85,finalLane:4.6,faceCenter:!0});const io=zx({origin:[0,1.6,0],rise:13});io.group.visible=!1;Sd.add(io.group);ni.push(i=>{io.group.visible&&io.update(Math.max(0,i-Mr))});const Bh=nn([-2,-30]),xM=dn(Bh[0],Bh[1]);[-3.4,3.4].forEach(i=>{Ce(Rx(),{pos:nn([-2+i,-30.4])})});for(let i=0;i<9;i++)Ce(qu(),{pos:nn([-6+i,-29.6])});for(let i=0;i<5;i++){const t=i/4*Math.PI;Ce(qu(),{pos:nn([-2+Math.cos(t)*3,-30+Math.sin(t)*3])})}Ce(Wc(),{pos:nn([-3.6,-29])});Ce(Wc(),{pos:nn([-.4,-29])});Ce(Wc(),{pos:nn([-2,-27.6])});const MM=[...[-2.6,2.6].map(i=>{const t=nn([-2+i,-30.2]);return{pos:t,y:dn(t[0],t[1])+3.1}}),...zt.toranGates.map(i=>({pos:i.pos,y:dn(i.pos[0],i.pos[1])+3.6}))];MM.forEach(i=>Ce(Tx(),{pos:i.pos},{y:i.y}));const Jc=Ax(5.2,"mixed"),zh=nn([-2,-30.2]);Jc.position.set(zh[0],xM+3,zh[1]);Jc.rotation.y=fc;se.add(Jc);const wd=Ux({area:zt.petalArea,top:br+16,getHeight:dn});Ce(wd,{pos:[0,0]},{y:0});const gc=Nx({origin:[Qo.x,Qo.y,Qo.z],color:O.flame,count:we?6:8});se.add(gc.group);gc.update&&ni.push(gc.update);zt.swans.forEach(i=>{const t=Ox(i.phase),e=new yt;e.position.set(i.pos[0],.34,i.pos[1]),e.add(t.group),se.add(e),ni.push(t.update)});const Ed=Fx(Fh.bride+" weds "+Fh.groom,{radius:55,height:30,speed:.085});se.add(Ed.group);ni.push(Ed.update);let os=We.anchorStart;const Sa={x:0,z:0};function Ho(i){ur!==i&&(ur=i,CM(i))}function yM(i){if(pc)return;pc=!0,Mr=i,no.group.visible=!0,io.group.visible=!0,wd.burst((Jn.position.x+$n.position.x)*.5,(Jn.position.z+$n.position.z)*.5,8),PM();const t=document.getElementById("arrivalMoment");t&&(t.setAttribute("aria-hidden","false"),t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},5200))}function SM(i,t){let e=0;i<We.holdEnd?(os=We.anchorStart,Ke=0,Ho("opening")):i<We.travelEnd?(e=In((i-We.holdEnd)/(We.travelEnd-We.holdEnd)),os=Se.lerp(We.anchorStart,We.anchorEnd,e),Ke=0,Ho("procession")):i<We.arrivalEnd?(os=We.anchorEnd,Ke=In((i-We.travelEnd)/(We.arrivalEnd-We.travelEnd)),Ho("arrival")):(os=We.anchorEnd,Ke=1,Ho("celebration"));const n=ur==="procession"||ur==="arrival";let s=0;for(let a=0;a<$o.length;a++){const c=$o[a],l=c.wrap.position.x,h=c.wrap.position.z,d=c.initialized,p=Ke>0?Se.lerp(We.anchorEnd+c.offset,c.finalDistance,Ke):os+c.offset,g=(Ke>0?Se.lerp(c.lane,c.finalLane,Ke):c.lane)*tM(p);c.wrap===xd&&(s=In(nd(p)));const _=id(p,g,c.pose);let m=_.yaw;if(c.faceCenter&&Ke>.45){ds(p,Sa);const v=Math.atan2(Sa.x-_.x,Sa.z-_.z);m=Ma(m,v,In((Ke-.45)/.55))}const u=n?1-Ke:0,M=c.bob?(Math.sin(i*(c===$o[0]?5.8:3.8)+a*.7)*.5+.5)*c.bob*u:0;if(c.wrap.position.set(_.x,_.y+M,_.z),c.locomotion){const v=d?Math.min(Math.hypot(_.x-l,_.z-h),.4):0,y=t>1e-4?v/t:0;c.locomotion.phase+=v*c.locomotion.gaitScale;const C=Se.clamp(y/1.1,0,1),E=1-Math.exp(-8*Math.max(t,.001));c.locomotion.amount=Se.lerp(c.locomotion.amount,C,E)}if(!c.initialized)c.wrap.rotation.y=m,c.initialized=!0;else{const v=1-Math.exp(-10*Math.max(t,.001));c.wrap.rotation.y=Ma(c.wrap.rotation.y,m,v)}}eo.group.rotation.x=-s*1.4,eo.group.position.y=3.18-s*.1;const o=In((Ke-.12)/.68),r=wr($n.position.x,$n.position.z,Jn.position.x,Jn.position.z);$n.rotation.y=Ma(fM,r,o),_d.setArrival(In((Ke-.48)/.42)),!pc&&Ke>=.72&&yM(i)}const wM=new L(...zt.camera.introFrom),EM=new L(...zt.camera.target),_c=zt.camera.introDurationSec;let kh=!0;const di=new L,Vo=new L,Gh=new L,Wo={},wa={x:0,z:0},Ea={x:0,z:0},bd=new L,Td=new L;let $c=!1,Bs=1;ne.enablePan=!0;ne.screenSpacePanning=!1;ne.minPolarAngle=.05;ne.maxPolarAngle=Math.PI/2-.02;ne.minDistance=6;ne.maxDistance=150;ne.autoRotateSpeed=.35;let Rr=!1,Ms=0;const bM=4,Qn=document.getElementById("followBtn");function Ad(){Xc=!1,$c=!0,ne.autoRotate=!1,Ms=0,Qn==null||Qn.classList.add("show")}function TM(){bd.copy(ke.position),Td.copy(ne.target),Bs=0,$c=!0,Xc=!0,Rr=!1,ne.autoRotate=!1,Ms=0,Qn==null||Qn.classList.remove("show")}function AM(i,t){const e=In((Ke-.08)/.82),n=Se.lerp(4,1.5,e),s=Se.lerp(os+n,84,e);if(id(s,0,Wo),di.set(Wo.x,Wo.y+2.35,Wo.z),e>0){const _=(Jn.position.x+$n.position.x)*.5,m=Math.max(Jn.position.y+2,$n.position.y+1.4),u=(Jn.position.z+$n.position.z)*.5;Gh.set(_,m,u),di.lerp(Gh,e)}ds(s-3,wa),ds(s+3,Ea);let o=Ea.x-wa.x,r=Ea.z-wa.z;const a=Math.hypot(o,r)||1;o/=a,r/=a;const c=-r,l=o,h=1-Se.smoothstep(ke.aspect,.65,.95),d=Math.sin(e*Math.PI);let p=Se.lerp(Se.lerp(-10,-5.5,h),Se.lerp(4,1.5,h),e),f=Se.lerp(Se.lerp(20,23,h),Se.lerp(18.5,21,h),e),g=Se.lerp(Se.lerp(16,18,h),Se.lerp(15,17,h),e);if(p+=d*Se.lerp(1,.45,h),g+=d*.45,p+=Math.sin(i*.34)*Se.lerp(.24,.11,h),g+=Math.sin(i*.27+1.1)*.09,Vo.set(di.x+c*p-o*f,di.y+g,di.z+l*p-r*f),!$c&&i<_c){const _=In(i/_c);ke.position.lerpVectors(wM,Vo,_),ne.target.lerpVectors(EM,di,_)}else if(Bs<1){Bs=Math.min(1,Bs+Math.max(t,.001)/1.45);const _=In(Bs);ke.position.lerpVectors(bd,Vo,_),ne.target.lerpVectors(Td,di,_)}else{const _=Math.max(t,.001),m=1-Math.exp(-1.8*_),u=1-Math.exp(-3*_);ke.position.lerp(Vo,m),ne.target.lerp(di,u)}ne.autoRotate=!1,ne.update()}const Xe=Object.create(null),Qc=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",i=>{Qc.has(i.code)&&(Ad(),Xe[i.code]=!0,(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault())});window.addEventListener("keyup",i=>{Qc.has(i.code)&&(Xe[i.code]=!1)});const fi=new L,ba=new L,wn=new L;function RM(i){if(fi.subVectors(ne.target,ke.position),fi.y=0,fi.lengthSq()<1e-6||(fi.normalize(),ba.set(-fi.z,0,fi.x),wn.set(0,0,0),(Xe.KeyW||Xe.ArrowUp)&&wn.add(fi),(Xe.KeyS||Xe.ArrowDown)&&wn.sub(fi),(Xe.KeyD||Xe.ArrowRight)&&wn.add(ba),(Xe.KeyA||Xe.ArrowLeft)&&wn.sub(ba),(Xe.KeyE||Xe.Space)&&(wn.y+=1),Xe.KeyQ&&(wn.y-=1),wn.lengthSq()===0))return;const t=Xe.ShiftLeft||Xe.ShiftRight?34:13;wn.normalize().multiplyScalar(t*i),ke.position.add(wn),ne.target.add(wn);const e=dn(ke.position.x,ke.position.z)+1.5;if(ke.position.y<e){const n=e-ke.position.y;ke.position.y+=n,ne.target.y+=n}ne.autoRotate=!1,Ms=0,ys&&ys.classList.add("gone")}const Hh=document.getElementById("loading"),ys=document.getElementById("titlecard"),fr=document.getElementById("hint");ne.addEventListener("start",()=>{Rr=!0,Ad(),ys&&ys.classList.add("gone"),fr&&fr.classList.add("gone")});ne.addEventListener("end",()=>{Rr=!1,Ms=0});Qn==null||Qn.addEventListener("click",()=>TM());function Rd(){for(const i of Qc)Xe[i]=!1}window.addEventListener("blur",Rd);document.addEventListener("visibilitychange",()=>{document.hidden&&Rd()});const Cd=Wx({button:document.getElementById("soundBtn")});function CM(i,t=!1){Cd.setPhase(i,t)}function PM(){Cd.playArrivalCue()}const LM=new zu;let Vh=0;function IM(){const i=Math.min(LM.getDelta(),.05);Vh+=i;const t=Vh;Er.material.color.setHSL(.52,.55,.3+Math.sin(t*.3)*.03),to.material.opacity=.16+Math.sin(t*2)*.07,to.scale.x=1+Math.sin(t*1.5)*.2,dd.forEach((s,o)=>{s.position.x+=s.userData.driftSpeed*i,s.position.x>100&&(s.position.x=-100),s.position.y=s.userData.baseY+Math.sin(t*.3+o)*.24}),pd.forEach(s=>{const o=s.userData;s.position.x=o.baseX+Math.sin(t*o.speed+o.phase)*1.25,s.position.z=o.baseZ+Math.cos(t*o.speed*.87+o.phase)*1.05,s.position.y=o.baseY+Math.sin(t*2+o.phase)*.5,s.rotation.y=t*o.speed;const r=Math.sin(t*12+o.phase)*.6;s.children[0].rotation.y=r,s.children[1].rotation.y=-r}),fd.forEach(s=>{const o=s.userData;s.position.x+=o.speed*2*i,s.position.y=o.baseY+Math.sin(t*1.5+o.phase)*.35,s.position.x>60&&(s.position.x=-60);const r=Math.sin(t*4+o.phase)*.4;s.children[0].rotation.z=r,s.children[1].rotation.z=-r}),SM(t,i);const e=t-Mr,n=e>=0&&e<3.2?(1-e/3.2)*(.55+Math.sin(e*8)*.45):0;jc.intensity=(we?2:2.6)+Math.sin(t*9)*.25+Math.sin(t*23)*.12+n*2.2,ju.strength=.58+n*(we?.22:.42);for(let s=0;s<ni.length;s++)ni[s](t,i);Xc?AM(t,i):(RM(i),Rr||(Ms+=i,!we&&Ms>bM&&(ne.autoRotate=!0)),ne.update()),Es.render(),kh&&(kh=!1,Hh&&Hh.classList.add("hidden"),setTimeout(()=>{ys&&ys.classList.add("gone")},(_c+2)*1e3),setTimeout(()=>{fr&&fr.classList.add("gone")},14e3))}un.setAnimationLoop(IM);let Ta=0,Wh=window.innerWidth,Xh=window.innerHeight;window.addEventListener("resize",()=>{Ta||(Ta=requestAnimationFrame(()=>{Ta=0;const i=window.innerWidth,t=window.innerHeight;if(!(i===Wh&&t===Xh)&&(Wh=i,Xh=t,ke.aspect=i/t,ke.updateProjectionMatrix(),un.setSize(i,t),Es.setSize(i,t),Ws)){const e=un.getPixelRatio();Ws.uniforms.resolution.value.set(1/(i*e),1/(t*e))}}))});
