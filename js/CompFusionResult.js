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
				
				//營養
				if(this.data.item == "幻獸營養劑"){
						obj.forEach(function(v,i,a){
						var num = 0;
						if(a.length == 1){arr.push(num);return;}//高機率產生
						
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
				}
				if(this.data.item == "生命核心"){
					if(obj[0].lifeBorn == "O" ||
					   this.data.father.element+this.data.father.species == obj[0].element+obj[0].species || 
					   this.data.mother.element+this.data.mother.species == obj[0].element+obj[0].species)
					 {arr.push(0);}
					if(obj[0].worldBorn == "O"){arr.push(3);}
					else{arr.push(4)}
					
				}
				if(this.data.item == "宇宙奧秘"){
					if(obj[0].worldBorn == "O" ||
					   this.data.father.element+this.data.father.species == obj[0].element+obj[0].species || 
					   this.data.mother.element+this.data.mother.species == obj[0].element+obj[0].species)
					 {arr.push(0);}
					else{arr.push(4)}
					
				}
				return arr;
			}
		},
		 template: `<div class="row" style="height:90vh;overflow:auto">
		 
						<div v-show="resultAppeared == ''" style="width:100%;height:100%;background:url('img/icon/fusionResultBk.gif');background-size:contain;background-position:center;background-repeat:no-repeat;">
						
						
						
						</div>
						<div class="col-12">
							<div class="row" v-show="resultAppeared != ''">
							<div class="col-12" style="text-align:center">
								<h3>可能產出結果分析</h3>
								你使用了融合道具：{{data.item}}
							</div>
							
							</div> 
							<div class="row" v-for="(v,k) in data.allResult">
								<div class="col-12"><img src="img/icon/woodBack.gif" style="width:100%;"></div>
								
								<div class="col-4"><img :src="'img/monster/'+v.id+'.gif'" onerror="this.src='img/icon/notFound.gif'"></div>
								<div class="col-8">
									<p>{{v.name}}</p>
									<p>屬性：{{v.element}}</p>
									<p>成長：{{data.inherit}}</p>
									<p v-show="resultAppeared[k] == 0" style="color:blue;font-weight:bold;">必定產生</p>
									<p v-show="resultAppeared[k] == 0 && data.item=='幻獸營養劑'" style="color:blue;font-weight:bold;">極高機率產生</p>
									<p  v-show="resultAppeared[k] == 1 && data.item=='幻獸營養劑'" style="color:green;font-weight:bold;">機率產生</p>
									<p  v-show="resultAppeared[k] == 2 && data.item=='幻獸營養劑'" style="color:orange;font-weight:bold;">需要使用生命核心產生</p>
									<p  v-show="resultAppeared[k] <= 3 && v.worldBorn=='O' && data.item=='幻獸營養劑'" style="color:red;font-weight:bold;">可能異變產生(機率低)</p>
									<p v-show="resultAppeared[k] == 3 && data.item !='宇宙奧秘'" style="color:orange;font-weight:bold;">需要使用宇宙奧秘產生</p>
									<p v-show="resultAppeared[k] == 4" style="color:gray;font-weight:bold;">無法產生</p>
									
								</div>
							</div>
							<div class="row" v-show="resultAppeared != '' && ! resultAppeared.includes(4) && data.item=='幻獸營養劑'">
								<div class="col-12"><img src="img/icon/woodBack.gif" style="width:100%;"></div>
								<div class="col-4"><img src="img/icon/question.gif"></div>
								<div class="col-8">
									<p style="color:red;font-weight:bold;">此融合可能異變產生其他物種</p>
								</div>
							</div>
						
						
						</div>
					</div>`,
		methods:{
			
			
		},
		watch:{
			
			
		},
      }); 