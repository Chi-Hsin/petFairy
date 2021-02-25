var detailComp  = Vue.component("dddd", {
	
        props:["data"],
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
				
			}
			
		},
		template: `<div class="row"><!-- 寵物詳細資訊 -->
						<div class="col-5" style="padding:0;justify-content:center;
							display: flex;flex-direction:column;height:30vh;">
							<img :src="'img/monster/'+data.pet.id+'.gif'" style="width:100%;" onerror="this.src='img/icon/notFound.gif';"  @mousedown="addPets(data.pet.id,'monster',$event)" @contextmenu.prevent>
						</div>
						<div class="col-7" style="height:30vh;">
							{{data.pet.name}}
							LV:{{data.pet.level}}
							<p>物種:{{data.pet.species}}</p>
							<p>屬性:{{data.pet.element}}</p>
							<p>物種偏向:{{data.pet.speciesDir}}</p>
							<p>技能格:{{data.pet.skillAmount}}</p>
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
									<p><img src="img/skill/1.gif">力：{{data.pet.str}}</p>
									<p><img src="img/skill/1.gif">體：{{data.pet.vit}}</p>
									<p><img src="img/skill/1.gif">智：{{data.pet.int}}</p>
									<p><img src="img/skill/1.gif">魅：{{data.pet.chm}}</p>
									<p><img src="img/skill/1.gif">幸：{{data.pet.luk}}</p>
								
								</div>
								<!--掉落-->
								<div id="menu2" class="container tab-pane fade">
									<p>
										<table class="table">
											<thead>
											  
											</thead>
											<tbody>
											<tr v-for="(v,k) in dropForTable">
											   <td><a href="javascript:;">{{v.first}}</a></td>
											   <td><a href="javascript:;">{{v.second}}</a></td>
											   <td><a href="javascript:;">{{v.third}}</a></td>
											   <td><a href="javascript:;">{{v.forth}}</a></td>
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
											<tr v-for="(v,k) in skillForTable">
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
			addPets:function(id,type,event){
				
				if(event.buttons == 2){
					
					// alert("id:"+id+"type:"+type)
					this.$emit("box-add",{id:id,type:type});
				}
			},
			openSkillList:function(){
				this.$emit("open-skill");
			},
		},
		watch:{
			
			
		},
      }); 