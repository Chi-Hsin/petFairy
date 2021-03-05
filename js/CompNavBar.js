var toyComp  = Vue.component("nnnn", {
	
        props:[],
		data: function () {
		  return {
			statusLimitSelect:"all",
		  }
		},
		computed:{
			toyfilter:function(){
			
			},
		},
		template: `<div>
		
				  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="height:10vh;">
				  <a class="navbar-brand" href="javascript:void(0)"><img src="img/icon/AAAAA.png"></a>
				  <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
					<span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="navbar-collapse collapse" id="navb">
					<ul class="navbar-nav mr-auto">
					
					  <li class="nav-item" id="petSearch" >
						<a class="nav-link" href="javascript:;" @click="showDiv('myBoxShow','petDetailShow','petFilterShow','petSearchShow')">幻獸搜尋<img src="img/icon/search.gif"></a>
					  </li>
					   <li class="nav-item" id="petMix">
						<a class="nav-link" href="javascript:;" @click="showDiv('myBoxShow','fusionResultShow','fusionShow')">融合模擬<img src="img/icon/fusionSimulate.gif"></a>
					  </li>
					  <li class="nav-item" id="skillList">
						<a class="nav-link" href="javascript:;" @click="showDiv('myBoxShow','petDetailShow','petFilterShow','skillListShow')">技能列表<img src="img/icon/skill.gif"></a>
					  </li>
					  <li class="nav-item" id="specirsList">
						<a class="nav-link" href="javascript:;">物種列表<img src="img/icon/species.gif"></a>
					  </li>
					  <li class="nav-item" id="toyList">
						<a class="nav-link" href="javascript:;" @click="showDiv('myBoxShow','petDetailShow','toyListShow')">玩具列表<img src="img/icon/toy.gif"></a>
					  </li>
					  <li class="nav-item" id="tutorialList">
						<a class="nav-link" href="javascript:;" @click="showDiv('myBoxShow','petDetailShow','toyListShow')" data-target="#myModal" data-toggle="modal">網站說明<img src="img/icon/book.gif"></a>
					  </li>
					</ul>
					<!-- <ul class="mb-0 mr-4"> -->
						<!-- <li class="nav-item dropdown"> -->
						  <!-- <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"> -->
							<!-- 語言(繁體) -->
						  <!-- </a> -->
						  <!-- <div class="dropdown-menu"> -->
							<!-- <a class="dropdown-item" href="#">繁體</a> -->
							<!-- <a class="dropdown-item" href="#">簡体</a> -->
							<!-- <a class="dropdown-item" href="#">英文</a> -->
						  <!-- </div> -->
						<!-- </li> -->
					<!-- </ul> -->
				  </div>
				</nav>
				
				 <div class="modal" id="myModal"><!-- 活動一覽選單-->
				  <div class="modal-dialog">
					  <div class="modal-content">
					  
						<!-- Modal Header -->
						<div class="modal-header">
						  <button type="button" class="close" data-dismiss="modal">×</button>
						</div>
						<!-- Modal body -->
						<div class="modal-body">
							<img src="img/"
						</div>
						
						<!-- Modal footer -->
						<div class="modal-footer">
						  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
						</div>
						
					  </div>
				  </div>
				</div>
				
				</div>
				
				`,
		methods:{
			showDiv:function(...args){
				this.$emit("show-div",...args)
			},
		},
		watch:{
			
		},
      }); 