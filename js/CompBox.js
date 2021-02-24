var testComp  = Vue.component("bbbb", {
	
         props:["data1","data2"],
		 data: function () {
		  return {
			arr:[],
			// arr2:[]
		  }
		},
		computed:{
			arr2:function(){
				var aaa = JSON.parse(JSON.stringify(this.arr));
				// console.log(this.arr2)
				for(var i=0;i<this.data1.length;i++){
					aaa.unshift(this.data1[i]);
					aaa.pop();
				}
				return aaa
			}
			
		},
		mounted(){
			var obj = {id:"empty"}
			for(var i=0;i<50;i++){
				this.arr.push(obj)
			}
		},
		 template: `<div class="row" style="background:#DEBA72;height:90vh;overflow:auto;">
						
						<div class="col-4 pt-2" v-for="(v,k) in arr2" style="background:url('CCC.png') no-repeat;background-size:contain;height:15vh;">
							
							<img :src="'img/monster/'+v.id+'.gif'" style="width:100%;filter:grayscale(100%)" @click="showDetail(v.id)" @contextmenu.prevent @mousedown="removeItem(v.id,$event)">
							
						</div>
					</div>`,
		methods:{
			showDetail:function(id){
				this.$emit("show-detail",id);
			},
			removeItem:function(id,event){
				 if(id=="empty" || event.button != 2){return;}
				var index = this.arr.findIndex(function(v){
					return v.id == id;
				})

				// this.arr.splice(index,1)
				// this.arr.push({id:"empty"})
				this.$emit("remove-item",id)
				
				
			},
			
		},
		watch:{
			data1:function(){
				
			},
		},
      }); 