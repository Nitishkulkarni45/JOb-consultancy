const excel_file = document.getElementById('excel_file');

excel_file.addEventListener('change', (event) => {
    var reader = new FileReader();
    reader.readAsArrayBuffer(event.target.files[0]);
    reader.onload = function (event) {
        var data = new Uint8Array(reader.result);
        var work_book = XLSX.read(data, { type: 'array' });
        var sheet_name = work_book.SheetNames;
        var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], { header: 1 });
        if (sheet_data.length > 0) {
            var table_output = '<table class = "table table-striped table-bordered">';
            for (var row = 0; row < sheet_data.length; row++) {
                table_output += '<tr>';
                for (var cell = 0; cell < sheet_data[row].length; cell++) {
                    table_output += '<td>' + sheet_data[row][cell] + '</td>';
                }

                table_output += '</tr>';
            }
            table_output += '</table>';

            document.getElementById('excel_data').innerHTML = table_output;
            
            
        }
    }
});
const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('excel_data');
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td1 = tr[i].getElementsByTagName('td')[2];
        let td2 = tr[i].getElementsByTagName('td')[3];
        if (td1) {
            let textvalue1 = td1.textContent || td1.innerHTML;
            if (textvalue1.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else if (td2) {
                let textvalue2 = td2.textContent || td2.innerHTML;
                if (textvalue2.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
                //    git add . then git commit -m "message" then git push origin master
            }
        }
    }
}

const searchFunimp = () => {
    let filter = document.getElementById('myInputimp').value.toUpperCase();
    let myTable = document.getElementById('excel_data');
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        let td3 = tr[i].getElementsByTagName('td')[7];
        if (td3) {
            let textvalue1 = td3.textContent || td3.innerHTML;
            if (textvalue1.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                 tr[i].style.display = "none";
            }
                //    git add . then git commit -m "message" then git push origin master
            
        }
    }
}