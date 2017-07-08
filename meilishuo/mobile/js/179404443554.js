define("components/waterfall",["base/MoGu"],function(t){function e(t){return function(e){return e?e.sort(function(e,i){return t(e,i)||e.left-i.left})[0]:null}}function i(t,e){"string"==typeof e&&(e=e.split(T));try{e&&e.length&&e.forEach(function(e){t=t[e]})}catch(i){X("数据结构错误")}finally{return t}}function n(t,e){var i,n,a=e.helpers,o={};if(t&&t.length){for(i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);n=r,n.call(this,t,e,o),e.onLayoutFinished.call(this,e),e.useOptimise&&(e.hasMoved=!0,this.resetCurTop(),m.triggerHandler(e.touchMoveEventName))}}function a(t){return i(t,this._config._dataName)||[]}function o(t){var e=this.$el.height(),i=this.$wrapEl.height();return R>e-i-t?!0:void 0}function r(t,e,i){var n,a,o,r,s,c,l,f=this.$el,u=e.colWidth,h=e.useOptimise,p=e.tmplFn,m=e.colGapT,d=e.data.frame,g=e.isEqualHeight,x=e._boxHeight,v="",y=null,E=this._cols,T=this._colsHistory,w=T[d],F=this._boxes,G=[],L=0;if(w?E=w.map(function(t){return{min:t.min,max:t.min,left:t.left,frame:d}}):w=E.map(function(t){return{min:t.max,max:t.max,left:t.left,frame:d}}),e.rawData[e.drName]&&(i.r=e.rawData[e.drName]),t.forEach(function(t,n){i.v=t,i.index=n,i.totalIndex=e._totalIndex++,v+=p(i)}),f.append(n=_.html(v).children()),a=n.length,!v||!a)return X("没有获取到任何新的 DOM 节点, 请检查模板中是否正确处理了数据");if(n.each(function(t,i){var n,o;i.style.width=u+"px",g?(x||(x=e._boxHeight=i.offsetHeight),n=x):n=i.offsetHeight,y=V(E),V(w),o=y.max+"px",G.push({left:y.left,relativeTopStyle:o,top:y.max,width:u,height:n,index:t,el:i,boxLen:a,frame:d,state:h?e.isFirstFrame?b:N:b}),y.max+=n+m}),e.isFirstFrame=!1,T[d]||(T[d]=E.map(function(t,e){return{min:w[e].max,max:t.max,left:w[e].left,frame:d}})),G.forEach(function(t){var e=t.el;e.style.top=t.relativeTopStyle,e.style.left=t.left+"px",t.baseClass=e.className+=" waterfall-frame-"+d+" "+I,e.className+=" "+t.state}),c=G[0].top,e.isBiWaterfall){if(o=F.length){for(;o>L;){if(l=F[L],l.frame>d){s=L;break}L+=l.boxLen}s="undefined"==typeof s?o:s}else s=0;F.splice.apply(F,[s,0].concat(G))}else!F.length||F[F.length-1].top<=c?this._boxes=F.concat(G):this._boxes=G.concat(F);r=q(E).max,(!this._curTop||r>this._curTop)&&this.$el.height(this._curTop=r),this._cols=E.map(function(t,e){var i=this[e];return{min:t.min<i.min?t.min:i.min,max:t.max>i.max?t.max:i.max,left:t.left,frame:d}},this._cols)}function s(t){return t.checkTimes=1,function e(){setTimeout(function(){t.checkTimes++<P&&(t.initTopOffset=t.$el.offset().top,e())},B*t.checkTimes)}}function c(t){var e,i,n,a=t.colGap,o=4;if(a!==a)return console.error(a+" is not a valid number.");if("number"==typeof a)t.colGapT=t.colGapR=t.colGapB=t.colGapL=a;else{if(e=String(a).split(" "),i=e.length,0==i||i>4)return console.error(a+"'s format is not right.");for(;o--;)if(n=e[o],void 0!==n){if(isNaN(n=+n))return console.error(a+" contains invalid number.");e[o]=n}switch(i){case 1:t.colGapT=t.colGapR=t.colGapB=t.colGapL=e[0];break;case 2:t.colGapT=t.colGapB=e[0],t.colGapR=t.colGapL=e[1];break;case 3:t.colGapT=e[0],t.colGapR=t.colGapL=e[1],t.colGapB=e[2];break;case 4:t.colGapT=e[0],t.colGapR=e[1],t.colGapB=e[2],t.colGapL=e[3]}}}function l(t){this._config=t,this._currentAjax=null,this._id=v++,this._boxes=[],this._frames={loaded:{},cur:0,max:0,min:0},this.init()}function f(t,e,i){if(e){var n=e.page,a=(n-1)*i.length,o=[],r=[],s=[],c=[],l=[],f=[],u=t||(e.param?e.param.eventId:e.eventId||""),h=e.param?e.param.fcid||"":"",p=e.param?e.param.cpcEventId:e.cpcEventId||"";i.forEach(function(t,e){t.link&&-1!==t.link.indexOf("cparam")&&t.tradeItemId&&r.push(t.tradeItemId),t.tradeItemId&&o.push(t.tradeItemId),t.acm&&s.push(t.acm),l.push(t.itemType),c.push(a+e),t.cparam&&f.push(t.cparam)}),Q(u,{cpcs:r,fcid:h,acms:s,indexs:c,iids:o,ptpPartC:e.ptpPartC,eventid:u,types:l}),f.length&&Q(p||70005,{cparams:f,fcid:h})}}var u=document,h=window,p=h.$,m=p(u),d=p(h),g=d.height(),_=p("<div></div>"),x=t.ui.getdoT(),v=1,y=!1,E=!1,T=".",w="down",F="up",G=!1,L=!0,b="waterfall-optimise-show",N="waterfall-optimise-hide",C=function(){return L},H="waterfall-container",I="waterfall-box",k="NORMAL",O="REVERSE",D="$$AddExtraStyle",S={NORMAL:k,REVERSE:O,SHOW:b,HIDE:N,FORCE_CHECK:"waterfall-force-check",EVENT_CLEAR_BACKUP:"waterfall-clear-backup"},R=g/2,$="scroll.waterfall",M="touchmove.waterfall",A="touchend.waterfall",B=1e3,P=6,j=0,W={el:".goods-wall",wrapEl:h,tmpl:"posterWall",type:"get",dataType:"jsonp",eventID:0,data:{frame:1,page:1},dataName:"result",metaDataName:"result",layoutDirection:k,colGap:8,needStatics:!0,hasSideGap:!1,isEqualHeight:!1,canFetch:o,dataHandler:n,dataFilter:a,onBeforeFetch:C,onFetchStart:C,onFetchFinished:C,onFetchSuccess:C,onFetchError:C,onLayoutFinished:C,optimise:null,drName:"r"},V=e(function(t,e){return t.max-e.max}),q=e(function(t,e){return e.max-t.max}),K=e(function(t,e){return e.min-t.min}),U=[],z=0,J=0,Q=function(t,e){var i=h&&h.logger&&h.logger.log;i&&i(t,e)},X=function(){return h.console?function(t){console.log(t)}:C}();return function(){if(!h[D]){h[D]=!0;var t=u.createElement("style");t.id="waterfall-optimise-style",t.innerHTML="."+b+"{display:block;}."+N+"{display:none;}."+H+"{position:relative;}."+I+"{position:absolute;}",t.appendChild(u.createTextNode("")),u.head.appendChild(t)}}(),l.prototype={constructor:l,init:function(){var t,e,i,n,a,o,r,l=this,f=l._config,u=f.colNum,h=f.hasSideGap,m=0,d=0,g=0;if(a=l.$wrapEl=f.$wrapEl=p(f.wrapEl),n=l.$el=f.$el=p(f.el),!n.length)throw Error("el 参数指定的 DOM 元素不存在!");if(n.addClass(H),l._cols=o=[],l._colsHistory=[],f.initTopOffset=n.offset().top,f.isFirstFrame=!0,f.tmplFn=x.compile(f.tmpl),s(f)(),c(f),t=f.colGapL,e=f.colGapR,i=e,h&&(d=2*t),!u||0>=u)throw Error("请传入 colNum");for(r=f.colWidth=Math.floor((n.width()-d-(u-1)*i)/u);u>m;m++)0==m?g=h?t:0:g+=r+i,o.push({min:0,max:0,left:g,frame:0});(f.useOptimise=!!f.optimiseFn)&&(this.bindTouchmoveEvent(),f.optimiseFn.initRange(u)),l.fixGotop(),a.on($,l.scrollHandler=function(t,e){if(!l._isLock){var i,n;n=a.scrollTop(),n||E?E=!1:(E=!0,clearTimeout(j),j=setTimeout(function(){l.resetCurTop(),a.trigger($)},10)),i=e==w?!0:e==F?!1:n>=J,J=n,l._config.canFetch.call(l,n,i)===L&&l.fetch()}})},bindTouchmoveEvent:function(){var t,e,i,n=this,a=this.$wrapEl,o=n._config,r="."+n._id;t=o.touchMoveEventName=M+r,e=o.touchEndEventName=A+r,m.on(t,function(){o.hasMoved=!0,m.triggerHandler(e)}).on(e,function(){!n._isLock&&o.hasMoved&&o.optimiseFn.optimise(n._boxes,a.scrollTop()-o.initTopOffset),o.hasMoved=!1}),a.on($,function(){clearTimeout(i),i=setTimeout(function(){o.optimiseFn.optimise(n._boxes,a.scrollTop()-o.initTopOffset)},30)})},fixGotop:function(){var t=this;m.on("gotop.begin",function(){y=!0}).on("gotop.finish",function(){y=!1,t.resetCurTop()})},fetch:function(t){function e(t,e){r.onFetchFinished.call(o,t,e),o._isLoading=!1}function n(t){var e=o._frames,n=s.frame,a=i(t,r._metaDataName)||{};r.rawData=t,t=r.dataFilter.call(o,t),r.needStatics&&f(r.eventID,a,t),r.onFetchSuccess.call(o,t,r),r.dataHandler.call(o,t,r),e.loaded[s.frame]=1,e.max<n&&(e.max=n),e.min>n&&(e.min=n),r.layoutDirection==k?s.frame++:s.frame--,s.trace=t.trace||0,s.cpc_offset=a.cpc_offset,s.page=s.frame}function a(t,e,i){o._isLoading=!1,r.onFetchError.call(o,i,e)}var o=this,r=o._config,s=r.data;if(!o._isLoading)return o._isLoading=!0,r.onBeforeFetch.call(o,r)===G?void(o._isLoading=!1):(o._config.onFetchStart.call(o,r),this.isFrameLoaded(r.data.frame)?void(o._isLoading=!1):t?void setTimeout(function(){e(null,200),n(t)},0):void(this._currentAjax=p.ajax({type:r.type,dataType:r.dataType,data:s,url:r.url,success:n,error:a,complete:e})))},start:function(t){return this.fetch(t),this},lock:function(){return this._isLock=!0,this},isLoading:function(){return this._isLoading},getColsInfo:function(){return p.extend(!0,[],this._cols)},getColsHistoryInfo:function(){return p.extend(!0,[],this._colsHistory)},setColsHistoryInfo:function(t){return this._colsHistory=p.extend(!0,[],t),this},setColsInfo:function(t){return t&&t.length&&(this._cols=p.extend(!0,[],t)),this},getParam:function(t){return this._config[t]},updateParam:function(t,e){return this._config[t]=e,this},getDataByPath:i,updateLayoutDirection:function(t){if(!(t in S))throw Error(t+" is not a valid direction.");return this._config.layoutDirection=t,this},findLowestCol:function(){return K(this._cols)},findHighestCol:function(){return q(this._cols)},isFrameLoaded:function(t){return!!this._frames.loaded[t]},getCurrentFrame:function(){return this._config.data.frame},unlock:function(){return this._isLock=!1,this},destroy:function(){this._currentAjax&&this._currentAjax.abort(),this.$wrapEl.off($,this.scrollHandler)},resetCurTop:function(){return this._boxes._curTop=-9999,this},triggerScroll:function(t){return this.$wrapEl.triggerHandler($,[t||w]),this},CONS:S},{CONS:S,init:function(t){var e,i,n,a,o;if(t=p.extend(!0,{_totalIndex:0},W,t),"string"==typeof t.dataName&&(t._dataName=t.dataName.split(T)),"string"==typeof t.metaDataName&&(t._metaDataName=t.metaDataName.split(T)),i=t.plugins){if(Array.isArray(i)&&(a=i.some(function(t,e){return t.takeOver&&(o=e,1)})))return n=t.plugins.splice(o,1)[0],n.init(t);if(i.takeOver)return delete t.plugins,i.init(t)}return U.push(e=new l(t)),z++,i&&i.forEach(function(t){t.init(e)}),e}}});