var toyComp  = Vue.component("tugian", {
	
        props:["data","data2"],
		data: function () {
		  return {
			numberSelect:"",
			nameSelect:"",
			speciesSelect:"All",
			familySelect:"-",
			familyList:["二","三","四","五","六","七","八","九"],
			candleList:[],
			recordShow:true,
			recordText:"全部顯示",
		  }
		},
		computed:{
			petNumberOrder:function(){
				return this.data.sort(function(a,b){return a.number - b.number;})
			},
			petOptionList:function(){
				if( this.nameSelect == "" && 
					this.numberSelect == "" &&
					this.speciesSelect == "All" &&
					this.familySelect == "-" &&
					this.recordShow){return this.petNumberOrder;}
					
				var that = this;
				return this.petNumberOrder.filter(function(v){
					var c1 = that.nameSelect == "" ? true : v.name.includes(that.nameSelect);
					var c2 = that.numberSelect == "" ? true : v.number == that.numberSelect;
					var c3 = that.speciesSelect == "All" ? true : v.species == that.speciesSelect;
					var c4 = that.familySelect == "-" ? true : v.family.split("、").includes(that.familySelect);
					var c5 = that.recordShow == true ? true : that.candleList.includes(v.number);
					return c1 && c2 && c3 && c4 && c5;
				})
			},
		},
		template: `<div class="row" style="height:90vh;overflow:auto;">
						<table class="table" id="tugianTable">
									<thead>
									  <tr>
										<th>
											<button @click="deleteRecord">刪除紀錄</button>
											<button class="mt-2" @click="candleToggle">{{recordText}}</button>
										</th>
										
										<th>編號<input type='search' v-model="numberSelect"  size="2"></th>
										<th>名稱<input type='search' v-model="nameSelect"  size="3"></th>
										<th>
											物種<select v-model="speciesSelect" size="4">
												<option value="All">All</option>
												<option v-for="(v,k) in data2" :value="v.type">{{v.type}}</option>
											</select>
										</th>
										<th>
											家卡<select v-model="familySelect">
												<option value="-">-</option>
												<option v-for="(v,k) in familyList" :value="v">{{v}}</option>
											</select>
										</th>
									  </tr>
									</thead>
									<tbody>
									<tr v-for="(v,k) in petOptionList" @contextmenu.prevent @mousedown="lightTheCandle(v.number,$event)"
									@click="showPets(v.id)">
									   <td><img :src="candleShow(v.number)"></td>
									   <td>{{v.number}}</td>
									   <td>{{v.name}}</td>
									   <td></td>
									   <td></td>
									</tr>
									</tbody>
						</table>
					</div>`,
		methods:{
			candleToggle:function(){
				this.recordShow = !this.recordShow;
				
				if(this.recordShow){
					this.recordText = "全部顯示"
				}
				else{
					this.recordText = "紀錄顯示";
				}
				
			},
			showPets:function(id){
				
				
				this.$emit("show-pet",id);
			},
			lightTheCandle:function(number,event){
				
				if(event.button == 2){//如果滑鼠右鍵才執行
					var index = this.candleList.indexOf(number);
					if(index > -1){//如果有重複一筆 就暗燈
						this.candleList.splice(index,1);
					}
					else{//新增亮燈
						this.candleList.push(number);
					}
					
					
				}
			},
			candleShow:function(number){//根據燈表  顯示暗燈或綠燈(是否有被記錄)
				if(! this.candleList.includes(number)){
					return "img/icon/darkCandle.gif";
				}
				else{
					return "img/icon/lightCandle.gif";
				}
			},
			deleteRecord:function(){
				if(!confirm("確定刪除所有紀錄嗎?")){return;}
				
				this.candleList = [];
			},
		},
		created(){
			//如果有被記錄的燈  就取用
			if(localStorage.getItem("candleList") !=null){
				this.candleList = JSON.parse(localStorage.getItem("candleList"))
			}
			
			// alert(this.candleList)
		},
		watch:{
			candleList:function(){
				//每次紀錄或取消  都紀錄至localStorage
				localStorage.setItem("candleList",JSON.stringify(this.candleList));
			},
			numberSelect:function(){
				if(this.numberSelect == ""){return;}
				this.nameSelect = "";
				this.speciesSelect = "All";
				this.familySelect = "-";
				
			},
			nameSelect:function(){
				if(this.nameSelect == ""){return;}
				this.numberSelect = "";
				this.speciesSelect = "All";
				this.familySelect = "-";
			},
			speciesSelect:function(){
				if(this.speciesSelect == "All"){return;}
				this.numberSelect = "";
				this.nameSelect = "";
				this.familySelect = "-";
			},
			familySelect:function(){
				if(this.familySelect == "-"){return;}
				this.numberSelect = "";
				this.nameSelect = "";
				this.speciesSelect = "All";
			},
			
		},
      }); 