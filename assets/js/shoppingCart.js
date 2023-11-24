/*
 * @Author: hdw-Qi 2799213883@qq.com
 * @Date: 2023-11-22 16:35:26
 * @LastEditors: hdw-Qi 2799213883@qq.com
 * @LastEditTime: 2023-11-22 21:27:39
 * @FilePath: \code\assets\js\shoppingCart.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
$(function () {
    addCart()
    checkAll()
    numberReduce()
    numberIncrease()
    deleteOne()
    deleteCheck()
    getTotal()
})
function addElement() {
    let cart=$('.cart')
    let row=$('<div class="row"></div>')
    for (var i = 0; i < 6; i++) {
        switch(i){
            case 0 :{
                let column_1=$('<div class="column-1"></div>')
                let checkbox=$('<input type="checkbox" name="" class="checkBuy">')
                column_1.append(checkbox)
                row.append(column_1)
                break
            }
            case 1 :{
                let column_4=$('<div class="column-4"></div>')
                column_4.text($('#info').val())
                row.append(column_4)
                break
            }
            case 2 :{
                let column_2=$('<div class="column-2"></div>')
                column_2.text($('#price').val())
                row.append(column_2)
                break
            }
            case 3 :{
                let column_2=$('<div class="column-2"></div>')
                let span=$('<span></span>')
                
                
                if(parseInt($('#number').val())==1){
                    let one=$('<button type="button" class="reduce" disabled>-</button>')
                    column_2.append(one)
                    span.text($('#number').val())
                    one.after(span)
                }else{
                    let reduce=$('<button type="button" class="reduce">-</button>')
                    column_2.append(reduce)
                    span.text($('#number').val())
                    reduce.after(span)
                }
                
                
                
                let increase=$('<button type="button" class="increase">+</button>')
                column_2.append(increase)
                row.append(column_2)
                break
            }
            case 4 :{
                let column_2=$('<div class="column-2"></div>')
                let num=parseInt($('#number').val())
                let price=parseInt($('#price').val())
                let span=$('<span class="buyPrice"></span>')
                span.text(num*price)
                column_2.append(span)
                row.append(column_2)
                break
            }
            case 5 :{
                let final_column_2=$('<div class="final-column-2"></div>')  
                let del = $('<button type="button" class="delete">删除</button>')
                final_column_2.append(del)
                row.append(final_column_2)
                break
            }
        }
    }
    cart.append(row)
    numberReduce()
    numberIncrease()
    deleteOne()
    deleteCheck()
    getTotal()
}
function addCart() {
    $('#add').click(addElement)
    
}
function checkAll(){
    $('#checkAll').click(()=>{
        // let check=$('.checkBuy')
        // let all=$('#checkAll')
        // if(check.attr('checked')){
        //     check.removeAttr('checked')
        // }else{
        //     check.attr('checked','true')
        // }
        let check=$('.checkBuy')
        let all=$('#checkAll')
        if(all.prop('checked')){
            check.prop('checked',true)
        }else{
            check.prop('checked',false)
        }
    })
}
function getCheck() {
    
}
function numberReduce() {
    $('.reduce').click(function(){
        let number=$(this).next().text()
        // console.log(number);
        if(parseInt(number)>1){
            var reduce=parseInt(number)-1
            $(this).next().text(reduce)
        }else{
            $(this).attr('disabled','true')
        }
        // console.log(reduce);
        let price=parseInt($(this).parent('div').prev().text())
        $(this).parent('div').next().text((reduce ?? 1)*price)



    })
}
function numberIncrease() {
    $('.increase').click(function(){
        let number=$(this).prev().text()
        // console.log($(this).prev().prev().prop('disabled'));
        let increase=parseInt(number)+1
        $(this).prev().text(increase)
        if($(this).prev().prev().prop('disabled')){
            $(this).prev().prev().removeAttr('disabled')
        }
        let price=parseInt($(this).parent('div').prev().text())
        $(this).parent('div').next().text((increase ?? 1)*price)

    })
}
function deleteOne(){
    $('.delete').click(function(){
        // console.log($(this).parent('div').parent('div').parent('div'));
        // console.log($(this).parent('div').parent('div'));
        let check=$(this).parent('div').parent('div')
        check.remove()
        $('#checkAll').prop('checked',false)
    })
}
function deleteCheck() {
    $('#batchDel').click(function () {
        $('.checkBuy').each(function (index,element) {
            if(element.checked){
                // console.log($(element).parent('div').parent('div'));
                $(element).parent('div').parent('div').remove()
            }
        })
        $('#checkAll').prop('checked',false)
    })
}
function getTotal(){
    function total() {
        let total=0
        $('.checkBuy').each(function (index,element) {
            if(element.checked){
                console.log($(element).parent('div').next().next().next().next().text());
                total+=parseInt($(element).parent('div').next().next().next().next().text())
            }else{
                
            }
        })
        $('#total').text(total)
    }
    $('.checkBuy,#checkAll').change(total)
    $('#batchDel,.delete,.reduce,.increase').click(total)
}


