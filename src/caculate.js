// 负数处理
// 
var name = "Formatfa";
function sayHello()
{
    console.log("Hello from function");
}

// 操作符和优先级
var operators={
    '+':1,
    '-':1,
    '*':2,
    '/':2,
    '%':2,
    "null":-1
};

// 计算两个数
function caculateItem(operator,left,right)
{
    let leftValue = parseFloat(left);
    let rightValue = parseFloat(right);
    if(operator=="+")
    {
        return leftValue+rightValue;
    }
    else if(operator=="-")
    {
        return leftValue-rightValue;
    }
    else if(operator=="*")
    {
        return leftValue*rightValue;
    }
    else if(operator=="/")
    {
        return leftValue/rightValue;
    }
    else if(operator=="%")
    {
        return leftValue%rightValue;
    }
}

// 遇到优先级大的时候，先清空栈,计算操作栈里的所有操作
function emptyStack(operatorsStack,numbersStack,stackLog)
{
    stackLog.push("<h3>开始清空栈..</h3>");
    console.log("开始清空操作符栈...");
    console.log(operatorsStack);
    // 知道操作符栈处理完
    while(operatorsStack.length!=0)
    {
    // 计算
    let right = numbersStack.pop();
    let left = numbersStack.pop();
    let operator = operatorsStack.pop();

    let result = caculateItem(operator,left,right);

    // 结果入栈
    numbersStack.push(result);
    let msg = `<span style="color:blue;">caculate : ${left}${operator}${right}=${result}</span>`;
    stackLog.push( msg);
    }
}

// 计算表达式
function caculate(expr)
{
    // 处理日志和结果

    let stackLog=new Array();
    stackLog.push("<h4>处理日志....</h4>");   

    console.log("--------------计算:"+expr+"---------------");

    // 分割成数字和字符串
    let all = new Array();

    console.log("expr length:"+expr.length);
    
    let temp = "";
    for(var i =0 ;i<expr.length;i+=1)
    {
        
        let c = expr.charAt(i);

        // 遇到操作符之前的当作一个操作数
        if(c in operators)
        {
            // 负数的话，负数是减号开头的,temp长度是0说明前面没有操作数，就是负数
            if(temp.length==0)
            {
                temp+=c;
                
            }
            else{

            console.log("遇到操作符:"+c+" temp:"+temp);
            all.push(temp);
            all.push(c);
            temp = "";
            }
        }
        else{
            temp+=c;
        }
    }

    console.log("添加最后操作数:"+temp+" "+temp.length);
    // 最后没有遇到操作符，最后的数字
    all.push(temp);

    console.log("分解字符串为操作数和操作符:")
    console.log(all);

    stackLog.push("<h4>分解成表达式成操作符操作数<h4>");
    stackLog.push(all);
    // ---------------------根据 all 计算结果--------

    // 操作数栈
    let numbersStack = new Array();
    // 操作符栈
    let operatorsStack = new Array();

    // 栈顶的操作符
    let topOperator = "null";
    all.forEach((item,index)=>{
        
        // 日志2
        let temp = [];
        Object.assign(temp,all);
        temp[index]=`<span style="color:red">${item}</span>`


        stackLog.push( "<h4>"+ temp.join("")+"</h4>" );


        // 判断是操作符还是
        if(item in operators)
        {
            // 如果优先级小于栈顶的，就清空栈
            console.log(`操作符比较: ${operators[item]} vs ${ operators[topOperator]}`);

            // 小于等于 ，如果遇到相同优先级的 1+2*3/2 会先计算2*3=6 6+1=7 7/2=3.5 显然不对，应该是2*3/2=3 3+1=4
            if(operators[item]<operators[topOperator])
            {
                // 清空操作符栈
                emptyStack(operatorsStack,numbersStack,stackLog);
               
                operatorsStack.push(item);
            }
            // 大于直接加入到栈
            else{
                operatorsStack.push(item);
            }
            topOperator=item;

        }
        else{
            // 整数直接添加到栈
            numbersStack.push(item);
        }


        stackLog.push("操作数:"+numbersStack.join(" "));
        stackLog.push("操作符:"+operatorsStack.join(" "));


    });

    // 循环后栈里，还有一个操作符
    emptyStack(operatorsStack,numbersStack,stackLog);

    console.log("计算玩后栈情况:");
    console.log(operatorsStack);
    console.log(numbersStack);
    console.log("-----------------计算完成--------------");
    stackLog.push("输入框清空后，连续输入666666可领取神秘大礼一份");
    // 返回字符串
    return {
        stackLog:stackLog,
        result:""+numbersStack.pop()};

}

export default caculate;
//module.exports=caculate;