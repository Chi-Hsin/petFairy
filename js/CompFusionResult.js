var testComp  = Vue.component("frfrfr", {
	
         props:["data"],
		 data: function () {
		  return {
			count: 48763,
			resultList:[
				"必定產生","機率產生","異變產生(機率低)","試著使用生命核心試試吧!","試著使用宇宙奧秘試試吧!"
			],
		  }
		},
		computed:{
			result:function(){
				// return [this.data.father,this.data.mother,this.data.child1,this.data.child2]
						// .filter(function(v,i,a){return a.indexOf(v) == i;})
			}
		},
		 template: `<div class="row" style="height:90vh;overflow:auto">
						<div class="col-12">
							<div class="row" v-for="(v,k) in data.allResult">
								<div class="col-4"><img :src="'img/monster/'+v.id+'.gif'"></div>
								<div class="col-8">
									<p>{{v.name}}</p>
									<p>成長：{{data.inherit}}</p>
									<p style="color:blue">必定產生</p>
									<p style="color:green">機率產生</p>
									<p style="color:red">異變產生(機率低)</p>
									<p style="color:orange">試著使用生命核心試試吧!</p>
									<p style="color:orange">試著使用宇宙奧秘試試吧!</p>
								</div>
							</div>
						
						
						</div>
					</div>`,
		methods:{
			
			
		},
		watch:{
			nameSelect:function(){
				this.select.nameSelect = this.nameSelect;
			},
			
		},
      }); 