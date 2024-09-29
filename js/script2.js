function calculateBMI() {
    let height = document.getElementById('height').value / 100; // Convert cm to m
    let weight = document.getElementById('weight').value;
    // Perbaikan: Langsung mendapatkan value dari radio button yang terpilih
    let genderRadio = document.querySelector('input[name="gender"]:checked');
    // Penyesuaian: Tidak perlu menggunakan `.value` pada `genderRadio` saat kondisional karena `genderRadio` mungkin null
    let gender = genderRadio ? genderRadio.value : 'tidak diketahui';
    let bmiResult = document.getElementById('bmiResult');
    let bmiExplanation = document.getElementById('bmiExplanation');
    let bmiExplanation2 = document.getElementById('bmiExplanation2');
    let genderResult = document.getElementById('genderResult');

    // Menggunakan template literal untuk menampilkan gender
    let hasil = `Gender: ${gender}`;

    genderResult.innerHTML = hasil;
    genderResult.style.marginBottom = "20px";

    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let resultText = `${bmi} <br>`;
        
        bmiResult.innerHTML = resultText;
        
        if (bmi < 18.5) {
            bmiExplanation.innerHTML = "Kekurangan Berat Badan";
            bmiExplanation2.innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan kurang atau tergolong kurus. Hasil ini berdasarkan angka BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda membutuhkan asupan kalori tambahan sebanyak 300-500 kkal per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.";
            bmiExplanation.style.color = "#FFA500"; // Oranye, contoh untuk underweight
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiExplanation.innerHTML = "Normal (ideal)";
            bmiExplanation2.innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memliki berat badan normal. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 18.5 sampai 24.9. Memiliki berat badan ideal bisa menjadi salah satu cara untuk menjaga kesehatan tubuh secara keseluruhan. Anda juga bisa terhindar dari berbagai risiko penyakit berbahaya.";
            bmiExplanation.style.color = "green"; // Hijau untuk normal
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiExplanation.innerHTML = "Kelebihan Berat Badan";
            bmiExplanation2.innerHTML = "Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan berlebih atau gemuk. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 25 sampai 29.9. Sebagai solusinya, Anda harus mengurangi asupan asupan kalori harian sekitar 300-500 kkal. Mulai sekarang coba lebih perhatikan kalori dari makanan dan minuman yang Anda konsumsi.";
            bmiExplanation.style.color = "#FFC107"; // Kuning, contoh untuk overweight
        } else {
            bmiExplanation.innerHTML = "Kegemukan (obesitas)";
            bmiExplanation2.innerHTML = "Hasil perhitungan menunjukkan bahwa Anda tergolong obesitas. Hasil ini berdasarkan angka BMI Anda lebih dari 30. Perlu diketahui bahwa obesitas lebih parah daripada gemuk. Seseorang yang gemuk belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan gemuk. Jika dibiarkan, bisa berisiko menderita berbagai penyakit serius.";
            bmiExplanation.style.color = "red"; // Merah untuk obesitas
        }
        document.getElementById('resultContainer').classList.remove('hidden');
    } else {
        alert("Harap masukkan tinggi dan berat badan yang valid.");
        bmiResult.innerHTML = "";
        bmiExplanation.innerHTML = "";
        genderResult.innerHTML = ""; // Menambahkan reset untuk genderResult juga
    }
}


document.getElementById('konsultasibtn').onclick=function(){
    window.location.href='https://www.halodoc.com/tanya-dokter';
}



document.getElementById('resetButton').addEventListener('click', function() {
    // Reset form values
    document.getElementById('BMIform').reset();

    document.getElementById('bmiResult').innerHTML = "";
    document.getElementById('bmiExplanation').innerHTML = "";
    document.getElementById('bmiExplanation').style.color = '';
    

    // Hide the result container again
    document.getElementById('resultContainer').classList.add('hidden');
});
