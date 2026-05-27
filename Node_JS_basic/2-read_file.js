const fs = require('fs');

/**
 * Reads a student database CSV file synchronously and logs stats.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Dosyayı senkron olarak oku
    const data = fs.readFileSync(path, 'utf-8');
    
    // Satırlara böl ve boş satırları temizle
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Başlık satırını (header) kaldır
    const header = lines.shift();
    if (!header) {
      console.log('Number of students: 0');
      return;
    }

    // Karşılaşma sırasını korumak için Map kullanıyoruz veya alanları grupluyoruz
    const fields = {};
    let totalStudents = 0;

    for (const line of lines) {
      const studentData = line.split(',');
      
      // Geçerli bir satır olduğundan emin ol (en az 4 sütun)
      if (studentData.length >= 4) {
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        totalStudents += 1;
      }
    }

    // Toplam öğrenci sayısını yazdır
    console.log(`Number of students: ${totalStudents}`);

    // Testlerin tam eşleşmesi için (Önce CS sonra SWE çıkması adına gerekirse alfabetik sıralayabiliriz)
    const sortedFields = Object.keys(fields);

    for (const field of sortedFields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }

  } catch (error) {
    // Dosya bulunamazsa veya okunamazsa hata fırlat
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
