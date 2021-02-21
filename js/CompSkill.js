var skillComp  = Vue.component("ssss", {
	
        props:["data"],
		data: function () {
		  return {
			skillSelect:"",
		  }
		},
		computed:{
		},
		template: `<div class="row table-responsive">
						<table class="table table-striped">
									<thead>
									  <tr>
										<th class="word-wrap">名稱</th>
										<th>圖示</th>
										<th>時機</th>
										<th>等級</th>
										<th>技能說明</th>
										<th>學習地點</th>
									  </tr>
									</thead>
									<tbody>
									<tr  v-for="(v,k) in data" :id="v.name">
									   <td class="word-wrap"><a href="javascript:;" @click="skillFilter(v.type)">{{v.name}}</a></td>
									   <td><img :src="'img/skill/'+v.id+'.gif'"></td>
									   <td>{{v.when}}</td>
									   <td>{{v.level}}</td>
									   <td>{{v.note}}</td>
									   <td>{{v.where}}</td>
									</tr>
									</tbody>
						</table>
					</div>`,
		methods:{
			skillFilter:function(v){
				this.skillSelect = v;
				this.$emit("skill-filter",this.skillSelect)
			},
		},
		watch:{
			
			
		},
      }); 