function listproduct() {
    product.forEach(a => {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img class="card-img-top" src="' + a.img + 'alt="Card image cap">';
        demo += '<div class="card-body">'
        demo += '<h5 class="card-title">' + a.Name + '</h5>';
        demo += '<p class="card-text">' + a.Price + '</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="datmua()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        document.getElementById('banh').innerHTML += demo;
    });
    products.forEach(item => {
        var demos = '<div class="col-3">';
            demos +='<div class="card" style="width: 18rem;">';
                demos +='<img class="card-img-top" src="' +item.img+' alt="Card image cap">'; 
                demos += '</div>';
                demos += '</div>';
                demos +='</div>';
                console.log(demos);
                document.getElementById('kem').innerHTML += demos;
            });
        }
    function datmua() {
        alert("Đặt mua thành công !")
    }



  
