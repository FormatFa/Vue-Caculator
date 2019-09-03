<template>
  <div id="app">

       <img style="display: block;position:absolute;z-index: 999999;" v-bind:class="{'hidden-lg-and-down':is666}" src="./assets/ying.gif"/>
    <!-- 公式和结果 -->
    <el-row>
      <el-col :span="24"><input  v-on:input="caculate" v-model="expr" class="expr"></input></el-col> 
    </el-row>
      <el-row>
        <!-- 计算结果 -->
          <el-col ><div style="font-size:large;color:gray;text-align: right;" class="expr">{{ result }}</div></el-col>
    </el-row>

    <el-row>
      <el-col :span="6"  > <div v-on:click="insertChar('mc')" class="inputblock operator">mc</div> </el-col>
      <el-col :span="6" > <div v-on:click="insertChar('m+')"  class="inputblock operator">m+</div></el-col>
      <el-col :span="6"  > <div v-on:click="insertChar('m-')" class="inputblock  operator">m-</div></el-col>
      <el-col :span="6"  > <div v-on:click="insertChar('mr')" class="inputblock operator">mr</div></el-col>
    </el-row>

    <el-row>
        <el-col :span="6"> <div  v-on:click="insertChar('C')" class="inputblock operator2">C</div></el-col>
        <el-col :span="6"> <div   v-on:click="insertChar('/')" class="inputblock operator2">÷</div></el-col>
        <el-col :span="6" > <div  v-on:click="insertChar('*')" class="inputblock operator2">×</div></el-col>
        <el-col :span="6"> <div  v-on:click="insertChar('del')"  class="inputblock operator2">删除</div></el-col>
      </el-row>


      <el-row>
          <el-col :span="6" > <div v-on:click="insertChar('7')"  class="inputblock number">7</div></el-col>
          <el-col :span="6"  > <div v-on:click="insertChar('8')" class="inputblock number">8</div></el-col>
          <el-col :span="6" > <div  v-on:click="insertChar('9')" class="inputblock number">9</div></el-col>
          <el-col :span="6" > <div v-on:click="insertChar('-')"  class="inputblock operator2">-</div></el-col>
        </el-row>
        
        <el-row>
            <el-col :span="6"  > <div v-on:click="insertChar('4')" class="inputblock number">4</div></el-col>
            <el-col :span="6"  > <div v-on:click="insertChar('5')" class="inputblock number">5</div></el-col>
            <el-col :span="6" > <div v-on:click="insertChar('6')"  class="inputblock number">6</div></el-col>
            <el-col :span="6" > <div v-on:click="insertChar('+')" class="inputblock operator2">+</div></el-col>
          </el-row>

          <!-- 禁忌 -- 双重row -->
          <el-row>
            <el-col :span="18">
              <el-row>
                  <el-col :span="8" > <div  v-on:click="insertChar('1')" class="inputblock number">1</div></el-col>
                  <el-col :span="8"> <div  v-on:click="insertChar('2')"  class="inputblock number">2</div></el-col>
                  <el-col :span="8" > <div v-on:click="insertChar('3')"  class="inputblock number">3</div></el-col>
              </el-row>
              <el-row>
                  <el-col :span="8"  > <div v-on:click="insertChar('%')" class="inputblock number">%</div></el-col>
                  <el-col :span="8" > <div v-on:click="insertChar('0')"  class="inputblock number">0</div></el-col>
                  <el-col :span="8" > <div  v-on:click="insertChar('.')" class="inputblock number">.</div></el-col>
              </el-row>
            </el-col>

            <el-col :span="6"  ><div v-on:click="insertChar('=')" class="inputblock equal">=</div></el-col>
          </el-row>

          <el-row>
            <!-- 使用html的话需要用v-html -->
            <p style="text-align: left" v-for="log in stackLog" v-html="log"></p>
          </el-row>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import caculateExpr from './caculate.js'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data(){
    return {
      expr:"1+1",
      result:"2",
      // memory 记忆数字
      memory:0,
      // 处理日志
      stackLog:["<h2>test</h2>","23"]
    }
  },
  computed:{
    is666(){

      return  this.expr!="666666";
      
    }
  },
  methods:{
    
    
    test:function(){
      console.log("测试..");
    },
    // 计算结果,每输入一个字符就计算一次
    caculate:function(){
      if(this.expr=="666666")
      {
        this.result="built by formatfa"
        return;
      }
      console.log("= ,计算结果,表达式:"+this.expr);
       let temp = caculateExpr(this.expr);
       this.result = temp.result;
       this.stackLog=temp.stackLog;

      console.log("结果:"+ this.result);

    },
    // 插入字符串到input的当前光标位置
    insertChar(char){
      if(char=='del')
      {
        console.log("删除字符串");
        this.expr=this. expr.substring(0,this.expr.length-1);
      }
      else if(char=="=")
      {
        // 设置表达式为结果
        this.expr=this.result;
        this.result="123";
        
      }
      else if(char=="C")
      {
        this.expr="";
      }
      // memory clean  清除当前记住的数字
      else if(char=="mc")
      {
        this.memory=0;
      }
      else if(char=="mr")
      {
        this.expr=this.memory;
      }
      else if(char=="m+")
      {
        this.memory=this.expr+this.result;
      }
      else if(char=="m-")
      {
        this.memory=this.expr+this.result;
      }
      else{
        console.log("添加字符串:"+char);
        this.expr = this.expr+char;
      }
      this.caculate();
      // let start = dom.selectionStart;
      // let end = dom.selectionEnd;
      
      // let text = dom.value;
      // console.log("插入字符串:start:"+start+" end:"+end+" TEXT:"+this.expr);
      // 插入到最后
      
      //dom.value=this.expr+char;
      

    },
    // 点击按钮时监听
    enter:function(event){
      console.log("enter:");
      console.log(event);
      // 获取按钮的文字，根据按钮的内容来判断操作
      let key = event.target.innerText;
      // = 要特殊处理
      if(key=="=")
      {
        
      }
      else{
        // 其他的直接当字符串输入
        this.insertChar(event.target,key);

      }
      
      

    }
  }
}
</script>

<style>

/* 表达式输入框 */
.expr {
  width: 100%;
  text-align: right;
/* 去掉输入框边框 */
  border: 0px;
  font-size: x-large;
  height: 30px;
}


/* 一个框 */
.inputblock {
  
  height: 50px;
  /* 设置行高和高度相同，文字即可垂直居中 */
  line-height: 50px;
  text-align: center;
  font-size: larger;
}
.inputblock:hover {
  background: #e5e5e5;
}
/* 操作符的背景 */
.operator {
  color:#888888;
  background-color: #f5f5f5;
  border:1px solid #e5e5e5;
}
/* + - 乘除这些 */
.operator2 {
  color:#00aaba;
  background-color: #f5f5f5;
  border:1px solid #e5e5e5;
}
/* 整数 */
.number {
  color: black;
  background-color: white;
  border:1px solid #e5e5e5;
}
/* 等于号 */
.equal {
  height: 100px;
  line-height: 100px;
  background-color: #00AABA;
  color:white;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
