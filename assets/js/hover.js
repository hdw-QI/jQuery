/*
 * @Author: hdw-Qi 2799213883@qq.com
 * @Date: 2023-11-22 14:55:19
 * @LastEditors: hdw-Qi 2799213883@qq.com
 * @LastEditTime: 2023-11-22 16:29:07
 * @FilePath: \code\assets\js\hover.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
$(()=>{
    $('.tip').mouseover(
        function(){
            console.log(this);
            $(this).addClass('over')
        }
        // ()=>{
        //     console.log($(this));
        //     $(this).addClass('over')
        // }
        )
    $('.tip').mouseout(
        function() {
            $(this).removeClass('over')
        }
    )
})