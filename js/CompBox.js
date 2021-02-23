var testComp  = Vue.component("bbbb", {
	
         props:["data"],
		 data: function () {
		  return {
			arr:[],
		  }
		},
		computed:{
			
		},
		mounted(){
			var obj = {id:"empty"}
			for(var i=0;i<20;i++){
				this.arr.push(obj)
			}
		},
		 template: `<div class="row" style="background:#DEBA72;height:90vh;overflow:auto;">
						
						<div class="col-4 pt-2" v-for="(v,k) in arr" style="background:url('CCC.png') no-repeat;background-size:contain;height:15vh;">
							
							<img :src="'img/monster/'+v.id+'.gif'" style="width:100%;" @click="test">
							
						</div>
					</div>`,
		methods:{
			test:function(){
				console.log(this.arr)
			}
			
		},
		watch:{
			data:function(){
				var that = this;
				this.data.forEach(function(v,i){
					// arr[i] = v
					that.$set(that.arr, i, v)
				})
				
			}
		},
      }); 