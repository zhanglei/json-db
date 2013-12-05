/*
jQWidgets v2.8.1 (2013-Apr-12)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.dataview.sort=function(){this.sortby=function(d,f,p){var m=Object.prototype.toString;if(f==null){this.sortdata=null;this.refresh();return}if(f==undefined){f=true}if(f=="a"||f=="asc"||f=="ascending"||f==true){f=true}else{f=false}var g=d;this.sortfield=d;this.sortfielddirection=f?"asc":"desc";if(this.sortcache==undefined){this.sortcache={}}this.sortdata=[];var b=[];var c=false;if(g=="constructor"){g=""}if(!this.virtualmode&&this.sortcache[g]!=null){var o=this.sortcache[g];b=o._sortdata;if(o.direction==f){b.reverse()}else{if(!o.direction&&f){b.reverse()}c=true}if(b.length<this.totalrecords){this.sortcache={};c=false;b=[]}}Object.prototype.toString=(typeof d=="function")?d:function(){return this[d]};var r=this.records;var t=this;var n="";if(this.source.datafields){a.each(this.source.datafields,function(){if(this.name==d){if(this.type){n=this.type}return false}})}if(b.length==0){if(r.length){var h=r.length;for(var q=0;q<h;q++){var e=r[q];if(e!=null){var j=e;var s=j.toString();b.push({sortkey:s,value:j,index:q})}}}else{var l=false;for(obj in r){var e=r[obj];if(e==undefined){l=true;break}var j=e;b.push({sortkey:j.toString(),value:j,index:obj})}if(l){a.each(r,function(u,v){b.push({sortkey:v.toString(),value:v,index:u})})}}}if(!c){if(p==null){this._sortcolumntype=n;var k=this;b.sort(function(u,i){return k._compare(u,i,n)})}else{b.sort(p)}}if(!f){b.reverse()}Object.prototype.toString=m;this.sortdata=b;this.sortcache[g]={_sortdata:b,direction:f};this.reload(this.records,this.rows,this.filters,this.updated,true)},this.clearsortdata=function(){this.sortcache={};this.sortdata=null};this._compare=function(c,b,e){var c=c.sortkey;var b=b.sortkey;if(c===undefined){c=null}if(b===undefined){b=null}if(c===null&&b===null){return 0}if(c===null&&b!==null){return 1}if(c!==null&&b===null){return -1}if(a.jqx.dataFormat){if(e&&e!=""){switch(e){case"number":case"int":case"float":if(c<b){return -1}if(c>b){return 1}return 0;case"date":case"time":if(c<b){return -1}if(c>b){return 1}return 0;case"string":case"text":c=String(c).toLowerCase();b=String(b).toLowerCase();break}}else{if(a.jqx.dataFormat.isNumber(c)&&a.jqx.dataFormat.isNumber(b)){if(c<b){return -1}if(c>b){return 1}return 0}else{if(a.jqx.dataFormat.isDate(c)&&a.jqx.dataFormat.isDate(b)){if(c<b){return -1}if(c>b){return 1}return 0}else{if(!a.jqx.dataFormat.isNumber(c)&&!a.jqx.dataFormat.isNumber(b)){c=String(c).toLowerCase();b=String(b).toLowerCase()}}}}}try{if(c<b){return -1}if(c>b){return 1}}catch(d){var f=d}return 0};this._equals=function(c,b){return(this._compare(c,b)===0)}};a.extend(a.jqx._jqxGrid.prototype,{_rendersortcolumn:function(){var b=this;var c=this.getsortcolumn();if(this.sortdirection){a.each(this.columns.records,function(e,f){var d=a.data(document.body,"groupsortelements"+this.displayfield);if(c==null||this.displayfield!=c){a(this.sortasc).hide();a(this.sortdesc).hide();if(d!=null){d.sortasc.hide();d.sortdesc.hide()}}else{if(b.sortdirection.ascending){a(this.sortasc).show();a(this.sortdesc).hide();if(d!=null){d.sortasc.show();d.sortdesc.hide()}}else{a(this.sortasc).hide();a(this.sortdesc).show();if(d!=null){d.sortasc.hide();d.sortdesc.show()}}}})}},getsortcolumn:function(){if(this.sortcolumn){return this.sortcolumn}return null},removesort:function(){this.sortby(null)},sortby:function(c,f,e,d){if(this._loading){throw new Error("jqxGrid: "+this.loadingerrormessage);return false}if(c==null){f=null;c=this.sortcolumn}if(c){var b=this;if(e==undefined&&b.source.sortcomparer!=null){e=b.source.sortcomparer}if(f=="a"||f=="asc"||f=="ascending"||f==true){ascending=true}else{ascending=false}if(f!=null){b.sortdirection={ascending:ascending,descending:!ascending}}else{b.sortdirection={ascending:false,descending:false}}if(f!=null){b.sortcolumn=c}else{b.sortcolumn=null}if(b.source.sort||b.virtualmode){b.dataview.sortfield=c;if(f==null){b.dataview.sortfielddirection=""}else{b.dataview.sortfielddirection=ascending?"asc":"desc"}if(b.source.sort){b.source.sort(c,f);b._raiseEvent(6,{sortinformation:b.getsortinformation()});return}}else{b.dataview.sortby(c,f,e)}if(d===false){return}if(b.groupable&&b.groups.length>0){b._render(true,false,false);if(b._updategroupheadersbounds&&b.showgroupsheader){b._updategroupheadersbounds()}}else{if(b.pageable){b.dataview.updateview()}b._updaterowsproperties();b.rendergridcontent(true)}b._raiseEvent(6,{sortinformation:b.getsortinformation()})}},_togglesort:function(d){var b=this;if(d.sortable&&b.sortable){var c=b.getsortinformation();var e=null;if(c.sortcolumn!=null&&c.sortcolumn==d.displayfield){e=c.sortdirection.ascending;if(b.sorttogglestates>1){if(e==true){e=false}else{e=null}}else{e=!e}}else{e=true}b.sortby(d.displayfield,e,null)}}})})(jQuery);