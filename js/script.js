function calculateBMI(){
    let height = document.getElementById('height').value/100; //convert cm to m
    let weight = document.getElementById('weight').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    //let explanation = " ";
    if(height>0 && weight>0){
        let bmi = (weight/(height*height)).toFixed(2);
        let resultText = `${bmi}`;
        let explanation, explanation2 = " ";
        if(bmi<18.5){
            explanation="Kekurangan Berat Badan";
        } else if(bmi>18.5 && bmi<24.9){
            explanation="Normal (ideal)";
            explanation2="Hasil perhitungan menunjukkan bahwa Anda memliki berat badan normal. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 18.5 sampai 24.9. Memiliki berat badan ideal bisa menjadi salah satu cara untuk menjaga kesehatan tubuh secara keseluruhan. Anda juga bisa terhindar dari berbagai risiko penyakit berbahaya. Cara menjaga berat badan ideal adalah dengan mengatur pola makan dan melakukan olahraga rutin. Pada intinya, Anda harus tetap menjalankan pola hidup sehat. Pastikan untuk selalu menyeimbangkan antara energi yang masuk dengan energi yang dikeluarkan.";
        } else if(bmi>25 && bmi<29.9){
            explanation="Kelebihan Berat Badan";
        } else{
            explanation="Kegemukan (obesitas)";
        }

        document.getElementById('bmiResult').innerHTML=resultText;
        document.getElementById('bmiExplanation').innerHTML=explanation;
        document.getElementById('bmiExplanation2').innerHTML=explanation2;

        document.getElementById('resultContainer').classList.remove('hidden');
        document.getElementById('BMIdesc').innerHTML=bmi;
    }else{
        alert("Data tidak valid");
    }
}

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset form values
    document.getElementById('BMIform').reset();

    // Hide the result container again
    document.getElementById('resultContainer').classList.add('hidden');
});
