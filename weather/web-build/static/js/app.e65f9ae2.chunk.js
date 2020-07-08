(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var a=n(2),r=n.n(a),i=n(4),o=n.n(i),c=n(9),l=n.n(c),s=n(11),u=n.n(s),d=n(12),f=n.n(d),h=n(3),m=n.n(h),p=n(1),g=n.n(p),w=n(152),y=n(7),v=n(20),D=n(14),b=n(68);function x(){return g.a.createElement(D.a,{style:C.container},g.a.createElement(b.a,{barStyle:"dark-content"}),g.a.createElement(v.a,{style:C.text},"Getting the weather"))}var C=y.a.create({container:{flex:1,justifyContent:"flex-end",paddingHorizontal:30,paddingVertical:100,backgroundColor:"#FDF6AA"},text:{color:"#2c2c2c",fontSize:30}}),E=n(100),F=n(146),z=n.n(F),A=n(10),k=n.n(A),N=n(318),S=n(317),R={Thunderstorm:{iconName:"weather-lightning",gradient:["#373B44","#4286f4"],title:"Thunderstorm",subtitle:"stay Home"},Drizzle:{iconName:"weather-hail",gradient:["#89F7FE","#66A6FF"],title:"Drizzle",subtitle:"Is like rain"},Rain:{iconName:"weather-rainy",gradient:["#00C6FB","#005BEA"],title:"Raining",subtitle:"For more info look outside"},Snow:{iconName:"weather-snowy",gradient:["#7DE2FC","#B9B6E5"],title:"Cold",subtitle:"Do you want to build a snowman?"},Atmosphere:{iconName:"weather-hail",gradient:["#89F7FE","#66A6FF"]},Clear:{iconName:"weather-sunny",gradient:["#FF7300","#FEF253"],title:"Sunny",subtitle:"Must go to the outside"},Clouds:{iconName:"weather-cloudy",gradient:["#D7D2CC","#304352"],title:"Clouds",subtitle:"boring"},Mist:{iconName:"weather-hail",gradient:["#4DA0B0","#D39D38"],title:"Mist!",subtitle:"misses miss mist"},Dust:{iconName:"weather-hail",gradient:["#4DA0B0","#D39D38"],title:"Dusty",subtitle:"I hate dust"},Haze:{iconName:"weather-hail",gradient:["#4DA0B0","#D39D38"],title:"Haze",subtitle:"Just don't go outside."}};function B(e){var t=e.temp,n=e.condition;return g.a.createElement(N.a,{colors:R[n].gradient,style:H.container},g.a.createElement(b.a,{barStyle:"light-content"}),g.a.createElement(D.a,{style:H.halfContainer},g.a.createElement(S.a,{size:96,name:R[n].iconName,color:"white"}),g.a.createElement(v.a,{style:H.temp},t,"\xb0")),g.a.createElement(D.a,{style:H.textContainer},g.a.createElement(v.a,{style:H.title},R[n].title),g.a.createElement(v.a,{style:H.subtitle},R[n].subtitle)))}B.propTypes={temp:k.a.number.isRequired,condition:k.a.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"]).isRequired};var H=y.a.create({container:{flex:1},temp:{fontSize:42,color:"white"},halfContainer:{flex:1,justifyContent:"center",alignItems:"center"},title:{color:"white",fontSize:44,fontWeight:"300",marginBottom:10,textAlign:"left"},subtitle:{fontWeight:"600",color:"white",fontSize:24,textAlign:"left"},textContainer:{alignItems:"flex-start",paddingHorizontal:40,justifyContent:"center",flex:1}});function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f()(this,n)}}var M="5fb8d4608850648732a2135e4544a6f3",W=function(e){u()(n,e);var t=L(n);function n(){var e;o()(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0},e.getWeather=function(t,n){var a,i,o,c;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,r.a.awrap(z.a.get("http://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+n+"&APPID="+M+"&units=metric"));case 2:a=l.sent,i=a.data,o=i.main.temp,c=i.weather,e.setState({isLoading:!1,condition:c[0].main,temp:o});case 7:case"end":return l.stop()}}),null,null,null,Promise)},e.getLocation=function(){var t,n,a,i;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,r.a.awrap(E.b());case 3:return o.sent,o.next=6,r.a.awrap(E.a());case 6:t=o.sent,n=t.coords,a=n.latitude,i=n.longitude,e.getWeather(a,i),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),w.a.alert("Can't find you");case 16:case"end":return o.stop()}}),null,null,[[0,13]],Promise)},e}return l()(n,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.temp,a=e.condition;return t?g.a.createElement(x,null):g.a.createElement(B,{temp:Math.round(n),condition:a})}}]),n}(g.a.Component)},160:function(e,t,n){n(161),e.exports=n(308)},161:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/weather_app_2020/expo-service-worker.js",{scope:"/weather_app_2020/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[160,1,2]]]);
//# sourceMappingURL=app.e65f9ae2.chunk.js.map