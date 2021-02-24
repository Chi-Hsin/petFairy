var testComp  = Vue.component("bbbb", {
	
         props:["data1","data2"],
		 data: function () {
		  return {
			arr:[]
		  }
		},
		computed:{
		},
		mounted(){
			// var obj = {id:"empty"}
			// for(var i=0;i<5;i++){
				// this.arr.push(obj)
			// }
		},
		 template: `<div class="row" style="background:#DEBA72;height:90vh;overflow:auto;">
						
						<div class="col-4 pt-2" v-for="(v,k) in arr" style="background:url('CCC.png') no-repeat;background-size:contain;height:15vh;">
							
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

				this.arr.splice(index,1)
				
				
			},
			
		},
		watch:{
			data1:function(){
				
				this.arr.unshift(this.data1);
				
				
				 // console.log(this.arr)
				
			},
			// box:function(){
				// console.log("變動")
				// var that = this;
				// this.box.forEach(function(v,i){
					
					// that.$set(that.arr,i,v)
					// that.arr.push(v)
				// })
			// },
		},
      }); 