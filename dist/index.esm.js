import{get as e,isEmpty as r,set as t}from"lodash";import n from"path-browserify";import o from"firebase/app";import"firebase/firestore";import"firebase/auth";import"firebase/storage";import{v4 as i}from"uuid";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e){e&&"object"==typeof e&&Object.keys(e).map(function(r){e[r]=function e(r){return r?"object"!=typeof r?r:r.toDate&&"function"==typeof r.toDate?r.toDate():Array.isArray(r)?r.map(function(r){return e(r)}):"object"==typeof r?(Object.keys(r).map(function(t){r[t]=e(r[t])}),r):void 0:r}(e[r])})}var c=function(e){var r=e.data();return s(r),a({id:e.id},r)};function l(r,t,n){r.sort(function(r,o){var i=e(r,t),a=e(o,t),u="asc"===n;return Number.isFinite(i)&&Number.isFinite(a)?f(i,a,u):"string"==typeof i&&"string"==typeof a?f(i.toLowerCase(),a.toLowerCase(),u):i instanceof Date&&a instanceof Date?f(i,a,u):f(!!i,!!a,u)})}function f(e,r,t){return e>r?t?1:-1:e<r?t?-1:1:0}function h(t,n){if(!n||r(n))return t;var o=[];return Object.keys(n).map(function(e){var r=function(e,r){if(!r||"string"==typeof r||"number"==typeof r||"boolean"==typeof r)return[{searchField:e,searchValue:r}];var t={};return t[e]=r,function(e){var r=[];return function e(t,n){for(var o in n=n||"",t)if(t.hasOwnProperty(o)){var i=t&&t[o],a=n?n+"."+o:o;"object"==typeof i||i instanceof Array?e(i,a):r.push({searchField:a,searchValue:i})}}(e,null),r}(t)}(e,n[e]);o.push.apply(o,r)}),t.filter(function(r){return o.reduce(function(t,n){return function(r,t,n){var o=e(r,t);return!o&&!n||!!o&&("string"==typeof n?o.toString().toLowerCase().includes(n.toLowerCase()):("boolean"==typeof n||"number"==typeof n)&&o===n)}(r,n.searchField,n.searchValue)&&t},!0)})}var d=function(){return null},v=function(){function e(e,r){this.title=e,this.cacheEnabledKey=r}var r,t=e.prototype;return t.isEnabled=function(){return!!localStorage.getItem(this.cacheEnabledKey)},t.SetEnabled=function(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)},(r=[{key:"log",get:function(){return this.isEnabled()?console.log.bind(console,this.title):d}},{key:"warn",get:function(){return this.isEnabled()?console.warn.bind(console,this.title):d}},{key:"error",get:function(){return this.isEnabled()?console.error.bind(console,this.title):d}}])&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,r),e}(),m=new v("🔥raf:","LOGGING_ENABLED"),p=m.log,g=m.error,P=m.warn,y=new v("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),b="firecosts-single-reads";function w(e,r,t){if(!e.s){if(t instanceof R){if(!t.s)return void(t.o=w.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(w.bind(null,e,r),w.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var R=function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{w(n,1,i(this.v))}catch(e){w(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?w(n,1,r?r(o):o):t?w(n,1,t(o)):w(n,2,o)}catch(e){w(n,2,e)}},n},e}();function j(e,r,t){var n,o,i=-1;return function a(u){try{for(;++i<e.length&&(!t||!t());)if((u=r(i))&&u.then){if(!((s=u)instanceof R&&1&s.s))return void u.then(a,o||(o=w.bind(null,n=new R,2)));u=u.v}n?w(n,1,u):n=u}catch(e){w(n||(n=new R),2,e)}var s}(),n}var G=function e(r,t){try{var n,o=Array.isArray(t),i=!o&&"object"==typeof t,u=i&&!!t&&t.hasOwnProperty("src"),s=function(){if(u){if(t.src.startsWith("https://"))return n=1,t;var s=null;return function(e,o){try{var i=(s=r.storage().ref(t.src),Promise.resolve(s.getDownloadURL()).then(function(e){return n=1,a({},t,{src:e})}))}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){return g("Error when getting download URL",{error:e,fieldValue:t,ref:s}),n=1,t})}return function(){if(i){var a=function(){return n=1,t},u=function(n,o,i){var a=[];for(var u in n)a.push(u);return j(a,function(n){return function(n){var o=function(){if(t.hasOwnProperty(n))return Promise.resolve(e(r,t[n])).then(function(e){t[n]=e})}();if(o&&o.then)return o.then(function(){})}(a[n])},void 0)}(t);return u&&u.then?u.then(a):a()}return function(){if(o){var i=function(){return n=1,t},a=j(t,function(n){return Promise.resolve(e(r,t[n])).then(function(e){t[n]=e})});return a&&a.then?a.then(i):i()}}()}()}();return Promise.resolve(s&&s.then?s.then(function(e){return n?e:t}):n?s:t)}catch(e){return Promise.reject(e)}};function F(e,r){if(!e)return r+"";if(!r)throw new Error("Resource name must be a string of length greater than 0 characters");var t="string"==typeof e?e:e(),o=n.join("/",t,"/",r,"/");if((o.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return o.slice(1,-1)}var L=function(){function e(){this.firestore=null,this.app=null,this.options={}}var r=e.prototype;return r.GetApp=function(){return this.app},r.init=function(e,r){var t=r||{};this.options=t,this.app=function(e,r){return r.app?r.app:o.apps.length?o.app():o.initializeApp(e)}(e,t),this.firestore=this.app.firestore()},r.db=function(){return this.firestore},r.serverTimestamp=function(){return new Date},r.auth=function(){return this.app.auth()},r.storage=function(){return this.app.storage()},r.GetUserLogin=function(){try{var e=this;return Promise.resolve(new Promise(function(r,t){e.app.auth().onAuthStateChanged(function(e){e?r(e):t("getUserLogin() no user logged in")})}))}catch(e){return Promise.reject(e)}},r.OnUserLogout=function(e){this.app.auth().onAuthStateChanged(function(r){var t=!r;p("FirebaseWrapper.OnUserLogout",{user:r,isLoggedOut:t}),t&&e(r)})},e}(),A=function(){function e(e,r,t){var n=this;this.fireWrapper=e,this.options=r,this.flogger=t,this.resources={},this.db=e.db(),this.fireWrapper.OnUserLogout(function(){n.resources={}})}var r=e.prototype;return r.TryGetResource=function(e,r,t){try{var n=this,o=function(){return n.TryGetResourcePromise(e,t)},i=function(){if(r)return Promise.resolve(n.RefreshResource(e,t)).then(function(){})}();return Promise.resolve(i&&i.then?i.then(o):o())}catch(e){return Promise.reject(e)}},r.GetResource=function(e){var r=this.resources[e];if(!r)throw new Error("react-admin-firebase: Can't find resource: \""+e+'"');return r},r.TryGetResourcePromise=function(e,r){try{var t=this;return p("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:r}),Promise.resolve(t.initPath(e)).then(function(){var r=t.resources[e];if(!r)throw new Error('react-admin-firebase: Cant find resource: "'+e+'"');return r})}catch(e){return Promise.reject(e)}},r.RefreshResource=function(e,r){try{var t,n,o=this;if(null!=(t=o.options)&&null!=(n=t.lazyLoading)&&n.enabled)throw P("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");return p("resourceManager.RefreshResource",{relativePath:e,collectionQuery:r}),Promise.resolve(o.initPath(e)).then(function(){var t=o.resources[e],n=t.collection,i=o.applyQuery(n,r);return Promise.resolve(i.get()).then(function(e){t.list=e.docs.map(function(e){return o.parseFireStoreDocument(e)}),o.flogger.logDocument(e.docs.length)(),p("resourceManager.RefreshResource",{newDocs:e,resource:t,collectionPath:n.path})})})}catch(e){return Promise.reject(e)}},r.GetSingleDoc=function(e,r){try{var t=this;return Promise.resolve(t.initPath(e)).then(function(){var n=t.GetResource(e);return t.flogger.logDocument(1)(),Promise.resolve(n.collection.doc(r).get()).then(function(o){if(!o.exists)throw new Error("react-admin-firebase: No id found matching: "+r);var i=t.parseFireStoreDocument(o);return p("resourceManager.GetSingleDoc",{relativePath:e,resource:n,docId:r,docSnap:o,result:i}),i})})}catch(e){return Promise.reject(e)}},r.initPath=function(e){try{var r=F(this.options&&this.options.rootRef,e),t=!!this.resources[e];if(p("resourceManager.initPath()",{absolutePath:r,hasBeenInited:t}),t)return p("resourceManager.initPath() has been initialized already..."),Promise.resolve();var n=this.db.collection(r),o={collection:n,list:[],path:e,pathAbsolute:r};return this.resources[e]=o,p("resourceManager.initPath() setting resource...",{resource:o,allResources:this.resources,collection:n,collectionPath:n.path}),Promise.resolve()}catch(e){return Promise.reject(e)}},r.parseFireStoreDocument=function(e){if(!e)return P("parseFireStoreDocument: no doc",{doc:e}),{};var r=e.data();return s(r),a({id:e.id},r)},r.getUserIdentifier=function(){try{return Promise.resolve(this.options.associateUsersById?this.getCurrentUserId():this.getCurrentUserEmail())}catch(e){return Promise.reject(e)}},r.getCurrentUserEmail=function(){try{return Promise.resolve(this.fireWrapper.GetUserLogin()).then(function(e){return e?e.email:"annonymous user"})}catch(e){return Promise.reject(e)}},r.getCurrentUserId=function(){try{return Promise.resolve(this.fireWrapper.GetUserLogin()).then(function(e){return e?e.uid:"annonymous user"})}catch(e){return Promise.reject(e)}},r.applyQuery=function(e,r){var t=r?r(e):e;return p("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(r||"-").toString(),collRef:t}),t},e}(),S=function(){function e(e,r,t){this.fireWrapper=e,this.options=r,this.flogger=t,this.rm=new A(this.fireWrapper,this.options,this.flogger)}var r=e.prototype;return r.db=function(){return this.fireWrapper.db()},r.checkRemoveIdField=function(e,r){this.options.dontAddIdFieldToDoc||(e.id=r)},r.parseDataAndUpload=function(e,r,n){try{var o=this;if(!n)return Promise.resolve(n);var i=e.collection.doc(r).path,a=function(e){if(!e||"object"!=typeof e)return[];var r=[];return Object.keys(e).map(function(t){!function e(r,t,n){return r?"object"!=typeof r?r:r.toDate&&"function"==typeof r.toDate?r.toDate():Array.isArray(r)?r.map(function(r,o){return e(r,t+"."+o,n)}):"object"==typeof r?r&&r.hasOwnProperty("rawFile")?(n.push({fieldDotsPath:t,fieldSlashesPath:t.split(".").join("/"),rawFile:r.rawFile}),void delete r.rawFile):(Object.keys(r).map(function(o){e(r[o],t+"."+o,n)}),r):void 0:r}(e[t],t,r)}),r}(n);return Promise.resolve(Promise.all(a.map(function(e){try{return Promise.resolve(o.uploadAndGetLink(e.rawFile,i,e.fieldSlashesPath,!!o.options.useFileNamesInStorage)).then(function(r){t(n,e.fieldDotsPath+".src",null==r?void 0:r.src),t(n,e.fieldDotsPath+".id",null==r?void 0:r.id)})}catch(e){return Promise.reject(e)}}))).then(function(){return n})}catch(e){return Promise.reject(e)}},r.addCreatedByFields=function(e){try{return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;var r=e.metaFieldCasing;return r?"camel"===r?"createDate":"snake"===r?"create_date":"pascal"===r?"CreateDate":"kebab"===r?"create-date":"createdate":"createdate"}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;var r=e.metaFieldCasing;return r?"camel"===r?"createdBy":"snake"===r?"created_by":"pascal"===r?"CreatedBy":"kebab"===r?"created-by":"createdby":"createdby"}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,this.fireWrapper,this.rm,this.options))}catch(e){return Promise.reject(e)}},r.addUpdatedByFields=function(e){try{return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;var r=e.metaFieldCasing;return r?"camel"===r?"lastUpdate":"snake"===r?"last_update":"pascal"===r?"LastUpdate":"kebab"===r?"last-update":"lastupdate":"lastupdate"}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;var r=e.metaFieldCasing;return r?"camel"===r?"updatedBy":"snake"===r?"updated_by":"pascal"===r?"UpdatedBy":"kebab"===r?"updated-by":"updatedby":"updatedby"}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,this.fireWrapper,this.rm,this.options))}catch(e){return Promise.reject(e)}},r.uploadAndGetLink=function(e,r,t,n){try{var o=i(),a=o+"/"+o;return console.log("storage path",a),Promise.resolve(this.saveFile(a,e)).then(function(e){return{id:o,src:e||""}})}catch(e){return Promise.reject(e)}},r.saveFile=function(e,r){try{var t=this;p("saveFile() saving file...",{storagePath:e,rawFile:r});var n=t.fireWrapper.storage().ref(e).put(r);return Promise.resolve(function(r,o){try{var i=Promise.resolve(new Promise(function(e,r){return n.then(e).catch(r)})).then(function(r){return Promise.resolve(r.ref.getDownloadURL()).then(function(n){return p("saveFile() saved file",{storagePath:e,taskResult:r,getDownloadURL:n}),t.options.relativeFilePaths?e:n})})}catch(e){return o(e)}return i&&i.then?i.then(void 0,o):i}(0,function(e){g("storage/unknown"===e.code?'saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage':"saveFile() error saving file",{storageError:e})}))}catch(e){return Promise.reject(e)}},e}();function T(e,r,t){if(!e.s){if(t instanceof I){if(!t.s)return void(t.o=T.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(T.bind(null,e,r),T.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var I=function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{T(n,1,i(this.v))}catch(e){T(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?T(n,1,r?r(o):o):t?T(n,1,t(o)):T(n,2,o)}catch(e){T(n,2,e)}},n},e}();function k(e){return e instanceof I&&1&e.s}var D=function(e,r,t,n){try{var o=btoa(JSON.stringify(a({},r,{resourceName:t}))),i=localStorage.getItem(o);return i?Promise.resolve(e.doc(i).get()).then(function(e){return n.logDocument(1)(),!!e.exists&&e}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},E=function(e,r,t,n,o){void 0===o&&(o=U);try{var i=o.filters?(s=e,c=r.filter,Object.keys(c).forEach(function(e){s=s.where(e,"==",c[e])}),s):e,u=o.sort?function(e,r){if(null!=r&&"id"!==r.field){var t=r.field,n=r.order.toLocaleLowerCase();e=e.orderBy(t,n)}return e}(i,r.sort):i;return Promise.resolve(o.pagination?function(e,r,t,n,o){try{var i=r.pagination,u=i.page,s=i.perPage,c=function(){if(1!==u)return Promise.resolve(D(t,r,n,o)).then(function(i){function u(){e=e.startAfter(i).limit(s)}var c=function(){if(!i)return Promise.resolve(function(e,r,t,n,o){try{var i=function(){var e=(s-f)*c,t=1===f?r.limit(e):r.startAt(l).limit(e);return Promise.resolve(t.get()).then(function(e){var r=e.docs.length;return o.logDocument(r)(),e.docs[r-1]})},u=t.pagination,s=u.page,c=u.perPage,l=!1,f=s-1,h=a({},t,{pagination:a({},t.pagination)}),d=function(e,r,t){for(var n;;){var o=e();if(k(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=t();if(i&&i.then){if(!k(i)){n=1;break}i=i.s}}var a=new I,u=T.bind(null,a,2);return(0===n?o.then(c):1===n?i.then(s):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,u):c(o):T(a,1,i)})).then(void 0,u),a;function s(r){i=r;do{if(!(o=e())||k(o)&&!o.v)return void T(a,1,i);if(o.then)return void o.then(c).then(void 0,u);k(i=t())&&(i=i.v)}while(!i||!i.then);i.then(s).then(void 0,u)}function c(e){e?(i=t())&&i.then?i.then(s).then(void 0,u):s(i):T(a,1,i)}}(function(){return!l&&f>1},0,function(){return f--,h.pagination.page=f,console.log("getting query cursor currentPage=",f),Promise.resolve(D(e,h,n,o)).then(function(e){l=e})});return Promise.resolve(d&&d.then?d.then(i):i())}catch(e){return Promise.reject(e)}}(t,e,r,n,o)).then(function(e){i=e})}();return c&&c.then?c.then(u):u()});e=e.limit(s)}();return Promise.resolve(c&&c.then?c.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}(u,r,e,t,n):u)}catch(e){return Promise.reject(e)}var s,c},U={filters:!0,sort:!0,pagination:!0};function C(e,r){return a({},e,{filter:r?a({deleted:!1},e.filter):e.filter})}function O(e,r,t){if(!e.s){if(t instanceof M){if(!t.s)return void(t.o=O.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(O.bind(null,e,r),O.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var M=function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{O(n,1,i(this.v))}catch(e){O(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?O(n,1,r?r(o):o):t?O(n,1,t(o)):O(n,2,o)}catch(e){O(n,2,e)}},n},e}();function W(e,r,t){var n=[];for(var o in e)n.push(o);return function(e,r,t){var n,o,i=-1;return function a(u){try{for(;++i<e.length&&(!t||!t());)if((u=r(i))&&u.then){if(!((s=u)instanceof M&&1&s.s))return void u.then(a,o||(o=O.bind(null,n=new M,2)));u=u.v}n?O(n,1,u):n=u}catch(e){O(n||(n=new M),2,e)}var s}(),n}(n,function(e){return r(n[e])},t)}var N=function(){function e(e,r,t){this.options=e,this.rm=r,this.client=t}var r=e.prototype;return r.apiGetList=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o=C(r,!!t.options.softDelete);return p("apiGetListLazy",{resourceName:e,params:o}),Promise.resolve(E(n.collection,o,e,t.client.flogger)).then(function(r){return Promise.resolve(r.get()).then(function(r){var i=r.docs.length;if(!i)return p("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};t.client.flogger.logDocument(i)();var u=r.docs.map(c),s=r.docs[r.docs.length-1];!function(e,r,t){var n=btoa(JSON.stringify(a({},r,{resourceName:t})));localStorage.setItem(n,e.id);var o="ra-firebase-cursor-keys_"+t,i=localStorage.getItem(o);if(i){var u=JSON.parse(i).concat(n);localStorage.setItem(o,JSON.stringify(u))}else localStorage.setItem(o,JSON.stringify([n]))}(s,function(e){return a({},e,{pagination:a({},e.pagination,{page:e.pagination.page+1})})}(o),e);var l=9e3;return Promise.resolve(t.checkIfOnLastPage(n.collection,o,e,s)).then(function(e){var r;function i(e){return r?e:(p("apiGetListLazy result",{docs:u,resource:n,collectionPath:n.collection.path}),{data:u,total:l})}if(e){var a=o.pagination;l=(a.page-1)*a.perPage+u.length,p("apiGetListLazy",{message:"It's last page of collection."})}var s=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){try{var r=W(e,function(r){return Promise.resolve(G(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return p("apiGetListLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:l}})}();return s&&s.then?s.then(i):i(s)})})})})}catch(e){return Promise.reject(e)}},r.apiGetManyReference=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o;p("apiGetManyReferenceLazy",{resourceName:e,resource:n,reactAdminParams:r});var i=a({},r.filter,((o={})[r.target]=r.id,o)),u=C(a({},r,{filter:i}),!!t.options.softDelete);return Promise.resolve(E(n.collection,u,e,t.client.flogger)).then(function(e){return Promise.resolve(e.get()).then(function(e){var r;function o(e){return r?e:(p("apiGetManyReferenceLazy result",{docs:i,resource:n,collectionPath:n.collection.path}),{data:i,total:i.length})}t.client.flogger.logDocument(e.docs.length)();var i=e.docs.map(c),a=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(i.map(function(e){try{var r=W(e,function(r){return Promise.resolve(G(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return p("apiGetManyReferenceLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:i.length}})}();return a&&a.then?a.then(o):o(a)})})})}catch(e){return Promise.reject(e)}},r.checkIfOnLastPage=function(e,r,t,n){try{return Promise.resolve(E(e,r,t,this.client.flogger,{filters:!0,sort:!0})).then(function(e){if(!n)throw new Error("Page cursor was empty...");return Promise.resolve(e.startAfter(n).limit(1).get()).then(function(e){return e.empty})})}catch(e){return Promise.reject(e)}},r.clearQueryCursors=function(e){!function(e){var r="ra-firebase-cursor-keys_"+e,t=localStorage.getItem(r);t&&(JSON.parse(t).forEach(function(e){return localStorage.removeItem(e)}),localStorage.removeItem(r))}(e)},r.tryGetResource=function(e,r){try{return Promise.resolve(this.rm.TryGetResourcePromise(e,r))}catch(e){return Promise.reject(e)}},e}();function H(e,r){var t,n,o=function(e){try{var r;return Promise.resolve(function(t,n){try{var o=Promise.resolve(e()).then(function(e){return r=e})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){var t=e.toString(),n=function(e){var r=/\[code\=([\w-]*)/g.exec(e),t=Array.isArray(r)&&r[1];switch(t||g("unknown StatusCode ",{statusTxt:e}),t){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(t),o={status:n,message:t,json:r};throw g("DataProvider:",e,{errorMsg:t,code:n,errorObj:o}),o}))}catch(e){return Promise.reject(e)}},i=r||{};!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");r&&r.rootRef&&F(r.rootRef,"test")}(e,i);var s=function(e){return{SetEnabled:function(e){y.SetEnabled(e)},ResetCount:function(e){e&&localStorage.removeItem(b)},logDocument:function(r){if(null==e||null==(t=e.lazyLoading)||!t.enabled)return d;var t,n=function(e){void 0===e&&(e=1);var r=localStorage.getItem(b)||"",t=(parseInt(r)||0)+e;return localStorage.setItem(b,t+""),t}(r);return y.log.bind(console,"+"+r+" (session total="+n+" documents read)")}}}(i);m.SetEnabled(!(null==i||!i.logging)),s.SetEnabled(!(null==i||null==(t=i.firestoreCostsLogger)||!t.enabled)),s.ResetCount(!(null!=i&&null!=(n=i.firestoreCostsLogger)&&n.persistCount)),p("Creating FirebaseDataProvider",{firebaseConfig:e,options:i});var c=new L;c.init(e,r);var f=new S(c,i,s);return{app:c.GetApp(),getList:function(e,r){return o(function(){return function(e,r,t){try{var n;p("GetList",{resourceName:e,params:r});var o=t.rm,i=t.fireWrapper,a=t.options;if(null!=a&&null!=(n=a.lazyLoading)&&n.enabled){var u=new N(a,o,t);return Promise.resolve(u.apiGetList(e,r))}var s=r.filter||{},c=s.collectionQuery;return delete s.collectionQuery,Promise.resolve(o.TryGetResource(e,"REFRESH",c)).then(function(e){var t;function n(e){return t?e:{data:v,total:m}}var o=e.list;if(null!=r.sort){var u=r.sort;l(o,u.field,"ASC"===u.order?"asc":"desc")}var c=o;a.softDelete&&!Object.keys(s).includes("deleted")&&(c=o.filter(function(e){return!e.deleted}));var f=h(c,s),d=(r.pagination.page-1)*r.pagination.perPage,v=f.slice(d,d+r.pagination.perPage),m=f.length,p=function(){if(a.relativeFilePaths)return Promise.resolve(Promise.all(v.map(function(e){return G(i,e)}))).then(function(e){return t=1,{data:e,total:m}})}();return p&&p.then?p.then(n):n(p)})}catch(e){return Promise.reject(e)}}(e,r,f)})},getOne:function(e,r){return o(function(){return function(e,r,t){try{p("GetOne",{resourceName:e,params:r});var n=t.rm,o=t.fireWrapper;return Promise.resolve(function(i,a){try{var u=Promise.resolve(n.GetSingleDoc(e,r.id+"")).then(function(e){return t.flogger.logDocument(1)(),Promise.resolve(G(o,e)).then(function(e){return{data:e}})})}catch(e){return a()}return u&&u.then?u.then(void 0,a):u}(0,function(){throw new Error("Error getting id: "+r.id+" from collection: "+e)}))}catch(e){return Promise.reject(e)}}(e,r,f)})},getMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.options,o=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(i){p("GetMany",{resourceName:e,resource:i,params:r});var u=r.ids;return Promise.resolve(Promise.all(u.map(function(e){return i.collection.doc(e+"").get()}))).then(function(e){var r;function i(e){return r?e:{data:c}}t.flogger.logDocument(u.length)();var s=e.map(function(e){return a({},e.data(),{id:e.id})}),c=n.softDelete?s.filter(function(e){return!e.deleted}):s,l=function(){if(n.relativeFilePaths)return Promise.resolve(Promise.all(c.map(function(e){return G(o,e)}))).then(function(e){return r=1,{data:e}})}();return l&&l.then?l.then(i):i(l)})})}catch(e){return Promise.reject(e)}}(e,r,f)})},getManyReference:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.options,i=t.fireWrapper;p("GetManyReference",{resourceName:e,params:r});var a=r.filter||{};return Promise.resolve(n.TryGetResource(e,"REFRESH",a.collectionQuery)).then(function(t){var n;function u(e){return n?e:{data:b,total:w}}delete a.collectionQuery,p("apiGetManyReference",{resourceName:e,resource:t,params:r});var s=t.list,c=r.target,f=r.id,d=s;o.softDelete&&(d=s.filter(function(e){return!e.deleted}));var v=h(d,a),m={};m[c]=f;var g=h(v,m);if(null!=r.sort){var P=r.sort;l(g,P.field,"ASC"===P.order?"asc":"desc")}var y=(r.pagination.page-1)*r.pagination.perPage,b=g.slice(y,y+r.pagination.perPage),w=g.length,R=function(){if(o.relativeFilePaths)return Promise.resolve(Promise.all(g.map(function(e){return G(i,e)}))).then(function(e){return n=1,{data:e,total:w}})}();return R&&R.then?R.then(u):u(R)})}catch(e){return Promise.reject(e)}}(e,r,f)})},update:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;p("Update",{resourceName:e,params:r});var o=r.id+"";return delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return p("Update",{resourceName:e,resource:n,params:r}),Promise.resolve(t.parseDataAndUpload(n,o,r.data)).then(function(e){var r=a({},e);return t.checkRemoveIdField(r,o),Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(n.collection.doc(o).update(r)).then(function(){return{data:a({},e,{id:o})}})})})})}catch(e){return Promise.reject(e)}}(e,r,f)})},updateMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return p("UpdateMany",{resourceName:e,params:r}),delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return p("UpdateMany",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var o=e+"";return Promise.resolve(t.parseDataAndUpload(n,o,r.data)).then(function(e){var r=a({},e);return t.checkRemoveIdField(r,o),Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(n.collection.doc(o).update(r)).then(function(){return a({},e,{id:o})})})})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,f)})},create:function(e,r){return o(function(){return function(e,r,t){try{var n=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){var i;function u(e){if(i)return e;var u=n.db().collection("collections").doc().id;return Promise.resolve(t.parseDataAndUpload(o,u,r.data)).then(function(e){var r=a({},e);return t.checkRemoveIdField(r,u),Promise.resolve(t.addCreatedByFields(r)).then(function(){return Promise.resolve(t.addUpdatedByFields(r)).then(function(){return Promise.resolve(o.collection.doc(u).set(r,{merge:!1})).then(function(){return{data:a({},e,{id:u})}})})})})}p("Create",{resourceName:e,resource:o,params:r});var s=r.data&&r.data.id;p("Create",{hasOverridenDocId:s});var c=function(){if(s){var e=r.data.id;return Promise.resolve(o.collection.doc(e).get()).then(function(n){if(n.exists)throw new Error('the id:"'+e+"\" already exists, please use a unique string if overriding the 'id' field");return Promise.resolve(t.parseDataAndUpload(o,e,r.data)).then(function(r){if(!e)throw new Error("id must be a valid string");var n=a({},r);return t.checkRemoveIdField(n,e),Promise.resolve(t.addCreatedByFields(n)).then(function(){return Promise.resolve(t.addUpdatedByFields(n)).then(function(){return p("Create",{docObj:n}),Promise.resolve(o.collection.doc(e).set(n,{merge:!1})).then(function(){return i=1,{data:a({},r,{id:e})}})})})})})}}();return c&&c.then?c.then(u):u(c)})}catch(e){return Promise.reject(e)}}(e,r,f)})},delete:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return t.options.softDelete?Promise.resolve(function(e,r,t){try{var n=r.id+"";return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){p("DeleteSoft",{resourceName:e,resource:o,params:r});var i={deleted:!0};return Promise.resolve(t.addUpdatedByFields(i)).then(function(){return o.collection.doc(n).update(i).catch(function(e){g("DeleteSoft error",{error:e})}),{data:r.previousData}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:r.previousData}}p("apiDelete",{resourceName:e,resource:t,params:r});var o=function(e,n){try{var o=Promise.resolve(t.collection.doc(r.id+"").delete()).then(function(){})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw new Error(e)});return o&&o.then?o.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,f)})},deleteMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.fireWrapper;return t.options.softDelete?Promise.resolve(function(e,r,t){try{return Promise.resolve(t.rm.TryGetResource(e)).then(function(n){return p("DeleteManySoft",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var r=e+"",o={deleted:!0};return Promise.resolve(t.addUpdatedByFields(o)).then(function(){return n.collection.doc(r).update(o).catch(function(e){g("apiSoftDeleteMany error",{error:e})}),r})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:a}}p("DeleteMany",{resourceName:e,resource:t,params:r});for(var i,a=[],s=o.db().batch(),c=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return u(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,void 0):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(r.ids);!(i=c()).done;){var l=i.value,f=t.collection.doc(l+"");s.delete(f),a.push(l)}var h=function(e,r){try{var t=Promise.resolve(s.commit()).then(function(){})}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}(0,function(e){throw new Error(e)});return h&&h.then?h.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,f)})}}}function J(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var B=function(){function e(e,r){var t=r||{};p("Auth Client: initializing...",{firebaseConfig:e,options:t});var n=new L;n.init(e,t),this.auth=n.auth(),t.persistence&&this.setPersistence(t.persistence)}var r=e.prototype;return r.setPersistence=function(e){var r;switch(e){case"local":r=o.auth.Auth.Persistence.LOCAL;break;case"none":r=o.auth.Auth.Persistence.NONE;break;case"session":default:r=o.auth.Auth.Persistence.SESSION}p("setPersistence",{persistenceInput:e,persistenceResolved:r}),this.auth.setPersistence(r).catch(function(e){return console.error(e)})},r.HandleAuthLogin=function(e){try{var r=this,t=e.username,n=e.password;return Promise.resolve(t&&n?J(function(){return Promise.resolve(r.auth.signInWithEmailAndPassword(t,n)).then(function(e){return p("HandleAuthLogin: user sucessfully logged in",{user:e}),e})},function(){throw p("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}):r.getUserLogin())}catch(e){return Promise.reject(e)}},r.HandleAuthLogout=function(){return this.auth.signOut()},r.HandleAuthError=function(e){return p("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";case 0:case 400:case 404:case 409:case 429:case 499:case 500:case 501:case 503:case 504:default:return"ok"}}(!!e&&e.status)?(p("API is actually authenticated"),Promise.resolve()):(P("Recieved authentication error from API"),Promise.reject())},r.HandleAuthCheck=function(){try{return Promise.resolve(this.getUserLogin())}catch(e){return Promise.reject(e)}},r.getUserLogin=function(){var e=this;return new Promise(function(r,t){if(e.auth.currentUser)return r(e.auth.currentUser);var n=e.auth.onAuthStateChanged(function(e){n(),e?r(e):t()})})},r.HandleGetPermissions=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.claims})})},function(e){return p("HandleGetPermission: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetIdentity=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){var r=e.displayName,t=e.photoURL;return{id:e.uid,fullName:""+(null!=r?r:""),avatar:""+(null!=t?t:"")}})},function(e){return p("HandleGetIdentity: no user is logged in",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTAuthTime=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.authTime})})},function(e){return p("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTExpirationTime=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.expirationTime})})},function(e){return p("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTSignInProvider=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.signInProvider})})},function(e){return p("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTIssuedAtTime=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.issuedAtTime})})},function(e){return p("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTToken=function(){try{var e=this;return Promise.resolve(J(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.token})})},function(e){return p("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},e}();function _(e,r){!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,r),m.SetEnabled(!(null==r||!r.logging));var t=new B(e,r);return{login:function(e){return t.HandleAuthLogin(e)},logout:function(){return t.HandleAuthLogout()},checkAuth:function(){return t.HandleAuthCheck()},checkError:function(e){return t.HandleAuthError(e)},getPermissions:function(){return t.HandleGetPermissions()},getIdentity:function(){return t.HandleGetIdentity()},getAuthUser:function(){return t.getUserLogin()},getJWTAuthTime:function(){return t.HandleGetJWTAuthTime()},getJWTExpirationTime:function(){return t.HandleGetJWTExpirationTime()},getJWTSignInProvider:function(){return t.HandleGetJWTSignInProvider()},getJWTClaims:function(){return t.HandleGetPermissions()},getJWTToken:function(){return t.HandleGetJWTToken()}}}export{_ as FirebaseAuthProvider,H as FirebaseDataProvider};
//# sourceMappingURL=index.esm.js.map
