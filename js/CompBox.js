var testComp  = Vue.component("bbbb", {
	
         props:["data1","data2"],
		 data: function () {
		  return {
			arr:[
				 //幻獸
				{"id":761,"name":"可可亞河童","level":"111~120","species":"河童","speciesDir":"體","element":"闇","skillAmount":5,"str":"156","vit":"200","agi":"178","int":"189","luk":"156","chm":"145","life":"34869","drop":"可可亞河童卡 可可亞河童娃娃 魔法參考書","skill":"肉體強化、恢復、賜福、轉換、推車、犧牲、亡命一擊、詛咒術、毒擊術、三連擊、吸魂術","map":"龍宮2F","normalBorn":"X","lifeBorn":"O","worldBorn":"O","type":"monster"},
				 //幻獸
				{"id":516,"name":"法亞象","level":"21~25、21~27、26~32、81~90","species":"象","speciesDir":"力","element":"火","skillAmount":4,"str":"53","vit":"35","agi":"30","int":"30","luk":"38","chm":"30","life":"382","drop":"法亞象卡片 法亞象娃娃 彎刀 鑄鐵鎧甲 象牙 娃娃盒","skill":"肉體強化、恢復、連擊、威脅、轉換","map":"以利暗沙漠、秘密古墓B1、秘密古墓B2、試煉洞窟B3","normalBorn":"O","lifeBorn":"O","worldBorn":"O","type":"monster"},
				{id:516,type:"monster",name:"",species:"娃娃"}, //娃娃
				{id:4,type:"item",name:"",species:"item"}, //卡片
				{id:1,type:"item",name:"",species:"item"}, //營養
				{id:2,type:"item",name:"",species:"item"}, //生命
				{id:3,type:"item",name:"",species:"item"}, //宇宙
			],
			colorGray:{
				filter:"grayscale(100%)"
			},
			colorable:{
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
							
							<img :src="'img/'+v.type+'/'+v.id+'.gif'" style="width:100%;" :style="grayScalable(v.type,v.species)" @click="showDetail(v.id)" @contextmenu.prevent @mousedown="removeItem(v.id,$event)"
							@dragstart="petDrag(v,$event)" onerror="this.src='img/icon/notFound.gif'">
							
						</div>
					</div>`,
		methods:{
			grayScalable:function(type,species){
				return type=="monster" && species!= "娃娃"  ?this.colorGray: this.colorable
			},
			
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