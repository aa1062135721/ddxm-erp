(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f61bcce"],{"0290":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrap"},[e._m(0),r("div",{staticClass:"ms-login"},[r("div",{staticStyle:{display:"flex"}},[r("div",{staticClass:"ms-title ",on:{click:e.erp}},[e._v("erp系统")]),r("div",{staticClass:"ms-title action",on:{click:e.shop}},[e._v("shop系统")]),r("div",{staticClass:"ms-title"},[e._v("门店系统")])]),1==e.flag?r("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.ErpParam,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{placeholder:"username",clearable:""},model:{value:e.ErpParam.account,callback:function(t){e.$set(e.ErpParam,"account",t)},expression:"ErpParam.account"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"password",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()}},model:{value:e.ErpParam.password,callback:function(t){e.$set(e.ErpParam,"password",t)},expression:"ErpParam.password"}})],1),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("登录")])],1)],1):e._e(),2==e.flag?r("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.ShopParam,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"account"}},[r("el-input",{attrs:{placeholder:"username",clearable:""},model:{value:e.ShopParam.account,callback:function(t){e.$set(e.ShopParam,"account",t)},expression:"ShopParam.account"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"password",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitShop()}},model:{value:e.ShopParam.password,callback:function(t){e.$set(e.ShopParam,"password",t)},expression:"ShopParam.password"}})],1),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitShop()}}},[e._v("登录")])],1)],1):e._e()],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%","text-align":"center","padding-top":"120px"}},[o("img",{attrs:{src:r("128d")}})])}],n=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=r("2f62"),c=r("c24f3");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={data:function(){return{flag:2,ErpParam:{account:"admin",password:"123456"},ShopParam:{account:"admin1",password:"123456"},StoresParam:{account:"admin2",password:"123456"},rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:u({},Object(s["c"])(["setUserInfo"]),{submitForm:function(){var e=this;this.$refs.login.validate((function(t){if(!t)return e.$message.error("请输入账号和密码"),!1;var r=u({},e.ErpParam,{username:e.ErpParam.account});Object(c["a"])(r).then((function(t){200===t.code&&(e.$message.success("登录成功"),e.setUserInfo(t.data),e.$router.push("/"))})).catch((function(e){console.log(e)}))}))},submitShop:function(){var e=this;this.$refs.login.validate((function(t){if(!t)return e.$message.error("请输入账号和密码"),!1;var r=u({},e.ShopParam,{username:e.ShopParam.account});Object(c["c"])(r).then((function(t){200===t.code&&(e.$message.success("登录成功"),e.setUserInfo(t.data),e.$router.push("/"))})).catch((function(e){console.log(e)}))}))},erp:function(){window.location.href="http://testadmin2.ddxm661.com/erp/#/login",console.log(123)},shop:function(){window.location.href="http://ddxm661.com:8088/shop/#/login",console.log(456)}})},p=l,m=(r("9ac8"),r("2877")),d=Object(m["a"])(p,o,a,!1,null,"0fb4104e",null);t["default"]=d.exports},"128d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACTUExURQAAACMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFSMYFf///0K92JGMivHx8FpSUDEmJMjFxUxDQeTi4j81MtbU03Zvba2op2hgXrq3tp+amYN9eyUiITNrdytBRkCzzCk3OjqUpz6owDR1gyctLTyeszZ/jy9WXjiJmy1MUjFgajwbbFIAAAAQdFJOUwAw3yCAEGDvv0DPUJ9wr48ff9H6AAAMsElEQVR42u1cV2ObyhIWRXTQyvQOTpw4/fz/X3dnZhdYSYDlc0C+D9mH2DKC/XZ6I4fDf1uaH6iMlhP42uED19F32MVyjONHQdFNdrNM/UPguCOU58+wnodPqvt4sgQCyK/fL0+0Xn/+EoCCBxNH4VL7/adAwtfLz++cOMojsRjEoudvTzfrE1HHfCCrDDr/59enmfX6mS4aj8Xy6Wl+vT4/Eg1hef69gOXHoFbG47D8WMDyMqo4e4AUK+Yalqdvkv3b3Tsc17E8/ZGdw972xsJd/vn2Cde3GUxcl5K4xx/evlj0S0/0/ee1mYE/Fn15Pp8rvL6ruVFuHOMf2QS/fgEo9ZmvDMVmT0Y5t27684VWJ915WHmCbuphTOJr5NRPxrL8PK1uV0Zpc1jYl4EujFWRhOWcImnU456adLtGL1DJUKKYX9X3wWKzNTCfWSxjIYmhpT2SMN+FwCQXPMrG67vIsLFAGB7UfGf1hbxIX7B3AKPOY/lFWL6yQsZyDqVvWDvE3/NY/uES84t1F2BqtitpZiXmy1eh119YfgEmSvYkjbIG5emJJefL1e5JGm8Gi+SWuF6nYdgOOlVJ39zYex9nCPP16RIMN3NJKxiVSV/d1tb4y26AuwIA04gL9S2abc2ws2RfeOD7h/WSaUkFmmb8i7q3i5yyJsgjkxKFpOL+KLu1NluKsL7kBUTWFoNixwCi5Nfa0UP1yfYivBJUQTpQEF9QWnp+TXbfaYr8M/flEk8oX4AsDdfmeLp2ZXSKTfnkL4F5gaA3njEsFw78jPQ6bQYmWHLWmAx0NxHMqE+SC3c2A2Mumbzvsu7k2QKYM8I87uiXGCX+9Nvor6Nqnk1kDt0dRYZk5sc1GQRtiiuv2W1ohL0lMF8ZK9P8NvINr8CkG8YRzlKEB2Cutq0vLPC4NrQ0i+nSLZhzmBThDRZin7af/DIG0cwLBxOV5zdWs5nZW4h+f5M25WR73wKDHtPfL8Nm7A9lbi3KSfMWmHozdVoAgzHEN0ivO1ZEb4FJN3PcC5kk6tML/ozfxEKhhbUrGPQI4Jz68x1rfzDPr5gwJd25ruK4Cet8FYyzn83j0d7vr7+fpc9F1S6DYfvZvKWVVOX/Dxj0BnX0QWCyrpshTxjtBcZcwQIyks9yq4/2AWMtY4mHjd6izmZuewVMepUWXMF5pJ0RgUu/eL0YND3fDMxpcbP6thRzzcd89E3Bro5yCHWjVXULt/Xa7uo+F2XWWV6WW8YzytI2+Uxpcx50vF2Cu7BHIwcI68RJtjIzi+rUzpTDl9dW+a2+Jr5jM+eNtVXmPy80UlAV3QFms8bTrHeSQ4XqbTCb9Z28dS5d9i3m13a9FXudSyv+aXsuzXZUyvN7SLNl7fW213TdK3iDNJtWpW9EuJpJ05bXtv1tY95h30uajbum6oJfmupEaxKzcT/ZXlHs8xsx1vad9tO8k5TMcLG/jRk7TupcKLPYfNuRSeShzFmPfVWfmtGkXcadDLZUAp/rko5rp0EwCc18et8+DouMZqWQ+CAswxjlMphrRu07VikGTG8z+1mv4Ow8qjeM3i7UYS5M32n/UVxXHetCN4WzKJ3SFusxc7jyuHbchGHYpi38W8WSxKgPG3s9GM4bQaZ9eORSTuoiEv8DZto1w7smkGrp9uHjlmbbOl+2rRz+rr/r71qy/IHlaR+OQrOPYwx+YThsQw8sWsGFRXFP1n24DV1/n008WpR3QXbShNmUJmv6VQlr9D+GKqckCuKdzLBmTLCPznvH7vkdzLWwGg+52cnQBoSQMMV9GKZpHfbx0HekqAL8ZUEVeWVAbBLUI5HXsQOm6jTIEIM7te6njc+SFAJIk4fdogaGmUoRpnJMlfeUtyL2Kuf1K5si06IKwz5hpsVUz0L8w7ierWIlpX3PW0cB3lGKNkUZxzFkZ56OCAlCCisfaq4mYhlG8zJmA5YsvczpOqpJJ201fErvzr6PRmBSiiYn9x0QHf9Y9sMheccWaKE4OIk2ZNuOVJ4IWZHWBT2ro2dlLImxfB+lUX9XJ4G/W4YoukRKjhBDxs+WtGk2DM0AGHXMofgsTyx1+XucakTUWZ9GVxMAFhxbX3+90JCCyQYPWXbU4wuZak7pW8mSfiqNh8MQXHsum6k6gWwSSXB3nQyXGfN4groSD2rjaJlUhM84GOemYgXEZn1M09pdJqp8IadpQYImekB50l4NkqCumsC0Yq2Ib8ilDmRNDJEtG0rgSVdxNuRhWLdhBc8M84j4EoKYN8guEJ82AWLixNPJ5HPlsWih5hWoNS8aOyDpcC2KVwrnusTymgofoDchl/+sJanOLvLGHqRWTllK+FIInEpFJYtUIAnP9Cyqo7dpRUU1vlW5MlZjSFyAY7dlTW/B4Pwqn51HyY1CfEsnBlsCBy0KKaErQ94JbBOQb/wWF+1SGKsEDGOfCVNp8Ceu8OkIZ83TLiPVLnBKJ64iPkvbD63GouqkEkTUgXphnoKrLzhlw74pAUxGPGtFnpkIQ5HH6DZch/cwixWhOU2lINy+gm2juph0pmtRW8oOuA9CQo+/KDU2Y60alKk95w3nFOyfRZIwqt5QMl1tQ+kAOONgqosSx2DLorqv22ZK/yMU+TqrmpKn2g0wC47QZsINNLxSgliiLo6x3U2lyAb8W8LC9Z4CHqUnMOMbFsA42B0kA5LXmB8Rckjwi3jqrsen17nQQzBDBYMdW+EM6Nsl1dNL1Pik4syu7pqqAXmPau4OMsk8TKOSrWzV4hiNYMqwr0KkKWCHWFw1CUskqIzVEpCkhh5dDM2Y1RdjbZRQshgp5PBJjKepx4nwqhHqFo0vmjFiTk80QVMCHyqy/R2nS4SvPCFQkHSMSCIyNN3kFdbdQThadHxWMdA6pUcUpZDBDC2h5fGyEUBMCUwa0hBjz7+PHrRHIEiOMJuqJoMErIKx+btbLZK+PUcN0Dgcq74J4zaDq3iHVtG2OZi4zRPaoIZvlk0lKNORsOJ1vCTOgU6kO98BRkUilAV+OUyqguxp0oiqWUxSkZPopRH4RBYcBJgWUNBW1fReUUyCEdK/seiq1mRlpigjWwlrFGwJIJlzbvKRXz2OgBf86SkdGGkXhRmF6hrvO3X52FMe7EnFTVNDYVAipC5GLZ/e4UvXXom1UTxD4krEIKis8d0BuCURwyAh9+WwHcZrGfoYFd18WiT46mRO7rjACKSNRa24RMNSi5CnbtBSjrQDdKsiAyTIC2R5yOAQSd1CZFaKczMcDgQVJ+qnpKs+jSY0bQ10imvQv8EAFH2YTEPL8eUbalKXVVmV32gsoUa5mGO4KDgXXS7VEi0Us4pcvHAKJQYWxIh2DEdSeZr6LI9VG+v9tnB8zaQ9t+R8UqmrP7I7rUuhC1yyOtK3nMLCMh3AV8Od5i0aCPbeKFjr/CYKcpuBlvXYuZ5e2cSzpg32bkiCUwod2kRut6AGoIqh/ijeOEkjDHo15FUrCx07BYwnngulpIng0zIe/rYhTiqm/dTUguQgxnCnB7fFTHPgLPrrQCrZo5tuRHCd181dlVme/+EXx776ULaD3DaZSqsexJR0NF4y59E6JIo4NsEzLQihbLpXpSDB5hlwHGfvqMxCZkzZ7MGnuy2byqwmJPU002PpJ8uhTHXE7+q+cvQh76dNh+yW76ZJhT43GBIM03P/RSnC1tY+L5lOXRfnub1k+7phf3yR5e/aqyD/3uaPuEHRNniYLKpkjlE7jr4/PMt1eRkMf5zgDwrqi32yLEt3Ubt87vVsU7VOGq90ucPDFEZ3CphH/x0tF43CDEwijo5p+phPwe86FoYsMzDxM4A5WWg8TMt1XZ9h31sXpSZPDzBnVEwH00UD77UZjpGpvNKlmOo7ZgB8rOPh/QfHOZ50HBuEh1s+YHM03v/Ca+CzPY3siQYbnsR/SeEiWFOBLT06T4AIdIseYpt4ILhg3T+p4ehwcjg42FPXdeA+z8MNwSw7R9cLhs8awSAIqu8O4YB3Ovqqg+ewfQBzZLqJTwRKBhxUYNrG/a0xYIJ1woNrJnoDuA+bsAAO9reA9vD5dLL4fK/Bqwi6avqj52eqz7vODiAFQjGX2AoPPAQeTXg49/+nJ4Z6MEwFDn5y7CMSAMVPgVPa6kHTHHqe5TtE6UAX+IfhC9vkYqqe7IPvEBE9C56IRzwGpnYIAptYeW+B8QR8NS1+Fp3Ex/XRKyrMN0zwhsjBA5dBk6fK3vh/mOiWCKc1BEREtRmIyhEEm1I2kqP7XxXBWwzcC3+xfIosePChWxb+pH84pXlF15uGLyxfTHHgVzTgNF3WUCm4e8SKtLlhu045XpoxWxoEUf5Lf/J/fMhJ0/d3Nw8AAAAASUVORK5CYII="},"2fb5":function(e,t,r){},"9ac8":function(e,t,r){"use strict";var o=r("2fb5"),a=r.n(o);a.a},b775:function(e,t,r){"use strict";var o,a=r("bc3a"),n=r.n(a),s=r("5c96"),c=r("4360"),i=n.a.create({baseURL:"http://ddxm661.com:8088",timeout:5e3});i.interceptors.request.use((function(e){return o=s["Loading"].service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),e}),(function(e){return console.log(e),Promise.reject()})),i.interceptors.response.use((function(e){if(o.close(),200===e.status)return-1==e.data.code&&(c["a"].commit("setUserInfo",{}),window.localStorage.removeItem("router"),window.location.href="#/login",setTimeout((function(){window.location.reload()}),150)),200!=e.data.code&&(s["Message"].closeAll(),Object(s["Message"])({message:e.data.msg,type:"error"})),e.data;Promise.reject()}),(function(e){return o.close(),console.log(e),Promise.reject()})),t["a"]=i},c24f3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return s}));var o=r("b775"),a=function(e){return Object(o["a"])({baseURL:"/api",url:"/system/login/checkLogin",method:"post",data:e})},n=function(e){return Object(o["a"])({url:"/system/login/checkLogin",method:"post",data:e})},s=function(e){return Object(o["a"])({url:"/system/login/outLogin",method:"post",data:e})}}}]);