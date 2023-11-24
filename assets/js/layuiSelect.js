
layui.use(["layer", "jquery", "form"], function () {
  var layer = layui.layer,
    $ = layui.jquery,
    form = layui.form;

    getProvinceElement(form,$('#provid'))
    
    let provice;
    let area;
/* 
layui使用官方的表单模块form.on('submit(sub)',function (){}) 提交，使用ajax请求向后台请求一个执行结果，根据结果进行处理，出现回调无法执行，并且页面出现了刷新
解决：百度（面向百度编程）之后发现原因是当button的type为submit的使用，页面会自动刷新，而我们并不希望他刷新。
*/

  form.on("select(provid)", function (data) {
    // "select(provid)"中的select是submit、radio等元素（就是input的type和另外的select、textareea），provid为lay-filter=" "里面的值
    //这里做自己想做的事情
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    console.log(data.othis); //得到美化后的DOM对象
    console.log($(data.elem));
    
    provice=data.value
    getCity(form,$('#cityid'),provice)

    //最后再渲柒一次
    form.render("select"); //select是固定写法 不是选择器
  });
  form.on("select(cityid)", function (data) {
    //这里做自己想做的事情
    console.log(data.elem); //得到select原始DOM对象
    console.log(data.value); //得到被选中的值
    console.log(data.othis); //得到美化后的DOM对象
    console.log($(data.elem));

    area=data.value
    getArea(form,$('#areaid'),provice,area)

    //最后再渲柒一次（不渲染会出现有数据，但不显示的情况）
    form.render("select"); //select是固定写法 不是选择器
  });
});

function getProvinceElement(form,select) {
    provinces.provinces.forEach((e)=>{
        let option=$('<option></option>')
        option.attr('value',e.provinceName)
        option.text(e.provinceName)
        $(select).append(option)
    })
    //最后再渲柒一次
    form.render("select")
}
function getCity(form,select,selected) {
    select.html('<option value="">请选择市</option>')
    provinces.provinces.forEach((e)=>{
        if(selected==e.provinceName){
            e.city.forEach((c)=>{
                let option=$('<option></option>')
                option.attr('value',c.cityName)
                option.text(c.cityName)
                $(select).append(option)
            })
        }
    })
    //最后再渲柒一次
    form.render("select")
}
function getArea(form,select,selectedProvice,selectedCity) {
    select.html('<option value="">请选择县/区</option>')
    provinces.provinces.forEach((e)=>{
        if(selectedProvice==e.provinceName){
            e.city.forEach((c)=>{
                if(selectedCity==c.cityName){
                    c.area.forEach((a)=>{
                        let option=$('<option></option>')
                        option.attr('value',a.areaName)
                        option.text(a.areaName)
                        $(select).append(option)
                    })
                }
                
            })
        }
    })
    //最后再渲柒一次
    form.render("select")
}
let provinces = {
  provinces: [
    {
      provinceName: "四川省",
      city: [
        {
          cityName: "成都",
          area: [
            {
              areaName: "青阳",
            },
            {
              areaName: "高新",
            },
          ],
        },
        {
          cityName: "德阳",
          area: [
            {
              areaName: "青阳1",
            },
            {
              areaName: "高新2",
            },
          ],
        },
        {
          cityName: "绵阳",
          area: [
            {
              areaName: "绵阳1",
            },
            {
              areaName: "绵阳2",
            },
          ],
        },
        {
          cityName: "南充",

          area: [
            {
              areaName: "南充1",
            },
            {
              areaname: "南充2",
            },
          ],
        },
      ],
    },
    {
      provinceName: "重庆市",
      city: [
        {
          cityName: "重庆市",
          area: [
            {
              areaName: "渝北区",
            },
            {
              areaName: "开州区",
            },
          ],
        },
      ],
    },
  ],
};
