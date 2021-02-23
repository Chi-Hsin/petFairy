var detailComp  = Vue.component("dddd", {
	
        props:["data"],
		computed:{
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
						<div class="col-6" style="height:60vh;overflow:auto;"><!--掉落列表-->
							<p>
								<table class="table">
									<thead>
									  <tr>
										<th>掉落:</th>
									  </tr>
									</thead>
									<tbody>
									<tr v-for="(v,k) in data.drop">
									   <td><a href="javascript:;">{{v}}</a></td>
									</tr>
									</tbody>
								</table>
							</p>
						</div>
						<div class="col-6" style="height:60vh;overflow:auto;"><!--可學技能列表-->
							<p>
								<table class="table">
									<thead>
									  <tr>
										<th>可學:</th>
										<th></th>
									  </tr>
									</thead>
									<tbody>
									<tr v-for="(v,k) in data.skill">
									   <td><a :href="'#'+v" @click="openSkillList">{{v}}</a></td>
									   <td>
										<a :href="'#'+v" @click="openSkillList">
										<img  :src="'img/skill/'+k+'.gif'"></a>
									   </td>
									  
									</tr>
									</tbody>
								</table>
							</p>
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