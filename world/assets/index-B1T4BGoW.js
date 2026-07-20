(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="169",hs={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qd=0,_l=1,Kd=2,Cc=1,ru=2,Xn=3,Pn=0,Ge=1,de=2,Zn=0,us=1,Zs=2,vl=3,xl=4,Zd=5,Pi=100,jd=101,Jd=102,$d=103,Qd=104,tf=200,ef=201,nf=202,sf=203,Na=204,Fa=205,of=206,rf=207,af=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,Oa=0,Ba=1,za=2,_s=3,ka=4,Ga=5,Ha=6,Va=7,au=0,pf=1,mf=2,vi=0,cu=1,lu=2,hu=3,Pc=4,gf=5,uu=6,du=7,fu=300,vs=301,xs=302,ar=303,Wa=304,yr=306,Di=1e3,qn=1001,Xa=1002,tn=1003,_f=1004,xo=1005,dn=1006,Gr=1007,Ii=1008,ti=1009,pu=1010,mu=1011,js=1012,Lc=1013,Ui=1014,Dn=1015,jn=1016,Ic=1017,Dc=1018,Ms=1020,gu=35902,_u=1021,vu=1022,Rn=1023,xu=1024,Mu=1025,ds=1026,ys=1027,Uc=1028,Nc=1029,yu=1030,Fc=1031,Oc=1033,jo=33776,Jo=33777,$o=33778,Qo=33779,Ya=35840,qa=35841,Ka=35842,Za=35843,ja=36196,Ja=37492,$a=37496,Qa=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,oc=37814,rc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,dc=37821,tr=36492,fc=36494,pc=36495,Su=36283,mc=36284,gc=36285,_c=36286,vf=3200,xf=3201,wu=0,Mf=1,gi="",En="srgb",Mi="srgb-linear",Bc="display-p3",Sr="display-p3-linear",cr="linear",ye="srgb",lr="rec709",hr="p3",Hi=7680,Ml=519,yf=512,Sf=513,wf=514,Eu=515,Ef=516,bf=517,Tf=518,Af=519,yl=35044,zc=35048,Sl="300 es",Kn=2e3,ur=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wl=1234567;const Vs=Math.PI/180,Js=180/Math.PI;function Bi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function kc(i,t){return(i%t+t)%t}function Rf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function Pf(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function Lf(i,t=1){return t-Math.abs(kc(i,t*2)-t)}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Uf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Nf(i,t){return i+Math.random()*(t-i)}function Ff(i){return i*(.5-Math.random())}function Of(i){i!==void 0&&(wl=i);let t=wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bf(i){return i*Vs}function zf(i){return i*Js}function kf(i){return(i&i-1)===0&&i!==0}function Gf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),p=r((t-n)/2),f=o((n-t)/2),_=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ie={DEG2RAD:Vs,RAD2DEG:Js,generateUUID:Bi,clamp:Ue,euclideanModulo:kc,mapLinear:Rf,inverseLerp:Cf,lerp:Ws,damp:Pf,pingpong:Lf,smoothstep:If,smootherstep:Df,randInt:Uf,randFloat:Nf,randFloatSpread:Ff,seededRandom:Of,degToRad:Bf,radToDeg:zf,isPowerOfTwo:kf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Hf,setQuaternionFromProperEuler:Vf,normalize:qe,denormalize:os};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,o,r,a,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],_=n[8],v=s[0],m=s[3],u=s[6],y=s[1],x=s[4],S=s[7],C=s[2],E=s[5],b=s[8];return o[0]=r*v+a*y+c*C,o[3]=r*m+a*x+c*E,o[6]=r*u+a*S+c*b,o[1]=l*v+h*y+d*C,o[4]=l*m+h*x+d*E,o[7]=l*u+h*S+d*b,o[2]=p*v+f*y+_*C,o[5]=p*m+f*x+_*E,o[8]=p*u+f*S+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,p=a*c-h*o,f=l*o-r*c,_=e*d+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=p*v,t[4]=(h*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new ee;function bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){const i=dr("canvas");return i.style.display="block",i}const El={};function er(i){i in El||(El[i]=!0,console.warn(i))}function Xf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Yf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bl=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tl=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Mi]:{transfer:cr,primaries:lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:ye,primaries:lr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sr]:{transfer:cr,primaries:hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Tl),fromReference:i=>i.applyMatrix3(bl)},[Bc]:{transfer:ye,primaries:hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Tl),fromReference:i=>i.applyMatrix3(bl).convertLinearToSRGB()}},Kf=new Set([Mi,Sr]),ue={enabled:!0,_workingColorSpace:Mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ls[t].toReference,s=Ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ls[i].primaries},getTransfer:function(i){return i===gi?cr:Ls[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ls[t].luminanceCoefficients)}};function fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class Zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=dr("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=fs(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fs(e[n]/255)*255):e[n]=fs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jf=0;class Tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Wr(s[r].image)):o.push(Wr(s[r]))}else o=Wr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jf=0;class Ye extends Oi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=qn,s=qn,o=dn,r=Ii,a=Rn,c=ti,l=Ye.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Bi(),this.name="",this.source=new Tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=fu;Ye.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],_=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(f+1)/2,C=(u+1)/2,E=(h+p)/4,b=(d+v)/4,P=(_+m)/4;return x>S&&x>C?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=E/n,o=b/n):S>C?S<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),n=E/s,o=P/s):C<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),n=b/o,s=P/o),this.set(n,s,o,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-v)/y,this.z=(p-h)/y,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends $f{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Au extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const p=o[r+0],f=o[r+1],_=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(d!==v||c!==p||l!==f||h!==_){let m=1-a;const u=c*p+l*f+h*_+d*v,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),E=Math.atan2(C,u*y);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const S=a*y;if(c=c*m+p*S,l=l*m+f*S,h=h*m+_*S,d=d*m+v*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=o[r],p=o[r+1],f=o[r+2],_=o[r+3];return t[e]=a*_+h*d+c*f-l*p,t[e+1]=c*_+h*p+l*d-a*f,t[e+2]=l*_+h*f+a*p-c*d,t[e+3]=h*_-a*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(o/2),p=c(n/2),f=c(s/2),_=c(o/2);switch(r){case"XYZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"YZX":this._x=p*h*d+l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d-p*f*_;break;case"XZY":this._x=p*h*d-l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=r*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=o*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+c*l+r*d-a*h,this.y=n+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new I,Al=new Un;class zi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Mn):Mn.fromBufferAttribute(o,r),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),yo.subVectors(this.max,Is),Wi.subVectors(t.a,Is),Xi.subVectors(t.b,Is),Yi.subVectors(t.c,Is),ri.subVectors(Xi,Wi),ai.subVectors(Yi,Xi),wi.subVectors(Wi,Yi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-wi.z,wi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,wi.z,0,-wi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-wi.y,wi.x,0];return!Yr(e,Wi,Xi,Yi,yo)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,Wi,Xi,Yi,yo))?!1:(So.crossVectors(ri,ai),e=[So.x,So.y,So.z],Yr(e,Wi,Xi,Yi,yo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],Mn=new I,Mo=new zi,Wi=new I,Xi=new I,Yi=new I,ri=new I,ai=new I,wi=new I,Is=new I,yo=new I,So=new I,Ei=new I;function Yr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ei.fromArray(i,o);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tp=new zi,Ds=new I,qr=new I;class co{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(qr)),this.expandByPoint(Ds.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new I,Kr=new I,wo=new I,ci=new I,Zr=new I,Eo=new I,jr=new I;class Ru{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Kr.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Kr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(wo),a=ci.dot(this.direction),c=-ci.dot(wo),l=ci.lengthSq(),h=Math.abs(1-r*r);let d,p,f,_;if(h>0)if(d=r*c-a,p=r*a-c,_=o*h,d>=0)if(p>=-_)if(p<=_){const v=1/h;d*=v,p*=v,f=d*(d+r*p+2*a)+p*(r*d+p+2*c)+l}else p=o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p=-o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-r*o+a)),p=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-o,-c),o),f=p*(p+2*c)+l):(d=Math.max(0,-(r*o+a)),p=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+p*(p+2*c)+l);else p=r>0?-o:o,d=Math.max(0,-(r*p+a)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Kr).addScaledVector(wo,p),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(o=(t.min.y-p.y)*h,r=(t.max.y-p.y)*h):(o=(t.max.y-p.y)*h,r=(t.min.y-p.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,o){Zr.subVectors(e,t),Eo.subVectors(n,t),jr.crossVectors(Zr,Eo);let r=this.direction.dot(jr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ci.subVectors(this.origin,t);const c=a*this.direction.dot(Eo.crossVectors(ci,Eo));if(c<0)return null;const l=a*this.direction.dot(Zr.cross(ci));if(l<0||c+l>r)return null;const h=-a*ci.dot(jr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,o,r,a,c,l,h,d,p,f,_,v,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,d,p,f,_,v,m)}set(t,e,n,s,o,r,a,c,l,h,d,p,f,_,v,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=o,u[5]=r,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),o=1/qi.setFromMatrixColumn(t,1).length(),r=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const p=r*h,f=r*d,_=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=p-v*l,e[9]=-a*c,e[2]=v-p*l,e[6]=_+f*l,e[10]=r*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,_=l*h,v=l*d;e[0]=p+v*a,e[4]=_*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-_,e[6]=v+p*a,e[10]=r*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,_=l*h,v=l*d;e[0]=p-v*a,e[4]=-r*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=r*h,e[9]=v-p*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const p=r*h,f=r*d,_=a*h,v=a*d;e[0]=c*h,e[4]=_*l-f,e[8]=p*l+v,e[1]=c*d,e[5]=v*l+p,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const p=r*c,f=r*l,_=a*c,v=a*l;e[0]=c*h,e[4]=v-p*d,e[8]=_*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+_,e[10]=p-v*d}else if(t.order==="XZY"){const p=r*c,f=r*l,_=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+v,e[5]=r*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),li.crossVectors(n,cn),li.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),li.crossVectors(n,cn)),li.normalize(),bo.crossVectors(cn,li),s[0]=li.x,s[4]=bo.x,s[8]=cn.x,s[1]=li.y,s[5]=bo.y,s[9]=cn.y,s[2]=li.z,s[6]=bo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],_=n[2],v=n[6],m=n[10],u=n[14],y=n[3],x=n[7],S=n[11],C=n[15],E=s[0],b=s[4],P=s[8],U=s[12],M=s[1],w=s[5],D=s[9],k=s[13],W=s[2],$=s[6],q=s[10],tt=s[14],B=s[3],lt=s[7],nt=s[11],mt=s[15];return o[0]=r*E+a*M+c*W+l*B,o[4]=r*b+a*w+c*$+l*lt,o[8]=r*P+a*D+c*q+l*nt,o[12]=r*U+a*k+c*tt+l*mt,o[1]=h*E+d*M+p*W+f*B,o[5]=h*b+d*w+p*$+f*lt,o[9]=h*P+d*D+p*q+f*nt,o[13]=h*U+d*k+p*tt+f*mt,o[2]=_*E+v*M+m*W+u*B,o[6]=_*b+v*w+m*$+u*lt,o[10]=_*P+v*D+m*q+u*nt,o[14]=_*U+v*k+m*tt+u*mt,o[3]=y*E+x*M+S*W+C*B,o[7]=y*b+x*w+S*$+C*lt,o[11]=y*P+x*D+S*q+C*nt,o[15]=y*U+x*k+S*tt+C*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],_=t[3],v=t[7],m=t[11],u=t[15];return _*(+o*c*d-s*l*d-o*a*p+n*l*p+s*a*f-n*c*f)+v*(+e*c*f-e*l*p+o*r*p-s*r*f+s*l*h-o*c*h)+m*(+e*l*d-e*a*f-o*r*d+n*r*f+o*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*p+s*r*d-n*r*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],_=t[12],v=t[13],m=t[14],u=t[15],y=d*m*l-v*p*l+v*c*f-a*m*f-d*c*u+a*p*u,x=_*p*l-h*m*l-_*c*f+r*m*f+h*c*u-r*p*u,S=h*v*l-_*d*l+_*a*f-r*v*f-h*a*u+r*d*u,C=_*d*c-h*v*c-_*a*p+r*v*p+h*a*m-r*d*m,E=e*y+n*x+s*S+o*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=y*b,t[1]=(v*p*o-d*m*o-v*s*f+n*m*f+d*s*u-n*p*u)*b,t[2]=(a*m*o-v*c*o+v*s*l-n*m*l-a*s*u+n*c*u)*b,t[3]=(d*c*o-a*p*o-d*s*l+n*p*l+a*s*f-n*c*f)*b,t[4]=x*b,t[5]=(h*m*o-_*p*o+_*s*f-e*m*f-h*s*u+e*p*u)*b,t[6]=(_*c*o-r*m*o-_*s*l+e*m*l+r*s*u-e*c*u)*b,t[7]=(r*p*o-h*c*o+h*s*l-e*p*l-r*s*f+e*c*f)*b,t[8]=S*b,t[9]=(_*d*o-h*v*o-_*n*f+e*v*f+h*n*u-e*d*u)*b,t[10]=(r*v*o-_*a*o+_*n*l-e*v*l-r*n*u+e*a*u)*b,t[11]=(h*a*o-r*d*o-h*n*l+e*d*l+r*n*f-e*a*f)*b,t[12]=C*b,t[13]=(h*v*s-_*d*s+_*n*p-e*v*p-h*n*m+e*d*m)*b,t[14]=(_*a*s-r*v*s-_*n*c+e*v*c+r*n*m-e*a*m)*b,t[15]=(r*d*s-h*a*s+h*n*c-e*d*c-r*n*p+e*a*p)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,d=a+a,p=o*l,f=o*h,_=o*d,v=r*h,m=r*d,u=a*d,y=c*l,x=c*h,S=c*d,C=n.x,E=n.y,b=n.z;return s[0]=(1-(v+u))*C,s[1]=(f+S)*C,s[2]=(_-x)*C,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(p+u))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+x)*b,s[9]=(m-y)*b,s[10]=(1-(p+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=qi.set(s[0],s[1],s[2]).length();const r=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/o,h=1/r,d=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Kn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let f,_;if(a===Kn)f=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===ur)f=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Kn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(r-o),p=(e+t)*l,f=(n+s)*h;let _,v;if(a===Kn)_=(r+o)*d,v=-2*d;else if(a===ur)_=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new I,yn=new Me,ep=new I(0,0,0),np=new I(1,1,1),li=new I,bo=new I,cn=new I,Rl=new Me,Cl=new Un;class Nn{constructor(t=0,e=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const Pl=new I,Ki=new Un,kn=new Me,To=new I,Us=new I,sp=new I,op=new Un,Ll=new I(1,0,0),Il=new I(0,1,0),Dl=new I(0,0,1),Ul={type:"added"},rp={type:"removed"},Zi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Ae extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new Nn,n=new Un,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ee}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Us,To,this.up):kn.lookAt(To,Us,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(kn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),p=r(t.skeletons),f=r(t.animations),_=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,Gn=new I,$r=new I,Hn=new I,ji=new I,Ji=new I,Nl=new I,Qr=new I,ta=new I,ea=new I,na=new xe,ia=new xe,sa=new xe;class Tn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Sn.subVectors(s,e),Gn.subVectors(n,e),$r.subVectors(t,e);const r=Sn.dot(Sn),a=Sn.dot(Gn),c=Sn.dot($r),l=Gn.dot(Gn),h=Gn.dot($r),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const p=1/d,f=(l*c-a*h)*p,_=(r*h-a*c)*p;return o.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Hn.x),c.addScaledVector(r,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),sa.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(na,o.x),r.addScaledVector(ia,o.y),r.addScaledVector(sa,o.z),r}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Gn.subVectors(t,e),Sn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ji.subVectors(s,n),Ji.subVectors(o,n),Qr.subVectors(t,n);const c=ji.dot(Qr),l=Ji.dot(Qr);if(c<=0&&l<=0)return e.copy(n);ta.subVectors(t,s);const h=ji.dot(ta),d=Ji.dot(ta);if(h>=0&&d<=h)return e.copy(s);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ji,r);ea.subVectors(t,o);const f=ji.dot(ea),_=Ji.dot(ea);if(_>=0&&f<=_)return e.copy(o);const v=f*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ji,a);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Nl.subVectors(o,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Nl,a);const u=1/(m+v+p);return r=v*u,a=p*u,e.copy(n).addScaledVector(ji,r).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=kc(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=oa(r,o,t+1/3),this.g=oa(r,o,t),this.b=oa(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ue.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ue(Ve.r*255,0,255))*65536+Math.round(Ue(Ve.g*255,0,255))*256+Math.round(Ue(Ve.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,o=Ve.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case n:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-n)/d+2;break;case o:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=En){ue.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Ao);const n=Ws(hi.h,Ao.h,e),s=Ws(hi.s,Ao.s,e),o=Ws(hi.l,Ao.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new qt;qt.NAMES=Pu;let ap=0;class lo extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=us,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends lo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new I,Ro=new ot;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ro.fromBufferAttribute(this,e),Ro.applyMatrix3(t),this.setXY(e,Ro.x,Ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=os(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=os(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=os(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),o=qe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}}class Lu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Iu extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cp=0;const pn=new Me,ra=new Ae,$i=new I,ln=new zi,Ns=new zi,Oe=new I;class Be extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Iu:Lu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ee().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ln.min,Ns.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,Ns.max),ln.expandByPoint(Oe)):(ln.expandByPoint(Ns.min),ln.expandByPoint(Ns.max))}ln.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Oe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Oe.add($i)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,d=new I,p=new ot,f=new ot,_=new ot,v=new I,m=new I;function u(P,U,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,M),p.fromBufferAttribute(o,P),f.fromBufferAttribute(o,U),_.fromBufferAttribute(o,M),h.sub(l),d.sub(l),f.sub(p),_.sub(p);const w=1/(f.x*_.y-_.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(w),a[P].add(v),a[U].add(v),a[M].add(v),c[P].add(m),c[U].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,U=y.length;P<U;++P){const M=y[P],w=M.start,D=M.count;for(let k=w,W=w+D;k<W;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new I,S=new I,C=new I,E=new I;function b(P){C.fromBufferAttribute(s,P),E.copy(C);const U=a[P];x.copy(U),x.sub(C.multiplyScalar(C.dot(U))).normalize(),S.crossVectors(E,U);const w=S.dot(c[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,U=y.length;P<U;++P){const M=y[P],w=M.start,D=M.count;for(let k=w,W=w+D;k<W;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,p=new l.constructor(c.length*h);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let u=0;u<h;u++)p[_++]=l[f++]}return new en(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],d=o[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new Me,bi=new Ru,Co=new co,Ol=new I,Po=new I,Lo=new I,Io=new I,aa=new I,Do=new I,Bl=new I,Uo=new I;class Z extends Ae{constructor(t=new Be,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Do.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(aa.fromBufferAttribute(d,t),r?Do.addScaledVector(aa,h):Do.addScaledVector(aa.sub(e),h))}e.add(Do)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(o),bi.copy(t.ray).recast(t.near),!(Co.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Co,Ol)===null||bi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(o).invert(),bi.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,p=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,C=x;S<C;S+=3){const E=a.getX(S),b=a.getX(S+1),P=a.getX(S+2);s=No(this,u,t,n,l,h,d,E,b,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const y=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=No(this,r,t,n,l,h,d,y,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const m=p[_],u=r[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,C=x;S<C;S+=3){const E=S,b=S+1,P=S+2;s=No(this,u,t,n,l,h,d,E,b,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,u=v;m<u;m+=3){const y=m,x=m+1,S=m+2;s=No(this,r,t,n,l,h,d,y,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lp(i,t,e,n,s,o,r,a){let c;if(t.side===Ge?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===Pn,a),c===null)return null;Uo.copy(a),Uo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:i}}function No(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,Po),i.getVertexPosition(c,Lo),i.getVertexPosition(l,Io);const h=lp(i,t,e,n,Po,Lo,Io,Bl);if(h){const d=new I;Tn.getBarycoord(Bl,Po,Lo,Io,d),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,d,new ot)),o&&(h.uv1=Tn.getInterpolatedAttribute(o,a,c,l,d,new ot)),r&&(h.normal=Tn.getInterpolatedAttribute(r,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new I,materialIndex:0};Tn.getNormal(Po,Lo,Io,p.normal),h.face=p,h.barycoord=d}return h}class Et extends Be{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,r,o,0),_("z","y","x",1,-1,n,e,-t,r,o,1),_("x","z","y",1,1,t,n,e,s,r,2),_("x","z","y",1,-1,t,n,-e,s,r,3),_("x","y","z",1,-1,t,e,n,s,o,4),_("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function _(v,m,u,y,x,S,C,E,b,P,U){const M=S/b,w=C/P,D=S/2,k=C/2,W=E/2,$=b+1,q=P+1;let tt=0,B=0;const lt=new I;for(let nt=0;nt<q;nt++){const mt=nt*w-k;for(let zt=0;zt<$;zt++){const Vt=zt*M-D;lt[v]=Vt*y,lt[m]=mt*x,lt[u]=W,l.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[u]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),d.push(zt/b),d.push(1-nt/P),tt+=1}}for(let nt=0;nt<P;nt++)for(let mt=0;mt<b;mt++){const zt=p+mt+$*nt,Vt=p+mt+$*(nt+1),z=p+(mt+1)+$*(nt+1),K=p+(mt+1)+$*nt;c.push(zt,Vt,K),c.push(Vt,z,K),B+=6}a.addGroup(f,B,U),f+=B,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function hp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const $s={clone:Ss,merge:Ze};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends lo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,zl=new ot,kl=new ot;class un extends Uu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,zl,kl),e.subVectors(kl,zl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,ts=1;class fp extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Qi,ts,t,e);s.layers=this.layers,this.add(s);const o=new un(Qi,ts,t,e);o.layers=this.layers,this.add(o);const r=new un(Qi,ts,t,e);r.layers=this.layers,this.add(r);const a=new un(Qi,ts,t,e);a.layers=this.layers,this.add(a);const c=new un(Qi,ts,t,e);c.layers=this.layers,this.add(c);const l=new un(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nu extends Ye{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pp extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),o=new je({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Zn});o.uniforms.tEquirect.value=e;const r=new Z(s,o),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=dn),new fp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const ca=new I,mp=new I,gp=new ee;class mi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gp.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new co,Fo=new I;class Gc{constructor(t=new mi,e=new mi,n=new mi,s=new mi,o=new mi,r=new mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],p=s[7],f=s[8],_=s[9],v=s[10],m=s[11],u=s[12],y=s[13],x=s[14],S=s[15];if(n[0].setComponents(c-o,p-l,m-f,S-u).normalize(),n[1].setComponents(c+o,p+l,m+f,S+u).normalize(),n[2].setComponents(c+r,p+h,m+_,S+y).normalize(),n[3].setComponents(c-r,p-h,m-_,S-y).normalize(),n[4].setComponents(c-a,p-d,m-v,S-x).normalize(),e===Kn)n[5].setComponents(c+a,p+d,m+v,S+x).normalize();else if(e===ur)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fo.x=s.normal.x>0?t.max.x:t.min.x,Fo.y=s.normal.y>0?t.max.y:t.min.y,Fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function _p(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<d.length;f++){const _=d[p],v=d[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let f=0,_=d.length;f<_;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class be extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,p=e/c,f=[],_=[],v=[],m=[];for(let u=0;u<h;u++){const y=u*p-r;for(let x=0;x<l;x++){const S=x*d-o;_.push(S,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){const x=y+l*u,S=y+l*(u+1),C=y+1+l*(u+1),E=y+1+l*u;f.push(x,S,E),f.push(S,C,E)}this.setIndex(f),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ep=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,Ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zp=`
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
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Zm=`uniform float rotation;
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
}`,jm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:Mp,alphamap_pars_fragment:yp,alphatest_fragment:Sp,alphatest_pars_fragment:wp,aomap_fragment:Ep,aomap_pars_fragment:bp,batching_pars_vertex:Tp,batching_vertex:Ap,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Lp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Gp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:Yp,emissivemap_pars_fragment:qp,colorspace_fragment:Kp,colorspace_pars_fragment:Zp,envmap_fragment:jp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:$p,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:c0,lights_pars_begin:l0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:v0,lights_fragment_end:x0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:w0,map_fragment:E0,map_pars_fragment:b0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphinstance_vertex:P0,morphcolor_vertex:L0,morphnormal_vertex:I0,morphtarget_pars_vertex:D0,morphtarget_vertex:U0,normal_fragment_begin:N0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:Y0,premultiplied_alpha_fragment:q0,project_vertex:K0,dithering_fragment:Z0,dithering_pars_fragment:j0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:om,skinnormal_vertex:rm,specularmap_fragment:am,specularmap_pars_fragment:cm,tonemapping_fragment:lm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:vm,backgroundCube_vert:xm,backgroundCube_frag:Mm,cube_vert:ym,cube_frag:Sm,depth_vert:wm,depth_frag:Em,distanceRGBA_vert:bm,distanceRGBA_frag:Tm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Lm,meshbasic_frag:Im,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Bm,meshphong_vert:zm,meshphong_frag:km,meshphysical_vert:Gm,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Wm,points_vert:Xm,points_frag:Ym,shadow_vert:qm,shadow_frag:Km,sprite_vert:Zm,sprite_frag:jm},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},In={basic:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ze([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ze([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ze([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ze([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ze([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ze([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ze([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ze([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ze([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ze([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};In.physical={uniforms:Ze([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Oo={r:0,b:0,g:0},Ai=new Nn,Jm=new Me;function $m(i,t,e,n,s,o,r){const a=new qt(0);let c=o===!0?0:1,l,h,d=null,p=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function v(y){let x=!1;const S=_(y);S===null?u(a,c):S&&S.isColor&&(u(S,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===yr)?(h===void 0&&(h=new Z(new Et(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ss(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Ai)),h.material.toneMapped=ue.getTransfer(S.colorSpace)!==ye,(d!==S||p!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,p=S.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Z(new be(2,2),new je({name:"BackgroundMaterial",uniforms:Ss(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==ye,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,x){y.getRGB(Oo,Du(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(a,c)},render:v,addToRenderList:m}}function Qm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let o=s,r=!1;function a(M,w,D,k,W){let $=!1;const q=d(k,D,w);o!==q&&(o=q,l(o.object)),$=f(M,k,D,W),$&&_(M,k,D,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,S(M,w,D,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,w,D){const k=D.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let $=W[w.id];$===void 0&&($={},W[w.id]=$);let q=$[k];return q===void 0&&(q=p(c()),$[k]=q),q}function p(M){const w=[],D=[],k=[];for(let W=0;W<e;W++)w[W]=0,D[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:D,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,w,D,k){const W=o.attributes,$=w.attributes;let q=0;const tt=D.getAttributes();for(const B in tt)if(tt[B].location>=0){const nt=W[B];let mt=$[B];if(mt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;q++}return o.attributesNum!==q||o.index!==k}function _(M,w,D,k){const W={},$=w.attributes;let q=0;const tt=D.getAttributes();for(const B in tt)if(tt[B].location>=0){let nt=$[B];nt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));const mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),W[B]=mt,q++}o.attributes=W,o.attributesNum=q,o.index=k}function v(){const M=o.newAttributes;for(let w=0,D=M.length;w<D;w++)M[w]=0}function m(M){u(M,0)}function u(M,w){const D=o.newAttributes,k=o.enabledAttributes,W=o.attributeDivisors;D[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),W[M]!==w&&(i.vertexAttribDivisor(M,w),W[M]=w)}function y(){const M=o.newAttributes,w=o.enabledAttributes;for(let D=0,k=w.length;D<k;D++)w[D]!==M[D]&&(i.disableVertexAttribArray(D),w[D]=0)}function x(M,w,D,k,W,$,q){q===!0?i.vertexAttribIPointer(M,w,D,W,$):i.vertexAttribPointer(M,w,D,k,W,$)}function S(M,w,D,k){v();const W=k.attributes,$=D.getAttributes(),q=w.defaultAttributeValues;for(const tt in $){const B=$[tt];if(B.location>=0){let lt=W[tt];if(lt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const nt=lt.normalized,mt=lt.itemSize,zt=t.get(lt);if(zt===void 0)continue;const Vt=zt.buffer,z=zt.type,K=zt.bytesPerElement,ft=z===i.INT||z===i.UNSIGNED_INT||lt.gpuType===Lc;if(lt.isInterleavedBufferAttribute){const X=lt.data,pt=X.stride,ut=lt.offset;if(X.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)u(B.location+Mt,X.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)m(B.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let Mt=0;Mt<B.locationSize;Mt++)x(B.location+Mt,mt/B.locationSize,z,nt,pt*K,(ut+mt/B.locationSize*Mt)*K,ft)}else{if(lt.isInstancedBufferAttribute){for(let X=0;X<B.locationSize;X++)u(B.location+X,lt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let X=0;X<B.locationSize;X++)m(B.location+X);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let X=0;X<B.locationSize;X++)x(B.location+X,mt/B.locationSize,z,nt,mt*K,mt/B.locationSize*X*K,ft)}}else if(q!==void 0){const nt=q[tt];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(B.location,nt);break;case 3:i.vertexAttrib3fv(B.location,nt);break;case 4:i.vertexAttrib4fv(B.location,nt);break;default:i.vertexAttrib1fv(B.location,nt)}}}}y()}function C(){P();for(const M in n){const w=n[M];for(const D in w){const k=w[D];for(const W in k)h(k[W].object),delete k[W];delete w[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const D in w){const k=w[D];for(const W in k)h(k[W].object),delete k[W];delete w[D]}delete n[M.id]}function b(M){for(const w in n){const D=n[w];if(D[M.id]===void 0)continue;const k=D[M.id];for(const W in k)h(k[W].object),delete k[W];delete D[M.id]}}function P(){U(),r=!0,o!==s&&(o=s,l(o.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function tg(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];e.update(f,n,1)}function c(l,h,d,p){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];for(let v=0;v<p.length;v++)e.update(_,n,p[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eg(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==Rn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ti&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Dn&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:E}}function ng(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new mi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||s;return s=p,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||o&&!m)o?h(null):l();else{const y=o?0:n,x=y*4;let S=u.clippingState||null;c.value=S,S=h(_,p,x,f);for(let C=0;C!==x;++C)S[C]=e[C];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const u=f+v*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=f;x!==v;++x,S+=4)r.copy(d[x]).applyMatrix4(y,a),r.normal.toArray(m,S),m[S+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function ig(i){let t=new WeakMap;function e(r,a){return a===ar?r.mapping=vs:a===Wa&&(r.mapping=xs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ar||a===Wa)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new pp(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Hc extends Uu{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Gl=[.125,.215,.35,.446,.526,.582],Li=20,la=new Hc,Hl=new qt;let ha=null,ua=0,da=0,fa=!1;const Ci=(1+Math.sqrt(5))/2,es=1/Ci,Vl=[new I(-Ci,es,0),new I(Ci,es,0),new I(-es,0,Ci),new I(es,0,Ci),new I(0,Ci,-es),new I(0,Ci,es),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,ua,da),this._renderer.xr.enabled=fa,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:jn,format:Rn,colorSpace:Mi,depthBuffer:!1},s=Xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sg(o)),this._blurMaterial=og(o,t,e)}return s}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Hl),h.toneMapping=vi,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new Z(new Et,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Hl),v=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const x=this._cubeSize;Bo(s,y*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vs||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Bo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,la)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Vl[(s-o-1)%Vl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Z(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Li-1),v=o/_,m=isFinite(o)?1+Math.floor(h*v):Li;m>Li&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const u=[];let y=0;for(let b=0;b<Li;++b){const P=b/v,U=Math.exp(-P*P/2);u.push(U),b===0?y+=U:b<m&&(y+=2*U)}for(let b=0;b<u.length;b++)u[b]=u[b]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-n;const S=this._sizeLods[s],C=3*S*(s>x-cs?s-x+cs:0),E=4*(this._cubeSize-S);Bo(e,C,E,3*S,2*S),c.setRenderTarget(e),c.render(d,la)}}function sg(i){const t=[],e=[],n=[];let s=i;const o=i-cs+1+Gl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-cs?c=Gl[r-i+cs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,v=3,m=2,u=1,y=new Float32Array(v*_*f),x=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,P=E>2?0:-1,U=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];y.set(U,v*_*E),x.set(p,m*_*E);const M=[E,E,E,E,E,E];S.set(M,u*_*E)}const C=new Be;C.setAttribute("position",new en(y,v)),C.setAttribute("uv",new en(x,m)),C.setAttribute("faceIndex",new en(S,u)),t.push(C),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xl(i,t,e){const n=new Cn(i,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function og(i,t,e){const n=new Float32Array(Li),s=new I(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Yl(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ql(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ar||c===Wa,h=c===vs||c===xs;if(l||h){let d=t.get(a);const p=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Wl(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Wl(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function ag(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cg(i,t,e,n){const s={},o=new WeakMap;function r(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}p.removeEventListener("dispose",r),delete s[p.id];const f=o.get(p);f&&(t.remove(f),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,S=y.length;x<S;x+=3){const C=y[x+0],E=y[x+1],b=y[x+2];p.push(C,E,E,b,b,C)}}else if(_!==void 0){const y=_.array;v=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const C=x+0,E=x+1,b=x+2;p.push(C,E,E,b,b,C)}}else return;const m=new(bu(p)?Iu:Lu)(p,1);m.version=v;const u=o.get(d);u&&t.remove(u),o.set(d,m)}function h(d){const p=o.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function lg(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function c(p,f){i.drawElements(n,f,o,p*r),e.update(f,n,1)}function l(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,o,p*r,_),e.update(f,n,_))}function h(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function d(p,f,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/r,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,p,0,v,0,_);let u=0;for(let y=0;y<_;y++)u+=f[y];for(let y=0;y<v.length;y++)e.update(u,n,v[y])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){const n=new WeakMap,s=new xe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*E*4*d),P=new Au(b,C,E,d);P.type=Dn,P.needsUpdate=!0;const U=S*4;for(let w=0;w<d;w++){const D=u[w],k=y[w],W=x[w],$=C*E*4*w;for(let q=0;q<D.count;q++){const tt=q*U;_===!0&&(s.fromBufferAttribute(D,q),b[$+tt+0]=s.x,b[$+tt+1]=s.y,b[$+tt+2]=s.z,b[$+tt+3]=0),v===!0&&(s.fromBufferAttribute(k,q),b[$+tt+4]=s.x,b[$+tt+5]=s.y,b[$+tt+6]=s.z,b[$+tt+7]=0),m===!0&&(s.fromBufferAttribute(W,q),b[$+tt+8]=s.x,b[$+tt+9]=s.y,b[$+tt+10]=s.z,b[$+tt+11]=W.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new ot(C,E)},n.set(a,p),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function dg(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ou extends Ye{constructor(t,e,n,s,o,r,a,c,l,h=ds){if(h!==ds&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Ui),n===void 0&&h===ys&&(n=Ms),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bu=new Ye,Kl=new Ou(1,1),zu=new Au,ku=new Qf,Gu=new Nu,Zl=[],jl=[],Jl=new Float32Array(16),$l=new Float32Array(9),Ql=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Zl[s];if(o===void 0&&(o=new Float32Array(s),Zl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ql.set(n),i.uniformMatrix2fv(this.addr,!1,Ql),Fe(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Fe(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),Fe(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=Eu,o=Kl):o=Bu,e.setTexture2D(t||o,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ku,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zu,s)}function Ig(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return Eg;case 36294:return bg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Gg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function Yg(i,t){i.uniform3uiv(this.addr,t)}function qg(i,t){i.uniform4uiv(this.addr,t)}function Kg(i,t,e){const n=this.cache,s=t.length,o=wr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Bu,o[r])}function Zg(i,t,e){const n=this.cache,s=t.length,o=wr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ku,o[r])}function jg(i,t,e){const n=this.cache,s=t.length,o=wr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Gu,o[r])}function Jg(i,t,e){const n=this.cache,s=t.length,o=wr(e,s);Ne(n,o)||(i.uniform1iv(this.addr,o),Fe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||zu,o[r])}function $g(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return Yg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Jg}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class t_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class e_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function th(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){const n=i.name,s=n.length;for(pa.lastIndex=0;;){const o=pa.exec(n),r=pa.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){th(e,l===void 0?new Qg(a,i,t):new t_(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new e_(a),th(e,d)),e=d}}}class nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);n_(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function eh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i_=37297;let s_=0;function o_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function r_(i){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i);let n;switch(t===e?n="":t===hr&&e===lr?n="LinearDisplayP3ToLinearSRGB":t===lr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mi:case Sr:return[n,"LinearTransferOETF"];case En:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function nh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+o_(i.getShaderSource(t),r)}else return s}function a_(i,t){const e=r_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function c_(i,t){let e;switch(t){case cu:e="Linear";break;case lu:e="Reinhard";break;case hu:e="Cineon";break;case Pc:e="ACESFilmic";break;case uu:e="AgX";break;case du:e="Neutral";break;case gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zo=new I;function l_(){ue.getLuminanceCoefficients(zo);const i=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function u_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Gs(i){return i!==""}function ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(f_,m_)}const p_=new Map;function m_(i,t){let e=te[t];if(e===void 0){const n=p_.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(g_,__)}function __(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function rh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function v_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function x_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:t="ENVMAP_BLENDING_MULTIPLY";break;case pf:t="ENVMAP_BLENDING_MIX";break;case mf:t="ENVMAP_BLENDING_ADD";break}return t}function S_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function w_(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=v_(e),l=x_(e),h=M_(e),d=y_(e),p=S_(e),f=h_(e),_=u_(o),v=s.createProgram();let m,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Gs).join(`
`),u.length>0&&(u+=`
`)):(m=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),u=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?te.tonemapping_pars_fragment:"",e.toneMapping!==vi?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),l_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),r=vc(r),r=ih(r,e),r=sh(r,e),a=vc(a),a=ih(a,e),a=sh(a,e),r=oh(r),a=oh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=y+m+r,S=y+u+a,C=eh(s,s.VERTEX_SHADER,x),E=eh(s,s.FRAGMENT_SHADER,S);s.attachShader(v,C),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(w){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(C).trim(),W=s.getShaderInfoLog(E).trim();let $=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{const tt=nh(s,C,"vertex"),B=nh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+D+`
`+tt+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||W==="")&&(q=!1);q&&(w.diagnostics={runnable:$,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:u}})}s.deleteShader(C),s.deleteShader(E),P=new nr(s,v),U=d_(s,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let U;this.getAttributes=function(){return U===void 0&&b(this),U};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,i_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let E_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T_(t),e.set(t,n)),n}}class T_{constructor(t){this.id=E_++,this.code=t,this.usedTimes=0}}function A_(i,t,e,n,s,o,r){const a=new Cu,c=new b_,l=new Set,h=[],d=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function u(M,w,D,k,W){const $=k.fog,q=W.geometry,tt=M.isMeshStandardMaterial?k.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),lt=B&&B.mapping===yr?B.image.height:null,nt=v[M.type];M.precision!==null&&(_=s.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=mt!==void 0?mt.length:0;let Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let z,K,ft,X;if(nt){const $e=In[nt];z=$e.vertexShader,K=$e.fragmentShader}else z=M.vertexShader,K=M.fragmentShader,c.update(M),ft=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);const pt=i.getRenderTarget(),ut=W.isInstancedMesh===!0,Mt=W.isBatchedMesh===!0,Xt=!!M.map,Dt=!!M.matcap,R=!!B,Lt=!!M.aoMap,Pt=!!M.lightMap,Tt=!!M.bumpMap,At=!!M.normalMap,$t=!!M.displacementMap,Ut=!!M.emissiveMap,A=!!M.metalnessMap,g=!!M.roughnessMap,L=M.anisotropy>0,F=M.clearcoat>0,Y=M.dispersion>0,G=M.iridescence>0,ht=M.sheen>0,rt=M.transmission>0,ct=L&&!!M.anisotropyMap,Rt=F&&!!M.clearcoatMap,it=F&&!!M.clearcoatNormalMap,dt=F&&!!M.clearcoatRoughnessMap,Nt=G&&!!M.iridescenceMap,It=G&&!!M.iridescenceThicknessMap,yt=ht&&!!M.sheenColorMap,Qt=ht&&!!M.sheenRoughnessMap,gt=!!M.specularMap,Kt=!!M.specularColorMap,N=!!M.specularIntensityMap,vt=rt&&!!M.transmissionMap,Q=rt&&!!M.thicknessMap,at=!!M.gradientMap,wt=!!M.alphaMap,bt=M.alphaTest>0,ne=!!M.alphaHash,Pe=!!M.extensions;let Je=vi;M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Je=i.toneMapping);const he={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:K,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:Mt,batchingColor:Mt&&W._colorsTexture!==null,instancing:ut,instancingColor:ut&&W.instanceColor!==null,instancingMorph:ut&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Mi,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:Dt,envMap:R,envMapMode:R&&B.mapping,envMapCubeUVHeight:lt,aoMap:Lt,lightMap:Pt,bumpMap:Tt,normalMap:At,displacementMap:f&&$t,emissiveMap:Ut,normalMapObjectSpace:At&&M.normalMapType===Mf,normalMapTangentSpace:At&&M.normalMapType===wu,metalnessMap:A,roughnessMap:g,anisotropy:L,anisotropyMap:ct,clearcoat:F,clearcoatMap:Rt,clearcoatNormalMap:it,clearcoatRoughnessMap:dt,dispersion:Y,iridescence:G,iridescenceMap:Nt,iridescenceThicknessMap:It,sheen:ht,sheenColorMap:yt,sheenRoughnessMap:Qt,specularMap:gt,specularColorMap:Kt,specularIntensityMap:N,transmission:rt,transmissionMap:vt,thicknessMap:Q,gradientMap:at,opaque:M.transparent===!1&&M.blending===us&&M.alphaToCoverage===!1,alphaMap:wt,alphaTest:bt,alphaHash:ne,combine:M.combine,mapUv:Xt&&m(M.map.channel),aoMapUv:Lt&&m(M.aoMap.channel),lightMapUv:Pt&&m(M.lightMap.channel),bumpMapUv:Tt&&m(M.bumpMap.channel),normalMapUv:At&&m(M.normalMap.channel),displacementMapUv:$t&&m(M.displacementMap.channel),emissiveMapUv:Ut&&m(M.emissiveMap.channel),metalnessMapUv:A&&m(M.metalnessMap.channel),roughnessMapUv:g&&m(M.roughnessMap.channel),anisotropyMapUv:ct&&m(M.anisotropyMap.channel),clearcoatMapUv:Rt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&m(M.sheenRoughnessMap.channel),specularMapUv:gt&&m(M.specularMap.channel),specularColorMapUv:Kt&&m(M.specularColorMap.channel),specularIntensityMapUv:N&&m(M.specularIntensityMap.channel),transmissionMapUv:vt&&m(M.transmissionMap.channel),thicknessMapUv:Q&&m(M.thicknessMap.channel),alphaMapUv:wt&&m(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(At||L),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!q.attributes.uv&&(Xt||wt),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===de,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function y(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)w.push(D),w.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(w,M),S(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),M.push(a.mask)}function C(M){const w=v[M.type];let D;if(w){const k=In[w];D=$s.clone(k.uniforms)}else D=M.uniforms;return D}function E(M,w){let D;for(let k=0,W=h.length;k<W;k++){const $=h[k];if($.cacheKey===w){D=$,++D.usedTimes;break}}return D===void 0&&(D=new w_(i,w,M,o),h.push(D)),D}function b(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function P(M){c.remove(M)}function U(){c.dispose()}return{getParameters:u,getProgramCacheKey:y,getUniforms:C,acquireProgram:E,releaseProgram:b,releaseShaderCache:P,programs:h,dispose:U}}function R_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ah(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,p,f,_,v,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function a(d,p,f,_,v,m){const u=r(d,p,f,_,v,m);f.transmission>0?n.push(u):f.transparent===!0?s.push(u):e.push(u)}function c(d,p,f,_,v,m){const u=r(d,p,f,_,v,m);f.transmission>0?n.unshift(u):f.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||C_),n.length>1&&n.sort(p||ah),s.length>1&&s.sort(p||ah)}function h(){for(let d=t,p=i.length;d<p;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function P_(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new ch,i.set(n,[r])):s>=o.length?(r=new ch,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function I_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D_=0;function U_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){const t=new L_,e=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,o=new Me,r=new Me;function a(l){let h=0,d=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,v=0,m=0,u=0,y=0,x=0,S=0,C=0,E=0,b=0;l.sort(U_);for(let U=0,M=l.length;U<M;U++){const w=l[U],D=w.color,k=w.intensity,W=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=D.r*k,d+=D.g*k,p+=D.b*k;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],k);b++}else if(w.isDirectionalLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const tt=w.shadow,B=e.get(w);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=w.shadow.matrix,y++}n.directional[f]=q,f++}else if(w.isSpotLight){const q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(D).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[v]=q;const tt=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,tt.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=tt.matrix,w.castShadow){const B=e.get(w);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=$,S++}v++}else if(w.isRectAreaLight){const q=t.get(w);q.color.copy(D).multiplyScalar(k),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=q,m++}else if(w.isPointLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const tt=w.shadow,B=e.get(w);B.shadowIntensity=tt.intensity,B.shadowBias=tt.bias,B.shadowNormalBias=tt.normalBias,B.shadowRadius=tt.radius,B.shadowMapSize=tt.mapSize,B.shadowCameraNear=tt.camera.near,B.shadowCameraFar=tt.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=w.shadow.matrix,x++}n.point[_]=q,_++}else if(w.isHemisphereLight){const q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(k),q.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[u]=q,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,P.directionalLength=f,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=b,n.version=D_++)}function c(l,h){let d=0,p=0,f=0,_=0,v=0;const m=h.matrixWorldInverse;for(let u=0,y=l.length;u<y;u++){const x=l[u];if(x.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function lh(i){const t=new N_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function F_(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new lh(i),t.set(s,[a])):o>=r.length?(a=new lh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class O_ extends lo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B_ extends lo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`;function G_(i,t,e){let n=new Gc;const s=new ot,o=new ot,r=new xe,a=new O_({depthPacking:xf}),c=new B_,l={},h=e.maxTextureSize,d={[Pn]:Ge,[Ge]:Pn,[de]:de},p=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:z_,fragmentShader:k_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Be;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Z(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let u=this.type;this.render=function(E,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const U=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Zn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=u!==Xn&&this.type===Xn,W=u===Xn&&this.type!==Xn;for(let $=0,q=E.length;$<q;$++){const tt=E[$],B=tt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const lt=B.getFrameExtents();if(s.multiply(lt),o.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/lt.x),s.x=o.x*lt.x,B.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/lt.y),s.y=o.y*lt.y,B.mapSize.y=o.y)),B.map===null||k===!0||W===!0){const mt=this.type!==Xn?{minFilter:tn,magFilter:tn}:{};B.map!==null&&B.map.dispose(),B.map=new Cn(s.x,s.y,mt),B.map.texture.name=tt.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const nt=B.getViewportCount();for(let mt=0;mt<nt;mt++){const zt=B.getViewport(mt);r.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),D.viewport(r),B.updateMatrices(tt,mt),n=B.getFrustum(),S(b,P,B.camera,tt,this.type)}B.isPointLightShadow!==!0&&this.type===Xn&&y(B,P),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(U,M,w)};function y(E,b){const P=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,P,p,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,P,f,v,null)}function x(E,b,P,U){let M=null;const w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,k=b.uuid;let W=l[D];W===void 0&&(W={},l[D]=W);let $=W[k];$===void 0&&($=M.clone(),W[k]=$,b.addEventListener("dispose",C)),M=$}if(M.visible=b.visible,M.wireframe=b.wireframe,U===Xn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=P}return M}function S(E,b,P,U,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Xn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const k=t.update(E),W=E.material;if(Array.isArray(W)){const $=k.groups;for(let q=0,tt=$.length;q<tt;q++){const B=$[q],lt=W[B.materialIndex];if(lt&&lt.visible){const nt=x(E,lt,U,M);E.onBeforeShadow(i,E,b,P,k,nt,B),i.renderBufferDirect(P,null,k,nt,E,B),E.onAfterShadow(i,E,b,P,k,nt,B)}}}else if(W.visible){const $=x(E,W,U,M);E.onBeforeShadow(i,E,b,P,k,$,null),i.renderBufferDirect(P,null,k,$,E,null),E.onAfterShadow(i,E,b,P,k,$,null)}}const D=E.children;for(let k=0,W=D.length;k<W;k++)S(D[k],b,P,U,M)}function C(E){E.target.removeEventListener("dispose",C);for(const P in l){const U=l[P],M=E.target.uuid;M in U&&(U[M].dispose(),delete U[M])}}}const H_={[Oa]:Ba,[za]:Ha,[ka]:Va,[_s]:Ga,[Ba]:Oa,[Ha]:za,[Va]:ka,[Ga]:_s};function V_(i){function t(){let N=!1;const vt=new xe;let Q=null;const at=new xe(0,0,0,0);return{setMask:function(wt){Q!==wt&&!N&&(i.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){N=wt},setClear:function(wt,bt,ne,Pe,Je){Je===!0&&(wt*=Pe,bt*=Pe,ne*=Pe),vt.set(wt,bt,ne,Pe),at.equals(vt)===!1&&(i.clearColor(wt,bt,ne,Pe),at.copy(vt))},reset:function(){N=!1,Q=null,at.set(-1,0,0,0)}}}function e(){let N=!1,vt=!1,Q=null,at=null,wt=null;return{setReversed:function(bt){vt=bt},setTest:function(bt){bt?ft(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(bt){Q!==bt&&!N&&(i.depthMask(bt),Q=bt)},setFunc:function(bt){if(vt&&(bt=H_[bt]),at!==bt){switch(bt){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=bt}},setLocked:function(bt){N=bt},setClear:function(bt){wt!==bt&&(i.clearDepth(bt),wt=bt)},reset:function(){N=!1,Q=null,at=null,wt=null}}}function n(){let N=!1,vt=null,Q=null,at=null,wt=null,bt=null,ne=null,Pe=null,Je=null;return{setTest:function(he){N||(he?ft(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(he){vt!==he&&!N&&(i.stencilMask(he),vt=he)},setFunc:function(he,$e,On){(Q!==he||at!==$e||wt!==On)&&(i.stencilFunc(he,$e,On),Q=he,at=$e,wt=On)},setOp:function(he,$e,On){(bt!==he||ne!==$e||Pe!==On)&&(i.stencilOp(he,$e,On),bt=he,ne=$e,Pe=On)},setLocked:function(he){N=he},setClear:function(he){Je!==he&&(i.clearStencil(he),Je=he)},reset:function(){N=!1,vt=null,Q=null,at=null,wt=null,bt=null,ne=null,Pe=null,Je=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],f=null,_=!1,v=null,m=null,u=null,y=null,x=null,S=null,C=null,E=new qt(0,0,0),b=0,P=!1,U=null,M=null,w=null,D=null,k=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=q>=1):tt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=q>=2);let B=null,lt={};const nt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),zt=new xe().fromArray(nt),Vt=new xe().fromArray(mt);function z(N,vt,Q,at){const wt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(N,bt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<Q;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(vt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return bt}const K={};K[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),ft(i.DEPTH_TEST),o.setFunc(_s),Pt(!1),Tt(_l),ft(i.CULL_FACE),R(Zn);function ft(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function X(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function pt(N,vt){return h[N]!==vt?(i.bindFramebuffer(N,vt),h[N]=vt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ut(N,vt){let Q=p,at=!1;if(N){Q=d.get(vt),Q===void 0&&(Q=[],d.set(vt,Q));const wt=N.textures;if(Q.length!==wt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,ne=wt.length;bt<ne;bt++)Q[bt]=i.COLOR_ATTACHMENT0+bt;Q.length=wt.length,at=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,at=!0);at&&i.drawBuffers(Q)}function Mt(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const Xt={[Pi]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[Jd]:i.FUNC_REVERSE_SUBTRACT};Xt[$d]=i.MIN,Xt[Qd]=i.MAX;const Dt={[tf]:i.ZERO,[ef]:i.ONE,[nf]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[af]:i.DST_COLOR,[of]:i.DST_ALPHA,[sf]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[hf]:i.CONSTANT_COLOR,[uf]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[ff]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,vt,Q,at,wt,bt,ne,Pe,Je,he){if(N===Zn){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),N!==Zd){if(N!==v||he!==P){if((m!==Pi||x!==Pi)&&(i.blendEquation(i.FUNC_ADD),m=Pi,x=Pi),he)switch(N){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,y=null,S=null,C=null,E.set(0,0,0),b=0,v=N,P=he}return}wt=wt||vt,bt=bt||Q,ne=ne||at,(vt!==m||wt!==x)&&(i.blendEquationSeparate(Xt[vt],Xt[wt]),m=vt,x=wt),(Q!==u||at!==y||bt!==S||ne!==C)&&(i.blendFuncSeparate(Dt[Q],Dt[at],Dt[bt],Dt[ne]),u=Q,y=at,S=bt,C=ne),(Pe.equals(E)===!1||Je!==b)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Je),E.copy(Pe),b=Je),v=N,P=!1}function Lt(N,vt){N.side===de?X(i.CULL_FACE):ft(i.CULL_FACE);let Q=N.side===Ge;vt&&(Q=!Q),Pt(Q),N.blending===us&&N.transparent===!1?R(Zn):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const at=N.stencilWrite;r.setTest(at),at&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function Tt(N){N!==qd?(ft(i.CULL_FACE),N!==M&&(N===_l?i.cullFace(i.BACK):N===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),M=N}function At(N){N!==w&&($&&i.lineWidth(N),w=N)}function $t(N,vt,Q){N?(ft(i.POLYGON_OFFSET_FILL),(D!==vt||k!==Q)&&(i.polygonOffset(vt,Q),D=vt,k=Q)):X(i.POLYGON_OFFSET_FILL)}function Ut(N){N?ft(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+W-1),B!==N&&(i.activeTexture(N),B=N)}function g(N,vt,Q){Q===void 0&&(B===null?Q=i.TEXTURE0+W-1:Q=B);let at=lt[Q];at===void 0&&(at={type:void 0,texture:void 0},lt[Q]=at),(at.type!==N||at.texture!==vt)&&(B!==Q&&(i.activeTexture(Q),B=Q),i.bindTexture(N,vt||K[N]),at.type=N,at.texture=vt)}function L(){const N=lt[B];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(N){zt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),zt.copy(N))}function yt(N){Vt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Vt.copy(N))}function Qt(N,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let at=Q.get(N);at===void 0&&(at=i.getUniformBlockIndex(vt,N.name),Q.set(N,at))}function gt(N,vt){const at=c.get(vt).get(N);a.get(vt)!==at&&(i.uniformBlockBinding(vt,at,N.__bindingPointIndex),a.set(vt,at))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},B=null,lt={},h={},d=new WeakMap,p=[],f=null,_=!1,v=null,m=null,u=null,y=null,x=null,S=null,C=null,E=new qt(0,0,0),b=0,P=!1,U=null,M=null,w=null,D=null,k=null,zt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:ft,disable:X,bindFramebuffer:pt,drawBuffers:ut,useProgram:Mt,setBlending:R,setMaterial:Lt,setFlipSided:Pt,setCullFace:Tt,setLineWidth:At,setPolygonOffset:$t,setScissorTest:Ut,activeTexture:A,bindTexture:g,unbindTexture:L,compressedTexImage2D:F,compressedTexImage3D:Y,texImage2D:dt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:gt,texStorage2D:Rt,texStorage3D:it,texSubImage2D:G,texSubImage3D:ht,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:It,viewport:yt,reset:Kt}}function hh(i,t,e,n){const s=W_(n);switch(e){case _u:return i*t;case xu:return i*t;case Mu:return i*t*2;case Uc:return i*t/s.components*s.byteLength;case Nc:return i*t/s.components*s.byteLength;case yu:return i*t*2/s.components*s.byteLength;case Fc:return i*t*2/s.components*s.byteLength;case vu:return i*t*3/s.components*s.byteLength;case Rn:return i*t*4/s.components*s.byteLength;case Oc:return i*t*4/s.components*s.byteLength;case jo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $o:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tr:case fc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Su:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W_(i){switch(i){case ti:case pu:return{byteLength:1,components:1};case js:case mu:case jn:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Ui:case Lc:case Dn:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function X_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,g){return f?new OffscreenCanvas(A,g):dr("canvas")}function v(A,g,L){let F=1;const Y=Ut(A);if((Y.width>L||Y.height>L)&&(F=L/Math.max(Y.width,Y.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const G=Math.floor(F*Y.width),ht=Math.floor(F*Y.height);d===void 0&&(d=_(G,ht));const rt=g?_(G,ht):d;return rt.width=G,rt.height=ht,rt.getContext("2d").drawImage(A,0,0,G,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+G+"x"+ht+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==tn&&A.minFilter!==dn}function u(A){i.generateMipmap(A)}function y(A,g,L,F,Y=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=g;if(g===i.RED&&(L===i.FLOAT&&(G=i.R32F),L===i.HALF_FLOAT&&(G=i.R16F),L===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.R8UI),L===i.UNSIGNED_SHORT&&(G=i.R16UI),L===i.UNSIGNED_INT&&(G=i.R32UI),L===i.BYTE&&(G=i.R8I),L===i.SHORT&&(G=i.R16I),L===i.INT&&(G=i.R32I)),g===i.RG&&(L===i.FLOAT&&(G=i.RG32F),L===i.HALF_FLOAT&&(G=i.RG16F),L===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RG8UI),L===i.UNSIGNED_SHORT&&(G=i.RG16UI),L===i.UNSIGNED_INT&&(G=i.RG32UI),L===i.BYTE&&(G=i.RG8I),L===i.SHORT&&(G=i.RG16I),L===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGB8UI),L===i.UNSIGNED_SHORT&&(G=i.RGB16UI),L===i.UNSIGNED_INT&&(G=i.RGB32UI),L===i.BYTE&&(G=i.RGB8I),L===i.SHORT&&(G=i.RGB16I),L===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),L===i.UNSIGNED_INT&&(G=i.RGBA32UI),L===i.BYTE&&(G=i.RGBA8I),L===i.SHORT&&(G=i.RGBA16I),L===i.INT&&(G=i.RGBA32I)),g===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),g===i.RGBA){const ht=Y?cr:ue.getTransfer(F);L===i.FLOAT&&(G=i.RGBA32F),L===i.HALF_FLOAT&&(G=i.RGBA16F),L===i.UNSIGNED_BYTE&&(G=ht===ye?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function x(A,g){let L;return A?g===null||g===Ui||g===Ms?L=i.DEPTH24_STENCIL8:g===Dn?L=i.DEPTH32F_STENCIL8:g===js&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ui||g===Ms?L=i.DEPTH_COMPONENT24:g===Dn?L=i.DEPTH_COMPONENT32F:g===js&&(L=i.DEPTH_COMPONENT16),L}function S(A,g){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function C(A){const g=A.target;g.removeEventListener("dispose",C),b(g),g.isVideoTexture&&h.delete(g)}function E(A){const g=A.target;g.removeEventListener("dispose",E),U(g)}function b(A){const g=n.get(A);if(g.__webglInit===void 0)return;const L=A.source,F=p.get(L);if(F){const Y=F[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(F).length===0&&p.delete(L)}n.remove(A)}function P(A){const g=n.get(A);i.deleteTexture(g.__webglTexture);const L=A.source,F=p.get(L);delete F[g.__cacheKey],r.memory.textures--}function U(A){const g=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let Y=0;Y<g.__webglFramebuffer[F].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[F][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)i.deleteFramebuffer(g.__webglFramebuffer[F]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=A.textures;for(let F=0,Y=L.length;F<Y;F++){const G=n.get(L[F]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),r.memory.textures--),n.remove(L[F])}n.remove(A)}let M=0;function w(){M=0}function D(){const A=M;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),M+=1,A}function k(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function W(A,g){const L=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(L,A,g);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+g)}function $(A,g){const L=n.get(A);if(A.version>0&&L.__version!==A.version){Vt(L,A,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+g)}function q(A,g){const L=n.get(A);if(A.version>0&&L.__version!==A.version){Vt(L,A,g);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+g)}function tt(A,g){const L=n.get(A);if(A.version>0&&L.__version!==A.version){z(L,A,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+g)}const B={[Di]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},lt={[tn]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},nt={[yf]:i.NEVER,[Af]:i.ALWAYS,[Sf]:i.LESS,[Eu]:i.LEQUAL,[wf]:i.EQUAL,[Tf]:i.GEQUAL,[Ef]:i.GREATER,[bf]:i.NOTEQUAL};function mt(A,g){if(g.type===Dn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===Gr||g.magFilter===xo||g.magFilter===Ii||g.minFilter===dn||g.minFilter===Gr||g.minFilter===xo||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,B[g.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,B[g.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,B[g.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[g.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[g.minFilter]),g.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===tn||g.minFilter!==xo&&g.minFilter!==Ii||g.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function zt(A,g){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",C));const F=g.source;let Y=p.get(F);Y===void 0&&(Y={},p.set(F,Y));const G=k(g);if(G!==A.__cacheKey){Y[G]===void 0&&(Y[G]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,L=!0),Y[G].usedTimes++;const ht=Y[A.__cacheKey];ht!==void 0&&(Y[A.__cacheKey].usedTimes--,ht.usedTimes===0&&P(g)),A.__cacheKey=G,A.__webglTexture=Y[G].texture}return L}function Vt(A,g,L){let F=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=i.TEXTURE_3D);const Y=zt(A,g),G=g.source;e.bindTexture(F,A.__webglTexture,i.TEXTURE0+L);const ht=n.get(G);if(G.version!==ht.__version||Y===!0){e.activeTexture(i.TEXTURE0+L);const rt=ue.getPrimaries(ue.workingColorSpace),ct=g.colorSpace===gi?null:ue.getPrimaries(g.colorSpace),Rt=g.colorSpace===gi||rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let it=v(g.image,!1,s.maxTextureSize);it=$t(g,it);const dt=o.convert(g.format,g.colorSpace),Nt=o.convert(g.type);let It=y(g.internalFormat,dt,Nt,g.colorSpace,g.isVideoTexture);mt(F,g);let yt;const Qt=g.mipmaps,gt=g.isVideoTexture!==!0,Kt=ht.__version===void 0||Y===!0,N=G.dataReady,vt=S(g,it);if(g.isDepthTexture)It=x(g.format===ys,g.type),Kt&&(gt?e.texStorage2D(i.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,dt,Nt,null));else if(g.isDataTexture)if(Qt.length>0){gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,vt,It,Qt[0].width,Qt[0].height);for(let Q=0,at=Qt.length;Q<at;Q++)yt=Qt[Q],gt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,yt.width,yt.height,dt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,Q,It,yt.width,yt.height,0,dt,Nt,yt.data);g.generateMipmaps=!1}else gt?(Kt&&e.texStorage2D(i.TEXTURE_2D,vt,It,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,dt,Nt,it.data)):e.texImage2D(i.TEXTURE_2D,0,It,it.width,it.height,0,dt,Nt,it.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){gt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,It,Qt[0].width,Qt[0].height,it.depth);for(let Q=0,at=Qt.length;Q<at;Q++)if(yt=Qt[Q],g.format!==Rn)if(dt!==null)if(gt){if(N)if(g.layerUpdates.size>0){const wt=hh(yt.width,yt.height,g.format,g.type);for(const bt of g.layerUpdates){const ne=yt.data.subarray(bt*wt/yt.data.BYTES_PER_ELEMENT,(bt+1)*wt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,bt,yt.width,yt.height,1,dt,ne,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,yt.width,yt.height,it.depth,dt,yt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,It,yt.width,yt.height,it.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,yt.width,yt.height,it.depth,dt,Nt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,It,yt.width,yt.height,it.depth,0,dt,Nt,yt.data)}else{gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,vt,It,Qt[0].width,Qt[0].height);for(let Q=0,at=Qt.length;Q<at;Q++)yt=Qt[Q],g.format!==Rn?dt!==null?gt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,yt.width,yt.height,dt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,yt.width,yt.height,dt,Nt,yt.data):e.texImage2D(i.TEXTURE_2D,Q,It,yt.width,yt.height,0,dt,Nt,yt.data)}else if(g.isDataArrayTexture)if(gt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,It,it.width,it.height,it.depth),N)if(g.layerUpdates.size>0){const Q=hh(it.width,it.height,g.format,g.type);for(const at of g.layerUpdates){const wt=it.data.subarray(at*Q/it.data.BYTES_PER_ELEMENT,(at+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,it.width,it.height,1,dt,Nt,wt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,Nt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,dt,Nt,it.data);else if(g.isData3DTexture)gt?(Kt&&e.texStorage3D(i.TEXTURE_3D,vt,It,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,Nt,it.data)):e.texImage3D(i.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,dt,Nt,it.data);else if(g.isFramebufferTexture){if(Kt)if(gt)e.texStorage2D(i.TEXTURE_2D,vt,It,it.width,it.height);else{let Q=it.width,at=it.height;for(let wt=0;wt<vt;wt++)e.texImage2D(i.TEXTURE_2D,wt,It,Q,at,0,dt,Nt,null),Q>>=1,at>>=1}}else if(Qt.length>0){if(gt&&Kt){const Q=Ut(Qt[0]);e.texStorage2D(i.TEXTURE_2D,vt,It,Q.width,Q.height)}for(let Q=0,at=Qt.length;Q<at;Q++)yt=Qt[Q],gt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt,Nt,yt):e.texImage2D(i.TEXTURE_2D,Q,It,dt,Nt,yt);g.generateMipmaps=!1}else if(gt){if(Kt){const Q=Ut(it);e.texStorage2D(i.TEXTURE_2D,vt,It,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Nt,it)}else e.texImage2D(i.TEXTURE_2D,0,It,dt,Nt,it);m(g)&&u(F),ht.__version=G.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function z(A,g,L){if(g.image.length!==6)return;const F=zt(A,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+L);const G=n.get(Y);if(Y.version!==G.__version||F===!0){e.activeTexture(i.TEXTURE0+L);const ht=ue.getPrimaries(ue.workingColorSpace),rt=g.colorSpace===gi?null:ue.getPrimaries(g.colorSpace),ct=g.colorSpace===gi||ht===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Rt=g.isCompressedTexture||g.image[0].isCompressedTexture,it=g.image[0]&&g.image[0].isDataTexture,dt=[];for(let at=0;at<6;at++)!Rt&&!it?dt[at]=v(g.image[at],!0,s.maxCubemapSize):dt[at]=it?g.image[at].image:g.image[at],dt[at]=$t(g,dt[at]);const Nt=dt[0],It=o.convert(g.format,g.colorSpace),yt=o.convert(g.type),Qt=y(g.internalFormat,It,yt,g.colorSpace),gt=g.isVideoTexture!==!0,Kt=G.__version===void 0||F===!0,N=Y.dataReady;let vt=S(g,Nt);mt(i.TEXTURE_CUBE_MAP,g);let Q;if(Rt){gt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,Nt.width,Nt.height);for(let at=0;at<6;at++){Q=dt[at].mipmaps;for(let wt=0;wt<Q.length;wt++){const bt=Q[wt];g.format!==Rn?It!==null?gt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,bt.width,bt.height,It,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Qt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,0,0,bt.width,bt.height,It,yt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt,Qt,bt.width,bt.height,0,It,yt,bt.data)}}}else{if(Q=g.mipmaps,gt&&Kt){Q.length>0&&vt++;const at=Ut(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,at.width,at.height)}for(let at=0;at<6;at++)if(it){gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,dt[at].width,dt[at].height,It,yt,dt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,dt[at].width,dt[at].height,0,It,yt,dt[at].data);for(let wt=0;wt<Q.length;wt++){const ne=Q[wt].image[at].image;gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,ne.width,ne.height,It,yt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Qt,ne.width,ne.height,0,It,yt,ne.data)}}else{gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,yt,dt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,It,yt,dt[at]);for(let wt=0;wt<Q.length;wt++){const bt=Q[wt];gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,0,0,It,yt,bt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,wt+1,Qt,It,yt,bt.image[at])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),G.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function K(A,g,L,F,Y,G){const ht=o.convert(L.format,L.colorSpace),rt=o.convert(L.type),ct=y(L.internalFormat,ht,rt,L.colorSpace);if(!n.get(g).__hasExternalTextures){const it=Math.max(1,g.width>>G),dt=Math.max(1,g.height>>G);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,G,ct,it,dt,g.depth,0,ht,rt,null):e.texImage2D(Y,G,ct,it,dt,0,ht,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,Y,n.get(L).__webglTexture,0,Pt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,Y,n.get(L).__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(A,g,L){if(i.bindRenderbuffer(i.RENDERBUFFER,A),g.depthBuffer){const F=g.depthTexture,Y=F&&F.isDepthTexture?F.type:null,G=x(g.stencilBuffer,Y),ht=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Pt(g);Tt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,G,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,A)}else{const F=g.textures;for(let Y=0;Y<F.length;Y++){const G=F[Y],ht=o.convert(G.format,G.colorSpace),rt=o.convert(G.type),ct=y(G.internalFormat,ht,rt,G.colorSpace),Rt=Pt(g);L&&Tt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,ct,g.width,g.height):Tt(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(A,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const F=n.get(g.depthTexture).__webglTexture,Y=Pt(g);if(g.depthTexture.format===ds)Tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(g.depthTexture.format===ys)Tt(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function pt(A){const g=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const F=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),F){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,F.removeEventListener("dispose",Y)};F.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=F}if(A.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");X(g.__webglFramebuffer,A)}else if(L){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]===void 0)g.__webglDepthbuffer[F]=i.createRenderbuffer(),ft(g.__webglDepthbuffer[F],A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,G)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ft(g.__webglDepthbuffer,A,!1);else{const F=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,Y)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,g,L){const F=n.get(A);g!==void 0&&K(F.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&pt(A)}function Mt(A){const g=A.texture,L=n.get(A),F=n.get(g);A.addEventListener("dispose",E);const Y=A.textures,G=A.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=g.version,r.memory.textures++),G){L.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[rt]=[];for(let ct=0;ct<g.mipmaps.length;ct++)L.__webglFramebuffer[rt][ct]=i.createFramebuffer()}else L.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)L.__webglFramebuffer[rt]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ht)for(let rt=0,ct=Y.length;rt<ct;rt++){const Rt=n.get(Y[rt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&Tt(A)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let rt=0;rt<Y.length;rt++){const ct=Y[rt];L.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[rt]);const Rt=o.convert(ct.format,ct.colorSpace),it=o.convert(ct.type),dt=y(ct.internalFormat,Rt,it,ct.colorSpace,A.isXRRenderTarget===!0),Nt=Pt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,L.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(L.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),mt(i.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)K(L.__webglFramebuffer[rt][ct],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else K(L.__webglFramebuffer[rt],A,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(g)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let rt=0,ct=Y.length;rt<ct;rt++){const Rt=Y[rt],it=n.get(Rt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),mt(i.TEXTURE_2D,Rt),K(L.__webglFramebuffer,A,Rt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Rt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,F.__webglTexture),mt(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)K(L.__webglFramebuffer[ct],A,g,i.COLOR_ATTACHMENT0,rt,ct);else K(L.__webglFramebuffer,A,g,i.COLOR_ATTACHMENT0,rt,0);m(g)&&u(rt),e.unbindTexture()}A.depthBuffer&&pt(A)}function Xt(A){const g=A.textures;for(let L=0,F=g.length;L<F;L++){const Y=g[L];if(m(Y)){const G=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ht=n.get(Y).__webglTexture;e.bindTexture(G,ht),u(G),e.unbindTexture()}}}const Dt=[],R=[];function Lt(A){if(A.samples>0){if(Tt(A)===!1){const g=A.textures,L=A.width,F=A.height;let Y=i.COLOR_BUFFER_BIT;const G=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),rt=g.length>1;if(rt)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Rt=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,L,F,0,0,L,F,Y,i.NEAREST),c===!0&&(Dt.length=0,R.length=0,Dt.push(i.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Dt.push(G),R.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Rt=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const g=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Pt(A){return Math.min(s.maxSamples,A.samples)}function Tt(A){const g=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function At(A){const g=r.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function $t(A,g){const L=A.colorSpace,F=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==Mi&&L!==gi&&(ue.getTransfer(L)===ye?(F!==Rn||Y!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function Ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=tt,this.rebindTextures=ut,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Tt}function Y_(i,t){function e(n,s=gi){let o;const r=ue.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===vu)return i.RGB;if(n===Rn)return i.RGBA;if(n===xu)return i.LUMINANCE;if(n===Mu)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===jo||n===Jo||n===$o||n===Qo)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===qa||n===Ka||n===Za)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ya)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ja||n===$a)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ja||n===Ja)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===$a)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Qa)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===fc||n===pc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===tr)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===mc||n===gc||n===_c)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===tr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class q_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
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

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new je({vertexShader:Z_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $_ extends Oi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,_=null;const v=new J_,m=e.getContextAttributes();let u=null,y=null;const x=[],S=[],C=new ot;let E=null;const b=new un;b.layers.enable(1),b.viewport=new xe;const P=new un;P.layers.enable(2),P.viewport=new xe;const U=[b,P],M=new q_;M.layers.enable(1),M.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=x[z];return K===void 0&&(K=new ma,x[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=x[z];return K===void 0&&(K=new ma,x[z]=K),K.getGripSpace()},this.getHand=function(z){let K=x[z];return K===void 0&&(K=new ma,x[z]=K),K.getHandSpace()};function k(z){const K=S.indexOf(z.inputSource);if(K===-1)return;const ft=x[K];ft!==void 0&&(ft.update(z.inputSource,z.frame,l||r),ft.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let z=0;z<x.length;z++){const K=S[z];K!==null&&(S[z]=null,x[z].disconnect(K))}w=null,D=null,v.reset(),t.setRenderTarget(u),f=null,p=null,d=null,s=null,y=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Cn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ft=null,X=null;m.depth&&(X=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?ys:ds,ft=m.stencil?Ms:Ui);const pt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:o};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer(pt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Cn(p.textureWidth,p.textureHeight,{format:Rn,type:ti,depthTexture:new Ou(p.textureWidth,p.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(z){for(let K=0;K<z.removed.length;K++){const ft=z.removed[K],X=S.indexOf(ft);X>=0&&(S[X]=null,x[X].disconnect(ft))}for(let K=0;K<z.added.length;K++){const ft=z.added[K];let X=S.indexOf(ft);if(X===-1){for(let ut=0;ut<x.length;ut++)if(ut>=S.length){S.push(ft),X=ut;break}else if(S[ut]===null){S[ut]=ft,X=ut;break}if(X===-1)break}const pt=x[X];pt&&pt.connect(ft)}}const q=new I,tt=new I;function B(z,K,ft){q.setFromMatrixPosition(K.matrixWorld),tt.setFromMatrixPosition(ft.matrixWorld);const X=q.distanceTo(tt),pt=K.projectionMatrix.elements,ut=ft.projectionMatrix.elements,Mt=pt[14]/(pt[10]-1),Xt=pt[14]/(pt[10]+1),Dt=(pt[9]+1)/pt[5],R=(pt[9]-1)/pt[5],Lt=(pt[8]-1)/pt[0],Pt=(ut[8]+1)/ut[0],Tt=Mt*Lt,At=Mt*Pt,$t=X/(-Lt+Pt),Ut=$t*-Lt;if(K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ut),z.translateZ($t),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),pt[10]===-1)z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const A=Mt+$t,g=Xt+$t,L=Tt-Ut,F=At+(X-Ut),Y=Dt*Xt/g*A,G=R*Xt/g*A;z.projectionMatrix.makePerspective(L,F,Y,G,A,g),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function lt(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let K=z.near,ft=z.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(ft=v.depthFar)),M.near=P.near=b.near=K,M.far=P.far=b.far=ft,(w!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,D=M.far);const X=z.parent,pt=M.cameras;lt(M,X);for(let ut=0;ut<pt.length;ut++)lt(pt[ut],X);pt.length===2?B(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),nt(z,M,X)};function nt(z,K,ft){ft===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ft.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Js*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let mt=null;function zt(z,K){if(h=K.getViewerPose(l||r),_=K,h!==null){const ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let X=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let ut=0;ut<ft.length;ut++){const Mt=ft[ut];let Xt=null;if(f!==null)Xt=f.getViewport(Mt);else{const R=d.getViewSubImage(p,Mt);Xt=R.viewport,ut===0&&(t.setRenderTargetTextures(y,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(y))}let Dt=U[ut];Dt===void 0&&(Dt=new un,Dt.layers.enable(ut),Dt.viewport=new xe,U[ut]=Dt),Dt.matrix.fromArray(Mt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Mt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),ut===0&&(M.matrix.copy(Dt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(Dt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const ut=d.getDepthInformation(ft[0]);ut&&ut.isValid&&ut.texture&&v.init(t,ut,s.renderState)}}for(let ft=0;ft<x.length;ft++){const X=S[ft],pt=x[ft];X!==null&&pt!==void 0&&pt.update(X,K,l||r)}mt&&mt(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const Vt=new Fu;Vt.setAnimationLoop(zt),this.setAnimationLoop=function(z){mt=z},this.dispose=function(){}}}const Ri=new Nn,Q_=new Me;function tv(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Du(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),d(m,u)):u.isMeshPhongMaterial?(o(m,u),h(m,u)):u.isMeshStandardMaterial?(o(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(o(m,u),_(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),v(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,y,x):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ge&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ge&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=t.get(u),x=y.envMap,S=y.envMapRotation;x&&(m.envMap.value=x,Ri.copy(S),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,y,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ev(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function l(y,x){let S=s[y.id];S===void 0&&(_(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(y,C);const E=t.render.frame;o[y.id]!==E&&(p(y),o[y.id]=E)}function h(y){const x=d();y.__bindingPointIndex=x;const S=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=s[y.id],S=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,b=S.length;E<b;E++){const P=Array.isArray(S[E])?S[E]:[S[E]];for(let U=0,M=P.length;U<M;U++){const w=P[U];if(f(w,E,U,C)===!0){const D=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let $=0;$<k.length;$++){const q=k[$],tt=v(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,D+W,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,S,C){const E=y.value,b=x+"_"+S;if(C[b]===void 0)return typeof E=="number"||typeof E=="boolean"?C[b]=E:C[b]=E.clone(),!0;{const P=C[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(y){const x=y.uniforms;let S=0;const C=16;for(let b=0,P=x.length;b<P;b++){const U=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,w=U.length;M<w;M++){const D=U[M],k=Array.isArray(D.value)?D.value:[D.value];for(let W=0,$=k.length;W<$;W++){const q=k[W],tt=v(q),B=S%C,lt=B%tt.boundary,nt=B+lt;S+=lt,nt!==0&&C-nt<tt.storage&&(S+=C-nt),D.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=tt.storage}}}const E=S%C;return E>0&&(S+=C-E),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const S=r.indexOf(x.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},o={}}return{bind:c,update:l,dispose:u}}class nv{constructor(t={}){const{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=vi,this.toneMappingExposure=1;const x=this;let S=!1,C=0,E=0,b=null,P=-1,U=null;const M=new xe,w=new xe;let D=null;const k=new qt(0);let W=0,$=e.width,q=e.height,tt=1,B=null,lt=null;const nt=new xe(0,0,$,q),mt=new xe(0,0,$,q);let zt=!1;const Vt=new Gc;let z=!1,K=!1;const ft=new Me,X=new Me,pt=new I,ut=new xe,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Dt(){return b===null?tt:1}let R=n;function Lt(T,H){return e.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),R===null){const H="webgl2";if(R=Lt(H,T),R===null)throw Lt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pt,Tt,At,$t,Ut,A,g,L,F,Y,G,ht,rt,ct,Rt,it,dt,Nt,It,yt,Qt,gt,Kt,N;function vt(){Pt=new ag(R),Pt.init(),gt=new Y_(R,Pt),Tt=new eg(R,Pt,t,gt),At=new V_(R),Tt.reverseDepthBuffer&&At.buffers.depth.setReversed(!0),$t=new hg(R),Ut=new R_,A=new X_(R,Pt,At,Ut,Tt,gt,$t),g=new ig(x),L=new rg(x),F=new _p(R),Kt=new Qm(R,F),Y=new cg(R,F,$t,Kt),G=new dg(R,Y,F,$t),It=new ug(R,Tt,A),it=new ng(Ut),ht=new A_(x,g,L,Pt,Tt,Kt,it),rt=new tv(x,Ut),ct=new P_,Rt=new F_(Pt),Nt=new $m(x,g,L,At,G,p,c),dt=new G_(x,G,Tt),N=new ev(R,$t,Tt,At),yt=new tg(R,Pt,$t),Qt=new lg(R,Pt,$t),$t.programs=ht.programs,x.capabilities=Tt,x.extensions=Pt,x.properties=Ut,x.renderLists=ct,x.shadowMap=dt,x.state=At,x.info=$t}vt();const Q=new $_(x,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=Pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize($,q,!1))},this.getSize=function(T){return T.set($,q)},this.setSize=function(T,H,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,q=H,e.width=Math.floor(T*tt),e.height=Math.floor(H*tt),j===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set($*tt,q*tt).floor()},this.setDrawingBufferSize=function(T,H,j){$=T,q=H,tt=j,e.width=Math.floor(T*j),e.height=Math.floor(H*j),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,H,j,J){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,H,j,J),At.viewport(M.copy(nt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,H,j,J){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,H,j,J),At.scissor(w.copy(mt).multiplyScalar(tt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(T){At.setScissorTest(zt=T)},this.setOpaqueSort=function(T){B=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(T=!0,H=!0,j=!0){let J=0;if(T){let V=!1;if(b!==null){const _t=b.texture.format;V=_t===Oc||_t===Fc||_t===Nc}if(V){const _t=b.texture.type,Ct=_t===ti||_t===Ui||_t===js||_t===Ms||_t===Ic||_t===Dc,Ft=Nt.getClearColor(),Bt=Nt.getClearAlpha(),Zt=Ft.r,jt=Ft.g,kt=Ft.b;Ct?(f[0]=Zt,f[1]=jt,f[2]=kt,f[3]=Bt,R.clearBufferuiv(R.COLOR,0,f)):(_[0]=Zt,_[1]=jt,_[2]=kt,_[3]=Bt,R.clearBufferiv(R.COLOR,0,_))}else J|=R.COLOR_BUFFER_BIT}H&&(J|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),ct.dispose(),Rt.dispose(),Ut.dispose(),g.dispose(),L.dispose(),G.dispose(),Kt.dispose(),N.dispose(),ht.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ll),Q.removeEventListener("sessionend",hl),Si.stop()};function at(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=$t.autoReset,H=dt.enabled,j=dt.autoUpdate,J=dt.needsUpdate,V=dt.type;vt(),$t.autoReset=T,dt.enabled=H,dt.autoUpdate=j,dt.needsUpdate=J,dt.type=V}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){const H=T.target;H.removeEventListener("dispose",ne),Pe(H)}function Pe(T){Je(T),Ut.remove(T)}function Je(T){const H=Ut.get(T).programs;H!==void 0&&(H.forEach(function(j){ht.releaseProgram(j)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,j,J,V,_t){H===null&&(H=Mt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Ft=Vd(T,H,j,J,V);At.setMaterial(J,Ct);let Bt=j.index,Zt=1;if(J.wireframe===!0){if(Bt=Y.getWireframeAttribute(j),Bt===void 0)return;Zt=2}const jt=j.drawRange,kt=j.attributes.position;let me=jt.start*Zt,Se=(jt.start+jt.count)*Zt;_t!==null&&(me=Math.max(me,_t.start*Zt),Se=Math.min(Se,(_t.start+_t.count)*Zt)),Bt!==null?(me=Math.max(me,0),Se=Math.min(Se,Bt.count)):kt!=null&&(me=Math.max(me,0),Se=Math.min(Se,kt.count));const Te=Se-me;if(Te<0||Te===1/0)return;Kt.setup(V,J,Ft,j,Bt);let rn,fe=yt;if(Bt!==null&&(rn=F.get(Bt),fe=Qt,fe.setIndex(rn)),V.isMesh)J.wireframe===!0?(At.setLineWidth(J.wireframeLinewidth*Dt()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(V.isLine){let Ht=J.linewidth;Ht===void 0&&(Ht=1),At.setLineWidth(Ht*Dt()),V.isLineSegments?fe.setMode(R.LINES):V.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else V.isPoints?fe.setMode(R.POINTS):V.isSprite&&fe.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)fe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,ze=V._multiDrawCounts,pe=V._multiDrawCount,xn=Bt?F.get(Bt).bytesPerElement:1,Gi=Ut.get(J).currentProgram.getUniforms();for(let an=0;an<pe;an++)Gi.setValue(R,"_gl_DrawID",an),fe.render(Ht[an]/xn,ze[an])}else if(V.isInstancedMesh)fe.renderInstances(me,Te,V.count);else if(j.isInstancedBufferGeometry){const Ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ze=Math.min(j.instanceCount,Ht);fe.renderInstances(me,Te,ze)}else fe.render(me,Te)};function he(T,H,j){T.transparent===!0&&T.side===de&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,vo(T,H,j),T.side=Pn,T.needsUpdate=!0,vo(T,H,j),T.side=de):vo(T,H,j)}this.compile=function(T,H,j=null){j===null&&(j=T),m=Rt.get(j),m.init(H),y.push(m),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const J=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _t=V.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const Ft=_t[Ct];he(Ft,j,V),J.add(Ft)}else he(_t,j,V),J.add(_t)}),y.pop(),m=null,J},this.compileAsync=function(T,H,j=null){const J=this.compile(T,H,j);return new Promise(V=>{function _t(){if(J.forEach(function(Ct){Ut.get(Ct).currentProgram.isReady()&&J.delete(Ct)}),J.size===0){V(T);return}setTimeout(_t,10)}Pt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let $e=null;function On(T){$e&&$e(T)}function ll(){Si.stop()}function hl(){Si.start()}const Si=new Fu;Si.setAnimationLoop(On),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(T){$e=T,Q.setAnimationLoop(T),T===null?Si.stop():Si.start()},Q.addEventListener("sessionstart",ll),Q.addEventListener("sessionend",hl),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(H),H=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,b),m=Rt.get(T,y.length),m.init(H),y.push(m),X.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Vt.setFromProjectionMatrix(X),K=this.localClippingEnabled,z=it.init(this.clippingPlanes,K),v=ct.get(T,u.length),v.init(),u.push(v),Q.enabled===!0&&Q.isPresenting===!0){const _t=x.xr.getDepthSensingMesh();_t!==null&&Or(_t,H,-1/0,x.sortObjects)}Or(T,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(B,lt),Xt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Xt&&Nt.addToRenderList(v,T),this.info.render.frame++,z===!0&&it.beginShadows();const j=m.state.shadowsArray;dt.render(j,T,H),z===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,V=v.transmissive;if(m.setupLights(),H.isArrayCamera){const _t=H.cameras;if(V.length>0)for(let Ct=0,Ft=_t.length;Ct<Ft;Ct++){const Bt=_t[Ct];dl(J,V,T,Bt)}Xt&&Nt.render(T);for(let Ct=0,Ft=_t.length;Ct<Ft;Ct++){const Bt=_t[Ct];ul(v,T,Bt,Bt.viewport)}}else V.length>0&&dl(J,V,T,H),Xt&&Nt.render(T),ul(v,T,H);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,H),Kt.resetDefaultState(),P=-1,U=null,y.pop(),y.length>0?(m=y[y.length-1],z===!0&&it.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Or(T,H,j,J){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Vt.intersectsSprite(T)){J&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(X);const Ct=G.update(T),Ft=T.material;Ft.visible&&v.push(T,Ct,Ft,j,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Vt.intersectsObject(T))){const Ct=G.update(T),Ft=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ut.copy(Ct.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(X)),Array.isArray(Ft)){const Bt=Ct.groups;for(let Zt=0,jt=Bt.length;Zt<jt;Zt++){const kt=Bt[Zt],me=Ft[kt.materialIndex];me&&me.visible&&v.push(T,Ct,me,j,ut.z,kt)}}else Ft.visible&&v.push(T,Ct,Ft,j,ut.z,null)}}const _t=T.children;for(let Ct=0,Ft=_t.length;Ct<Ft;Ct++)Or(_t[Ct],H,j,J)}function ul(T,H,j,J){const V=T.opaque,_t=T.transmissive,Ct=T.transparent;m.setupLightsView(j),z===!0&&it.setGlobalState(x.clippingPlanes,j),J&&At.viewport(M.copy(J)),V.length>0&&_o(V,H,j),_t.length>0&&_o(_t,H,j),Ct.length>0&&_o(Ct,H,j),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function dl(T,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Cn(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?jn:ti,minFilter:Ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const _t=m.state.transmissionRenderTarget[J.id],Ct=J.viewport||M;_t.setSize(Ct.z,Ct.w);const Ft=x.getRenderTarget();x.setRenderTarget(_t),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&Nt.render(j);const Bt=x.toneMapping;x.toneMapping=vi;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),z===!0&&it.setGlobalState(x.clippingPlanes,J),_o(T,j,J),A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let kt=0,me=H.length;kt<me;kt++){const Se=H[kt],Te=Se.object,rn=Se.geometry,fe=Se.material,Ht=Se.group;if(fe.side===de&&Te.layers.test(J.layers)){const ze=fe.side;fe.side=Ge,fe.needsUpdate=!0,fl(Te,j,J,rn,fe,Ht),fe.side=ze,fe.needsUpdate=!0,jt=!0}}jt===!0&&(A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t))}x.setRenderTarget(Ft),x.setClearColor(k,W),Zt!==void 0&&(J.viewport=Zt),x.toneMapping=Bt}function _o(T,H,j){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_t=T.length;V<_t;V++){const Ct=T[V],Ft=Ct.object,Bt=Ct.geometry,Zt=J===null?Ct.material:J,jt=Ct.group;Ft.layers.test(j.layers)&&fl(Ft,H,j,Bt,Zt,jt)}}function fl(T,H,j,J,V,_t){T.onBeforeRender(x,H,j,J,V,_t),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,H,j,J,T,_t),V.transparent===!0&&V.side===de&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,x.renderBufferDirect(j,H,J,V,T,_t),V.side=Pn,V.needsUpdate=!0,x.renderBufferDirect(j,H,J,V,T,_t),V.side=de):x.renderBufferDirect(j,H,J,V,T,_t),T.onAfterRender(x,H,j,J,V,_t)}function vo(T,H,j){H.isScene!==!0&&(H=Mt);const J=Ut.get(T),V=m.state.lights,_t=m.state.shadowsArray,Ct=V.state.version,Ft=ht.getParameters(T,V.state,_t,H,j),Bt=ht.getProgramCacheKey(Ft);let Zt=J.programs;J.environment=T.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(T.isMeshStandardMaterial?L:g).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",ne),Zt=new Map,J.programs=Zt);let jt=Zt.get(Bt);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Ct)return ml(T,Ft),jt}else Ft.uniforms=ht.getUniforms(T),T.onBeforeCompile(Ft,x),jt=ht.acquireProgram(Ft,Bt),Zt.set(Bt,jt),J.uniforms=Ft.uniforms;const kt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=it.uniform),ml(T,Ft),J.needsLights=Xd(T),J.lightsStateVersion=Ct,J.needsLights&&(kt.ambientLightColor.value=V.state.ambient,kt.lightProbe.value=V.state.probe,kt.directionalLights.value=V.state.directional,kt.directionalLightShadows.value=V.state.directionalShadow,kt.spotLights.value=V.state.spot,kt.spotLightShadows.value=V.state.spotShadow,kt.rectAreaLights.value=V.state.rectArea,kt.ltc_1.value=V.state.rectAreaLTC1,kt.ltc_2.value=V.state.rectAreaLTC2,kt.pointLights.value=V.state.point,kt.pointLightShadows.value=V.state.pointShadow,kt.hemisphereLights.value=V.state.hemi,kt.directionalShadowMap.value=V.state.directionalShadowMap,kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,kt.spotShadowMap.value=V.state.spotShadowMap,kt.spotLightMatrix.value=V.state.spotLightMatrix,kt.spotLightMap.value=V.state.spotLightMap,kt.pointShadowMap.value=V.state.pointShadowMap,kt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=jt,J.uniformsList=null,jt}function pl(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=nr.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ml(T,H){const j=Ut.get(T);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Vd(T,H,j,J,V){H.isScene!==!0&&(H=Mt),A.resetTextureUnits();const _t=H.fog,Ct=J.isMeshStandardMaterial?H.environment:null,Ft=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mi,Bt=(J.isMeshStandardMaterial?L:g).get(J.envMap||Ct),Zt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,jt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),kt=!!j.morphAttributes.position,me=!!j.morphAttributes.normal,Se=!!j.morphAttributes.color;let Te=vi;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Te=x.toneMapping);const rn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fe=rn!==void 0?rn.length:0,Ht=Ut.get(J),ze=m.state.lights;if(z===!0&&(K===!0||T!==U)){const fn=T===U&&J.id===P;it.setState(J,T,fn)}let pe=!1;J.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ze.state.version||Ht.outputColorSpace!==Ft||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Bt||J.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==it.numPlanes||Ht.numIntersection!==it.numIntersection)||Ht.vertexAlphas!==Zt||Ht.vertexTangents!==jt||Ht.morphTargets!==kt||Ht.morphNormals!==me||Ht.morphColors!==Se||Ht.toneMapping!==Te||Ht.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,Ht.__version=J.version);let xn=Ht.currentProgram;pe===!0&&(xn=vo(J,H,V));let Gi=!1,an=!1,Br=!1;const Ce=xn.getUniforms(),oi=Ht.uniforms;if(At.useProgram(xn.program)&&(Gi=!0,an=!0,Br=!0),J.id!==P&&(P=J.id,an=!0),Gi||U!==T){Tt.reverseDepthBuffer?(ft.copy(T.projectionMatrix),Yf(ft),qf(ft),Ce.setValue(R,"projectionMatrix",ft)):Ce.setValue(R,"projectionMatrix",T.projectionMatrix),Ce.setValue(R,"viewMatrix",T.matrixWorldInverse);const fn=Ce.map.cameraPosition;fn!==void 0&&fn.setValue(R,pt.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,an=!0,Br=!0)}if(V.isSkinnedMesh){Ce.setOptional(R,V,"bindMatrix"),Ce.setOptional(R,V,"bindMatrixInverse");const fn=V.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ce.setValue(R,"boneTexture",fn.boneTexture,A))}V.isBatchedMesh&&(Ce.setOptional(R,V,"batchingTexture"),Ce.setValue(R,"batchingTexture",V._matricesTexture,A),Ce.setOptional(R,V,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",V._indirectTexture,A),Ce.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",V._colorsTexture,A));const zr=j.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&It.update(V,j,xn),(an||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,Ce.setValue(R,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(oi.envMap.value=Bt,oi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(oi.envMapIntensity.value=H.environmentIntensity),an&&(Ce.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Wd(oi,Br),_t&&J.fog===!0&&rt.refreshFogUniforms(oi,_t),rt.refreshMaterialUniforms(oi,J,tt,q,m.state.transmissionRenderTarget[T.id]),nr.upload(R,pl(Ht),oi,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(nr.upload(R,pl(Ht),oi,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ce.setValue(R,"center",V.center),Ce.setValue(R,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(R,"normalMatrix",V.normalMatrix),Ce.setValue(R,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const fn=J.uniformsGroups;for(let kr=0,Yd=fn.length;kr<Yd;kr++){const gl=fn[kr];N.update(gl,xn),N.bind(gl,xn)}}return xn}function Wd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Xd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,H,j){Ut.get(T.texture).__webglTexture=H,Ut.get(T.depthTexture).__webglTexture=j;const J=Ut.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const j=Ut.get(T);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,j=0){b=T,C=H,E=j;let J=!0,V=null,_t=!1,Ct=!1;if(T){const Bt=Ut.get(T);if(Bt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Bt.__hasExternalTextures)A.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const kt=T.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&Ut.has(kt)&&(T.width!==kt.image.width||T.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ct=!0);const jt=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[H])?V=jt[H][j]:V=jt[H],_t=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?V=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?V=jt[j]:V=jt,M.copy(T.viewport),w.copy(T.scissor),D=T.scissorTest}else M.copy(nt).multiplyScalar(tt).floor(),w.copy(mt).multiplyScalar(tt).floor(),D=zt;if(At.bindFramebuffer(R.FRAMEBUFFER,V)&&J&&At.drawBuffers(T,V),At.viewport(M),At.scissor(w),At.setScissorTest(D),_t){const Bt=Ut.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Bt.__webglTexture,j)}else if(Ct){const Bt=Ut.get(T.texture),Zt=H||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bt.__webglTexture,j||0,Zt)}P=-1},this.readRenderTargetPixels=function(T,H,j,J,V,_t,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){At.bindFramebuffer(R.FRAMEBUFFER,Ft);try{const Bt=T.texture,Zt=Bt.format,jt=Bt.type;if(!Tt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-J&&j>=0&&j<=T.height-V&&R.readPixels(H,j,J,V,gt.convert(Zt),gt.convert(jt),_t)}finally{const Bt=b!==null?Ut.get(b).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(T,H,j,J,V,_t,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){const Bt=T.texture,Zt=Bt.format,jt=Bt.type;if(!Tt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-J&&j>=0&&j<=T.height-V){At.bindFramebuffer(R.FRAMEBUFFER,Ft);const kt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,kt),R.bufferData(R.PIXEL_PACK_BUFFER,_t.byteLength,R.STREAM_READ),R.readPixels(H,j,J,V,gt.convert(Zt),gt.convert(jt),0);const me=b!==null?Ut.get(b).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,me);const Se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Xf(R,Se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,kt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_t),R.deleteBuffer(kt),R.deleteSync(Se),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,j=0){T.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-j),V=Math.floor(T.image.width*J),_t=Math.floor(T.image.height*J),Ct=H!==null?H.x:0,Ft=H!==null?H.y:0;A.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,Ct,Ft,V,_t),At.unbindTexture()},this.copyTextureToTexture=function(T,H,j=null,J=null,V=0){T.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],H=arguments[2],V=arguments[3]||0,j=null);let _t,Ct,Ft,Bt,Zt,jt;j!==null?(_t=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Ft=j.min.x,Bt=j.min.y):(_t=T.image.width,Ct=T.image.height,Ft=0,Bt=0),J!==null?(Zt=J.x,jt=J.y):(Zt=0,jt=0);const kt=gt.convert(H.format),me=gt.convert(H.type);A.setTexture2D(H,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const Se=R.getParameter(R.UNPACK_ROW_LENGTH),Te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),rn=R.getParameter(R.UNPACK_SKIP_PIXELS),fe=R.getParameter(R.UNPACK_SKIP_ROWS),Ht=R.getParameter(R.UNPACK_SKIP_IMAGES),ze=T.isCompressedTexture?T.mipmaps[V]:T.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,V,Zt,jt,_t,Ct,kt,me,ze.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,V,Zt,jt,ze.width,ze.height,kt,ze.data):R.texSubImage2D(R.TEXTURE_2D,V,Zt,jt,_t,Ct,kt,me,ze),R.pixelStorei(R.UNPACK_ROW_LENGTH,Se),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,rn),R.pixelStorei(R.UNPACK_SKIP_ROWS,fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ht),V===0&&H.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(T,H,j=null,J=null,V=0){T.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,T=arguments[2],H=arguments[3],V=arguments[4]||0);let _t,Ct,Ft,Bt,Zt,jt,kt,me,Se;const Te=T.isCompressedTexture?T.mipmaps[V]:T.image;j!==null?(_t=j.max.x-j.min.x,Ct=j.max.y-j.min.y,Ft=j.max.z-j.min.z,Bt=j.min.x,Zt=j.min.y,jt=j.min.z):(_t=Te.width,Ct=Te.height,Ft=Te.depth,Bt=0,Zt=0,jt=0),J!==null?(kt=J.x,me=J.y,Se=J.z):(kt=0,me=0,Se=0);const rn=gt.convert(H.format),fe=gt.convert(H.type);let Ht;if(H.isData3DTexture)A.setTexture3D(H,0),Ht=R.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)A.setTexture2DArray(H,0),Ht=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const ze=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),Gi=R.getParameter(R.UNPACK_SKIP_ROWS),an=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Zt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,jt),T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Ht,V,kt,me,Se,_t,Ct,Ft,rn,fe,Te.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(Ht,V,kt,me,Se,_t,Ct,Ft,rn,Te.data):R.texSubImage3D(Ht,V,kt,me,Se,_t,Ct,Ft,rn,fe,Te),R.pixelStorei(R.UNPACK_ROW_LENGTH,ze),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,an),V===0&&H.generateMipmaps&&R.generateMipmap(Ht),At.unbindTexture()},this.initRenderTarget=function(T){Ut.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),At.unbindTexture()},this.resetState=function(){C=0,E=0,b=null,At.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bc?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Sr?"display-p3":"srgb"}}class Wc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Wc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class iv extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sv extends Ye{constructor(t=null,e=1,n=1,s,o,r,a,c,l=tn,h=tn,d,p){super(null,r,a,c,l,h,s,o,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uh extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ns=new Me,dh=new Me,ko=[],fh=new zi,ov=new Me,Fs=new Z,Os=new co;class ho extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ov)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),fh.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Os.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ns),dh.multiplyMatrices(n,ns),Fs.matrixWorld=dh,Fs.raycast(t,ko);for(let r=0,a=ko.length;r<a;r++){const c=ko[r];c.instanceId=o,c.object=this,e.push(c)}ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sv(new Float32Array(s*this.count),s,this.count,Uc,Dn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ni extends Ye{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],p=n[s+1]-h,f=(r-h)/p;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ot:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,c=new Me;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,_))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ue(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),r[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xc extends Fn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ot){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rv extends Xc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Yc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let p=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;p*=h,f*=h,s(r,a,p,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Go=new I,ga=new Yc,_a=new Yc,va=new Yc;class av extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Go.subVectors(s[0],s[1]).add(s[0]),l=Go);const d=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Go.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),ga.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,_,v,m),_a.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,_,v,m),va.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),_a.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),va.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(ga.calc(c),_a.calc(c),va.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ph(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function cv(i,t){const e=1-i;return e*e*t}function lv(i,t){return 2*(1-i)*i*t}function hv(i,t){return i*i*t}function Xs(i,t,e,n){return cv(i,t)+lv(i,e)+hv(i,n)}function uv(i,t){const e=1-i;return e*e*e*t}function dv(i,t){const e=1-i;return 3*e*e*i*t}function fv(i,t){return 3*(1-i)*i*i*t}function pv(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return uv(i,t)+dv(i,e)+fv(i,n)+pv(i,s)}class Hu extends Fn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ys(t,s.x,o.x,r.x,a.x),Ys(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mv extends Fn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ys(t,s.x,o.x,r.x,a.x),Ys(t,s.y,o.y,r.y,a.y),Ys(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends Fn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gv extends Fn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Fn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Xs(t,s.x,o.x,r.x),Xs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _v extends Fn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Xs(t,s.x,o.x,r.x),Xs(t,s.y,o.y,r.y),Xs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(ph(a,c.x,l.x,h.x,d.x),ph(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var mh=Object.freeze({__proto__:null,ArcCurve:rv,CatmullRomCurve3:av,CubicBezierCurve:Hu,CubicBezierCurve3:mv,EllipseCurve:Xc,LineCurve:Vu,LineCurve3:gv,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:_v,SplineCurve:Xu});class vv extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new mh[s.type]().fromJSON(s))}return this}}class gh extends vv{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vu(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Wu(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Hu(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Xc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qs extends Be{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,d=new I,p=new ot,f=new I,_=new I,v=new I;let m=0,u=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,f.x=u*1,f.y=-m,f.z=u*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,f.x=u*1,f.y=-m,f.z=u*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(_)}for(let y=0;y<=e;y++){const x=n+y*h*s,S=Math.sin(x),C=Math.cos(x);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*S,d.y=t[E].y,d.z=t[E].x*C,r.push(d.x,d.y,d.z),p.x=y/e,p.y=E/(t.length-1),a.push(p.x,p.y);const b=c[3*E+0]*S,P=c[3*E+1],U=c[3*E+0]*C;l.push(b,P,U)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const S=x+y*t.length,C=S,E=S+t.length,b=S+t.length+1,P=S+1;o.push(C,E,P),o.push(b,P,E)}this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.points,t.segments,t.phiStart,t.phiLength)}}class ei extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new I,h=new ot;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[p]/t+1)/2,h.y=(r[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class st extends Be{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],p=[],f=[];let _=0;const v=[],m=n/2;let u=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(f,2));function y(){const S=new I,C=new I;let E=0;const b=(e-t)/n;for(let P=0;P<=o;P++){const U=[],M=P/o,w=M*(e-t)+t;for(let D=0;D<=s;D++){const k=D/s,W=k*c+a,$=Math.sin(W),q=Math.cos(W);C.x=w*$,C.y=-M*n+m,C.z=w*q,d.push(C.x,C.y,C.z),S.set($,b,q).normalize(),p.push(S.x,S.y,S.z),f.push(k,1-M),U.push(_++)}v.push(U)}for(let P=0;P<s;P++)for(let U=0;U<o;U++){const M=v[U][P],w=v[U+1][P],D=v[U+1][P+1],k=v[U][P+1];t>0&&(h.push(M,w,k),E+=3),e>0&&(h.push(w,D,k),E+=3)}l.addGroup(u,E,0),u+=E}function x(S){const C=_,E=new ot,b=new I;let P=0;const U=S===!0?t:e,M=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),_++;const w=_;for(let D=0;D<=s;D++){const W=D/s*c+a,$=Math.cos(W),q=Math.sin(W);b.x=U*q,b.y=m*M,b.z=U*$,d.push(b.x,b.y,b.z),p.push(0,M,0),E.x=$*.5+.5,E.y=q*.5*M+.5,f.push(E.x,E.y),_++}for(let D=0;D<s;D++){const k=C+D,W=w+D;S===!0?h.push(W,W+1,k):h.push(W+1,W,k),P+=3}l.addGroup(u,P,S===!0?1:2),u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jt extends st{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Jt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Er extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new I,S=new I,C=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],x),f(e[E+1],S),f(e[E+2],C),c(x,S,C,y)}function c(y,x,S,C){const E=C+1,b=[];for(let P=0;P<=E;P++){b[P]=[];const U=y.clone().lerp(S,P/E),M=x.clone().lerp(S,P/E),w=E-P;for(let D=0;D<=w;D++)D===0&&P===E?b[P][D]=U:b[P][D]=U.clone().lerp(M,D/w)}for(let P=0;P<E;P++)for(let U=0;U<2*(E-P)-1;U++){const M=Math.floor(U/2);U%2===0?(p(b[P][M+1]),p(b[P+1][M]),p(b[P][M])):(p(b[P][M+1]),p(b[P+1][M+1]),p(b[P+1][M]))}}function l(y){const x=new I;for(let S=0;S<o.length;S+=3)x.x=o[S+0],x.y=o[S+1],x.z=o[S+2],x.normalize().multiplyScalar(y),o[S+0]=x.x,o[S+1]=x.y,o[S+2]=x.z}function h(){const y=new I;for(let x=0;x<o.length;x+=3){y.x=o[x+0],y.y=o[x+1],y.z=o[x+2];const S=m(y)/2/Math.PI+.5,C=u(y)/Math.PI+.5;r.push(S,1-C)}_(),d()}function d(){for(let y=0;y<r.length;y+=6){const x=r[y+0],S=r[y+2],C=r[y+4],E=Math.max(x,S,C),b=Math.min(x,S,C);E>.9&&b<.1&&(x<.2&&(r[y+0]+=1),S<.2&&(r[y+2]+=1),C<.2&&(r[y+4]+=1))}}function p(y){o.push(y.x,y.y,y.z)}function f(y,x){const S=y*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function _(){const y=new I,x=new I,S=new I,C=new I,E=new ot,b=new ot,P=new ot;for(let U=0,M=0;U<o.length;U+=9,M+=6){y.set(o[U+0],o[U+1],o[U+2]),x.set(o[U+3],o[U+4],o[U+5]),S.set(o[U+6],o[U+7],o[U+8]),E.set(r[M+0],r[M+1]),b.set(r[M+2],r[M+3]),P.set(r[M+4],r[M+5]),C.copy(y).add(x).add(S).divideScalar(3);const w=m(C);v(E,M+0,y,w),v(b,M+2,x,w),v(P,M+4,S,w)}}function v(y,x,S,C){C<0&&y.x===1&&(r[x]=y.x-1),S.x===0&&S.z===0&&(r[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.vertices,t.indices,t.radius,t.details)}}class qc extends Er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qc(t.radius,t.detail)}}class Yu extends gh{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new gh().fromJSON(s))}return this}}const xv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=qu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,p,f;if(n&&(o=Ev(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let _=e;_<s;_+=e)d=i[_],p=i[_+1],d<a&&(a=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return to(o,r,e,a,c,f,0),r}};function qu(i,t,e,n,s){let o,r;if(s===Nv(i,t,e,n)>0)for(o=t;o<e;o+=n)r=_h(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=_h(o,i[o],i[o+1],r);return r&&br(r,r.next)&&(no(r),r=r.next),r}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(br(e,e.next)||Ee(e.prev,e,e.next)===0)){if(no(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function to(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Cv(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?yv(i,n,s,o):Mv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),no(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Sv(Fi(i),t,e),to(i,t,e,n,s,o,2)):r===2&&wv(i,t,e,n,s,o):to(Fi(i),t,e,n,s,o,1);break}}}function Mv(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,p=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=p&&_.y>=d&&_.y<=f&&ls(s,a,o,c,r,l,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function yv(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ee(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,p=r.y,f=a<c?a<l?a:l:c<l?c:l,_=h<d?h<p?h:p:d<p?d:p,v=a>c?a>l?a:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=xc(f,_,t,e,n),y=xc(v,m,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=u&&S&&S.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==r&&ls(a,h,c,d,l,p,x.x,x.y)&&Ee(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=f&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&ls(a,h,c,d,l,p,S.x,S.y)&&Ee(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=u;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==r&&ls(a,h,c,d,l,p,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==r&&ls(a,h,c,d,l,p,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Sv(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!br(s,o)&&Ku(s,n,n.next,o)&&eo(s,o)&&eo(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),no(n),no(n.next),n=i=o),n=n.next}while(n!==i);return Fi(n)}function wv(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Iv(r,a)){let c=Zu(r,a);r=Fi(r,r.next),c=Fi(c,c.next),to(r,t,e,n,s,o,0),to(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Ev(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Lv(l));for(s.sort(bv),o=0;o<s.length;o++)e=Tv(s[o],e);return e}function bv(i,t){return i.x-t.x}function Tv(i,t){const e=Av(i,t);if(!e)return t;const n=Zu(e,i);return Fi(n,n.next),Fi(e,e.next)}function Av(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=o&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&ls(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),eo(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Rv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Rv(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Cv(i,t,e,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Pv(s)}function Pv(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ls(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Iv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dv(i,t)&&(eo(i,t)&&eo(t,i)&&Uv(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||br(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function br(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){const s=Vo(Ee(i,t,e)),o=Vo(Ee(i,t,n)),r=Vo(Ee(e,n,i)),a=Vo(Ee(e,n,t));return!!(s!==o&&r!==a||s===0&&Ho(i,e,t)||o===0&&Ho(i,n,t)||r===0&&Ho(e,i,n)||a===0&&Ho(e,t,n))}function Ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Vo(i){return i>0?1:i<0?-1:0}function Dv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function eo(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Uv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){const e=new Mc(i.i,i.x,i.y),n=new Mc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function _h(i,t,e,n){const s=new Mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nv(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class qs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];vh(t),xh(n,t);let r=t.length;e.forEach(vh);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,xh(n,e[c]);const a=xv.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function vh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ae extends Er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ae(t.radius,t.detail)}}class io extends Be{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const p=(e-t)/s,f=new I,_=new ot;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const u=o+m/n*r;f.x=d*Math.cos(u),f.y=d*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let u=0;u<n;u++){const y=u+m,x=y,S=y+n+1,C=y+n+2,E=y+1;a.push(x,S,E),a.push(S,C,E)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kc extends Be{constructor(t=new Yu([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(r,2));function l(h){const d=s.length/3,p=h.extractPoints(e);let f=p.shape;const _=p.holes;qs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=_.length;m<u;m++){const y=_[m];qs.isClockWise(y)===!0&&(_[m]=y.reverse())}const v=qs.triangulateShape(f,_);for(let m=0,u=_.length;m<u;m++){const y=_[m];f=f.concat(y)}for(let m=0,u=f.length;m<u;m++){const y=f[m];s.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let m=0,u=v.length;m<u;m++){const y=v[m],x=y[0]+d,S=y[1]+d,C=y[2]+d;n.push(x,S,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Kc(n,t.curveSegments)}}function Fv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ot extends Be{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new I,p=new I,f=[],_=[],v=[],m=[];for(let u=0;u<=n;u++){const y=[],x=u/n;let S=0;u===0&&r===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const E=C/e;d.x=-t*Math.cos(s+E*o)*Math.sin(r+x*a),d.y=t*Math.cos(r+x*a),d.z=t*Math.sin(s+E*o)*Math.sin(r+x*a),_.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),m.push(E+S,1-x),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<e;y++){const x=h[u][y+1],S=h[u][y],C=h[u+1][y],E=h[u+1][y+1];(u!==0||r>0)&&f.push(x,S,E),(u!==n-1||c<Math.PI)&&f.push(S,C,E)}this.setIndex(f),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class le extends Be{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new I,d=new I,p=new I;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const v=_/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const v=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,u=(s+1)*(f-1)+_,y=(s+1)*f+_;r.push(v,m,y),r.push(m,u,y)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ov extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class et extends lo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bv extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xa=new Me,Mh=new I,yh=new I;class ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sh=new Me,Bs=new I,Ma=new I;class zv extends ju{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bs),Ma.copy(n.position),Ma.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh)}}class Ju extends Tr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kv extends ju{constructor(){super(new Hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new kv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gv extends Tr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $u{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wh(){return performance.now()}class Eh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hv extends Oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);const bh={type:"change"},jc={type:"start"},Qu={type:"end"},Wo=new Ru,Th=new mi,Vv=Math.cos(70*Ie.DEG2RAD),De=new I,Qe=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ya=1e-6;class Wv extends Hv{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Un,this._lastTargetPosition=new I,this._quat=new Un().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eh,this._sphericalDelta=new Eh,this._scale=1,this._panOffset=new I,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new I,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yv.bind(this),this._onPointerDown=Xv.bind(this),this._onPointerUp=qv.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=jv.bind(this),this._onKeyDown=Jv.bind(this),this._onTouchStart=$v.bind(this),this._onTouchMove=Qv.bind(this),this._onMouseDown=Kv.bind(this),this._onMouseMove=Zv.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=nx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bh),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),s<-Math.PI?s+=Qe:s>Math.PI&&(s-=Qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=De.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<Vv?this.object.lookAt(this.target):(Th.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(Th,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ya||this._lastTargetPosition.distanceToSquared(this.target)>ya?(this.dispatchEvent(bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let o=De.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Qe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Yv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Kv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(jc)}function Zv(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(jc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qu))}function Jv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function $v(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(jc)}function Qv(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function tx(i){this.enabled!==!1&&i.preventDefault()}function ex(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const td={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class As{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ix=new Hc(-1,1,1,-1,0,1);class sx extends Be{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const ox=new sx;class Jc{constructor(t){this._mesh=new Z(ox,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ix)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ed extends As{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$s.clone(t.uniforms),this.material=new je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ah extends As{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class rx extends As{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ax{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ed(td),this.copyPass.material.blending=Zn,this.clock=new $u}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ah!==void 0&&(r instanceof Ah?n=!0:r instanceof rx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cx extends As{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const lx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ws extends As{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new qt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(o,r,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Cn(o,r,{type:jn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const f=new Cn(o,r,{type:jn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=lx;this.highPassUniforms=$s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ot(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=td;this.copyUniforms=$s.clone(h.uniforms),this.blendMaterial=new je({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qt,this.oldClearAlpha=1,this.basic=new si,this.fsQuad=new Jc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ot(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ws.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}ws.BlurDirectionX=new ot(1,0);ws.BlurDirectionY=new ot(0,1);const hx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ux extends As{constructor(){super();const t=hx;this.uniforms=$s.clone(t.uniforms),this.material=new Ov({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Jc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===du&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const dx={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ot(1/1024,1/512)}},vertexShader:`

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
	`},O={white:16446432,ivory:16775404,cream:15984072,gold:13938487,goldBright:16766044,brass:12618285,bronze:9067038,burgundy:6165024,burgundyDeep:3803666,crimson:9182251,maroon:4853272,marigold:16747546,marigoldDeep:15231496,jasmine:16774888,saffron:16741656,rose:14241642,leaf:3107370,skin:13208158,skinDark:10906174,flame:16757575,emberGlow:16743214};function fx(){const i=new xt,t=new et({color:O.white,roughness:.62,metalness:.05}),e=new et({color:O.ivory,roughness:.55,metalness:.06}),n=new et({color:O.gold,metalness:.9,roughness:.32,emissive:O.brass,emissiveIntensity:.22}),s=new et({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.9}),o=new et({color:O.burgundy,roughness:.82,metalness:.04}),r=new et({color:O.cream,roughness:.8,metalness:.02}),a=new et({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.28}),c=new et({color:O.jasmine,roughness:.7,metalness:0,emissive:O.jasmine,emissiveIntensity:.15}),l=new et({color:O.leaf,roughness:.8,metalness:0}),h=new et({color:O.bronze,roughness:.85,metalness:.1}),d=new et({color:O.emberGlow,emissive:O.emberGlow,emissiveIntensity:2,roughness:.5}),p=new et({color:O.saffron,emissive:O.marigold,emissiveIntensity:2.4,roughness:.4}),f=new et({color:O.goldBright,emissive:O.goldBright,emissiveIntensity:3,roughness:.35}),_=new et({color:O.burgundyDeep,roughness:.9,metalness:.05}),v=(R,Lt,Pt,Tt,At,$t=i)=>{const Ut=new Z(R,Lt);return Ut.position.set(Pt,Tt,At),$t.add(Ut),Ut},m=.52;v(new Et(7.2,.18,7.2),t,0,.09,0),v(new Et(6.5,.18,6.5),e,0,.27,0),v(new Et(5.9,.16,5.9),t,0,.44,0),v(new Et(5.94,.03,5.94),n,0,m+.005,0),v(new Et(5.4,.035,5.4),t,0,m+.01,0),v(new Et(3.4,.16,.7),e,0,.08,4.05);const u=3.15,y=[0,60,120,180,240,300].map(R=>R*Math.PI/180),x=new Et(.72,.34,.72),S=new st(.36,.4,.12,8),C=new st(.24,.28,2.6,10),E=new st(.29,.29,.08,8),b=new st(.27,.24,.12,8),P=new st(.46,.26,.36,8),U=new st(.58,.46,.16,8),M=new Et(.6,.18,.6),w=[];for(const R of y){const Lt=Math.cos(R)*u,Pt=Math.sin(R)*u,Tt=new xt;Tt.position.set(Lt,m,Pt),Tt.rotation.y=-R,v(x,t,0,.17,0,Tt),v(S,n,0,.4,0,Tt),v(C,t,0,1.76,0,Tt),v(E,n,0,1.15,0,Tt),v(E,n,0,2.25,0,Tt),v(b,n,0,3.12,0,Tt),v(P,e,0,3.36,0,Tt),v(U,n,0,3.62,0,Tt),v(M,t,0,3.79,0,Tt),i.add(Tt),w.push(new I(Lt,m+3.88,Pt))}v(new st(3.95,3.95,.5,6),t,0,4.5,0),v(new st(4.02,4.02,.14,6),n,0,4.28,0),v(new st(3.3,3.7,.45,12),e,0,4.98,0),v(new st(3.35,3.35,.06,12),n,0,5.22,0),v(new st(2.5,3.2,.42,12),t,0,5.41,0);const D=new Jt(.24,.5,6),k=12,W=2.45;for(let R=0;R<k;R++){const Lt=R/k*Math.PI*2;v(D,n,Math.cos(Lt)*W,5.72,Math.sin(Lt)*W)}v(new Ot(1.95,16,8,0,Math.PI*2,0,Math.PI*.5),e,0,5.62,0);const $=new Et(.06,1.95,.14),q=8;for(let R=0;R<q;R++){const Lt=R/q*Math.PI*2,Pt=v($,n,0,0,0);Pt.position.set(Math.cos(Lt)*1.02,6.55,Math.sin(Lt)*1.02),Pt.rotation.y=-Lt,Pt.rotation.z=.62}v(new st(.55,1.7,.35,12),t,0,7.42,0),v(new st(.34,.5,.16,12),n,0,7.62,0),v(new Ot(.3,10,8),n,0,7.94,0),v(new st(.1,.16,.18,8),n,0,8.2,0),v(new st(.2,.2,.05,8),s,0,8.32,0),v(new Jt(.12,.34,8),n,0,8.55,0),v(new Ot(.08,6,4),s,0,8.78,0),v(new st(3.62,3.9,.55,20,1,!0),o,0,4.42,0),v(new st(3.92,3.92,.12,20,1,!0),n,0,4.66,0),v(new st(3.58,3.62,.14,20,1,!0),r,0,4.18,0);const tt=new Jt(.2,.34,6),B=new Ot(.055,5,3),lt=16,nt=3.75;for(let R=0;R<lt;R++){const Lt=R/lt*Math.PI*2,Pt=Math.cos(Lt)*nt,Tt=Math.sin(Lt)*nt,At=v(tt,R%2?r:o,Pt,4.1,Tt);At.rotation.x=Math.PI,v(B,n,Pt,3.9,Tt)}const mt=new Ot(.135,5,3),zt=(R,Lt,Pt,Tt)=>{for(let At=0;At<=Pt;At++){const $t=At/Pt,Ut=R.x+(Lt.x-R.x)*$t,A=R.z+(Lt.z-R.z)*$t,g=R.y+(Lt.y-R.y)*$t-Math.sin(Math.PI*$t)*Tt;v(mt,At%2?c:a,Ut,g,A)}};for(let R=0;R<y.length;R++){if(R===1)continue;const Lt=w[R],Pt=w[(R+1)%y.length],Tt=new I(Lt.x,Lt.y-.15,Lt.z),At=new I(Pt.x,Pt.y-.15,Pt.z);zt(Tt,At,7,.72)}const Vt=w[1],z=w[2],K=new I(Vt.x,Vt.y+.05,Vt.z),ft=new I(z.x,z.y+.05,z.z);zt(K,ft,8,.55);const X=new Jt(.11,.42,6),pt=new Ot(.1,5,4),ut=7;for(let R=1;R<ut;R++){const Lt=R/ut,Pt=K.x+(ft.x-K.x)*Lt,Tt=K.z+(ft.z-K.z)*Lt,At=K.y+(ft.y-K.y)*Lt-Math.sin(Math.PI*Lt)*.55,$t=v(X,R%2?l:a,Pt,At-.32,Tt);$t.rotation.x=Math.PI,v(pt,R%2?a:c,Pt,At-.56,Tt)}const Mt=new xt;Mt.position.set(0,m,0),v(new Et(1.5,.14,1.5),e,0,.07,0,Mt),v(new Et(1.12,.42,1.12),t,0,.35,0,Mt),v(new Et(1.34,.1,1.34),n,0,.61,0,Mt),v(new Et(1.3,.06,1.3),_,0,.69,0,Mt),v(new st(.44,.4,.14,12),_,0,.73,0,Mt);const Xt=new st(.05,.05,.72,6),Dt=.78;for(let R=0;R<4;R++){const Lt=v(Xt,h,0,Dt,0,Mt);Lt.rotation.z=Math.PI/2,Lt.rotation.y=R/4*Math.PI}return v(new Jt(.3,.62,8),d,0,1.12,0,Mt),v(new Jt(.19,.5,8),p,0,1.22,0,Mt),v(new Jt(.1,.36,8),f,0,1.32,0,Mt),v(new Ot(.22,8,6),d,0,.92,0,Mt),i.add(Mt),i}const fr=new et({color:O.white,roughness:.55,metalness:0}),px=new et({color:O.ivory,roughness:.6,metalness:0}),hn=new et({color:O.gold,roughness:.32,metalness:.9,emissive:O.brass,emissiveIntensity:.12}),mx=new et({color:O.brass,roughness:.4,metalness:.85}),gx=new et({color:O.burgundy,roughness:.8,metalness:0}),pr=new et({color:O.marigold,roughness:.75,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.18}),nd=new et({color:O.jasmine,roughness:.7,metalness:0}),_x=new et({color:O.rose,roughness:.75,metalness:0}),Rh=new et({color:O.leaf,roughness:.8,metalness:0}),Ch=new et({color:O.goldBright,roughness:.4,metalness:0,emissive:O.emberGlow,emissiveIntensity:1.4}),vx={blob:new ae(1,0)};function mr(i,t){const e=new Z(vx.blob,i);return e.scale.setScalar(t),e}function xx(){const i=new xt,t=2.7,e=2.6,n=.42,s=new Et(n,e,n),o=new Et(n*1.7,.5,n*1.7),r=new st(n*.9,n*1,.28,8),a=new Et(n*1.12,.14,n*1.12),c=new Et(n*1.5,.32,n*1.5);for(let y=-1;y<=1;y+=2){const x=y*t,S=new Z(o,hn);S.position.set(x,.25,0),i.add(S);const C=new Z(r,px);C.position.set(x,.5+.14,0),i.add(C);const E=new Z(s,fr);E.position.set(x,.64+e/2,0),i.add(E);for(const M of[1.4,2.9]){const w=new Z(a,hn);w.position.set(x,M,0),i.add(w)}const b=new Z(c,hn);b.position.set(x,.64+e+.16,0),i.add(b);const P=mr(hn,.16);P.scale.y=.2,P.position.set(x,.64+e+.34,0),i.add(P);const U=new Z(new Jt(.09,.26,8),hn);U.position.set(x,.64+e+.5,0),i.add(U)}const l=.64+e+.32,h=new le(.34,.07,4,6,Math.PI),d=7,p=.7;for(let y=0;y<d;y++){const x=y/(d-1),S=(x-.5)*2*t,C=l+Math.sin(x*Math.PI)*p,E=new Z(h,hn);E.position.set(S,C,0),E.rotation.z=Math.PI,i.add(E)}const f=new Z(new Et(t*2+n,.24,.24),fr);f.position.set(0,l+p+.28,0),i.add(f);const _=new Z(new Et(t*2+n,.08,.28),hn);_.position.set(0,l+p+.42,0),i.add(_);const v=9;for(let y=0;y<v;y++){const x=y/(v-1),S=(x-.5)*2*t,C=Math.sin(x*Math.PI),E=l+C*p,b=.5+(1-C)*.7,P=3;for(let U=0;U<P;U++){const M=E-(U+1)*(b/P),w=(y+U)%3,k=mr(w===0?nd:pr,.09+(U===P-1?.02:0));k.position.set(S,M,.05),i.add(k)}}const m=new Jt(.14,.4,3),u=5;for(let y=0;y<u;y++){const S=(y/(u-1)-.5)*(t*1.7),C=new Z(m,gx);C.position.set(S,l+p+.04,.16),C.rotation.x=Math.PI,C.rotation.z=Math.PI/4,i.add(C)}return i}function Mx(){const i=new xt,t=1.5,e=1.8,n=.09,s=new st(n,n,e,8);for(let h=-1;h<=1;h+=2){const d=new Z(s,Rh);d.position.set(h*t,e/2,0),i.add(d)}const o=new le(t,n,5,16,Math.PI),r=new Z(o,Rh);r.position.set(0,e,0),i.add(r);const a=[pr,_x,nd,pr];function c(h,d){for(let f=0;f<2;f++){const _=a[Math.random()*a.length|0],v=mr(_,.12+Math.random()*.07);v.position.set(h+(Math.random()-.5)*.22,d+(Math.random()-.5)*.22,(Math.random()-.5)*.22),i.add(v)}}for(let h=-1;h<=1;h+=2)for(let d=0;d<=4;d++)c(h*t,.25+(e-.1)*(d/4));const l=9;for(let h=0;h<=l;h++){const d=h/l*Math.PI,p=Math.cos(d)*t,f=e+Math.sin(d)*t;c(p,f)}return i}function yx(){const i=new xt,t=new Z(new Et(.7,.22,.7),hn);t.position.y=.11,i.add(t);const e=new Z(new Et(.54,.18,.54),fr);e.position.y=.22+.09,i.add(e);const n=1.9,s=.4+n/2,o=new Z(new st(.18,.22,n,8),fr);o.position.y=s,i.add(o);const r=new st(.24,.24,.09,8),a=new Z(r,hn);a.position.y=.46,i.add(a);const c=new Z(r,hn);c.position.y=.4+n-.06,i.add(c);const l=.4+n+.02,h=new Jt(.12,.34,4),d=8;for(let u=0;u<d;u++){const y=u/d*Math.PI*2,x=new Z(h,hn);x.position.set(Math.cos(y)*.19,l+.1,Math.sin(y)*.19),x.rotation.z=Math.cos(y)*.6,x.rotation.x=-Math.sin(y)*.6,i.add(x)}for(let u=0;u<d;u++){const y=u/d*Math.PI*2+Math.PI/d,x=new Z(h,hn);x.scale.setScalar(.8),x.position.set(Math.cos(y)*.1,l+.16,Math.sin(y)*.1),x.rotation.z=Math.cos(y)*.3,x.rotation.x=-Math.sin(y)*.3,i.add(x)}const p=l+.34,f=new Z(new st(.26,.14,.16,12),mx);f.position.y=p,i.add(f);const _=new Z(new le(.25,.03,6,14),hn);_.rotation.x=Math.PI/2,_.position.y=p+.08,i.add(_);const v=new Z(new Jt(.1,.32,8),Ch);v.position.y=p+.24,i.add(v);const m=mr(Ch,.07);return m.position.y=p+.14,i.add(m),i}function Sx(){const i=new xt,t=new et({color:O.ivory,roughness:.62,metalness:0}),e=new et({color:O.bronze,roughness:.55,metalness:.2}),n=new et({color:O.burgundy,roughness:.82,metalness:0}),s=new et({color:O.burgundyDeep,roughness:.85,metalness:0}),o=new et({color:O.gold,roughness:.34,metalness:.9,emissive:O.brass,emissiveIntensity:.28}),r=new et({color:O.goldBright,roughness:.3,metalness:.85,emissive:O.goldBright,emissiveIntensity:.75}),a=new et({color:O.saffron,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.4}),c=new et({color:O.cream,roughness:.7,metalness:.06}),l=new et({color:O.ivory,roughness:.68,metalness:.05}),h=new et({color:O.skin,roughness:.75,metalness:0}),d=new et({color:O.skinDark,roughness:.78,metalness:0}),p=new et({color:1708040,roughness:.4,metalness:0}),f=new et({color:O.jasmine,roughness:.5,metalness:0,emissive:O.jasmine,emissiveIntensity:.35}),_=new et({color:O.marigold,roughness:.6,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.3}),v=new et({color:O.leaf,roughness:.8,metalness:0}),m=new et({color:O.maroon,roughness:.7,metalness:.1}),u=(gt,Kt,N,vt,Q)=>{const at=new Z(gt,Kt);return at.position.set(N||0,vt||0,Q||0),at},y=u(new Et(.64,.8,1.58),t,0,1.3,0);i.add(y),i.add(u(new Et(.58,.62,.36),t,0,1.2,.84)),i.add(u(new Ot(.4,7,5),t,0,1.36,-.74));const x=new st(.1,.07,1.02,6),S=new Et(.16,.12,.2),C=new st(.115,.115,.07,6),E=[[.23,.56],[-.23,.56],[.25,-.56],[-.25,-.56]],b=[Math.PI/2,Math.PI*1.5,0,Math.PI],P=[];for(let gt=0;gt<E.length;gt++){const[Kt,N]=E[gt],vt=new xt;vt.position.set(Kt,1.06,N);const Q=u(x,t,0,-.51,0),at=new xt;at.position.y=-1,at.add(u(S,e,0,0,0));const wt=u(C,o,0,-.74,0);vt.add(Q,at,wt),i.add(vt),P.push({hip:vt,foot:at,offset:b[gt]})}const U=new xt;U.position.set(0,1.44,-.9);const M=u(new st(.12,.02,1,6),t,0,-.44,-.14);M.rotation.x=-.34,U.add(M),i.add(U);const w=new xt;w.position.set(0,1.52,.72),i.add(w);const D=u(new st(.2,.3,.74,6),t,0,.3,.2);D.rotation.x=.62,w.add(D);const k=u(new Et(.27,.31,.44),t,0,.64,.53);k.rotation.x=.28,w.add(k);const W=u(new Et(.2,.19,.24),t,0,.52,.8);W.rotation.x=.28,w.add(W);const $=new ae(.035,0);w.add(u($,p,.11,.68,.62)),w.add(u($,p,-.11,.68,.62));const q=new Jt(.06,.19,4),tt=u(q,t,.09,.84,.42);tt.rotation.x=-.15;const B=u(q,t,-.09,.84,.42);B.rotation.x=-.15,w.add(tt,B);const lt=u(new Et(.2,.24,.05),o,0,.7,.67);lt.rotation.x=.28,w.add(lt),w.add(u(new Et(.29,.05,.05),o,0,.6,.67));const nt=u(new Et(.03,.34,.03),o,.14,.56,.66);nt.rotation.x=.28;const mt=u(new Et(.03,.34,.03),o,-.14,.56,.66);mt.rotation.x=.28,w.add(nt,mt);const zt=u(new le(.11,.02,3,6),o,0,.5,.78);zt.rotation.x=Math.PI/2+.28,w.add(zt),w.add(u(new st(.05,.05,.06,8),o,0,.86,.36)),w.add(u(new Jt(.1,.42,6),a,0,1.06,.34)),w.add(u(new Jt(.05,.22,6),r,0,1.2,.34));const Vt=new Et(.05,.6,1.24);i.add(u(Vt,n,.36,1.12,-.05)),i.add(u(Vt,n,-.36,1.12,-.05));const z=new Et(.06,.09,1.28);i.add(u(z,o,.36,.83,-.05)),i.add(u(z,o,-.36,.83,-.05));const K=new st(.08,.08,.03,6);for(const gt of[.32,-.36]){const Kt=u(K,o,.385,1.16,gt);Kt.rotation.z=Math.PI/2;const N=u(K,o,-.385,1.16,gt);N.rotation.z=Math.PI/2,i.add(Kt,N)}const ft=new Jt(.035,.16,4);for(const gt of[.4,0,-.42]){const Kt=u(ft,r,.37,.72,gt);Kt.rotation.x=Math.PI;const N=u(ft,r,-.37,.72,gt);N.rotation.x=Math.PI,i.add(Kt,N)}i.add(u(new Et(.72,.08,1.22),s,0,1.68,-.05)),i.add(u(new Et(.76,.05,.12),o,0,1.7,.56)),i.add(u(new Et(.76,.05,.12),o,0,1.7,-.66));const X=new xt;X.position.set(0,0,.06),i.add(X),X.add(u(new st(.24,.28,.22,8),l,0,1.86,0)),X.add(u(new st(.2,.27,.72,8),l,0,2.3,.02)),X.add(u(new Ot(.24,6,5),l,0,2.6,.02)),X.add(u(new Et(.035,.72,.035),o,0,2.3,.26));const pt=u(new Et(.05,.22,.04),n,.09,2.56,.22);pt.rotation.z=.35;const ut=u(new Et(.05,.22,.04),n,-.09,2.56,.22);ut.rotation.z=-.35,X.add(pt,ut);const Mt=new ae(.028,0);for(let gt=0;gt<5;gt++)X.add(u(Mt,r,0,2.56-gt*.13,.27));const Xt=new st(.1,.075,.66,6),Dt=u(Xt,c,.3,1.64,.08);Dt.rotation.x=.55,Dt.rotation.z=.14;const R=u(Xt,c,-.3,1.64,.08);R.rotation.x=.55,R.rotation.z=-.14,X.add(Dt,R);const Lt=new Et(.11,.09,.18),Pt=new Jt(.045,.1,4);for(const gt of[.32,-.32]){X.add(u(Lt,s,gt,1.36,.28));const Kt=u(Pt,o,gt,1.4,.4);Kt.rotation.x=-1.3,X.add(Kt);const N=u(new le(.09,.022,4,6),o,gt,1.31,.27);X.add(N),X.add(u(new Et(.02,.28,.02),o,gt,1.5,.24))}const Tt=new st(.062,.055,.52,6),At=u(Tt,l,.24,2.34,.16);At.rotation.x=.75,At.rotation.z=.28;const $t=u(Tt,l,-.25,2.3,.04);$t.rotation.x=.35,$t.rotation.z=-.28,X.add(At,$t);const Ut=new ae(.06,0),A=u(Ut,h,.32,2.12,.34),g=u(Ut,h,-.34,2.1,.12);X.add(A,g),X.add(u(new st(.07,.08,.11,6),h,0,2.72,.02));const L=u(new ae(.17,1),h,0,2.88,.03);X.add(L),X.add(u(new ae(.024,0),p,.06,2.9,.18)),X.add(u(new ae(.024,0),p,-.06,2.9,.18)),X.add(u(new Jt(.03,.06,4),d,0,2.85,.2)),X.add(u(new Et(.11,.02,.03),d,0,2.81,.18)),X.add(u(new Ot(.21,8,6),n,0,3.02,0));const F=u(new le(.19,.055,6,9),o,0,2.96,0);F.rotation.x=Math.PI/2,X.add(F),X.add(u(new Ot(.12,5,4),s,.06,3.14,-.04)),X.add(u(new ae(.055,0),r,0,3.04,.19)),X.add(u(new Jt(.035,.2,6),r,0,3.24,.15)),X.add(u(new Et(.34,.025,.025),o,0,2.94,.19));const Y=new Et(.016,.28,.016),G=new Ot(.02,4,3);for(let gt=0;gt<8;gt++){const Kt=-.14+gt*.04,N=.19-Math.abs(gt-3.5)*.006;X.add(u(Y,f,Kt,2.78,N)),X.add(u(G,_,Kt,2.64,N))}const ht=u(new le(.2,.05,5,10),_,0,2.5,.08);ht.rotation.x=1.35,ht.scale.set(1,1.25,1),X.add(ht);const rt=new le(.09,.045,4,6,Math.PI),ct=u(rt,_,.09,2.28,.24);ct.rotation.z=.2;const Rt=u(rt,_,-.09,2.28,.24);Rt.rotation.z=-.2,X.add(ct,Rt),X.add(u(new Ot(.03,4,3),v,.2,2.5,.12)),X.add(u(new Ot(.03,4,3),v,-.2,2.5,.12));const it=new xt;it.position.set(-.26,2,.02),it.rotation.z=.5,it.rotation.x=-.15;const dt=u(new st(.03,.02,.62,6),s,0,-.28,0);it.add(dt),it.add(u(new st(.032,.032,.05,6),o,0,.02,0)),it.add(u(new st(.03,.03,.05,6),o,0,-.55,0)),it.add(u(new Et(.14,.03,.03),r,0,.08,0)),it.add(u(new st(.02,.022,.12,6),d,0,.16,0)),it.add(u(new ae(.03,0),r,0,.23,0)),X.add(it);const Nt=new st(.012,.012,1,4),It=u(Nt,m,.12,1.75,.66);It.rotation.x=-.9;const yt=u(Nt,m,-0,1.78,.62);return yt.rotation.x=-.78,i.add(It,yt),{group:i,update:(gt,Kt,N={amount:0,phase:0})=>{const vt=N.amount||0,Q=N.phase||0;for(const bt of P){const ne=Math.sin(Q+bt.offset)*.3*vt;bt.hip.rotation.x=ne,bt.foot.rotation.x=-ne*.8}const at=Math.pow(Math.max(0,Math.sin(gt*.73+.8)),12);w.rotation.x=Math.sin(gt*.9)*.05+Math.sin(Q*2)*.018*vt,w.rotation.y=Math.sin(gt*.43)*.025,w.position.y=1.52+Math.sin(gt*.9)*.01,tt.rotation.x=-.15-at*.22,B.rotation.x=-.15-Math.pow(Math.max(0,Math.sin(gt*.73+2.5)),12)*.22,U.rotation.z=Math.sin(gt*.8+.5)*.15,U.rotation.x=Math.sin(gt*.6)*.05;const wt=1+Math.sin(gt*1.4)*.016;y.scale.set(wt,1,wt),X.rotation.x=Math.sin(gt*1.4+.3)*.013+Math.sin(Q)*.008*vt,X.position.y=Math.sin(gt*1.4)*.009+Math.abs(Math.sin(Q))*.018*vt,X.rotation.z=Math.sin(gt*.7)*.006,At.rotation.x=.75+Math.sin(gt*1.2+.4)*.018+Math.sin(Q)*.018*vt,it.rotation.z=.5+Math.sin(gt*1.1)*.02},gaitScale:3.8,gaitOffset:0}}function wx(){const i=new xt,t=new xt;i.add(t);const e=new et({color:O.burgundy,roughness:.82,metalness:.04}),n=new et({color:O.maroon,roughness:.85,metalness:.04}),s=new et({color:O.crimson,roughness:.8,metalness:.04}),o=new et({color:O.gold,metalness:.92,roughness:.32,emissive:O.brass,emissiveIntensity:.35}),r=new et({color:O.goldBright,metalness:.85,roughness:.28,emissive:O.goldBright,emissiveIntensity:.6}),a=new et({color:O.crimson,roughness:.68,metalness:.05,emissive:O.maroon,emissiveIntensity:.12,side:de}),c=new et({color:O.skin,roughness:.64,metalness:0}),l=new et({color:1445639,roughness:.5,metalness:.06}),h=(X,pt,ut,Mt,Xt)=>{const Dt=new Z(X,pt);return Dt.position.set(ut||0,Mt||0,Xt||0),t.add(Dt),Dt},d=h(new st(.18,.6,1.03,18,1,!0),e,0,.535,0);d.rotation.y=Math.PI/20,h(new st(.42,.635,.34,18,1,!0),n,0,.19,0);const p=h(new ei(.635,20),n,0,.02,0);p.rotation.x=-Math.PI/2,h(new st(.64,.66,.11,18,1,!0),o,0,.075,0),h(new st(.628,.645,.05,16,1,!0),r,0,.35,0),h(new st(.45,.465,.05,16,1,!0),o,0,.55,0),h(new st(.31,.32,.045,16,1,!0),r,0,.78,0);const f=h(new Et(.05,.98,.02),o,0,.54,.44);f.rotation.x=-.12,h(new st(.145,.19,.37,14,1,!0),s,0,1.235,0),h(new st(.192,.196,.06,16,1,!0),o,0,1.055,0),h(new st(.135,.155,.05,14,1,!0),r,0,1.4,0),h(new st(.05,.055,.1,8),c,0,1.46,.005),h(new Ot(.115,11,7),c,0,1.615,.012).scale.set(.94,1.05,.98),h(new Ot(.128,11,6,0,Math.PI*2,0,Math.PI*.6),l,0,1.625,-.014).scale.set(1,1.02,1.03),h(new Ot(.045,6,3),l,-.095,1.575,-.02),h(new Ot(.045,6,3),l,.095,1.575,-.02),h(new Ot(.07,8,5),l,0,1.55,-.125).scale.set(1,.9,.85);const u=h(new st(.032,.014,.3,8,1,!0),l,0,1.36,-.125);u.rotation.x=-.12;const y=h(new le(.055,.008,4,8),r,0,1.55,-.115);y.rotation.x=Math.PI/2.4,h(new ei(.011,8),s,0,1.645,.115),h(new Ot(.011,5,3),l,-.042,1.615,.108),h(new Ot(.011,5,3),l,.042,1.615,.108);const x=h(new Et(.006,.11,.005),r,0,1.7,.088);x.rotation.x=-.32,h(new ae(.019,0),r,0,1.655,.108);const S=h(new le(.017,.005,4,8),r,.028,1.585,.108);S.rotation.y=.4;const C=X=>{h(new ae(.016,0),r,X,1.585,.03),h(new Jt(.022,.045,8),o,X,1.545,.03).rotation.x=Math.PI};C(-.108),C(.108),h(new st(.066,.07,.02,16,1,!0),r,0,1.44,.02).scale.set(1,1,.72);const b=h(new le(.085,.013,4,12),o,0,1.4,.028);b.rotation.x=Math.PI/2,b.scale.set(1,.72,1),h(new ae(.018,0),r,0,1.335,.14),h(new st(.205,.205,.022,16,1,!0),r,0,1.03,0).scale.set(1,1,.9),h(new ae(.016,0),o,0,.99,.2);const U=(X,pt,ut,Mt,Xt,Dt,R,Lt,Pt,Tt)=>{const At=new I(X,pt,ut),$t=new I(Mt,Xt,Dt),Ut=new I().subVectors($t,At),A=Ut.length(),g=new st(Lt,R,A,Tt,1,!1),L=new Z(g,Pt);return L.position.copy(At).addScaledVector(Ut,.5),L.quaternion.setFromUnitVectors(new I(0,1,0),Ut.normalize()),t.add(L),L};U(-.17,1.4,.02,-.215,1.23,.11,.05,.038,s,8),U(-.215,1.23,.11,-.13,1.155,.205,.036,.028,c,8),U(.17,1.4,.02,.215,1.23,.11,.05,.038,s,8),U(.215,1.23,.11,.13,1.155,.205,.036,.028,c,8);const M=new st(.048,.048,.02,8,1,!0),w=X=>{for(let pt=0;pt<2;pt++){const ut=.16+pt*.028,Mt=new Z(M,pt%2?o:r);Mt.position.set(X,1.165-pt*.006,ut),Mt.rotation.x=Math.PI/2-.5,Mt.rotation.z=X<0?.5:-.5,t.add(Mt)}};w(-.128),w(.128),h(new Ot(.038,6,4),c,-.13,1.15,.21),h(new Ot(.038,6,4),c,.13,1.15,.21);const D=(X,pt,ut,Mt,Xt)=>{const Dt=new be(X,pt,ut,Mt),R=Dt.attributes.position;for(let Lt=0;Lt<R.count;Lt++){const Tt=(R.getY(Lt)+pt/2)/pt;R.setZ(Lt,R.getZ(Lt)+Math.sin(Tt*Math.PI)*Xt*-.5+(1-Tt)*Xt)}return R.needsUpdate=!0,Dt.computeVertexNormals(),Dt};h(new Ot(.135,10,4,0,Math.PI*2,0,Math.PI*.42),a,0,1.63,-.01).scale.set(1.05,.85,1.08);const W=h(D(.48,.82,3,5,.11),a,0,1.32,-.15);W.rotation.x=.06;const $=h(new be(.48,.05),r,0,.93,-.185);$.rotation.x=.06;const q=h(D(.22,.6,2,4,.05),a,-.185,1.2,.05);q.rotation.set(0,.28,.14),h(new be(.22,.045),r,-.225,.91,.07).rotation.set(0,.28,.14);const B=new xt;t.add(B);const lt=[new et({color:O.marigold,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.3}),new et({color:O.jasmine,roughness:.68,emissive:O.jasmine,emissiveIntensity:.18}),new et({color:O.rose,roughness:.65}),new et({color:O.saffron,roughness:.6,emissive:O.marigoldDeep,emissiveIntensity:.25})],nt=new ae(.042,0),mt=9;for(let X=0;X<mt;X++){const pt=X/(mt-1),ut=new Z(nt,lt[X%lt.length]);ut.position.set(-.145+.29*pt,1.15-.34*Math.sin(Math.PI*pt),.225+.03*Math.sin(Math.PI*pt)),ut.scale.setScalar(.9+Math.random()*.35),ut.rotation.set(Math.random(),Math.random(),Math.random()),B.add(ut)}const zt=new et({color:O.leaf,roughness:.75,side:de}),Vt=new be(.05,.09);[[-.15,1.15,.2,-.5],[.15,1.15,.2,.5]].forEach(X=>{const pt=new Z(Vt,zt);pt.position.set(X[0],X[1],X[2]),pt.rotation.z=X[3],B.add(pt)});const z=Math.random()*Math.PI*2;let K=0;return{group:i,update:X=>{const pt=X+z;t.rotation.z=Math.sin(pt*.7)*.018,t.rotation.y=Math.sin(pt*.42)*.035,t.rotation.x=K*.025+Math.sin(pt*.5)*.005,t.position.y=(Math.sin(pt*1.35)*.5+.5)*.01,W.rotation.z=Math.sin(pt*.9)*.02,q.rotation.z=.14+Math.sin(pt*1.1+.6)*.03,B.rotation.z=Math.sin(pt*.8+.4)*.03,B.rotation.x=Math.sin(pt*.7)*.006,B.position.y=K*.018+Math.sin(pt*1.2)*.004,B.position.z=K*.008},setArrival(X){K=Ie.clamp(X,0,1)}}}function Ex(){const i=new xt,t=new et({color:8356488,roughness:.9,metalness:0}),e=new et({color:7172213,roughness:.9,metalness:0}),n=new et({color:O.ivory,roughness:.35,metalness:.05}),s=new et({color:1708040,roughness:.4,metalness:0}),o=new et({color:O.gold,metalness:.9,roughness:.3,emissive:O.brass,emissiveIntensity:.18}),r=new et({color:O.goldBright,metalness:.6,roughness:.35,emissive:O.goldBright,emissiveIntensity:1.1}),a=new et({color:O.burgundy,roughness:.85,metalness:0}),c=new et({color:O.burgundyDeep,roughness:.85,metalness:0}),l=new et({color:O.crimson,roughness:.3,metalness:.2,emissive:O.rose,emissiveIntensity:.5}),h=new xt;i.add(h);const d=new Z(new Ot(1,12,8),t);d.scale.set(1.4,1.15,2),d.position.set(0,1.95,-.2),d.castShadow=!0,h.add(d);const p=new Z(new Ot(1,8,6),t);p.scale.set(1.25,1.15,.9),p.position.set(0,1.9,-1.9),h.add(p);const f=new Z(new st(.85,1.05,.9,10,1,!0),t);f.rotation.x=Math.PI/2.3,f.position.set(0,2.35,1.6),h.add(f);const _=new Z(new Ot(.85,10,8),t);_.scale.set(1,1.05,.95),_.position.set(0,2.5,2.4),_.castShadow=!0,h.add(_);const v=new Z(new Ot(.55,8,6),t);v.scale.set(1,.9,.7),v.position.set(0,2.95,2.55),h.add(v);const m=new Z(new Ot(.55,8,6),e);m.scale.set(.85,1,.8),m.position.set(0,2.25,2.95),h.add(m);for(const z of[-1,1]){const K=new Z(new Ot(.11,6,5),s);K.position.set(z*.5,2.55,2.85),h.add(K)}const u=[];for(const z of[-1,1]){const K=new xt;K.position.set(z*.72,2.65,2.15);const ft=new Z(new Ot(.72,8,6),t);ft.scale.set(.1,1.05,.85),ft.position.set(z*.08,-.15,-.35),K.add(ft);const X=new Z(new io(.5,.62,10),o);X.scale.set(.85,1,1),X.rotation.y=Math.PI/2,X.position.set(z*.1,-.15,-.35),K.add(X),h.add(K),u.push({pivot:K,sx:z,base:z*.32}),K.rotation.y=z*.32}const y=new xt;y.position.set(0,2.15,3.05),y.rotation.x=-.35,h.add(y);const x=[];let S=y;const C=6,E=.36,b=[-.12,-.14,-.16,-.1,.2,.4];for(let z=0;z<C;z++){const K=new xt;K.position.y=z===0?0:-E;const ft=b[z];K.rotation.x=ft,S.add(K);const X=.3*(1-z*.12),pt=.3*(1-(z+1)*.12),ut=new Z(new st(pt,X,E,6,1,!0),t);if(ut.position.y=-E/2,K.add(ut),z===2||z===4){const Mt=new Z(new st(X+.03,X+.03,.06,6,1,!0),o);Mt.position.y=-.03,K.add(Mt)}x.push({seg:K,baseX:ft,i:z}),S=K}const P=new Z(new Ot(.11,6,5),e);P.position.y=-E,S.add(P);for(const z of[-1,1]){const K=new Z(new Jt(.11,.95,6),n);K.rotation.set(1.15,0,z*.18),K.position.set(z*.34,2.05,3.1),h.add(K);const ft=new Z(new st(.1,.12,.1,6),o);ft.rotation.set(1.15,0,z*.18),ft.position.set(z*.34,2.16,2.98),h.add(ft)}const U=[[.72,.95],[-.72,.95],[.72,-1.35],[-.72,-1.35]],M=[Math.PI/2,Math.PI*1.5,0,Math.PI],w=[];for(let z=0;z<U.length;z++){const[K,ft]=U[z],X=new xt;X.position.set(K,1.755,ft);const pt=new Z(new st(.3,.38,1.75,8),t);pt.position.set(0,-.875,0),pt.castShadow=!0,X.add(pt);const ut=new xt;ut.position.y=-1.615,X.add(ut);const Mt=new Z(new st(.42,.44,.28,8),e);ut.add(Mt);for(let Dt=-1;Dt<=1;Dt++){const R=new Z(new ae(.08,0),n);R.scale.set(1,.7,.6),R.position.set(Dt*.15,-.08,.38),ut.add(R)}const Xt=new Z(new st(.42,.42,.22,8,1,!0),o);if(Xt.position.y=-1.335,X.add(Xt),ft>0)for(let Dt=-1;Dt<=1;Dt++){const R=new Z(new ae(.08,0),r);R.position.set(Dt*.28,-1.475,.3),X.add(R)}i.add(X),w.push({hip:X,footGroup:ut,offset:M[z]})}const D=new xt;D.position.set(0,2.4,-2.55),D.rotation.x=.5,h.add(D);const k=new Z(new st(.06,.09,1.5,5),e);k.position.y=-.75,D.add(k);const W=new Z(new Jt(.14,.4,5),c);W.rotation.x=Math.PI,W.position.y=-1.55,D.add(W);const $=new Z(new Et(2,.1,2.7),a);$.position.set(0,3,-.4),h.add($);for(const z of[-1,1]){const K=new Z(new Et(.1,1.3,2.6),a);K.rotation.z=z*.12,K.position.set(z*1.4,2.25,-.4),h.add(K);const ft=new Z(new Et(.12,.18,2.6),o);ft.rotation.z=z*.12,ft.position.set(z*1.52,1.62,-.4),h.add(ft);for(let ut=0;ut<5;ut++){const Mt=-1.4+ut*.5,Xt=new Z(new Jt(.05,.28,4),o);if(Xt.rotation.x=Math.PI,Xt.position.set(z*1.58,1.42,-.4+(Mt+.4)*.9),h.add(Xt),ut%2===0){const Dt=new Z(new ae(.06,0),r);Dt.position.set(z*1.6,1.28,-.4+(Mt+.4)*.9),h.add(Dt)}}const X=new Z(new st(.22,.22,.05,8),o);X.rotation.z=Math.PI/2,X.rotation.x=z*.12,X.position.set(z*1.47,2.3,-.2),h.add(X);const pt=new Z(new ae(.09,0),l);pt.position.set(z*1.52,2.3,-.2),h.add(pt)}const q=new Z(new Et(.16,.14,2.7),o);q.position.set(0,3.07,-.4),h.add(q);const tt=new Z(new Et(1.35,.4,1.5),c);tt.position.set(0,3.28,-.5),h.add(tt);for(const z of[.35,-1.35]){const K=new Z(new st(.18,.18,1.4,8),o);K.rotation.z=Math.PI/2,K.position.set(0,3.4,z),h.add(K)}for(const z of[-.6,.6])for(const K of[.35,-1.35]){const ft=new Z(new ae(.11,0),r);ft.position.set(z,3.52,K),h.add(ft)}const B=new xt;B.position.set(0,2.95,2.75),B.rotation.x=-.35,h.add(B);const lt=new Z(new Et(.95,.72,.08),a);B.add(lt);const nt=new Z(new Et(1.02,.8,.05),o);nt.position.z=-.02,B.add(nt);for(let z=-2;z<=2;z++){const K=new Z(new ae(.07,0),l);K.position.set(z*.18,.12,.06),B.add(K)}const mt=new Z(new Ot(.14,8,6),r);mt.scale.set(1,1,.6),mt.position.set(0,-.08,.08),B.add(mt);const zt=new Z(new Jt(.09,.24,6),r);zt.rotation.x=Math.PI,zt.position.set(0,-.5,.05),B.add(zt);for(const z of[-1,1]){const K=new Z(new io(.14,.24,8),o);K.position.set(z*.68,2.35,2.62),K.rotation.y=z*.5,h.add(K)}function Vt(z,K,ft={amount:0,phase:0}){const X=ft.amount||0,pt=ft.phase||0;for(const ut of w){const Mt=Math.sin(pt+ut.offset)*.16*X;ut.hip.rotation.x=Mt,ut.footGroup.rotation.x=-Mt*.78}h.position.x=Math.sin(z*.5)*.05+Math.sin(pt)*.025*X,h.position.y=Math.sin(z*1)*.02+Math.abs(Math.sin(pt))*.018*X,h.rotation.z=Math.sin(z*.5)*.012+Math.sin(pt)*.008*X;for(const ut of u)ut.pivot.rotation.y=ut.base+Math.sin(z*.9+ut.sx)*.18*ut.sx,ut.pivot.rotation.x=Math.sin(z*.9+ut.sx)*.05;for(const ut of x){const Mt=(ut.i+1)/C;ut.seg.rotation.z=Math.sin(z*.8+ut.i*.5)*.05*Mt,ut.seg.rotation.x=ut.baseX+Math.sin(z*.7+ut.i*.4)*.03*Mt+Math.sin(z*1.65+ut.i*.7)*.012*Mt}B.rotation.z=Math.sin(z*.65)*.018,D.rotation.z=Math.sin(z*.6)*.15}return{group:i,update:Vt,gaitScale:2.4,gaitOffset:0,bannerMount:h}}const Wt={skin:new et({color:O.skin,roughness:.85,metalness:0}),white:new et({color:O.ivory,roughness:.8,metalness:0}),cream:new et({color:O.cream,roughness:.8,metalness:0}),burgundy:new et({color:O.burgundy,roughness:.7,metalness:0,side:de}),crimson:new et({color:O.crimson,roughness:.7,metalness:0,side:de}),gold:new et({color:O.gold,roughness:.35,metalness:.9,emissive:O.goldBright,emissiveIntensity:.18}),brass:new et({color:O.brass,roughness:.4,metalness:.85,emissive:O.marigold,emissiveIntensity:.12}),bronze:new et({color:O.bronze,roughness:.6,metalness:.4}),marigold:new et({color:O.marigold,roughness:.7,metalness:0,emissive:O.marigoldDeep,emissiveIntensity:.15}),jasmine:new et({color:O.jasmine,roughness:.75,metalness:0}),leaf:new et({color:O.leaf,roughness:.7,metalness:0})},Yt=(i,t)=>new Z(i,t);function Ph(i){const t=new xt,e=Yt(new st(.045,.04,.42,6),Wt.white);e.position.y=-.21,t.add(e);const n=Yt(new le(.045,.014,3,6),Wt.gold);n.rotation.x=Math.PI/2,n.position.y=-.41,t.add(n);const s=Yt(new Ot(.05,5,3),Wt.skin);return s.position.y=-.45,t.add(s),t.position.set(i*.17,1.24,0),t}function Lh(i){const t=new xt;t.position.set(i,.44,0);const e=Yt(new st(.06,.05,.42,6),Wt.skin);e.position.y=-.21,t.add(e);const n=new xt;n.position.y=-.41;const s=Yt(new Et(.09,.055,.17),Wt.bronze);return s.position.z=.03,n.add(s),t.add(n),{g:t,footPivot:n}}function bx(){const i=new xt,t=Yt(new st(.03,.035,1.9,6),Wt.bronze);t.position.y=2.05,i.add(t);const e=Yt(new Ot(.62,10,3,0,Math.PI*2,0,Math.PI/2),Wt.burgundy);e.position.y=2.9,i.add(e);const n=Yt(new le(.6,.045,3,8),Wt.gold);n.rotation.x=Math.PI/2,n.position.y=2.9,i.add(n);const s=Yt(new le(.63,.05,3,8),Wt.jasmine);s.rotation.x=Math.PI/2,s.position.y=2.84,i.add(s);const o=Yt(new Jt(.05,.22,6),Wt.gold);o.position.y=3.28,i.add(o);const r=Yt(new ae(.055,0),Wt.gold);return r.position.y=3.14,i.add(r),{group:i,mode:"overhead"}}function Tx(){const i=new xt,t=Yt(new le(.3,.05,4,10),Wt.marigold);i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2,s=Yt(new ae(.06,0),e%2?Wt.jasmine:Wt.marigold);s.position.set(Math.cos(n)*.3,Math.sin(n)*.3,0),i.add(s)}return i.position.set(0,1.16,.34),i.rotation.x=.25,{group:i,mode:"hold"}}function Ax(){const i=new xt,t=Yt(new st(.02,.02,.5,6),Wt.bronze);t.rotation.z=-.5,t.position.set(.12,.05,.28),i.add(t);const e=Yt(new st(.006,.006,.16,4),Wt.brass);e.position.set(.32,-.05,.42),i.add(e);const n=Yt(new st(.07,.07,.14,6,1,!0),Wt.brass);n.position.set(.32,-.2,.42),i.add(n);const s=Yt(new Jt(.1,.09,6),Wt.brass);s.position.set(.32,-.09,.42),i.add(s);const o=Yt(new st(.075,.06,.03,6),Wt.brass);o.position.set(.32,-.28,.42),i.add(o);const r=Wt.brass.clone();r.color.setHex(O.flame),r.emissive.setHex(O.emberGlow),r.emissiveIntensity=1.4,r.metalness=0,r.roughness=.4;const a=Yt(new ae(.05,0),r);return a.scale.y=1.5,a.position.set(.32,-.2,.42),i.add(a),i.position.set(-.18,1.62,.08),{group:i,mode:"raise-r",flame:a}}function Rx(){const i=new xt,t=Yt(new st(.025,.03,2.4,6),Wt.bronze);t.position.y=1.2,i.add(t);const e=Yt(new Jt(.06,.2,6),Wt.gold);e.position.y=2.5,i.add(e);const n=new Yu;n.moveTo(0,0),n.lineTo(.7,-.18),n.lineTo(0,-.5),n.lineTo(0,0);const s=Yt(new Kc(n),Wt.burgundy);s.position.set(.03,2.3,0),i.add(s);const o=Yt(new Et(.03,.5,.02),Wt.gold);return o.position.set(.03,2.05,.005),i.add(o),i.position.set(.22,0,.05),{group:i,mode:"stave-r"}}function Cx(){const i=new xt,t=Yt(new st(.16,.16,.34,10),Wt.bronze);t.rotation.z=Math.PI/2,i.add(t);const e=Yt(new le(.16,.025,3,10),Wt.cream);e.position.x=.17,i.add(e);const n=Yt(new le(.16,.025,3,10),Wt.cream);n.position.x=-.17,i.add(n);const s=Yt(new Et(.04,.5,.02),Wt.crimson);return s.rotation.z=.9,s.position.y=.28,i.add(s),i.position.set(0,1,.26),{group:i,mode:"drum"}}function Px(){const i=new xt,t=Yt(new st(.018,.03,.34,6),Wt.bronze);i.add(t);const e=Yt(new Jt(.07,.1,6,1,!0),Wt.brass);e.position.y=-.21,i.add(e);const n=Yt(new st(.008,.012,.05,5),Wt.gold);return n.position.y=.19,i.add(n),i.position.set(.02,1.34,.2),i.rotation.x=.9,{group:i,mode:"play"}}function Lx(){const i=new xt,t=Yt(new st(.022,.028,1.1,6),Wt.gold);t.rotation.x=Math.PI/2,t.position.z=.55,i.add(t);const e=Yt(new Jt(.11,.16,8,1,!0),Wt.gold);e.rotation.x=-Math.PI/2,e.position.z=1.16,i.add(e);const n=Yt(new le(.03,.012,3,8),Wt.brass);return n.rotation.y=Math.PI/2,n.position.z=.35,i.add(n),i.position.set(0,1.32,.14),i.rotation.x=-.12,{group:i,mode:"play"}}function Ix(){const i=new xt,t=Yt(new st(.018,.022,.34,6),Wt.gold);t.position.y=-.17,i.add(t);const e=Yt(new Ot(.035,6,4),Wt.gold);i.add(e);for(let n=0;n<5;n++){const s=(n-2)*.32,o=Yt(new Jt(.035,.42,5),Wt.leaf);o.position.set(Math.sin(s)*.16,.2+Math.cos(s)*.05,0),o.rotation.z=-s,i.add(o);const r=Yt(new ae(.035,0),Wt.gold);r.position.set(Math.sin(s)*.28,.38+Math.cos(s)*.05,0),i.add(r)}return i.position.set(.18,1.62,.06),i.rotation.z=-.25,{group:i,mode:"raise-r"}}const Ih={chhatri:bx,garland:Tx,lamp:Ax,flag:Rx,dhol:Cx,shehnai:Px,turhi:Lx,morchhal:Ix};function Dx(i){switch(i){case"overhead":return{l:{x:-2.5,z:.35},r:{x:-2.5,z:-.35}};case"hold":return{l:{x:-1.35,z:.25},r:{x:-1.35,z:-.25}};case"raise-r":return{l:{x:.12,z:.1},r:{x:-2.2,z:-.2}};case"stave-r":return{l:{x:.12,z:.1},r:{x:-.55,z:-.42}};case"drum":return{l:{x:-.95,z:.55},r:{x:-.95,z:-.55}};case"play":return{l:{x:-1.7,z:.35},r:{x:-1.7,z:-.35}};default:return{l:{x:.12,z:.1},r:{x:.12,z:-.1}}}}function id(i={}){const t=i.phase||0,e=Ih[i.item]?i.item:"garland",n=new xt,s=Lh(-.09),o=Lh(.09);n.add(s.g,o.g);const r=Yt(new st(.2,.28,.5,8),Wt.white);r.position.y=.62,n.add(r);const a=Yt(new st(.15,.2,.5,8),Wt.white);a.position.y=1.1,n.add(a);const c=Yt(new le(.2,.03,3,8),Wt.gold);c.rotation.x=Math.PI/2,c.position.y=.87,n.add(c);const l=Yt(new Et(.44,.13,.04),Wt.burgundy);l.rotation.z=.6,l.position.set(0,1.06,.19),n.add(l);const h=Yt(new le(.1,.025,3,8),Wt.gold);h.rotation.x=Math.PI/2,h.position.y=1.34,n.add(h);const d=Yt(new st(.04,.045,.08,6),Wt.skin);d.position.y=1.39,n.add(d);const p=Yt(new Ot(.12,8,5),Wt.skin);p.position.y=1.53,n.add(p);const f=Yt(new Jt(.02,.05,4),Wt.skin);f.rotation.x=Math.PI/2,f.position.set(0,1.52,.12),n.add(f);const _=Yt(new Ot(.135,8,5),Wt.white);_.scale.y=.8,_.position.y=1.63,n.add(_);const v=Yt(new le(.135,.035,3,8),Wt.burgundy);v.rotation.x=Math.PI/2+.15,v.position.y=1.6,n.add(v);const m=Yt(new Jt(.03,.14,5),Wt.marigold);m.position.set(0,1.76,-.05),m.rotation.x=-.3,n.add(m);const u=Yt(new ae(.03,0),Wt.gold);u.position.set(0,1.62,.13),n.add(u);const y=Ph(1),x=Ph(-1);n.add(y),n.add(x);const{group:S,mode:C,flame:E}=Ih[e]();n.add(S);const b=Dx(C);y.rotation.set(b.l.x,0,b.l.z),x.rotation.set(b.r.x,0,b.r.z);const P={x:b.l.x,z:b.l.z},U={x:b.r.x,z:b.r.z},M=C==="play"||C==="drum";function w(D,k,W={amount:0,phase:0}){const $=Math.sin(D*2+t),q=W.amount||0,tt=Math.sin(W.phase||0)*.38*q;if(s.g.rotation.x=tt,o.g.rotation.x=-tt,s.footPivot.rotation.x=-tt*.78,o.footPivot.rotation.x=tt*.78,n.position.y=($*.5+.5)*.018+Math.abs(Math.sin(W.phase||0))*.026*q,C==="drum"){const B=Math.abs(Math.sin(D*7+t)),lt=Math.abs(Math.sin(D*7+t+1.2));y.rotation.x=P.x-B*.35,x.rotation.x=U.x-lt*.35}else y.rotation.x=P.x+$*.05,x.rotation.x=U.x-$*.05;n.rotation.z=M?Math.sin(D*1.6+t)*.045:0,E&&(E.material.emissiveIntensity=1.2+Math.sin(D*9+t)*.35,E.scale.x=1+Math.sin(D*11+t)*.12)}return{group:n,update:w,gaitScale:6,gaitOffset:t}}const sd=new et({color:O.skin,roughness:.85,metalness:0}),Ux=new et({color:O.skinDark,roughness:.85,metalness:0}),Dh=new et({color:1708040,roughness:.8,metalness:0}),Nx=new et({color:O.bronze,roughness:.55,metalness:.3});new et({color:O.cream,roughness:.8,metalness:0});const Vn=new et({color:O.gold,roughness:.34,metalness:.9,emissive:O.goldBright,emissiveIntensity:.2}),Uh=new Map;function Ln(i,t=!1){const e=i+(t?"d":"");let n=Uh.get(e);return n||(n=new et({color:i,roughness:.82,metalness:0,side:t?de:Pn}),Uh.set(e,n)),n}const ge=(i,t)=>new Z(i,t),Wn={magenta:14037868,teal:829048,royal:3890139,emerald:627304,violet:7358696},Nh={armsUpM:{female:!1,cloth:O.saffron,legs:O.cream,turban:Wn.teal,sash:O.burgundy},bhangraM:{female:!1,cloth:Wn.royal,legs:O.cream,turban:Wn.magenta,sash:O.gold},clapM:{female:!1,cloth:Wn.emerald,legs:O.cream,turban:O.saffron,sash:O.burgundy},jumpM:{female:!1,cloth:O.marigoldDeep,legs:O.cream,turban:Wn.teal,sash:O.burgundy},spinF:{female:!0,choli:Wn.teal,lehenga:Wn.magenta,dupatta:O.burgundy},thumkaF:{female:!0,choli:Wn.emerald,lehenga:Wn.violet,dupatta:O.marigold}};function Fh(i,t){const e=new xt,n=ge(new st(.05,.044,.34,6),t);n.position.y=-.17,e.add(n);const s=new xt;s.position.y=-.34,e.add(s);const o=ge(new st(.042,.036,.3,6),t);o.position.y=-.15,s.add(o);const r=ge(new Ot(.052,6,4),sd);return r.position.y=-.32,s.add(r),e.position.set(i*.18,1.24,0),{g:e,elbow:s}}function Oh(i,t){const e=new xt,n=ge(new st(.07,.06,.4,6),t);n.position.y=-.2,e.add(n);const s=new xt;s.position.y=-.42,e.add(s);const o=ge(new st(.057,.05,.4,6),t);o.position.y=-.2,s.add(o);const r=ge(new Et(.09,.055,.18),Nx);return r.position.set(0,-.42,.045),s.add(r),e.position.set(i,.86,0),{g:e,knee:s}}function od(i={}){const t=i.phase||0,e=Nh[i.variant]?i.variant:"armsUpM",n=Nh[e],s=new xt,o=new xt;s.add(o);const r=Math.random()<.5?sd:Ux,a=n.female?r:Ln(n.legs),c=Oh(-.09,a),l=Oh(.09,a);o.add(c.g,l.g);let h=null;if(n.female){const E=ge(new st(.15,.17,.28,8),Ln(n.choli));E.position.y=1.12,o.add(E);const b=ge(new st(.14,.15,.16,6),r);b.position.y=.94,o.add(b);const P=ge(new le(.15,.02,3,8),Vn);P.rotation.x=Math.PI/2,P.position.y=.99,o.add(P),h=new xt,h.position.y=.9;const U=ge(new Jt(.56,.78,12,1,!0),Ln(n.lehenga,!0));U.position.y=-.39,h.add(U);const M=ge(new le(.55,.03,3,12),Vn);M.rotation.x=Math.PI/2,M.position.y=-.78,h.add(M),o.add(h)}else{const E=Ln(n.cloth),b=ge(new st(.16,.19,.5,8),E);b.position.y=1.06,o.add(b);const P=ge(new st(.19,.26,.34,8),E);P.position.y=.72,o.add(P);const U=ge(new le(.255,.02,3,8),Vn);U.rotation.x=Math.PI/2,U.position.y=.56,o.add(U);const M=ge(new Et(.03,.5,.03),Vn);M.position.set(0,1.06,.185),o.add(M);const w=ge(new Et(.42,.12,.04),Ln(n.sash));w.rotation.z=.62,w.position.set(0,1.05,.18),o.add(w)}const d=ge(new st(.04,.045,.08,6),r);d.position.y=1.38,o.add(d);const p=ge(new Ot(.115,8,6),r);p.position.y=1.52,o.add(p);const f=ge(new Jt(.02,.05,4),r);if(f.rotation.x=Math.PI/2,f.position.set(0,1.51,.11),o.add(f),n.female){const E=ge(new Ot(.12,8,5),Dh);E.scale.set(1,1,.7),E.position.set(0,1.53,-.03),o.add(E);const b=ge(new Ot(.06,6,4),Dh);b.position.set(0,1.46,-.14),o.add(b);const P=ge(new Ot(.15,8,4,0,Math.PI*2,0,Math.PI/2),Ln(n.dupatta,!0));P.scale.set(1,.85,1),P.position.set(0,1.55,-.02),o.add(P);const U=ge(new ae(.022,0),Vn);U.position.set(0,1.6,.05),o.add(U)}else{const E=ge(new Ot(.135,8,5),Ln(n.turban));E.scale.y=.82,E.position.y=1.62,o.add(E);const b=ge(new le(.135,.032,3,8),Vn);b.rotation.x=Math.PI/2+.14,b.position.y=1.59,o.add(b);const P=ge(new Jt(.03,.15,5),Ln(n.sash||O.marigold));P.position.set(0,1.76,-.04),P.rotation.x=-.35,o.add(P);const U=ge(new ae(.028,0),Vn);U.position.set(0,1.61,.12),o.add(U)}const _=n.female?Ln(n.choli):Ln(n.cloth),v=Fh(1,_),m=Fh(-1,_);o.add(v.g,m.g);const u=new le(.045,.012,3,6),y=ge(u,Vn);y.rotation.x=Math.PI/2,y.position.y=-.28,v.elbow.add(y);const x=ge(u,Vn);x.rotation.x=Math.PI/2,x.position.y=-.28,m.elbow.add(x);const S=(E,b,P,U=0,M=0)=>{E.g.rotation.set(b,0,P),E.elbow.rotation.set(U,0,M)};function C(E,b,P={amount:0,phase:0}){const U=E+t;if(c.g.rotation.x=0,l.g.rotation.x=0,c.knee.rotation.x=0,l.knee.rotation.x=0,e==="bhangraM"){const D=Math.sin(U*3),k=(D+1)*.5;o.position.set(0,Math.abs(D)*.1+.02,0),o.rotation.set(0,D*.4,0);const W=-2.85,$=-1.35;S(m,$+(W-$)*k,-.3-.6*(1-k),-.2,0),S(v,W+($-W)*k,.3+.6*k,-.2,0),l.g.rotation.x=-.7*(1-k),c.g.rotation.x=-.7*k,l.knee.rotation.x=-.4*(1-k),c.knee.rotation.x=-.4*k}else if(e==="clapM"){const D=Math.sin(U*2.4);o.position.set(D*.13,Math.abs(Math.sin(U*4.8))*.05,0),o.rotation.set(0,0,D*.07);const W=.12+(Math.sin(U*7)*.5+.5)*.42;S(v,-2.95,W,-.15,0),S(m,-2.95,-W,-.15,0),c.g.rotation.x=Math.max(0,D)*.35,l.g.rotation.x=Math.max(0,-D)*.35}else if(e==="jumpM"){const D=Math.abs(Math.sin(U*2.5)),k=Math.pow(D,.65);o.position.set(0,k*.42,0),o.rotation.set(0,0,Math.sin(U*2.5)*.05);const W=Math.sin(U*9)*.18;S(v,-2.9+W,.3,-.2*k,0),S(m,-2.9-W,-.3,-.2*k,0),c.g.rotation.x=-.25*D,l.g.rotation.x=-.25*D,c.knee.rotation.x=-1*D,l.knee.rotation.x=-1*D}else if(e==="spinF"){o.rotation.set(0,U*3.4,.05),o.position.set(0,.02+Math.abs(Math.sin(U*6))*.03,0);const D=1.28+Math.sin(U*6)*.08;h&&h.scale.set(D,1,D);const k=Math.sin(U*4)*.12;S(v,-1.5,.75+k,-.35,0),S(m,-1.5,-.75-k,-.35,0)}else if(e==="thumkaF"){const D=Math.sin(U*2.6);o.position.set(D*.07,Math.abs(Math.sin(U*5.2))*.04,0),o.rotation.set(0,0,D*.12),h&&(h.rotation.z=-D*.16),S(m,-2.65,-.22+Math.sin(U*5)*.12,0,Math.sin(U*8)*.4),S(v,-.7,.95,-1.5,0),c.knee.rotation.x=-Math.abs(D)*.12,l.knee.rotation.x=-Math.abs(D)*.12}else{const D=Math.abs(Math.sin(U*3.2)),k=Math.sin(U*6);o.position.set(0,D*.2,0),o.rotation.set(0,0,Math.sin(U*3.2)*.05),S(v,-2.8+k*.18,.32+k*.15,0,Math.sin(U*10)*.5),S(m,-2.8-k*.18,-.32-k*.15,0,-Math.sin(U*10)*.5),c.knee.rotation.x=-D*.28,l.knee.rotation.x=-D*.28}const M=P.amount||0,w=Math.sin(P.phase||0)*.24*M;c.g.rotation.x+=w,l.g.rotation.x-=w,o.position.y+=Math.abs(Math.sin(P.phase||0))*.025*M}return C(0),{group:s,update:C,gaitScale:6,gaitOffset:t}}const re={legM:new st(.055,.062,.5,6),shoe:new Et(.09,.05,.17),coat:new st(.155,.24,.62,8,1,!0),coatHem:new st(.245,.258,.06,8,1,!0),torso:new st(.14,.18,.4,8),skirt:new st(.13,.5,.9,10,1,!0),skirtHem:new ei(.5,10),skirtBand:new st(.5,.52,.07,10,1,!0),waistBand:new st(.185,.19,.05,10,1,!0),neck:new st(.04,.045,.08,6,1,!0),head:new Ot(.108,7,5),nose:new Jt(.02,.05,4),turban:new Ot(.135,8,5,0,Math.PI*2,0,Math.PI*.62),turbanBnd:new le(.135,.032,3,8),plume:new Jt(.03,.13,5),jewel:new ae(.028,0),hairCap:new Ot(.118,8,5,0,Math.PI*2,0,Math.PI*.6),sideHair:new Ot(.05,5,4),braid:new st(.032,.016,.3,6),bindi:new ei(.012,6),earring:new ae(.018,0),necklace:new le(.07,.012,3,8),upper:new st(.05,.044,.26,6,1,!0),fore:new st(.044,.038,.24,6,1,!0),hand:new Ot(.048,5,4),cuff:new st(.05,.05,.025,6,1,!0),sash:new Et(.42,.12,.03),dupatta:new be(.34,.62),dupTrim:new be(.34,.04),petal:new be(.03,.045)},we=(i,t=.82,e=.04,n)=>new et(Object.assign({color:i,roughness:t,metalness:e},n)),ce={skin:we(O.skin,.78,0),hair:we(1708296,.6,.05),cream:we(O.cream,.85,0),bronze:we(O.bronze,.6,.35),ivory:we(O.ivory,.72,.03,{side:de}),gold:we(O.gold,.34,.9,{emissive:O.brass,emissiveIntensity:.3}),goldB:we(O.goldBright,.3,.85,{emissive:O.gold,emissiveIntensity:.5}),burg:we(O.burgundy,.82,.04),marigold:we(O.marigold,.6,0,{emissive:O.marigoldDeep,emissiveIntensity:.25}),petalA:we(O.marigold,.55,0,{emissive:O.marigoldDeep,emissiveIntensity:.35,side:de}),petalB:we(O.rose,.6,0,{emissive:O.crimson,emissiveIntensity:.2,side:de})},Fx=[we(3890139,.8,.05),we(627304,.8,.05),we(O.crimson,.8,.05),we(829048,.8,.05),we(7358696,.8,.05),we(O.marigoldDeep,.8,.05)],Ox=[we(14037868,.82,.04),we(627304,.82,.04),we(3890139,.82,.04),we(O.crimson,.82,.04),we(7358696,.82,.04),we(O.marigold,.82,.04)],Bh=i=>i[Math.random()*i.length|0];function zh(i,t){const e=new xt;e.position.set(i*.15,1.3,0);const n=new Z(re.upper,t);n.position.y=-.13,e.add(n);const s=new xt;s.position.y=-.26,e.add(s);const o=new Z(re.fore,ce.skin);o.position.y=-.12,s.add(o);const r=new Z(re.cuff,ce.gold);r.position.y=-.225,s.add(r);const a=new Z(re.hand,ce.skin);return a.position.y=-.25,s.add(a),{shoulder:e,fore:s}}function $c(i={}){const t=i.phase||0,e={clapping:1,namaste:1,cheering:1,showering:1}[i.variant]?i.variant:"clapping",n=typeof i.gender=="string"?i.gender==="female":Math.random()<.5,s=new xt,o=new xt;s.add(o);const r=(u,y,x,S,C,E)=>{const b=new Z(u,y);return b.position.set(x,S,C),(E||o).add(b),b},a=Bh(n?Ox:Fx),c=[];if(n){const u=r(re.skirt,a,0,.47,0);u.rotation.y=Math.PI/12;const y=r(re.skirtHem,ce.burg,0,.02,0);y.rotation.x=-Math.PI/2,r(re.skirtBand,ce.gold,0,.06,0),r(re.waistBand,ce.goldB,0,.94,0)}else{for(const u of[-.085,.085]){const y=new xt;y.position.set(u,.52,0),o.add(y),r(re.legM,ce.cream,0,-.25,0,y);const x=new xt;x.position.y=-.49,y.add(x),r(re.shoe,ce.bronze,0,0,.03,x),c.push({hip:y,foot:x})}r(re.coat,a,0,.7,0),r(re.coatHem,ce.gold,0,.42,0)}r(re.torso,a,0,1.16,0);const l=r(new le(.1,.02,3,8),ce.goldB,0,1.34,0);if(l.rotation.x=Math.PI/2,n)r(re.dupatta,ce.ivory,-.14,1.12,-.02).rotation.set(.12,.32,.14),r(re.dupTrim,ce.goldB,-.14,.83,-.02).rotation.set(.12,.32,.14),r(re.necklace,ce.gold,0,1.33,.04).rotation.x=Math.PI/2;else{const u=r(re.sash,ce.burg,0,1.12,.17);u.rotation.z=.6,r(new st(.185,.185,.05,8,1,!0),ce.gold,0,.98,0)}r(re.neck,ce.skin,0,1.4,.004),r(re.head,ce.skin,0,1.51,.008).scale.set(.96,1.05,.98);const d=r(re.nose,ce.skin,0,1.5,.1);if(d.rotation.x=Math.PI/2,n){r(re.hairCap,ce.hair,0,1.52,-.012).scale.set(1,1.04,1.02),r(re.sideHair,ce.hair,-.082,1.47,-.02),r(re.sideHair,ce.hair,.082,1.47,-.02);const y=r(re.braid,ce.hair,0,1.3,-.1);y.rotation.x=-.15,r(re.bindi,ce.goldB,0,1.535,.098),r(re.earring,ce.goldB,-.098,1.46,.03),r(re.earring,ce.goldB,.098,1.46,.03),r(re.jewel,ce.goldB,0,1.6,.06).scale.setScalar(.6)}else{const u=r(re.turban,a,0,1.6,-.005);u.scale.y=.82;const y=r(re.turbanBnd,ce.burg,0,1.58,0);y.rotation.x=Math.PI/2+.16;const x=r(re.plume,ce.marigold,0,1.77,-.04);x.rotation.x=-.35,r(re.jewel,ce.goldB,0,1.6,.12)}const p=a,f=zh(-1,p),_=zh(1,p);if(o.add(f.shoulder,_.shoulder),n){const u=new Z(re.cuff,ce.goldB);u.position.y=-.19,f.fore.add(u);const y=new Z(re.cuff,ce.goldB);y.position.y=-.19,_.fore.add(y)}let v=null;if(e==="showering"){v=[];const u=new xt;o.add(u);for(let y=0;y<8;y++){const x=new Z(re.petal,y%2?ce.petalA:ce.petalB),S=(Math.random()-.5)*.34,C=.28+Math.random()*.14,E=1.55+Math.random()*.15;x.position.set(S,E,C),u.add(x),v.push({m:x,x0:S,y0:E,z0:C,sp:.25+Math.random()*.2,ph:Math.random()})}}kh(e,f,_,0,t);function m(u,y,x={amount:0,phase:0}){if(o.position.y=(Math.sin(u*2.2+t)*.5+.5)*.02,o.position.x=0,o.position.z=0,o.rotation.set(0,0,0),kh(e,f,_,u,t),e==="namaste")o.rotation.x=.05+(Math.sin(u*.8+t)*.5+.5)*.06,o.rotation.y=Math.sin(u*.5+t)*.03;else if(e==="cheering")o.rotation.z=Math.sin(u*2+t)*.05,o.position.x=Math.sin(u*2+t)*.03;else if(e==="clapping")o.position.y+=(Math.sin(u*4+t)*.5+.5)*.012;else if(e==="showering"){o.rotation.y=Math.sin(u*1.2+t)*.05;for(const E of v){const b=(u*E.sp+E.ph)%1;E.m.position.set(E.x0+Math.sin(b*6+E.ph*6)*.06,E.y0-b*.75,E.z0+b*.28),E.m.rotation.set(b*7,b*5+E.ph,E.ph*3)}}const S=x.amount||0,C=Math.sin(x.phase||0)*.34*S;c.length?(c[0].hip.rotation.x=C,c[1].hip.rotation.x=-C,c[0].foot.rotation.x=-C*.78,c[1].foot.rotation.x=C*.78):o.rotation.z+=Math.sin(x.phase||0)*.028*S,o.position.y+=Math.abs(Math.sin(x.phase||0))*.022*S}return{group:s,update:m,gaitScale:6,gaitOffset:t}}function kh(i,t,e,n,s){if(i==="namaste")t.shoulder.rotation.set(-.9,0,.52),e.shoulder.rotation.set(-.9,0,-.52),t.fore.rotation.x=-1.15,e.fore.rotation.x=-1.15;else if(i==="clapping"){const r=.36+Math.sin(n*4+s)*.13;t.shoulder.rotation.set(-1.12,0,r),e.shoulder.rotation.set(-1.12,0,-r),t.fore.rotation.x=-.72,e.fore.rotation.x=-.72}else if(i==="cheering"){const o=Math.sin(n*6+s);e.shoulder.rotation.set(-2.5+o*.14,0,-.2+o*.36),e.fore.rotation.x=-.2+o*.1,t.shoulder.rotation.set(-.12,0,.16+Math.sin(n*2+s)*.05),t.fore.rotation.x=-.45}else{const o=Math.sin(n*3+s),r=Math.sin(n*3+s+1.1);t.shoulder.rotation.set(-1.7+o*.28,0,.16),e.shoulder.rotation.set(-1.7+r*.28,0,-.16),t.fore.rotation.x=-.35-o*.18,e.fore.rotation.x=-.35-r*.18}}function Qc(){return new et({color:O.brass,metalness:.9,roughness:.35})}function Bx(){return new et({color:O.gold,metalness:.85,roughness:.3})}function rd(){const i=new xt,t=[new ot(0,0),new ot(.06,0),new ot(.078,.055),new ot(.062,.058),new ot(.045,.022),new ot(0,.02)],e=new Z(new Qs(t,12),Qc());i.add(e);const n=[new ot(0,0),new ot(.02,.018),new ot(.033,.045),new ot(.026,.08),new ot(.011,.115),new ot(0,.15)],s=new Z(new Qs(n,8),new et({color:O.flame,emissive:O.flame,emissiveIntensity:1.3,roughness:.6,metalness:0}));return s.position.y=.03,i.add(s),i}function zx(){const i=new xt,t=Bx(),e=new Z(new st(.15,.17,.34,6,1,!0),new et({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.3,transparent:!0,opacity:.5,roughness:.5,metalness:.1,side:de}));e.position.y=.21,i.add(e);const n=new et({color:O.jasmine,emissive:O.flame,emissiveIntensity:1.1,roughness:.5,metalness:0}),s=new Z(new ae(.06,0),n);s.position.y=.21,i.add(s);const o=new st(.19,.19,.03,6),r=new Z(o,t);r.position.y=.045,i.add(r);const a=new Z(o,t);a.position.y=.37,i.add(a);const c=new Et(.015,.34,.015);for(let f=0;f<6;f++){const _=f/6*Math.PI*2,v=new Z(c,t);v.position.set(Math.cos(_)*.165,.21,Math.sin(_)*.165),i.add(v)}const l=new Z(new Jt(.2,.13,6),t);l.position.y=.44,i.add(l);const h=new Z(new ae(.035,0),t);h.position.y=.52,i.add(h);const d=new Z(new le(.035,.012,4,10),t);return d.position.y=.56,i.add(d),{group:i,update:f=>{n.emissiveIntensity=1.1+Math.sin(f*9)*.15+Math.sin(f*23)*.06}}}function kx(i=3,t="mixed"){const e=new xt,n=new et({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.25,roughness:.7,metalness:0}),s=new et({color:O.marigoldDeep,roughness:.75,metalness:0}),o=new et({color:O.jasmine,emissive:O.jasmine,emissiveIntensity:.12,roughness:.75,metalness:0});let r;t==="marigold"?r=[n,s]:t==="jasmine"?r=[o,o]:r=[n,o];const a=i*.12,c=Math.min(18,Math.max(6,Math.round(i/.18))),l=new ae(.05,0);for(let h=0;h<c;h++){const d=c===1?0:h/(c-1)*2-1,p=d*(i/2),f=-a*(1-d*d),_=new Z(l,r[h%r.length]);_.position.set(p,f,0);const v=.85+Math.random()*.4;_.scale.setScalar(v),_.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),e.add(_)}return e}function Gx(){const i=new xt,t=[new ot(0,0),new ot(.07,0),new ot(.11,.1),new ot(.095,.2),new ot(.055,.255),new ot(.085,.3),new ot(.062,.305),new ot(.045,.27),new ot(0,.26)],e=new Z(new Qs(t,12),Qc());i.add(e);const n=new et({color:O.leaf,roughness:.65,metalness:0}),s=new Jt(.05,.2,4),o=6;for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=new Z(s,n);h.scale.set(1,1,.35),h.position.set(Math.cos(l)*.075,.33,Math.sin(l)*.075),h.rotation.y=-l,h.rotation.z=Math.cos(l)*.5,h.rotation.x=Math.sin(l)*.5,i.add(h)}const r=new Z(new Ot(.075,10,7),new et({color:O.bronze,roughness:.85,metalness:0}));r.position.y=.35,i.add(r);const a=new Z(new le(.072,.008,4,12),new et({color:O.crimson,roughness:.8,metalness:0}));return a.rotation.x=Math.PI/2,a.position.y=.235,i.add(a),i}function tl(){const i=new xt,t=new Z(new st(.2,.19,.025,12),Qc());t.position.y=.0125,i.add(t);const e=[new et({color:O.marigold,emissive:O.marigoldDeep,emissiveIntensity:.2,roughness:.7,metalness:0,side:de}),new et({color:O.saffron,roughness:.7,metalness:0,side:de}),new et({color:O.jasmine,roughness:.75,metalness:0,side:de})],n=new ei(.03,6),s=24;for(let o=0;o<s;o++){const r=new Z(n,e[o%e.length]),a=Math.sqrt(Math.random())*.17,c=Math.random()*Math.PI*2;r.position.set(Math.cos(c)*a,.026+Math.random()*.03,Math.sin(c)*a),r.rotation.x=-Math.PI/2+(Math.random()-.5)*.8,r.rotation.z=Math.random()*Math.PI*2,r.scale.setScalar(.7+Math.random()*.6),i.add(r)}return i}function mn(i){return"#"+i.toString(16).padStart(6,"0")}function Hx(i,t,e){const n=i+t*2,s=256,o=64,r=document.createElement("canvas");r.width=s,r.height=o;const a=r.getContext("2d"),c=document.createElement("canvas");c.width=s,c.height=o;const l=c.getContext("2d"),h=t/n,d=h+e/n,p=1-d,f=1-h;l.fillStyle="#000",l.fillRect(0,0,s,o);for(let x=0;x<s;x++){const S=x/s;let C,E=null;S<h||S>f?C=mn(O.cream):S<d||S>p?(C=mn(O.gold),E=mn(O.goldBright)):C=mn(O.burgundy),a.fillStyle=C,a.fillRect(x,0,1,o),E&&(l.fillStyle=E,l.fillRect(x,0,1,o))}const _=Math.floor(s*(d+.02)),v=Math.floor(s*(p-.02));for(let x=0;x<o;x++){const S=x%6<3?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.03)";a.fillStyle=S,a.fillRect(_,x,v-_,1)}a.fillStyle=mn(O.goldBright);const m=s*.5;for(let x=4;x<o;x+=16)a.beginPath(),a.moveTo(m,x),a.lineTo(m+5,x+5),a.lineTo(m,x+10),a.lineTo(m-5,x+5),a.closePath(),a.fill();const u=new Ni(r);u.wrapS=qn,u.wrapT=Di,u.anisotropy=4;const y=new Ni(c);return y.wrapS=qn,y.wrapT=Di,{map:u,emap:y}}function Vx(i,t){const e=[];if(!i||i.length<2)return e;e.push({x:i[0][0],z:i[0][1]});let n=0;for(let o=0;o<i.length-1;o++){const r=i[o][0],a=i[o][1],c=i[o+1][0],l=i[o+1][1],h=c-r,d=l-a,p=Math.hypot(h,d);if(p<1e-5)continue;const f=h/p,_=d/p;let v=t-n;for(;v<p;)e.push({x:r+f*v,z:a+_*v}),v+=t;n=p-(v-t)}const s=i[i.length-1];return e.push({x:s[0],z:s[1]}),e}function Wx(i){const t=new xt,e=i.points||[],n=i.width,s=i.getHeight||(()=>0),o=n*.16,r=n*.05,a=n*.5+o,c=Vx(e,1.5);if(c.length<2)return t;const l=c.length,h=9,d=i.lift,p=new Float32Array(l*h*3),f=new Float32Array(l*h*2),_=[],v=3;let m=0;for(let E=0;E<l;E++){const b=c[E],P=c[Math.max(0,E-1)],U=c[Math.min(l-1,E+1)];let M=U.x-P.x,w=U.z-P.z;const D=Math.hypot(M,w)||1;M/=D,w/=D;const k=-w,W=M;E>0&&(m+=Math.hypot(b.x-c[E-1].x,b.z-c[E-1].z));for(let $=0;$<h;$++){const q=$/(h-1),tt=(q-.5)*2*a,B=b.x+k*tt,lt=b.z+W*tt,nt=s(B,lt)+d,mt=(E*h+$)*3;p[mt]=B,p[mt+1]=nt,p[mt+2]=lt;const zt=(E*h+$)*2;f[zt]=q,f[zt+1]=m/v}if(E<l-1)for(let $=0;$<h-1;$++){const q=E*h+$,tt=q+1,B=(E+1)*h+$,lt=B+1;_.push(q,B,tt,tt,B,lt)}}const u=new Be;u.setAttribute("position",new en(p,3)),u.setAttribute("uv",new en(f,2)),u.setIndex(_),u.computeVertexNormals();const{map:y,emap:x}=Hx(n,o,r),S=new et({map:y,emissiveMap:x,emissive:O.goldBright,emissiveIntensity:.45,roughness:.82,metalness:0,side:de,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),C=new Z(u,S);return C.receiveShadow=!0,t.add(C),t}function Xx(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=512/2,s=mn(O.burgundy),o=mn(O.gold),r=mn(O.goldBright),a=mn(O.jasmine),c=mn(O.marigold),l=mn(O.saffron);e.fillStyle=mn(O.cream),e.beginPath(),e.arc(n,n,512*.5,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.48,0,Math.PI*2),e.fill();const h=(m,u,y)=>{e.strokeStyle=y,e.lineWidth=u,e.beginPath(),e.arc(n,n,m,0,Math.PI*2),e.stroke()};h(512*.46,6,r),h(512*.44,3,a),h(512*.3,5,o),h(512*.2,3,a);const d=(m,u,y,x,S,C)=>{for(let E=0;E<m;E++){const b=E/m*Math.PI*2,P=n+Math.cos(b)*(u+y)*.5,U=n+Math.sin(b)*(u+y)*.5;e.save(),e.translate(P,U),e.rotate(b+Math.PI/2),e.fillStyle=S,e.strokeStyle=C,e.lineWidth=2,e.beginPath(),e.ellipse(0,0,x,(y-u)*.5,0,0,Math.PI*2),e.fill(),e.stroke(),e.restore()}};d(24,512*.3,512*.44,512*.028,c,r),d(16,512*.2,512*.3,512*.03,a,o),d(12,512*.08,512*.2,512*.034,l,r),e.fillStyle=o,e.beginPath(),e.arc(n,n,512*.08,0,Math.PI*2),e.fill(),e.fillStyle=s,e.beginPath(),e.arc(n,n,512*.05,0,Math.PI*2),e.fill(),e.fillStyle=r,e.beginPath(),e.arc(n,n,512*.02,0,Math.PI*2),e.fill(),e.strokeStyle=r,e.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;e.beginPath(),e.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),e.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),e.stroke()}const p=document.createElement("canvas");p.width=512,p.height=512;const f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512),f.strokeStyle=r,f.fillStyle=r,f.lineWidth=6,f.beginPath(),f.arc(n,n,512*.46,0,Math.PI*2),f.stroke(),f.lineWidth=5,f.beginPath(),f.arc(n,n,512*.3,0,Math.PI*2),f.stroke(),f.beginPath(),f.arc(n,n,512*.02,0,Math.PI*2),f.fill(),f.lineWidth=2;for(let m=0;m<24;m++){const u=m/24*Math.PI*2;f.beginPath(),f.moveTo(n+Math.cos(u)*512*.08,n+Math.sin(u)*512*.08),f.lineTo(n+Math.cos(u)*512*.2,n+Math.sin(u)*512*.2),f.stroke()}const _=new Ni(t),v=new Ni(p);return{map:_,emap:v}}function ad(i){const t=new xt,e=i||3,n=new ei(e,48),{map:s,emap:o}=Xx(),r=new et({map:s,emissiveMap:o,emissive:O.goldBright,emissiveIntensity:.6,roughness:.7,metalness:.15,side:de,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),a=new Z(n,r);return a.rotation.x=-Math.PI/2,a.position.y=.05,a.receiveShadow=!0,t.add(a),t}const Sa=new qt;function Yx(i){let t=0;for(let n=0;n<i.length;n++)t+=i[n][1];let e=Math.random()*t;for(let n=0;n<i.length;n++)if(e-=i[n][1],e<=0)return i[n][0];return i[i.length-1][0]}function qx(i={}){const t=i.area||{cx:0,cz:0,radius:24},e=t.cx||0,n=t.cz||0,s=t.radius||24,o=i.top!=null?i.top:14,r=typeof i.getHeight=="function"?i.getHeight:()=>0,a=70,c=new be(.16,.24,2,1);{const B=c.attributes.position,lt=.08;for(let nt=0;nt<B.count;nt++){const mt=B.getX(nt),zt=B.getY(nt),Vt=mt/lt,z=.05*(1-Vt*Vt),K=1-.35*Math.max(0,zt/.12);B.setX(nt,mt*K),B.setZ(nt,z)}B.needsUpdate=!0,c.computeVertexNormals()}const l=new et({color:16777215,roughness:.62,metalness:0,side:de,emissive:new qt(O.marigold),emissiveIntensity:.18}),h=new ho(c,l,a);h.instanceMatrix.setUsage(zc),h.frustumCulled=!1;const d=[[O.marigold,4],[O.marigoldDeep,2.5],[O.saffron,2],[O.rose,2.5],[O.jasmine,2],[O.goldBright,1.5],[O.gold,1]],p=new Float32Array(a),f=new Float32Array(a),_=new Float32Array(a),v=new Float32Array(a),m=new Float32Array(a),u=new Float32Array(a),y=new Float32Array(a),x=new Float32Array(a),S=new Float32Array(a),C=new Float32Array(a),E=new Float32Array(a),b=new Float32Array(a),P=new Float32Array(a),U=new Float32Array(a),M=new Float32Array(a),w=new Float32Array(a),D=new Float32Array(a);function k(B){const lt=Math.random()*Math.PI*2,nt=Math.sqrt(Math.random())*s;p[B]=e+Math.cos(lt)*nt,f[B]=n+Math.sin(lt)*nt}const W=new Ae;for(let B=0;B<a;B++){k(B);const lt=r(p[B],f[B]);_[B]=lt+Math.random()*(o-lt+2),v[B]=.24+Math.random()*.4,m[B]=.5+Math.random()*.9,u[B]=Math.random()*Math.PI*2,y[B]=.25+Math.random()*.5,x[B]=.4+Math.random()*.8,S[B]=Math.random()*Math.PI*2,C[B]=.2+Math.random()*.45,E[B]=Math.random()*Math.PI*2,b[B]=Math.random()*Math.PI*2,P[B]=Math.random()*Math.PI*2,U[B]=(Math.random()-.5)*1.6,M[B]=(Math.random()-.5)*2.2,w[B]=(Math.random()-.5)*1.6,D[B]=.75+Math.random()*.8,Sa.setHex(Yx(d));const nt=.85+Math.random()*.3;Sa.multiplyScalar(nt),h.setColorAt(B,Sa)}h.instanceColor&&(h.instanceColor.needsUpdate=!0);const $=new xt;$.add(h);function q(B,lt){lt==null&&(lt=.016),lt>.1&&(lt=.1);for(let nt=0;nt<a;nt++){_[nt]-=v[nt]*lt;const mt=p[nt]+Math.sin(B*m[nt]+u[nt])*y[nt],zt=f[nt]+Math.cos(B*x[nt]+S[nt])*C[nt],Vt=r(mt,zt);if(_[nt]<=Vt+.05){k(nt),_[nt]=o+Math.random()*3,v[nt]=.24+Math.random()*.4;continue}E[nt]+=U[nt]*lt,b[nt]+=M[nt]*lt,P[nt]+=w[nt]*lt,W.position.set(mt,_[nt],zt),W.rotation.set(E[nt],b[nt],P[nt]),W.scale.setScalar(D[nt]),W.updateMatrix(),h.setMatrixAt(nt,W.matrix)}h.instanceMatrix.needsUpdate=!0}q(0,0);function tt(B,lt,nt=7){for(let mt=0;mt<a;mt++){const zt=Math.random()*Math.PI*2,Vt=Math.sqrt(Math.random())*nt;p[mt]=B+Math.cos(zt)*Vt,f[mt]=lt+Math.sin(zt)*Vt;const z=r(p[mt],f[mt]);_[mt]=z+5+Math.random()*7,v[mt]=.5+Math.random()*.65}}return{group:$,update:q,burst:tt}}function Kx(i={}){const t=i.origin||[-60,90,-40],e=i.color!=null?i.color:O.flame,n=Math.max(4,Math.min(10,i.count||8)),s=new xt;s.position.set(t[0],t[1],t[2]);const o=new I(-t[0],-t[1],-t[2]).normalize(),r=64,a=document.createElement("canvas");a.width=r,a.height=r;const c=a.getContext("2d"),l=c.createImageData(r,r);for(let C=0;C<r;C++){const E=C/(r-1),b=Math.pow(1-E,1.3);for(let P=0;P<r;P++){const U=P/(r-1),M=Math.sin(U*Math.PI),w=b*Math.pow(M,1.4),D=(C*r+P)*4;l.data[D]=255,l.data[D+1]=255,l.data[D+2]=255,l.data[D+3]=Math.max(0,Math.min(255,w*255))}}c.putImageData(l,0,0);const h=new Ni(a);h.colorSpace=En,h.minFilter=dn,h.magFilter=dn;const d=120,p=10,f=new be(p,d,1,1);f.translate(0,-d*.5,0);const _=new I(0,-1,0),v=new Un().setFromUnitVectors(_,o),m=Math.abs(o.y)>.9?new I(1,0,0):new I(0,1,0),u=new I().crossVectors(o,m).normalize(),y=[];for(let C=0;C<n;C++){const E=(C/(n-1)-.5)*.5,b=new Un().setFromAxisAngle(u,E),P=new si({color:new qt(e),map:h,transparent:!0,opacity:.05+Math.random()*.04,blending:Zs,depthWrite:!1,side:de,toneMapped:!1}),U=new xt;U.quaternion.copy(b).multiply(v);const M=new Z(f,P),w=new Z(f,P);w.rotation.y=Math.PI*.5,U.add(M,w);const D=.7+Math.random()*.7;U.scale.set(D,1,1),s.add(U),y.push({pivot:U,mat:P,baseOpacity:P.opacity,shimmerSpeed:.3+Math.random()*.7,shimmerPhase:Math.random()*Math.PI*2,swayAxis:u.clone(),swayAmp:.02+Math.random()*.04,swaySpeed:.15+Math.random()*.25,swayPhase:Math.random()*Math.PI*2,baseQuat:U.quaternion.clone()})}const x=new Un;function S(C){for(let E=0;E<y.length;E++){const b=y[E];b.mat.opacity=b.baseOpacity*(.65+.35*Math.sin(C*b.shimmerSpeed+b.shimmerPhase));const P=Math.sin(C*b.swaySpeed+b.swayPhase)*b.swayAmp;x.setFromAxisAngle(b.swayAxis,P),b.pivot.quaternion.copy(x).multiply(b.baseQuat)}}return{group:s,update:S}}const xi={fogColor:16756838,ambient:{color:16767392,intensity:.42},keyLight:{color:16757596,intensity:2.6},hemi:{sky:16766362,ground:6175262,intensity:.55}};function cd(i,t={}){const e=t.w||1024,n=t.h||256,s=document.createElement("canvas");s.width=e,s.height=n;const o=s.getContext("2d");o.fillStyle=t.bg||"#5e1220",o.fillRect(0,0,e,n),o.strokeStyle=t.border||"#e9c46a",o.lineWidth=20,o.strokeRect(12,12,e-24,n-24),o.fillStyle=t.border||"#e9c46a",[[30,30],[e-30,30],[30,n-30],[e-30,n-30]].forEach(([h,d])=>{o.beginPath(),o.arc(h,d,10,0,Math.PI*2),o.fill()}),o.fillStyle=t.fg||"#ffd97a";let r=t.size||128;o.font="bold "+r+'px Georgia, "Times New Roman", serif';const a=e-96,c=o.measureText(i).width;c>a&&(r*=a/c,o.font="bold "+r+'px Georgia, "Times New Roman", serif'),o.textAlign="center",o.textBaseline="middle",o.fillText(i,e/2,n/2+6);const l=new Ni(s);return l.anisotropy=4,l}function Zx(i,t={}){const e=new xt,n=new xt;e.add(n);const s=new et({color:O.cream,roughness:.6,metalness:.2}),o=new et({color:O.crimson,roughness:.5,metalness:.1}),r=new et({color:O.gold,roughness:.3,metalness:.85,emissive:O.brass,emissiveIntensity:.25}),a=new xt;a.scale.setScalar(1.9),n.add(a);const c=new Z(new st(.45,.34,4,8),s);c.rotation.x=Math.PI/2,a.add(c);const l=new Z(new Jt(.34,.8,8),r);l.rotation.x=Math.PI/2,l.position.z=2.4,a.add(l);const h=new Z(new Et(4.6,.1,.8),o);h.position.z=.2,a.add(h);const d=new Z(new Et(1.7,.08,.5),o);d.position.z=-1.9,a.add(d);const p=new Z(new Et(.08,.7,.6),o);p.position.set(0,.36,-1.9),a.add(p);const f=40,_=7,v=new be(f,_,48,1),m=cd(i,{size:132,w:1536}),u=m.clone();u.wrapS=Di,u.repeat.x=-1,u.offset.x=1,u.needsUpdate=!0;const y=new et({map:m,side:Pn,roughness:.85,metalness:0}),x=new et({map:u,side:Ge,roughness:.85,metalness:0}),S=new Z(v,y),C=new Z(v,x);S.rotation.y=C.rotation.y=Math.PI/2,S.position.z=C.position.z=-6-f/2,n.add(S,C);const E=v.attributes.position.array.slice(),b=t.radius||55,P=t.height||30,U=t.speed||.085;return{group:e,update:M=>{const w=M*U;e.position.set(Math.cos(w)*b,P+Math.sin(M*.25)*2.5,Math.sin(w)*b);const D=-Math.sin(w),k=Math.cos(w);e.rotation.y=Math.atan2(D,k),n.rotation.z=-.32+Math.sin(M*.8)*.05;const W=v.attributes.position;for(let $=0;$<W.count;$++){const q=E[$*3];W.setZ($,Math.sin(q*.28+M*3.6)*.45)}W.needsUpdate=!0}}}function jx(i=0){const t=new xt,e=new et({color:16579830,roughness:.6,metalness:0}),n=new et({color:O.saffron,roughness:.5}),s=new Z(new Ot(.55,10,8),e);s.scale.set(1,.72,1.55),s.position.y=.28,t.add(s);const o=new Z(new Jt(.22,.55,6),e);o.position.set(0,.42,-.62),o.rotation.x=-1,t.add(o);const r=new Z(new st(.09,.12,.45,6),e);r.position.set(0,.55,.55),r.rotation.x=.35,t.add(r);const a=new Z(new st(.075,.09,.4,6),e);a.position.set(0,.88,.68),a.rotation.x=-.25,t.add(a);const c=new Z(new Ot(.14,8,6),e);c.position.set(0,1.05,.78),t.add(c);const l=new Z(new Jt(.055,.2,5),n);l.rotation.x=Math.PI/2,l.position.set(0,1.02,.95),t.add(l);const h=2+i%1*1.2;return{group:t,update:d=>{const p=d*.14+i;t.position.set(Math.cos(p)*h,Math.sin(d*.8+i)*.05,Math.sin(p)*h),t.rotation.y=-p+Math.PI/2}}}function Jx(i={}){const t=i.count||36,e=i.origin||[0,2.2,0],n=i.ground!==void 0?i.ground:e[1]-2,s=new be(.17,.09),o=new et({color:9359770,side:de,roughness:.7,metalness:0,emissive:3107370,emissiveIntensity:.12}),r=new ho(s,o,t);r.instanceMatrix.setUsage(zc);const a=new Ae,c=[],l=()=>({x:e[0],y:e[1],z:e[2],vx:(Math.random()-.5)*1.6,vy:2.4+Math.random()*2.4,vz:(Math.random()-.5)*1.6,rot:Math.random()*6.28,vr:(Math.random()-.5)*9,delay:Math.random()*1.5});for(let h=0;h<t;h++)c.push(l());return{group:r,update:(h,d)=>{d=Math.min(d||.016,.05);for(let p=0;p<t;p++){const f=c[p];if(f.delay>0){f.delay-=d,a.position.set(0,-999,0),a.updateMatrix(),r.setMatrixAt(p,a.matrix);continue}f.vy-=6.2*d,f.x+=f.vx*d,f.y+=f.vy*d,f.z+=f.vz*d,f.rot+=f.vr*d,f.y<n&&Object.assign(f,l()),a.position.set(f.x,f.y,f.z),a.rotation.set(f.rot*.5,f.rot,f.rot*.3),a.updateMatrix(),r.setMatrixAt(p,a.matrix)}r.instanceMatrix.needsUpdate=!0}}}function $x(i={}){const t=i.origin||[0,1.2,0],e=i.rise||11,n=i.cycle||4.2,s=26,o=new xt,r=new Z(new st(.05,.09,.45,6),new et({color:O.crimson,emissive:O.marigold,emissiveIntensity:.8}));o.add(r);const a=new si({color:O.goldBright,transparent:!0,opacity:1}),c=new ho(new Ot(.07,5,4),a,s);c.instanceMatrix.setUsage(zc),o.add(c);const l=new Ae,h=[];for(let p=0;p<s;p++){const f=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1),v=3+Math.random()*3.2;h.push({vx:Math.sin(_)*Math.cos(f)*v,vy:Math.cos(_)*v,vz:Math.sin(_)*Math.sin(f)*v})}const d=new qt;return{group:o,update:p=>{const f=p%n,_=t[1]+e;if(f<1.2)r.visible=!0,c.visible=!1,r.position.set(t[0],t[1]+f/1.2*e,t[2]);else{r.visible=!1,c.visible=!0;const v=f-1.2,m=Math.max(0,1-v/1.7);a.opacity=m,d.setHSL(Math.floor(p/n)*.27%1,.9,.62),a.color.copy(d);for(let u=0;u<s;u++){const y=h[u];l.position.set(t[0]+y.vx*v,_+y.vy*v-3.1*v*v,t[2]+y.vz*v),l.scale.setScalar(.5+m*.7),l.updateMatrix(),c.setMatrixAt(u,l.matrix)}c.instanceMatrix.needsUpdate=!0}}}}function Qx(i="TEAM GROOM",t={}){const e=new xt,n=t.width||3.15,s=t.height||.84,o=t.poleHeight||1.4,r=new be(n,s,14,1),a=cd(i,{size:126,w:768,h:224}),c=a.clone();c.wrapS=Di,c.repeat.x=-1,c.offset.x=1,c.needsUpdate=!0;const l=new et({map:a,side:Pn,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),h=new et({map:c,side:Ge,roughness:.82,metalness:0,emissive:2754576,emissiveIntensity:.15}),d=new Z(r,l);d.position.y=s/2;const p=new Z(r,h);p.position.y=s/2,e.add(d,p);const f=new et({color:O.brass,metalness:.9,roughness:.3}),_=new st(.04,.04,o,6),v=s/2-.1,m=v+o/2;[-1,1].forEach(y=>{const x=new Z(_,f);x.position.set(y*n/2,v,0),e.add(x);const S=new Z(new Ot(.09,6,5),f);S.position.set(y*n/2,Math.max(s+.08,m+.02),0),e.add(S)});const u=r.attributes.position.array.slice();return{group:e,update:y=>{const x=r.attributes.position;for(let S=0;S<x.count;S++){const C=u[S*3];x.setZ(S,Math.sin(C*1.5+y*3.2)*.14)}x.needsUpdate=!0}}}const tM=new URL("../assets/audio/bgm.m4a",document.baseURI).href,Gh=.48,eM=96,wa=60/eM/4,nM=.26,Ea={opening:{track:.8,drone:.52,air:.1,melody:.38,rhythm:.14},procession:{track:.7,drone:.44,air:.11,melody:.5,rhythm:.52},arrival:{track:.57,drone:.42,air:.12,melody:.52,rhythm:.58},celebration:{track:.76,drone:.46,air:.1,melody:.48,rhythm:.44}},Hh=[.13,0,0,.045,.095,0,.06,0,.13,0,0,.045,.095,0,.075,.052],Vh=[0,0,.055,0,0,.042,0,.052,0,0,.055,0,0,.042,.06,0],Wh=[.021,0,0,0,.018,0,0,0,.021,0,0,0,.018,0,0,0],ba=[261.63,293.66,329.63,349.23,392,440,493.88,523.25],is=[0,2,1,0,2,3,4,3,2,1,0,1,2,4,3,2];function iM({button:i=null,onStateChange:t=null,initialTrackTime:e=0}={}){let n=null,s=null,o=null,r=null,a=null,c=!1,l=!1,h=!1,d=0,p=!1,f="opening",_="",v=0,m=0,u=null,y=null,x=0,S=null,C=null,E=null,b=!1,P=!1,U=Number.isFinite(Number(e))?Math.max(0,Number(e)):null,M=0;const w={drone:null,air:null,melody:null,rhythm:null};function D(g,L){if(g)try{if(typeof g.cancelAndHoldAtTime=="function")g.cancelAndHoldAtTime(L);else{const F=g.value;g.cancelScheduledValues(L),g.setValueAtTime(F,L)}}catch{g.cancelScheduledValues(L),g.setValueAtTime(g.value,L)}}function k(g,L,F=.4,Y=null){if(!n||!g)return;const G=Math.max(n.currentTime,Y??n.currentTime);D(g,G),g.linearRampToValueAtTime(L,G+F)}function W(g,L,F,Y,G){g.cancelScheduledValues(L),g.setValueAtTime(1e-4,L),g.exponentialRampToValueAtTime(Math.max(2e-4,F),L+Y),g.exponentialRampToValueAtTime(1e-4,L+Y+G)}function $(g,L,F=0){if(typeof n.createStereoPanner=="function"){const Y=n.createStereoPanner();Y.pan.value=Math.max(-1,Math.min(1,F)),g.connect(Y),Y.connect(L)}else g.connect(L)}function q(g,L=.55,F=null){if(!n||!c)return;_=Ea[g]?g:"opening";const Y=Ea[_],G=b,ht=G?_==="arrival"?.78:_==="procession"?.7:_==="celebration"?.58:.34:1;k(E==null?void 0:E.gain,Y.track,L,F),k(w.drone.gain,Y.drone*(G?.11:1),L,F),k(w.air.gain,Y.air*(G?.82:1),L,F),k(w.melody.gain,Y.melody*(G?.07:1),L,F),k(w.rhythm.gain,Y.rhythm*ht,L,F)}function tt(g){const L=!!g;if(b===L){Lt();return}b=L,L&&(n==null?void 0:n.state)==="running"&&Ut.forEach(F=>window.removeEventListener(F,A)),c&&q(f,L?.7:.28),Lt()}function B(){if(!(!S||U==null||S.readyState<1))try{const g=Number.isFinite(S.duration)&&S.duration>0?S.duration:null;S.currentTime=g?U%g:U,U=null}catch{}}function lt(g=!1){if(!(!S||P||l||document.hidden)&&(B(),!(!g&&!S.paused)))try{const L=S.play();L!=null&&L.then?L.then(()=>tt(!0)).catch(()=>tt(!1)):tt(!0)}catch{tt(!1)}}function nt(){if(!(!S||S.paused)){try{S.pause()}catch{}tt(!1)}}function mt(g,L=!1){f=Ea[g]?g:"opening",f!=="arrival"&&(h=!1,d=0),c&&(L||!_)&&q(f,L?.08:.55)}function zt(g,L,F,Y=.05,G=null){if(!n)return;const ht=n.createOscillator(),rt=n.createOscillator();if(ht.type="sawtooth",rt.type="triangle",ht.frequency.setValueAtTime(L,g),rt.frequency.setValueAtTime(L,g),rt.detune.value=5,G){const yt=g+F*.62;ht.frequency.setValueAtTime(L,yt),rt.frequency.setValueAtTime(L,yt),ht.frequency.exponentialRampToValueAtTime(G,g+F*.94),rt.frequency.exponentialRampToValueAtTime(G,g+F*.94)}const ct=n.createGain();ct.gain.value=.62;const Rt=n.createGain();Rt.gain.value=.34;const it=n.createBiquadFilter();it.type="lowpass",it.frequency.value=1650,it.Q.value=.75;const dt=n.createGain();dt.gain.setValueAtTime(1e-4,g),dt.gain.exponentialRampToValueAtTime(Y,g+.035),dt.gain.setValueAtTime(Y*.9,g+Math.max(.05,F-.055)),dt.gain.exponentialRampToValueAtTime(1e-4,g+F);const Nt=n.createOscillator();Nt.frequency.value=5.1;const It=n.createGain();It.gain.value=10,Nt.connect(It),It.connect(ht.detune),It.connect(rt.detune),ht.connect(ct),rt.connect(Rt),ct.connect(it),Rt.connect(it),it.connect(dt),dt.connect(w.melody),ht.start(g),rt.start(g),Nt.start(g),ht.stop(g+F+.04),rt.stop(g+F+.04),Nt.stop(g+F+.04)}function Vt(g,L,F,Y=!1,G=null){if(!n||F<=0)return;const ht=G||w.rhythm,rt=n.createOscillator();rt.type="triangle",rt.frequency.setValueAtTime(L*1.75,g),rt.frequency.exponentialRampToValueAtTime(L,g+.055);const ct=n.createGain();if(W(ct.gain,g,F,.003,Y?.27:.15),rt.connect(ct),ct.connect(ht),rt.start(g),rt.stop(g+(Y?.3:.18)),Y&&a){const Rt=n.createBufferSource();Rt.buffer=a;const it=n.createBiquadFilter();it.type="bandpass",it.frequency.value=1250,it.Q.value=.85;const dt=n.createGain();W(dt.gain,g,F*.2,.002,.07),Rt.connect(it),it.connect(dt),dt.connect(ht),Rt.start(g,0,.085),Rt.stop(g+.09)}}function z(g,L=.035,F=!1){if(!n)return;const Y=n.createOscillator();Y.type="triangle",Y.frequency.setValueAtTime(F?205:178,g),Y.frequency.exponentialRampToValueAtTime(F?88:74,g+.08);const G=n.createGain();W(G.gain,g,L,.002,.1),Y.connect(G),G.connect(w.rhythm),Y.start(g),Y.stop(g+.115)}function K(g,L=.02){if(!n||!a)return;const F=n.createBufferSource();F.buffer=a;const Y=n.createBiquadFilter();Y.type="highpass",Y.frequency.value=5200;const G=n.createGain();W(G.gain,g,L,.002,.17),F.connect(Y),Y.connect(G),G.connect(w.rhythm),F.start(g,.18,.19),F.stop(g+.2)}function ft(g,L,F=.017){n&&[1,2.01].forEach((Y,G)=>{const ht=n.createOscillator();ht.type=G?"sine":"triangle",ht.frequency.value=L*Y;const rt=n.createGain();W(rt.gain,g,F/(G+1),.003,.42+G*.12),ht.connect(rt),rt.connect(w.melody),ht.start(g),ht.stop(g+.58)})}function X(g,L=622.25,F=.028,Y=null){if(!n)return;const G=Y||w.melody;[1,2.01,2.72].forEach((ht,rt)=>{const ct=n.createOscillator();ct.type="sine",ct.frequency.value=L*ht;const Rt=n.createGain();W(Rt.gain,g,F/Math.pow(rt+1,1.25),.006,1.45+rt*.28),ct.connect(Rt),Rt.connect(G),ct.start(g),ct.stop(g+2.35)})}function pt(g,L=2.25,F=.055){if(!n||!r)return;const Y=n.createOscillator();Y.type="triangle";const G=n.createOscillator();G.type="sine",Y.frequency.setValueAtTime(146.83,g),G.frequency.setValueAtTime(293.66,g),Y.frequency.exponentialRampToValueAtTime(155.56,g+L*.72),G.frequency.exponentialRampToValueAtTime(311.13,g+L*.72);const ht=n.createGain();ht.gain.value=.76;const rt=n.createGain();rt.gain.value=.28;const ct=n.createBiquadFilter();ct.type="bandpass",ct.frequency.value=480,ct.Q.value=.75;const Rt=n.createGain();Rt.gain.setValueAtTime(1e-4,g),Rt.gain.exponentialRampToValueAtTime(F,g+.08),Rt.gain.setValueAtTime(F*.92,g+L*.68),Rt.gain.exponentialRampToValueAtTime(1e-4,g+L);const it=n.createOscillator();it.frequency.value=4.6;const dt=n.createGain();dt.gain.value=5,it.connect(dt),dt.connect(Y.detune),dt.connect(G.detune),Y.connect(ht),G.connect(rt),ht.connect(ct),rt.connect(ct),ct.connect(Rt),Rt.connect(r),Y.start(g),G.start(g),it.start(g),Y.stop(g+L+.05),G.stop(g+L+.05),it.stop(g+L+.05)}function ut(g,L=.045,F=0){if(!n||!a||!r)return;const Y=n.createBufferSource();Y.buffer=a;const G=n.createBiquadFilter();G.type="bandpass",G.frequency.value=1700+Math.random()*1200,G.Q.value=.55;const ht=n.createGain();W(ht.gain,g,L,.0015,.12),Y.connect(G),G.connect(ht),$(ht,r,F);const rt=Math.max(0,a.duration-.16);Y.start(g,Math.random()*rt,.15),Y.stop(g+.155);const ct=n.createOscillator();ct.type="sine",ct.frequency.setValueAtTime(125,g),ct.frequency.exponentialRampToValueAtTime(48,g+.15);const Rt=n.createGain();W(Rt.gain,g,L*.24,.003,.18),ct.connect(Rt),$(Rt,r,F),ct.start(g),ct.stop(g+.2)}function Mt(g,L){const F=L%16,Y=Math.floor(L/16);F===0&&_!==f&&q(f,.42,g);const G=_||f,ht=G==="opening",rt=G==="procession"||G==="arrival",ct=G==="arrival"?1.06:G==="celebration"?.82:1;if(b){ht?F===0&&Y>0&&Y%4===0&&X(g,587.33,.018):((F===0||F===8&&G!=="celebration")&&Vt(g,132,(G==="arrival"?.09:.065)*ct,!0),(F===4||F===12)&&K(g,G==="arrival"?.018:.013),rt&&(F===5||F===13)&&z(g,G==="arrival"?.034:.026,F===13),F===0&&Y>0&&Y%6===0&&X(g,659.25,.016));return}ht?(F===0||F===8)&&Vt(g,132,.047,!0):(Hh[F]&&Vt(g,132,Hh[F]*ct,!0),Vh[F]&&Vt(g,225,Vh[F]*ct,!1),Wh[F]&&K(g,Wh[F]*(G==="arrival"?1.08:1)),rt&&(F===5||F===13)&&z(g,G==="arrival"?.04:.033,F===13));const Rt=ht?4:2;if(L%Rt===0){const it=Math.floor(L/Rt)%is.length,dt=is[it],Nt=is[(it+1)%is.length],It=wa*Rt-.035,yt=it%8===7?ba[Nt]:null;zt(g,ba[dt],It,ht?.041:.052,yt)}if(!ht&&(F===3||F===11)&&Y%2===0){const it=is[(Math.floor(L/2)+2)%is.length];ft(g,ba[it]*2,G==="arrival"?.019:.015)}F===0&&Y>0&&Y%(ht?2:4)===0&&X(g,ht?587.33:659.25,ht?.025:.021)}function Xt(){if(!n||n.state!=="running"||l)return;const g=n.currentTime;v<g-wa&&(v=g+.055);let L=0;for(;v<g+nM&&L++<8;)Mt(v,m),v+=wa,m++}function Dt(g,L=2.75){o&&(D(o.gain,g),o.gain.linearRampToValueAtTime(.29,g+.07),o.gain.setValueAtTime(.29,g+L-.38),o.gain.linearRampToValueAtTime(1,g+L))}function R(){if(!n||!c||n.state!=="running"||l){h=f==="arrival",d=h?performance.now():0;return}if(f!=="arrival"){h=!1,d=0;return}h=!1,d=0,p=!0;const g=n.currentTime+.065;Dt(g,3.15),pt(g,2.45,.072),[0,.22,.44,.68].forEach((L,F)=>Vt(g+L,F%2?215:132,.13+F*.007,!0,r)),X(g+.82,523.25,.052,r),X(g+1.02,659.25,.038,r),ut(g+1.2,.082,-.55),ut(g+1.38,.068,.5),ut(g+1.63,.076,-.12)}function Lt(){const g=c&&!l&&(n==null?void 0:n.state)==="running";if(i){i.textContent=g?"🔊":"🔇",i.setAttribute("aria-pressed",String(g));const L=g?"Mute wedding music":"Play wedding music";i.setAttribute("aria-label",L),i.title=L}if(typeof t=="function")try{t({playing:g,musicPlaying:b,muted:l})}catch{}}function Pt(g=!1){var rt;if(!n)return Promise.resolve(!1);if(y&&!g)return y;const L=++x;let F=0,Y;try{Y=n.state==="running"?Promise.resolve():Promise.resolve((rt=n.resume)==null?void 0:rt.call(n))}catch(ct){Y=Promise.reject(ct)}const G=new Promise(ct=>{F=window.setTimeout(ct,g?900:650)});return y=Promise.race([Y,G]).then(()=>{if(c=(n==null?void 0:n.state)==="running",!c)return!1;q(f,.1),v<n.currentTime+.025&&(v=n.currentTime+.07),k(s==null?void 0:s.gain,l?1e-4:Gh,.5);const ct=d>0&&performance.now()-d<1400;return h&&f==="arrival"&&ct?R():(h=!1,d=0,!p&&f==="opening"&&(p=!0,X(n.currentTime+.1,587.33,.026,r))),b&&Ut.forEach(Rt=>window.removeEventListener(Rt,A)),!0}).catch(()=>(c=!1,!1)).finally(()=>{window.clearTimeout(F),L===x&&(y=null),Lt()}),y}function Tt(g=!1){if(n){const L=Pt(g);return lt(g),L}try{const L=window.AudioContext||window.webkitAudioContext;if(!L)return;try{n=new L({latencyHint:"balanced"})}catch{n=new L}const F=n.createDynamicsCompressor();F.threshold.value=-15,F.knee.value=14,F.ratio.value=6,F.attack.value=.008,F.release.value=.24,s=n.createGain(),s.gain.value=1e-4,o=n.createGain(),o.gain.value=1,r=n.createGain(),r.gain.value=.92,o.connect(s),r.connect(s),s.connect(F),F.connect(n.destination);for(const dt of Object.keys(w))w[dt]=n.createGain(),w[dt].gain.value=.001,w[dt].connect(o);S=new Audio,S.src=tM,S.preload="metadata",S.loop=!0,S.playsInline=!0,S.setAttribute("playsinline",""),S.addEventListener("loadedmetadata",B,{once:!0}),C=n.createMediaElementSource(S),E=n.createGain(),E.gain.value=1e-4,C.connect(E),E.connect(o),S.addEventListener("playing",()=>tt(!0)),S.addEventListener("pause",()=>tt(!1)),S.addEventListener("error",()=>{P=!0,tt(!1)}),[130.81,196,261.63].forEach((dt,Nt)=>{const It=n.createOscillator();It.type=Nt===0?"sine":"triangle",It.frequency.value=dt;const yt=n.createGain();yt.gain.value=[.14,.075,.045][Nt];const Qt=n.createBiquadFilter();Qt.type="lowpass",Qt.frequency.value=700;const gt=n.createOscillator();gt.frequency.value=.075+Nt*.028;const Kt=n.createGain();Kt.gain.value=2.2,gt.connect(Kt),Kt.connect(It.detune),It.connect(yt),yt.connect(Qt),Qt.connect(w.drone),It.start(),gt.start()});const Y=n.sampleRate;a=n.createBuffer(1,Y,n.sampleRate);const G=a.getChannelData(0);for(let dt=0;dt<Y;dt++)G[dt]=(Math.random()*2-1)*.45;const ht=Math.min(256,Math.floor(Y/4));for(let dt=0;dt<ht;dt++){const Nt=(dt+1)/ht,It=Y-ht+dt;G[It]=G[It]*(1-Nt)+G[dt]*Nt}const rt=n.createBufferSource();rt.buffer=a,rt.loop=!0;const ct=n.createBiquadFilter();ct.type="bandpass",ct.frequency.value=1100,ct.Q.value=.55;const Rt=n.createGain();Rt.gain.value=.022,rt.connect(ct),ct.connect(Rt),Rt.connect(w.air),rt.start(),v=n.currentTime+.075,u=window.setInterval(Xt,75);const it=Pt(g);return lt(g),it}catch{return c=!1,n=null,s=null,u&&window.clearInterval(u),u=null,Lt(),Promise.resolve()}}function At(){l=!l;const g=++M;l?window.setTimeout(()=>{l&&g===M&&nt()},320):(Pt(!0),lt(!0)),k(s==null?void 0:s.gain,l?1e-4:Gh,.28),Lt()}function $t(){l=!0,++M,nt(),k(s==null?void 0:s.gain,1e-4,.18),Ut.forEach(g=>window.removeEventListener(g,A)),Lt()}const Ut=window.PointerEvent?["pointerdown","keydown"]:["touchstart","keydown"];function A(g){g.target instanceof Element&&g.target.closest("#soundBtn")||(l=!1,Tt(!0),Lt())}return Ut.forEach(g=>window.addEventListener(g,A,{passive:!0})),i==null||i.addEventListener("click",g=>{g.stopPropagation(),c&&!l&&(n==null?void 0:n.state)==="running"?At():(l=!1,Tt(!0)),Lt()}),document.addEventListener("visibilitychange",()=>{var g;n&&(document.hidden?(nt(),Promise.resolve((g=n.suspend)==null?void 0:g.call(n)).catch(()=>{})):l||(Pt(),lt()))}),Lt(),{setPhase:mt,playArrivalCue:R,start:Tt,stayMuted:$t,isMusicPlaying:()=>!!(b&&(n==null?void 0:n.state)==="running"&&!l)}}const Xh={bride:"Mishi",groom:"Mrigank"},Xo=[-2,-29],yc=Math.atan2(8,2),gr=[6,-27];function nn(i){const t=i[0]-Xo[0],e=i[1]-Xo[1],n=Math.cos(yc),s=Math.sin(yc);return[Xo[0]+t*n+e*s,Xo[1]-t*s+e*n]}function rs(i){return{...i,pos:nn(i.pos),...i.faceToward?{faceToward:nn(i.faceToward)}:{}}}const Gt={mandap:{pos:nn([-2,-34]),faceToward:gr},bride:{pos:nn([-2,-28]),faceToward:gr},horseGroom:{pos:[24,14],faceToward:[23,-8]},elephant:{pos:[24,27],faceToward:[24,8]},path:{points:[[14,44],[20,34],[24,22],[25,8],[23,-8],[16,-20],[6,-27],[-2,-29]],width:7},toranGates:[{pos:[19.5,35],faceToward:[23,20]},{pos:[24.5,6],faceToward:[24,-8]},{pos:[10,-25],faceToward:[-2,-29]}],attendants:[{item:"chhatri",pos:[20.5,14],faceToward:[23,-8]},{item:"chhatri",pos:[28,14],faceToward:[23,-8]},{item:"dhol",pos:[16.9,-13.8],faceToward:[0,-30]},{item:"shehnai",pos:[18.9,-15],faceToward:[0,-30]},{item:"turhi",pos:[21,-16.2],faceToward:[0,-30]},{item:"flag",pos:[20,27],faceToward:[24,12]},{item:"morchhal",pos:[28,27],faceToward:[24,12]},rs({item:"lamp",pos:[-6.5,-22.8],faceToward:[-2,-30]}),rs({item:"garland",pos:[2.5,-22.2],faceToward:[-2,-30]}),rs({item:"lamp",pos:[-8.5,-30.5],faceToward:[-2,-30]})],petalArea:{cx:16,cz:0,radius:32},camera:{introFrom:[-8,25,70],target:[18,3,38],introDurationSec:4.5},dancers:[{variant:"armsUpM",pos:[20.5,7]},{variant:"bhangraM",pos:[29,7]},{variant:"spinF",pos:[20,0]},{variant:"jumpM",pos:[28,0]},{variant:"clapM",pos:[19.2,-7]},{variant:"thumkaF",pos:[27.2,-7]}],brideDancers:[rs({variant:"spinF",pos:[-5.5,-27.5],faceToward:[-5.5,6]}),rs({variant:"thumkaF",pos:[1.5,-27.5],faceToward:[1.5,6]})],guests:[{variant:"cheering",pos:[18,30],faceToward:[24,26]},{variant:"namaste",pos:[30,10],faceToward:[25,8]},{variant:"clapping",pos:[16,-14],faceToward:[21,-18]}],groomMusicians:[{item:"shehnai",pos:[21,18],faceToward:[23,-8]},{item:"dhol",pos:[27,18],faceToward:[23,-8]}],moneyThrower:{pos:[31.5,15],faceToward:[24,14]},fireworkGuy:{pos:[16.5,15],faceToward:[24,14]},swans:[{pos:[-4,-2],phase:0},{pos:[3,3],phase:2.1}]};var ou;const _e=((ou=window.matchMedia)==null?void 0:ou.call(window,"(pointer: coarse)").matches)||/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent),ni=[],ir=[],We={holdEnd:5.1,travelEnd:29,arrivalEnd:45,anchorStart:.5,anchorEnd:58};let _r="opening",Ke=0,Sc=!1,Ar=1/0,Rr=!0;const oe=new iv;oe.fog=new Wc(xi.fogColor,_e?.0052:.006);const ke=new un(52,window.innerWidth/window.innerHeight,.1,1e3);ke.position.set(...Gt.camera.introFrom);const sn=new nv({antialias:!_e});sn.setSize(window.innerWidth,window.innerHeight);sn.setPixelRatio(Math.min(window.devicePixelRatio,_e?1.25:2));sn.shadowMap.enabled=!0;sn.shadowMap.type=_e?Cc:ru;sn.toneMapping=Pc;sn.toneMappingExposure=1;const sM=document.getElementById("root")??document.body;sM.appendChild(sn.domElement);const Rs=new ax(sn);Rs.addPass(new cx(oe,ke));const ld=new ws(new ot(window.innerWidth,window.innerHeight),.58,.6,.72);Rs.addPass(ld);let Ks=null;if(!_e){Ks=new ed(dx);const i=sn.getPixelRatio();Ks.uniforms.resolution.value.set(1/(window.innerWidth*i),1/(window.innerHeight*i)),Rs.addPass(Ks)}Rs.addPass(new ux);const ie=new Wv(ke,sn.domElement);ie.enableDamping=!0;ie.dampingFactor=_e?.08:.05;ie.rotateSpeed=_e?.65:1;ie.zoomSpeed=_e?.85:1;ie.panSpeed=_e?.75:1;ie.touches.ONE=_i.ROTATE;ie.touches.TWO=_i.DOLLY_PAN;ie.zoomToCursor=!0;ie.maxPolarAngle=Math.PI/2.08;ie.minDistance=6;ie.maxDistance=135;ie.target.set(...Gt.camera.target);ie.enabled=!0;const Cr=document.createElement("canvas");Cr.width=1024;Cr.height=1024;const Cs=Cr.getContext("2d"),_n=Cs.createLinearGradient(0,0,0,1024);_n.addColorStop(0,"#0a0520");_n.addColorStop(.15,"#1a0a3a");_n.addColorStop(.3,"#4a1555");_n.addColorStop(.42,"#8b2252");_n.addColorStop(.52,"#d4553a");_n.addColorStop(.6,"#e87730");_n.addColorStop(.68,"#f09838");_n.addColorStop(.76,"#f5be5a");_n.addColorStop(.85,"#fad48e");_n.addColorStop(.92,"#ffe8c0");_n.addColorStop(1,"#fff0d6");Cs.fillStyle=_n;Cs.fillRect(0,0,1024,1024);const uo=Cs.createRadialGradient(512,620,0,512,620,250);uo.addColorStop(0,"rgba(255,240,200,0.5)");uo.addColorStop(.3,"rgba(255,180,80,0.3)");uo.addColorStop(.7,"rgba(255,100,50,0.1)");uo.addColorStop(1,"rgba(255,80,30,0)");Cs.fillStyle=uo;Cs.fillRect(0,0,1024,1024);const el=new Ni(Cr);el.mapping=ar;oe.background=el;oe.environment=el;const oM=new Gv(xi.ambient.color,xi.ambient.intensity);oe.add(oM);const vn=new Zc(xi.keyLight.color,xi.keyLight.intensity);vn.position.set(-50,22,-40);vn.castShadow=!0;vn.shadow.mapSize.set(_e?1024:2048,_e?1024:2048);vn.shadow.camera.left=-70;vn.shadow.camera.right=70;vn.shadow.camera.top=70;vn.shadow.camera.bottom=-70;vn.shadow.camera.near=.5;vn.shadow.camera.far=170;vn.shadow.bias=-.001;vn.shadow.normalBias=.02;oe.add(vn);const hd=new Zc(16750933,.45);hd.position.set(30,10,20);oe.add(hd);const ud=new Zc(16733474,.5);ud.position.set(-40,6,-30);oe.add(ud);const rM=new Bv(xi.hemi.sky,xi.hemi.ground,xi.hemi.intensity);oe.add(rM);const Pr=new xt,aM=new Z(new Ot(5,32,32),new si({color:16770464}));Pr.add(aM);for(let i=0;i<3;i++){const t=new Z(new Ot(7+i*3,32,32),new si({color:new qt().setHSL(.08,.9,.6-i*.1),transparent:!0,opacity:.15-i*.04,side:Ge}));Pr.add(t)}const sr=new I(-55,12,-80);Pr.position.copy(sr);oe.add(Pr);function Yh(i,t){let e=0;e+=Math.sin(i*.05)*Math.cos(t*.05)*4,e+=Math.sin(i*.1+1)*Math.cos(t*.08)*2,e+=Math.sin(i*.02)*Math.sin(t*.03)*6,e+=Math.cos(i*.15)*Math.sin(t*.12)*1.5,e+=Math.sin(i*.07+2)*Math.cos(t*.06-1)*1.5;const n=i*i+t*t;return n<400&&(e*=.3*(n/400)),e}function gn(i,t){const e=Yh(i,t),n=hM(i,t),s=1-or(vr+7,vr+17,n.d),o=Math.hypot(i-Gt.mandap.pos[0],t-(Gt.bride.pos[1]-3)),r=1-or(11,22,o),a=Math.max(s,r)*or(15,20.5,Math.hypot(i,t));if(a<=0)return e;const l=Yh(n.cx,n.cz)+1.44;return e+(l-e)*a}function Lr(i,t,e,n){return Math.atan2(e-i,n-t)}const dd=.32,fo=.06,fd=.015;function cM(i,t,e={}){const n=t.pos[0],s=t.pos[1],o=e.footprint??.7,r=e.y!==void 0?e.y:po(n,s,o)+(e.clearance??fd);return i.position.set(n,r,s),t.faceToward&&(i.rotation.y=Lr(n,s,t.faceToward[0],t.faceToward[1])),oe.add(i),i}function Re(i,t,e={}){if(i.isObject3D)return cM(i,t,e),i;const n=new xt,s=t.pos[0],o=t.pos[1],r=e.footprint??1;n.position.set(s,e.y!==void 0?e.y:po(s,o,r)+(e.clearance??fo),o),t.faceToward&&(n.rotation.y=Lr(s,o,t.faceToward[0],t.faceToward[1])),n.add(i.group),oe.add(n);const a={amount:0,phase:i.gaitOffset??0,gaitScale:i.gaitScale??6};return n.userData.locomotion=a,typeof i.update=="function"&&ni.push((c,l)=>i.update(c,l,a)),n}function on(i,t){const e=vr+Gt.path.width*.16+.08;return gn(i,t)+(pd(i,t)<=e?dd:0)}function po(i,t,e){let n=on(i,t);const s=e>.05?[e*.5,e]:[];for(const o of s)for(let r=0;r<16;r++){const a=r/16*Math.PI*2;n=Math.max(n,on(i+Math.cos(a)*o,t+Math.sin(a)*o))}return n}const An=Gt.path.points,vr=Gt.path.width/2;function lM(i,t,e,n){const s=e[0],o=e[1],r=n[0],a=n[1],c=r-s,l=a-o,h=c*c+l*l||1e-6;let d=((i-s)*c+(t-o)*l)/h;d=Math.max(0,Math.min(1,d));const p=s+d*c,f=o+d*l;return Math.hypot(i-p,t-f)}function pd(i,t){let e=1/0;for(let n=0;n<An.length-1;n++)e=Math.min(e,lM(i,t,An[n],An[n+1]));return e}function or(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}function hM(i,t){let e=1/0,n=An[0][0],s=An[0][1];for(let o=0;o<An.length-1;o++){const r=An[o],a=An[o+1],c=a[0]-r[0],l=a[1]-r[1],h=c*c+l*l||1e-6;let d=((i-r[0])*c+(t-r[1])*l)/h;d=Math.max(0,Math.min(1,d));const p=r[0]+d*c,f=r[1]+d*l,_=Math.hypot(i-p,t-f);_<e&&(e=_,n=p,s=f)}return{d:e,cx:n,cz:s}}const Yn=[];let wc=0;for(let i=0;i<An.length-1;i++){const t=An[i],e=An[i+1],n=Math.hypot(e[0]-t[0],e[1]-t[1]);Yn.push({a:t,b:e,start:wc,len:n}),wc+=n}const zs={x:0,z:0},Ta={x:0,z:0},Aa={x:0,z:0};function ps(i,t={x:0,z:0}){let e=Yn[0];if(i>=wc)e=Yn[Yn.length-1];else if(i>0){for(let s=0;s<Yn.length;s++)if(i<=Yn[s].start+Yn[s].len){e=Yn[s];break}}const n=(i-e.start)/e.len;return t.x=Ie.lerp(e.a[0],e.b[0],n),t.z=Ie.lerp(e.a[1],e.b[1],n),t}function uM(i,t){let e=1/0,n=0;for(const s of Yn){const o=s.b[0]-s.a[0],r=s.b[1]-s.a[1],a=Ie.clamp(((i-s.a[0])*o+(t-s.a[1])*r)/(s.len*s.len),0,1),c=s.a[0]+o*a,l=s.a[1]+r*a,h=Math.hypot(i-c,t-l);h<e&&(e=h,n=s.start+s.len*a)}return n}const dM=Gt.toranGates.map(i=>uM(i.pos[0],i.pos[1]));function md(i){let t=0;for(const e of dM)t=Math.max(t,1-or(1.8,4.8,Math.abs(i-e)));return t}function fM(i){return 1-md(i)*.5}function pM(i,t,e){const n=gn(i,t),s=on(i,t);return e>=0?s:n+(s-n)*bn((e+8)/8)}function gd(i,t,e={}){ps(i,zs),ps(i-.7,Ta),ps(i+.7,Aa);let n=Aa.x-Ta.x,s=Aa.z-Ta.z;const o=1/(Math.hypot(n,s)||1);return n*=o,s*=o,e.x=zs.x-s*t,e.z=zs.z+n*t,e.y=pM(e.x,e.z,i)+fo,e.yaw=Math.atan2(n,s),e.centerX=zs.x,e.centerZ=zs.z,e}function bn(i){const t=Ie.clamp(i,0,1);return t*t*t*(t*(t*6-15)+10)}function Ra(i,t,e){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e}const _d=[[19.7,44.7],[10.7,39.3],[27.4,-11.6],[17.1,-10.4],[17.6,-25.3],[11.6,-16.7]],mM=[{x:Gt.mandap.pos[0],z:Gt.mandap.pos[1],r:11},{x:Gt.bride.pos[0],z:Gt.bride.pos[1],r:3},{x:Gt.horseGroom.pos[0],z:Gt.horseGroom.pos[1],r:6.5},{x:Gt.elephant.pos[0],z:Gt.elephant.pos[1],r:7.5},...Gt.toranGates.map(i=>({x:i.pos[0],z:i.pos[1],r:4.5})),..._d.map(i=>({x:i[0],z:i[1],r:1.8})),...Gt.attendants.map(i=>({x:i.pos[0],z:i.pos[1],r:2.2})),...Gt.dancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...Gt.brideDancers.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),...Gt.guests.map(i=>({x:i.pos[0],z:i.pos[1],r:2})),{x:Gt.moneyThrower.pos[0],z:Gt.moneyThrower.pos[1],r:2},{x:Gt.fireworkGuy.pos[0],z:Gt.fireworkGuy.pos[1],r:2},{x:24,z:-2,r:13}];function gM(i,t){for(const e of mM){const n=i-e.x,s=t-e.z;if(n*n+s*s<e.r*e.r)return!0}return!1}function Ps(i,t,e=1.5){return pd(i,t)<vr+e||gM(i,t)}function nl(i){const t=-20+i*25+Math.sin(i*4)*8+Math.cos(i*2.5)*5,e=-70+i*75+Math.sin(i*3)*6;return new ot(t,e)}function vd(i){const t=30-i*28+Math.sin(i*3.5+1)*7,e=-65+i*68+Math.cos(i*2.8+2)*5;return new ot(t,e)}const xd=Array.from({length:101},(i,t)=>{const e=t/100;return{a:nl(e),b:vd(e),widthA:2+Math.sin(e*6)*.5,widthB:1.6+Math.sin(e*5+1)*.4}});function mo(i,t,e=3.5){for(const n of xd)if((i-n.a.x)**2+(t-n.a.y)**2<e*e||(i-n.b.x)**2+(t-n.b.y)**2<e*e)return!0;return!1}function _M(){const i=_e?140:200,t=new be(200,200,i,i),e=t.attributes.position,n=new Float32Array(e.count*3);for(let o=0;o<e.count;o++){const r=e.getX(o),a=-e.getY(o);let c=gn(r,a),l=0;for(const d of xd){const p=Math.hypot(r-d.a.x,a-d.a.y);p<d.widthA&&(l=Math.max(l,(1-p/d.widthA)*2.5));const f=Math.hypot(r-d.b.x,a-d.b.y);f<d.widthB&&(l=Math.max(l,(1-f/d.widthB)*2.2))}c-=l,e.setZ(o,c);const h=new qt;l>.5?h.setHSL(.08,.3,.25):c<-1?h.setHSL(.28,.5,.22):c<2?h.setHSL(.3,.55,.28+Math.random()*.04):c<5?h.setHSL(.25,.45,.3+Math.random()*.03):h.setHSL(.22,.35,.32+Math.random()*.03),n[o*3]=h.r,n[o*3+1]=h.g,n[o*3+2]=h.b}t.setAttribute("color",new en(n,3)),t.computeVertexNormals(),t.rotateX(-Math.PI/2);const s=new Z(t,new et({vertexColors:!0,roughness:.92,metalness:0,envMapIntensity:.3}));s.receiveShadow=!0,oe.add(s)}_M();function Md(i,t,e,n){const s=[];for(let h=0;h<=1;h+=1/t)s.push(i(h));const o=[],r=[],a=[];for(let h=0;h<s.length;h++){const d=s[h],p=h/(s.length-1);let f;if(h<s.length-1){const u=s[h+1];f=new ot(u.x-d.x,u.y-d.y).normalize()}else{const u=s[h-1];f=new ot(d.x-u.x,d.y-u.y).normalize()}const _=new ot(-f.y,f.x),v=e+Math.sin(p*6)*n,m=Math.min(gn(d.x+_.x*v,d.y+_.y*v),gn(d.x-_.x*v,d.y-_.y*v),gn(d.x,d.y))+.15;if(o.push(d.x+_.x*v,m,d.y+_.y*v,d.x-_.x*v,m,d.y-_.y*v),a.push(0,p*8,1,p*8),h<s.length-1){const u=h*2;r.push(u,u+1,u+2,u+1,u+3,u+2)}}const c=new Be;c.setAttribute("position",new se(o,3)),c.setAttribute("uv",new se(a,2)),c.setIndex(r),c.computeVertexNormals();const l=new Z(c,new et({color:1728640,roughness:.05,metalness:.7,transparent:!0,opacity:.7,envMapIntensity:1.5,side:de,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return oe.add(l),l}Md(nl,80,2,.5);Md(vd,80,1.5,.4);const Ir=new Z(new ei(15.5,72),new et({color:1730696,roughness:.02,metalness:.8,transparent:!0,opacity:.82,envMapIntensity:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));Ir.rotation.x=-Math.PI/2;Ir.position.set(0,.32,0);oe.add(Ir);const il=new Z(new io(14.5,17.5,72),new et({color:869461,roughness:.2,metalness:.4,transparent:!0,opacity:.5,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));il.rotation.x=-Math.PI/2;il.position.set(0,.26,0);oe.add(il);const so=new Z(new be(5,22),new si({color:16764006,transparent:!0,opacity:.22,side:de,blending:Zs}));so.rotation.x=-Math.PI/2;so.position.set(-3,.26,-6);oe.add(so);function vM(i,t,e=1){const n=new xt,s=new Z(new st(.15*e,.35*e,3.5*e,8),new et({color:4861458,roughness:.95}));s.position.y=1.75*e,s.castShadow=!_e,n.add(s);const o=[1922082,2779950,1723680,2647600];for(let r=0;r<4;r++){const a=new Jt((2.5-r*.5)*e,(2.2-r*.3)*e,7+Math.floor(Math.random()*3)),c=a.attributes.position;for(let h=0;h<c.count;h++)c.setX(h,c.getX(h)+(Math.random()-.5)*.2*e),c.setZ(h,c.getZ(h)+(Math.random()-.5)*.2*e);a.computeVertexNormals();const l=new Z(a,new et({color:o[r%4],roughness:.85}));l.position.y=(3.2+r*1.1)*e,l.rotation.y=Math.random()*Math.PI,l.castShadow=!_e,n.add(l)}return n.position.set(i,gn(i,t),t),n}for(let i=0;i<80;i++){const t=(Math.random()-.5)*130,e=(Math.random()-.5)*130;t*t+e*e<350||mo(t,e,4)||Ps(t,e,11)||oe.add(vM(t,e,.6+Math.random()*.9))}function xM(i,t,e=1){const n=new xt,s=new Z(new st(.12*e,.25*e,4*e,6),new et({color:9139029,roughness:.9}));s.position.y=2*e,s.castShadow=!_e,n.add(s);const o=new ae(2.2*e,2),r=o.attributes.position;for(let c=0;c<r.count;c++)r.setX(c,r.getX(c)+(Math.random()-.5)*.4*e),r.setY(c,r.getY(c)+(Math.random()-.5)*.3*e),r.setZ(c,r.getZ(c)+(Math.random()-.5)*.4*e);o.computeVertexNormals();const a=new Z(o,new et({color:new qt().setHSL(.25+Math.random()*.1,.5,.25+Math.random()*.1),roughness:.85}));return a.position.y=4.5*e,a.castShadow=!_e,n.add(a),n.position.set(i,gn(i,t),t),n}for(let i=0;i<30;i++){const t=(Math.random()-.5)*110,e=(Math.random()-.5)*110;t*t+e*e<350||mo(t,e,4)||Ps(t,e,11)||oe.add(xM(t,e,.5+Math.random()*.7))}function yd(i,t,e){const n=new qc(e,2),s=n.attributes.position;for(let a=0;a<s.count;a++)s.setX(a,s.getX(a)+(Math.random()-.5)*e*.35),s.setY(a,s.getY(a)*(.5+Math.random()*.3)+(Math.random()-.5)*e*.2),s.setZ(a,s.getZ(a)+(Math.random()-.5)*e*.35);n.computeVertexNormals();const o=.35+Math.random()*.2,r=new Z(n,new et({color:new qt(o,o*.95,o*.9),roughness:.95,metalness:.02}));r.position.set(i,gn(i,t)+e*.2,t),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*.5),r.castShadow=!_e,oe.add(r)}for(let i=0;i<1;i+=.05){if(Math.random()>.6)continue;const t=nl(i),e=(Math.random()>.5?1:-1)*(2.5+Math.random()*2),n=t.x+e,s=t.y+(Math.random()-.5)*2;Ps(n,s,1)||yd(n,s,.4+Math.random()*.8)}for(let i=0;i<26;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<250||mo(t,e,3)||Ps(t,e,1)||yd(t,e,.4+Math.random()*1.2)}const MM=new Ot(.12,5,5),yM=[O.marigold,O.rose,16768324,O.saffron,O.jasmine,16729190,16755234];yM.forEach(i=>{const t=new et({color:i,roughness:.5,emissive:i,emissiveIntensity:.06}),e=44,n=new ho(MM,t,e),s=new Ae;let o=0;for(let r=0;r<e;r++){const a=(Math.random()-.5)*90,c=(Math.random()-.5)*90;a*a+c*c<250||mo(a,c,3)||Ps(a,c,.5)||(s.position.set(a,gn(a,c)+.25,c),s.scale.setScalar(.5+Math.random()*.8),s.updateMatrix(),n.setMatrixAt(o++,s.matrix))}n.count=o,oe.add(n)});const Sd=new be(.15,.6);Sd.translate(0,.3,0);const wd=_e?500:850,sl=new ho(Sd,new et({color:3832366,roughness:.9,side:de,alphaTest:.5}),wd),ks=new Ae;let Ed=0;for(let i=0;i<wd;i++){const t=(Math.random()-.5)*100,e=(Math.random()-.5)*100;t*t+e*e<300||mo(t,e,2.5)||Ps(t,e,.5)||(ks.position.set(t,gn(t,e),e),ks.rotation.y=Math.random()*Math.PI*2,ks.scale.set(.8+Math.random()*.6,.6+Math.random()*1,1),ks.updateMatrix(),sl.setMatrixAt(Ed++,ks.matrix))}sl.count=Ed;oe.add(sl);function ki(i,t,e,n){const s=new xt,o=new Jt(n,e,8),r=o.attributes.position;for(let l=0;l<r.count;l++)r.setX(l,r.getX(l)+(Math.random()-.5)*n*.18),r.setZ(l,r.getZ(l)+(Math.random()-.5)*n*.18),r.getY(l)<e*.3&&r.setY(l,r.getY(l)+(Math.random()-.5)*e*.08);o.computeVertexNormals();const a=new Float32Array(r.count*3);for(let l=0;l<r.count;l++){const h=(r.getY(l)+e/2)/e,d=new qt;h>.8?d.setHSL(0,0,.85+Math.random()*.1):h>.6?d.lerpColors(new qt(5598062),new qt(14544639),(h-.6)/.2):d.setHSL(.28,.3,.25+h*.15),a[l*3]=d.r,a[l*3+1]=d.g,a[l*3+2]=d.b}o.setAttribute("color",new se(a,3));const c=new Z(o,new et({vertexColors:!0,roughness:.95,flatShading:!0}));c.position.set(i,e/2-5,t),c.castShadow=!_e,s.add(c);for(let l=0;l<2;l++){const h=new Jt(n*(.5+Math.random()*.3),e*(.5+Math.random()*.3),6),d=new Z(h,new et({color:4872798,roughness:.95,flatShading:!0}));d.position.set(i+(Math.random()-.5)*n*.8,e*(.2+Math.random()*.15)-5,t+(Math.random()-.5)*n*.3),s.add(d)}oe.add(s)}ki(-55,-75,45,22);ki(-28,-85,55,28);ki(5,-90,50,25);ki(35,-80,42,20);ki(60,-75,48,23);ki(-70,-80,35,18);ki(80,-70,38,19);function SM(i,t,e){const n=new xt,s=new qt().setHSL(.07,.4,.75+Math.random()*.2),o=new et({color:s,roughness:1,transparent:!0,opacity:.75,emissive:16737843,emissiveIntensity:.15});for(let r=0;r<5+Math.floor(Math.random()*5);r++){const a=new Z(new Ot(1.5+Math.random()*3,10,8),o);a.position.set((Math.random()-.5)*8,(Math.random()-.5)*1.5,(Math.random()-.5)*4),a.scale.y=.5+Math.random()*.2,n.add(a)}return n.position.set(i,t,e),n}const bd=[];for(let i=0;i<6;i++){const t=SM((Math.random()-.5)*180,24+Math.random()*18,-40+(Math.random()-.5)*80);t.userData={baseY:t.position.y,driftSpeed:.36*(i%2===0?1:.7)},oe.add(t),bd.push(t)}const Td=[];for(let i=0;i<5;i++){const t=new xt,e=new si({color:1710618,side:de}),n=new Z(new be(1.2,.15),e);n.position.x=-.6,t.add(n);const s=new Z(new be(1.2,.15),e);s.position.x=.6,t.add(s),t.position.set(-40+Math.random()*30,30+Math.random()*14,-50+Math.random()*30),t.userData={phase:Math.random()*Math.PI*2,speed:.3+Math.random()*.5,baseY:t.position.y},oe.add(t),Td.push(t)}const Ad=[];for(let i=0;i<6;i++){const t=new xt,e=[O.marigold,16768324,O.rose,48340,O.gold][Math.floor(Math.random()*5)],n=new et({color:e,side:de,roughness:.3,emissive:e,emissiveIntensity:.12}),s=new Z(new be(.5,.35),n);s.position.x=-.25,t.add(s);const o=new Z(new be(.5,.35),n);o.position.x=.25,t.add(o),t.position.set(6+(Math.random()-.5)*40,3+Math.random()*5,-6+(Math.random()-.5)*40),t.userData={baseX:t.position.x,baseY:t.position.y,baseZ:t.position.z,phase:Math.random()*Math.PI*2,speed:.5+Math.random()},oe.add(t),Ad.push(t)}const wM=Wx({points:Gt.path.points,width:Gt.path.width,getHeight:gn,lift:dd});oe.add(wM);const Rd=ad(3.2),Yo=nn([-2,-30]);Rd.position.set(Yo[0],on(Yo[0],Yo[1])+.02,Yo[1]);oe.add(Rd);const Cd=ad(2.4);Cd.position.set(14,on(14,44)+.02,44);oe.add(Cd);const ii=Gt.mandap,Dr=po(ii.pos[0],ii.pos[1],3.7),Ur=new Z(new Et(7.35,12,7.35),new et({color:O.cream,roughness:.9,metalness:.02}));Ur.position.set(ii.pos[0],Dr+.04-6,ii.pos[1]);Ur.rotation.y=Lr(ii.pos[0],ii.pos[1],gr[0],gr[1]);Ur.receiveShadow=!0;oe.add(Ur);Re(fx(),ii,{y:Dr});const ol=new Ju(16743214,_e?2:2.6,28,2);ol.position.set(ii.pos[0],Dr+2.2,ii.pos[1]);oe.add(ol);const Nr=new Ju(16756810,1.3,20,2);Nr.position.set(Gt.horseGroom.pos[0],on(Gt.horseGroom.pos[0],Gt.horseGroom.pos[1])+3,Gt.horseGroom.pos[1]);oe.add(Nr);Gt.toranGates.forEach(i=>Re(xx(),i,{footprint:3.2}));_d.forEach(i=>Re(yx(),{pos:i},{footprint:.9}));const Ca=rs({pos:[-2,-25.5],faceToward:[-2,-20]});Re(Mx(),Ca,{y:on(Ca.pos[0],Ca.pos[1])+fd});function yi(i,t){return ir.push({wrap:i,locomotion:i.userData.locomotion,offset:t.offset||0,lane:t.lane||0,finalDistance:t.finalDistance,finalLane:t.finalLane??t.lane??0,faceCenter:!!t.faceCenter,bob:t.bob||0,pose:{},initialized:!1}),i}const EM=po(Gt.horseGroom.pos[0],Gt.horseGroom.pos[1],1.6)+fo,bM=Sx(),Jn=Re(bM,Gt.horseGroom,{y:EM});yi(Jn,{finalDistance:83,bob:.025});const Pd=wx(),$n=Re(Pd,Gt.bride,{y:on(Gt.bride.pos[0],Gt.bride.pos[1])+fo}),TM=$n.rotation.y;Jn.add(Nr);Nr.position.set(0,3,0);const AM=po(Gt.elephant.pos[0],Gt.elephant.pos[1],3.9)+fo,Ld=Ex(),Id=Re(Ld,Gt.elephant,{y:AM});yi(Id,{offset:-8,finalDistance:59,bob:.018});const oo=Qx("TEAM GROOM",{poleHeight:1});oo.group.position.set(0,3.18,-.55);Ld.bannerMount.add(oo.group);ni.push(oo.update);const RM=[{offset:-1,lane:-2.4,finalDistance:81.5,finalLane:-2.4},{offset:-1,lane:2.4,finalDistance:81.5,finalLane:2.4},{offset:4,lane:-2.8,finalDistance:68,finalLane:-2.7,faceCenter:!0},{offset:4,lane:0,finalDistance:68,finalLane:0,faceCenter:!1},{offset:4,lane:2.8,finalDistance:68,finalLane:2.7,faceCenter:!0},{offset:-15,lane:-2.8,finalDistance:59,finalLane:-3.4},{offset:-15,lane:2.8,finalDistance:59,finalLane:3.4}],CM=Gt.attendants.map((i,t)=>Re(id({item:i.item,phase:t*.7}),i));RM.forEach((i,t)=>yi(CM[t],i));const Dd=Gt.groomMusicians.map((i,t)=>Re(id({item:i.item,phase:3+t}),i));yi(Dd[0],{offset:-3,lane:-2.2,finalDistance:78.5,finalLane:-1.8,faceCenter:!0});yi(Dd[1],{offset:-3,lane:2.2,finalDistance:78.5,finalLane:1.8,faceCenter:!0});const PM=Gt.dancers.map((i,t)=>Re(od({variant:i.variant,phase:t*.8}),{pos:i.pos,faceToward:Gt.horseGroom.pos})),LM=[{offset:7,lane:-3,finalDistance:64,finalLane:-4.4},{offset:7,lane:3,finalDistance:64,finalLane:4.4},{offset:12,lane:-3,finalDistance:72,finalLane:-4.4},{offset:12,lane:3,finalDistance:72,finalLane:4.4},{offset:15,lane:-3.7,finalDistance:80.5,finalLane:-4.4},{offset:15,lane:3.7,finalDistance:80.5,finalLane:4.4}];LM.forEach((i,t)=>yi(PM[t],{...i,faceCenter:!0}));Gt.brideDancers.forEach((i,t)=>Re(od({variant:i.variant,phase:1+t}),i));Gt.guests.forEach((i,t)=>Re($c({variant:i.variant,phase:t*1.1}),i));const Ud=Re($c({variant:"cheering",phase:.5,gender:"male"}),Gt.moneyThrower);yi(Ud,{offset:-5,lane:-3.1,finalDistance:85,finalLane:-4.6,faceCenter:!0});const ro=Jx({origin:[-.9,1.8,.55],ground:.05,count:_e?22:36});ro.group.visible=!1;Ud.add(ro.group);ni.push((i,t)=>{ro.group.visible&&ro.update(Math.max(0,i-Ar),t)});const Nd=Re($c({variant:"cheering",phase:2.3,gender:"male"}),Gt.fireworkGuy);yi(Nd,{offset:-5,lane:3.1,finalDistance:85,finalLane:4.6,faceCenter:!0});const ao=$x({origin:[0,1.6,0],rise:13});ao.group.visible=!1;Nd.add(ao.group);ni.push(i=>{ao.group.visible&&ao.update(Math.max(0,i-Ar))});const qh=nn([-2,-30]),IM=on(qh[0],qh[1]);[-3.4,3.4].forEach(i=>{Re(Gx(),{pos:nn([-2+i,-30.4])})});for(let i=0;i<9;i++)Re(rd(),{pos:nn([-6+i,-29.6])});for(let i=0;i<5;i++){const t=i/4*Math.PI;Re(rd(),{pos:nn([-2+Math.cos(t)*3,-30+Math.sin(t)*3])})}Re(tl(),{pos:nn([-3.6,-29])});Re(tl(),{pos:nn([-.4,-29])});Re(tl(),{pos:nn([-2,-27.6])});const DM=[...[-2.6,2.6].map(i=>{const t=nn([-2+i,-30.2]);return{pos:t,y:on(t[0],t[1])+3.1}}),...Gt.toranGates.map(i=>({pos:i.pos,y:on(i.pos[0],i.pos[1])+3.6}))];DM.forEach(i=>Re(zx(),{pos:i.pos},{y:i.y}));const rl=kx(5.2,"mixed"),Kh=nn([-2,-30.2]);rl.position.set(Kh[0],IM+3,Kh[1]);rl.rotation.y=yc;oe.add(rl);const Fd=qx({area:Gt.petalArea,top:Dr+16,getHeight:on});Re(Fd,{pos:[0,0]},{y:0});const Ec=Kx({origin:[sr.x,sr.y,sr.z],color:O.flame,count:_e?6:8});oe.add(Ec.group);Ec.update&&ni.push(Ec.update);Gt.swans.forEach(i=>{const t=jx(i.phase),e=new xt;e.position.set(i.pos[0],.34,i.pos[1]),e.add(t.group),oe.add(e),ni.push(t.update)});const Od=Zx(Xh.bride+" weds "+Xh.groom,{radius:55,height:30,speed:.085});oe.add(Od.group);ni.push(Od.update);let as=We.anchorStart;const Pa={x:0,z:0};function qo(i){_r!==i&&(_r=i,XM(i))}function UM(i){if(Sc)return;Sc=!0,Ar=i,ro.group.visible=!0,ao.group.visible=!0,Fd.burst((Jn.position.x+$n.position.x)*.5,(Jn.position.z+$n.position.z)*.5,8),YM();const t=document.getElementById("arrivalMoment");t&&(t.setAttribute("aria-hidden","false"),t.classList.add("show"),setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},5200))}function NM(i,t){let e=0;i<We.holdEnd?(as=We.anchorStart,Ke=0,qo("opening")):i<We.travelEnd?(e=bn((i-We.holdEnd)/(We.travelEnd-We.holdEnd)),as=Ie.lerp(We.anchorStart,We.anchorEnd,e),Ke=0,qo("procession")):i<We.arrivalEnd?(as=We.anchorEnd,Ke=bn((i-We.travelEnd)/(We.arrivalEnd-We.travelEnd)),qo("arrival")):(as=We.anchorEnd,Ke=1,qo("celebration"));const n=_r==="procession"||_r==="arrival";let s=0;for(let a=0;a<ir.length;a++){const c=ir[a],l=c.wrap.position.x,h=c.wrap.position.z,d=c.initialized,p=Ke>0?Ie.lerp(We.anchorEnd+c.offset,c.finalDistance,Ke):as+c.offset,_=(Ke>0?Ie.lerp(c.lane,c.finalLane,Ke):c.lane)*fM(p);c.wrap===Id&&(s=bn(md(p)));const v=gd(p,_,c.pose);let m=v.yaw;if(c.faceCenter&&Ke>.45){ps(p,Pa);const x=Math.atan2(Pa.x-v.x,Pa.z-v.z);m=Ra(m,x,bn((Ke-.45)/.55))}const u=n?1-Ke:0,y=c.bob?(Math.sin(i*(c===ir[0]?5.8:3.8)+a*.7)*.5+.5)*c.bob*u:0;if(c.wrap.position.set(v.x,v.y+y,v.z),c.locomotion){const x=d?Math.min(Math.hypot(v.x-l,v.z-h),.4):0,S=t>1e-4?x/t:0;c.locomotion.phase+=x*c.locomotion.gaitScale;const C=Ie.clamp(S/1.1,0,1),E=1-Math.exp(-8*Math.max(t,.001));c.locomotion.amount=Ie.lerp(c.locomotion.amount,C,E)}if(!c.initialized)c.wrap.rotation.y=m,c.initialized=!0;else{const x=1-Math.exp(-10*Math.max(t,.001));c.wrap.rotation.y=Ra(c.wrap.rotation.y,m,x)}}oo.group.rotation.x=-s*1.4,oo.group.position.y=3.18-s*.1;const o=bn((Ke-.12)/.68),r=Lr($n.position.x,$n.position.z,Jn.position.x,Jn.position.z);$n.rotation.y=Ra(TM,r,o),Pd.setArrival(bn((Ke-.48)/.42)),!Sc&&Ke>=.72&&UM(i)}const FM=new I(...Gt.camera.introFrom),OM=new I(...Gt.camera.target),bc=Gt.camera.introDurationSec;let Zh=!0;const di=new I,fi=new I,jh=new I,Ko={},La={x:0,z:0},Ia={x:0,z:0},Bd=new I,zd=new I;let al=!1,Hs=1;const Jh=26,Zo=[{at:0,angle:-.45,radius:24,height:14,elephant:0},{at:.18,angle:.95,radius:11.5,height:6.3,elephant:0},{at:.38,angle:2,radius:15,height:8.5,elephant:1},{at:.6,angle:2.65,radius:14,height:7.2,elephant:0},{at:.8,angle:4.2,radius:20,height:12.5,elephant:0},{at:1,angle:Math.PI*2-.45,radius:24,height:14,elephant:0}],ss={angle:0,radius:0,height:0,elephant:0};let rr=0;function BM(i,t){let e=1;for(;e<Zo.length-1&&i>Zo[e].at;)e++;const n=Zo[e-1],s=Zo[e],o=bn((i-n.at)/(s.at-n.at));return t.angle=Ie.lerp(n.angle,s.angle,o),t.radius=Ie.lerp(n.radius,s.radius,o),t.height=Ie.lerp(n.height,s.height,o),t.elephant=Ie.lerp(n.elephant,s.elephant,o),t}ie.enablePan=!0;ie.screenSpacePanning=!1;ie.minPolarAngle=.05;ie.maxPolarAngle=Math.PI/2-.02;ie.minDistance=6;ie.maxDistance=150;ie.autoRotateSpeed=.35;let Fr=!1,Es=0;const zM=4,Qn=document.getElementById("followBtn");function kd(){Rr=!1,al=!0,ie.autoRotate=!1,Es=0,Qn==null||Qn.classList.add("show")}function kM(){Bd.copy(ke.position),zd.copy(ie.target),Hs=0,rr=0,al=!0,Rr=!0,Fr=!1,ie.autoRotate=!1,Es=0,Qn==null||Qn.classList.remove("show")}function GM(i,t){const e=!al&&i<bc;e||(rr=(rr+Math.min(Math.max(t,0),.05))%Jh),BM(rr/Jh,ss);const n=bn((Ke-.08)/.82),s=ss.elephant*(1-n),o=Ie.lerp(4,1.5,n),r=Ie.lerp(as+o,84,n)-s*8;if(gd(r,0,Ko),di.set(Ko.x,Ko.y+2.35+s*1.2,Ko.z),n>0){const u=(Jn.position.x+$n.position.x)*.5,y=Math.max(Jn.position.y+2,$n.position.y+1.4),x=(Jn.position.z+$n.position.z)*.5;jh.set(u,y,x),di.lerp(jh,n)}ps(r-3,La),ps(r+3,Ia);let a=Ia.x-La.x,c=Ia.z-La.z;const l=Math.hypot(a,c)||1;a/=l,c/=l;const h=-c,d=a,p=1-Ie.smoothstep(ke.aspect,.65,.95),f=ss.radius+p*3.5;let _=Math.sin(ss.angle)*f*Ie.lerp(1,.88,p);const v=Math.cos(ss.angle)*f;let m=ss.height+p*2.2;if(_+=Math.sin(i*.28)*Ie.lerp(.16,.08,p),m+=Math.sin(i*.22+1.1)*.07,fi.set(di.x+h*_-a*v,di.y+m,di.z+d*_-c*v),fi.y=Math.max(fi.y,on(fi.x,fi.z)+2.4),e){const u=bn(i/bc);ke.position.lerpVectors(FM,fi,u),ie.target.lerpVectors(OM,di,u)}else if(Hs<1){Hs=Math.min(1,Hs+Math.max(t,.001)/1.45);const u=bn(Hs);ke.position.lerpVectors(Bd,fi,u),ie.target.lerpVectors(zd,di,u)}else{const u=Math.max(t,.001),y=1-Math.exp(-1.8*u),x=1-Math.exp(-3*u);ke.position.lerp(fi,y),ie.target.lerp(di,x)}ie.autoRotate=!1,ie.update()}const Xe=Object.create(null),cl=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"]);window.addEventListener("keydown",i=>{cl.has(i.code)&&(kd(),Xe[i.code]=!0,(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault())});window.addEventListener("keyup",i=>{cl.has(i.code)&&(Xe[i.code]=!1)});const pi=new I,Da=new I,wn=new I;function HM(i){if(pi.subVectors(ie.target,ke.position),pi.y=0,pi.lengthSq()<1e-6||(pi.normalize(),Da.set(-pi.z,0,pi.x),wn.set(0,0,0),(Xe.KeyW||Xe.ArrowUp)&&wn.add(pi),(Xe.KeyS||Xe.ArrowDown)&&wn.sub(pi),(Xe.KeyD||Xe.ArrowRight)&&wn.add(Da),(Xe.KeyA||Xe.ArrowLeft)&&wn.sub(Da),(Xe.KeyE||Xe.Space)&&(wn.y+=1),Xe.KeyQ&&(wn.y-=1),wn.lengthSq()===0))return;const t=Xe.ShiftLeft||Xe.ShiftRight?34:13;wn.normalize().multiplyScalar(t*i),ke.position.add(wn),ie.target.add(wn);const e=on(ke.position.x,ke.position.z)+1.5;if(ke.position.y<e){const n=e-ke.position.y;ke.position.y+=n,ie.target.y+=n}ie.autoRotate=!1,Es=0,bs&&bs.classList.add("gone")}const $h=document.getElementById("loading"),bs=document.getElementById("titlecard"),xr=document.getElementById("hint"),ms=document.getElementById("interactionTip"),Qh=document.getElementById("interactionTipText");let gs=0,tu=!1,eu=!1,Tc=null,Gd=0;try{const i=sessionStorage.getItem("wedding-world-audio-intent"),t=JSON.parse(sessionStorage.getItem("wedding-world-audio-state")||"null");if(Tc=(t==null?void 0:t.intent)||i,Number.isFinite(Number(t==null?void 0:t.currentTime))){const e=Number.isFinite(Number(t==null?void 0:t.capturedAt))?Math.min(8,Math.max(0,(Date.now()-Number(t.capturedAt))/1e3)):0;Gd=Math.max(0,Number(t.currentTime)+e)}sessionStorage.removeItem("wedding-world-audio-intent"),sessionStorage.removeItem("wedding-world-audio-state")}catch{}function VM(){eu||(eu=!0,$h&&$h.classList.add("hidden"))}function go(){ms&&(gs&&(clearTimeout(gs),gs=0),ms.classList.remove("show"),ms.setAttribute("aria-hidden","true"))}function Ac(i,t=3400){!_e||!ms||!Qh||document.hidden||(gs&&clearTimeout(gs),Qh.textContent=i,ms.setAttribute("aria-hidden","false"),ms.classList.add("show"),gs=window.setTimeout(go,t))}function WM(){_e&&(window.setTimeout(()=>Ac("Drag one finger to look around",3200),7200),window.setTimeout(()=>Ac("Pinch with two fingers to move closer",3400),14500))}ie.addEventListener("start",()=>{Fr=!0,kd(),bs&&bs.classList.add("gone"),xr&&xr.classList.add("gone"),go()});ie.addEventListener("end",()=>{Fr=!1,Es=0,_e&&!tu&&(tu=!0,window.setTimeout(()=>{Rr||Ac("Tap Follow baraat to return to the cinematic",3600)},900))});sn.domElement.addEventListener("pointerdown",go,{passive:!0});Qn==null||Qn.addEventListener("click",()=>{go(),kM()});function Hd(){for(const i of cl)Xe[i]=!1}window.addEventListener("blur",Hd);document.addEventListener("visibilitychange",()=>{document.hidden&&(Hd(),go())});const Mr=iM({button:document.getElementById("soundBtn"),initialTrackTime:Gd});Tc==="play"?Mr.start():Tc==="muted"&&Mr.stayMuted();function XM(i,t=!1){Mr.setPhase(i,t)}function YM(){Mr.playArrivalCue()}const qM=new $u;let nu=0;function KM(){const i=Math.min(qM.getDelta(),.05);nu+=i;const t=nu;Ir.material.color.setHSL(.52,.55,.3+Math.sin(t*.3)*.03),so.material.opacity=.16+Math.sin(t*2)*.07,so.scale.x=1+Math.sin(t*1.5)*.2,bd.forEach((s,o)=>{s.position.x+=s.userData.driftSpeed*i,s.position.x>100&&(s.position.x=-100),s.position.y=s.userData.baseY+Math.sin(t*.3+o)*.24}),Ad.forEach(s=>{const o=s.userData;s.position.x=o.baseX+Math.sin(t*o.speed+o.phase)*1.25,s.position.z=o.baseZ+Math.cos(t*o.speed*.87+o.phase)*1.05,s.position.y=o.baseY+Math.sin(t*2+o.phase)*.5,s.rotation.y=t*o.speed;const r=Math.sin(t*12+o.phase)*.6;s.children[0].rotation.y=r,s.children[1].rotation.y=-r}),Td.forEach(s=>{const o=s.userData;s.position.x+=o.speed*2*i,s.position.y=o.baseY+Math.sin(t*1.5+o.phase)*.35,s.position.x>60&&(s.position.x=-60);const r=Math.sin(t*4+o.phase)*.4;s.children[0].rotation.z=r,s.children[1].rotation.z=-r}),NM(t,i);const e=t-Ar,n=e>=0&&e<3.2?(1-e/3.2)*(.55+Math.sin(e*8)*.45):0;ol.intensity=(_e?2:2.6)+Math.sin(t*9)*.25+Math.sin(t*23)*.12+n*2.2,ld.strength=.58+n*(_e?.22:.42);for(let s=0;s<ni.length;s++)ni[s](t,i);Rr?GM(t,i):(HM(i),Fr||(Es+=i,!_e&&Es>zM&&(ie.autoRotate=!0)),ie.update()),Rs.render(),Zh&&(Zh=!1,VM(),setTimeout(()=>{bs&&bs.classList.add("gone")},(bc+2)*1e3),_e?WM():setTimeout(()=>{xr&&xr.classList.add("gone")},14e3))}sn.setAnimationLoop(KM);let Ua=0,iu=window.innerWidth,su=window.innerHeight;window.addEventListener("resize",()=>{Ua||(Ua=requestAnimationFrame(()=>{Ua=0;const i=window.innerWidth,t=window.innerHeight;if(!(i===iu&&t===su)&&(iu=i,su=t,ke.aspect=i/t,ke.updateProjectionMatrix(),sn.setSize(i,t),Rs.setSize(i,t),Ks)){const e=sn.getPixelRatio();Ks.uniforms.resolution.value.set(1/(i*e),1/(t*e))}}))});
