window.onload = function() {
    fetchData();
};

function fetchData() {
    var url = "https://apigw.vakifbank.com.tr:8443";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var altinFiyatlariDiv = document.getElementById("altinFiyatlari");
        var goldRateData = data.Data.GoldRate;

        var html = "<ul>";
        for (var i = 0; i < goldRateData.length; i++) {
            var productName = goldRateData[i].ProductName;
            var saleRate = goldRateData[i].SaleRate;
            var purchaseRate = goldRateData[i].PurchaseRate;

            html += `<li>${productName} - Alış: ${purchaseRate} TL, Satış: ${saleRate} TL</li>`;
        }
        html += "</ul>";

        altinFiyatlariDiv.innerHTML = html;
    })
    .catch(error => {
        console.error("Veri çekme hatası:", error);
    });
}
