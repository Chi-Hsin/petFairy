var toyComp  = Vue.component("tttt", {
	
        props:["data"],
		data: function () {
		  return {
			statusLimitSelect:"all",
			levelSelect:"all",
			levelRange:["all",15,20,25,30,35,40,45,50,55,60,65,70]
		  }
		},
		computed:{
			toyfilter:function(){
				var s  = this.statusLimitSelect;
				var s2 = this.levelSelect;
				
				
				return this.data.filter(function(x){
					var condition1 = s == "all" ? true
												:x.statusLimit == s;
					var condition2 = s2 == "all" ? true
												: x.level == s2;							
					return condition1 &&  condition2;
				})
			},
		},
		template: `<div class="row ">
						<table class="table table-striped">
									<thead>
									  <tr>
										<th>
										<select v-model="levelSelect">
										  <option disabled value="">等級篩選</option>
										  <option v-for="(v,k) in levelRange" :value="v">{{v}}</option>
										</select>
										</th>
										<th>基底材料</th>
										<th>製作材料</th>
										<th class="word-wrap">加工娃娃</th>
										<th>娃娃上限</th>
										<th>數值上限
										<select v-model="statusLimitSelect">
										  <option disabled value="">數值上限篩選</option>
										  <option value="50">highest</option>
										  <option value="all">all</option>
										</select>
										
										</th>
									  </tr>
									</thead>
									<tbody>
									<tr  v-for="(v,k) in toyfilter" :id="v.name">
									   <td><p><img :src="'img/toy/'+v.id+'.gif'"></p>
									   <p>LV{{v.level}}</p>
									   {{v.name}}
									   </td>
									   <td><p><img :src="'img/toy/B'+v.id+'.gif'"></p>
									   {{v.base}}
									   </td>
									   <td>{{v.item}}</td>
									   <td class="word-wrap"><a href="javascript:;" @click="showPets(v.petsRelated)">{{v.petsRelated}}</a></td>
									   <td>{{v.dollLimit}}</td>
									   <td>{{v.statusLimit}}</td>
									</tr>
									</tbody>
						</table>
					</div>`,
		methods:{
			showPets:function(v){
				this.$emit("show-toypets",v)
			},
		},
		watch:{
			statusLimitSelect:function(){
				if(this.statusLimitSelect == "all"){return;}
				this.levelSelect = "all";
			},
			levelSelect:function(){
				if(this.levelSelect == "all"){return;}
				this.statusLimitSelect = "all";
			},
			
		},
      }); 