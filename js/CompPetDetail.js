var detailComp  = Vue.component("dddd", {
	
        props:["data"],
		data:function() {
			return{
				status:{
					"str":"img/icon/str.gif",
					"vit":"img/icon/vit.gif",
					"agi":"img/icon/agi.gif",
					"int":"img/icon/int.gif",
					"luk":"img/icon/luk.gif",
					"chm":"img/icon/chm.gif"
				},
				title:["名稱","等級","物種","技能數"],
			}
		},
		computed:{
			skillForTable:function(){
				var arr = [];
				var obj={first:"",second:""};
				
				for(var i=0;i<this.data.skill.length;i+=2){
					
					obj.first = this.data.skill[i] || { "id": "empty", "name": "" };
					obj.second = this.data.skill[i+1] || { "id": "empty", "name": "" };
					arr.push(obj);
					obj = {first:"",second:""};
				}
				return arr
				
			},
			dropForTable:function(){
				var arr = [];
				var obj={first:"",second:"",third:"",forth:""};
				
				for(var i=0;i<this.data.drop.length;i+=4){
					
					obj.first = this.data.drop[i] || "";
					obj.second = this.data.drop[i+1] || "";
					obj.third = this.data.drop[i+2] || "";
					obj.forth = this.data.drop[i+3] || "";
					arr.push(obj);
					obj = {first:"",second:"",third:"",forth:""};
				}
				return arr
				
			},
			
			
		},
		template: `<div class="row"><!-- 寵物詳細資訊 -->
						<div class="col-5" style="padding:0;justify-content:center;
							display: flex;flex-direction:column;height:30vh;">
							<img :src="'img/monster/'+data.pet.id+'.gif'" style="width:100%;" onerror="this.src='img/icon/notFound.gif';"  @mousedown="boxAdded('monster',data.pet,data.pet.name,'monster',$event)" @contextmenu.prevent data-toggle="tooltip" data-placement="right" title="點擊可以移動至背包">
						</div>
						<div class="col-7" style="height:30vh;">
							
							
							
							
							
							<div class="row" style="height:100%;">
								<div class="col-6" style="padding:0">{{data.pet.name}}</div>
								<div class="col-6" style="padding:0">LV:{{data.pet.level}}</div>
								<div class="col-6" style="padding:0">物種:</div>
								<div class="col-6" style="padding:0"><a href="javascript:;"  data-toggle="tooltip" :title="'點擊尋找物種同樣為'+data.pet.species+'的幻獸'" data-placement="right" @click="findPet('species')">{{data.pet.species}}</a></div>
								<div class="col-12" style="padding:0">技能格數:</div>
								<div class="col-12" style="padding:0;cursor:pointer" data-toggle="tooltip" :title="'點擊尋找技能格數同樣為'+data.pet.skillAmount+'的幻獸'" data-placement="right" @click="findPet('skillAmount')">
									<img src="img/icon/skillBall.gif" v-for="i in data.pet.skillAmount">
								
								</div>
							</div>
							
						</div>
						<div class="col-12">
							<ul class="nav nav-tabs">
							<li>
							  <a class="nav-link active" data-toggle="tab" href="#menu1"><img src="img/icon/detailStatus.gif"></a>
							</li>
							<li>
							  <a class="nav-link " data-toggle="tab" href="#menu2"><img src="img/icon/detailDrop.gif"></a>
							</li>
							<li>
							  <a class="nav-link" data-toggle="tab" href="#menu3"><img src="img/icon/detailSkill.gif"></a>
							</li>
							<li>
							  <a class="nav-link" data-toggle="tab" href="#menu4"><img src="img/icon/detailMap.gif"></a>
							</li>
							
							</ul>
							<div class="tab-content">
								<!--能力-->
								<div id="menu1" class="container tab-pane  active">
										<div class="row mt-3" v-for="(v,k) in status">
										 <div class="col-3"><img :src="v" ><span>{{data["pet"][k]}}</span></div>
										 <div class="col-9" style="">
											 <div class="progress">
												<div class="progress-bar" role="progressbar"  :style="calcStatus(data['pet'][k])">
												
												</div>
											 </div>
											
										 </div>
										</div>
										
										 
								</div>
								<!--掉落-->
								<div id="menu2" class="container tab-pane fade">
									<p>
										<table class="table">
											<thead>
											  
											</thead>
											<tbody>
											<tr v-for="(v,k) in dropForTable" data-toggle="tooltip" data-placement="right" title="點擊移動至背包">
											   <td><a href="javascript:;" @mousedown="boxAdded('item',data.pet,v.first,'item',$event)" @contextmenu.prevent @click="changeNavBar(v.first)">{{v.first}}</a></td>
											   <td><a href="javascript:;" @mousedown="boxAdded('item',data.pet,v.second,'item',$event)" @contextmenu.prevent @click="changeNavBar(v.second)">{{v.second}}</a></td>
											   <td><a href="javascript:;" @mousedown="boxAdded('item',data.pet,v.third,'item',$event)" @contextmenu.prevent @click="changeNavBar(v.third)">{{v.third}}</a></td>
											   <td><a href="javascript:;" @mousedown="boxAdded('item',data.pet,v.forth,'item',$event)" @contextmenu.prevent @click="changeNavBar(v.forth)">{{v.forth}}</a></td>
											</tr>
											</tbody>
										</table>
									</p>
								
								
								</div>
								<!--技能-->
								<div id="menu3" class="container tab-pane  fade"><br>
								  	<p>
										<table class="table">
											<thead>
											</thead>
											<tbody>
											<tr v-for="(v,k) in skillForTable" data-toggle="tooltip" data-placement="right" title="點擊查看該技能資訊">
											   <td><a :href="'#'+v.first.name" @click="openSkillList">{{v.first.name}}</a></td>
											   <td>
												<a :href="'#'+v.first.name" @click="openSkillList">
												<img  :src="'img/skill/'+v.first.id+'.gif'"></a>
											   </td>
											    <td><a :href="'#'+v.second.name" @click="openSkillList">{{v.second.name}}</a></td>
											   <td>
												<a :href="'#'+v.second.name" @click="openSkillList">
												<img  :src="'img/skill/'+v.second.id+'.gif'"></a>
											   </td>
											  
											</tr>
											</tbody>
										</table>
									</p>
								</div>
								<!--出處取得-->
								<div id="menu4" class="container tab-pane fade"><br>
									{{data.pet.map}}
								</div>
							
							
							</div>
						
						</div>
						
					</div>`,
		methods:{
			calcStatus:function(status){//計算屬性條
				return {width:Math.floor(status/337*100) + "%"};
			},
			boxAdded:function(type,obj,name,species,event){
				var obj ={
							id:obj.id,
							element:obj.element,
							speciesDir:obj.speciesDir,
							type:type,
							name:name,
							species:species
						}
				
					
					if(type=="item"){
						// 僅開放卡片 娃娃  宇宙奧秘 生命核心  幻獸營養劑的移動 
						var itemArr = ["幻獸營養劑","生命核心","宇宙奧秘"];
						var condition = itemArr.includes(obj.name) || 
										obj.name.slice(-1) == "卡" ||
										obj.name.slice(-2) == "卡片" ||
										obj.name.slice(-2) == "娃娃";
						// console.log(itemArr.includes(name),name.slice(-1),name.slice(-2))
						if(!condition){ 
							// alert("NO");
							return;
						}
						
						if(itemArr.includes(name)){obj.id = itemArr.indexOf(obj.name) +1 }
						console.log(obj.id);
						if(name.slice(-2) == "卡片" || obj.name.slice(-1) == "卡"){obj.id = 4;obj.species  = "卡片"}
						if(obj.name.slice(-2) == "娃娃"){obj.type="monster";obj.species  = "娃娃"}
						
					}
					
					this.$emit("box-add",obj);
				
			},
			openSkillList:function(){
				this.$emit("open-skill");
			},
			findPet:function(type){
				this.$emit("find-pet",this.data.pet,type);
				this.$emit("show-petfilter");
			},
			changeNavBar:function(name){
				
				var changeColor = {}
				var arr = [
					{name:"濟世的決心",background:"#ffc107",color:"#000"},
					{name:"創世之原初",background:"#343a40",color:"rgba(255,255,255,.5)"},
					{name:"愛麗絲藍的象徵",background:"#E8EEF8",color:"#000"},
					{name:"裝著醬油的黑罐子",background:"#000",color:"#fff"},
					{name:"白拋拋幼咪咪的信用卡",background:"#fff",color:"#000"},
					{name:"嫩芽綠的象徵",background:"#BAC6A4",color:"#000"},
					{name:"奔放如火的熱情心意",background:"#dc3545",color:"#fff"},
					{name:"米古店長的紫色帽子",background:"#6610f2",color:"#fff"}
				];
				
				var condition = arr.some(function(x){
					if(x.name == name){changeColor = x;}
					return x.name == name
				})
				if(!condition){return;}
				// console.log(changeColor)
				this.$emit("change-navbar",changeColor)
				
			},
		},
		watch:{
			
			
		},
      }); 