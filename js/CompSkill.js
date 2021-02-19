var skillComp  = Vue.component("ssss", {
	
        props:["data"],
		computed:{
		},
		template: `<div class="row table-responsive">
						<table class="table">
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
									   <td class="word-wrap">{{v.name}}</td>
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
			
		},
		watch:{
			
			
		},
      }); 