var testComp  = Vue.component("bbbb", {
	
         props:["data1","data2"],
		 data: function () {
		  return {
			arr:[
				
			],
			colorGray:{ //幻獸顏色是灰白
				filter:"grayscale(100%)"
			},
			colorable:{ //其他道具物品維持原色
				filter:"grayscale(0)"
			},
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
			},
			
		},
		mounted(){
			var obj = {id:"empty",type:"monster"}
			for(var i=0;i<50;i++){
				this.arr.push(obj)
			}
		},
		 template: `<div class="row" style="background:#DEBA72;height:90vh;overflow:auto;">
		 
						<div class="col-4 pt-2" v-for="(v,k) in arr2" style="background:url('CCC.png') no-repeat;background-size:contain;height:15vh;">
							
							<img :src="'img/'+v.type+'/'+v.id+'.gif'" style="width:100%;" :style="grayScalable(v.type,v.species)" @click="showDetail(v)" @contextmenu.prevent @mousedown="removeItem(v.id,v.name,$event)"
							@dragstart="petDrag(v,$event)" onerror="this.src='img/icon/notFound.gif'">
							
						</div>
					</div>`,
		methods:{
			grayScalable:function(type,species){
				return type=="monster" && species!= "娃娃"  ?this.colorGray: this.colorable
			},
			
			showDetail:function(obj){
				this.$emit("show-detail",obj);
			},
			removeItem:function(id,name,event){
				 if(id=="empty" || event.button != 2){return;}
				
				this.$emit("remove-item",name)
				
				
			},
			petDrag:function(obj,event){
				if(obj.type != "monster" || obj.id == "empty" ||obj.species == "娃娃"){return;}
				
				this.$emit("pet-drag",obj)
				// event.dataTransfer.setData("data-dataInfo",id);
			},
			
		},
		watch:{
			data1:function(){
				
			},
		},
      }); 