var model = {
  txt : {
    title:'',
    load_text:'',
    btn_txt:[]
  },
  index:0,
  total:0,
  style_load:{},
  style_list:{},
  word_list:[],
};

var vm = new Vue({
  el : "#app",
  data : model,
  created: function() {
    //초기화
    this.txt.title = '영단어장';
    this.txt.load_text = 'Loading...';
    this.txt.btn_txt.push({no:'1',name:'단어토글'});
    this.txt.btn_txt.push({no:'2',name:'뜻토글'});
    this.txt.btn_txt.push({no:'3',name:'읽기'});
    this.txt.btn_txt.push({no:'4',name:'외움'});

    this.index = 0;
    this.style_load = {display:'block'};
    this.style_list = {display:'none'};

    //서버에서 데이터 받아오는 로직.... 우선은 하드코딩...
    this.word_list.push({no:1, word:'apple', value:'사과'});
    this.word_list.push({no:2, word:'school', value:'학교'});
    this.word_list.push({no:3, word:'book', value:'책'});
    this.word_list.push({no:4, word:'mouse', value:'마우스'});
    this.word_list.push({no:6, word:'cafe', value:'카페'});
    this.word_list.push({no:7, word:'keyboard', value:'키보드'});
    this.word_list.push({no:8, word:'cell phon', value:'핸드폰'});
    this.word_list.push({no:9, word:'tv', value:'티비'});
    this.word_list.push({no:10, word:'sky', value:'하늘'});
    this.total = this.word_list.length;
  },
  mounted: function() {
    var vm = this;
    setTimeout(function() {
      alert("환영 합니다.");
      vm.style_load = {display:'none'};
      vm.style_list = {display:'block'};
    }, 1000);
  },
  methods:{
    fn_frst_work : function(){
      this.index = 0;
    },
    fn_next_work : function(){
      this.index++;
    },
    fn_prev_work : function(){
      this.index--;
    },
    fn_last_work : function(){
      this.index = this.word_list.length-1;
    },
    fn_btn_action : function(no){
      alert(no);
      if(no == 1){

      }
      else if(no == 2){

      }
      else if(no == 3){

      }
      else if(no == 4){

      }
    }
  }
});
