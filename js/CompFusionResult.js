var testComp  = Vue.component("frfrfr", {
	
         props:["data"],
		 data: function () {
		  return {
			count: 48763,
			resultList:[
				{name:"必定產生",style:{color:"blue",fontWeight:"bold"}},
				{name:"機率產生",style:{color:"green",fontWeight:"bold"}},
				{name:"異變產生(機率低)",style:{color:"red",fontWeight:"bold"}},
				{name:"試著使用生命核心試試吧!",style:{color:"orange",fontWeight:"bold"}},
				{name:"試著使用宇宙奧秘試試吧!",style:{color:"orange",fontWeight:"bold"}},
				{name:"無法產生.別破壞世界秩序",style:{color:"gray",fontWeight:"bold"}}
			],
		  }
		},
		computed:{
			dataJudge:function(){
				return this.data.allResult ||[];
			},
			resultAppeared:function(){
				var obj = this.data.allResult || [];
				var arr = [];
				obj.forEach(function(v,i,a){
					var num = 0;
					if(a.length == 1){arr.push(num);return;}//必定產生
					
					num += 1;
					if(v.normalBorn == "O" || i==0 || i==1){
						arr.push(num)
						return;
					}
					num += 1;
					if(v.lifeBorn == "O"){
						arr.push(num)
						return;
					}
					num += 1;
					if(v.worldBorn == "O"){
						arr.push(num)
						return;
					}
					num += 1;//無法產生
					arr.push(num)
				})
				return arr;
			}
		},
		 template: `<div class="row" style="height:90vh;overflow:auto">
						<div class="col-12">
							<div class="row" v-for="(v,k) in data.allResult">
								<div class="col-4"><img :src="'img/monster/'+v.id+'.gif'"></div>
								<div class="col-8">
									<p>{{v.name}}</p>
									<p>成長：{{data.inherit}}</p>
									<p v-show="resultAppeared[k] == 0" style="color:blue;font-weight:bold;">極高機率產生</p>
									<p  v-show="resultAppeared[k] == 1" style="color:green;font-weight:bold;">機率產生</p>
									<p  v-show="resultAppeared[k] == 2" style="color:orange;font-weight:bold;">需要使用生命核心產生</p>
									<p  v-show="resultAppeared[k] <= 3" style="color:red;font-weight:bold;">可能異變產生(機率低)</p>
									<p v-show="resultAppeared[k] == 3" style="color:orange;font-weight:bold;">需要使用宇宙奧秘產生</p>
									<p v-show="resultAppeared[k] == 4" style="color:gray;font-weight:bold;">無法產生.別破壞世界秩序</p>
									
								</div>
							</div>
							<div class="row" v-show="resultAppeared != '' && ! resultAppeared.includes(4)">
								<div class="col-4"><img src="img/icon/question.gif"></div>
								<div class="col-8">
									<p style="color:red;font-weight:bold;">此融合可能易變產生其他物種</p>
								</div>
							</div>
						
						
						</div>
					</div>`,
		methods:{
			
			
		},
		watch:{
			
			
		},
      }); 