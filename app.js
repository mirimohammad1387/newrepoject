$(document).ready(function() {
    const inpSearch = $('.inp-search');

    inpSearch.on('input', function() {
        let inpVal = inpSearch.val().toLowerCase(); // تبدیل به حروف کوچک برای تطبیق حساس به حروف
        let rows = $('.table2 tbody tr');

        rows.each(function(index, row) {
            row.classList.add('hide');

            let td1 = row.children[0].textContent.toLowerCase();
            let td2 = row.children[1].textContent.toLowerCase();
            let td3 = row.children[2].textContent.toLowerCase();

            if (td1.includes(inpVal) || td2.includes(inpVal) || td3.includes(inpVal)) {
                row.classList.remove('hide');
            }
        });
    });

    let myalerte = document.querySelector('.my-alerte')
    $('.btn-sub').click(function() {

        let inplname = $('.inp-lname').val();
        let inpfname = $('.inp-fname').val();
        let inpnumber = $('.inp-number').val();



        if(inplname=='' || inplname==' ' || inpnumber==''  ){

            myalerte.classList.add('alert','alert-danger')
            myalerte.textContent='پر کردن تمام فیلد ها اجباریست'
            setTimeout(function(){
                myalerte.classList.remove('alert','alert-danger')
                myalerte.textContent=''
                        },3000)
        }else{

        $('.table2 tbody').append(`
            <tr>
                <td>${inplname}</td>
                <td>${inpfname}</td>
                <td>${inpnumber}</td>
            </tr>
        `)}
    })
});
