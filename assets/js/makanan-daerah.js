function showRecipe(food) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupBody = document.getElementById("popup-body");

  if (food === "nasi-liwet") {
    popupTitle.innerHTML = "Resep Nasi Liwet";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>2 cup beras</li>
        <li>2 batang serai, memarkan</li>
        <li>3 lembar daun salam</li>
        <li>4 siung bawang merah, iris tipis</li>
        <li>3 siung bawang putih, iris tipis</li>
        <li>100 gram ikan teri (opsional)</li>
        <li>1 sendok teh garam</li>
        <li>1 sendok teh kaldu bubuk (opsional)</li>
        <li>Air secukupnya</li>
        <li>2 sendok makan minyak goreng</li>
        <li>1 buah cabai merah (opsional)</li>
        <li>1 sendok teh gula merah (opsional)</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Panaskan minyak goreng di dalam panci, tumis bawang merah dan bawang putih hingga harum.</li>
        <li>Masukkan serai, daun salam, dan cabai merah. Tumis sebentar.</li>
        <li>Masukkan beras dan aduk rata hingga terbalut bumbu.</li>
        <li>Tambahkan air (sekitar 4-5 gelas) dan garam, masak dengan api kecil hingga air menyusut dan nasi matang.</li>
        <li>Jika menggunakan ikan teri, bisa ditambahkan beberapa menit sebelum nasi matang, lalu aduk rata.</li>
        <li>Setelah nasi matang, angkat dan sajikan nasi liwet bersama lauk-pauk seperti ikan asin, tempe goreng, tahu, sambal, dan lalapan.</li>
      </ol>
      <p>Selamat menikmati Nasi Liwet khas Sunda yang gurih dan lezat!</p>
    `;
  } else if (food === "surabi") {
    popupTitle.innerHTML = "Resep Surabi";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>250 gram tepung terigu</li>
        <li>50 gram tepung beras</li>
        <li>1 sendok teh ragi instan</li>
        <li>1 sendok teh gula pasir</li>
        <li>1/2 sendok teh garam</li>
        <li>200 ml air hangat</li>
        <li>2 sendok makan minyak goreng</li>
        <li>1 sendok teh daun bawang cincang (opsional)</li>
        <li>Taburan topping: kelapa parut, gula merah serut, atau selai kacang</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Campurkan tepung terigu, tepung beras, ragi, gula, dan garam dalam sebuah wadah.</li>
        <li>Tambahkan air sedikit-sedikit sambil diaduk hingga adonan tercampur rata.</li>
        <li>Diamkan adonan selama 30 menit hingga mengembang.</li>
        <li>Panaskan cetakan surabi di atas api kecil, oleskan sedikit minyak goreng pada cetakan.</li>
        <li>Tuang adonan ke dalam cetakan dan tutup. Masak hingga bagian bawah surabi kecokelatan dan atasnya matang.</li>
        <li>Angkat surabi, beri topping sesuai selera seperti kelapa parut atau gula merah serut.</li>
      </ol>
      <p>Selamat menikmati Surabi Khas Bandung yang kenyal dan lezat!</p>
    `;
  } else if (food === "soto-bandung") {
    popupTitle.innerHTML = "Resep Soto Bandung";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>500 gram daging sapi, potong dadu</li>
        <li>1 batang serai, memarkan</li>
        <li>2 lembar daun salam</li>
        <li>5 siung bawang putih, iris tipis</li>
        <li>5 siung bawang merah, iris tipis</li>
        <li>2 cm jahe, memarkan</li>
        <li>2 sendok makan kecap manis</li>
        <li>2 sendok teh garam</li>
        <li>1 sendok teh merica bubuk</li>
        <li>2 liter air</li>
        <li>5 buah tomat, potong-potong</li>
        <li>Daun bawang, seledri, dan bawang goreng untuk taburan</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Rebus daging sapi dalam air mendidih hingga empuk, buang buihnya.</li>
        <li>Panaskan minyak goreng dalam wajan, tumis bawang merah, bawang putih, serai, daun salam, dan jahe hingga harum.</li>
        <li>Masukkan bumbu yang sudah ditumis ke dalam rebusan daging sapi, tambahkan kecap manis, garam, dan merica. Aduk rata.</li>
        <li>Rebus kembali hingga bumbu meresap ke dalam daging, tambahkan tomat dan masak hingga tomat layu.</li>
        <li>Sajikan soto Bandung dengan taburan daun bawang, seledri, dan bawang goreng. Nikmati dengan nasi putih hangat atau ketupat.</li>
      </ol>
      <p>Selamat menikmati Soto Bandung yang gurih dan segar!</p>
    `;
  } else if (food === "gudeg") {
    popupTitle.innerHTML = "Resep Gudeg";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>1 kg nangka muda, potong-potong</li>
        <li>500 ml santan kental</li>
        <li>3 lembar daun salam</li>
        <li>2 batang serai, memarkan</li>
        <li>5 siung bawang merah, iris tipis</li>
        <li>3 siung bawang putih, iris tipis</li>
        <li>3 buah cabai merah besar, iris</li>
        <li>1 sendok teh ketumbar bubuk</li>
        <li>1 sendok teh jintan bubuk</li>
        <li>5 sendok makan gula merah serut</li>
        <li>1 sendok teh garam</li>
        <li>1 sendok teh kaldu bubuk (opsional)</li>
        <li>Minyak goreng secukupnya</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Rebus nangka muda dengan daun salam dan serai hingga empuk.</li>
        <li>Dalam wajan, tumis bawang merah, bawang putih, dan cabai hingga harum.</li>
        <li>Tambahkan ketumbar, jintan, gula merah, garam, dan kaldu bubuk, aduk rata.</li>
        <li>Masukkan santan kental dan aduk perlahan. Masak hingga santan mengental dan bumbu meresap.</li>
        <li>Tambahkan nangka muda yang sudah direbus, masak dengan api kecil hingga bumbu meresap.</li>
        <li>Gudeg siap disajikan dengan nasi putih dan lauk pelengkap seperti ayam opor atau tempe bacem.</li>
      </ol>
      <p>Selamat menikmati Gudeg yang manis dan gurih!</p>
    `;
  } else if (food === "lumpia-semarang") {
    popupTitle.innerHTML = "Resep Lumpia Semarang";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>10 lembar kulit lumpia</li>
        <li>200 gram daging ayam cincang</li>
        <li>100 gram udang cincang (opsional)</li>
        <li>100 gram tauge, cuci bersih</li>
        <li>1 batang wortel, serut halus</li>
        <li>2 siung bawang putih, cincang halus</li>
        <li>1 sendok teh kecap manis</li>
        <li>1 sendok teh saus tiram</li>
        <li>1 sendok teh garam</li>
        <li>Minyak goreng secukupnya</li>
        <li>Air untuk merekatkan kulit lumpia</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Tumis bawang putih hingga harum, lalu masukkan ayam cincang dan udang (jika pakai), tumis hingga matang.</li>
        <li>Tambahkan wortel, tauge, kecap manis, saus tiram, dan garam. Aduk rata dan masak hingga sayuran sedikit layu.</li>
        <li>Tiriskan dan biarkan adonan isi sedikit dingin.</li>
        <li>Ambil selembar kulit lumpia, beri isi secukupnya, lalu lipat kedua sisi kulit lumpia dan gulung rapat. Rekatkan ujungnya dengan air.</li>
        <li>Panaskan minyak, goreng lumpia hingga kuning keemasan dan krispi.</li>
        <li>Sajikan lumpia Semarang dengan saus sambal atau saus kacang.</li>
      </ol>
      <p>Selamat menikmati Lumpia Semarang yang renyah dan lezat!</p>
    `;
  } else if (food === "tempe-mendoan") {
    popupTitle.innerHTML = "Resep Tempe Mendoan";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>1 papan tempe, potong tipis</li>
        <li>100 gram tepung terigu</li>
        <li>50 gram tepung beras</li>
        <li>1 sendok teh ketumbar bubuk</li>
        <li>1/2 sendok teh garam</li>
        <li>1/4 sendok teh lada bubuk</li>
        <li>150 ml air matang</li>
        <li>Daun bawang secukupnya, iris halus</li>
        <li>Minyak goreng secukupnya</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Campurkan tepung terigu, tepung beras, ketumbar, garam, lada, dan daun bawang dalam wadah.</li>
        <li>Tambahkan air sedikit-sedikit hingga adonan tercampur rata dan memiliki kekentalan yang pas.</li>
        <li>Panaskan minyak dalam wajan, celupkan potongan tempe ke dalam adonan tepung.</li>
        <li>Goreng tempe hingga kedua sisi berwarna kecokelatan dan garing.</li>
        <li>Angkat dan tiriskan tempe mendoan, sajikan dengan sambal kecap atau cabai rawit.</li>
      </ol>
      <p>Selamat menikmati Tempe Mendoan yang renyah dan gurih!</p>
    `;
  } else if (food === "bakpia") {
    popupTitle.innerHTML = "Resep Bakpia";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>250 gram tepung terigu</li>
        <li>50 gram tepung tapioka</li>
        <li>1 sendok makan mentega</li>
        <li>100 gram gula pasir</li>
        <li>1 butir telur</li>
        <li>150 ml air matang</li>
        <li>500 gram kacang hijau kupas, kukus</li>
        <li>100 gram gula pasir (untuk isian)</li>
        <li>1 sendok teh vanili bubuk</li>
        <li>Minyak goreng secukupnya</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Campurkan tepung terigu, tepung tapioka, dan mentega. Tambahkan gula pasir dan telur, aduk rata.</li>
        <li>Tambahkan air sedikit-sedikit hingga adonan bisa dipulung. Diamkan selama 30 menit.</li>
        <li>Untuk isian, haluskan kacang hijau kukus, campurkan dengan gula pasir dan vanili bubuk, aduk rata.</li>
        <li>Ambil sejumput adonan kulit, pipihkan, beri isian kacang hijau, lalu bulatkan dan rapatkan.</li>
        <li>Panaskan minyak dalam wajan, goreng bakpia hingga kecoklatan dan matang.</li>
        <li>Angkat dan tiriskan, bakpia siap disajikan.</li>
      </ol>
      <p>Selamat menikmati Bakpia yang manis dan gurih!</p>
    `;
  } else if (food === "sate-klathak") {
    popupTitle.innerHTML = "Resep Sate Klathak";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>500 gram daging kambing, potong dadu</li>
        <li>2 sendok makan kecap manis</li>
        <li>2 sendok makan minyak goreng</li>
        <li>1 sendok teh garam</li>
        <li>1 sendok teh merica bubuk</li>
        <li>5 siung bawang putih, cincang halus</li>
        <li>2 batang serai, memarkan</li>
        <li>2 lembar daun salam</li>
        <li>1 sendok makan air asam jawa</li>
        <li>2 sendok makan air jeruk nipis</li>
        <li>5 batang tusuk sate</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Campurkan kecap manis, minyak goreng, garam, merica, bawang putih, serai, daun salam, air asam jawa, dan air jeruk nipis dalam wadah. Aduk rata.</li>
        <li>Masukkan potongan daging kambing ke dalam marinasi, aduk rata dan diamkan selama 30 menit agar bumbu meresap.</li>
        <li>Tusukkan daging kambing ke tusuk sate, lalu panggang sate di atas arang atau grill hingga matang dan berwarna kecoklatan.</li>
        <li>Angkat dan sajikan dengan sambal kecap atau saus sambal.</li>
      </ol>
      <p>Selamat menikmati Sate Klathak yang khas dan lezat!</p>
    `;
  } else if (food === "sego-kucing") {
    popupTitle.innerHTML = "Resep Sego Kucing";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>2 cup beras putih</li>
        <li>2 lembar daun salam</li>
        <li>2 batang serai, memarkan</li>
        <li>1 sendok teh garam</li>
        <li>400 ml air kelapa</li>
        <li>2 sendok makan minyak goreng</li>
        <li>100 gram ikan teri, goreng</li>
        <li>2 buah cabai merah, iris halus</li>
        <li>1 sendok teh kecap manis</li>
        <li>1 sendok teh bawang goreng</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Cuci beras hingga bersih, tiriskan. Masak beras dengan daun salam, serai, garam, dan air kelapa hingga matang.</li>
        <li>Panaskan minyak, tumis cabai merah hingga harum, tambahkan ikan teri dan kecap manis. Aduk rata.</li>
        <li>Setelah nasi matang, angkat dan sajikan dengan ikan teri bumbu, taburan bawang goreng di atasnya.</li>
        <li>Sego Kucing siap disajikan sebagai lauk atau camilan khas Jogja!</li>
      </ol>
      <p>Selamat menikmati Sego Kucing yang lezat dan sederhana!</p>
    `;
  } else if (food === "rawon") {
    popupTitle.innerHTML = "Resep Rawon";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>500 gram daging sapi, potong dadu</li>
        <li>2 liter air</li>
        <li>2 sendok makan minyak goreng</li>
        <li>1 sendok teh garam</li>
        <li>1 sendok teh gula pasir</li>
        <li>3 sendok makan kecap manis</li>
        <li>1 sendok teh ketumbar bubuk</li>
        <li>1 sendok teh merica bubuk</li>
        <li>4 siung bawang putih, cincang halus</li>
        <li>5 butir bawang merah, iris halus</li>
        <li>2 batang serai, memarkan</li>
        <li>1 lembar daun salam</li>
        <li>1 cm jahe, memarkan</li>
        <li>1 sendok makan kluwek (diperas airnya)</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Tumis bawang merah, bawang putih, jahe, serai, dan daun salam dengan minyak hingga harum.</li>
        <li>Masukkan potongan daging sapi, aduk hingga daging berubah warna.</li>
        <li>Tambahkan air, garam, gula pasir, ketumbar, merica, dan kluwek. Masak hingga daging empuk dan kuah berwarna hitam pekat.</li>
        <li>Tambahkan kecap manis, aduk rata, dan masak sebentar.</li>
        <li>Angkat dan sajikan rawon panas dengan nasi dan pelengkap seperti taoge, sambal, dan kerupuk.</li>
      </ol>
      <p>Selamat menikmati Rawon khas Surabaya yang kaya rasa!</p>
    `;
  } else if (food === "pecel-madiun") {
    popupTitle.innerHTML = "Resep Pecel Madiun";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>200 gram kacang tanah, goreng</li>
        <li>3 siung bawang putih</li>
        <li>3 buah cabai merah</li>
        <li>2 sendok makan air asam jawa</li>
        <li>1 sendok teh gula merah serut</li>
        <li>1 sendok teh garam</li>
        <li>200 gram sayur-mayur (kangkung, daun singkong, tauge, mentimun, dll)</li>
        <li>1 lembar daun pisang (untuk penyajian)</li>
        <li>1 sendok makan minyak goreng</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Haluskan kacang tanah, bawang putih, cabai merah, gula merah, dan garam dengan cobek atau blender hingga halus.</li>
        <li>Tambahkan air asam jawa, aduk rata hingga menjadi sambal pecel yang kental.</li>
        <li>Siapkan sayuran yang sudah direbus atau segar, lalu susun di atas daun pisang atau piring.</li>
        <li>Tuang sambal pecel di atas sayuran, aduk rata, dan sajikan.</li>
        <li>Pecel Madiun siap dinikmati dengan nasi putih hangat dan kerupuk.</li>
      </ol>
      <p>Selamat menikmati Pecel Madiun yang segar dan gurih!</p>
    `;
  } else if (food === "rujak-cingur") {
    popupTitle.innerHTML = "Resep Rujak Cingur";
    popupBody.innerHTML = `
      <strong>Bahan-bahan:</strong>
      <ul>
        <li>200 gram cingur sapi (bagian hidung sapi), rebus</li>
        <li>200 gram tempe, goreng</li>
        <li>200 gram tahu, goreng</li>
        <li>1 buah mentimun, iris tipis</li>
        <li>1 buah bengkuang, serut halus</li>
        <li>100 gram daun selada, iris tipis</li>
        <li>2 sendok makan petis udang</li>
        <li>5 buah cabai merah</li>
        <li>1 sendok teh gula merah serut</li>
        <li>1 sendok teh air asam jawa</li>
        <li>2 siung bawang putih</li>
        <li>1 sendok teh garam</li>
        <li>100 ml air matang</li>
      </ul>
      <strong>Langkah-langkah:</strong>
      <ol>
        <li>Haluskan petis udang, cabai merah, bawang putih, gula merah, garam, dan air asam jawa dengan cobek atau blender.</li>
        <li>Tambahkan sedikit air matang hingga bumbu menjadi sambal rujak yang kental.</li>
        <li>Siapkan cingur, tempe, tahu, mentimun, bengkuang, dan daun selada dalam mangkuk besar.</li>
        <li>Tuang sambal rujak di atas semua bahan, aduk rata hingga semua bahan terbalut sambal.</li>
        <li>Rujak Cingur siap disajikan. Nikmati dengan nasi putih atau ketupat!</li>
      </ol>
      <p>Selamat menikmati Rujak Cingur yang segar dan menggugah selera!</p>
      
    `;
  } else if (food === "ayam-betutu") {
    popupTitle.innerHTML = "Resep Ayam Betutu";
    popupBody.innerHTML = `
        <strong>Bahan-bahan:</strong>
        <ul>
          <li1 ekor ayam kampung (bersihkan dan sisihkan jerohannya)</li>
          <li>2 batang serai (memarkan)</li>
          <li>2 lembar daun salam</li>
          <li>Daun pisang (secukupnya)</li>
          <li>4 lembar daun jeruk</li>
          <li>Minyak goreng (secukupnya untuk menumis bumbu dan ayam</li>
          <li>2 15 buah cabai merah besar (buang isi)</li>
          <li>100 gram bawang merah</li>
          <li>6 cm kunyit</li>
          <li> 5 cm jahe</li>
          <li>5 butir kemiri</li>
          <li>5 cm lengkuas</li>
          <li>2 batang serai (bakar dulu dan ambil bagian batang yang putih saja)</li>
          <li>7 siung bawang putih</li>
          <li>1 sdt ketumbar</li>
          <li>1/2 sdt merica</li>
          <li>Garam (secukupnya, kira-kira 2 sdt)</li>
          <li>Gula (secukupnya)</li>
          <li>Kaldu ayam bubuk (secukupnya, agar rasa ayam betutu makin gurih)</li>
          
  
        </ul>
        <strong>Langkah-langkah:</strong>
        <ol>
          <li>Tumislah semua bumbu yang sudah dihaluskan hingga harum dan matang. Angkat, lalu sisihkan</li>
          <li>Lumuri daging ayam dengan bumbu yang ditumis sampai merata.</li>
          <li>gar daging ayam makin sedap dan gurih, bisa ditambahkan perasan air jeruk nipis dan sedikit garam sebelum melumurinya dengan bumbu.</li>
          <li>Bungkus daging ayam yang sudah dilumuri bumbu menggunakan daun pisang secukupnya.</li>
          <li>Tambahkan daun jeruk, daun salam dan batang serai agar rasa ayam betutu makin sedap.</li>
          <li>Jika ingin ayam betutu matang sempurna, setelah dibungkus daun pisang, bungkus lagi dengan aluminium foil.</li>
          <li>Kukus ayam di dalam dandang yang telah dipanaskan kira-kira selama 2 jam.</li>
          <li>Setelah selesai dikukus, panggang ayam betutu ke dalam oven dengan suhu 185 derajat Celcius kira-kira selama 30 menit.</li>
          <li>Angkat ayam dan sajikan bersama nasi putih, lalapan serta taburan bawang goreng di atasnya.</li>
        </ol>
        <p>Selamat menikmati Ayam Betutu yang segar dan menggugah selera!</p>
        `;
  } else if (food === "lawar") {
    popupTitle.innerHTML = "Resep Lawar";
    popupBody.innerHTML = `
        <strong>Bahan-bahan:</strong>
        <ul>
          <li>250 gr daging ayam tanpa tulang, iris kecil-kecil atau disuwir</li>
          <li>Garam dan merica secukupnya</li>
          <li>Gula secukupnya </li>
          <li>1 sdt air perasan jeruk nipis</li>
          <li>Daun pisang untuk membungkus </li>
          <li> 6 lenjar kacang panjang, potong ukuran 1/2 cm, rebus </li>
          <li>63 gr kelapa parut, sangrai</li>
          <li>6 siung bawang putih, kupas, iris, goreng </li>
          <li>2 buah cabai merah, buang bijinya, potong serong </li>
          <li>5 buah cabai rawit, iris </li>
          <li>3 sdt cabai kering giling Bawang goreng secukupnya untuk hiasan</li>

        </ul>
        <strong>Langkah-langkah:</strong>
        <ol>
          <li> Campurkan kacang panjang, kelapa, bawang merah, bawang putih, cabai, dan bumbu kaldu ayam di dalam mangkuk. Aduk rata. </li>
          <li>Ayam rebus : campurkan suwiran ayam dengan garam dan gula. Aduk rata hingga membentuk semacam adonan. Letakkan memanjang di atas daun pisang, gulung hingga padat. Kukus ayam selama 20 menit. </li>
          <li>Lepaskan daun pisang pembungkus ayam kukus. Potong-potong daging ayam kukus.</li>
          <li>Campurkan daging ayam dengan urap kacang panjang. Tambahkan garam, merica, dan perasan jeruk nipis. </li>
          <li>Sajikan dengan taburan bawang goreng.</li>
        </ol>
        <p>Selamat menikmati Lawar yang segar dan menggugah selera!</p>
        `;
  } else if (food === "sate-rembiga") {
    popupTitle.innerHTML = "Resep Sate Rembiga";
    popupBody.innerHTML = `
          <strong>Bahan-bahan:</strong>
          <ul>
            <li>400 g daging sapi</li>
            <li>100 ml santan kental</li>
            <li>2 sdm kecap manis</li>
            <li>5 buah cabai merah</li>
            <li>10 buah cabai rawit (sesuaikan selera)</li>
            <li>3 siung bawang putih</li>
            <li>3 sdm air asam jawa</li>
            <li>2 butir kemiri</li>
            <li>2 sdm gula merah</li>
            <li>1 sdt garam</li>
            <li1/2 sdt ketumbar bubuk</li>
            <li>1/2 sdt terasi bakar</li>
          </ul>
          <strong>Langkah-langkah:</strong>
          <ol>
            <li>Cuci bersih daging sapi, potong-potong kecil. Marinasi dengan 2 sdm kecap manis, sisihkan.</li>
            <li>Siapkan bumbu halus, campurkan ke dalam daging yang sudah dimarinasi dengan kecap manis.</li>
            <li>Lanjutkan marinasi selama 1 jam, simpan di kulkas.</li>
            <li>Tusuk potongan daging secukupnya pada tusuk sate.</li>
            <li>Panaskan panggangan atau tungku bakar. Bakar sate hingga matang sambil sesekali dioles dengan bumbu.</li>
            <li>Sajikan dengan acar atau irisan mentimun.</li>
          </ol>
          <p>Selamat menikmati Sate Rembiga yang segar dan menggugah selera!</p>
          `;
  } else if (food === "ayam-taliwang") {
    popupTitle.innerHTML = "Resep Ayam Taliwang";
    popupBody.innerHTML = `
            <strong>Bahan-bahan:</strong>
            <ul>
              <li>1 ekor ayam kampung muda</li>
              <li>1 buah jeruk nipis, ambil airnya</li>
              <li>1 sdt garam</li>
              <li>4 sdm minyak sayur</li>
              <li>10 buah cabai keriting</li>
              <li>5 buah cabai merah kering</li>
              <li5 buah cabai rawit merahli>
              <li>2 sdm kencur</li>
              <li>5 butir bawang merah</li>
              <li>3 siung bawang putih</li>
              <li>1 buah tomat merah, potong kecil</li>
              <li>1 sdt gula merah</li>
              <li>1 sdt terasi goreng</li>
              <li>1 sdt garam</li>
              <liJeruk limauli>
              
            </ul>
            <strong>Langkah-langkah:</strong>
            <ol>
              <li> Bagian dada ayam dibelah secara memanjang, kemudian ditekan hingga terbuka. Lipat sayap ayam ke belakang.</li>
              <li>Lumuri ayam dengan perasan jeruk nipis dan garam hingga merata.</li>
              <li>Untuk memasak bumbu, panaskan minyak dan tumis bumbu halus hingga harum dan matang. Setelah itu angkat dan dinginkan.</li>
              <li>Panggang ayam di atas bara api, sambil balik-balik hingga ayam menjadi kaku.</li>
              <li>Oleskan bumbu pada ayam sambil balik-balik beberapa kali hingga daging ayam matang dan bumbunya yang sudah meresap.</li>
              <li> Taruh ayam dalam loyang atau wadah yang sudah diolesi minyak sayur.</li>
              <li>Olesi lagi dengan sisa bumbu dan panggang dalam oven panas selama 20 menit.</li>
              <li>Setelah matang, angkat dan sajikan dengan perasan air jeruk limau dan sambal.</li>
            </ol>
            <p>Selamat menikmati Ayam Taliwang yang segar dan menggugah selera!</p>
            `;
  } else if (food === "sei-sapi") {
    popupTitle.innerHTML = "Resep Sei Sapi";
    popupBody.innerHTML = `
              <strong>Bahan-bahan:</strong>
              <ul>
                <li>Daging sapi bagian has 250 gram</li>
                <li>Bawang putih 2 siung</li>
                <li>Garam secukupnya</li>
                <li>Merica secukupnya</li>
                
              </ul>
              <strong>Langkah-langkah:</strong>
              <ol>
                <li>Pertama, sebelum mulai proses memasak sei sapi, siapkan tungku api terlebih dulu sebab sei sapi tidak dibakar melainkan diasapi. Agar lebih maksimal gunakan kayu kosambi.</li>
                <li>Setelah persiapan tempat memasak selesai, lanjutkan dengan memarinasi daging sapi has menggunakan bawang putih yang sudah dicincang sebelumnya. Daging has ini punya tekstur yang lebih empuk dan mudah untuk diolah.</li>
                <li>Diamkan daging yang sudah dimarinasi selama 15 sampai 20 menit agar bumbu meresap.</li>
                <li>Siapkan tungku untuk proses pengasapan. Perlu diingat, ketika akan memasukkan daging sapi sebaiknya jangan fokus pada seberapa besar apinya. Namun lihat asap yang mulai banyak dan juga semakin panas.</li>
                <li>Jika asap yang dihasilkan dirasa sudah cukup, masukkan daging ke dalam tungku selama satu jam atau disesuaikan dengan potongan dagingnya. Semakin besar potongannya, maka semakin lama waktunya.</li>
                <li>Selain dipotong tipis-tipis, daging sapi juga bisa dipotong dengan utuh (loaf).</li>
                <li> Setelah satu jam, siapkan sayur daun pepaya atau daun singkong dan sambal luat.</li>
              </ol>
              <p>Selamat menikmati Sate Sapi yang segar dan menggugah selera!</p>
              `;
  } else if (food === "jagung-bose") {
    popupTitle.innerHTML = "Resep Jagung Bose";
    popupBody.innerHTML = `
                <strong>Bahan-bahan:</strong>
                <ul>
                  <li>1 liter air</li>
                  <li>800 gr jagung tidak manis, pipil</li>
                  <li>150 gr kacang merah, rendam semalaman</li>
                  <li>300 ml santan dari 1 butir kelapa</li>
                  <li>1/2 sendok teh garam</li>
                  <li>400 gr labu manis, kupas, potong dadu kecil</li>
                  
                </ul>
                <strong>Langkah-langkah:</strong>
                <ol>
                  <li>Rebus air hingga mendidih, lalu masukkan kacang merah, lalu rebus hingga empuk.<li>
                  <li>Tambahkan dengan jagung dan labu manis, rebus hingga semua bahan empuk dan matang.</li>
                  <li>Masukkan santan dan garam, lalu masak kembali hingga kuah menyusut dan empuk, angkat dan sajikan.</li>
                </ol>
                <p>Selamat menikmati Jagung Bose yang segar dan menggugah selera!</p>
                `;
  }

  popup.style.display = "block";
}

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
});
