//const url='https://script.google.com/macros/s/AKfycbze6vsJrLc8RoyfkB02pvsEird4O7dpJlcGTKrpYm30pcQJ_fYWOnuYohVbthpgIFw6/exec';
// const url='https://script.google.com/macros/s/AKfycbzitewEQaDHGukiYJhIrZgMS_i61SrdnoK1ejCeQAgWnPZm76l5eHSozO-09Dy95kxD/exec';           
const url='https://script.google.com/macros/s/AKfycby65G035j2bmhEtp3AUnRQS7vT9Uv74HHrtYCJr3y5aXw7JkdKof65RUqRqMrZ9CKPSPw/exec';
           




function QueryString(qStr){
    const val=qStr;
	//alert(val);
    const url_parameter=`${url}?SchoolName=${val}`;
    //console.log('click');
    console.log(url_parameter);
    const formData=new FormData();

    fetch(url_parameter,{
        method:'POST',
        body:formData
    })
    .then(res =>res.json())   // 把request json化, 使用 json() 可以得到 json 物件.then(result => {
    //https://www.youtube.com/watch?v=0No2n9UTxUc
    .then(data=>{
		const schName=`${data.Name}`;
        console.log(data); 
        //alert(schName);   				
		//if(schName == undefined){
		//	alert("找不到...");
		//    schName="無法帶入資料，請自行輸入學校資料";
		//}
		
		document.getElementById("Name").value=`${data.Name}`;  //帶入填報人姓名
		document.getElementById("PhoneNO").value=`${data.PhoneNO}`;  //帶入填報人姓名	
		document.getElementById("Email").value=`${data.Site}`;  //帶入填報人電子郵件	
		
		

     });
      
}


function addData(data1){
    data1.forEach(person=>{
         console.log(person);            
    })
}
