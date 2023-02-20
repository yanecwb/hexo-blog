/*页面载入完成后，创建复制按钮*/
!function (window) {
    window.onload = ()=>{
        const btnCopyAll = document.querySelectorAll('.copy-btn')
        Array.from(btnCopyAll).forEach(btnCopy=>{
            btnCopy.onmousedown = function(){
                alert('复制成功')
                console.log('复制成功');
            }
        })
    }
  }(window);