const url='https://script.google.com/macros/s/AKfycbxpv00JQLhKWnIWzn8QtWX1s0mrjkThBp-Yj2bTJXPLCJKf2V-scVtw-0EJINIA4PJ3Rw/exec';

function QueryString(qStr){
    //alert("Enter in QueryString");https://script.google.com/macros/s/AKfycbxpv00JQLhKWnIWzn8QtWX1s0mrjkThBp-Yj2bTJXPLCJKf2V-scVtw-0EJINIA4PJ3Rw/exec
    const val=qStr;
	//alert(val);
    const url_parameter=`${url}`;
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
	//const schAmount=`${data.DateTime}`;
        const total = Object.keys(data).length;  //計算共有幾筆已填報的資料,https://stackoverflow.com/questions/15209136/how-to-count-length-of-the-json-array-element
        //console.log(data); 

        //document.getElementById("ReportList").innerHTML+=`學校名稱   填報時間<br>`;  //帶入填報人姓名
        document.getElementById("ReportList").innerHTML=``;         for( i=1;i<=total;i++){
            document.getElementById("ReportList").innerHTML+=`<button class="btn-outline-danger">${data[i].SchoolName}</button>&nbsp;&nbsp<button>${data[i].DateTime}</button><br>`;  //帶入填報人姓名
            //document.getElementById("ReportList").innerText+=`${data[i].SchoolName} ${data[i].DateTime}`;  //帶入填報人姓名
            //document.getElementById("ReportList").innerHTML = "<br>";
        }
		
     });
      
}


