document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kritikSaranForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nama = document.getElementById('nama').value.trim();
      const penilaian = document.querySelector('input[name="penilaian"]:checked');
      const kritikSaran = document.getElementById('kritikSaran').value.trim();
      const makanan = document.getElementById('makanan').value;
  
      if (!nama || !penilaian || !kritikSaran || !makanan) {
        alert('Harap lengkapi semua kolom sebelum mengirimkan formulir.');
        return;
      }
  
      alert(`Terima kasih, ${nama}, atas masukan Anda!`);
      form.reset();
    });
  });
  