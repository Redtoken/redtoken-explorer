(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[24],{104:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);function u(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteShopUser(\n              user_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n      mutation {\n        salePostShopUser(\n          user_id:"','", \n          full_name: "','", \n          email: "','",    \n          user_password: "','",\n          wallet_address: "','",\n          country_code:  "','",\n          is_admin:  ',",\n          is_sorter:  ",",\n          is_collector:  ",",\n          is_deliver:  ",",\n        ) {\n          status\n          message\n          success\n          data\n        }\n      }\n    "]);return i=function(){return t},t}function c(){var t=Object(s.a)(['\n        {\n          saleGetShopUsers(page: 1, pageSize: 10, keyword:"','") {\n            status\n            message\n            success\n            data\n          }\n        }\n      ']);return c=function(){return t},t}function l(){var t=Object(s.a)(['\n      {\n        saleGetShopUser(user_id:"','") {\n          status\n          message\n          success\n          data\n        }\n      }']);return l=function(){return t},t}function d(){var t=Object(s.a)(["\n        {\n          saleGetShopUsers(page: ",", pageSize: ",") {\n            status\n            message\n            success\n            data\n          }\n        }\n      "]);return d=function(){return t},t}e.a=class{static getUsers(t,e){var a={query:r()(d(),t.page,t.pageSize)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetShopUsers.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static getUser(t,e){var a={query:r()(l(),t)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetShopUser.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static getUserOptions(t,e){var a={query:r()(c(),t)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetShopUsers.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postUser(t,e){console.log("data onpc----\x3e",t);var a={mutation:r()(i(),t._id?t._id:"",t.full_name,t.email,t.user_password,t.wallet_address,t.country_code,t.is_admin?"true":"false",t.is_sorter?"true":"false",t.is_collector?"true":"false",t.is_deliver?"true":"false")};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.salePostShopUser.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteUser(t,e){var a={mutation:r()(u(),t)};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.saleDeleteShopUser.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},117:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);function u(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteState(\n              state_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n          mutation{\n            salePostState( \n              state_id:"','", \n              state_name: "','",\n              country_code: "','",\n              lang_data: ',",\n            ){\n              status\n              message\n              success\n              data\n            }\n          }\n        "]);return i=function(){return t},t}function c(){var t=Object(s.a)(["\n        {\n          saleGetStates(page:",",pageSize:",', keyword:"','"){\n          status\n          message\n          success\n          data\n        }\n       }']);return c=function(){return t},t}e.a=class{static getStates(t=1,e=100,a="",s){console.log("calling getStates",t,e,a);var n={query:r()(c(),t,e,a)};o.a.doQuery(n).then(t=>{try{return s({status:1,data:JSON.parse(t.data.saleGetStates.data)})}catch(e){return s({status:0,message:"HTTPERROR"})}}).catch(t=>s({status:0,message:t}))}static postState(t,e){var a={mutation:r()(i(),t._id?t._id:"",t.state_name,t.country_code,t.lang_data)};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.salePostState.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteState(t,e){var a={mutation:r()(u(),t)};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.saleDeleteState.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},118:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);function u(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteCountry(\n              country_code:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n          mutation{\n            salePostCountry(       \n              country_id:"','", \n              country_code: "','",\n              country_name: "','",\n              phone_code: "','",\n              lang_data: ',",\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        "]);return i=function(){return t},t}function c(){var t=Object(s.a)(["\n        {\n          saleGetCountries(page:1,pageSize:15){\n          status\n          message\n          success\n          data\n        }\n       }"]);return c=function(){return t},t}function l(){var t=Object(s.a)(["\n        {\n          saleGetCountries(page:",", pageSize:",', keyword:"','"){\n          status\n          message\n          success\n          data\n        }\n       }']);return l=function(){return t},t}e.a=class{static getCountries(t,e){var a={query:r()(l(),t.page,t.pageSize,t.keyword)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetCountries.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static getCountryOptions(t){var e={query:r()(c())};o.a.doQuery(e).then(e=>{try{return t({status:1,data:JSON.parse(e.data.saleGetCountries.data)})}catch(a){return t({status:0,message:"HTTPERROR"})}}).catch(e=>t({status:0,message:e}))}static postCountry(t,e){var a={mutation:r()(i(),t._id?t._id:"",t.country_code,t.country_name,t.phone_code,t.lang_data)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostCountry.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteCountry(t,e){var a={mutation:r()(u(),t)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.getCountries.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},119:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);function u(){var t=Object(s.a)(['\n        mutation {\n          salePostShopSpecialDays(\n            shop_id:"','",\n            specialdays: ',"          \n            ) {\n            status\n            message\n            success\n            data\n          }\n        }    \n      "]);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n        {\n          saleGetShopSpecialDays(shop_id:"','") {\n            status\n            message\n            success\n            data\n          }\n       }']);return i=function(){return t},t}function c(){var t=Object(s.a)(['\n        mutation {\n          salePostShopAvailableWeekDays(\n            shop_id:"','",\n            weekdays: ',"\n          ) {\n            status\n            message\n            success\n            data\n          }\n        }    \n      "]);return c=function(){return t},t}function l(){var t=Object(s.a)(['\n        {\n          saleGetShopAvailableWeekdays(shop_id:"','") {\n            status\n            message\n            success\n            data\n          }\n       }']);return l=function(){return t},t}function d(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteShop(\n              shop_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return d=function(){return t},t}function h(){var t=Object(s.a)(['\n        mutation {\n          salePostShop(\n            shop_id:"','",\n            shop_lat: "','",\n            shop_lon: "','",\n            shop_logo: "','",\n            shop_user_id: "','",\n            shop_address: "','",\n            shop_city_id: "','",\n            shop_state_id: "','",\n            shop_identifier: "','",\n            shop_phone_number: "','",\n            hub_id: "','",\n            country_code: "','",\n            lang_data:',",\n          ) {\n            status\n            message\n            success\n            data\n          }\n        }    \n      "]);return h=function(){return t},t}function p(){var t=Object(s.a)(['\n        {\n          saleGetShop(shop_id: "','") {\n            status\n            message\n            success\n            data\n          }\n       }']);return p=function(){return t},t}function m(){var t=Object(s.a)(["\n        {\n          saleGetShops(page: ",", pageSize:",', lang_code: "en") {\n            status\n            message\n            success\n            data\n          }\n       }']);return m=function(){return t},t}e.a=class{static getShops(t,e,a){var s={query:r()(m(),t,e)};o.a.doQuery(s).then(t=>{console.log("response on shop ---\x3e",t);try{return a({status:1,data:JSON.parse(t.data.saleGetShops.data)})}catch(e){return a({status:0,message:"HTTPERROR"})}}).catch(t=>a({status:0,message:t}))}static getShop(t,e){var a={query:r()(p(),t)};o.a.doQuery(a).then(t=>{console.log("response on shop ---\x3e",t);try{return e({status:1,data:JSON.parse(t.data.saleGetShop.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postShop(t,e){console.log("data...",t);var a={mutation:r()(h(),t._id?t._id:"",t.shop_lat,t.shop_lon,t.shop_logo,t.shop_user_id,t.shop_address,t.shop_city_id,t.shop_state_id,t.shop_identifier,t.shop_phone_number,t.hub_id,t.country_code,t.lang_data)};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.salePostShop.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteShop(t,e){console.log("being deleted id ===> ",t);var a={mutation:r()(d(),t)};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.saleDeleteShop.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static getAvailableWeekdays(t,e){var a={query:r()(l(),t._id?t._id:"")};o.a.doQuery(a).then(t=>{console.log("response on shop ---\x3e",t);try{return e({status:1,data:JSON.parse(t.data.saleGetShopAvailableWeekdays.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postAvailableWeekdays(t,e){console.log("AvailableWeekdays data...",t);var a={mutation:r()(c(),t._id?t._id:"",t.weekdays?t.weekdays:[])};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.salePostShopAvailableWeekDays.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static getShopSpecialDays(t,e){var a={query:r()(i(),t._id?t._id:"")};o.a.doQuery(a).then(t=>{console.log("response on shop ---\x3e",t);try{return e({status:1,data:JSON.parse(t.data.saleGetShopSpecialDays.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postShopSpecialDays(t,e){console.log("ShopSpecialDays data...",t);var a={mutation:r()(u(),t._id?t._id:"",t.specialDays?t.specialDays:[])};o.a.doMutate(a).then(t=>{console.log("response....",t);try{return e({status:1,data:JSON.parse(t.data.salePostShopSpecialDays.data)})}catch(a){return console.log("e on mutate...",a),e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},130:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);function u(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteCity(\n              city_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n          mutation{\n            salePostCity(        \n              city_id:"','", \n              city_name: "','",\n              state_id: "','",\n              lang_data: ',",\n            ){\n              status\n              message\n              success\n              data\n            }\n          }\n        "]);return i=function(){return t},t}function c(){var t=Object(s.a)(['\n        {\n          saleGetCity(city_id:"','"){\n          status\n          message\n          success\n          data\n        }\n       }']);return c=function(){return t},t}function l(){var t=Object(s.a)(["\n        {\n          saleGetCities(page:",",pageSize:",',keyword:"','"){\n          status\n          message\n          success\n          data\n        }\n       }']);return l=function(){return t},t}e.a=class{static getCities(t,e,a,s){var n={query:r()(l(),t,e,a)};o.a.doQuery(n).then(t=>{try{return s({status:1,data:JSON.parse(t.data.saleGetCities.data)})}catch(e){return s({status:0,message:"HTTPERROR"})}}).catch(t=>s({status:0,message:t}))}static getCity(t,e){var a={query:r()(c(),t)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetCity.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postCity(t,e){var a={mutation:r()(i(),t._id?t._id:"",t.city_name,t.state_id,t.lang_data)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostCity.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteCity(t,e){var a={mutation:r()(u(),t)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleDeleteCity.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},286:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return H}));var s=a(1),n=a.n(s),r=a(60),o=a(59),u=a(65),i=(a(84),a(113)),c=a(143),l=a(114),d=a(262),h=a(142),p=a(175),m=a(108),g=a(309),_=(a(95),a(71),a(90),a(96),a(97),a(78)),v=a(74),y=a(66),b=a.n(y),f=a(94),S=a(117),O=a(119),E=a(130),C=a(118),N=a(104),T=a(70),R=a(77),P=a(79),I=a(73);class H extends s.Component{constructor(t){super(t),this.handleChangeLabelOver=t=>{this.setState({selectedOptionLabelOver:t})},this.getUsers=t=>{N.a.getUser(t,t=>{if(1===t.status){var e=t.data,a=[],s={label:e.full_name,value:e._id,id:e._id};a.push(s),this.setState({userOptions:a})}})},this.getCountries=()=>{C.a.getCountries({page:1,pageSize:1e3,keyword:""},t=>{if(1===t.status){var e=t.data.results,a=[];e.forEach(t=>{var e={label:t.country_code,value:t.country_code,id:t._id};a.push(e)}),console.log("countryOptions.....",a),this.setState({countryOptions:a})}})},this.getStates=()=>{S.a.getStates(1,10,"",t=>{if(1===t.status){var e=t.data.results,a=[];e.forEach(t=>{var e={label:t.state_name,value:t._id,id:t._id};a.push(e)}),this.setState({stateOptions:a})}})},this.getCities=t=>{E.a.getCity(t,t=>{if(1===t.status){var e=t.data,a=[],s={label:e.city_name,value:e._id,id:e._id};a.push(s),this.setState({cityOptions:a})}})},this.loadCountryOptions=(t,e)=>{C.a.getCountries({page:1,pageSize:1e3,keyword:t},t=>{if(1===t.status){var a=t.data.results,s=[];a.forEach(t=>{var e={label:t.country_code,value:t.country_code,id:t._id};s.push(e)}),e(s)}})},this.state={selectedOption:"",selectedOptionLabelOver:"",selectedOptionLabelTop:"",startDate:null,startDateLabelOver:null,startDateLabelTop:null,startDateTime:null,startDateRange:null,endDateRange:null,embeddedDate:b()(),tags:[],tagsLabelOver:[],tagsLabelTop:[],selectedShopId:null,operatorOptions:[],selectedItem:{},langs:[],editState:!1,langOptions:[],selectedLangIndex:0,userOptions:[],hubOptions:[],countryOptions:[],stateOptions:[],cityOptions:[],isSubmitting:!1}}componentDidMount(){console.log("this.props.match on shpo detail",this.props.match.params.id),this.setState({editState:!1}),this.setState({selectedShopId:this.props.match.params.id}),this.getStates(),this.getCountries(),setTimeout(()=>{this.props.match.params.id&&"0"!==this.props.match.params.id?O.a.getShop(this.props.match.params.id,t=>{console.log("product from gotton...",t.data),this.getHubs(t.data.hub_id),this.getUsers(t.data.shop_user_id),this.getCities(t.data.shop_city_id),this.setState({selectedItem:t.data}),this.setState({langOptions:Object(R.b)(t.data.langs,"shop_label")})}):Object(R.a)(t=>{this.setState({langOptions:t})})},1e3)}handleSubmit(t){t.stopPropagation(),t.preventDefault();var e=this.state.selectedItem;console.log("selectedItem on handle submit...",e),this.setState({isSubmitting:!0}),e.shop_user_id&&e.hub_id&&e.country_code&&e.shop_state_id&&e.shop_city_id&&this.addNewInstance()}getSelectedOption(t,e){console.log("value, type----\x3e",t,e);var a=[];"user"===e&&(a=this.state.userOptions),"city"===e&&(a=this.state.cityOptions),"state"===e&&(a=this.state.stateOptions),"hub"===e&&(a=this.state.hubOptions),"country"===e&&(a=this.state.countryOptions);var s=a.find(e=>e.value===t);return console.log("found----options",s,this.state.userOptions),s}getHubs(t){f.a.getHub(t,t=>{if(1===t.status){var e=t.data,a=[],s={label:e.hub_identifier,value:e._id,id:e._id};a.push(s),this.setState({hubOptions:a})}})}loadUserOptions(t,e){N.a.getUserOptions(t,t=>{if(1===t.status){var a=t.data.results;console.log("users on load useroptions-----\x3e>>> ",a);var s=[];a.forEach(t=>{var e={label:t.full_name,value:t._id,id:t._id};s.push(e)}),e(s)}})}loadHubOptions(t,e){f.a.getHubs({page:1,pageSize:10},t=>{if(1===t.status){var a=t.data.results,s=[];a.forEach(t=>{var e={label:t.hub_identifier,value:t._id,id:t._id};s.push(e)}),e(s)}})}loadStateOptions(t,e){S.a.getStates(1,10,t,t=>{if(1===t.status){console.log("responst on state options....",t);var a=t.data.results,s=[];a.forEach(t=>{var e={label:t.state_name,value:t._id,id:t._id};s.push(e)}),e(s)}})}loadCityOptions(t,e){E.a.getCities(1,10,t,t=>{if(1===t.status){console.log("responst on huboption....",t);var a=t.data.results,s=[];a.forEach(t=>{var e={label:t.city_name,value:t._id,id:t._id};s.push(e)}),e(s)}})}loadCountryOptions(t,e){C.a.getCountries({page:1,pageSize:1e3},t=>{if(1===t.status){console.log("responst on huboption....",t);var a=t.data.results,s=[];a.forEach(t=>{var e={label:t.country_name,value:t.country_code,id:t.country_code};s.push(e)}),e(s)}})}initializeSelectedItem(){var t=this.state.selectedItem;t.shop_identifier="",t.shop_user_id="",t.hub_id="",t.country_code="",t.shop_phone_number="",t.shop_state_id="",t.shop_city_id="",t.shop_address="",t.shop_lat="",t.shop_lon="",this.setState({selectedItem:t})}componentWillReceiveProps(t){"0"===t.match.params.id&&(console.log("renewed...."),this.initializeSelectedItem())}onChangeProperty(t,e){console.log("value,type",t,e);var a=this.state.selectedItem;if("shop_logo"===e){this.setState({editState:!0});var s=new FileReader;s.readAsDataURL(t),s.onloadend=()=>{a[e]=s.result,console.log("value on shop_logo---\x3e>>",s.result),this.setState({selectedItem:a})}}else a[e]=t,this.setState({selectedItem:a})}onChangeName(t){console.log("e,value on changename----\x3e",t);var e=this.state.selectedLangIndex;this.state.langOptions[e].title=t,this.setState({langOptions:[...this.state.langOptions]})}addNewInstance(){var t=this.state,e=t.selectedItem,a=t.editState;if(void 0!==e.shop_identifier&&0!==e.shop_identifier.length&&void 0!==e.shop_city_id&&0!==e.shop_city_id.length&&void 0!==e.hub_id&&0!==e.hub_id.length){console.log("edit_state..... ",a),a||(e.shop_logo="");var s=Object(R.c)(this.state.langOptions);this.state.selectedItem.lang_data=s,O.a.postShop(this.state.selectedItem,(t,e)=>{this.props.history.push("/app/shops/shop-list")})}else T.a.error("Error message","Please confirm valid data!",3e3,()=>{},null,"error")}render(){var t=this.state,e=t.selectedShopId,a=t.selectedItem,y=t.editState,b=t.isSubmitting;return n.a.createElement(s.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(o.a,{xxs:"12"},n.a.createElement(u.a,{heading:"0"===e?"New Shop":"Shop Detail",match:this.props.match}),n.a.createElement(o.b,{className:"mb-5"}))),n.a.createElement(c.a,{onSubmit:this.handleSubmit.bind(this)},n.a.createElement(i.a,{className:"mb-4"},n.a.createElement(o.a,{xxs:"12",md:"12"},n.a.createElement(l.a,null,n.a.createElement(d.a,{className:"d-flex"},n.a.createElement("div",{className:"flex-1"},n.a.createElement(h.a,{className:"mt-4"},"Identifier"),n.a.createElement(p.a,{required:!0,onChange:t=>{this.onChangeProperty(t.target.value,"shop_identifier")},value:a.shop_identifier}),n.a.createElement(h.a,{className:"mt-4"},"User"),n.a.createElement(_.a,{required:!0,components:{Input:v.a},className:"react-select",name:"form-field-name",loadOptions:this.loadUserOptions,defaultOptions:!0,value:this.getSelectedOption(a.shop_user_id,"user"),onChange:t=>{this.onChangeProperty(t.value,"shop_user_id")},onInputChange:this.handleInputChange}),b&&!a.shop_user_id&&n.a.createElement("div",{className:"invalid-feedback d-block"},"Shop user required!"),n.a.createElement(h.a,{className:"mt-4"},"Hub"),n.a.createElement(_.a,{required:!0,components:{Input:v.a},className:"react-select",name:"form-field-name",loadOptions:this.loadHubOptions,defaultOptions:!0,value:this.getSelectedOption(a.hub_id,"hub"),onChange:t=>{this.onChangeProperty(t.value,"hub_id")},onInputChange:this.handleInputChange}),b&&!a.hub_id&&n.a.createElement("div",{className:"invalid-feedback d-block"},"Hub required!"),n.a.createElement(h.a,{className:"mt-4"},"Country Code"),n.a.createElement(_.a,{required:!0,components:{Input:v.a},className:"react-select",name:"form-field-name",loadOptions:this.loadCountryOptions,defaultOptions:!0,value:this.getSelectedOption(a.country_code,"country"),onChange:t=>{this.onChangeProperty(t.value,"country_code")},onInputChange:this.handleInputChange}),b&&!a.hub_id&&n.a.createElement("div",{className:"invalid-feedback d-block"},"Country required!"),n.a.createElement(h.a,{className:"mt-4"},"Phone Number"),n.a.createElement(p.a,{required:!0,onChange:t=>{this.onChangeProperty(t.target.value,"shop_phone_number")},value:a.shop_phone_number}),n.a.createElement(h.a,{className:"mt-4"},"State"),n.a.createElement(_.a,{required:!0,components:{Input:v.a},className:"react-select",name:"form-field-name",loadOptions:this.loadStateOptions,defaultOptions:!0,value:this.getSelectedOption(a.shop_state_id,"state"),onChange:t=>{this.onChangeProperty(t.value,"shop_state_id")},onInputChange:this.handleInputChange}),b&&!a.shop_state_id&&n.a.createElement("div",{className:"invalid-feedback d-block"},"State required!"),n.a.createElement(h.a,{className:"mt-4"},"City"),n.a.createElement(_.a,{required:!0,components:{Input:v.a},className:"react-select",name:"form-field-name",loadOptions:this.loadCityOptions,defaultOptions:!0,value:this.getSelectedOption(a.shop_city_id,"city"),onChange:t=>{this.onChangeProperty(t.value,"shop_city_id")},onInputChange:this.handleInputChange}),b&&!a.shop_state_id&&n.a.createElement("div",{className:"invalid-feedback d-block"},"City required!"),n.a.createElement(h.a,{className:"mt-4"},"Address"),n.a.createElement(p.a,{required:!0,onChange:t=>{this.onChangeProperty(t.target.value,"shop_address")},value:a.shop_address}),n.a.createElement("div",{className:"d-flex"},n.a.createElement(m.a,{color:"primary",className:"mt-4 mr-4",type:"submit"},n.a.createElement(r.a,{id:"forms.submit"})),n.a.createElement(m.a,{color:"primary",className:"mt-4",onClick:()=>{this.props.history.push("/app/shops/shop-list")}},"Close"))),n.a.createElement("div",{className:"flex-1"},n.a.createElement(h.a,{className:"mt-4"},"Image"),n.a.createElement(g.a,{type:"file",id:"exampleCustomFileBrowser1",name:"customFile",onChange:t=>{this.onChangeProperty(t.target.files[0],"shop_logo")}}),a._id&&a.shop_logo&&!y&&n.a.createElement("img",{className:"shop-image",src:I.a.BACKEND_API_URL+a.shop_logo}),y&&n.a.createElement("img",{className:"shop-image",src:a.shop_logo}),n.a.createElement("div",null,n.a.createElement(h.a,{className:"mt-4"},"Latitude"),n.a.createElement(p.a,{required:!0,onChange:t=>{this.onChangeProperty(t.target.value,"shop_lat")},value:a.shop_lat})),n.a.createElement(h.a,{className:"mt-4"},"Longitude"),n.a.createElement(p.a,{required:!0,onChange:t=>{this.onChangeProperty(t.target.value,"shop_lon")},value:a.shop_lon}),n.a.createElement(P.a,{langOptions:this.state.langOptions,onChangeName:this.onChangeName.bind(this),selectedLangIndex:this.state.selectedLangIndex,onChangeTab:t=>{this.setState({selectedLangIndex:t})}}))))))))}}},59:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return u}));var s=a(1),n=a.n(s),r=a(112),o=t=>n.a.createElement(r.a,Object.assign({},t,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),u=t=>n.a.createElement("div",{className:"separator ".concat(t.className)})},61:function(t,e,a){"use strict";var s=a(120),n=a(73).a.BACKEND_API_URL+"/graphql";e.a=class{static doQuery(t){return new s.a({uri:n,headers:{Authorization:"(H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/"}}).query(t).then(t=>t).catch(t=>t.graphQLErrors?t.graphQLErrors:"HTT_ERROR")}static doMutate(t){return new s.a({uri:n,headers:{Authorization:"(H+KbPeShVmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%D*G-KaPdSgUkXp2s5v8y/"}}).mutate(t).then(t=>t).catch(t=>JSON.stringify(t).indexOf("Invalid nonce")>-1?t.graphQLErrors[0].message:t.graphQLErrors?t.graphQLErrors:"NETWORK_ERROR")}}},65:function(t,e,a){"use strict";var s=a(1),n=a.n(s),r=a(257),o=a(258),u=a(62),i=a(60),c=t=>n.a.createElement(i.a,{id:"menu.".concat(t)}),l=(t,e,a)=>0===a?"":t.split(e)[0]+e,d=({match:t})=>{var e=t.path.substr(1),a=e.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter(t=>-1===t.indexOf(":"))),n.a.createElement(s.Fragment,null,n.a.createElement(r.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"},a.map((t,s)=>n.a.createElement(o.a,{key:s,active:a.length===s+1},a.length!==s+1?n.a.createElement(u.b,{to:"/"+l(e,t,s)},c(t)):c(t)))))};e.a=({heading:t,match:e})=>n.a.createElement(s.Fragment,null,t&&n.a.createElement("h1",null,n.a.createElement(i.a,{id:t})),n.a.createElement(d,{match:e}))},70:function(t,e,a){"use strict";var s=a(85),n=(a(81),a(82));a.d(e,"a",(function(){return n.a}));s.a},73:function(t,e,a){"use strict";e.a=new class{constructor(){this.config={},this.configReady=!1,this.COVID_API_URL="https://api.testenv.sharetoken.io/covid",this.AUTH_API_URL="https://api.testenv.sharetoken.io/auth",this.BACKEND_API_URL="https://api.testenv.sharetoken.io"}}},74:function(t,e,a){"use strict";var s=a(1),n=a.n(s),r=a(87);e.a=t=>{var e=Object.assign({},t);return delete e.autoCorrect,delete e.autoCapitalize,n.a.createElement(r.z.Input,e)}},77:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o}));var s=a(89),n=t=>{var e="[";return t.forEach(t=>{var a="{";for(var s in t)a+="".concat(s,':"').concat(t[s],'",');var n=a.slice(0,-1)+"}";e+=n+","}),e.slice(0,-1)+"]"},r=(t,e)=>{var a=[];return t.forEach(t=>{var s={lang_code:t.lang_code,title:t[e]};a.push(s)}),a},o=t=>{var e=[];s.a.getLanguages(a=>{1===a.status&&a.data.langs.forEach(a=>{var s={lang_code:a.lang_code,title:""};e.push(s),t(e)})})}},79:function(t,e,a){"use strict";var s=a(1),n=a.n(s),r=a(142),o=a(175),u=a(121),i=(a(84),({langOptions:t,onChangeName:e,selectedLangIndex:a,onChangeTab:s})=>{var i;return n.a.createElement("div",{className:"language-cover"},n.a.createElement(r.a,null,"Languages"),n.a.createElement(u.c,{selectedIndex:a,onSelect:t=>{s(t)}},n.a.createElement(u.b,null,t.map((t,e)=>n.a.createElement(u.a,{key:e},t.lang_code)))),n.a.createElement(o.a,{onChange:t=>{e(t.target.value)},value:null===(i=t[a])||void 0===i?void 0:i.title}))});e.a=i},89:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);a(66);function u(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteShopLang(\n              lang_code:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n          mutation{\n            salePostShopLang(\n              lang_code:"','",\n              lang_name: "','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return i=function(){return t},t}function c(){var t=Object(s.a)(["\n        {\n          saleGetShopLangs {\n          status\n          message\n          success\n          data\n        }\n       }"]);return c=function(){return t},t}e.a=class{static getLanguages(t){var e={query:r()(c())};o.a.doQuery(e).then(e=>{try{return t({status:1,data:JSON.parse(e.data.saleGetShopLangs.data)})}catch(a){return t({status:0,message:"HTTPERROR"})}}).catch(e=>t({status:0,message:e}))}static postLanguage(t,e){var a={mutation:r()(i(),t.lang_code?t.lang_code:"",t.lang_name)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostShopLang.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteLanguage(t,e){var a={mutation:r()(u(),t)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleDeleteShopLang.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}},94:function(t,e,a){"use strict";var s=a(64),n=a(63),r=a.n(n),o=a(61);a(66);function u(){var t=Object(s.a)(['\n        mutation{\n          salePostHubTimezone(\n            hub_id:"','",\n            hub_timezone:"','" \n          ) {\n            status\n            message\n            success\n            data\n          }\n        }\n      ']);return u=function(){return t},t}function i(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteHubTiming(\n              hub_timing_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return i=function(){return t},t}function c(){var t=Object(s.a)(['\n        mutation{\n          salePostHubTiming(\n            hub_id:"','",\n            hub_timing_id:"','",\n            order_place_cut_time: "','",\n            order_confirm_cut_time: "','",\n            pickup_start_time: "','",\n            pickup_end_time: "','",   \n            delivery_start_time:"','",\n            delivery_end_time: "','"  \n          ) {\n            status\n            message\n            success\n            data\n          }\n        }\n      ']);return c=function(){return t},t}function l(){var t=Object(s.a)(['\n        {\n          saleGetHubTimings(hub_id:"','") {\n          status\n          message\n          success\n          data\n        }\n       }']);return l=function(){return t},t}function d(){var t=Object(s.a)(['\n          mutation{\n            saleDeleteShopHub(\n              hub_id:"','"\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return d=function(){return t},t}function h(){var t=Object(s.a)(['\n          mutation{\n            salePostShopHub(\n              hub_id:"','",\n              hub_lat: "','",\n              hub_lon: "','",\n              hub_identifier:"','",\n              hub_operator_id:"','",\n              hub_address:"','",\n              country_code:"','",\n              hub_radius:',',\n              state_id:"','",\n              city_id:"','",\n              lang_data: [\n                  {\n                    lang_code: "en",\n                    title: "Hub2",\n                    description: ""\n                  },\n                  {\n                    lang_code: "zh",\n                    title: "\u96c6\u7ebf\u56682",\n                    description: ""\n                  }\n                ]\n            ) {\n              status\n              message\n              success\n              data\n            }\n          }\n        ']);return h=function(){return t},t}function p(){var t=Object(s.a)(['\n      {\n        saleGetShopHub(hub_id: "','", lang_code: "en") {\n          status\n          message\n          success\n          data\n        }\n       }']);return p=function(){return t},t}function m(){var t=Object(s.a)(["\n        {\n          saleGetShopHubs(page: ",", pageSize: ",") {\n          status\n          message\n          success\n          data\n        }\n       }"]);return m=function(){return t},t}e.a=class{static getHubs(t,e){var a={query:r()(m(),t.page,t.pageSize)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetShopHubs.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static getHub(t,e){var a={query:r()(p(),t)};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetShopHub.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postHub(t,e){var a={mutation:r()(h(),t._id?t._id:"",t.hub_lat,t.hub_lon,t.hub_identifier,t.hub_operator_id,t.hub_address,t.country_code,t.hub_radius,t.state_id,t.city_id)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostShopHub.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteHub(t,e){var a={mutation:r()(d(),t)};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleDeleteShopHub.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static getHubTimings(t,e){var a={query:r()(l(),t._id?t._id:"")};o.a.doQuery(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleGetHubTimings.data)})}catch(a){return e({status:0,message:"HTTPERROR"})}}).catch(t=>e({status:0,message:t}))}static postHubTimings(t,e){var a={mutation:r()(c(),t._id?t._id:"",t.hubTimingId?t.hubTimingId:"",t.orderPlaceCutTime?t.orderPlaceCutTime:"",t.orderConfirmCutTime?t.orderConfirmCutTime:"",t.pickupStartTime?t.pickupStartTime:"",t.pickupEndTime?t.pickupEndTime:"",t.deliveryStartTime?t.deliveryStartTime:"",t.deliveryEndTime?t.deliveryEndTime:"")};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostHubTiming.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static deleteHubTiming(t,e){var a={mutation:r()(i(),t.hub_timing_id?t.hub_timing_id:"")};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.saleDeleteHubTiming.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}static setHubTimeZone(t,e){var a={mutation:r()(u(),t._id?t._id:"",t.hubTimezone?t.hubTimezone:"")};o.a.doMutate(a).then(t=>{try{return e({status:1,data:JSON.parse(t.data.salePostHubTimezone.data)})}catch(a){return e({status:0,message:a.Message})}}).catch(t=>e({status:0,message:t}))}}}}]);
//# sourceMappingURL=24.7bdf673b.chunk.js.map